'use client'

import React from 'react'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from './morphing-dialog'
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '../motion-primitives/image-comparison'

type SingleImageProps = {
  type: 'single'
  src: string
  alt: string
}

type ComparisonImageProps = {
  type: 'comparison'
  leftSrc: string
  leftAlt: string
  rightSrc: string
  rightAlt: string
  sliderClassName?: string
}

type MorphingImageDialogProps = {
  trigger: React.ReactNode
  className?: string
} & (SingleImageProps | ComparisonImageProps)

function MorphingImageDialog(props: MorphingImageDialogProps) {
  const { trigger, className } = props
  
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className={className}>
        {trigger}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          {props.type === 'single' ? (
            <img
              src={props.src}
              alt={props.alt}
              className="h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
            />
          ) : (
            <div className="h-[50vh] w-[80vw] max-w-4xl md:h-[70vh] flex items-center justify-center">
              <ImageComparison className="aspect-16/10 w-full rounded-xl">
                <ImageComparisonImage
                  src={props.leftSrc}
                  alt={props.leftAlt}
                  position="left"
                />
                <ImageComparisonImage
                  src={props.rightSrc}
                  alt={props.rightAlt}
                  position="right"
                />
                <ImageComparisonSlider className={props.sliderClassName || 'w-2 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80'}>
                  <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white" />
                </ImageComparisonSlider>
              </ImageComparison>
            </div>
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export { MorphingImageDialog }
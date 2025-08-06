'use client'

import { LayoutBlogPost } from "@/components/ui/layout"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutBlogPost>
      {children}
    </LayoutBlogPost>
  )
}

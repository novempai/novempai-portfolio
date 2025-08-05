type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'MEEC Website',
    description:
      'A community-driven effort to enhance earthquake resilience and structural integrity in Myanmar.',
    link: 'https://meec-web.vercel.app/en',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'AirBurma Web App',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'UI/UX Designer',
    start: '2024',
    end: 'Present',
    link: 'https://novempai-portfolio.vercel.app/',
    id: 'work1',
  },
  {
    company: 'DigitalBase',
    title: 'Lead UI/UX Designer',
    start: '2022',
    end: '2024',
    link: 'https://digitalbase.com.mm',
    id: 'work2',
  },
  {
    company: 'Nexcode',
    title: 'UI/UX Designer',
    start: '2020',
    end: '2024',
    link: 'https://nexcode.com.mm',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/novempai',
  },
  {
    label: 'Dribbble',
    link: 'https://dribbble.com/novempai',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/novempai',
  },
  {
    label: 'Github',
    link: 'https://github.com/novempai',
  },
]

export const EMAIL = 'novempai@email.com'

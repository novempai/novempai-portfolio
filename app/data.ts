type Project = {
  name: string
  description: string
  link: string
  image: string
  cursorText: string
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
    name: 'AirBurma',
    description:
      'A flight ticket booking platform that connects travel agents and customers for easy, affordable bookings.',
    link: '/project/AirBurma',
    image: '/AirBurma/Mockup-dashboard.jpg',
    cursorText: 'View Project',
    id: 'project1',
  },
  {
    name: 'SarPhat',
    description:
      'A space for youth to explore quality, knowledge-based content for personal growth and development.',
    link: '/project/SarPhat',
    image: '/SarPhat/sarphat-logo-bg-yellow.jpg',
    cursorText: 'View Project',
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

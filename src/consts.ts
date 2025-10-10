import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "log1cs's blogs",
  description:
    'insert text here',
  href: 'https://log1cs.github.io',
  author: 'log1cs',
  locale: 'vi-VN',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/log1cs',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/log1cs',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:tuan73176@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://t.me/log1cs',
    label: 'Telegram',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  Telegram: 'lucide:send',
}

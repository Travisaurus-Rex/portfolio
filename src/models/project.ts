export interface Project {
  title: string
  description: Description
  images: Images
  tags: string[]
  github?: GitHubLinks
  slug: string
  live: string
  android?: string
  ios?: string
}

export interface GitHubLinks {
  frontend?: string
  backend?: string
  monorepo?: string
}

export interface Description {
  short: string
  about: string[]
  howItWasBuilt: string[]
  keyFeatures: string[]
}

export interface Images {
  mainDesktop?: string
  mainMobile?: string
  thumbnail?: string
}

export interface Project {
  title: string
  description: Description
  images: Images
  tags: string[]
  github: string
  slug: string
  live: string
  featured: boolean
  android?: string
  ios?: string
}

export interface Description {
  short: string
  about: string[]
  howItWasBuilt: string[]
  keyFeatures: string[]
}

export interface Images {
  mainDesktop: string
  mainMobile: string
  gallery: any[]
  thumbnail: string
}
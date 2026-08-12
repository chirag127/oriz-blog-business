export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'business-blog',
  name: 'The Ledger',
  origin: 'https://business-blog.oriz.in',
  tagline: 'Field notes for founders and freelancers',
  description: 'Field notes for founders and freelancers: validating ideas cheaply, pricing your work, and landing the first ten customers.',
}

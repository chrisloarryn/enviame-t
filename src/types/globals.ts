export interface HeroI {
  id: string
  name: string
  description: string
  modified: Date
  title: string
  url: string
}

// { name, id, url: `${path}.${extension}`, description, modified, title: name }
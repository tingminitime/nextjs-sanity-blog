declare module 'common-types' {
  type PostBase = {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
  }

  interface Reference {
    _ref: string
    _type: 'reference'
  }

  interface Image {
    _type: 'image'
    asset: Reference
  }

  interface Slug {
    _type: 'slug'
    current: string
  }

  interface Span {
    _key: string
    _type: 'span'
    marks: string[]
    text: string
  }

  interface Block {
    _key: string
    _type: 'block'
    children: Span[]
    markDefs: any[]
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
  }

  interface MainImage {
    _type: 'image'
    asset: Reference
  }

  interface Title {
    _type: 'string'
    current: string
  }

  interface Author extends PostBase {
    bio: Block[]
    image: Image
    name: string
    slug: Slug
  }

  interface Category extends PostBase {
    description: string
    title: string
  }

  interface Post extends PostBase {
    author: Author
    body: Block[]
    categories: Category[]
    mainImage: Image
    slug: Slug
    title: string
    description: string
  }
}

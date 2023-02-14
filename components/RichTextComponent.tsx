import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog post Image"
            fill
          ></Image>
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 list-disc space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="py-10 text-4xl font-bold">{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className="py-10 text-3xl font-bold">{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className="py-10 text-2xl font-bold">{children}</h1>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-emphasize py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-emphasize hover:decoration-black"
        >
          {children}
        </Link>
      )
    },
  },
}

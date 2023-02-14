import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`: {
      return S.document().views([
        S.view.form(), // Original `post` form
        S.view
          .component(Iframe)
          .options({
            // Required: Accepts an async function
            // OR a string
            url: `${
              process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
            }/api/preview`,

            // Optional: Set the default size
            defaultSize: `desktop`, // default `desktop`

            // Optional: Add a reload button, or reload on new document revisions
            reload: {
              button: true, // default `undefined`
            },

            // Optional: Pass attributes to the underlying `iframe` element:
            // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
            attributes: {},
          })
          .title('Preview'),
      ])
    }
  }
}

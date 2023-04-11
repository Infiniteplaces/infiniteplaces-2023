const createSanityClient = require('@sanity/client')
const createSanityImageUrlBuilder = require('@sanity/image-url')

const sanityClient = createSanityClient({
  projectId: 'x25blhx4',
  dataset: 'production',
  apiVersion: 'v2021-06-07',
  useCdn: false,
})
//fob5aicq
const sanityImageUrlBuilder = createSanityImageUrlBuilder(sanityClient)

module.exports = {
  sanityClient,
  sanityImageUrlBuilder,
}

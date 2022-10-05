import * as prismic from '@prismicio/client'

export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT

export const client = prismic.createClient(repositoryName!, {
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
})
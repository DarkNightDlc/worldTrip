import * as prismic from '@prismicio/client'

export const repositoryName = "https://spacetravelingdesafiodark.prismic.io/api/v2"

export const client = prismic.createClient(repositoryName, {
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
})
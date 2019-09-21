// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome Blog Starter',
    siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',

    plugins: [
        {
            // Create posts from markdown files
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Post',
                path: 'blog/posts/*.md',
                route: '/blog/:slug',
            }
        },
        {
            use: '@zefman/gridsome-source-instagram',
            options: {
                username: 'divan_raj', // Instagram username
                typeName: 'InstagramPhoto' // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
            }
        }
    ],

    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs'
            ]
        }
    },
}
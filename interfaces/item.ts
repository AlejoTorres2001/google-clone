 type item = {
    kind: string,
    title: string,
    htmlTitle: string,
    link: string,
    displayLink: string,
    snippet: string,
    htmlSnippet:string,
    cacheId: string,
    formattedUrl: string,
    htmlFormattedUrl: string,
    pagemap: {
        cse_thumbnail: [
            {
                src: string,
                width: string,
                height: string
            }
        ],
        metatags: [
            {
                referrer: string,
            }
        ],
        place: [
            {
                image: string,
                name: string,
                description: string
            }
        ],
        cse_image: [
            {
                src: string
            }
        ]
    }
}
export default item
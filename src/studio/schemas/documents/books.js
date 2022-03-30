export default {
    title: "Books",
    name: "books",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Cover",
            name: "cover",
            type: "image"
        },
        {
            title: "Authors",
            name: "authors",
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "person"}]
            }]
        }
    ]
}
export default {
    title: 'Projects',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Year',
            name: 'year',
            type: 'number'
        },
        {
            title: 'Documentation',
            name: 'documentation',
            type: 'array',
            of: [{ type: 'imageCaption' }]
        },
        {
            title: 'Client',
            name: 'client',
            type: 'reference',
            to: [{ type: 'client' }]
        },
        {
            title: 'Collaborators',
            name: 'collaborators',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'collaborator' }]
            }]
        },
        {
            title: 'Preview',
            name: 'preview',
            type: 'imageCaption'
        }
    ]

}
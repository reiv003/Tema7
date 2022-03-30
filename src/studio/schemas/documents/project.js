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
        }
    ]

}
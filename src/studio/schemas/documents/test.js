export default {
    title: 'Vi tester',
    name: 'test',
    type: 'document',
    fields: [
        {
            title: 'Wishes',
            name: 'wishes',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Names',
            name: 'names',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'person'}]
            }]
        },
        {
            title: 'Building type',
            name: 'buildingType',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [
                    {title: 'Condominiums', value: 'condominiums'},
                    {title: 'Office', value: 'value'},
                    {title: 'House', value: 'house'},
                    {title: 'Warehouse', value: 'warehouse'}
                ]
            }
        },
        {
            title: 'Has the movie been released?',
            name: 'released',
            type: 'boolean'
        },
        {
            title: 'Some string',
            name: 'someString',
            type: 'string'
        },
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date'
        },
        {
            title: 'Movie viewed',
            name: 'movieViewed',
            type: 'datetime'
        },
        {
            title: 'Movie scheduler',
            name: 'movieScheduler',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
            }
        },
        {
            title: 'Lecture',
            name: 'lecture',
            type: 'file',
            fields: [
                {
                    title: 'Description',
                    name: 'description',
                    type: 'string'
                },
                {
                    title: 'Teacher',
                    name: 'teacher',
                    type: 'reference',
                    to: {type: 'person'}
                }
            ]
        },
        {
            title: 'Launchpad Location',
            name: 'launchpadLocation',
            type: 'geopoint'
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    title: 'Caption',
                    name: 'caption',
                    type: 'string',
                    options: {
                        isHighlighted: true
                    }
                },
                {
                    title: 'Atribution',
                    name: 'attribution',
                    type: 'string'
                }
            ]
        },
        {
            title: 'Rating',
            name: 'rating',
            type: 'number'
        },
        {
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
                {name: 'streetName', type: 'string', title: 'Street name'},
                {name: 'streetNo', type: 'string', title: 'Street number'},
                {name: 'city', type: 'string', title: 'City'},
                {name: 'zip', type: 'number', title: 'Zip code'},
                {name: 'geolocation', type: 'geopoint', title: 'Geolocation'},
                {name: 'visited', type: 'boolean', title: 'Visited?'},
                {name: 'lastVisited', type: 'date', title: 'Last visited'},

            ]
        },
        {
            name: 'movie',
            type: 'object',
            fields: [
                {
                    title: 'Director',
                    name: 'director',
                    type: 'reference',
                    to: [{type: 'person'}]
                }

            ]
        }
    

    ],

    preview: {
        select: {
            mySubString: 'someString'
        },
        prepare: selection => {
            return {
                title: selection.mySubString,
                subtitle: '2000'
            }
        }
    }
}
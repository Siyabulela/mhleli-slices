export default {
  name: 'person',
  title: 'Slicemasters',
  type: 'document',
  icon: () => '👩🏽‍🍳',
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Who am I',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

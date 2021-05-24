export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon: () => '🌶',
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the Toppings?',
      // icon: ()
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is this vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: ` ${name} ${vegetarian ? '🥦' : ''}`,
    }),
  },
};

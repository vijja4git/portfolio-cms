// schemaTypes/about.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      validation: Rule => Rule.required().max(1000),
    }),
  ],
});
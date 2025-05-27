import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'school',
      title: 'School / University',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Degree / Program',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'startYear',
      title: 'Start Year',
      type: 'string',
    }),
    defineField({
      name: 'endYear',
      title: 'End Year',
      type: 'string',
    }),
    defineField({
      name: 'notes',
      title: 'Notes or Highlights',
      type: 'text',
    }),
  ],
});
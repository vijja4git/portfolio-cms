import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'certification',
  title: 'Certifications',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Certification Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
    }),
    defineField({
      name: 'issueDate',
      title: 'Issue Date',
      type: 'date',
    }),
    defineField({
      name: 'link',
      title: 'Verification Link',
      type: 'url',
    }),
  ],
});
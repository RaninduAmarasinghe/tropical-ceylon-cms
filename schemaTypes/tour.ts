import { defineField, defineType } from "sanity";

export default defineType({
  name: "tour",
  title: "Tour",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tour Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
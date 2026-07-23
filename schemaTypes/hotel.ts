import { defineField, defineType } from "sanity";

export default defineType({
  name: "hotel",
  title: "Hotel",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Hotel Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "location",
      title: "Location",
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
      subtitle: "location",
      media: "image",
    },
  },
});
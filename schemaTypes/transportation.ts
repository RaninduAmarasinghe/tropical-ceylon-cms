import { defineField, defineType } from "sanity";

export default defineType({
  name: "transportation",
  title: "Transportation",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Vehicle Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      media: "image",
    },
  },
});
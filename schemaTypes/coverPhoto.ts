import { defineField, defineType } from "sanity";

export default defineType({
  name: "coverPhoto",
  title: "Cover Photo",
  type: "document",

  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
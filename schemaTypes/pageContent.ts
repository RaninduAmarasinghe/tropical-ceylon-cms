import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",

  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Destinations", value: "destinations" },
          { title: "Hotels", value: "hotels" },
          { title: "Tours", value: "tours" },
          { title: "Transportation", value: "transportation" },
        ],
      },
    }),

    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
    }),
  ],
});
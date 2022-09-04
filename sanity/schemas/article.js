export default {
  name: "article",
  type: "document",
  title: "Articles",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    },
    {
      name: "abstract",
      type: "array",
      title: "Abstract",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "content",
      type: "array",
      title: "Article Content",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    },
    {
      name: "recipe",
      type: "reference",
      title: "Recipe",
      to: [{ type: "recipe" }],
    },
  ],
};

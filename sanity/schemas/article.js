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
      name: "slug",
      type: "slug",
      title: "Slug",
    },
    {
      name: "image",
      type: "image",
      title: "Hero Image",
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
          options: { isHighlighted: true },
        },
      ],
    },
    {
      name: "abstract",
      type: "string",
      title: "Abstract",
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

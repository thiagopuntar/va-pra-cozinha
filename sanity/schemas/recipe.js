export default {
  name: "recipe",
  type: "document",
  title: "Recipes",
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
      name: "avatar",
      type: "image",
      title: "Avatar",
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
    },
    {
      name: "timeToPrepare",
      type: "string",
      title: "Time to prepare",
    },
    {
      name: "serves",
      type: "number",
      title: "Serves",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "recipeCategory" }],
    },
    {
      name: "ingredientSets",
      type: "array",
      title: "Ingredient Sets",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "name",
              title: "Name",
            },
            {
              type: "array",
              name: "ingredients",
              title: "Ingredients",
              options: {
                layout: "tags",
              },
              of: [
                {
                  type: "object",
                  preview: {
                    select: {
                      title: "ingredient.name",
                      amount: "amount",
                      unit: "unit",
                    },
                    prepare({ title, amount, unit }) {
                      return {
                        title,
                        subtitle: `${amount} ${unit}`,
                      };
                    },
                  },
                  fields: [
                    {
                      name: "amount",
                      type: "number",
                      title: "Amount",
                    },
                    {
                      name: "unit",
                      type: "string",
                      title: "Unit",
                      options: {
                        list: [
                          { title: "xic", value: "cup" },
                          { title: "g", value: "g" },
                        ],
                      },
                    },
                    {
                      name: "ingredient",
                      type: "reference",
                      title: "Ingredient",
                      to: [{ type: "ingredient" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "methods",
      type: "array",
      title: "Prepare method",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Title",
              type: "string",
              name: "title",
            },
            {
              title: "Description",
              type: "array",
              name: "description",
              of: [{ type: "block" }],
            },
            {
              title: "Picture",
              type: "image",
              name: "picture",
            },
          ],
        },
      ],
    },
  ],
};

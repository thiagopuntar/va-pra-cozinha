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
                      amount: "siAmount",
                      unit: "siUnit",
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
                      name: "siAmount",
                      type: "number",
                      title: "SI Amount",
                    },
                    {
                      name: "siUnit",
                      type: "string",
                      title: "SI Unit",
                      options: {
                        list: [
                          { title: "g", value: "g" },
                          { title: "L", value: "L" },
                          { title: "mL", value: "mL" },
                        ],
                      },
                    },
                    {
                      name: "homeAmount",
                      type: "number",
                      title: "Homemade Amount",
                    },
                    {
                      name: "homeUnit",
                      type: "string",
                      title: "Homemade Unit",
                      options: {
                        list: [
                          { title: "cc", value: "c. chá" },
                          { title: "ccf", value: "c. café" },
                          { title: "cs", value: "c. sopa" },
                          { title: "1/2 xic", value: "1/2 xic" },
                          { title: "1/3 xic", value: "1/3 xic" },
                          { title: "1/4 xic", value: "1/4 xic" },
                          { title: "xic", value: "xic" },
                          { title: "un", value: "un" },
                          { title: "qb", value: "qb" },
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

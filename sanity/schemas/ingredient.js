export default {
  name: "ingredient",
  type: "document",
  title: "Ingredients",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "cupInGrams",
      type: "number",
      title: "1 cup in grams",
    },
    {
      name: "alternativeNames",
      type: "array",
      title: "Alternative Names",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "restrictions",
      type: "array",
      title: "Restrictions",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Amendoim", value: "peanut" },
              { title: "Castanhas", value: "nuts" },
              { title: "Glúten", value: "gluten" },
              { title: "Soja", value: "soy" },
            ],
          },
        },
      ],
    },
  ],
};

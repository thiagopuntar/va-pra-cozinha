import React from "react";

export type Recipe = {
  title: string;
  avatar: string;
  description: React.ReactElement;
  timeToPrepare: string;
  serves: number;
  ingredientSets: IngredientSet[];
  restrictions: React.ReactElement[];
  categories: Array<{
    name: string;
    url: string;
  }>;
};

export type IngredientSet = {
  name: string;
  ingredients: RecipeIngredient[];
};

type Quantity = {
  amount: number;
  unit: string;
};

export type RecipeIngredient = {
  quantity: {
    si: Quantity;
    homemade: Quantity;
  };
  name: string;
};

export type RecipeCardProps = {
  recipe: Recipe;
};

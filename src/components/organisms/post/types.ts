import { Recipe } from "../recipe/types";

export type PostData = {
  title: string;
  heroImage: {
    url: string;
    caption: string;
  };
  abstract: string;
  content: object[];
  recipe?: Recipe;
};

export type PostProps = {
  post: PostData;
  categories: Category[];
};

export type Category = {
  name: string;
  link: string;
};

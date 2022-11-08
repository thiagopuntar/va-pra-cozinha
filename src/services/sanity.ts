import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Category, PostData } from "../components/organisms/post/types";

const { NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET } =
  process.env;

const client = sanityClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2021-08-31",
});

export const getPostSlugs = (): Promise<string[]> => {
  const query = `*[_type == "article" && defined(slug.current)][].slug.current`;
  return client.fetch(query);
};

export const getCategoriesList = async (): Promise<Category[]> => {
  const query = `*[_type == "recipeCategory"]{
    name,
    link
 }`;
  return client.fetch<Category[]>(query);
};

export const getPostData = async (slug: string): Promise<PostData> => {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    ...,
    recipe->{
      ...,
      "category": category->name,
      ingredientSets[] {
        ...,
        ingredients[] {
          "name": ingredient->name,
          "restrictions": ingredient->restrictions,
          siAmount,
          siUnit,
          homeAmount,
          homeUnit
        }
      }
    }
  }`;
  const sanityData = await client.fetch(query, { slug });
  const image = imageUrlBuilder(client).image(sanityData.image);

  const postData: PostData = {
    abstract: sanityData.abstract,
    content: sanityData.content,
    heroImage: {
      url: image.url(),
      caption: sanityData.image.caption,
    },
    title: sanityData.title,
  };

  return postData;
};

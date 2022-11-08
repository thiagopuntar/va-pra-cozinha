import { getCategoriesList, getPostData, getPostSlugs } from "@services/sanity";
import Post from "@organisms/post";
import { PostProps } from "@organisms/post/types";

export default function PostPage({ post, categories }: PostProps) {
  return <Post post={post} categories={categories} />;
}

export const getStaticPaths = async () => {
  const slugs = await getPostSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPostData(params.slug);
  const categories = await getCategoriesList();
  return {
    props: {
      post,
      categories,
    },
  };
};

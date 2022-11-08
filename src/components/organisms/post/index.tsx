import styled from "styled-components";
import Image from "next/image";
import RichText from "@atoms/rich-text";
import { H1, H2 } from "@atoms/heading";
import Container from "@atoms/container";
import { breakAt } from "@style/global";
import { PostProps } from "./types";

const PostContainer = styled(Container)`
  ${breakAt("md")} {
    display: grid;
    grid-template:
      "article_title blog_title"
      "article aside" auto / 2fr 1fr;
  }
`;

const ArticleContainer = styled.div`
  grid-area: article;
  ${breakAt("md")} {
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const AsideContainer = styled.aside`
  display: none;
  padding: 1em;

  ${breakAt("md")} {
    display: block;
    grid-area: aside;
  }

  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  grid-area: article_title;
  padding: 1.5em 3em;

  ${breakAt("md")} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const BlogTitle = styled.h1`
  display: none;
  padding: 1em;

  ${breakAt("md")} {
    display: flex;
    text-align: center;
    align-items: center;
    grid-area: blog_title;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Categories = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 0.5em;

  & li::after {
    margin-left: 0.5em;
    content: "/";
  }

  & li:last-child::after {
    content: "";
  }
`;

const Post = ({ post, categories = [] }: PostProps) => (
  <PostContainer>
    <TitleContainer>
      <H1>{post.title}</H1>
      <H2>{post.abstract}</H2>
    </TitleContainer>
    <ArticleContainer>
      <Image
        src={post.heroImage.url}
        alt={post.heroImage.caption}
        width="450"
        height="500"
        objectFit="cover"
      />
      <RichText data={post.content} />
    </ArticleContainer>
    <BlogTitle>A food blog with fresh, zesty recipes.</BlogTitle>
    <AsideContainer>
      <h2>Search Recipes</h2>
      <Categories>
        {categories.map(({ link, name }) => (
          <li key={name}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </Categories>
    </AsideContainer>
  </PostContainer>
);

export default Post;

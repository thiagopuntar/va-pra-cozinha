import styled from "styled-components";
import Image from "next/image";
import RichText from "@atoms/rich-text";
import { H1, H2 } from "@atoms/heading";
import CrossContainer from "@molecules/cross-container";
import { PostProps } from "./types";

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

const Post = ({ post, categories = [] }: PostProps) => {
  const PostTitle = (
    <>
      <H1>{post.title}</H1>
      <H2>{post.abstract}</H2>
    </>
  );

  const Aside = (
    <>
      <h2>Search Recipes</h2>
      <Categories>
        {categories.map(({ link, name }) => (
          <li key={name}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </Categories>
    </>
  );

  return (
    <CrossContainer
      topLeft={PostTitle}
      topRight={<h2>A food blog with fresh, zesty recipes.</h2>}
      aside={Aside}
    >
      <>
        <Image
          src={post.heroImage.url}
          alt={post.heroImage.caption}
          width="450"
          height="500"
          objectFit="cover"
        />
        <RichText data={post.content} />
      </>
    </CrossContainer>
  );
};

export default Post;

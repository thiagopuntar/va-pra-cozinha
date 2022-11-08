import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";

type RichTextProps = {
  data: any;
};

const GenericImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);

  return (
    <Image
      src={urlBuilder({
        projectId: String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
        dataset: String(process.env.NEXT_PUBLIC_SANITY_DATASET),
      })
        .image(value)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.caption}
      width={width}
      height={height}
      objectFit="contain"
    />
  );
};

const additionalComponents = {
  types: {
    image: GenericImageComponent,
  },
};

const RichText = ({ data }: RichTextProps) => (
  <PortableText value={data} components={additionalComponents} />
);

export default RichText;

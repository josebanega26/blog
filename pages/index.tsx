import Head from "next/head";
import { getPosts } from "../utils/API";
import { RemoteNew } from "../types";
import { DetailedInfo, ImageContainer, Title } from "@/components/index.js";
import { Info } from "@/components/Card/Card.style";
interface HomeProps {
  post: RemoteNew;
}
export default function Home({ post }: HomeProps) {
  const { image, title , description} = post;
  return (
    <div>
      <Head>
        <title>Blog App</title>
        <meta name="description" content="Blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Title>Welcome to Blog App</Title>
        <ImageContainer>
          <img src={image} alt={title} />
          <DetailedInfo>
            <Info>
              <h3>{title}</h3>
              <p>{description}</p>
            </Info>
          </DetailedInfo>
        </ImageContainer>
      </section>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await getPosts();
  return { post: res[0] };
};

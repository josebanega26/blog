import CardList from "@/components/CardList/index";
import { getPosts } from "utils/API";
import { RemoteNew } from "../../types";

interface LatestProps {
  posts: RemoteNew[];
}
const Latest = ({ posts = [] }: LatestProps) => {
  return (
    <div>
      <CardList list={posts}></CardList>
    </div>
  );
};

export default Latest;

Latest.getInitialProps = async () => {
  const res = await getPosts();
  return { posts: res };
};

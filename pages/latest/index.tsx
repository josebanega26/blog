import { useEffect, useState } from "react";
import CardList from "@/components/CardList/index";
import { getPosts } from "utils/API";
import { RemoteNew } from '../../types';

const Latest = () => {
  const [posts, setPosts] = useState<RemoteNew[]>([]);
  useEffect(() => {
    getPosts().then((response: RemoteNew[]) => {
      setPosts(response);
    });
  }, []);

  return (
    <div>
      <CardList list={posts}></CardList>
    </div>
  );
};

export default Latest;

import { useContext } from "react";
import { AppContext } from "../../context/index";
import CardList from "@/components/CardList/index";

const Related = () => {
  const {
    state: { localPosts },
  } = useContext(AppContext);

  return (
    <div>
      <CardList list={localPosts} isLocal></CardList>
    </div>
  );
};

export default Related;

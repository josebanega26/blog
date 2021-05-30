import React from "react";
import { RemoteNew, LocalNew } from "types";
import Card from "@/components/Card";
import { ListContainer } from "./CardList.style";

interface CardListProps {
  list: RemoteNew[] | LocalNew[];
  isLocal?: boolean;
}

// I don't recommend use the index as Key but I don't have an ID from remote and the list is never reordered or filtered. So it works
const CardList = ({ list, isLocal = false }: CardListProps) => {
  return (
    <ListContainer>
      {list.map((props: RemoteNew | LocalNew, key: React.Key) => {
        return <Card key={key} card={props} isLocal={isLocal}></Card>;
      })}
    </ListContainer>
  );
};

export default CardList;

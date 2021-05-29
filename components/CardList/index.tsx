import React from "react";
import { RemoteNew, LocalNew } from "types";
import Card from "@/components/Card";
import { ListContainer } from "./CardList.style";

interface CardListProps {
  list: RemoteNew[] | LocalNew[];
  isLocal: boolean;
}

const CardList = ({ list, isLocal }: CardListProps) => {
  return (
    <ListContainer>
      {list.map(({ title, ...rest }) => {
        return <Card key={title} {...rest} title={title} isLocal={isLocal}></Card>;
      })}
    </ListContainer>
  );
};

export default CardList;

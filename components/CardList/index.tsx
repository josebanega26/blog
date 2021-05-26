import React from "react";
import { RemoteNew } from "types";
import Card from "@/components/Card";
import { ListContainer } from "./CardList.style";

interface CardListProps {
  list: RemoteNew[];
}

const CardList = ({ list }: CardListProps) => {
  return (
    <ListContainer>
      {list.map(({ title, ...rest }) => {
        return <Card key={title} {...rest} title={title}></Card>;
      })}
    </ListContainer>
  );
};

export default CardList;

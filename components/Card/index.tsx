import React from "react";
import { RemoteNew } from "types";
import dayjs from "dayjs";
import { CardContainer, ImageContainer, InfoContainer } from "./Card.style";

const Card = ({ title, image, description, publishedAt, url }: RemoteNew) => {
  const date = dayjs(publishedAt).format("MMM DD, YYYY");
  return (
    <CardContainer>
      <InfoContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <span>{date}</span>
        </div>
      </InfoContainer>
      <ImageContainer>
        <img src={image} alt={description} />
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;

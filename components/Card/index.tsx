import { useContext } from "react";
import { RemoteNew, LocalNew } from "types";
import dayjs from "dayjs";
import { CardContainer, ImageContainer, InfoContainer } from "./Card.style";
import { Button, ButtonList } from "@/components/index";
import { AppContext } from "context";
import { deletePost, selectPost } from "context/action";
import { useRouter } from "next/router";

interface CardProps {
  card: RemoteNew | LocalNew;
  isLocal: boolean;
}
const Card = ({ isLocal, card }: CardProps) => {
  const { title, image, description, publishedAt } = card;
  const { id, author } = card as LocalNew
  const router = useRouter();
  const { dispatch } = useContext(AppContext);

  const removePost = () => {
    dispatch(deletePost(id));
  };

  const goToEdit = () => {
    dispatch(selectPost({ ...card as LocalNew}))
    router.push({
      pathname: "/related/add",
      query: { edit: id },
    });
  };
  const date = dayjs(publishedAt).format("MMM DD, YYYY");

  return (
    <CardContainer>
      <InfoContainer>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>
            {author && <span>By {author} - </span>}
            <span>{date}</span>
          </div>
        </div>
        {isLocal && (
          <ButtonList>
            <Button onClick={goToEdit}>Edit</Button>
            <Button onClick={removePost}> Delete </Button>
          </ButtonList>
        )}
      </InfoContainer>
      <ImageContainer>
        <img src={image} alt={description} />
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;

import { ChangeEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LocalNew } from "../../types";
import { useState } from "react";
import { validateImgExtension } from "utils";
import {
  Button,
  Input,
  TextArea,
  Label,
  ButtonList,
} from "@/components/index.js";
import { useRouter } from "next/router";
import {
  ErrorMessage,
  Form,
  LeftPanelContainer,
  RightPanelContainer,
} from "./PostForm.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
const defaultImg = "http://via.placeholder.com/600x300";

const schema = yup.object().shape({
  title: yup.string().required().min(5 ),
  content: yup.string().required().min(20),
  author: yup.string().required(),
  description: yup.string().required().min(5),
});

interface PostFormProps {
  handlerSubmit: (newPost: LocalNew) => void;
  edit: boolean;
  initialValues: LocalNew | undefined;
}
const PostForm = ({ handlerSubmit, edit, initialValues }: PostFormProps) => {
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LocalNew>({
    defaultValues: edit ? initialValues : {},
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // This work when the user comes from another another page with the URL
    if (initialValues) {
      Object.entries(initialValues).forEach(([keys, values]) => {
        setValue(keys as any, values);
      });
    }
  }, [initialValues]);

  const goBack = () => {
    router.back();
  };
  const onSubmit = handleSubmit((data) => {
    const publishedAt = dayjs().format();
    const id = edit ? initialValues!.id : uuidv4();
    const image = data?.image || defaultImg;
    const newPost = { ...data, publishedAt, id, image } as LocalNew;
    handlerSubmit(newPost);
  });

  const [imgUrl, setImgUrl] = useState();

  const onChangeImage = (event: ChangeEventHandler<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = (event.target as HTMLInputElement)?.files[0];

    if (validateImgExtension(file)) {
      reader.onloadend = () => {
        const imgUrl = reader!.result;
        setImgUrl(imgUrl);
        setValue("image", imgUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <LeftPanelContainer>
          <Label>Title</Label>
          <Input {...register("title")} />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
          <Label>Content</Label>
          <TextArea {...register("content")} />
          <ErrorMessage>{errors.content?.message}</ErrorMessage>
          <Label>Description</Label>
          <Input {...register("description")} />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
          <Label>Author</Label>
          <Input {...register("author")} />
          <ErrorMessage>{errors.author?.message}</ErrorMessage>
          <ButtonList>
            <Button type="button" onClick={goBack}>
              Cancel
            </Button>
            <Button type="submit">{`${!edit ? "Create" : "Edit"} Post`}</Button>
          </ButtonList>
        </LeftPanelContainer>
        <RightPanelContainer>
          {/* <Input type="file" name="imgUrl" onChange={onChangeImage} />
          {imgUrl && <img src={imgUrl} alt="" />} */}
        </RightPanelContainer>
      </Form>
    </div>
  );
};

export default PostForm;

import React, { ChangeEventHandler } from "react";
import { useForm } from "react-hook-form";
import { LocalNew } from "../../types";
import { useState } from "react";
import { validateImgExtension } from "utils";
import { Button, Input, TextArea, Label } from "@/components/index.js";
import {
  Form,
  LeftPanelContainer,
  RightPanelContainer,
} from "./PostForm.style";
const PostForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LocalNew>();
  const onSubmit = handleSubmit((data) => console.log(data));
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
          <Label>Content</Label>
          <TextArea {...register("content")} />
          <Label>Description</Label>
          <Input {...register("description")} />
          <Label>Author</Label>
          <Input {...register("author")} />
          <Button type="submit">Create Post</Button>
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

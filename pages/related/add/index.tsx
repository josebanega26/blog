import { useContext, useEffect } from "react";
import PostForm from "../../../components/PostForm/index";
import { LocalNew } from "types";
import { AppContext } from "context";
import { useRouter } from "next/router";
import { cleanSelectPost, selectPost , createPost, updatePost} from "../../../context/action";

const AddPost = () => {
  const router = useRouter();
  const editId = router.query.edit;
  const {
    state: { selectedPost, localPosts },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (!selectedPost && editId) {
      const getSelectedFromParams = localPosts.find(({ id }) => id === editId);
      if (getSelectedFromParams) {
        dispatch(selectPost(getSelectedFromParams));
      }
      else {
        router.push('/related')
      }
    }
    return () => {
      dispatch(cleanSelectPost());
    };
  }, [router.query.edit]);

  const handlerSubmit = ((post: LocalNew ) => {
    console.log(post)
    if (!editId) {
      dispatch(createPost(post))
    }
    else {
      dispatch(updatePost(post))
    }
    router.push('/related')
  });
  return (
    <div>
      <PostForm
        handlerSubmit={handlerSubmit}
        edit={!!editId}
        initialValues={selectedPost}
      ></PostForm>
    </div>
  );
};

export default AddPost;

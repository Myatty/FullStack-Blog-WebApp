/* eslint-disable no-unused-vars */
import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";

const Details = () => {
  const post = useRouteLoaderData("post-detail");
  console.log(post);

  return (
    <>
        <PostDetails post={post}/>
    </>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8000/posts/${params.id}`);

  if (response.ok) {
    const data = await response.json();
    return data.post;
  } else {
    //
  }
};

export const action = async({request, params}) => {

  const response = await fetch(`http://localhost:8000/posts/${params.id}`,{
    method: request.method
  })

  if(!response.ok){
    throw new Error("Something went Wrong with your Request!");
  }
  return redirect("/");
}
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  // console.log(ids);
  return ids;
}

const DetailPage = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  const post = await res.json();
  return (
    <div>
      <div
        key={post.id}
        className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>Des: {post.description}</p>
          <p>Likes: {post.likeCount}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn btn-primary">Back Post</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

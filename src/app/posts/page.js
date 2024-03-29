import Link from 'next/link';
import React from 'react';
import styles from "./Posts.module.css"


const PostPage =async () => {
        const res = await fetch('http://localhost:5000/posts',{
            cache : "no-store"
        })
        const posts = await res.json()

    return (
        <div className='w-full'>
            <h2 className={styles.header_text}>Total Number of post :{posts.length} </h2>
            {
                posts.map((post) => (
                    <div key={post.id} className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>Des: {post.description}</p>
                            <p>Likes: {post.likeCount}</p>
                            <div className="card-actions justify-end">
                            <Link href={`/posts/${post.id}`}>
                            <button className="btn btn-primary">See Detail</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostPage;
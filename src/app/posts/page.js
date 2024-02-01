import React from 'react';

const PostPage =async () => {
        const res = await fetch('http://localhost:5000/posts',{
            cache : "no-store"
        })
        const posts = await res.json()

    return (
        <div className='w-full'>
            <h2>Total post :{posts.length} </h2>
            {
                posts.map((post) => (
                    <div key={post.id} className="card bg-gray-100 shadow-xl my-5 w-[70%] mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>Des: {post.description}</p>
                            <p>Likes: {post.likeCount}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostPage;
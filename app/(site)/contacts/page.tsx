import React from 'react';
// import {createPost, deletePost, updatePost} from "@/app/actions/actions";
import prisma from "@/app/lib/db";

export default function Contacts() {
    // const posts = await prisma.posts.findMany();

  return (
      <div className="flex flex-col gap-5 grow w-full justify-center items-center">
          <h1>Contacts US</h1>
          {/*<div className='flex flex-col gap-3 border-2'>{posts.map(post => {*/}
          {/*    return (*/}
          {/*        <div className='flex flex-row gap-3' key={post.id}>*/}
          {/*            <span>{post.id}</span>*/}
          {/*            <h2>{post.title}</h2>*/}
          {/*            <p>{post.content}</p>*/}
          {/*        </div>*/}
          {/*    )*/}
          {/*})}</div>*/}
          {/*<div className='flex flex-row gap-3 border-2'>*/}
          {/*    <form className='flex flex-row gap-3 items-start' action={createPost}>*/}
          {/*        <input type="text" name="title" placeholder="Title"/>*/}
          {/*        <textarea name="content" rows={5} placeholder="Content"/>*/}
          {/*        <button type="submit">SEND</button>*/}
          {/*    </form>*/}
          {/*</div>*/}
          {/*<div className='flex flex-row gap-3 border-2'>*/}
          {/*    <form className='flex flex-row gap-3 items-start' action={updatePost}>*/}
          {/*        <input type="text" name="id" placeholder="ID"/>*/}
          {/*        <textarea name="content" rows={5} placeholder="Content"/>*/}
          {/*        <button type="submit">SEND</button>*/}
          {/*    </form>*/}
          {/*</div>*/}
          {/*<div className='flex flex-row gap-3 border-2'>*/}
          {/*    <form action={deletePost}>*/}
          {/*        <input type="text" name="id" placeholder="ID"/>*/}
          {/*        <button type="submit">SEND</button>*/}
          {/*    </form>*/}
          {/*</div>*/}

      </div>
  );
}

import { useState } from "react";
import { PostList } from "../components/PostList";
import { SideMenu } from "../components/SideMenu";

export const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <h1 className='mb-8 text-2xl'>Desarrollador Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='bg-blue-800 md:hidden text-white px-4 py-2 rounded-2xl mb-4'
      >
        {open ? "Cerrar" : "Filtros y Buscar"}
      </button>
      <div className='flex flex-col-reverse gap-8 md:flex-row'>
        <div className=''>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

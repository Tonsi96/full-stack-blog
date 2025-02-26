import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

export const Write = () => {
  
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    if (isSignedIn && !isLoaded) {
      return <div>Inicia sesión</div>;
    }

    return (
      <div className='h-[calc(100vh-64px)] md:h-[]calc(100vh-80px) flex flex-col gap-6'>
        <h1 className='text-cl font-light'>Crea un nuevo Post</h1>
        <form className='flex flex-col gap-6 flex-1 mb-6'>
          <button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white'>Añadir imagen</button>
          <input className='text-4xl font-semibold bg-transparent outline-none' type='text' placeholder='Mi asombrosa historia' />
          <div className='flex items-center gap-4'>
            <label htmlFor='' className='text-sm'>Elige una categoria</label>
            <select name='cat' id='' className='p-2 rounded-xl bg-white shadow-md'>
              <option value='general'>General</option>
              <option value='web-desing'>Diseño web</option>
              <option value='development'>Desarrollador</option>
              <option value='databases'>Base de Datos</option>
              <option value='seo'>Buscar Ingenieros</option>
              <option value='marketin'>Marketing</option>
            </select>
          </div>
          <textarea className='p-4 rounded-xl bg-white shadow-md' name='desc' placeholder='Una breve descripcion' />
          <ReactQuill theme='snow'className='flex-1  rounded-xl bg-white shadow-md' />
          <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Enviar</button>
        </form>
      </div>
    );
  };

// export default Write

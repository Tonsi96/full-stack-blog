import { CiBookmark, CiTrash } from 'react-icons/ci';

export const PostMenuActions = () => {
  return (
    <div className=''>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Acciones</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <CiBookmark />
        <span>Guardar este Post</span>
      </div>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <CiTrash />
        <span>Eliminar este Post</span>
      </div>
    </div>
  );
};

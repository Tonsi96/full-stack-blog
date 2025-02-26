import { CiSearch } from "react-icons/ci";


export const Search = () => {
  return (
    <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
      <CiSearch />
      <input type="text" placeholder="buscar un post..." className="bg-transparent" />
    </div>
  )
}

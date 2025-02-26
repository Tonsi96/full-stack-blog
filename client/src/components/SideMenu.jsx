import { Link } from "react-router-dom";
import { Search } from "./Search";

export const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Buscar</h1>
      <Search />
      <h1 className='mb-4 mt-8 text-sm font-medium'>Filtros</h1>
      {/* <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value='newest' className='form-checkbox' />
          Mas nuevo
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value='popular' className='form-checkbox' />
          Mas popular
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value='trending' className='form-checkbox' />
          Tendencia
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" value='oldest' className='form-checkbox' />
          Mas antiguo
        </label>
      </div> */}
      <div className='flex flex-col gap-2 text-sm'>
        {[
          { value: "newest", label: "Mas nuevo" },
          { value: "popular", label: "Mas popular" },
          { value: "trending", label: "Tendencia" },
          { value: "oldest", label: "Mas antiguo" },
        ].map(({ value, label }) => (
          <label key={value} className='flex items-center gap-2 cursor-pointer'>
            <input type='checkbox' value={value} className='form-checkbox' />
            {label}
          </label>
        ))}
      </div>
      <h1 className='mb-4 mt-8 text-sm font-medium'>Categorias</h1>
      <div className='flex flex-col gap-2 text-sm'>
        <Link className='underline' to='/posts'>
          Todos
        </Link>
        <Link className='underline' to='/posts?cat=web-design'>
          Diseño Web
        </Link>
        <Link className='underline' to='/posts?cat=development'>
          Development
        </Link>
        <Link className='underline' to='/posts?cat=databases'>
          Databases
        </Link>
        <Link className='underline' to='/posts?cat=seo'>
          Search Engines
        </Link>
        <Link className='underline' to='/posts?cat=maketing'>
          Marketing
        </Link>
      </div>
    </div>
  );
};

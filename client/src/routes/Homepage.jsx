import { Link } from "react-router-dom"
import { FeaturedPost, MainCategories, PostList } from "../components"

export const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4 '>
      {/* Breadcrumb */}
      <div className="flex gap-4">
        <Link to="/">Inicio</Link>
        <span>-</span>
        <span className="text-blue-800">Blogs y Articulos</span>
      </div>
      {/* Introduction */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, provident! Maxime molestias assumenda iste a error corporis vitae eaque natus. Velit a ducimus esse, dicta ullam voluptatum pariatur facilis corporis!</p>
        </div>
        {/* animated button  */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1-150, 0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">Escribe tu historia &nbsp;*</textPath>
              <textPath href="#circlePath" startOffset="50%">Comparte tu idea &nbsp; * </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6"/>
                <polyline points="9 6 18 6 18 15"/>
            </svg>
          </button>
        </Link>
      </div>
      {/* categories  */}
      <MainCategories/>
      {/* Featured post */}
      <FeaturedPost/>
      {/* Post list*/}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Post</h1>
        <PostList/>
      </div>
    </div>
  )
}

// export default Homepage
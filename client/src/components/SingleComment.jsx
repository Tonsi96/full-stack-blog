import Image from './Image'

export const SingleComment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className='flex items-center gap-4'>
        <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40'/>
        <span className='font-medium'>Gaston Pizarro </span>
        <span className='text-sm text-gray-500'>hace 2 dìas</span>
      </div>
      <div className=''>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam amet, placeat totam nulla aperiam, sed cum magnam saepe voluptates corrupti dolor! Totam ex culpa, dolore ab facilis quis esse consequuntur.</p>
      </div>
    </div>
  )
}

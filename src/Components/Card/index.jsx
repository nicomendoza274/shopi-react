import { PlusIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
  const record = data.data
  const context = useContext(ShoppingCartContext)
  const addCount = () => context.setCount(context.count + 1)
  const openDetail = () => context.openProductDetail()
  
  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={openDetail}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{record.category?.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={record.images[0]} alt={record.title} />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={addCount}
        >
          <PlusIcon className='h-6 w-6 text-black'/>
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light truncate mr-2">{record.title}</span>
        <span className="text-lg font-medium">${record.price}</span>
      </p>
    </div>
  )
}

export default Card
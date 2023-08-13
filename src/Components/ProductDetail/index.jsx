import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const isProductDetailOpen = context.isProductDetailOpen
  const closeProductDetail = () => context.closeProductDetail()
  return (
    <aside 
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={closeProductDetail}>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
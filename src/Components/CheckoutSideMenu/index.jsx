import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const isCheckoutSideMenuOpen = context.isCheckoutSideMenuOpen
  const closeCheckoutSideMenu = () => context.closeCheckoutSideMenu()
  console.log('CART', context.cartProducts)

  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className='cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
        </div>
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map((product) =>(
            <OrderCard
              key={product.id}
              title={product.title} 
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
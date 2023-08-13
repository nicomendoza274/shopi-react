import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const isCheckoutSideMenuOpen = context.isCheckoutSideMenuOpen
  const closeCheckoutSideMenu = () => context.closeCheckoutSideMenu()

  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div className='cursor-pointer' onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>

    </aside>
  )
}

export default CheckoutSideMenu
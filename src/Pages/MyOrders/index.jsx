import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import Layout from '../../Components/Layout'

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    console.log(context.order)
    return (
      <Layout>
        <div className='flex items-center justify-center w-80 relative'>
          <h1>MyOrders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                totalPrice={order.totalPrice } 
                totalProducts={order.totalProducts}/>
            </Link>
            ))
        }
      </Layout>
    )
  }
  
export default MyOrders
  
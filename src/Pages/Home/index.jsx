import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'

const Home = () => {
    
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
      const items = context.filteredItems 
      

      if (items?.length > 0) {
        return (
          items?.map(
            (item) => (<Card key={item.id} data={item} />)
          )
        )
      } else {
        return (
          <p className='font-medium text-xl'> No result Found </p>
        )
      }
    }

    return (
      <Layout>
        <div className='flex items-center justify-center w-80 relative mb-4'>
          <h1 className='font-medium text-xl'>Exclusive products</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search a product' 
          className='border border-black rounded-lg w-80 p-3 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value) }
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    )
  }
  
  export default Home
  
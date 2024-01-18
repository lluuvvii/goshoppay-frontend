import Product from "@/components/Product"

const Home = async () => {
  return (
    <div className='bg-gray-300'>
      <div className='flex justify-center items-center'>
        <h1>HOME</h1>
      </div>
      <Product />
    </div>
  )
}

export default Home
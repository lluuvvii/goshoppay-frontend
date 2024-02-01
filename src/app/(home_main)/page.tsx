import Footer from "@/components/Footer"
import Product from "@/components/Product"

const Home = async () => {
  return (
    <div className='bg-gray-300'>
      <div className='flex justify-center items-center'>
        <h1>HOME</h1>
      </div>
      <section>
        <Product />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home
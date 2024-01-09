import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex bg-color-secondary'>
    <Link href='/' className='pl-4'>
      <h1 className='font-bold text-white'>GOSHOPPAY</h1>
    </Link>
  </nav>
  )
}

export default Navbar
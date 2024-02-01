import Link from 'next/link'
import SignInButton from './SignInButton'

const Navbar = () => {

  return (
    <nav className='flex flex-wrap justify-between w-full items-center bg-color-primary p-4'>
      {/* Logo */}
      <Link href='/'>
        <div className='text-white text-2xl font-bold'>
          GOSHOPPAY
        </div>
      </Link>

      {/* Sign In Button */}
      <SignInButton />
    </nav>
  )
}

export default Navbar
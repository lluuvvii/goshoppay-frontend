import Link from 'next/link'
import SignInButton from './SignInButton'

const Navbar = () => {

  return (
    <nav className='bg-color-primary p-4 flex justify-between items-center'>
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
import Link from 'next/link'
import SignInButton from './SignInButton'
import { userAuthSession } from '@/libs/authSession'

const Navbar = async () => {
  const user = await userAuthSession()

  console.log(user)

  return (
    <nav className='bg-color-primary p-4 flex justify-between items-center'>
      {/* Logo */}
      <Link href='/'>
        <div className='text-white text-2xl font-bold'>
          GOSHOPPAY
        </div>
      </Link>

      {/* Sign In Button */}
      <SignInButton user={user} />
    </nav>
  )
}

export default Navbar
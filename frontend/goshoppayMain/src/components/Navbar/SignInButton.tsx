'use client'

import { signIn, signOut } from 'next-auth/react'

const SignInButton = ({ user }: any) => {
  return (
    <>
      {user ?
        <>
          {user?.name}
          <button onClick={() => signOut()} className='transition-all duration-300 ease-in-out bg-white border border-color-primary hover:border-white text-color-primary px-4 py-2 rounded-md font-bold hover:bg-color-primary hover:text-white'>
            <h1>Sign Out</h1>
          </button>

        </>
        :
        <button onClick={() => signIn()} className='transition-all duration-300 ease-in-out bg-white border border-color-primary hover:border-white text-color-primary px-4 py-2 rounded-md font-bold hover:bg-color-primary hover:text-white'>
          <h1>Sign In</h1>
        </button>
      }
    </>
  )
}

export default SignInButton
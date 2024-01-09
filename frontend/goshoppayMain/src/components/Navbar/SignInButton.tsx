'use client'

import { signIn, signOut } from 'next-auth/react'

const SignInButton = ({ user }: any) => {
  return (
    <>
      {user ?
        <>
          {user?.email}
          <button onClick={() => signOut()} className='bg-white text-color-secondary px-4 py-2 rounded font-bold'>
            <h1>Sign Out</h1>
          </button>

        </>
        :
        <button onClick={() => signIn()} className='bg-white text-color-secondary px-4 py-2 rounded font-bold'>
          <h1>Sign In</h1>
        </button>
      }
    </>
  )
}

export default SignInButton
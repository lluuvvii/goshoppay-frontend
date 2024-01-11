'use client'

import { signIn, signOut, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'

const SignInButton = ({ user }: any) => {
  const [providers, setProviders] = useState<any | null>(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [])

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
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button key={provider.name} onClick={() => signIn(provider.id)} className='transition-all duration-300 ease-in-out bg-white border border-color-primary hover:border-white text-color-primary px-4 py-2 rounded-md font-bold hover:bg-color-primary hover:text-white'>
                <h1>Sign In</h1>
              </button>
            ))
          }
        </>
      }
    </>
  )
}

export default SignInButton
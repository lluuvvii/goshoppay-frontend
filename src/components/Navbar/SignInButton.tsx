'use client'

import Image from 'next/image'
import { useSession, signIn, signOut, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'

const SignInButton = () => {
  const [providers, setProviders] = useState<any | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <>
      {session ?
        <>
          {session?.user?.name}
          <button type='button' onClick={() => signOut()} className='transition-all duration-300 ease-in-out bg-white border border-color-primary hover:border-white text-color-primary px-4 py-2 rounded-md font-bold hover:bg-color-primary hover:text-white'>
            <h1>Sign Out</h1>
          </button>
          <Image src={session?.user?.image as string} alt='Profile' width={37} height={37} className='rounded-full' />
        </>
        :
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='transition-all duration-300 ease-in-out bg-white border border-color-primary hover:border-white text-color-primary px-4 py-2 rounded-md font-bold hover:bg-color-primary hover:text-white'>
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
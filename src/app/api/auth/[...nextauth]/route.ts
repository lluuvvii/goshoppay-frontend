import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: 'https://accounts.google.com/o/oauth2/auth?prompt=select_account'
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }: any) {
      try {
        // send to http://localhost:4000/api/user
        const response = await fetch('http://localhost:4000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ profile }),
        })

        if (response.ok) {
          return true
        }
        console.error('Failed to send profile to server')
        return false
      } catch (err) {
        console.error(err)
        return false
      }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
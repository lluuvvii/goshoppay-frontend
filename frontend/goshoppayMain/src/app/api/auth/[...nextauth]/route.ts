import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: ''
    })
  ]
}

export { authOptions }
export default NextAuth(authOptions)
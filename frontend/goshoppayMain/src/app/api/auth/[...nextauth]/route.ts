import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import User from '../../../../../../../backend/models/user'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }: any) {
      try {
        const userExists = await User.findOne({ email: profile.email })

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture
          })
        }

        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
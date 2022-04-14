import NextAuth from "next-auth";
import FacebookProvider from 'next-auth/providers/facebook'

/*
 Documentation next-auth
 https://next-auth.js.org/
 https://next-auth.js.org/getting-started/example
*/

// This will handle the facebook login for us
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID, // load the environnement variable from .env
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})
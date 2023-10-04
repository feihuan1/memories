import { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import NextAuth from 'next-auth/next'



const authOptions : AuthOptions = {
    providers : [
        GithubProvider({
            clientId: process.env.GITHUB_APP_CLIENT_ID!,
            clientSecret: process.env.GITHUB_APP_CLIENT_SECRET!
        })
    ],
    callbacks : {
        async session({session, token} : any) {
            session.user.name = `${session?.user?.name}_${token?.sub}` 

            return session
        }
    },
    secret: process.env.JWT_SECRET
}

const nextAuth = NextAuth(authOptions)

export { nextAuth as GET, nextAuth as POST };
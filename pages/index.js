import Head from 'next/head';
import Header from '../components/Header';
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../components/Login';

export default function Home() {
  const { data: session } = useSession()
  // If there is no session we return a Login component
  if(!session) {
    return <>
      <Login/>
    </>
  }
  // Otherwise we return the app itself
  return (
    <div>
      <Head>
        <title>Facebook App</title>
      </Head>
      {/* Header section*/}
      <Header/>
      <main>
        {/* Sidebar section*/}
        {/* Feed section*/}
        {/* Widgets section */}
      </main>
    </div>
  )
}

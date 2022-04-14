import Head from 'next/head';
import Header from '../components/Header';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  // If there is no session we return a Login component
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  // Otherwise we retunr the app itself
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

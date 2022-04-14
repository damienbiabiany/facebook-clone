import Head from 'next/head';
import Header from '../components/Header';
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../components/Login';
import SideBar from '../components/SideBar';

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
    <div className="h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Facebook App</title>
      </Head>
      {/* Header section*/}
      <Header/>
      <main className='flex'>
        {/* Sidebar section*/}
        <SideBar/>
        {/* Feed section*/}
        {/* Widgets section */}
      </main>
    </div>
  )
}

import Head from 'next/head';
import Header from '../components/Header';
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../components/Login';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

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
    <div className="h-screen overflow-hidden bg-gray-100 app--component">
      <Head>
        <title>Facebook App</title>
      </Head>
      {/* Header section*/}
      <Header/>
      <main className='flex'>
        {/* Sidebar section*/}
        <SideBar/>
        
        {/* Feed section*/}
        <Feed/>

        {/* Widgets section */}
        <Widgets/>
      </main>
    </div>
  )
}

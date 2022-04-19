import Head from 'next/head';
import Header from '../components/Header';
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Login from '../components/Login';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import { db } from '../firebase';
import { collection, query, orderBy, doc, updateDoc, getDoc } from "firebase/firestore";

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


/* TO DO => get props from server side rendering to make the app faster

/*
 A server-side rendered application enables pages to load faster, 
 improving the user experience. 

*/

/*

export async function getServerSideProps(context){

  // Get the user
  const session = await getSession(context)

  // Firebase V8
  //const posts = await db.collection("posts").orderBy("timestamp", "desc").get()

  // Firebase V9
  const postsCollectionRef = collection(db, "posts");
  const posts = query(postsCollectionRef ,orderBy("timestamp", "desc"));

  const postsDocumentRef = doc(db, "posts");
  const docSnap = await getDoc(postsDocumentRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  const docs = posts.docs.map(post => ({
      id: post.id,
      ...post.data(),
      timestamp:null
  }))

  return {
    props: {
      session,
      posts: docs,
    }
  }
}
*/
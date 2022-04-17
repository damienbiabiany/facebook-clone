import { useCollection } from 'react-firebase-hooks/firestore'
import { query, orderBy } from "firebase/firestore"
import Post from './Post';

function Posts() {
    // firebase V9: https://firebase.google.com/docs/storage/web/create-reference
    const postsRef = ref(storage, `posts/${doc.id}`);

    const[realTimePosts, loadingState, errorState] = useCollection(
        // https://firebase.google.com/docs/firestore/query-data/order-limit-data
        query(postsRef, orderBy("timestamp", "desc"))
    )
  return (
    <div>
        {/* realTimePost.docs will return a list of posts */}
        {
        realTimePosts.docs.map(post => {
            // For each post of the database we will render out a Post Component
            <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.date().email}
                timestamps={post.data().timestamps}
                image={post.data().image}
                postImage={post.data().postImage}
            />
        })
        }</div>
  )
}

export default Posts
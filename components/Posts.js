import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, query, orderBy, limit,getDocs } from "firebase/firestore"
import { ref } from "firebase/storage"
import {db, storage } from "../firebase"
import { useState } from "react"
import React from "react"
import Image from 'next/image';
import {ChatAltIcon,ShareIcon, ThumbUpIcon} from "@heroicons/react/outline"

function Posts({posts}) {

    // https://github.com/CSFrequency/react-firebase-hooks/tree/v4.0.2/firestore
    const [realTimePosts, loading, error] = useCollection(
        collection(db, 'posts'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    console.log("posts =", posts)

    // console.log("realTimePosts =", realTimePosts)

  return (
    <div className="posts--component">
        {/*
            realTimePost.docs will return a list of posts
            We do an optional chaining ?. all the data are not there when loading
        */}

        <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {realTimePosts && (
          <span>
            {/* reverse to get posts in descending order according to the timestamp value */}
            {realTimePosts.docs.reverse().map((doc) => (
                <React.Fragment key={doc.id}>
               <div className="flex flex-col">
                   <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
                        <div className="flex items-center space-x-2">
                            {/* 
                            {doc.data().email} */}
                            {/* https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp */}
                            {/* {doc.data().timestamp.toDate().toLocaleString()}
                            {doc.data().image}
                            {doc.data().postImage}  */}
                            <img
                                className="rounded-full"
                                src={doc.data().image}
                                width={40}
                                height={40}
                                alt=""
                            />
                            <div>
                                <p className="font-medius">{doc.data().name}</p>
                                <p className='text-xs text-gray-400'>
                                {doc.data().timestamp?.toDate()?.toLocaleString()}
                                </p>
                            </div>
                        </div>
                        <p className="pt-4 font-bold">{doc.data().message}</p>
                    </div>
                    {doc.data().postImage && (
                        <div className="relative h-56 bg-white md:h-96">
                            <Image src={doc.data().postImage} objectFit="cover" layout="fill"/>
                        </div>
                    )}
                    {/* Footer section of the post*/}
                    <div className="flex items-center justify-between text-gray-400 bg-white border-t shadow-md rounded-b-2xl">
                        <div className="rounded-none inputIcon rounded-b-2xl">
                            <ThumbUpIcon className="h-4"/>
                            <p className="text-xs sm:text-base">Like</p>
                        </div>
                        <div className="rounded-none inputIcon rounded-b-2xl">
                            <ChatAltIcon className="h-4"/>
                            <p className="text-xs sm:text-base">Comment</p>
                        </div>
                        <div className="rounded-none inputIcon rounded-b-2xl">
                            <ShareIcon className="h-4"/>
                            <p className="text-xs sm:text-base">Share</p>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            ))}
          </span>
        )}
        </div>
    </div>
  )
}

export default Posts
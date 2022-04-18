
function Post(_doc,n) {
  return (
    <div>
       xxx{n}
       ---{_doc.message}
       xxx{_doc.name}
       ---{_doc.message}
    </div>
  )
}

export default Post
import React from "react"
import { useQuery,useMutation } from "@apollo/client";
import gql from "graphql-tag";
// import "../component/index.css";

const GET_BOOKMARKS = gql`{
  bookmarks{
    id
    url
    desc
  }
}`

const ADD_BOOKMARK = gql`
  mutation addBookmark($url: String!, $desc: String!){
    addBookmark(url: $url, desc: $desc){
      url 
    }
}`

// This mutation is for deletion of selected bookmark
const DELETE_BOOKMARK = gql`
  mutation delBookmark($id: ID!) {
    delBookmark(id: $id) {
      url, desc
    }
}`


export default function Home() {
 const {loading, error, data} = useQuery(GET_BOOKMARKS)
 console.log(data)
 const [addBookmark] = useMutation(ADD_BOOKMARK)
 const [deleteBookmark] = useMutation(DELETE_BOOKMARK)
 let textfield;
 let desc;

 if (loading)
        return <h2>Loading..</h2>

 if (error) {
        console.log("Error ======> ",error)
        return <h2>Error</h2>
 }

 const addBookmarkSubmit = () => {
  addBookmark({
    variables: {
      url: textfield.value,
      desc: desc.value
    },
    refetchQueries: [{query:GET_BOOKMARKS}],
  })
   console.log('textfield',textfield.value)
   console.log('Desc',desc.value)
 }

 const handleDelete = (id) => {
  console.log("Handle Delete ID is : ", JSON.stringify(id))        
  deleteBookmark({
      variables: {
          id,
      },
      refetchQueries: [{ query: GET_BOOKMARKS }]
  })
}

  return (
    <div className="main-container">        
        <div className="add-container">
          <h2>ADD BOOKMARK</h2>

          <label>Please enter URL </label>
          <input type="text" placeholder="URL" ref={node => textfield=node}/> <br />

          <label>Please enter Description </label>
          <input type="text" placeholder="Description" ref={node => desc=node}/> <br />
          <button onClick={addBookmarkSubmit}>Add BookMark</button>
        </div>
        <br />
        <div className="list-container">
            <h2>MY BOOKMARKS</h2>

            <table border="3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>URL</th>
                        <th>DESC</th>   
                        <th>X</th>           
                    </tr>
                </thead>
                <tbody>
                    {data.bookmarks.map(book => {
                        return <tr key={book.id}>
                            <td> {book.id} </td>
                            <td className="table-url"> {book.url.toString()} </td>
                            <td className="table-desc"> {book.desc.toString()} </td> 
                            <td><button value={book.id} onClick={()=>handleDelete(book.id)}>x</button></td>       
                        </tr>
                    })}
                </tbody>
            </table>

            {/* <div>
                {data.bookmarks.map(book =>
                    (<div key={book.id}>
                        <span> {book.id} </span>
                        <span> {book.url.toString()} </span>
                        <span> {book.desc.toString()} </span>
                        <span><button value={book.id} onClick={() => handleDelete(book.id)}>x</button></span>
                    </div>)
                )}
            </div> */}

            {/* <p>{JSON.stringify(data)}</p>              */}
        </div>
    </div>
  )  
}
import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import "./style.css";

// This query is executed at run time by Apollo.
const GET_TODOS = gql`
{
    todos {
        id,
        task,        
        status
    }
}
`;

// This mutation is for addition of new task
const ADD_TODO = gql`
    mutation addTodo($task: String!){
        addTodo(task: $task){
            task
        }
    }
`;

// This mutation is for deletion of selected task
const DELETE_TODOS = gql`
    mutation delTask($id: ID!) {
        delTask(id: $id) {
            task
    }
  }
`;

// This mutation is for update of selected task
// const UPDATE_TODOS = gql`
//     mutation updateTask($id: ID!) {
//         updateTask(id: $id) {
//             task
//     }
//   }
// `;

export default function Home() {
    let inputText;

    const { loading, error, data } = useQuery(GET_TODOS);
    const [addTodo] = useMutation(ADD_TODO);
    const [deleteTodo] = useMutation(DELETE_TODOS);
    // const [updateTodo] = useMutation(UPDATE_TODOS);

    if (loading)
        return <h2>Loading..</h2>

    if (error) {
        console.log("Error ======> ",error)
        return <h2>Error</h2>
    }

    const addTask = () => {
        console.log("Add Task function clicked")
        addTodo({
            variables: {
                task: inputText.value
            },
            refetchQueries: [{ query: GET_TODOS }]
        })
        inputText.value = "";
    }

    const handleDelete = (id) => {
        console.log("Handle Delete ID is : ", JSON.stringify(id))        
        deleteTodo({
            variables: {
                id,
            },
            refetchQueries: [{ query: GET_TODOS }]
        })
    }

    // const handleUpdate = (id) => {
    //     console.log("Handle Update ID is : ", JSON.stringify(id))        
    //     updateTodo({
    //         variables: {
    //             id,
    //         },
    //         refetchQueries: [{ query: GET_TODOS }]
    //     })
    // }
    
    return (
        <div className="container">
            <label>
                <h1> Add Task </h1>
                <input type="text"
                    ref={node => { inputText = node; }}
                    placeholder="Add task"
                />
            </label>
            <button onClick={addTask}> + </button>

            <br /> <br />

            <h2>SERVERLESS GRAPHQL TODO APP</h2>

            {/* <div>
                {data.todos.map(todo =>
                    (<div key={todo.id}>
                        <span> {todo.id} </span>
                        <span> {todo.task} </span>
                        <span> {todo.status.toString()} </span>
                        <span><button value={todo.id} onClick={handleDelete(todo.id)}>x</button></span>
                    </div>)
                )}
            </div> */}

            {/* <div>
                {data.todos.map(v =>
                    (<div key={v.id}>
                        <p>{v.id}</p>
                        <p>{v.task}</p>
                        <button value={v.id} onClick={handleDelete(v.id)}>x</button>
                    </div>)
                )}
            </div> */}

            <table border="3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TASK</th>
                        <th>STATUS</th>
                        <th>X</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.todos.map(todo => {
                        return <tr key={todo.id}>
                            <td> {todo.id} </td>
                            <td> {todo.task} </td>
                            <td> {todo.status.toString()} </td>
                            <td><button value={todo.id} onClick={()=>handleDelete(todo.id)}>x</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

            {/* <h2>My TODOS</h2>
          {JSON.stringify(data.todos)} */}
        </div >
    );
}
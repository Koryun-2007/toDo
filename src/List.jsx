import {useState } from "react"
import ListItem from "./LIstItem"

function List({toDoItems}) {
 
    return (
        <>
            <div>
                
                {toDoItems.map(item => <ListItem key={item} toDoName={item} />)}
            </div>
        </>
    )
}
export default List
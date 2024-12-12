import { useState } from "react";
import Header from "./Header";
import List from "./List";


function App(){
  const [inputValue,setValue] = useState("")
  const [items, setItems]  = useState(["buy egg", "asf", "dsa"])

  return (
    <>
    <Header inputValue= {inputValue} setValue = {setValue} setItems = {setItems} />
    <List toDoItems = {items} />
    </>
  )
}
export default App
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import "./styles.css";
import Subhead from "./Subheader";

export default function App() {
  let localToDoList = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]
  let [subheadText,setsubheadText] = useState();
  const [todoList,settodoList] = useState(localToDoList);
  
  function deleteList(){
    localToDoList = [null];
    settodoList(localToDoList);
    setsubheadText("Nothing to do buddy.Sleep!")
  }


  return (
    <div className="Application">
      <Header headerText={"ToDo app"}/>
      <Subhead text={subheadText}/>
      <div className = "todo">
        <ul>
           {todoList.map((itm,index) => (
        <ToDoList key={"list"+index} text={itm} />
      ))}
      </ul>
      <button className="delete-button" onClick={deleteList} >Delete</button>
      </div>
      
    </div>
  );
}

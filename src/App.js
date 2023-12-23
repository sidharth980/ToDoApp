import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import "./styles.css";

export default function App() {
  const todoList = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]
  
  return (
    <div className="Application">
      <Header headerText={"ToDo app"}/>
      <div className = "todo">
        <ul>
      {todoList.map((itm,index) => (
        <ToDoList key={"list"+index} text={itm} />
      ))}
      </ul>
      </div>
      
    </div>
  );
}

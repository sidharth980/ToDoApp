import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <div className="Application">
      <Header headerText={"ToDo app"}/>
      <ToDoList text={"Nothing to do buddy. Sleep!!"}/>
    </div>
  );
}

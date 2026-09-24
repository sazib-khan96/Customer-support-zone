import { Suspense, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";

const CustomerData = fetch("/CustomerData.json").then((res) => res.json());

function App() {

  const [proGress,setProgress] = useState([])
// Card click handel 
const cardHandel=(customer)=>{
  const updateProgress = [...proGress,customer]
  setProgress(updateProgress)
}

  return (
    <div>
      <Header></Header>
      <Hero proGress={proGress}></Hero>
{/* ----------main body container --------------- */}
      <div className="flex gap-5 max-w-8/12 mx-auto p-3 mt-8">
        <Suspense fallback={<p>Data is Loading.......</p>}>
        <CustomerTickets CustomerData={CustomerData} cardHandel={cardHandel}></CustomerTickets>
      </Suspense>
      <TaskStatus cardHandel={cardHandel}></TaskStatus>
      </div>
    </div>
  );
}

export default App;

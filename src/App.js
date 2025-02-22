import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Matrimony from "./Component";
// import Admin from "./Component/Home/Admin";
import NewBlog from "./Component/Home/NewBlog";
import Panel from "./Pages/Panel/Panel";
import Admin from "./Pages/Admin/Admin";
import VisitoryPlan from "./Pages/User/VisitoryPlan";
import GetMessage from "./Pages/Chat Message/GetMessage";
// import Panel from "./Component/Home/Panel";


function App() {
  return (
    <>
   <BrowserRouter>
   
    <Routes>
    <Route path="/" element={<Matrimony/>}/>
    <Route path="/Panel" element={<Panel/>}/>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/Blog" element={<NewBlog/>}/>
    <Route path="/Visitor" element={<VisitoryPlan/>}/>
    <Route path="/Message" element={<GetMessage/>}/>
    {/* <Route path="/Hobby" element={<Hobby/>}/> */}
    {/* <Route path="/HobbyReport" element={<HobbyReport/>}/> */}
    </Routes>
   </BrowserRouter>
   </>
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
  );
}

export default App;

import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useParams, Link, useNavigate } from "react-router-dom";
import "./APP.css"
import { useState } from "react";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <BrowserRouter>
      <NavBar />
         <Routes> 
               <Route exact path="/login" element={<Login onLogginUpdate={setIsLoggedIn}/>}></Route>
               <Route exact path="/signup" element={<SignUp onLogginUpdate={setIsLoggedIn}/>}></Route>
               <Route exact path="/" element={<Home isLoggedIn={isLoggedIn } onLogginUpdate={setIsLoggedIn}/>}></Route>
               <Route exact path="/about" element={<About/>}></Route>
               <Route exact path="/logout" element={<Logout onLogginUpdate={setIsLoggedIn}/>}></Route>
               <Route  path="/:pageName" element={<PageNotFound/>}></Route>
          </Routes>
     </BrowserRouter>
  );

  function NavBar () {
    return (
      <div style={{
        display: 'flex',
        height: '80px',
        flexdirection: 'row',
        margin: '16px',
        backgroundColor: 'grey',  
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
    <Link to="./login">Login</Link>
    <Link to="./signup">Sign Up</Link>
    <Link to="./about">About</Link>
    <Link to="./logout">Logout</Link>
    </div>
    )
  }

 function Home ({isLoggedIn, onLogginUpdate} ){
   return <>
    {isLoggedIn? <About></About>: <Login onLogginUpdate={onLogginUpdate}/>}
   </>
 }
  function  SignUp (onLogginUpdate) {
    const navigate = useNavigate ()
    return <button onClick={() =>{
      onLogginUpdate(true);
      navigate ('/')
    }}>Signup</button>
  }
  function  About () {
    return <button>About</button>
  }
  function  Logout (onLogginUpdate) {
    const navigate = useNavigate ()
    return <button onClick={() =>{
      onLogginUpdate(false);
      navigate ('/')
    }}>Logout</button>
  }
  function  PageNotFound () {
    const params= useParams()
    return <p>"{params.pageName}"Page not Found!</p>
  }
  function Login ({onLogginUpdate}) {
    const navigate = useNavigate ()
    return <button onClick={() =>{
      onLogginUpdate(true);
      navigate ('/')
    }}>Login</button>
  }
}

export default  App;

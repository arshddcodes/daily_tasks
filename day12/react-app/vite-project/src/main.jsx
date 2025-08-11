import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const name = "arshad";
const num = 9;
const img ="https://picsum.photos/200/300";

// const colorStyle ={
//   color: "green",
// }
// const blue ={
//   color: "blue",
// }

// const green ={
//   color: "green",
// }

// const yellow ={
//   color: "yellow",
// }


const headline = 

function listStyles(){
  return(
    <div>
      <h1>My Favourite Movies</h1>
      <ul>
        <li>maranamass</li>
        <li>kunjiramayanam</li>
        <li>Bangalore Days</li>
      </ul>
    </div>
  );
}

// colorStyle.color = "orange"
createRoot(document.getElementById('root')).render(
  <div className='text'>
    <listStyles/>
  </div>
);

//  <div className='text'>

//     <h1 style={colorStyle}>My Favourite Movies</h1>
//     <ul>
//       <li style = {blue}>maranamass</li>
//       <li style = {green}>malik</li>
//       <li style = {yellow}>bangalore days</li>
//     </ul>
//     <img src= {img}  alt=""/>

//   </div>

 {/* <h1>My Favourite Movies</h1>
    <ul>
      <li style={{
        color:"blue",
      }}>maranamass</li>
      <li style={{
        color: "green",
      }}>malik</li>
      <li style={{
        color:"yellow",
      }}>bangalore days</li>
    </ul>
    <img src= {img}  alt=""/> */}


 // first task
  // <div> <h1>Hello {name} !</h1>
  // <h1>my number is {num}</h1
  // >
  // </div>


// {/* <StrictMode>
//     <App />
//   </StrictMode>,/ */}
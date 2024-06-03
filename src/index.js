
import ReactDOM from 'react-dom/client';

const x=5;
// let text ='Goodbye';
// if(x<10){
//   text ="If condition !";
// }
// const myElement =<h1>{text}</h1>

const myElement =<h1>{(x)<10 ? "If statement!" : "Goodbye"}</h1>



 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  myElement
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function App() {
  return (
    <main>
      <Avatar />
      <Intro />
      <SkillList />
    </main>
  );
}

function Avatar() {
  return <img src='images/68281489.jpeg'/>
}

  function Intro() {
  return (
   <div>
   <h1>Najia Ahmadi</h1>
   <p>I am a web developer and I work hard to acheive my goals. That's not easy but I try a lot to reach my goals. I am interested in studying and cooking in freetimes. </p>
   </div>
  )
}

function SkillList() {
 return (
  <div>
    <Skill />
  </div>
 )
}

function Skill() {
  return <div>React 👌</div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

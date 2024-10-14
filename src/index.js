import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <section className="bg-white shadow-lg rounded-xl p-8 max-w-md">
        <Avatar />
        <Intro />
        <SkillList />
      </section>
    </main>
  );
}

function Avatar() {
  return (
    <img
      className="rounded-full w-24 h-24 shadow-md mb-4 mx-auto"
      src='images/68281489.jpeg'
      alt="Avatar"
    />
  );
}

function Intro() {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Najia Ahmadi</h1>
      <p className="text-gray-700 mt-2">
        I am a web developer, working hard to achieve my goals. I am interested in studying and cooking in my free time.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="space-y-4">
      <Skill name="React" level="👌" bgColor="bg-blue-100" />
      <Skill name="JavaScript" level="💻" bgColor="bg-yellow-100" />
      <Skill name="Tailwind CSS" level="🎨" bgColor="bg-green-100" />
    </div>
  );
}

function Skill({ name, level, bgColor }) {
  return (
    <div className={`${bgColor} shadow-inner rounded-lg p-4 flex justify-between items-center`}>
      <span className="text-lg font-semibold text-gray-800">{name}</span>
      <span>{level}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

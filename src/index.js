import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAF8"
  },
  {
    skill: "Sveltes",
    level: "beginner",
    color: "#EF3800"
  },
]

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
      src='images/mujeres-webdev'
      alt="mujeres-webdev"
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
      {
        skills.map(skill => (
          <Skill skill={skill}/>
        ))
      }
    </div>
  );
}
// style={{props.bgColor}}

function Skill({ skill }) {
  return (
    <div className={`${skill.color} shadow-inner rounded-lg p-4 flex justify-between items-center`}>
      <span className="text-lg font-semibold text-gray-800">{skill.skill}</span>
      {
        skill.level === "advanced" ? <span>{skill.level} 💪</span> : ""
      }
       {
        skill.level === "intermediate" ? <span>{skill.level} 👍</span> : ""
      }
       {
        skill.level === "beginner" ? <span>{skill.level} 🥺</span> : ""
      }
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <section className="flex-grow">
        <Home />
      </section>
      {/* Projects */}
      <section className="flex-grow">
        <Projects />
      </section>
      {/* Footer */}
      <footer className="h-16 bg-stone-300 text-center text-gray-600 flex items-center justify-center">
        © 2024 Mi Portafolio Personal
      </footer>
    </div>
  );
}

export default App;

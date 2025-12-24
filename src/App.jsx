import NoProject from "./components/NoProject/NoProject";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from 'react'

function App() {
  const projectArray = []
  const [selectedProject, setSelectedProject] = useState(null)
  const [formOpen, setFormOpen] = useState(false)

  const handleNewProject = (val = true) => {
    setFormOpen(val)
  }

  return (
    <>
      <Sidebar projectArray={projectArray} onNewProject={handleNewProject}/>
      <main className="pt-32 flex flex-col gap-4 text-center items-center justify-center">
      {(!selectedProject && !formOpen) && <NoProject onNewProject={handleNewProject}/>}
      {formOpen && <ProjectForm onNewProject={handleNewProject}/>}
      </main>
    </>
  );
}

export default App;

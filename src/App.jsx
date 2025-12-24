import NoProject from "./components/NoProject/NoProject";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import SelectedProject from "./components/SelectedProject/SelectedProject";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from 'react'

function App() {
  const [projectArray, setProjectArray] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [formOpen, setFormOpen] = useState(false)

  const handleNewProject = (val = true) => {
    setFormOpen(val)
  }
  const handleAddProject = (newProject) => {
    setProjectArray(old => [...old, newProject])
    handleNewProject(false)
    handleSelectProject(newProject.id)
  }
  const handleSelectProject = (idProject) => {
    const found = projectArray.find((item) => item.id === idProject)
    setSelectedProject(() => found)
  }
  const handleAddTask = (task) => {
    const indexTask = projectArray.findIndex(item => item.id === selectedProject.id)
    const newSelectedProject = {...selectedProject, tasks: [...selectedProject.tasks, task]}
    const projectId = selectedProject.id
    setProjectArray(old => {
      return [...old.toSpliced(indexTask, 1, newSelectedProject)]
  })
    setSelectedProject(newSelectedProject)
  }
  const deSelect = () => {
    setSelectedProject(null)
  }
    const mainControl = () => {
    if (formOpen) return <ProjectForm cancelProject={handleNewProject} addProject={handleAddProject}/>
    if (selectedProject) return <SelectedProject onCancel={deSelect} data={selectedProject} onAddTask={handleAddTask}/>
    return <NoProject onNewProject={handleNewProject}/>
  }

  return (
    <>
      <Sidebar projectArray={projectArray} onNewProject={handleNewProject} onSelectProject={handleSelectProject}/>
      <main className="pt-32 flex flex-col gap-4 text-center items-center justify-center">
        {mainControl()}
      </main>
    </>
  );
}

export default App;

import NoProjects from './../../assets/no-projects.png'
export default function NoProject({onNewProject}) {

    return (
        <div className="flex flex-col gap-4 text-center items-center justify-center">
        <img src={NoProjects} className="w-16"/>
        <h2 className="text-xl font-bold text-stone-700 my-4">No project selected</h2>
        <p className="text-stone-700 my-4">Select a project or get started with a new one</p>
        <button onClick={onNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-56">Create new project</button>
        </div>
    )
}
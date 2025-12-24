export default function ProjectForm({onNewProject}) {
    return (
        <div>
            <p>project form goes here</p>
            <button onClick={() => onNewProject(false)}>cancel</button>
        </div>
    )
}
import { useRef } from "react"

export default function SelectedProject({ data, onRemoveProject,  onAddTask, onRemoveTask }) {
    const taskRef = useRef()
    const showTasks = () => {
        if (data.tasks.length < 1) return <p className="text-left">No tasks available</p>
        return <ul>{data.tasks.map(item => <li key={item.id} className="flex justify-around py-4 bg-stone-100">
            <p>
            {item.taskTitle}
            </p>
            <button onClick={() => onRemoveTask(item.id)} className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-800 w-16">Clear</button>
            </li>)}</ul>
    }
    return (
        <>
            <header className="flex w-4xl items-start gap-8 relative">
                <h1 className="text-stone-600 font-semibold text-3xl">{data.title}</h1>
                <button onClick={onRemoveProject} className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-800 w-32 absolute right-0">Delete</button>
            </header>
            <section className="w-4xl flex flex-col gap-16">
                <p className="text-stone-400 text-left">{new Date(data.date).toUTCString()}</p>
                <p className="text-left">{data.desc}</p>
            </section>
            <hr className="border-stone-700 w-4xl" />
            <section className="w-4xl flex flex-col gap-16">
                <form>
                    <fieldset>
                        <legend>
                            <h2 className="w-full text-stone-600 font-semibold text-3xl my-8 text-left">Tasks</h2>
                        </legend>
                    </fieldset>
                    <div className="flex flex-col">
                        <label htmlFor="task-field" className="text-left">Enter task</label>
                        <div className="flex">
                            <input id="task-field" type="text" ref={taskRef} className="w-2xs border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                            <button type="button" onClick={() => onAddTask(taskRef.current.value)} className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-800 w-32">Add task</button>
                        </div>
                    </div>
                </form>
                <article>
                    {showTasks()}
                </article>
            </section>
        </>
    )
}
import { useRef } from "react"


export default function ProjectForm({ cancelProject, addProject }) {
    const titleValues = useRef()
    const descValues = useRef()
    const dateValues = useRef()

    return (
        <form className="w-4xl">
            <legend>
                <h1 className="w-full text-stone-600 font-semibold text-3xl my-8">
                    Add new project
                </h1>
            </legend>
            <menu className="flex gap-4 justify-end">
                <button type="button" onClick={() => cancelProject(false)} className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-800 w-16">Cancel</button>
                <button type="button" onClick={() => addProject({
                    title: titleValues.current.value,
                    desc: descValues.current.value,
                    date: dateValues.current.value,
                    tasks: [],
                    id: Math.random().toString(16).slice(2)
                })} className="cursor-pointer px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-700 hover:text-stone-100 w-16">Save</button>
            </menu>
            <fieldset className="flex flex-col gap-8">
                <div className="text-left">
                    <label htmlFor="title-field" className="text-sm font-bold uppercase text-stone-500">Title</label>
                    <input ref={titleValues} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" id="title-field" name="title-field" type="text" />
                </div>
                <div className="text-left">
                    <label htmlFor="desc-field" className="text-sm font-bold uppercase text-stone-500">Description</label>
                    <textarea ref={descValues} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" name="desc-field" id="desc-field"></textarea>
                </div>
                <div className="text-left">
                    <label htmlFor="date-field" className="text-sm font-bold uppercase text-stone-500">Due date</label>
                    <input ref={dateValues} required className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date" name="date-field" id="date-field" />
                </div>
            </fieldset>
        </form>
    )
}
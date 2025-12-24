import { createPortal } from "react-dom"

export default function Sidebar({projectArray, onNewProject}) {
    return createPortal(
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-neutral-900 text-amber-100 flex flex-col">
            <h2 className="text-center my-16">YOUR PROJECTS</h2>
            <button onClick={onNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-38 self-center">+ Add project</button>
        </aside>, document.getElementsByTagName('body')[0]
    )
}
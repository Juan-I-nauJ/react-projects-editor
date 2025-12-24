import { createPortal } from "react-dom"

export default function Sidebar({projectArray, onNewProject}) {
    return createPortal(
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-neutral-900 text-amber-100 flex flex-col gap-8">
            <div className="flex flex-col gap-4 ml-8">
                <h2 className="text-center mt-16 mb-4 text-2xl">YOUR PROJECTS</h2>
                <button onClick={onNewProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 w-38">+ Add project</button>
            </div>
            <menu className="ml-8 flex flex-col gap-4 justify-center">
                {projectArray.map((item, idx) => {
                    return <li key={idx}>
                        <button className="pl-2 pr-4 py-2 text-xs md:text-base text-stone-400 hover:text-stone-200 hover:bg-stone-600 w-38 text-left">
                            {item.title}
                        </button>
                    </li>
                })}
            </menu>
        </aside>, document.getElementsByTagName('body')[0]
    )
}
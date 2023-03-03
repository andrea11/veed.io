import {useState} from "react";

type RepositoriesFilterProps = {
    categoryTitle: string
    availableFilters: string[]
    selectedFilter: string | undefined

    onSelectFilter: (filter: string) => void
}
export default function RepositoriesFilter({
                                               availableFilters,
                                               categoryTitle,
                                               selectedFilter,
                                               onSelectFilter
                                           }: RepositoriesFilterProps) {

    const [hidden, setHidden] = useState(true)
    return (
        <div className="flex relative flex-col gap-x-2 items-end p-4 justify-end">
            <div tabIndex={0} onBlur={() => setHidden(true)}>
                <button onClick={() => setHidden(!hidden)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        type="button">
                    Filter by {categoryTitle}
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="dropdown" hidden={hidden}
                     className="absolute top-full z-20 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Category
                    </h6>
                    <ul className="space-y-2 text-sm">
                        {
                            availableFilters.map((filter) => (<li key={filter} className="flex items-center">
                                <input id={filter} type="radio" value={filter} checked={filter === selectedFilter}
                                       onChange={() => onSelectFilter(filter)}
                                       className="bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>

                                <label htmlFor={filter}
                                       className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {filter}
                                </label>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
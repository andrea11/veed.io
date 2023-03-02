export default function Banner() {
    return (
        <div
            className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
            <div className="flex flex-grow items-center">
                <p className="text-sm leading-6 text-gray-900">
                    <strong className="font-semibold">Veed.io</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1}/>
                    </svg>
                    Here the Frontend Coding Challenge by <i>Andrea Accardo</i>
                </p>
            </div>
        </div>
    )
}
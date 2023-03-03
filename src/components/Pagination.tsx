import Link from "next/link";

export interface PaginationProps {
    total?: number
    limitPerPage: number
    index: number
}

function range(start:number, end:number) {
  return Array(end - start + 1).fill(undefined).map((_, idx) => start + idx)
}

function computePaginationBoundaries(total: number, limitPerPage: number) {
    const paginationSize = Math.floor(total / limitPerPage)
    const pivot = Math.round(paginationSize / 2)
    const leftBoundary = range(0, Math.min(pivot, 2))
    const rightBoundary = range(Math.max(pivot, paginationSize - 2), paginationSize)
    return [leftBoundary, rightBoundary]
}

function generatePaginationLinks(total: number, limitPerPage: number, index: number) {
    const linksElement = computePaginationBoundaries(total, limitPerPage)
        .map((boundary) => boundary.map((element) => {
                let className = "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20 "
                className += (element === index) ? "bg-indigo-50 text-indigo-600 border-indigo-500" : "bg-white text-gray-500 border-gray-300"
                return (
                    <Link href={`/repositories/${element}`} aria-current="page" key={element}
                          className={className}>
                        {element}
                    </Link>
                )
            })
        )
    const ellipsisElement =
        <span key={-1}
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>

    return [linksElement[0], ellipsisElement, linksElement[1]]
}

export default function Pagination(props: PaginationProps) {
    const total = props.total ?? 1000
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{1 + (props.limitPerPage * props.index)}</span> to <span
                        className="font-medium">{(props.limitPerPage * (props.index + 1))}</span> of{' '}
                        <span className="font-medium">{Math.floor(total / props.limitPerPage)}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {props.index === 0 ? null :
                            <Link
                                href={`/repositories/${props.index - 1}`}
                                className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                &larr; Previous
                            </Link>
                        }
                        {
                            generatePaginationLinks(total, props.limitPerPage, props.index)
                        }
                        {props.index === Math.floor(total / props.limitPerPage) ? null :
                            <Link
                                href={`/repositories/${props.index + 1}`}
                                className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                            >
                                Next &rarr;
                            </Link>
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
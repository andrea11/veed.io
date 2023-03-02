import {Endpoints} from "@octokit/types"
import { identicon } from 'minidenticons'

import Link from "next/link";
import Identicon from "@/app/Identicon";

type RepositoryCardProps = {
    repository: Endpoints["GET /search/repositories"]["response"]["data"]["items"][0]
}

function generateImage(name: string) {
    return identicon("")
}
export default function RepositoryCard({repository}: RepositoryCardProps) {
    return (
        <div key={repository.id} className="group relative">
            <div
                className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-72">
                <Identicon username={repository.name} />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={repository.html_url}>
                            <span aria-hidden="true" className="absolute inset-0"/>
                            {repository.full_name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{repository.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{repository.stargazers_count}&#9733;</p>
            </div>
        </div>
    )
}
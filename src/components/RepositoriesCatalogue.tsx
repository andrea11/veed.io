import RepositoryCard from "@/components/RepositoryCard";
import {Endpoints} from "@octokit/types";

type RepositoriesCatalogueProps = {
    repositories: Endpoints["GET /search/repositories"]["response"]["data"]["items"]
    title: string

    description?: string
}
export default function RepositoriesCatalogue({repositories, title, description}: RepositoriesCatalogueProps) {
    return (
        <div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
                {description && <h3>{description}</h3>}

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {repositories.map((repository) => (<RepositoryCard repository={repository} key={repository.id}/>))}
                </div>
            </div>
        </div>
    )
}
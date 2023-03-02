import {Octokit} from "octokit";
import Pagination from "@/app/Pagination";
import RepositoriesCatalogue from "@/app/RepositoriesCatalogue";

type ReposPageProps = {
    params: {
        index: string
    }
}

export const revalidate = 60

const octokit = new Octokit()

function getMostStarredRepositories(offset: number) {
    return octokit.request("GET /search/repositories", {
        q: "created:>2017-01-10",
        sort: "stars",
        order: "desc",
        per_page: 16,
        page: offset,
    })
}

const title = "Most Starred Repositories"

export default async function Page({params}: ReposPageProps) {
    const repositories = await getMostStarredRepositories(parseInt(params.index) + 1)
    return (
        <div>
            <RepositoriesCatalogue repositories={repositories.data.items} title={title}/>
            <Pagination limitPerPage={16} index={parseInt(params.index)}/>
        </div>
    )
}
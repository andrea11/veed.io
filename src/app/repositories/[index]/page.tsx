import {Octokit} from "octokit";
import Pagination from "@/components/Pagination";
import RepositoriesCatalogue from "@/components/RepositoriesCatalogue";

type ReposPageProps = {
    params: {
        index: string
    }
}

export const revalidate = 60

const octokit = new Octokit()

function getRatedRepositories(offset: number) {
    return octokit.request("GET /search/repositories", {
        q: "created:>2017-01-10",
        sort: "stars",
        order: "desc",
        per_page: 16,
        page: offset,
    })
}

const title = "Discover trending repositories"

export default async function Page({params}: ReposPageProps) {
    const repositories = await getRatedRepositories(parseInt(params.index) + 1)
    return (
        <>
            <RepositoriesCatalogue repositories={repositories.data.items} title={title}/>
            <Pagination limitPerPage={16} index={parseInt(params.index)}/>
        </>
    )
}
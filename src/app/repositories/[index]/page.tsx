"use client"
import {Octokit} from "octokit";
import Pagination from "@/components/Pagination";
import RepositoriesCatalogue from "@/components/RepositoriesCatalogue";
import RepositoriesFilter from "@/components/RepositoriesFilter";
import {Suspense, use, useMemo, useState} from "react";
import Loading from "@/app/repositories/[index]/loading";
import {RepositoriesResponseData} from "@/types/repository";

type ReposPageProps = {
    params: {
        index: string
    }
}

const octokit = new Octokit()


async function getRepositories(offset: number, language: string): Promise<RepositoriesResponseData> {
    const date = new Date()
    date.setDate(date.getDate() - 7);
    const oneWeekAgoISODate = date.toISOString().split('T')[0]


    const response = await octokit.request("GET /search/repositories", {
        q: `created:>${oneWeekAgoISODate} ${language !== "none" ? `language:${language}` : ""}`,
        sort: "stars",
        order: "desc",
        per_page: 16,
        page: offset,
        request: {
            fetch: fetch
        }
    })

    return response.data
}

const title = "Discover trending repositories"
const languages = ["none", "c", "c#", "c++", "css", "go", "html", "java", "javascript", "php", "python", "ruby", "swift", "typescript"]
export default function Page({params}: ReposPageProps) {
    const [selectedFilter, setSelectedFilter] = useState<string>("none")

    const getRepositoriesWithCache = useMemo(() => getRepositories(parseInt(params.index) + 1, selectedFilter), [selectedFilter, params.index])
    const repositories = use(getRepositoriesWithCache)

    return (
        <Suspense fallback={<Loading/>}>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <RepositoriesFilter selectedFilter={selectedFilter} onSelectFilter={setSelectedFilter}
                                    availableFilters={languages} categoryTitle={"language"}/>
                <RepositoriesCatalogue repositories={repositories?.items ?? []} title={title}/>
                <Pagination limitPerPage={16} index={parseInt(params.index)}
                            total={Math.min(1000, repositories?.total_count ?? 0)}/>
            </div>
        </Suspense>
    )
}

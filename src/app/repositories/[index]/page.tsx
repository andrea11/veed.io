"use client"
import {Octokit} from "octokit";
import Pagination from "@/components/Pagination";
import RepositoriesCatalogue from "@/components/RepositoriesCatalogue";
import RepositoriesFilter from "@/components/RepositoriesFilter";
import {useEffect, useState} from "react";
import {RepositoriesResponseData} from "@/types/repository";

type ReposPageProps = {
    params: {
        index: string
    }
}

export const revalidate = 60

const octokit = new Octokit()


function getRatedRepositories(offset: number, language?: string) {
    const date = new Date()
    date.setDate(date.getDate() - 7);
    const oneWeekAgoISODate = date.toISOString().split('T')[0]


    return octokit.request("GET /search/repositories", {
        q: `created:>${oneWeekAgoISODate} ${language ? `language:${language}` : ""}`,
        sort: "stars",
        order: "desc",
        per_page: 16,
        page: offset,
    })
}

const title = "Discover trending repositories"
const languages = ["none", "c", "c#", "c++", "css", "go", "html", "java", "javascript", "php", "python", "ruby", "swift", "typescript"]
export default function Page({params}: ReposPageProps) {
    const [selectedFilter, setSelectedFilter] = useState<string>("none")
    const [repositories, setRepositories] = useState<RepositoriesResponseData>()

    useEffect(() => {
        const retrieveRepositories = async () => {
            const response = await getRatedRepositories(parseInt(params.index) + 1, selectedFilter)
            setRepositories(response.data)
        }

        retrieveRepositories()
    }, [selectedFilter, params.index])

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <RepositoriesFilter selectedFilter={selectedFilter} onSelectFilter={setSelectedFilter}
                                availableFilters={languages} categoryTitle={"language"}/>
            <RepositoriesCatalogue repositories={repositories?.items ?? []} title={title}/>
            <Pagination limitPerPage={16} index={parseInt(params.index)}
                        total={Math.min(1000, repositories?.total_count ?? 0)}/>
        </div>
    )
}
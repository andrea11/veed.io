"use client"
import RepositoriesCatalogue from "@/app/RepositoriesCatalogue";
import {useEffect, useState} from "react";
import {Endpoints} from "@octokit/types";
import Link from "next/link";

function getFavouriteRepositories() {
    return JSON.parse(localStorage.getItem("favourites") ?? "[]")
}

const description = "Explore new repositories and click on the star icon to add a repository to your favourites."


export default function Page() {
    const [repositories, setRepositories] = useState<Endpoints["GET /search/repositories"]["response"]["data"]["items"]>([])

    useEffect(() => {
        getFavouriteRepositories()
        setRepositories(getFavouriteRepositories())
    }, [])
    const title = repositories.length > 0 ? "Most Starred Repositories" : "No favourites yet"

    return (
        <div>
            <RepositoriesCatalogue repositories={repositories} title={title} description={description}/>
            {repositories.length === 0 &&
              <p className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"></p>}
        </div>
    )
}
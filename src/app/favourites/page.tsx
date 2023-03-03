"use client"
import RepositoriesCatalogue from "@/components/RepositoriesCatalogue";
import {useEffect, useState} from "react";
import {Repositories, Repository} from "@/types/repository";

function getFavouriteRepositories(): Record<string, Repository> {
    return JSON.parse(localStorage.getItem("favourites") ?? "{}")
}

const description = "Explore new repositories and click on the star icon to add a repository to your favourites."


export default function Page() {
    const [repositories, setRepositories] = useState<Repositories>([])

    useEffect(() => {
        setRepositories(Object.values(getFavouriteRepositories()))
    }, [])
    const title = repositories.length > 0 ? "Favourite Repositories" : "No favourites yet"

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <RepositoriesCatalogue repositories={repositories} title={title} description={description}/>
            {repositories.length === 0 &&
              <p className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"></p>}
        </div>
    )
}
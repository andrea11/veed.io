"use client"
import Link from "next/link";
import Identicon from "@/components/Identicon";
import {RepositoryStarButton} from "@/components/RepositoryStarButton";
import {Repository} from "@/app/types";
import {useEffect, useState} from "react";

type RepositoryCardProps = {
    repository: Repository
}

const formatter = Intl.NumberFormat('en', {notation: 'compact'})

function getFavouriteRepositories(): Record<string, Repository> {
    return JSON.parse(localStorage.getItem("favourites") ?? "{}")
}

function saveFavouriteRepositories(favourites: Record<string, Repository>): void {
    localStorage.setItem("favourites", JSON.stringify(favourites))
}

function isStarred(repository: Repository): boolean {
    return getFavouriteRepositories()[repository.id] !== undefined
}

export default function RepositoryCard({repository}: RepositoryCardProps) {
    const [starred, setStarred] = useState(false)

    useEffect(() => {
        setStarred(isStarred(repository))
    }, [repository])
    const handleStarButtonClick = () => {
        const favourites = getFavouriteRepositories()
        if (starred) {
            delete favourites[repository.id]
        } else {
            favourites[repository.id] = repository
        }

        saveFavouriteRepositories(favourites)
        setStarred(!starred)
    };

    return (
        <div key={repository.id} className="group relative">
            <div
                className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-72">
                <Identicon username={repository.name}/>
                <div className="absolute z-10 bottom-0 right-0 mr-2 mb-2">
                    <RepositoryStarButton onClick={handleStarButtonClick} enabled={starred}
                                          numberOfLikes={formatter.format(repository.stargazers_count)}/>
                </div>
            </div>
            <Link href={repository.html_url}>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute"/>
                            {repository.full_name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{repository.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
"use client"
import {useEffect} from "react";

type ErrorProps = {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1>Something went wrong calling Github API</h1>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
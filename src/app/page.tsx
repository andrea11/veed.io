import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10 justify-center h-full max-h-96 mx-auto max-w-7xl px-6 lg:px-8">
            <section className="items-stretch">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Welcome to my page</h2>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                    This is a simple page that uses the GitHub API to display a list of repositories.
                    You can navigate to the <Link href="/repositories"
                                                  className="text-blue-900 font-medium underline">Repositories
                    page</Link> to see the list of repositories. You can save your favourite repositories by clicking on
                    the
                    star icon.
                    You can check your favourites in the <Link href="/favourites"
                                                               className="text-blue-900 font-medium underline">Favourites
                    page</Link>.
                </p>
            </section>
        </div>
    )
}
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image src={"/github.svg"} width={32} height={32} alt={"Logo"}></Image>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1">
                    <Link href="/favourites" className="text-sm font-semibold leading-6 text-gray-900">
                        Favourite repositories <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1">
                    <Link href="/repositories" className="text-sm font-semibold leading-6 text-gray-900">
                        Discover trending repositories <span aria-hidden="true"></span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
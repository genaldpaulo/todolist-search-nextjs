import Link from "next/link"

export default function Header() {
    return (
        <header className="p-5 bg-blue-500">
            <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                    <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg"> Home </Link>
                    <Link href="/todos" className="px-2 py-1 bg-white text-blue-500 rounded-lg"> Todo List </Link>
                </div>
                <Link href="/search" className="ml-auto px-2 py-1 bg-white text-blue-500 rounded-lg"> Search </Link>
            </div>
        </header>

    )
}


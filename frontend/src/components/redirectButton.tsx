import Link from "next/link"

export const RedirectButton = () => {
    return (
        <div>
            <Link
                href="/menus"
                className="bg-black rounded-full text-white px-4 py-2">
                Go Menus
            </Link>
        </div>
    )
}
import Link from "next/link";


export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex-center w-full justify-between">
            <h1 className="text-4xl font-bold text-gray-700">
                You can contribute to this project:
            </h1>
            <div className="flex items-center">
                <Link
                    href={"/contributor"}
                    className={"bg-gray-200 p-3 rounded-lg shadow-lg hover:bg-gray-300 text-gray-700 font-semibold"}>
                    Contributor Form
                </Link>
            </div>
        </div>

    </main>)
}

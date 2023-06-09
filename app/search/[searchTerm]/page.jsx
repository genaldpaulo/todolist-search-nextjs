const search = async (searchTerm) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)
    const data = await res.json()
    return data
}

export default async function SearchResults({ params: { searchTerm } }) {
    const SearchResults = await search(searchTerm)
    return (
        <div>

            <p className=" text-gray-500 text-sm"> You searched for : {searchTerm}</p>
            <ol className=" space-y-5 p-5">
                {SearchResults.organic_results.map((result) => (
                    <li key={result.position} className=" list-decimal">
                        <p className=" font-bold">{result.title}</p>
                        <p> {result.snippet}</p>
                    </li>

                ))}
            </ol>

        </div>
    )
}


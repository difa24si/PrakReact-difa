import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 bg-pink-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-pink-700 mb-2">
                Explore Frameworks
            </h1>
            <p className="text-center text-pink-400 mb-8">
                Modern tools for modern developers.
            </p>

            <div className="grid md:grid-cols-3 gap-6 justify-items-center">
                {frameworkData.map((item) => (
                    <div
                        key={item.id}
                        className="border border-pink-200 p-5 rounded-2xl bg-white max-w-sm w-full shadow-sm hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-pink-700 mb-2">
                            {item.name}
                        </h2>

                        <p className="text-gray-600 text-sm mb-2">
                            {item.description}
                        </p>

                        <p className="text-gray-500 text-sm mb-3">
                            Developed by:{" "}
                            <span className="font-semibold text-pink-600">
                                {item.details.developer}
                            </span>{" "}
                            ({item.details.releaseYear})
                        </p>

                        <a
                            href={item.details.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-pink-600 text-white text-sm px-4 py-2 rounded-full hover:bg-pink-700 transition mb-4"
                        >
                            Visit →
                        </a>

                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-pink-100 text-pink-600 px-3 py-1 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
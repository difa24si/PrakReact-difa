import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  /** Logic Search & Filter **/
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Ambil unique tags **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 bg-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-2">
        Explore Frameworks
      </h1>

      <p className="text-center text-pink-400 mb-8">
        Modern tools for modern developers.
      </p>

      {/* SEARCH */}
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* FILTER TAG */}
      <select
        name="selectedTag"
        value={selectedTag}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6 justify-items-center">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
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
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-center">
            No frameworks found.
          </p>
        )}
      </div>
    </div>
  );
}
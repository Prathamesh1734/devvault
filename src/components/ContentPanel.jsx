import { useEffect, useMemo, useState } from "react";
import QuestionCard from "./QuestionCard";

export default function ContentPanel({ category }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  if (!category) return null;

  // using useeffect to reset filters when clicked in a different category in sidebar
  useEffect(() => {
    setSelectedDifficulty("All");
  }, [category?.id]);

  // extracting unique difficulties
  const difficulties = useMemo(() => {
    if (!category) return [];
    // using set removes duplicates and filtering our any null/undefined values
    const diff = new Set(
      category.questions.map((q) => q.difficulty).filter(Boolean),
    );
    return ["All", ...Array.from(diff)];
  }, [category]);

  // apply active filter to questions list
  const filteredQuestions = category.questions.filter((q) => {
    return selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-8 transition-colors duration-200">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {category.label}
        </h1>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 items-center bg-gray-200 dark:bg-white/3 p-4 rounded-lg">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Filter by:
          </span>

          {/* Difficulty Dropdown */}
          {difficulties.length > 1 && (
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-white dark:bg-[#202020] border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-md px2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff === "All" ? "All Difficulties" : diff}
                </option>
              ))}
            </select>
          )}

          {/* Results Count & Reset */}
          <div className="ml-auto flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredQuestions.length} of {category.questions.length}
            </span>

            {selectedDifficulty !== "All" && (
              <button
                onClick={() => setSelectedDifficulty("All")}
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Render the Filtered Questions */}
      <div className="space-y-2">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => <QuestionCard key={q.id} item={q} />)
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No questions match your selected filter.
          </div>
        )}
      </div>
    </div>
  );
}

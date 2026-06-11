import { useState } from "react";

export default function QuestionCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const standardKeys = [
    "id",
    "question",
    "difficulty",
    "round",
    "company",
    "answer",
    "code",
    "tip",
    "label",
  ];

  const dynamicKeys = Object.keys(item).filter(
    (key) => !standardKeys.includes(key) && item[key] != null,
  );

  const renderDynamicBlock = (key, value) => {
    // Make the key look nice (e.g., "key_points" -> "Key Points")
    const title = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    if (Array.isArray(value)) {
      // Render Arrays as a bulleted list
      return (
        <div
          key={key}
          className="mt-3 bg-gray-50 dark:bg-white/5 p-4 rounded-md transition-colors duration-200"
        >
          <strong className="text-gray-900 dark:text-gray-100 text-sm block mb-2">
            {title}:
          </strong>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {value.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      );
    } else if (typeof value === "object") {
      // Render Objects as key-value pairs (Great for "complexity" or "options")
      return (
        <div
          key={key}
          className="mt-3 bg-gray-50 dark:bg-white/5 p-4 rounded-md border border-gray-100 dark:border-white/10 transition-colors duration-200"
        >
          <strong className="text-gray-900 dark:text-gray-100 text-sm block mb-2">
            {title}:
          </strong>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {Object.entries(value).map(([k, v]) => (
              <div key={k}>
                <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {k}:
                </span>{" "}
                {v}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (typeof value === "string") {
      // Render plain strings as text
      return (
        <div key={key} className="mt-3 transition-colors duration-200">
          <strong className="text-gray-900 dark:text-gray-100 text-sm">
            {title}:{" "}
          </strong>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {value}
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-4 border-b border-gray-100 dark:border-gray-800 pb-4 transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left focus:outline-none group"
      >
        <span
          className="mr-3 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-transform duration-200 shrink-0"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ▶
        </span>

        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1 pr-6">
          {item.question}
        </h3>

        <div className="flex gap-2 shrink-0 items-center">
          {item.difficulty && (
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${
                item.difficulty === "Easy"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  : item.difficulty === "Medium"
                    ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                    : item.difficulty === "Hard"
                      ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                      : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
              }`}
            >
              {item.difficulty}
            </span>
          )}
          {item.company && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded font-medium hidden sm:block">
              {item.company}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-5 pl-7 text-gray-700 dark:text-gray-300 space-y-4">
          {item.answer && <p className="leading-relaxed">{item.answer}</p>}

          {dynamicKeys.length > 0 && (
            <div className="space-y-3">
              {dynamicKeys.map((key) => renderDynamicBlock(key, item[key]))}
            </div>
          )}

          {item.code && (
            <pre className="bg-[#1e1e1e] dark:bg-black p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-200 border border-gray-800">
              <code>{item.code}</code>
            </pre>
          )}

          {item.tip && (
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 text-amber-900 dark:text-amber-200 p-3 rounded-r-md text-sm flex items-start">
              <span className="mr-2">💡</span>
              <p>{item.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

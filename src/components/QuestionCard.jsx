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
    const title = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    if (Array.isArray(value)) {
      return (
        <div className="mt-3 bg-gray-50 p-4 rounded-md" key={key}>
          <strong className="text-gray-900 text-sm block mb-2">{title}</strong>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {value.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      );
    } else if (typeof value === "object") {
      return (
        <div
          key={key}
          className="mt-3 bg-gray-50 p-4 rounded-md border border-gray-100"
        >
          <strong className="text-gray-900 text-sm block mb-2">{title}</strong>
          <div className="space-y-2 text-sm text-gray-700">
            {Object.entries(value).map(([k, y]) => (
              <div key={k}>
                <span className="font-semibold text-gray-800 capitalize">
                  {k}:
                </span>
                {v}
              </div>
            ))}
          </div>
        </div>
      );
    } else if (typeof value === "string") {
      return (
        <div key={key} className="mt-3">
          <strong className="text-gray-900 text-sm">{title}:</strong>
          <span className="text-sm text-gray-700">{value}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-4 border-b border-gray-100 pb-4">
      {/* The Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-start w-full text-left focus:outline-none group"
      >
        <span
          className="mr-3 mt-1 text-gray-400 group-hover:text-gray-600 transition-transform duration-200 inline-block"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ▶
        </span>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
            {item.question}
          </h3>

          {/* Metadata Badges (Difficulty & Company) */}
          <div className="flex gap-2 mt-2">
            {item.difficulty && (
              <span
                className={`text-xs px-2 py-1 rounded font-medium ${item.difficulty === "Easy" ? "bg-green-100 text-green-700" : item.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" : item.difficulty === "Hard" ? "bg-red-100 text-red-700" : "bg-purple-100 text-purple-700"}`}
              >
                {item.difficulty}
              </span>
            )}
            {item.company && (
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-medium">
                {item.company}
              </span>
            )}
          </div>
        </div>
      </button>

      {/* The Expanded Content */}
      {isOpen && (
        <div className="mt-5 pl-7 text-gray-700 space-y-4">
          {/* 1. The Main Answer */}
          {item.answer && <p className="leading-relaxed">{item.answer}</p>}

          {/* 2. The Dynamic Blocks (Prevention, Complexity, Steps, etc.) */}
          {dynamicKeys.length > 0 && (
            <div className="space-y-3">
              {dynamicKeys.map((key) => renderDynamicBlock(key, item[key]))}
            </div>
          )}

          {/* 3. Code Block */}
          {item.code && (
            <pre className="bg-[#1e1e1e] p-4 rounded-md overflow-x-autotext-sm font-mono text-gray-200 shadow-inner">
              <code>{item.code}</code>
            </pre>
          )}

          {/* 4. Tips */}
          {item.tip && (
            <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 p-3 rounded-r-md text-sm flex items-start">
              <span className="mr-2">💡</span>
              <p>{item.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

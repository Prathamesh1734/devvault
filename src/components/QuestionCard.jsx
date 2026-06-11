import { useState } from "react";

export default function QuestionCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-100 pb-4">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="flex items-center w-full text-left text-lg font-medium text-gray-800 hover:text-gray-600 focus:outline-none"
      >
        <span
          className="mr-2 transform transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ▶
        </span>
        {item.question}
        <span className="ml-auto text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
          {item.difficulty}
        </span>
      </button>

      {isOpen && (
        <div className="mt-4 pl-6 text-gray-700 space-y-4">
          <p className="leading-relaxed">{item.answer}</p>

          {item.code && (
            <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm font-monotext-gray-800 border border-gray-200">
              <code>{item.code}</code>
            </pre>
          )}

          {item.tip && (
            <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm flex items-start">
              <span className="mr-2">💡</span>
              <p>{item.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

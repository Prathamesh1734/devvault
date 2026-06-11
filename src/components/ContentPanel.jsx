import QuestionCard from "./QuestionCard";

export default function ContentPanel({ category }) {
  if (!category) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 pb-4 transition-colors duration-200">
        {category.label}
      </h1>
      <div className="space-y-2">
        {category.questions.map((q) => (
          <QuestionCard key={q.id} item={q} />
        ))}
      </div>
    </div>
  );
}

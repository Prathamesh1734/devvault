export default function Sidebar({ categories, activeId, onSelect }) {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 font-semibold text-sm text-gray-500 uppercase tracking-wider">
        Interview Prep
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => {
                  onSelect(category.id);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${activeId === category.id ? "bg-gray-200 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

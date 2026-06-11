export default function Sidebar({
  categories,
  activeId,
  onSelect,
  isDarkMode,
  toggleTheme,
}) {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-[#202020] border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-200">
      <div className="p-4 font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
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
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeId === category.id
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={toggleTheme}
          className="flex items-center w-full px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
        >
          <span className="mr-2">{isDarkMode ? "☀️" : "🌙"}</span>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </aside>
  );
}

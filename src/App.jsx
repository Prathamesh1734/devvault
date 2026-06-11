import { useEffect, useState } from "react";
import { allCategories } from "./data";
import Sidebar from "./components/Sidebar";
import ContentPanel from "./components/ContentPanel";

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(allCategories[0].id);
  const activeCategory = allCategories.find((c) => c.id === activeCategoryId);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  if (!allCategories || allCategories.length == 0) {
    return <div className="p-10 text-xl font-semibold">Loading data...</div>;
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex h-screen bg-white dark:bg-[#191919] text-gray-800 dark:text-gray-200 font-sans transition-colors duration-200">
        <Sidebar
          categories={allCategories}
          activeId={activeCategoryId}
          onSelect={setActiveCategoryId}
          isDarkMode={isDarkMode}
          toggleTheme={() => {
            setIsDarkMode(!isDarkMode);
          }}
        ></Sidebar>
        <main className="flex-1 overflow-y-auto p-10">
          <ContentPanel category={activeCategory}></ContentPanel>
        </main>
      </div>
    </div>
  );
}

export default App;

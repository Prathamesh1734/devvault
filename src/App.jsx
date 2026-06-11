import { useState } from "react";
import { allCategories } from "./data";
import Sidebar from "./components/Sidebar";
import ContentPanel from "./components/ContentPanel";

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState(allCategories[0].id);
  const activeCategory = allCategories.find((c) => c.id === activeCategoryId);

  return (
    <div className="flex h-screen bg-white text-gray-800 font-sans">
      <Sidebar
        categories={allCategories}
        activeId={activeCategoryId}
        onSelect={setActiveCategoryId}
      ></Sidebar>
      <main className="flex-1 overflow-y-auto p-10">
        <ContentPanel category={activeCategory}></ContentPanel>
      </main>
    </div>
  );
}

export default App;

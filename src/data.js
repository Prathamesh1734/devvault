import reactData from "./react_interview_qa.json";
import generalData from "./interview_qa.json";
import reactJsData from "./react_js_qa.json";

const reactFundamentalData = {
  id: "fundamentals",
  label: reactJsData.category,
  questions: reactJsData.questions,
};

export const allCategories = [
  reactFundamentalData,
  ...generalData.categories,
  ...reactData.categories,
];

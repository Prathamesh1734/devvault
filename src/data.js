import reactData from "./react_interview_qa.json";
import generalData from "./interview_qa.json";

export const allCategories = [
  ...reactData.categories,
  ...generalData.categories,
];

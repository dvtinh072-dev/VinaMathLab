import { DetailedLessonData } from "@/data/allGradesLessonsData";
import { LESSON_18_DATA } from "./lesson18";
import { LESSON_19_DATA } from "./lesson19";
import { LESSON_20_DATA } from "./lesson20";
import { GRADE_6_CHAPTER_4_REVIEW_LESSON } from "./chapter4Review";

export {
  LESSON_18_DATA,
  LESSON_19_DATA,
  LESSON_20_DATA,
  GRADE_6_CHAPTER_4_REVIEW_LESSON,
};

export const chapter4Lessons: { [key: string]: DetailedLessonData } = {
  "t6-b18-tam-giac-deu-hinh-vuong-luc-giac-deu": LESSON_18_DATA,
  "t6-b19-hinh-chu-nhat-thoi-binh-hanh-thang-can": LESSON_19_DATA,
  "t6-b20-chu-vi-dien-tich-tu-giac": LESSON_20_DATA,
  "t6-on-tap-chuong-4": GRADE_6_CHAPTER_4_REVIEW_LESSON,
};

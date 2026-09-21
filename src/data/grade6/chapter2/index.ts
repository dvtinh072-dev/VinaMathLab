import { DetailedLessonData } from '../../allGradesLessonsData';
import { LESSON_8_DATA } from './lesson8';
import { LESSON_9_DATA } from './lesson9';
import { LESSON_10_DATA } from './lesson10';
import { LESSON_11_DATA } from './lesson11';
import { LESSON_12_DATA } from './lesson12';
import { LESSON_13_DATA } from './lesson13';
import { GRADE_6_CHAPTER_2_REVIEW_LESSON } from './chapter2Review';

export {
  LESSON_8_DATA,
  LESSON_9_DATA,
  LESSON_10_DATA,
  LESSON_11_DATA,
  LESSON_12_DATA,
  LESSON_13_DATA,
  GRADE_6_CHAPTER_2_REVIEW_LESSON,
};

export const chapter2Lessons: { [key: string]: DetailedLessonData } = {
  't6-b8-quan-he-chia-het': LESSON_8_DATA,
  't6-b9-dau-hieu-chia-het-2-5': LESSON_9_DATA,
  't6-b10-dau-hieu-chia-het-3-9': LESSON_10_DATA,
  't6-b11-so-nguyen-to': LESSON_11_DATA,
  't6-b12-uoc-chung-ucln': LESSON_12_DATA,
  't6-b13-boi-chung-bcnn': LESSON_13_DATA,
  't6-on-tap-chuong-2': GRADE_6_CHAPTER_2_REVIEW_LESSON,
};

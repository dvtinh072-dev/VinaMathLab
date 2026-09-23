import { DetailedLessonData } from '../../allGradesLessonsData';
import { LESSON_14_DATA } from './lesson14';
import { LESSON_15_DATA } from './lesson15';
import { LESSON_16_DATA } from './lesson16';
import { LESSON_17_DATA } from './lesson17';
import { GRADE_6_CHAPTER_3_REVIEW_LESSON } from './chapter3Review';

export {
  LESSON_14_DATA,
  LESSON_15_DATA,
  LESSON_16_DATA,
  LESSON_17_DATA,
  GRADE_6_CHAPTER_3_REVIEW_LESSON,
};

export const chapter3Lessons: { [key: string]: DetailedLessonData } = {
  't6-b14-tap-hop-so-nguyen': LESSON_14_DATA,
  't6-b15-phep-cong-tru-so-nguyen': LESSON_15_DATA,
  't6-b16-phep-nhan-so-nguyen': LESSON_16_DATA,
  't6-b17-phep-chia-het-so-nguyen': LESSON_17_DATA,
  't6-on-tap-chuong-3': GRADE_6_CHAPTER_3_REVIEW_LESSON,
};

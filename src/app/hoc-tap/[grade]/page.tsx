import { redirect } from "next/navigation";
import { CURRICULUM_DATA } from "@/data/curriculumData";

interface Props {
  params: {
    grade: string;
  };
}

export default function GradeOverviewPage({ params }: Props) {
  const gradeData = CURRICULUM_DATA[params.grade];
  const firstLessonId = gradeData?.chapters[0]?.lessons[0]?.id || "t6-b1-tap-hop";

  redirect(`/hoc-tap/${params.grade}/${firstLessonId}`);
}

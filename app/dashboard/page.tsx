import { supabase } from "../../src/lib/supabase";
import Sidebar from "../components/Sidebar";
import HeroCard from "../components/HeroCard";
import ActivityCard from "../components/ActivityCard";
import CourseCard from "../components/CourseCard";
import Topbar from "../components/Topbar";
import BentoGrid from "../components/BentoGrid";
import {Course} from "../../src/types/course";

export default async function Dashboard() {
const { data: courses, error } = await supabase
  .from("courses")
  .select("*")
  .returns<Course[]>();

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      <Sidebar />

      <section className="flex-1 p-4 md:p-6 md:ml-20 xl:ml-0">
        <Topbar />

        <BentoGrid>
          <HeroCard />

          <ActivityCard />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              iconName={course.icon_name}
            />
          ))}
        </BentoGrid>

        <footer className="mt-10 text-center text-zinc-500 text-sm">
          Built by Pavitra © 2026
        </footer>
      </section>
    </main>
  );
}
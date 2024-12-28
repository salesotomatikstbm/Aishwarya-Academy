import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import CourseDetailSection from "@/component/course/CourseDetailSection";
import { courseDataArray } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
export const metadata = {
  title: "Eduor Course Details Page",
  description: "Developed by Azizur Rahman",
};
export default function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = courseDataArray.find((item) => item.slug === slug); // Use 'slug' here
  return (
    <Layout>
      <BreadcrumbSection header="Course Details" title="Course Details" />
      {courseDesc ? (
        <CourseDetailSection courseData={courseDesc} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}

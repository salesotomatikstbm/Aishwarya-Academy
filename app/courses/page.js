import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: "Aishwarya Academy",
    description: "Developed by Otomatiks",
}
export default function Courses() {
    return (
        <Layout>
            <BreadcrumbSection header='All Course' title='All Course'/>
            <AllCourseSection/>
        </Layout>
    )
}
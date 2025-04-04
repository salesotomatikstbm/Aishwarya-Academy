import AboutSection3 from "@/component/about/AboutSection3";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BlogSection from "@/component/blog/BlogSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CourseSection from "@/component/course/CourseSection";
import FaqSection from "@/component/faq/FaqSection";
import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2";
import TeamSection from "@/component/team/TeamSection";
export const metadata = {
    title: "Aishwarya Academy",
    description: "Developed by Otomatiks",
}
export default function About() {
    return (
        <Layout>
            <BreadcrumbSection header="About us" title="About us"/>
            <section className="tf__about_us_page mt_195 xs_mt_100">
                <AboutSection3 style=''/>
                {/* <PopularServiceSection2/> */}
                <CourseSection style="tf__popular_courses"/>
                <TeamSection style="tf__team_3 pt_250 pb_100" />
                <FaqSection img="images/faq_img_2.jpg"/>
                {/* <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/> */}
                <BlogSection/>
            </section>
        </Layout>
    )
}

import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";

import TrainingLevels from "@/component/course/TrainingLevels";

import Railway from "@/component/Exam/Railway";
import Layout from "@/component/layout/Layout";
import GovtService from "@/component/service/GovtService";
import Achievers from "@/component/team/Achievers";
import CourseFeature from "@/component/team/CourseFeatures";
import VideoSection from "@/component/video/VideoSection";

export const metadata = {
    title: "Aishwarya Academy",
    description: "Developed by Otomatiks",
}
export default function Courses() {
    return (
        // <Layout>
        //     <BreadcrumbSection header='BANK EXAM' title='BANK EXAM'/>
        //     <AllCourseSection/>
        //     <VideoSection />
        //     <WorkSection />
        //     <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" />
        //     <ContactSection2 />
        // </Layout>
         <Layout>
         <BreadcrumbSection header='RAILWAY EXAM' title='RAILWAY EXAM'/>
        <Railway />
        <GovtService />
        <VideoSection />
        <TrainingLevels />
        <CourseFeature />
        <Achievers style="tf__team_3 pt_250 pb_100"/>
     </Layout>
    )
}
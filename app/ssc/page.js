import ActivitySection2 from "@/component/activity/ActivitySection2";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactSection2 from "@/component/contact/ContactSection2";
import AllCourseSection from "@/component/course/AllCourseSection";
import BankExam from "@/component/Exam/BankExam";
import SscExam from "@/component/Exam/Ssc";
import Layout from "@/component/layout/Layout";
import GovtService from "@/component/service/GovtService";
import VideoSection from "@/component/video/VideoSection";
import WorkSection from "@/component/work/WorkSection";
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
         <BreadcrumbSection header='SSC EXAM' title='SSC EXAM'/>
      <SscExam />
        <GovtService />
        <VideoSection />
     </Layout>
    )
}
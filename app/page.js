import AboutSection3 from "@/component/about/AboutSection3";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BannerSection3 from "@/component/banner/BannerSection3";
import HomeAdd from "@/component/banner/HomeAdd";
import BlogSection2 from "@/component/blog/BlogSection2";
import CategorySection3 from "@/component/category/CategorySection3";
import ContactSection from "@/component/contact/ContactSection";
import ContactSection2 from "@/component/contact/ContactSection2";
import CounterSection from "@/component/counter/CounterSection";
import CourseSection2 from "@/component/course/CourseSection2";
import FooterSection2 from "@/component/footer/FooterSection2";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
import TeamSection from "@/component/team/TeamSection";
import TestimonialSection2 from "@/component/testimonial/TestimonialSection2";
import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoSection from "@/component/video/VideoSection";
export const metadata = {
  title: "Aishwarya Academy",
  description: "Developed by Otomatiks",
};
export default function Home3() {
  return (
    <div className="home_3">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" logo="images/logo3.png" />
      <BannerSection3 />
      <CategorySection3 />
  {/* <HomeAdd /> */}

      <AboutSection3 style="about_3" />
      <VideoSection />
      <ContactSection />
      <CourseSection2 />
      <CounterSection />
      <TeamSection style="tf__team_3 pt_250 pb_100" />
      <TestimonialSection2 />
      <ContactSection2 />
      {/* <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" /> */}
      {/* <BlogSection2 /> */}
      <FooterSection2 style="tf__footer_3" logo="images/footer_logo3.png" />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
}

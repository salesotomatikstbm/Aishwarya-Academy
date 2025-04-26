import AboutSection from "@/component/about/AboutSection";
import ActivitySection2 from "@/component/activity/ActivitySection2";
import BannerSection3 from "@/component/banner/BannerSection3";
import HeroSection from "@/component/banner/HeroSection";
import CategorySection2 from "@/component/category/CategorySection2";

import Testimonial from "@/component/cms/Testimonial";

import CounterSection from "@/component/counter/CounterSection";
import CourseSection2 from "@/component/course/CourseSection2";
import FooterSection2 from "@/component/footer/FooterSection2";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
import Achievers from "@/component/team/Achievers";
import TeamSection from "@/component/team/TeamSection";
import TestimonialSection2 from "@/component/testimonial/TestimonialSection2";

import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
export const metadata = {
  title: "Aishwarya Academy",
  description: "Developed by Otomatiks",
};
export default function Home3() {
  return (
    <div className="home_3 .home_3_color">
      <TopbarSection style="tf__topbar tf__topbar_2" />
      <NavbarSection style="main_menu_3" logo="images/logo3.png" />
      <HeroSection />
     
      <CategorySection2 />


      
      <AboutSection />

      <CounterSection />
      {/* <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100"/> */}
      <Achievers style="tf__team_3 pt_250 pb_10" />
      <TeamSection style="tf__team_2 pt_100 pb_10" />
      

      <Testimonial />

      <CourseSection2 />
      <TestimonialSection2 />
      <FooterSection2 style="tf__footer_3" logo="images/footer_logo3.png" />
      <VideoModal />
      <ScrollToTopButton style="style-3" />
    </div>
  );
}

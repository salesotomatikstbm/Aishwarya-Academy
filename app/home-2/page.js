import AboutSection2 from "@/component/about/AboutSection2";
import BannerSection2 from "@/component/banner/BannerSection2";
import BlogSection2 from "@/component/blog/BlogSection2";
import CategorySection2 from "@/component/category/CategorySection2";
import CourseSection from "@/component/course/CourseSection";
import EventSection from "@/component/event/EventSection";
import FooterSection2 from "@/component/footer/FooterSection2";
import HeaderSection from "@/component/header/HeaderSection";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection2 from "@/component/navbar/NavbarSection2";
import PopularServiceSection from "@/component/service/PopularServiceSection";
import TeamSection from "@/component/team/TeamSection";
import TestimonialSection2 from "@/component/testimonial/TestimonialSection2";
import TopbarSection from "@/component/topbar/TopbarSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
export const metadata = {
  title: "Eduor Home Page 2",
  description: "Developed by Azizur Rahman",
};
export default function Home2() {
  return (
    <>
      <TopbarSection style="tf__topbar" />
      <HeaderSection />
      <NavbarSection2 />
      <BannerSection2 />
      <CategorySection2 />
      <AboutSection2 />
      <PopularServiceSection />
      <EventSection
        section="tf__upcoming_event mt_100 pt_95 pb_100"
        endIndex={-4}
      />
      <TestimonialSection2 />
      <CourseSection style="tf__courses_2" />
      <TeamSection style="tf__team_2 mt_100 pt_95 pb_100" />
      <BlogSection2 />
      <FooterSection2 style="tf__footer_2" logo="images/footer_logo2.png" />
      <VideoModal />
      <ScrollToTopButton style="style-2" />
    </>
  );
}

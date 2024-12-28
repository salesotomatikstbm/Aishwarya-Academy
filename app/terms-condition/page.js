import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TermSection from "@/component/terms/TermSection";
export const metadata = {
  title: 'Eduor Terms & Condition Page',
  description: 'Developed by Azizur Rahman',
}
export default function TermsCondition() {
    return (
        <Layout>
            <BreadcrumbSection title='Terms And Conditions' header='Terms And Conditions'/>
            <TermSection/>
        </Layout>
    )
}
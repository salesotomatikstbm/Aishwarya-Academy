import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import AllTeamMemberSection from "@/component/team/AllTeamMemberSection";
export const metadata = {
  title: 'Eduor Team Page',
  description: 'Developed by Azizur Rahman',
}
export default function Team() {
    return (
        <Layout>
            <BreadcrumbSection header='Team' title='Team'/>
            <AllTeamMemberSection/>
        </Layout>
    )
}
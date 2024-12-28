import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TeamDetailSection from "@/component/team/TeamDetailSection";
import { teamData } from "@/data/Data";
export const metadata = {
  title: "Eduor Team Details Page",
  description: "Developed by Azizur Rahman",
};
export default function TeamDetails({ params }) {
  const { slug } = params;
  const teamDesc = teamData.find((item) => item.slug === slug);
  return (
    <Layout>
      <BreadcrumbSection header="Team Details" title="Team Details" />
      {teamDesc ? (
        <TeamDetailSection teamInfo={teamDesc} />
      ) : (
        <ErrorSection type="Team Member" />
      )}
    </Layout>
  );
}

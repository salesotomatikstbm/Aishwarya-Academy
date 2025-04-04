import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TeamDetailSection from "@/component/team/TeamDetailSection";
import ErrorSection from "@/component/ErrorSection";
import { teamData } from "@/data/Data";

export const metadata = {
  title: "Aishwarya Academy",
  description: "Developed by Otomatiks",
};

export default function TeamDetails({ params }) {
  const { slug } = params;
  const teamDesc = teamData.find((item) => item.slug === slug) || null;

  if (!teamDesc) {
    console.error("Team member not found for slug:", slug); // Debugging log
  }

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

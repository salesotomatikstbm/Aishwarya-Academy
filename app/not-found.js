import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";

export const metadata = {
  title: 'Aishwarya Academy 404 Page',
  description: 'Developed by Otomatiks',
}
export default function NotFound() {
  return (
        <Layout>
            <BreadcrumbSection header='404 Page' title='404'/>
            <ErrorSection type='Page'/>
        </Layout>
  )
}
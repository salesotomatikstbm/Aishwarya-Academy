import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
import { blogData } from "@/data/Data";
export const metadata = {
  title: 'Eduor Blog Details Page',
  description: 'Developed by Azizur Rahman',
}
export default function BlogDetails({params}) {
    const { slug } = params;
    const blogDesc = blogData.find((item) => item.slug === slug);
    return (
        <Layout>
            <BreadcrumbSection header='Blog Details' title='Blog Details'/>
            {blogDesc ? (
                <BlogDetailSection blogDesc={blogDesc}/>
            ):(
                <ErrorSection type='Blog'/>
            )}
        </Layout>
    )
}
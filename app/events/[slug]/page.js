import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import EventDetailSection from "@/component/event/EventDetailSection";
import Layout from "@/component/layout/Layout";
import { eventData } from "@/data/Data";
export const metadata = {
  title: 'Eduor Event Details Page',
  description: 'Developed by Azizur Rahman',
}
export default function EventDetails({params}) {
    const {slug} = params;
    const eventDesc = eventData.find((item) => item.slug === slug)
    return (
        <Layout>
            <BreadcrumbSection header='Event Details' title='Event Details'/>
            {eventDesc ? (
                <EventDetailSection eventDesc={eventDesc}/>
            ):(
                <ErrorSection type='Event'/>
            )}
        </Layout>
    )
}
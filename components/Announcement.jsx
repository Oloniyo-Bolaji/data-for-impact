import AnnouncementCard from "@/CardComponents/AnnouncementCard";
import { client } from "@/src/sanity/client";
import { getAnnouncement } from "@/src/sanity/queries";

const options = { next: { revalidate: 30 } };

const Announcement = async () => {
  const announcement = await client.fetch(getAnnouncement, {}, options);

  if (!announcement || announcement.length === 0) return null;

  return (
    <section className="my-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <h3 className="headings mb-6">
          Upcoming <span className="text-teal">Events</span>
        </h3>

        {/* Announcement Box */}
       <AnnouncementCard announcement={announcement[0].newAnnouncement}/>
      </div>
    </section>
  );
};

export default Announcement;

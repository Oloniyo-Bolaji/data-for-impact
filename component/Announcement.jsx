import AnnouncementCard from "@/card-component/AnnouncementCard";
import { client } from "@/src/sanity/client";
import { getAnnouncement } from "@/src/sanity/queries";
import Heading from "./Heading";

const options = { next: { revalidate: 30 } };

const Announcement = async () => {
  const [announcement] = await client.fetch(getAnnouncement, {}, options);

  if (!announcement || announcement.length === 0) return null;

  return (
    <section className="my-5">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Heading */}
        <Heading heading="Upcoming Events" />

        {/* Announcement Container */}
        <AnnouncementCard announcement={announcement} />
      </div>
    </section>
  );
};

export default Announcement;

import { getMentors } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import MentorCard from "@/card-component/MentorCard";
import Heading from "./Heading";

const options = { next: { revalidate: 30 } };

const Mentor = async () => {
  const mentors = await client.fetch(getMentors, {}, options);

  if (!mentors?.length) return null;

  return (
    <section aria-labelledby="mentors-heading" className="my-5">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <Heading heading="Meet The Mentors" />
        <p className="heading-description py-5">
          Our proactive mentors are industry leaders passionate about guiding
          the next generation of data innovators.
        </p>
      </div>

      {/* Mentor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {mentors.map((mentor) => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </section>
  );
};

export default Mentor;

import { getMentors } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import MentorCard from "@/dynamic-component/MentorCardWrapper";

const options = { next: { revalidate: 30 } };

const Mentor = async () => {
  const mentors = await client.fetch(getMentors, {}, options);

  if (!mentors?.length) return null;

  return (
    <section aria-labelledby="mentors-heading" className="my-5">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 id="mentors-heading" className="headings">
          Meet The <span className="text-teal">Mentors</span>
        </h2>
        <p className="heading-description">
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

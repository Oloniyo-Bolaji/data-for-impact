import TestimonalCard from "@/card-component/TestimonalCard";
import { client } from "@/src/sanity/client";
import { getTestimonials } from "@/src/sanity/queries";
import Marquee from "react-fast-marquee";

const revalidateOptions = { next: { revalidate: 30 } };

const Testimonials = async () => {
  const testimonials = await client.fetch(
    getTestimonials,
    {},
    revalidateOptions
  );

  if (!testimonials?.length) return null;

  return (
    <section className="my-12">
      <div className="mx-auto max-w-screen-xl">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h3 className="headings my-3">Testimonials</h3>
          <div className="h-0.5 w-16 rounded bg-blue" aria-hidden="true" />
        </div>

        {/* Testimonials Marquee */}
        <Marquee speed={60} gradient={false} pauseOnHover className="py-5">
          {testimonials.map((t) => (
            <TestimonalCard testimonial={t} key={t._id} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;

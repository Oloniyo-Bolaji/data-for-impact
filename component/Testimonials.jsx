import TestimonalCard from "@/card-component/TestimonalCard";
import { client } from "@/src/sanity/client";
import { getTestimonials } from "@/src/sanity/queries";
import Marquee from "react-fast-marquee";
import Heading from "./Heading";

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
        <Heading heading="Testimonials" />

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

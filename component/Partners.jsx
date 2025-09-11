import { getSponsors } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import PartnersCard from "@/dynamic-component/PartnersCardWrapper";
import Heading from "./Heading";

const options = { next: { revalidate: 30 } };

const Partners = async () => {
  const sponsors = await client.fetch(getSponsors, {}, options);

  return (
    <section className="py-2.5 my-10">
      <div className="max-w-screen-xl mx-auto">
        <Heading heading=" Our Sponsors & Partners" />
        <PartnersCard sponsors={sponsors} />
      </div>
    </section>
  );
};

export default Partners;

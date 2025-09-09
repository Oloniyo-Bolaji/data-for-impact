import { getSponsors } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import PartnersCard from "@/DynamicComponents/PartnersCardWrapper";

const options = { next: { revalidate: 30 } };

const Partners = async () => {
  const sponsors = await client.fetch(getSponsors, {}, options);

  return (
    <section className="py-2.5 my-10">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="headings">
          Our Sponsors & <span className="text-teal">Partners</span>
        </h3>
        <PartnersCard sponsors={sponsors}/>
      </div>
    </section>
  );
};

export default Partners;

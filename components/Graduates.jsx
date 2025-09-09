import { getGraduates } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import GraduatesCard from "@/CardComponents/GraduatesCard";

const options = { next: { revalidate: 30 } };

const Graduates = async () => {
  const graduates = await client.fetch(getGraduates, {}, options);

  return (
    <div className="max-w-screen-xl mx-auto pt-[10px]">
      <h4 className="headings"> Meet Some of our alumni</h4>
      <p className="heading-description">
        Some of the amazing people who have been mentored by us
      </p>
      <div className="py-[10px]">
        <GraduatesCard graduates={graduates} />
      </div>
    </div>
  );
};

export default Graduates;

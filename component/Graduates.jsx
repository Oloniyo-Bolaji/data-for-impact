import { getGraduates } from "@/src/sanity/queries";
import { client } from "@/src/sanity/client";
import GraduatesCard from "@/card-component/GraduatesCard";
import Heading from "./Heading";

const options = { next: { revalidate: 30 } };

const Graduates = async () => {
  const graduates = await client.fetch(getGraduates, {}, options);

  return (
    <div className="max-w-screen-xl mx-auto pt-[10px]">
      <Heading heading="Meet Some of our alumni" />
      <p className="heading-description py-5">
        Some of the amazing people who have been mentored by us
      </p>
      <div className="py-2">
        <GraduatesCard graduates={graduates} />
      </div>
    </div>
  );
};

export default Graduates;

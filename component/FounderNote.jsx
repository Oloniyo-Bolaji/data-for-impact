import { urlFor } from "@/lib/imageBuilder";
import { client } from "@/src/sanity/client";
import { getNote } from "@/src/sanity/queries";
import Image from "next/image";
import Heading from "./Heading";
import dynamic from "next/dynamic";

const FoundersCard = dynamic(() => import("@/card-component/FoundersCard"));

const options = { next: { revalidate: 30 } };

const FounderNote = async () => {
  const [note] = await client.fetch(getNote, {}, options);
  if (!note) return null;

  return (
    <section aria-labelledby="founder-heading" className="my-5">
      <Heading heading="From the Founder's Desk" id="founder-heading" />
      <div className="flex flex-col sm:flex-row rounded-3xl sm:border-2 sm:border-blue overflow-hidden w-full my-5">
        {/**Founder Image */}
        <div className="relative sm:w-1/2 w-full min-h-[300px]">
          <Image
            src={urlFor(note.picture).url()}
            alt={note.name || "Founder"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/**Foundersnote content */}
        <FoundersCard note={note} />
      </div>
    </section>
  );
};

export default FounderNote;

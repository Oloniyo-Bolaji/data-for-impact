import FoundersCard from "@/CardComponents/FoundersCard";
import { urlFor } from "@/lib/imageBuilder";
import { client } from "@/src/sanity/client";
import { getNote } from "@/src/sanity/queries";
import Image from "next/image";

const options = { next: { revalidate: 30 } };

const FounderNote = async () => {
  const notes = await client.fetch(getNote, {}, options);
  const note = notes?.[0];

  if (!note) return null;

  return (
    <section
      className="max-w-screen-xl mx-auto lg:px-10 sm:px-10 px-5 my-10"
      aria-labelledby="founder-heading"
    >
      <div className="flex flex-col sm:flex-row rounded-3xl border-2 border-[#00274d] overflow-hidden w-full">
        {/**Founder Image */}
        <div className="relative sm:w-1/2 w-full min-h-[300px]">
          <Image
            src={urlFor(note.picture).url()}
            alt={note.name || "Founder"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/**Foundersnote content */}
        <FoundersCard note={note}/>
      </div>
    </section>
  );
};

export default FounderNote;

import { client } from "@/src/sanity/client";
import { getCounts } from "@/src/sanity/queries";

const Metrics = async () => {
  let metrics = [];

  try {
    metrics = await client.fetch(
      getCounts,
      {},
      { next: { revalidate: 30 } }
    );
    console.log("Fetched team members:", metrics);
  } catch (error) {
    console.error("Failed to fetch team members:", error);
  }

  return (
    <section className="px-5 py-10">
      <div className="max-w-screen-xl mx-auto w-full h-full flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-7 sm:shadow-[5px_5px_10px_#7A7A7A50]">
          {metrics.map((metric) => (
            <div key={metric._id} className="w-full flex-col-center p-5">
              <h1 className="text-[50px] text-[#1e365b] sm:font-[800] font-bold">
                {metric.value}
              </h1>
              <p className="text-grey sm:text-[15px] text-[14px]">
                {metric.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

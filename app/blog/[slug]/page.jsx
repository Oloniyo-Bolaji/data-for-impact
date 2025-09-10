import BackButton from "@/component/BackButton";
import BlogContent from "@/component/BlogContent";

const page = ({ params }) => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col sm:gap-[20px] gap-[10px] py-[20px] lg:px-[150px] sm:px-[100px] px-[20px]">
        <BackButton />
        <BlogContent params={params} />
      </div>
    </div>
  );
};

export default page;

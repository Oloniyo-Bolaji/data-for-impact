import Contact from "@/component/Contact";
import Form from "@/component/Form";

const page = () => {
  return (
    <main className="max-w-xl mx-auto my-[50px] py-[50px] flex flex-col gap-5">
      <Form />
      <Contact />
    </main>
  );
};

export default page;

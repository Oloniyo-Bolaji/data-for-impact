const Heading = ({ heading }) => {

    
  return (
    <div className="flex flex-col items-center">
      <h3 className="headings my-3">{heading}</h3>
      <div className="h-0.5 w-16 rounded bg-blue" aria-hidden="true" />
    </div>
  );
};

export default Heading;

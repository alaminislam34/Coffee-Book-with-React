/* eslint-disable react/prop-types */
const Heading = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-12">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">{title}</h1>
      <p className="text-sm md:text-lg lg:text-xl text-black/80">{subTitle}</p>
    </div>
  );
};

export default Heading;

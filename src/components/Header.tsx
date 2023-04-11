import type { NextPage } from "next";

const Header: NextPage = () => {
 
  return (
    <>
      <div className="pb-6 border-b">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <h1 className="text-black">Header</h1>
        </div>
      </div>
    </>
  );
};

export default Header;

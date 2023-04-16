import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Home: NextPage = () => {
  const SocialLoginDynamic = dynamic(
    () => import("../components/scw").then((res) => res.default),
    {
      ssr: false,
    }
  );
  return (
    <>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Gator Wallet
                </h1>
              </div>
            </div>
            <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
    </div>
          </div>
        </main>
        
    </>
  );
};

export default Home;

'use client'
import Link from "next/link";
import { Canvas } from '@react-three/fiber'
import Experience from "../ui/ThreeDExperience";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
const Hero = () => {
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  // Update canvas height when the window is resized
  useEffect(() => {
      const handleResize = () => {
          setCanvasHeight(window.innerHeight);
          setCanvasWidth(window.innerWidth)
      };
      window.addEventListener('resize', handleResize);
      // Cleanup listener on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark w-full "
      >
        <div className=" relative">
          <Canvas shadows camera={ { fov: 30, near: 0.1, far: 500, position: [ 0, 7, 25 ] } } style={{ height: "800px" , width: canvasWidth}}>
            <Experience />
            {/* <OrbitControls /> */}
          </Canvas>
          <div className="container">
          <div className=" flex flex-wrap absolute z-1 top-8 pt-[120px]   md:pt-[150px]  xl:pt-[180px]  2xl:pt-[210px]">
            <div className="w-full px-4">
              <div className=" max-w-[550px] text-left">
                <h1 className="mb-5 text-8xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight text-left">
                Revolutionize your developer presence
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl text-left">
                  We abstract away the need for you to focus on social media presence, so you can focus on your craft
                </p>
                <div className="flex flex-col items-center justify-left space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Pro
                  </Link>
                  <Link
                    href="https://github.com/krishhh16/DevWare"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
       
      
      </section>
    </>
  );
};

export default Hero;

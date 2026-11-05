import React from "react";

//countp
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/*img*/}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          {/*text*/}
          <motion.div variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }} className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a freelance 3453425634564564325432543534
            </h3>
            <p className="mb-6">
              2q38934274386413278321463782431247t823478t623678524783563247856432
            </p>
            {/*stats*/}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experence
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Complete
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

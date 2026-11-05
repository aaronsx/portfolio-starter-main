import React from "react";

//countp
import CountUp from "react-countup";
// intersection observer
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

//services
const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.",
    link: "Learn more",
  },
  {
    name: "Degital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, quia quo expedita accusamus illum ducimus.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  e image*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              24534333333 3245555 5555552534 563464576342324324234346 456456
              3232432
            </h3>
            <button className="btn btn-sm">See My work</button>
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amout: 0.3 }}
          className="flex-1">
            {/* services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-whiter/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 item-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="relative">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name} />
        ))}
      </div>
      <BallCanvas icons={technologies.map((technology) => technology.icon)} />
    </div>
  );
};

export default SectionWrapper(Tech, "");

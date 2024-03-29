import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc/";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  app_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-2 rounded-2xl sm:w-[500px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover
          rounded-2xl"
          />
          <div
            className="absolute inset-0 flex justify-end
        m-3 card-img_hover"
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center
           items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3
            className="text-white font-bold text-[24px] cursor-pointer"
            onClick={() => window.open(app_link, "_blank")}
          >
            {name}
          </h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] $(tag.color)`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-secondary text-[17px] max-w-3xl 
        leading-[30px]"
        >
          I am currently working on several projects described below. They are
          linked to code repositories for now with instructions on how to use
          them locally with Docker. I am currently unable to launch them on EC2
          instances due to free tier limitations. KnowlEdge is deployed on
          render and I am in the process of deploying the rest of my projects.
        </motion.p>
      </div>
      <div className="w-full mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

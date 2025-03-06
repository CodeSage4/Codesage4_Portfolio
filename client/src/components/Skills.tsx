import { motion } from "framer-motion";
import { SiPython, SiTensorflow, SiPytorch, SiDocker, SiGit, SiStreamlit, SiOpencv, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, color: "text-blue-500" },
  { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
  { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
  { name: "OpenCV", icon: SiOpencv, color: "text-green-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Streamlit", icon: SiStreamlit, color: "text-red-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <skill.icon className={`w-16 h-16 ${skill.color} mb-4`} />
              <span className="text-lg font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
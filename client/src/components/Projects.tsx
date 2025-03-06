import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "BERT Text Summarization",
    description: "Fine-tuned a BERT model achieving 85% accuracy on custom dataset. Developed a Streamlit web app for easy model interaction and deployment.",
    image: "https://images.unsplash.com/photo-1456953180671-730de08edaa7",
    tags: ["Python", "BERT", "Streamlit", "NLP"],
  },
  {
    title: "Classical Dance Recognition",
    description: "Developed a ResNet18-based model for real-time classical Indian dance classification with Grad-CAM++ for model interpretation and explainability.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
    tags: ["PyTorch", "ResNet18", "OpenCV", "XAI"],
  },
  {
    title: "Multi-Agent Conversational Framework",
    description: "Built a collaborative multi-agent system for content transformation, reducing post creation time by 40%. Implemented using Google Gemini for NLP.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01",
    tags: ["Python", "Google Gemini", "Streamlit", "Multi-Agent Systems"],
  },
  {
    title: "Shoe Size Estimation System",
    description: "Developed models for foot detection and measurement using A4 paper as reference, achieving 2mm accuracy margin. Deployed on AWS infrastructure.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    tags: ["Computer Vision", "AWS", "Python", "ML"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
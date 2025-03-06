import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src="varun_1739212235689.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    I'm a passionate ML Engineer with expertise in Python, Machine Learning, and AI technologies. 
                    My experience includes developing sophisticated AI models and applications, from text summarization 
                    using BERT to real-time classical dance recognition systems.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    I specialize in Natural Language Processing, Computer Vision, and Deep Learning, with a strong 
                    foundation in both theoretical concepts and practical applications. My work includes developing 
                    multi-agent conversational frameworks and implementing advanced AI solutions for real-world problems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
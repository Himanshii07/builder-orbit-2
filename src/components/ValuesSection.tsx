import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, HelpCircle, Ear } from "lucide-react";

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: BookOpen,
      text: "What I don't know, I learn",
      color: "text-blue-600",
    },
    {
      icon: Brain,
      text: "I am a critical thinker (overthinker)",
      color: "text-purple-600",
    },
    {
      icon: HelpCircle,
      text: "I ask the right questions",
      color: "text-green-600",
    },
    {
      icon: Ear,
      text: "I am a good listener",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Values as a Designer
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              The principles that guide my design approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-minimal-sage/20 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-normal text-foreground">
                      {value.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

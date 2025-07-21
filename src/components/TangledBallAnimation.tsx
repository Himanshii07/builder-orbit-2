import React from "react";
import { motion } from "framer-motion";

const IllustrationsSection: React.FC = () => {
  const illustrations = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073",
      title: "",
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660",
      title: "",
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2",
      title: "",
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367",
      title: "",
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3",
      title: "",
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945",
      title: "",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              When I am not glued to my laptop
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              I try to explore places and capture art
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {illustrations.map((illustration, index) => (
              <motion.div
                key={illustration.id}
                className="group overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={illustration.src}
                    alt={illustration.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-normal text-foreground text-center">
                    {illustration.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IllustrationsSection;

import React from "react";
import { motion } from "framer-motion";

const IllustrationsSection: React.FC = () => {
  const illustrations = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Ff65df03c1ae94121ba01db30ec410ed3?format=webp&width=800",
      title: "Digital Art 1",
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fbb0c9fb0e17249baa3f46f3472da3f40?format=webp&width=800",
      title: "Digital Art 2",
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fc18dcab9917548469d723833a0e195c8?format=webp&width=800",
      title: "Digital Art 3",
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6658e5b7f3c542aa84e3836cac4ab3bd?format=webp&width=800",
      title: "Digital Art 4",
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Faa26438c10a145758ace0a70c8c8e288?format=webp&width=800",
      title: "Digital Art 5",
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Ff65df03c1ae94121ba01db30ec410ed3?format=webp&width=800",
      title: "Digital Art 6",
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
              My Illustrations
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Creative artwork and digital illustrations
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

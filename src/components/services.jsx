import React from "react";
import { motion } from "framer-motion";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
            Descubre nuestros productos diseñados para el bienestar y cuidado dental de toda la familia.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </motion.div>
              ))
            : "Cargando..."}
        </div>
      </div>
    </div>
  );
};

import { Image } from "./image";
import React from "react";

export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Explora nuestra selección de productos con calidad garantizada.</p>
        </div>
        <div className="row">
          <div className="portfolio-items" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {data && data.length > 0 ? (
              data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    style={{
                      width: "100%",
                      maxWidth: "50px", 
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

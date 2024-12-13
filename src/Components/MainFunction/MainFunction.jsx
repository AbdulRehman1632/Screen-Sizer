import React, { useEffect, useState } from "react";
import "./MainFunction.css";

const MainFunction = () => {
  const [Dimention, SetDimention] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const UpdateDimention = () => {
    SetDimention({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", UpdateDimention);

    return () => {
      window.removeEventListener("resize", UpdateDimention);
    };
  }, [Dimention]);

  return (
    <div className="mainWrapper">
      <div className="container d-flex justify-content-center">
        <div className="row ">
          <div className="col-md-12">
            <div className="contents">
              <h1>WHAT IS MY SCREEN SIZE?</h1>
            </div>
            <div className="dimensionWrapper">
              <div className="dimensionContent">
                <h2>you are using:</h2>
              </div>

              <div className="dimensions">
                {Dimention.width < 1025 ? (
                  <img
                    src="./assets/images/mobile.png"
                    alt="Mobile View"
                    width="300"
                    height="300"
                  />
                ) : (
                  <img
                    src="./assets/images/Pc.png"
                    alt="PC View"
                    width="500"
                    height="500"
                  />
                )}
              </div>

              <h1>
                {Dimention.width} X {Dimention.height}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFunction;

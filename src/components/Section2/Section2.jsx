import React from "react";
import s from "./Section2.module.scss";
import Button from "../Button/Button";
const Section2 = () => {
  return (
    <>
      <section className={s.section2}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.box}>
              <div className={s.div}>
                <div className="div2">
                  <h1>INTRODUCTION</h1>
                  <h1>TO HYDRA VR</h1>
                  <img src="/strelochka.png" alt="" />
                </div>

                <img src="/maskaman.png" alt="" />
              </div>

              <div className={s.div2}>
                <p>
                  Vitae sapien pellentesque habitant morbi tristique senectus et
                  netus et. <br /> Feugiat nibh sed pulvinar proin gravida hendrerit
                  lectus. <br /> Mi sit amet mauris commodo quis imperdiet massa
                  tincidunt nunc. <br /> Viverra aliquet eget sit amet tellus. <br /> Ornare
                  lectus sit amet est placerat in. Lectus magna fringilla urna
                  porttitor rhoncus vitae.
                </p>

                <h1>About</h1>
                <h1>HYDRA VR</h1>
                <p>
                  Eget mi proin sed libero enim sed faucibus turpis. Nisl
                  rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
                  augue eget arcu dictum. Ultrices gravida dictum fusce ut
                  placerat orci. <br /> Aenean et tortor at risus viverra adipiscing at
                  in. Mattis aliquam faucibus purus in massa.  Est placerat in
                  egestas erat imperdiet sed. Consequat semper viverra nam
                  libero justo laoreet sit amet. Aliquam etiam erat velit
                  scelerisque in dictum non consectetur a. Laoreet sit amet
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
                  Sem nulla pha retra diam sit amet nisl suscipit adipiscing
                  bibendum. Leo a diam sollicitudi n tempor.
                </p>
                <Button>LET’S GET IN TOUCH</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;

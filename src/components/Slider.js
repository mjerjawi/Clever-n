import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { createStyles } from "@mantine/core";
import Image from "next/image";
import { imagesUrl } from "../../helper/imagesUrl";

const useStyles = createStyles((theme, _params, getRef) => ({
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

const Slider = () => {
  const { classes } = useStyles();
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <div className={classes.slider}>
          <Image
            src={`${imagesUrl}c1bf5457-bbb6-462f-9895-05403d52681e`}
            alt="Logo"
            width="1300"
            height="450"
          />
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className={classes.slider}>
          <Image
            src={`${imagesUrl}31e37123-da5e-44b3-8d94-56f368872d68`}
            alt="Logo"
            width="1300"
            height="450"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

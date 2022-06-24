import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { createStyles } from "@mantine/core";
import { imagesUrl } from "../../../helper/imagesUrl";
import "keen-slider/keen-slider.min.css";

const useStyles = createStyles((theme, _params, getRef) => ({
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function App() {
  const { classes } = useStyles();

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}52467841-88e8-4c02-8664-de248723fb97`}
              alt="Logo"
              width="384"
              height="512"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}214bf76b-b6c5-4b76-a0bb-07eb5ba81020`}
              alt="Logo"
              width="384"
              height="512"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}1be9f740-e081-44a4-baca-d44a2400d883`}
              alt="Logo"
              width="384"
              height="512"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}76291639-7372-42e9-b443-2071bcbe53de`}
              alt="Logo"
              width="384"
              height="512"
            />
          </div>
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}52467841-88e8-4c02-8664-de248723fb97`}
              alt="Logo"
              width="96"
              height="128"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}214bf76b-b6c5-4b76-a0bb-07eb5ba81020`}
              alt="Logo"
              width="96"
              height="128"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}1be9f740-e081-44a4-baca-d44a2400d883`}
              alt="Logo"
              width="96"
              height="128"
            />
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className={classes.slider}>
            <Image
              src={`${imagesUrl}76291639-7372-42e9-b443-2071bcbe53de`}
              alt="Logo"
              width="96"
              height="128"
            />
          </div>
        </div>
      </div>
    </>
  );
}

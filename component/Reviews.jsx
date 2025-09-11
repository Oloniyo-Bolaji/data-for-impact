import React from "react";
import Heading from "./Heading";

const Reviews = () => {
  return (
    <section className="sm:my-7 my-5 px-7">
      <div className="max-w-screen-xl mx-auto min-h-[400px]">
        {/* heading */}
        <div>
          <Heading heading=" Impact Stories" />
          <p className="heading-description py-5">
            Our words are one thing, but the real impact is best expressed by
            those who’ve experienced it firsthand. Hear directly from our
            students as they share their journeys, challenges, and the
            transformation.
          </p>
        </div>

        {/* video */}
        <div className="mt-6 flex justify-center w-full">
          <video
            src="/reviews.mp4"
            controls
            title="Graduate Reviews"
            aria-label="Video reviews from our graduates"
            className="rounded-xl shadow-lg w-full max-w-[800px] aspect-video"
          >
            <track
              src="/captions.vtt"
              kind="captions"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

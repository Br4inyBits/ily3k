const nav = document.querySelector(".nav");
const navItem = nav.querySelectorAll(".nav_list_item");

const transition = document.querySelector(".transition");
const transitionCol = transition.querySelectorAll(".transition_column");
const transitionColText = transition.querySelectorAll(
  ".transition_column_text > span"
);
const transitionElementText = transition.querySelectorAll(
  ".transition_element > h1"
);

const initTransition = () => {
  gsap.set(transition, {
    display: "none",
    autoAlpha: 0,
  });
  gsap.set(transitionCol, {
    y: "-101%",
  });
  gsap.set(transitionColText, {
    autoAlpha: 0,
    y: "-101%",
  });
  gsap.set(transitionElementText, {
    autoAlpha: 0,
  });
};

const show = () => {
  gsap
    .timeline({
      defaults: {
        ease: "expo.inOut",
      },
    })
    .to(
      transition,
      {
        duration: 0.2,
        display: "block",
        autoAlpha: 1,
      },
      0
    )
    .to(
      transitionCol,
      {
        duration: 1.25,
        y: 0,
        stagger: {
          each: 0.045,
          from: "random",
          grdi: "auto",
        },
      },
      0.05
    )
    .to(
      transitionColText,
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
      },
      0.5
    )
    .to(
      transitionColText,
      {
        duration: 1,
        autoAlpha: 0,
        y: "101%",
      },
      2.75
    )
    .to(
      transitionElementText,
      {
        duration: 1,
        autoAlpha: 1,
        stagger: {
          each: 0.055,
          from: 'random',
        },
        onComplete: () => {
          hide();
        },
      },
      0.75
    );
};

const hide = () => {
  gsap
    .timeline({
      defaults: {
        ease: "expo.inOut",
      },
    })
    .to(
      transitionElementText,
      {
        duration: 1,
        autoAlpha: 0,
        stagger: 0.055,
      },
      0
    )
    .to(
      transitionCol,
      {
        duration: 1.25,
        y: '101%',
        stagger: {
          each: 0.045,
          from: "random",
          grid: "auto",
        },
      },
      0.75
    )
    .to(transition, {
      duration: 0.2,
      display: "none",
      autoAlpha: 0,
      onComplete: initTransition,
    });
};

navItem.forEach((item) => {
  item.addEventListener("click", show);
});

window.onload = () => {
  initTransition();
};

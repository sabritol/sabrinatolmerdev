export const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 50,
      limit: 100,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: "#5457a0",
    },
    shape: {
      type: "node",
      stroke: {
        width: -12,
        color: "#000000",
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 8,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#5457a0",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 50,
        size: 5,
        duration: 2,
        opacity: 1,
        speed: 2,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  backgroundMask: {
    enable: false,
    cover: {
      color: {
        value: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    },
  },
  retina_detect: true,
  fps_limit: 60,
};

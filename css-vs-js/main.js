const box = document.getElementsByClassName("tomato");

TweenMax.to(box, 4, {
  repeat: Infinity,
  keyframes: {
    "0%": {
      x: 0,
    },
    "48%": {
      rotationY: "0deg",
    },
    "50%": {
      x: 400,
      rotationY: "180deg",
    },
    "98%": {
      rotationY: "180deg",
    },
    "100%": {
      x: 0,
      rotationY: "0deg",
    },
  },
});

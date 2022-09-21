import React from "react";
import { Link } from "react-router-dom";

const PageContents = () => {
  return (
    <main>
      <h5 className="m-5">Contents</h5>
      <ul className="page-contents">
        {contents.map(({ name, url }) => (
          <Link
            key={name}
            to={url}
            className="text-no-underline text-secondary-color"
          >
            <li>
              <h6> {name} </h6>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default PageContents;

const contents = [
  { name: "Getting Started with Animation Basics", url: "example-1" },
  { name: "Making your first animation", url: "example-2" },
  { name: "Making Animation using keyframes", url: "example-3" },
  { name: "Say Hello to Framer Gestures", url: "example-4" },
  { name: "Animation Challege 1", url: "example-5" },
  { name: "Animation Challege 2", url: "example-6" },
  { name: "Animation Challege 3", url: "example-7" },
  { name: "On Scroll Example 1", url: "example-8" },
  { name: "On Scroll Example 2", url: "example-9" },
  { name: "Exit Animation Example", url: "example-10" },
  { name: "Animating SVGs", url: "example-11" },
  { name: "Animation Challenge 4", url: "example-12" },
  { name: "Animations using Lottie Files", url: "example-13" },
  {
    name: "Final Challenge: Can you create route animations?",
    url: "example-14",
  },
];

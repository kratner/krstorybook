import React from "react";
import DescriptiveLoader from "../components/DescriptiveLoader";

export default {
  title: "Preloaders",
  component: DescriptiveLoader
};

export const Preloader = () => (
  <DescriptiveLoader
    message="Loading Message"
    messageColor="#CCCCCC"
    animatedMessage="..."
  />
);

Preloader.story = {
  name: "Descriptive Preloader"
};

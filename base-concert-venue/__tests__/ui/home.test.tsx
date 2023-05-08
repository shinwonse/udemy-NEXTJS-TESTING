import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

/**
 * description, render Fn
 * */
test("page has correct heading and image", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });
  expect(heading).toBeInTheDocument(); // just to make the purpose of this test very clear

  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });
  expect(image).toBeInTheDocument();
});

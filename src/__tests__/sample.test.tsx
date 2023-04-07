import { render, screen } from "@testing-library/react";

describe("sample test", () => {
  it("should return true", () => {
    const isValid = true;
    expect(isValid).toBeTruthy();
  });

  it("should be able to render", () => {
    render(<h1>Hello World</h1>);
    expect(screen.getByRole("heading")).toHaveTextContent("Hello World");
  });

  it("should mock the API automatically", async () => {
    const raw = await fetch("https://api.test.com/todo");
    const data = await raw.json();
    expect(data.tasks).toStrictEqual(["Clean the house", "Walk the dog"]);
  });
});

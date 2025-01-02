import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Navbar from "../../src/components/Navbar";

describe("Navbar Component", () => {
  const renderWithRouter = (props = "/") => {
    return render(
      <MemoryRouter initialEntries={[props]}>
        <Navbar />
      </MemoryRouter>,
    );
  };

  afterEach(() => {
    cleanup();
  });

  test("Should render Navbar component", () => {
    renderWithRouter();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("TodoList")).toBeInTheDocument();
    expect(screen.getByText("Activity")).toBeInTheDocument();
  });

  test("Route home have active class", () => {
    renderWithRouter();
    expect(screen.getByText("Home")).toHaveClass("active");
  });

  test("Route home not have active class", () => {
    renderWithRouter("/todolist");
    expect(screen.getByText("Home")).not.toHaveClass("active");
  });

  test("Route have active class", () => {
    renderWithRouter("/todolist");
    expect(screen.getByText("TodoList")).toHaveClass("active");
  });

  test("User change to TodoList", async () => {
    const user = userEvent.setup();
    renderWithRouter();
    expect(screen.getByText("Home")).toHaveClass("active");

    // Click TodoList
    const todolist = screen.getByText("TodoList");
    await user.click(todolist);
    expect(todolist).toHaveClass("active");
  })
});

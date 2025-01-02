import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
// import dayjs from "dayjs";
import Activity from "../../src/pages/Activity";
import { vi } from "vitest";

describe("Double Eleven Activity", () => {
  beforeEach(() =>{
    render(<Activity />);
  })

  afterEach(() => {
    cleanup();
  });

  test("Not Double Eleven", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("11-11"));
    
    expect(screen.queryByText("Double Eleven Activity")).toBeNull();

    vi.useRealTimers();
  });

  // test("Show Double Eleven Text", () => {
  //   vi.useFakeTimers();
  //   vi.setSystemTime(new Date("2025-11-11T00:00:00Z"));

  //   expect(screen.getByText("Double Eleven Activity")).toBeInTheDocument();

  //   vi.useRealTimers();
  // });
});

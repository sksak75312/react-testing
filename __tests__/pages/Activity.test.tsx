import React from "react";
import { vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Activity from "../../src/pages/Activity";

describe("Double Eleven Activity", () => {
  beforeEach(() => {
    // 使用假時間
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    // 使用真實時間
    vi.useRealTimers();
  });

  test("Not Double Eleven Text", () => {
    // 設定系統模擬時間，因需要先模擬時間才能渲染元件
    vi.setSystemTime(new Date(`${new Date().getFullYear()}-01-01`));
    render(<Activity />);
    expect(screen.queryByText("Double Eleven Activity")).toBeNull();
    // expect(screen.queryByText("Double Eleven Activity")).not.toBeInTheDocument();
  });

  test("Show Double Eleven Text", () => {
    vi.setSystemTime(new Date(`${new Date().getFullYear()}-11-11`));
    render(<Activity />);
    expect(screen.getByText("Double Eleven Activity")).toBeInTheDocument();
  });
});

import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./components/app";

describe("App", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the clock", async () => {
    // Weather fetches on mount; stub it so the test stays offline.
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve({ list: [] }) })
      )
    );

    render(<App />);

    expect(await screen.findByText(/^\d{2} \d{2}$/)).toBeInTheDocument();
  });
});

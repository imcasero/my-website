import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

inject({
  mode: import.meta.env.MODE === "development" ? "development" : "production",
});

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;

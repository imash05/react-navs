import type { Preview } from "@storybook/react";
import "../src/components/Reactnavs/style.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: null,
      storyDescription: {
        component: "Navbar",
      },
    },
  },
};

export default preview;

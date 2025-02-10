import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./story-styles.css";

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      mobile: {
        name: "Mobile",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      tablet: {
        name: "Tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      desktop: {
        name: "Desktop",
        styles: {
          width: "1280px",
          height: "800px",
        },
      },
    },
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#ffffff" },
      { name: "dark", value: "#333333" },
    ],
  },
  options: {
    storySort: {
      order: ["Introduction", "Components", "Layouts"],
    },
  },
  docs: {
    description: {
      component:
        "This component follows accessibility and performance best practices.",
    },
  },
  controls: { expanded: true },
  a11y: {
    // Accessibility addon
    element: "#root",
    config: {},
    options: {},
  },
};

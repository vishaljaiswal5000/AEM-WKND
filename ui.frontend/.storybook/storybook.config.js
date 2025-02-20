export const parameters = (url) => {
    return [
      {
        type: "figspec",
        accessToken:  process.env.STORYBOOK_FIGMA_ACCESS_TOKEN,
        url,
      },
      {
        type: "figma",
        url,
      },
      {
        type: "link",
        url,
      }
    ];
  };
  
  
  
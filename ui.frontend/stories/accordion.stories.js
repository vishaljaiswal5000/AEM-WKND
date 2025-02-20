import { document, console } from "global";
import "../src/main/webpack/site/main.scss";
import "../.storybook/story-styles.css";
import { parameters as globalParameters } from '../.storybook/storybook.config';

const figmaLink = "https://www.figma.com/design/2mkPK7zS6hBYgDQNYFIpt2/Join-Now?node-id=1524-7160&t=4SWVoALVwHjfTPf6-4";


export default {
  title: "Accordion",
  component: () => new Accordion("").markup,
};

export const Default = {
  parameters: {
    design: [...globalParameters(figmaLink)],
  },
};

class Accordion {
  constructor(styleClass) {
    this.styleClass = styleClass;
  }

  get markup() {
    return (
      '<div class="' +
      this.styleClass +
      ' accordion aem-GridColumn aem-GridColumn--default--8">' +
      '<div class="cmp-accordion" data-cmp-is="accordion">' +
      '<div class="cmp-accordion__item" data-cmp-hook-accordion="item">' +
      '<h3 class="cmp-accordion__header">' +
      '<button class="cmp-accordion__button" data-cmp-hook-accordion="button">' +
      '<span class="cmp-accordion__title">This is the first block</span>' +
      '<span class="cmp-accordion__icon"></span>' +
      "</button>" +
      "</h3>" +
      '<div data-cmp-hook-accordion="panel" class="cmp-accordion__panel cmp-accordion__panel--hidden"' +
      'role="region">' +
      '<div class="responsivegrid">' +
      '<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">' +
      '<div class="text aem-GridColumn aem-GridColumn--default--12">' +
      '<div class="cmp-text">' +
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo" +
      "pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas" +
      "odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id" +
      "tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing" +
      "elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna" +
      "cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate" +
      "sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="cmp-accordion__item" data-cmp-hook-accordion="item">' +
      '<h3 class="cmp-accordion__header">' +
      '<button class="cmp-accordion__button cmp-accordion__button--expanded" data-cmp-hook-accordion="button">' +
      '<span class="cmp-accordion__title">This is my second block</span>' +
      '<span class="cmp-accordion__icon"></span>' +
      "</button>" +
      "</h3>" +
      '<div data-cmp-hook-accordion="panel" class="cmp-accordion__panel cmp-accordion__panel--expanded"' +
      'role="region">' +
      '<div class="responsivegrid">' +
      '<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">' +
      '<div class="text aem-GridColumn aem-GridColumn--default--12">' +
      '<div class="cmp-text">' +
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo" +
      "pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas" +
      "odio. Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id" +
      "tristique arcu erat non enim. Lorem ipsum dolor sit amet, consectetur adipiscing" +
      "elit. Integer euismod odio non leo pretium pellentesque. Curabitur blandit urna" +
      "cursus, malesuada erat ut, egestas odio. Quisque suscipit, urna ac vulputate" +
      "sollicitudin, mi urna elementum augue, id tristique arcu erat non enim.</p>" +
      "" +
      "</div>" +
      "" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="cmp-accordion__item" data-cmp-hook-accordion="item">' +
      '<h3 class="cmp-accordion__header">' +
      '<button class="cmp-accordion__button" data-cmp-hook-accordion="button">' +
      '<span class="cmp-accordion__title">Accordion third block</span>' +
      '<span class="cmp-accordion__icon"></span>' +
      "</button>" +
      "</h3>" +
      '<div data-cmp-hook-accordion="panel" class="cmp-accordion__panel cmp-accordion__panel--hidden"' +
      'role="region">' +
      '<div class="text">' +
      '<div class="cmp-text">' +
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non leo pretium" +
      "pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio. Quisque" +
      "suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu erat" +
      "non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod odio non" +
      "leo pretium pellentesque. Curabitur blandit urna cursus, malesuada erat ut, egestas odio." +
      "Quisque suscipit, urna ac vulputate sollicitudin, mi urna elementum augue, id tristique arcu" +
      "erat non enim.</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }
}

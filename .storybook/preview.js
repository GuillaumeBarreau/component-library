// .storybook/preview.js
import "../src/components/_settings/colors/colors.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCheckSquare, faCoffee, faExclamationCircle);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

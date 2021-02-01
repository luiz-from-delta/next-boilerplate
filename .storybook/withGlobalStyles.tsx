import { StoryFn } from "@storybook/addons";
import { addDecorator } from "@storybook/react";
import { Fragment } from "react";

import GlobalStyles from "../src/styles/global";

const withGlobalStyles = (storyFn: StoryFn) => (
  <Fragment>
    <GlobalStyles />
    {storyFn()}
  </Fragment>
);

export default withGlobalStyles;

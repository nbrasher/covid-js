import React from "react";
import { addDecorator } from "@storybook/react";
import theme from "../src/theme.js";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";

const storybookTheme = createMuiTheme(theme);

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

addDecorator((storyFn) => (
  <ThemeProvider theme={storybookTheme}>
    <CssBaseline />
    <div style={centerStyle}>{storyFn()}</div>
  </ThemeProvider>
));

export const parameters = { layout: "fullscreen" };

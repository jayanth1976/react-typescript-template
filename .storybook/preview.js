import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StyledEngineProvider injectFirst>
        {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        {/* </ThemeProvider> */}
        <Story />
      </StyledEngineProvider>
    ),
  ],
};

export default preview;

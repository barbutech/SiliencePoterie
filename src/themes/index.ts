import {alpha, createTheme} from "@mui/material";
import {palette} from "./palette";
import {Colors} from "../utils/Corlors.constant";

export const theme = createTheme({
    palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: `html {
          height: 100%;
          -webkit-font-smoothing: auto;
        }
        body {
          height: 100%;
          scrollbar-color: ${Colors.primary} ${alpha(Colors.primary, 0.1)};
          scrollbar-width: thin;
        }
        .scrollable {
          mask-image: linear-gradient(
            to bottom,
            transparent,
            white 20px,
            white calc(100% - 20px),
            transparent
          );
        }
				div#root {
					height: 100%;
				}
        *::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        *::-webkit-scrollbar-track {
          background-color: ${alpha(Colors.primary, 0.1)};
          border-radius: 4px;
          margin: 15px;
        }
        *::-webkit-scrollbar-thumb {
          background-color: ${Colors.primary};
          border-radius: 4px;
        }`
      },
      MuiButton: {
        styleOverrides: {
          root: (props) => ({
            color: "black"
          })
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: (props) => ({
            color: "black"
          })
        }
      }
    },
  }
)
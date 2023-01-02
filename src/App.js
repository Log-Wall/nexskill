import "./styles/App.css";
import Dashboard from "./Dashboard";
import { classList } from "./base/nexSkills";
import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#FFF5D6",
      //secondary: 'green'
    },
  },
  typography: {
    fontSize: 12 * (14 / 16), // conversion for px
    fontFamily: ["Arial"],
  },
  components: {
    MuiList: {
      defaultProps: {
        sx: { color: "#FFF5D6" },
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        sx: { color: "#FFF5D6" },
      },
    },
    MuiSwitch: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiPopover: {
      styleOverrides: {
        // Name of the slot
        paper: {
          // Some CSS
          background: "black",
          border: "1px solid white",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        determinate: {
          transition: "none",
          background: "blue",
        },
      },
    },
  },
});

let sortedSkills = globalThis.nexSkills.skills.sort((a, b) => {
  if (a.profession > b.profession) {
    return -1;
  }
  if (a.profession < b.profession) {
    return 1;
  }
  return 0;
});

sortedSkills = sortedSkills.sort((a, b) => {
  if (a.skill > b.skill) {
    return -1;
  }
  if (a.skill < b.skill) {
    return 1;
  }
  return 0;
});

function App() {
  return (
    <Dashboard
      theme={darkTheme}
      debugSkills={sortedSkills}
      classList={classList}
    />
  );
}

export default App;

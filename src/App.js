import "./styles/index.css";
import Router from "./routes/AppRoutes";
import defaultTheme from "./themes/defaultTheme";
import { ThemeProvider } from "@mui/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;

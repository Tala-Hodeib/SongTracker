import './App.css';
import SearchEngine from './components/SearchEngine/SearchEngine';
import GlobalStyles from "@mui/material/GlobalStyles";
import SearchResult from './components/SearchResult/SearchResult';
import { ThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Dosis',
       'sans-serif',
    ].join(','),
  },});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       <GlobalStyles
        styles={{
          body: { boxSizing: "border-box", backgroundColor:"#240046"},
          "body *": { boxSizing: "border-box",}
        }}
      />
      <SearchEngine/>
      <SearchResult/>
    </div>
    </ThemeProvider>
  );
}

export default App;

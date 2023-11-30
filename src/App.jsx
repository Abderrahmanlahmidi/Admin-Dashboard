import {Routes, Route} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../src/theme";
import Topbar from '../src/pages/globale/Topbar';
import Sidebar from './pages/globale/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Team from "./pages/Team/index";
import Contacts from "./pages/contacts/index";
import Invoices from "./pages/invoices/index";
import Form from "../src/pages/form/index";
import Calendar from './pages/calendar/index';
import Faq from './pages/faq';
import Bar from './pages/Bar/index';
import Pie from './pages/Pie';
import Line from './pages/Line';
import Geography from './pages/Geography';



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <div className="app">
          <Sidebar/>
           <main className="content">
            <Topbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/invoices' element={<Invoices/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/bar' element={<Bar/>}/>
                <Route path='/pie' element={<Pie/>}/>
                <Route path='/line' element={<Line/>}/>
                <Route path='/geography' element={<Geography/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

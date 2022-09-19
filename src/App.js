import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import publicRouter from './Route';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {
            publicRouter.map((route,index)=>{
              let Page = route.component;
              return <Route key={index} path={route.path} element={<Page/>}></Route>
            })
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useRoutes } from 'react-router';
import allRout from './route';

function App() {
  const routes = useRoutes(allRout);
  return routes;
}

export default App;
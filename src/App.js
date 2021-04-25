import './App.css';
import movieList from './Components/movieList'
import Nav from './Components/Nav'
import {movieProvider} from './Components/MovieContext'
import AddMovie from './Components/addMovie'

function App() {
  return (
    <movieProvider>
    <div className="App">
      <Nav />
      <AddMovie />
      <movieList />
    </div>
    </movieProvider>
  );
}

export default App;

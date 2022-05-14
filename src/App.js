import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>GIPHY SEARCHER!</h1>
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default App;

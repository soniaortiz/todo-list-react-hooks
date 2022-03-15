import List from "./List/List";
import "./styles.css";
import SearchGit from "./Search/SearchGit";

export default function App() {
  return (
    <div className="App">
      <h1>Create your todo list</h1>
      <h2>using reacthooks</h2>
      {/* <List /> */}
      <SearchGit />
    </div>
  );
}

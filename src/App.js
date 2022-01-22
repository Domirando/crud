import "./App.css";
import List from './components/Users/List'
function App() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[40px] self-center">Users</h1>
      <div className="overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;

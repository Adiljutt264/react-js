import './App.css';
function Mycomponent() {
  return (
    <div>My Component</div>
  );
}

function App() {
  return (
    <div>Hello <Mycomponent /> Guys
    <button>Click me</button>
    </div>
  );
}

export default App;

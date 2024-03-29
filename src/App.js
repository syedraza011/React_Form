import Form from './components/Form' //rendering by importing
import ManagedForm from './components/ManagedForm'
import MultiInputForm from './components/MultiInputForm'
import './App.css';

//just redering form
function App() {
  return (
    <div className="App">
      <h2>Unmanaged Form</h2>
      <Form />
      <h2>Managed Form</h2>
      <ManagedForm />
      <h2>Multiple Input Form</h2>
      <MultiInputForm />
    </div>
  );
}

export default App;

import './App.css';
import Counter from './Components/Counter';
import ErrorBoundary from './Components/ErrorBoundary';
import TestError from './Components/TestError';
import ReducerCounter from './Components/myReducer';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <>
      <Helmet>
        <title>Counter with useEffect AND useReducer</title>
        <meta name='description' content='Counter App' />
      </Helmet>

      <ErrorBoundary>
        <div className="App">
          <h1>COUNTER APP</h1>
          <Counter />
          <TestError />
          <ReducerCounter />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;

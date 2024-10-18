import logo from './logo.svg';
import './App.css';
import FirstProgramOfReactJs from './BasicOfReeact/FristProgramOfReactJs';
import BasicOfArrowFunctions from './JavascriptES6/BasicOfArrowFunctions';
import ArraowFunctionWithParamter from './JavascriptES6/ArraowFunctionWithParamter';

function App() {
  return (
    <>
      <div
        style={{
      position:'relative',
      width:'100%',
      height:'auto'

        }}
      >
        <div style={{ marginBottom: '20px',padding:'15px' }}> {/* Spacing between components */}
          <FirstProgramOfReactJs />
        </div>
        <div style={{ marginBottom: '20px' }}>
     <BasicOfArrowFunctions/>
        </div>
        <div style={{ marginBottom: '20px' }}>
        <ArraowFunctionWithParamter/>
        </div>
        {/* Add more components as needed */}
      </div>
    </>
  );
}

export default App;

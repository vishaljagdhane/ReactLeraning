import logo from './logo.svg';
import './App.css';
import FirstProgramOfReactJs from './BasicOfReeact/FristProgramOfReactJs';
import BasicOfArrowFunctions from './JavascriptES6/BasicOfArrowFunctions';
import ArraowFunctionWithParamter from './JavascriptES6/ArraowFunctionWithParamter';
import ArrayAndMap from './JavascriptES6/ArrayAndMap';
import TernaryOperator from './JavascriptES6/Ternary_Opreator';
import SecondExampleTernaryOpretor from './JavascriptES6/SecondExampleTernaryOpretor';
import BasicProps from './Props/BasicProps';
import SendPropsVeryBasic from './Props/SendPropsVeryBasic';

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
        <div style={{ marginBottom: '20px',padding:'15px',borderBottom:'3px solid red' }}> {/* Spacing between components */}
          <FirstProgramOfReactJs />
        </div>
        <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
     <BasicOfArrowFunctions/>
        </div>
        <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
        <ArraowFunctionWithParamter/>
        </div>
        <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
  <ArrayAndMap/>
        </div>
        <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
        <TernaryOperator/>
              </div>
              <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
              <SecondExampleTernaryOpretor/>
                    </div>
                    <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
                    <BasicProps/>
                          </div>
                          <div style={{ marginBottom: '20px' ,borderBottom:'3px solid red',padding:'15px'}}>
                          <SendPropsVeryBasic baiscProps ="It is very Basic Props"/>
                                </div>
    
      </div>
    </>
  );
}

export default App;

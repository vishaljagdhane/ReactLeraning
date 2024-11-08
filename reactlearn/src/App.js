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
import JavascriptEvent from './Event/JAvascriptEvent';
import BasicOfIfStatemnt from './CondtionalStatment/BasicOfIfStatemnt';
import BasicList from './ListComponent/BasicList';
import TextFiledUsing from './GeetingUserValue/TextFiledUsing';
import BasicMemo from './Memo/BasicMemo';
import BasicOfHooks from './Hooks/BasicOfHooks';
import BasicOfUseState from './Hooks/BasicOfUseState';
import BasicFetchApi from './API_Services/BasicFetchApi';
import IntermediateExamaple from './API_Services/IntermediateExamaple';
import Axiosusemapapi from './API_Services/Axiosusemapapi';
import BasisPost from './API_Services/BasisPost';
import PostSelfTry from './API_Services/PostSelfTry';
import PostApiUsingJson from './API_Services/PostApiUsingJson';
import BasicExampleUseContext from './useContext/BasicExampleUseContext';
import {createContext, useContext,useState} from 'react'
import RecivedContextProvider from './useContext/RecivedContextProvider';
import DataProviderComman ,{DataContext}from './useContext/DataProviderComman';


function App() {

//this a create context context is created

  return (
    <>
    <DataProviderComman>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto'
        }}
      >
        <div style={{ marginBottom: '20px', padding: '15px', borderBottom: '3px solid red' }}> {/* Spacing between components */}
          <FirstProgramOfReactJs />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicOfArrowFunctions />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <ArraowFunctionWithParamter />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <ArrayAndMap />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <TernaryOperator />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <SecondExampleTernaryOpretor />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicProps />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <SendPropsVeryBasic baiscProps="It is very Basic Props" />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <JavascriptEvent />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicOfIfStatemnt />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicList />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <TextFiledUsing />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicMemo />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicOfHooks />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
          <BasicOfUseState />
        </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
       <h3>Fetch API Functions</h3>
        <BasicFetchApi />
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
       <h3>Fetch API Functions</h3>
        <IntermediateExamaple />
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
       <h3>Fetch API Functions using Axios </h3>
        <Axiosusemapapi/>
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
       <h3>Basic POST API</h3>
        <BasisPost/>
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>
       <h3>Post Self Try</h3>
        <PostSelfTry/>
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>

        <PostApiUsingJson/>
      </div>
        <div style={{ marginBottom: '20px', borderBottom: '3px solid red', padding: '15px' }}>

        <BasicExampleUseContext/>

   
   <RecivedContextProvider/>

      </div>
      </div>
      </DataProviderComman>
    </>
  );
}

export default App;

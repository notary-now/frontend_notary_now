import React from 'react';
import Header from '../Header/Header'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <main className="App">

    <Route
         exact
         path="/"
         render={() => {
           return (
            <>
             <Header/>
            </>
         )
         }}
       />

    <Route
        exact
        path="/find"
        render={() => {
          return (
            <>
              <Header/>
            </>
          )
          }}
        />

     <Route
          exact
          path="/account"
          render={() => {
            return (
              <>
                <Header/>
              </>
            )
            }}
          />
          
      <Route
          exact
          path="/schedule"
          render={() => {
            return (
                <>
                 <Header/>
                </>
             )
             }}
             />

    </main>


  );
}

export default App;

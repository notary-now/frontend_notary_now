import React, {useState} from 'react';
import Header from '../Header/Header'
import Account from '../Account/Account'
import Find from '../Find/Find'
import {Route} from 'react-router-dom'
import './App.css';

import boat from '../Imgs/boat.jpg'
import desk from '../Imgs/desk.jpg'
import golfing from '../Imgs/golfing.jpg'
import notary from '../Imgs/notary.jpg'

function App() {
  let [chat, showChat] = useState({chat: false})
  const imgArrary = [desk,notary,golfing,boat]
  const textArray = ['Notary Now: Your busy, let us help you with your work.','Find Notaries Near you in minutes!','Get back to the things you love.','You earned it.']
  let [imgNum, setImgNum] = useState({num: 0, img:desk, text: textArray[0]})


    const imgChanger = async () => {
      if (imgNum.num < 3) {
        let num = await setImgNum({num:imgNum.num + 1, img: imgArrary[imgNum.num + 1], text: textArray[imgNum.num + 1]})
      } else {
        let num0 = await setImgNum({num:0, img:desk, text:textArray[0]})
      }

    }

    setTimeout(async () => {
      let changer = await imgChanger()
    }, 5000)


  return (
    <main className="App">

    <Route
         exact
         path="/"
         render={() => {
           return (
            <>
             <Header/>
             <div className="home-img-container">
              <div className="home-img" style={{'backgroundImage': `url(${imgNum.img})`}}></div>
              <h1>{imgNum.text}</h1>
             </div>
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
              <div>
                <Find/>
              </div>
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
                <div>
                  <Account/>
                </div>
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

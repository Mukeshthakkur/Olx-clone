import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Sell from './Pages/Sell'
import Category from './Pages/Category'
import Add from './Pages/Add'
import UserAdds from './Pages/UserAdds'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/sell'>
              <Sell/>
          </Route>
          <Route exact path='/category'>
              <Category/>
          </Route>
          <Route path='/add_users/'>
              <UserAdds/>
          </Route>
          <Route path='/add/'>
              <Add/>
          </Route>
          <Route path='/notfound'>
              <NotFound/>
          </Route>
        </Switch>
      </Router>
      
    </div>

  );
}

export default App;





// import React from 'react';
// import firebase from './firebase'



// class App extends React.Component{
//   constructor() {
//     super()
//     this.state ={
//       file: null
//     }
//   }

//   Upload =() => {
//     console.log("files",this.state.file)
//     let ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
    
//     ref.on('state_changed', function(snapshot){
//     }, function(error){
//     }, function(){

//       ref.snapshot.ref.getDownloadURL().then(function(downloadURL){
//         console.log('file available at', downloadURL);
//       });
//     });
//   }
//   render(){
//     return(
//       <div>
        
//         <input type='file' onChange={(e) => this.setState({file: e.target.files [0]})} />
//         <button onClick={this.Upload}>
//           Uploud
//         </button>

//       </div>
//     )
//   }
// }



// export default App;
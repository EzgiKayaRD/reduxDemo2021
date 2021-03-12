import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { MainView, DetailsView } from './views'
import { Header, Footer } from './components';

function App() {



  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <MainView />} />
          <Route path='/pokemon/:id' render={() => <DetailsView />} />
          <Redirect path='*' to='/' />
        </Switch>
        <Footer />
      </Router>

     
    </>
  )

}



export default App;

import './App.css';
import Home from './components/Home'
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar';
import Exam from './components/Exam';
import TestComponent from './components/TestComponent'
import Footer from './components/Footer';
import Syllabus from './components/Syllabus'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route exact path="/syllabus/:exam" render={(props)=> <Syllabus examName={props.match.params.exam}/>} />
        <Route exact path="/exams/:id" render={(props)=> <Exam examId={props.match.params.id}/>} />
        <Route exact path="/tests/:id" render={(props)=> <TestComponent examKey={props.match.params.id} />} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

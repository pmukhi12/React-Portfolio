import Nav from './components/Nav';
import Header from './components/Header';
import Image from './components/Image';
import Projects from './components/Projects';
import './index.css'

function App() {
  return (
    <div>
      <Nav/>
              <div class="jumbotron jumbotron-fluid h-100">
            <div class="container" style={{height: '600px'}}>
                <div class="row" style={{height: '100%'}}>
                <Image class="profile-pic"/>
                    <div class="col-8"style={{paddingTop:'5%'}}>
                        <h1 class="display-4">Prav Mukhi</h1>
                        <p style={{marginBottom: ''}} class="lead">Prav is a Full Stack Software Developer with a history of process automation and data analysis.</p>
                      <Projects/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

import tosin from './Mine-tosin.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tosin} className="App-logo" alt="Tosin" />
        <p className="Welcome-message">
          Hi ✋, My name is <span>Stephen Gbolagade</span><br/> I'm working on my first react app
        </p>

        <div className="Social-contact">

        <ppp>

        <a href="https://www.twitter.com/stephen_olgade">
        <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>

                <a href="https://www.linkedin.com/in/solgade">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>

                <a href="https://www.github.com/stephengade">
        <i class="fa fa-github" aria-hidden="true"></i>
        </a>
</ppp>

        </div>
      
      </header>
    </div>
  );
}

export default App;

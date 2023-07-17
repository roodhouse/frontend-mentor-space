import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Button from './components/Button'

function App() {
  return (
    <div className="App h-[667px]">
      <div id='mainWrapper' className='h-full bg-[url("/src/assets/home/background-home-mobile.jpg")] px-6 pt-6 pb-12 bg-no-repeat'>
        <div id='mainContainer'>
          <div id='headerWrapper' className='mb-[58px]'>
            <Header />
          </div>
          <div id='heroWrapper' className='mb-[81px]'>
            <Hero />
          </div>
          <div id='btnWrapper'>
            <Button />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

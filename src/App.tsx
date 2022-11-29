import type { Component } from 'solid-js';
import CreateNote from './components/CreateNote/CreateNote';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

const App: Component = () => {
  return (<>
    <Header />
    <main>
      <CreateNote />
    </main>
    <Footer />
  </>
  );
};

export default App;

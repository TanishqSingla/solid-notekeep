import type { Component } from 'solid-js';
import CreateNote from './components/CreateNote/CreateNote';
import Header from './components/Layout/Header/Header';

const App: Component = () => {
  return (<>
    <Header />
    <main class="p-8">
      <CreateNote />
    </main>
  </>
  );
};

export default App;

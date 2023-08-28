import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => <h1 id='main_header'>Hello again from Anikram! 🚀🚀🚀</h1>

const App = () => <div>
  <Heading />
  <p>This is description</p>
</div>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

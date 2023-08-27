
const parent = React.createElement('div',{id: 'parent'},
  [
    React.createElement('div', {id: 'child', key: 'parent1'},
    [
      React.createElement('h1',{id: 'text', key: 'child1'}, 'I am react parent1'),
      React.createElement('h2',{id: 'text', key: 'child2'}, 'I am react child 2')
    ]
  ),
    React.createElement('div', {id: 'child', key: 'parent2'},
      [
        React.createElement('h1',{id: 'text', key: 'child1'}, 'I am react parent2'),
        React.createElement('h2',{id: 'text', key: 'child2'}, 'I am react child 2')
      ]
    )
  ]
)

const heading = React.createElement("h1",{ id: 'main_header' },"Hello world from react");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

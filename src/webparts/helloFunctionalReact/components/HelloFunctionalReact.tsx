import * as React from 'react';
import styles from './HelloFunctionalReact.module.scss';
import { IHelloFunctionalReactProps } from './IHelloFunctionalReactProps';

// Functional React Counter Component
function FunctionalCounter(props) {
  const [counterValue, setCounterValue] = React.useState(parseInt(props.initialValue));
  return (
    <div>
      <h1>FunctionalCounter: {counterValue}</h1>
      <button className={styles.button} 
        onClick={()=>setCounterValue(counterValue+1)}>Click me</button>
    </div>
  );
}

// Class Based Counter Component
class ClassBasedCounter extends React.Component<any,{ count: number }> {
  constructor(props) {
    super(props);
    this.state = { count: parseInt(props.initialValue) };
  }
  public render() {
    return (
      <div>
        <h1>ClassBasedCounter: {this.state.count}</h1>
        <button className={styles.button} onClick={()=>
          this.setState( { count: this.state.count + 1})}>Click me</button>
      </div>
    );
  }
}

// Simple functional React todo list component
function TodoList(props) {
  const [todos, setTodos] = React.useState([
    {title:'Learn React'},
  {title:'Learn SPFx'}]);
  const [newItemValue, setNewItemValue] = React.useState("");
  function addTodo(event) {
    todos.push({title:newItemValue});
    setTodos(todos);
    setNewItemValue("");    
  }
  return (
    <div>
      <h2>Todos</h2>
      <ul>
      {todos.map(item => (
        <li>{item.title}</li>
      ))}
      </ul>
      <input type="text" 
        onChange={e => setNewItemValue(e.target.value)} 
          value={newItemValue}/><br/>
      <button className={styles.button} disabled={(newItemValue=="")} 
        onClick={addTodo}>Add item</button>
    </div>
  );
}

export default class HelloFunctionalReact extends React.Component<IHelloFunctionalReactProps, {}> {
  public render(): React.ReactElement<IHelloFunctionalReactProps> {
    return (
      <div className={ styles.helloFunctionalReact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>React components</span>
              <p className={ styles.subTitle }>Using stateful functional components.</p>
              <FunctionalCounter initialValue="0" />
              <ClassBasedCounter initialValue="0" />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

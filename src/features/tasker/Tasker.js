import React, { useId, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTodos,
  updateNewTodo,
  createTask,
  deleteTodo,
  updateInput
} from './taskerSlice';
import styles from './Tasker.module.css';

export function Tasker() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>

      <div className={styles.row}>
        <h1>GFG Todo</h1>
      </div>

      <div className={styles.row}>
        <input type="text" onChange={e => dispatch(updateInput(e.target.value))} />
        <button onClick={() => dispatch(createTask())} >Create!!</button>
      </div>

      <div>

        <ul>

          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => dispatch(deleteTodo(index))}>
                Delete
              </button>
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
}

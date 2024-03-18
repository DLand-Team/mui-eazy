import { useState } from 'react';
import { Context1 } from './provider';

export const Root = (_: { children: any }) => {
  const [child1, setChild1] = useState();
  const [child2, setChild2] = useState();
  return (
    <Context1.Provider value={{ setChild1, setChild2 }}>
      <div>
        我是root
        {_.children}
        <div> {child1}</div>
        <div> {child2}</div>
      </div>
    </Context1.Provider>
  );
};

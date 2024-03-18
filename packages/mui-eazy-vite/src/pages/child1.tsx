import { useContext, useEffect } from 'react';
import { Context1 } from './provider';

export const Child1 = ({children}:any) => {
  const context = useContext(Context1);
  useEffect(()=>{
    context.setChild1?.(children)
  },[])
  debugger
  return (
    <div></div>
  );
};

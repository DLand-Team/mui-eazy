import { useContext, useEffect } from 'react';
import { Context1 } from './provider';

export const Child2 = ({children}:any) => {
  const context = useContext(Context1);
  useEffect(()=>{
    context.setChild2?.(children)
  },[])
  return (
    <div></div>
  );
};

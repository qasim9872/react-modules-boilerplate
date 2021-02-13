/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

const CreateInnerHookFromObjectHoc = (
  key: string,
  hook: <T extends { [key: string]: any }>() => [
    T,
    React.Dispatch<React.SetStateAction<T>> | (() => {}),
  ],
) => {
  return () => {
    const [state] = hook();
    return state[key];
  };
};

export default CreateInnerHookFromObjectHoc;

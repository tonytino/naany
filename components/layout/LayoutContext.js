import React from 'react';

const LayoutContext = React.createContext();

export function useLayoutContext() {
  return React.useContext(LayoutContext);
}

export default LayoutContext;

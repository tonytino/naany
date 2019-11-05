import React from 'react';

const UserSessionContext = React.createContext();

export function useUserSessionContext() {
  return React.useContext(UserSessionContext);
}

export default UserSessionContext;

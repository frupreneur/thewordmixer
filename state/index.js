"use client";

import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();
export default function StateProvider({ children }) {
  const [state, setState] = React.useState({
    mixedWords: [],
    unScrambledWords: [],
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalState() {
  const state = useContext(AppContext);
  return state;
}

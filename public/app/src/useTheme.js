import { useState, useEffect } from "react";
import storage from "local-storage-fallback";

import { dark } from "./themes";

export default function useTheme(defaultTheme = dark) {
  const [theme, _setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = storage.getItem("@DescomplicadorTheme");
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  }

  useEffect(() => {
    storage.setItem("@DescomplicadorTheme", JSON.stringify(theme));
  }, [theme]);

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  };
}

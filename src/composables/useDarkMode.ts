function getIsDarkSchemeOsPreferred(): boolean {
  const darkSchemeMediaQueryList: MediaQueryList = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const hasDarkSchemeMediaQueryPreference: boolean =
    typeof darkSchemeMediaQueryList.matches === "boolean";

  if (hasDarkSchemeMediaQueryPreference) {
    return darkSchemeMediaQueryList.matches ? true : false;
  }

  return false;
}

function getPersistedThemePreference(): "dark" | "light" | undefined {
  const persistedPreference = window?.localStorage.getItem("qiskit-theme");
  const hasPersistedPreference = typeof persistedPreference === "string";

  if (hasPersistedPreference) {
    if (persistedPreference === "dark") {
      return "dark";
    } else if (persistedPreference === "light") {
      return "light";
    }
  }

  return undefined;
}

function useDarkMode(): boolean {
  const persistedThemePreference = getPersistedThemePreference();

  if (persistedThemePreference === "dark") {
    return true;
  } else if (persistedThemePreference === "light") {
    return false;
  }

  return getIsDarkSchemeOsPreferred();
}

export default useDarkMode;

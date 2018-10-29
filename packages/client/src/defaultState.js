export const defaultState = {
  // APP STATE
  currentLanguage: {
    __typename: "currentLanguage",
    currentLanguage: "es"
  },
  isUpdatingContent: false,
  isLoading: false,

  // LAYOUT STATE
  layoutState: {
    isMenuTop: false,
    menuMobileOpened: false,
    menuCollapsed: false,
    menuShadow: true,
    themeLight: true,
    squaredBorders: false,
    borderLess: true,
    fixedWidth: false,
    settingsOpened: false
  },

  // USER STATE
  userState: {
    email: "",
    role: ""
  }
};

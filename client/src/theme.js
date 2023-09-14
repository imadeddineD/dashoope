// color design tokens export
export const tokensDark = {
    grey: {
      0: "#ffffff", 
      10: "#f6f6f6", 
      50: "#f0f0f0", 
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
      1000: "#000000", 
    },
    primary: {
      100: "#c0b6b9",
      200: "#a0999f",
      300: "#847b85",
      400: "#69666c",
      500: "#4B3B40",
      600: "#413136",
      700: "#37282d",
      800: "#2d1e23",
      900: "#231419"
    }, 
    secondary: {
      100: "#d8d3c8",
      200: "#c5bca7",
      300: "#b2a584",
      400: "#9f8e63",
      500: "#8d7851",
      600: "#736141",
      700: "#594a31",
      800: "#3f341f",
      900: "#261e0d"
    }
    ,
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Mulish", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
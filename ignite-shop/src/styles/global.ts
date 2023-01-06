import { globalCss } from ".";
// esse import vem do createStitches

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})

// colocar o globalCss dentro do App
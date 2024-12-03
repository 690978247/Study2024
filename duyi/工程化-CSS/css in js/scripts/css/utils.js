export function applyStyles(dom, styles) {
  for(const key in styles) {
    const value = styles[key]
    dom.style[key] = value
  }
}
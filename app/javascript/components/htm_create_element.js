import { createElement } from "react"
import htm from "htm"
export default htm.bind(createElement)

// htm here helps to convert basic react element creation
// e.g. const greetingStatement = "Hello World!"
//      createElement("h1", null, greetingStatement)
// into a JSX like syntax string without the need for a transpiler
// e.g. const greetingStatement = "Hello World!"
//      html`<h1>${greetingStatement}<h1>`
// This is actually using a vanilla js feature called tagged templates:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
import { render } from "react-dom"
import html from "./htm_create_element"

import Clock from "./clock"
import LoginControl from "./login_control";

render(
    html`
			<${Clock} />
			<${LoginControl} />
		`,
    document.getElementById("app")
)
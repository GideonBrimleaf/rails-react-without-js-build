import { render } from "react-dom"
import h from "./htm_create_element"

import Clock from "./clock"
import LoginControl from "./login_control";

render(
    h`
			<${Clock} />
			<${LoginControl} />
		`,
    document.getElementById("root")
)
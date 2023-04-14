import { render } from "react-dom"
import h from "components/htm_create_element"

import Clock from "./clock"
import FlavaForm from "./flava_form"
import LoginControl from "./login_control";

render(
    h`<${Clock} /><${FlavaForm} /><${LoginControl} />`,
    document.getElementById("root")
)
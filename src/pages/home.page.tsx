import { A } from "@solidjs/router"
import { Component } from "solid-js"

const HomePage: Component<{}> = (props) => {
  return <div>
    HomePage
    <A href="/auth">auth</A>
  </div>
}

export default HomePage

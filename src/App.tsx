import { RouteDefinition, useRoutes } from "@solidjs/router"
import { Component } from "solid-js"

import HomePage from "./pages/home.page"
import LoginPage from "./pages/login.page"
import RegisterationPage from "./pages/registration.page"
import TransactionCreatePage from "./pages/transaction-create.page"

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/auth/login",
    component: LoginPage
  },
  {
    path: "/auth/registration",
    component: RegisterationPage
  },
  {
    path: "/transactions/create",
    component: TransactionCreatePage
  }
]

const App: Component = () => {
  const Routes = useRoutes(routes)
  return (
    <Routes />
  )
}

export default App

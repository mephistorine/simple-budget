import { A } from "@solidjs/router"
import { Component } from "solid-js"

const LoginPage: Component = () => {
  return (
    <div>
      <div class="flex flex-col gap-3 fixed top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-2xl font-bold">Login</h1>

        <form class="flex flex-col gap-3">
          <div>
            <label for="username">Username</label>
            <input id="username" class="bg-gray-200 rounded-md p-2 block focus:ring-2 ring-black" type="text" />
          </div>
          
          <div>
            <label for="password">Password</label>
            <input id="password" class="bg-gray-200 rounded-md p-2 block focus:ring-2 ring-black" type="password" />
          </div>
        </form>

        <div class="flex flex-col">
          <button class="bg-black p-2 rounded-md text-white">Login</button>
          <A href="/auth/registration">Registration</A>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

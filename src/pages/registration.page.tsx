import { A, useNavigate } from "@solidjs/router"
import { Component } from "solid-js"
import { createStore } from "solid-js/store"
import { z } from "zod"
import { useSupabaseClient } from "../lib"

const registrationFormSchema = z.object({
  username: z.string().min(0),
  email: z.string().email(),
  password: z.string().min(0)
})

const RegisterationPage: Component<{}> = () => {
  const supabaseClient = useSupabaseClient()
  const navigate = useNavigate()

  const [ form, setFormState ] = createStore({
    username: "",
    email: "",
    password: ""
  })

  const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault()

    const { success } = registrationFormSchema.safeParse(form)

    if (!success) {
      alert("Form not valid")
      return
    }

    const { error } = await supabaseClient.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          username: form.username
        }
      }
    })

    if (error !== null) {
      console.error(error)
      return
    }

    navigate("/auth/login")
  }

  return (
    <div>
      <div class="flex flex-col gap-3 fixed top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-2xl font-bold">Registration</h1>

        <form class="flex flex-col gap-3" onSubmit={onSubmit}>
          <div>
            <label for="username">Username</label>
            <input
              id="username"
              class="bg-gray-200 rounded-md p-2 block focus:ring-2 ring-black"
              type="text"
              onInput={(e) => setFormState("username", (e.target as any).value.trim())}
            />
          </div>

          <div>
            <label for="email">Email</label>
            <input
              id="email"
              class="bg-gray-200 rounded-md p-2 block focus:ring-2 ring-black"
              type="email"
              onInput={(e) => setFormState("email", (e.target as any).value.trim())}
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input
              id="password"
              class="bg-gray-200 rounded-md p-2 block focus:ring-2 ring-black"
              onInput={(e) => setFormState("password", (e.target as any).value.trim())}
              type="password"
            />
          </div>

          <button type="submit" class="bg-black p-2 rounded-md text-white">
            Register
          </button>
          <A href="/auth/login">Login</A>
        </form>
      </div>
    </div>
  )
}

export default RegisterationPage

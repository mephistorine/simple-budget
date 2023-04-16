/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router"
import { SupabaseClient } from "@supabase/supabase-js"

import App from "./App"

import "./index.css"
import { SupabaseProvider } from "./lib"

const root = document.getElementById("root")

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  )
}

const supabaseClient: SupabaseClient = new SupabaseClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

render(() => {
  return (
    <SupabaseProvider client={supabaseClient}>
      <Router>
        <App />
      </Router>
    </SupabaseProvider>
  )
}, root!)

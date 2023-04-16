import { SupabaseClient } from "@supabase/supabase-js"
import { Component, createContext, useContext } from "solid-js"

export const SupabaseContext = createContext<SupabaseClient>()

interface Props {
  client: SupabaseClient
  children?: any
}

export function useSupabaseClient(): SupabaseClient {
  return useContext(SupabaseContext)!
}

export const SupabaseProvider: Component<Props> = (props: Props) => {
  return <SupabaseContext.Provider value={ props.client }>
    { props.children }
  </SupabaseContext.Provider>
}
import Login from "@components/Login/Login"
import supabase from "../../config/supabase"

export default async function Page() {
  let { data, error } = await supabase.auth.signUp({
    email: 'someone@email.com',
    password: 'dAyzBBoNAlgihtEhhvny'
  })

  return (
    <main className='overflow-hidden bg-slate-200'>
      <Login />
    </main>
  )
}
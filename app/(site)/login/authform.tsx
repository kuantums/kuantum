import Messages from "./Message";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AuthForm() {
  return (



  <form
    action="/auth/sign-in"
    method="post"
  >
    <label className="text-xs" htmlFor="email">
     Masukan Email
    </label>
    <Input
    className="w-full"
      name="email"
      placeholder="you@example.com"
      required
    />
    <label className="text-xs" htmlFor="password">
      Masukan Password
    </label>
    <Input
    className="w-full"
      type="password"
      name="password"
      placeholder="••••••••"
      required
    />
    <Button className="my-2 float-right" variant={"outline"}>
      Sign In
    </Button>
    <Messages  />
  </form>

  )
}
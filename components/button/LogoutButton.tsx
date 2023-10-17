import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <Button className="w-full " variant="ghost">
      <LogOut className="mr-2 h-4 w-4 group-hover:translate-x-3" />
        Logout
      </Button>
    </form>
  )
}

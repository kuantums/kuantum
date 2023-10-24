import UserCard from "./user_components/card";
import { CardsChat } from "./user_components/chat";


export default function UserMenu() {
  return (
    <>
     <h2 className="text-6xl tracking-tighter w-full mb-5 px-3">Hallo Selamat datang di Kuantum Dashboard</h2>
     <div className="flex w-full space-x-4">
    <div className="w-[70%] h-full gap-4 grid grid-cols-12 grid-rows-2 p-2">
       <UserCard />
  </div>
  <div className="w-[30%]">
    <p className="text-2xl">AI Playground</p>
    <CardsChat />
  </div>
  </div>
  </>
  );
}

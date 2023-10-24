"use client";
import { CeoCard } from "./ceo_components/card";
import { OmsetChart } from "./ceo_components/chart";
import { CardsTeamMembers } from "./ceo_components/team-member";

interface userProps {
  userdata?: any;
  lastsignin?: any;
  selectuser?: any;
}
export default function Menu({ userdata, lastsignin, selectuser }: userProps) {
  const datelast = new Date(lastsignin);
  const timeString = datelast.toLocaleTimeString("id-ID", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    hour12: false,
  });
  return (
    <section className="flex justify-center !items-center h-full">
      <div className="grid-cols-1 grid lg:grid-cols-4 p-4 lg:gap-4 space-y-2 lmd:space-x-2">
        <div className="col-span-1">
          <CeoCard userdata={userdata} lastlogin={timeString} />
        </div>
        <div className="col-span-2">
          <OmsetChart />
        </div>
        <div className="col-span-1">
          <CardsTeamMembers userdata={selectuser} />
        </div>
      </div>
    </section>
  );
}

//

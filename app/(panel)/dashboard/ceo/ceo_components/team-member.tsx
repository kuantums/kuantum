"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chip, Tooltip } from "@nextui-org/react";

interface userProps {
  userdata?: any;
}

export function CardsTeamMembers({ userdata }: userProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Data Karyawan</CardTitle>
      </CardHeader>
      {userdata.map((user: any) => (
        <CardContent className="grid gap-6" key={user.id}>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc" alt="Image" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div>
                <Tooltip content={user.nama} offset={-7} placement="left-start">
                  <p className="text-sm cursor-pointer font-medium leading-none text-ellipsis overflow-hidden w-20">
                    {user.nama}
                  </p>
                </Tooltip>
                <Tooltip
                  content={user.email}
                  offset={-7}
                  placement="left-start"
                >
                  <p className="text-sm cursor-pointer text-muted-foreground text-ellipsis overflow-hidden w-20  ">
                    {user.email}
                  </p>
                </Tooltip>
              </div>
            </div>
            <Chip color="success" variant="dot">
              Active
            </Chip>
          </div>
        </CardContent>
      ))}
    </Card>
  );
}

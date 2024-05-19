import React from "react";
import { UserType } from "../../types/User";

interface UserCardProps {
  user: UserType;
  index: number;
}

const UserCard = ({ user, index }: UserCardProps) => {
  const urlimage = `https://randomuser.me/api/portraits/${user.gender === "female" ? "women" : "men"}/${index}.jpg`;
  console.log(urlimage);

  return (
    <div className="rounded-2xl border border-[#363749]/[.9] px-4 py-6 text-center">
      <div className="flex flex-col items-center justify-between gap-4">
        <img
          className="size-32 rounded-full border-2 border-[#03BFCB] p-2"
          src={urlimage}
          alt="user"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold ">{user.name}</h2>
          <p className="text-sm text-[#A1A1AA]">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

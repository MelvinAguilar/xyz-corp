import React from "react";
import { UserType } from "../../types/User";

interface UserCardProps {
  user: UserType;
}

const UserCard = ({ user }: UserCardProps) => {
  const index = Number(user.id.toString().slice(-2));
  const urlimage = `https://randomuser.me/api/portraits/${user.gender === "female" ? "women" : "men"}/${index}.jpg`;

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
          <p className="mb-4 text-sm text-[#A1A1AA]">{user.email}</p>
          {user.status.toLowerCase() === "active" ? (
            <span className="flex items-center justify-center">
              <span className="mr-1 text-2xl text-green-500">•</span>
              Active
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <span className="mr-1 text-2xl text-red-500">•</span>
              Inactive
            </span>
          )}
          <p className="text-[#A1A1AA]">
            {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

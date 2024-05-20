import { UserType } from "../../types/User";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../lib/utils";

interface UserCardProps {
  user: UserType;
}

const UserCard = ({ user }: UserCardProps) => {
  const urlimage = getImageUrl(user);

  return (
    <li className="relative rounded-2xl border border-[#363749]/[.3] bg-gray-100 px-4 py-6 text-center shadow-sm transition-all hover:bg-gray-300/50 dark:border-[#363749]/[.9] dark:bg-secondary dark:hover:bg-secondary-hover">
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
          <Link
            to={`/user/${user.id}/`}
            className="absolute inset-0 h-full w-full"
          >
            <span className="sr-only">Ver mas detalles</span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default UserCard;

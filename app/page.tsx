import Image from "next/image";
import { getSession } from "../hooks/server/auth";

const Home = async () => {
  const session = await getSession();

  return session ? (
    <div className="grid w-full h-full place-items-center bg-slate-200">
      <div className="flex flex-col items-center gap-6 w-fit h-fit">
        <div className="w-32 h-32 overflow-hidden bg-white rounded-full shadow-xl sm:w-48 sm:h-48">
          <Image
            alt={session.user?.name ?? "Unnamed user"}
            src={session.user?.image ?? ""}
            width={256}
            height={256}
          />
        </div>
        <div className="text-3xl font-bold text-slate-700">
          {session.user?.name ?? "Unnamed user"}
        </div>
      </div>
    </div>
  ) : null;
};

export default Home;

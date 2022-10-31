"use client";

import Image from "next/image";
import { use } from "react";
import { getSession } from "../hooks/client/auth";
import { NoSSR } from "./NoSSR";

export const SessionDisplay = () => {
  const session = use(getSession());

  return (
    <NoSSR fallback={<div className="w-full h-full bg-slate-200" />}>
      {session ? (
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
      ) : null}
    </NoSSR>
  );
};

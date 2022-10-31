import { Session } from "next-auth";
import { headers } from "next/headers";
import { host } from "../../utils/host";

export const getSession = async () =>
  fetch(host`/api/auth/session`, {
    headers: {
      cookie: headers().get("cookie") ?? "",
    },
  })
    .then<Session>((res) => res.json())
    .then((session) => {
      if (!session.expires) return null;
      return session;
    });

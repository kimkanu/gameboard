import { Session } from "next-auth";
import { cache } from "../../experimental";
import { host } from "../../utils/host";

export const getSession = cache(async () =>
  fetch(host`/api/auth/session`)
    .then<Session>((res) => res.json())
    .then((session) => {
      if (!session.expires) return null;
      return session;
    })
);

"use client";

import { signIn } from "next-auth/react";

export const SignInButton = ({
  provider,
}: {
  provider: { id: string; name: string };
}) => {
  return (
    <button
      type="submit"
      onClick={() =>
        signIn(provider.id, {
          callbackUrl: "/",
        })
      }
    >
      Sign in with {provider.name}
    </button>
  );
};

import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { SignInButton } from "./SignInButton";

const SignIn = () => (
  <div className="flex flex-col items-center justify-center w-full h-full gap-4">
    {Object.values(authOptions.providers).map((provider) => {
      return (
        <SignInButton
          key={provider.id}
          provider={{
            id: provider.id,
            name: provider.name,
          }}
        />
      );
    })}
  </div>
);

export default SignIn;

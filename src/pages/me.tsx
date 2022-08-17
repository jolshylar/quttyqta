import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";

const Me = () => {
  const [user, setUser] = useState<User | undefined>();
  const { data: session } = useSession();

  useEffect(() => {
    const getUser = async () => {
      const u = await prisma?.user.findFirstOrThrow({
        where: { id: session?.user?.id },
      });
      setUser(u);
    };
    getUser();
  });

  if (!user?.birthday) return <UserForm />;
  return <div>I get -2 bitches</div>;
};

export default Me;

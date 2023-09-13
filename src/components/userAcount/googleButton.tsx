import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../../services/firebase";
import { FcGoogle } from "react-icons/fc";

interface UserContextType {
  displayName: string;
  photoURL: string;
}

export const GoogleButton = () => {
  const [user, setUser] = useState<UserContextType | null>(null);

  const handleGoogleSigIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button onClick={handleGoogleSigIn} className="font-bold p-2 text-white flex items-center gap-4 bg-sky-500">
      <div className="bg-white p-2">
        <FcGoogle size={25} />
      </div>
      <p>Entrar com o Google</p>
    </button>
  );
};

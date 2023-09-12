import { auth, provider } from "../../services/firebase";
import { useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import { FcGoogle } from "react-icons/fc";

export const Register = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

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

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main>
      <section className="flex m-auto max-w-7xl">
        <div className="bg-gray-200 p-4 m-auto">
          <h1>register area</h1>
          {user ? (
            <div>
              <button onClick={handleLogout} className="w-36 rounded-xl bg-red-600 font-bold text-white">
                LOGOUT
              </button>
              <p>{user.displayName}</p>
              <img src={user.photoURL} alt="Foto de Perfil" width="100" height="100" />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="font-semibold text-xl">OU</p>
              <button onClick={handleGoogleSigIn} className="font-bold p-2 text-white flex items-center gap-4 bg-sky-600">
                <div className="bg-white p-2">
                  <FcGoogle size={25} />
                </div>
                <p>logar com o Google</p>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

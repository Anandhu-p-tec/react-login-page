import { useEffect, useState } from "react";
import { auth, onAuthStateChanged, signOut } from "./firebaseConfig";
import LoginPage from "./component/loginpage/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}!</h2>
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;

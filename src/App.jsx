import Auth from "./pages/Auth";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Chat from "./pages/Chat";
const App = () => {
  const [isAuth, setIsAuth] = useState();
  const [room, setRoom] = useState(null);
  // Kullanıcı oturumundaki değişimi izler
  // Eğer kullanıcı var ise çalıştırdığı fonksiyona parametre olarak gönderir
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  // Kullanıcı yoksa giriş ekranını gösteriri
  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }
  // Çıkış Yapma
  const handleLogouth = () => {
    // Kullanıcının oturumunu kapatır
    signOut(auth).catch((err) => console.log("hata var", err));
  };
  // Form Gönderildiğinde çalışır
  const handleSumbit = (e) => {
    e.preventDefault();
    // Kullanıcının griş yapacağı odayı belirleme
    setRoom(e.target[0].value);
  };
  return (
    // Kullanıcı varsa gösterir
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <form onSubmit={handleSumbit} className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Gireceksiniz</p>
          <input type="text" />
          <button type="submit">Odaya Gir</button>
          <button onClick={handleLogouth} className="out" type="button">
            Çıkış Yap
          </button>
        </form>
      )}
    </div>
  );
};

export default App;

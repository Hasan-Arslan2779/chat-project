import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  where,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Message from "../components/Message";
import { auth, db } from "../firebase/firebaseConfig";
const Chat = ({ room, setRoom }) => {
  const [msgs, setMessages] = useState([]);
  // Kolleksiyon referansını alma
  const messagesCol = collection(db, "messages");
  // Mesaj Gönderme
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value === "") return;

    // Belirttiğimiz kolaksiyona yeni eleman ekler
    addDoc(messagesCol, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });
    // * İnput Sıfırlama
    e.target[0].value = "";
  };

  // Gönderilen Mesajları Alma
  useEffect(() => {
    // *  Filtreleme ayarlarını yapma
    const queryOptions = query(
      messagesCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );
    // orderBy(, "desc");
    // * kolleksiyonun değişimini izler
    // * değişimi algıladığında fonksiyonu çalıştırır
    onSnapshot(queryOptions, (msg) => {
      let commingMessages = [];
      msg.forEach((doc) => commingMessages.push(doc.data()));
      setMessages(commingMessages);
    });
  }, []);
  return (
    <div className="chat">
      <header className="chat-info">
        <p>{auth.currentUser.displayName}</p>
        <p>{auth.currentUser.metadata.creationTime.slice(0, 25)}</p>

        <p>{room}</p>
        <a onClick={() => setRoom(null)}>Başka Oda</a>
      </header>
      <main>
        {msgs.map((tex, i) => (
          <Message tex={tex} key={i} user={auth.currentUser.displayName} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input placeholder="Mesajınızı Yazınız..." type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;

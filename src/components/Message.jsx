import React from "react";

const Message = ({ tex, user }) => {
  // * Mesajı gönderen hesap eşitse
  // * oturumu açık olan hesabı ekrana  basar
  if (user === tex.user) {
    return <p className="msg-user">{tex.text}</p>;
  }
  // *Mesajı farklı kullanıcı gönderdi ise bunu ekrana basar
  return;
  <div className="msg-other">
    <h4>{tex.user}</h4>
    <p>{tex.text}</p>
  </div>;
};

export default Message;

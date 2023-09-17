import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
const Auth = () => {
  const handleClick = () => {
    // kullanıcının sağlayıcı hesabını seçmesi için bir pencere açar.Hesabı seçtikten sonra daha önce hesabı varsa giriş yapar yoksa yeni bir hesap oluşturur ve ona giriş yapar .
    // promise döndürür kullanıcı girerse kullanıcı bilgilerini döndürür hata olursa da hatayı yakalamak gerekir
    signInWithRedirect(auth, provider);
  };
  return (
    <div className="auth">
      <h1>Chatleş</h1>
      <p>Devam Etmek İçin Giriş Yap</p>
      <button onClick={handleClick}>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        Google İle Giriş Yap
      </button>
    </div>
  );
};

export default Auth;

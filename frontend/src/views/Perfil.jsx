import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";

export default function Home() {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);

  console.log(localStorage)

  const [usuario, setUsuarioLocal] = useState({});

  const { token } = useContext(Context);

  console.log("token ss",token.token)
  

  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3002";
    const endpoint = "/usuarios";
     try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token.token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch(error) {
      
      alert(error + " 🙁");
    //catch ({ response: { data: message } }) {
      //alert(message + " 🙁");
      //console.log(message);
    }
  };

  useEffect(() => {
    getUsuarioData();
  },[]);

  return (
    <div className="py-5">
      <h1>
        Bienvenido <span className="fw-bold">{usuario.email}</span>
      </h1>
      <h3>
        {usuario.rol} en {usuario.lenguage}
      </h3>
    </div>
  );
}

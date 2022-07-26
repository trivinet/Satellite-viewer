import { useState } from "react";

export default function Tle(){

    const [info, setInfo] = useState(null);
    const [isLoading,setIsLoading] = useState(true)

    fetch('https://tle.ivanstanojevic.me/api/tle')
    .then((response) => response.json())
    .then((info) => {
        

        setInfo(info); // ⬅️ Guardar datos

        setIsLoading(false); // ⬅️ Desactivar modo "cargando"
      });

      if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
        return (
          'loading...'
        );
      }
        return(
          'ON'
        )
}


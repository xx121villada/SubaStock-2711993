/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Temporizador = ({ fechaFin, onTiempoCritico, minutosCriticos = 1 }) => {
  const fechaConvertida = new Date(Date.parse(fechaFin.replace(/[-]/g, "/")));
  const { seconds, hours, minutes, days, pause, start } = useTimer({
    expiryTimestamp: fechaConvertida,
  });

  useEffect(() => {
    if (days === 0 && hours === 0 && minutes < minutosCriticos) {
      if (onTiempoCritico && typeof onTiempoCritico === "function")
        onTiempoCritico();
    }
  }, [minutes, minutosCriticos, onTiempoCritico, hours, days]);

  useEffect(() => {
    if (days > 0) pause();
    else start();
  }, [days, pause, start]);

  if (days > 0) {
    return (
      <>
        {fechaConvertida.getMonth() + 1}/{fechaConvertida.getDate()}{" "}
        {fechaConvertida.getHours()}:{fechaConvertida.getMinutes()}
      </>
    );
  }

  return (
    <>{`${hours >= 10 ? hours : "0" + hours}:${
      minutes >= 10 ? minutes : "0" + minutes
    }:${seconds >= 10 ? seconds : "0" + seconds}`}</>
  );
};

export default Temporizador;

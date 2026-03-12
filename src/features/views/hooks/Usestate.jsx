import React, { 
  useState, 
  useEffect, 
  useRef, 
  useReducer, 
  useCallback, 
  useMemo, 
  createContext, 
  useContext 
} from 'react';

import { Typography, Button, TextField } from '@mui/material';

const MoodContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export const Usestate = () => {

  const [color, setColor] = useState("Bien");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Estado global activo");

  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const contextValue = { message, setMessage };

  useEffect(() => {
    const t = setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(t);
  }, [count]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const doubledValue = useMemo(() => {
    return state.value * 2;
  }, [state.value]);

  return (
    <MoodContext.Provider value={contextValue}>
      <Contenido
        color={color}
        setColor={setColor}
        count={count}
        inputRef={inputRef}
        focusInput={focusInput}
        state={state}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        doubledValue={doubledValue}
      />
    </MoodContext.Provider>
  );
};

const Contenido = ({
  color,
  setColor,
  count,
  inputRef,
  focusInput,
  state,
  handleIncrement,
  handleDecrement,
  doubledValue
}) => {

  const { message, setMessage } = useContext(MoodContext);

  return (
    <>
      <Typography variant="h4">
        Estado de animo {color}!
      </Typography>

      <Button variant="contained" onClick={() => setColor("Mal")}>
        MAL
      </Button>

      <Button variant="contained" onClick={() => setColor("Triste")}>
        Triste
      </Button>

      <Button variant="contained" onClick={() => setColor("Muy Bien")}>
        Muy Bien
      </Button>

      <Typography variant="h4">
        ¡lo he renderizado {count} veces!
      </Typography>

      <div>
        <TextField inputRef={inputRef} label="Nombre" />
        <Button variant="contained" onClick={focusInput}>
          Enfocar
        </Button>
      </div>

      <Typography variant="h5">
        Que hara este valor: {state.value}
      </Typography>

      <Button variant="contained" onClick={handleIncrement}>
        Incrementar
      </Button>

      <Button variant="contained" onClick={handleDecrement}>
        Reducir
      </Button>

      <Typography variant="h5">
       valor duplicado: {doubledValue}
      </Typography>

      <Typography variant="h5">
       Estado: {message}
      </Typography>

      <Button
        variant="contained"
        onClick={() => setMessage("Modo productivo activado")}
      >
        Activar
      </Button>
    </>
  );
};
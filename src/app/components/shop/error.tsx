"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error ({error, reset}: ErrorProps) {
  return (
    <div style={{fontSize: "2rem"}}>
      <span>:c</span>
      <p>Ha ocurrido un error al cargar los productos</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
};

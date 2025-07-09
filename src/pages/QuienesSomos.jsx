import '../estilos/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="qs-container">
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos una tienda online dedicada a ofrecerte los mejores celulares del mercado.
        Nuestro equipo trabaja cada día para brindarte atención personalizada, productos de calidad
        y entregas rápidas a todo el país.
      </p>
      <div className="qs-info">
        <div className="qs-item">
          <span>📱</span>
          <p>Más de 10.000 celulares vendidos</p>
        </div>
        <div className="qs-item">
          <span>⭐</span>
          <p>Calificaciones 5 estrellas en atención</p>
        </div>
        <div className="qs-item">
          <span>🚚</span>
          <p>Envíos seguros y rápidos</p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;

import '../estilos/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Podés comunicarte con nosotros a través de los siguientes medios:</p>

      <div className="info-contacto">
        <div className="item-contacto">
          <span>📧</span>
          <p><strong>Email:</strong> ventas@info.com</p>
        </div>
        <div className="item-contacto">
          <span>📞</span>
          <p><strong>Teléfono:</strong> +54 11 5555-1234</p>
        </div>
        <div className="item-contacto">
          <span>📍</span>
          <p><strong>Dirección:</strong> Av. Informática 404, Buenos Aires, CABA</p>
        </div>
        <div className="item-contacto">
          <span>⏰</span>
          <p><strong>Horario de atención:</strong> Todos los días de 09 a 09:30 hs</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

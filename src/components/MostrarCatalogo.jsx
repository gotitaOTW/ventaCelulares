const MostrarCatalogo = (props) =>{
    return(
        <>
        <div className="catalogo">
            {props.catalogo.map((celu,index)=>(
                <div className="cardCelu" key={index}>
                    <img src={celu.fotos[0]} alt={celu.fotos[0]} className="fotoCelu"></img>
                    <div className="datos">
                        <div className="principales">
                            <p className="titulo">{celu.modelo}</p>
                            <p className="precio">{celu.precio}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            
        </>
    )
}

export default MostrarCatalogo;
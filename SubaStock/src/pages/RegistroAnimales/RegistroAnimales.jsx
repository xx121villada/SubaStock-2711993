import './RegistroAnimales.css';

const RegistroAnimales = () => {
    return (
        <div className="registro-container">
            <h1 >REGISTRO ANIMAL</h1>
            <div className="logos-container">
                <img src="/src/pages/CRUD-xime/img/1.png" alt="Icono" />
                <img src="/src/pages/CRUD-xime/img/2.png" alt="Icono" />
                <img src="/src/pages/CRUD-xime/img/3.png" alt="Icono" />
            </div>
            <form className="registro-form">
                <div className="form-group">
                    <p >Id</p>
                    <input type="text" id="identificacion" name="identificacion" placeholder='Ingrese la identificacion del animal' />
                </div>
                <div className="form-group">
                    <p >Raza</p>
                    <input type="text" id="raza" name="raza" placeholder='Ingrese la raza del animal' />
                </div>
                <div className="form-group">
                    <p >Peso</p>
                    <input type="text" id="peso" name="peso" placeholder='Ingrese el peso del animal'/>
                </div>
                <div className="form-group">
                    <p >Especie</p>
                    <input type="text" id="especie" name="especie" placeholder='Ingrese la especie del animal' />
                </div>
                <button type="submit" className="registro-button">Registrar</button>
            </form>
        </div>
    );
};

export default RegistroAnimales;

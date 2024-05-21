
import '../css/planes.css';

export const Planes = () => {
  const scrollToPlanes = () => {
    // Obtenemos la referencia al elemento al que queremos hacer scroll
    const planesSection = document.getElementById('planes-section');
    // Hacemos scroll suavemente hacia ese elemento
    planesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Banner */}
      <div className="banner" style={{ marginTop: '60px', textAlign: 'center' }}>
        {/* Imagen del banner */}
        <img src="src\img-planes\Planes\Banner.png" alt="Banner" style={{ width: '90%' }} />

        {/* Texto y botón */}
        <div className="texto-y-boton">
          <h2>Nuestros mejores planes para tu peludito</h2>
          <h1>Protege a tu mascota</h1>
          <h4>¡Cuida a tu compañero peludo con nuestros planes de salud personalizados!</h4>
          <button onClick={scrollToPlanes}>Ver planes</button>
        </div>
      </div>

      {/* Sección de título */}
      <h1 style={{ textAlign: 'center', fontFamily:"Nunito" , fontWeight:'bold',marginTop:'50px', marginBottom:'50px' }}>Nuestros Planes de Salud</h1>


            {/*PRIMER PLAN*/}


      {/* División principal */}
      <div style={{ display: 'flex', marginLeft:'270px' }}>
        {/* División izquierda */}
        <div style={{ width: '550px' }}>
          <img src="src\img-planes\Planes\Rectangle 4296.png" alt="Descripción de la imagen" style={{ width: '100%' }} />
        </div>

        {/* División derecha */}
        <div style={{ width: '860px', height:'397px', backgroundColor: '#4658A5' }}>
          <h1 style={{textAlign:'center',color:'white',fontFamily:'Jost',fontWeight:'500'}}>Plan Básico: "Cuidado Esencial"</h1>
          <h3 style={{ textAlign: 'left', color: 'white', fontFamily: 'Montserrat', fontWeight: 'normal', width: '700px', marginLeft: '70px', fontSize: '15px', lineHeight: '1.5' }}>
            Nuestro plan básico ofrece los servicios esenciales para mantener la salud de tu mascota al día. Incluye chequeos anuales, vacunas básicas, desparasitación, y descuentos en servicios adicionales.
            <br /><br />
            Beneficios:
            <br /><br />
            - Chequeo anual completo con nuestro veterinario.
            <br />
            - Vacunas básicas para la protección contra enfermedades comunes.
            <br />
            - Desparasitación anual para prevenir infestaciones de parásitos internos y externos.
            <br />
            - Descuentos en servicios adicionales como consultas de emergencia y análisis de laboratorio.
            <br />
            - Acceso a consejos y recomendaciones personalizadas para el cuidado de tu mascota.
          </h3>
          <img src="src\img-planes\textura.png" alt="Imagen de fondo" style={{ width: '100%', height: '397px', marginTop:'-350px' }} />
          <div style={{ padding: '20px' }}></div>
        </div>
      </div>

      {/* División inferior */}
      <div id="planes-section" style={{ width: '1370px', height: '150px', marginTop: '-5px', backgroundColor: '#ECEEEF',marginLeft:'270px', padding: '20px', display: 'flex', justifyContent: 'center' }}>
        {/* Primer div */}
        <div style={{ display: 'flex' }}>
          <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
            <div>
              <img src="src\img-planes\icono patita.png" alt="Icono" />
            </div>
            <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>CHEQUEO ANUAL</h1>
            <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>completo con nuestro veterinario.</h4>
          </div>

          {/* Segundo div */}
          <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
            <div>
              <img src="src\img-planes\icono patita.png" alt="Icono" />
            </div>
            <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>VACUNAS BASICAS</h1>
            <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>para la protección contra enfermedades comunes.</h4>
          </div>

          {/* Tercer div */}
          <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
            <div>
              <img src="src\img-planes\icono patita.png" alt="Icono" />
            </div>
            <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>DESPARASITACIÓN ANUAL</h1>
            <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>para prevenir infestaciones de parásitos.</h4>
          </div>

          {/* Cuarto div */}
          <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
            <div>
              <img src="src\img-planes\icono patita.png" alt="Icono" />
            </div>
            <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>DESCUENTOS</h1>
            <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>en servicios adicionales como consultas de emergencia.</h4>
          </div>
        </div>
      </div>


















    {/*SEGUNDO PLAN*/}




      {/* División principal */}
      <div style={{ display: 'flex', marginLeft:'270px', marginTop:'100px'}}>
        {/* División izquierda */}
        <div style={{ width: '550px' }}>
          <img src="src\img-planes\Planes\Cacho-e-gato-juntos-no-chao-posando-pra-foto_3.webp" alt="Descripción de la imagen" alt="Descripción de la imagen" style={{ width: '108.1%' }} />
        </div>

        {/* División derecha */}
        <div style={{ width: '860px', height:'397px', backgroundColor: '#F87D7D' }}>
          <h1 style={{textAlign:'center',color:'white',fontFamily:'Jost',fontWeight:'500'}}>Plan Medio: "Bienestar Activo"</h1>
          <h3 style={{ textAlign: 'left', color: 'white', fontFamily: 'Montserrat', fontWeight: 'normal', width: '700px', marginLeft: '70px', fontSize: '15px', lineHeight: '1.5' }}>
          Nuestro plan medio está diseñado para las mascotas activas que necesitan un cuidado adicional. Además de los servicios del plan básico, este plan incluye atención dental, análisis de sangre anuales, y un programa de control de peso.
            <br /><br />
            Beneficios:
            <br /><br />
            - Todos los beneficios del Plan Básico.
            <br />
            - Limpieza dental anual para mantener la salud bucal de tu mascota.
            <br />
            - Análisis de sangre anuales para detectar cualquier problema de salud temprano.
            <br />
            - Programa de control de peso con seguimiento regular y asesoramiento dietético.
            <br />
            - Descuentos adicionales en productos de cuidado y accesorios para mascotas.
          </h3>
          <img src="src\img-planes\textura.png" alt="Imagen de fondo" style={{ width: '100%', height: '397px', marginTop:'-350px' }} />
          <div style={{ padding: '20px' }}></div>
        </div>
      </div>
      <div id="planes-section" style={{ width: '1370px', height: '150px', marginTop: '-5px', backgroundColor: '#ECEEEF',marginLeft:'270px', padding: '20px', display: 'flex', justifyContent: 'center' }}>
  {/* Primer div */}
  <div style={{ display: 'flex' }}>
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>LIMPIEZA DENTAL</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>anual para mantener la salud bucal.</h4>
    </div>

    {/* Segundo div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center'}}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>ANÁLISIS DE SANGRE</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>anuales para una detección temprana de problemas.</h4>
    </div>

    {/* Tercer div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>PROGRAMA DE CONTROL</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>de peso para un estilo de vida activo.</h4>
    </div>

    {/* Cuarto div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>DESCUENTOS ADICIONALES</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}> en productos de cuidado y accesorios</h4>
    </div>
  </div>
</div>




{/*TERCER PLAN*/}

{/* División principal */}
<div style={{ display: 'flex', marginLeft:'270px', marginTop:'100px'}}>
        {/* División izquierda */}
        <div style={{ width: '550px' }}>
          <img src="src\img-planes\Planes\Cacho-e-gato-juntos-no-chao-posando-pra-foto_3.webp" alt="Descripción de la imagen" style={{ width: '108.1%' }} />
        </div>

        {/* División derecha */}
        <div style={{ width: '860px', height:'397px', backgroundColor: '#06AA78' }}>
          <h1 style={{textAlign:'center',color:'white',fontFamily:'Jost',fontWeight:'500'}}>Plan Premium: "Salud Óptima"</h1>
          <h3 style={{ textAlign: 'left', color: 'white', fontFamily: 'Montserrat', fontWeight: 'normal', width: '700px', marginLeft: '70px', fontSize: '15px', lineHeight: '1.5' }}>
          Nuestro plan premium ofrece el más alto nivel de cuidado para tu mascota. Incluye todos los servicios de los planes básico y medio, además de atención urgente las 24 horas, exámenes oftalmológicos anuales, y sesiones de fisioterapia.
            <br /><br />
            Beneficios:
            <br /><br />
            - Todos los beneficios del Plan Básico y Medio.
            <br />
            - Acceso a atención urgente las 24 horas para emergencias médicas.
            <br />
            - Exámenes oftalmológicos anuales para detectar problemas de visión.
            <br />
            - Sesiones de fisioterapia para mantener la movilidad y el bienestar de tu mascota.
            <br />
            - Servicio de recordatorio de citas y seguimiento personalizado de la salud de tu mascota.
          </h3>
          <img src="src\img-planes\textura.png" alt="Imagen de fondo" style={{ width: '100%', height: '397px', marginTop:'-350px' }} />
          <div style={{ padding: '20px' }}></div>
        </div>
      </div>
      <div id="planes-section" style={{ width: '1370px', height: '150px', marginTop: '-5px', backgroundColor: '#ECEEEF',marginLeft:'270px', padding: '20px', display: 'flex', justifyContent: 'center' }}>
  {/* Primer div */}
  <div style={{ display: 'flex' }}>
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>ATENCIÓN 24HS</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>Para emergencias.</h4>
    </div>

    {/* Segundo div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center'}}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>EXÁMENES OFTALMOLOGICOS</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}> anuales para la salud visual.</h4>
    </div>

    {/* Tercer div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>SESIONES DE FISIOTERAPIA</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}> para mantener la movilidad.</h4>
    </div>

    {/* Cuarto div */}
    <div style={{ width: '255px', height: '175px', margin: '0 10px', textAlign: 'center' }}>
      <div>
        <img src="src\img-planes\icono patita.png" alt="Icono" />
      </div>
      <h1 style={{ fontFamily: 'Oswald', fontWeight: '400', fontSize: '20px', margin: '10px 0 5px' }}>SERVICIO DE RECORDATORIO</h1>
      <h4 style={{ fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px', margin: '0' }}>de citas y seguimiento personalizado.</h4>
    </div>
  </div>
</div>

      
    </>
  );
};

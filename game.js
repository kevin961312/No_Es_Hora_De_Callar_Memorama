// Add your card data here (add as many as you want, the game will randomly select 8)
const allImages = [
  {
    pathCard: "CardYellow/Card1.png",
    title: "Violencia contra las mujeres",
    subtitle: "(Ley 1257 de 2008)",
    text: "Cualquier acción u omisión, que le cause muerte, daño o sufrimiento físico, sexual, psicológico, económico o patrimonial por su condición de mujer, así como las amenazas de tales actos, la coacción o la privación arbitraria de la libertad, bien sea que se presente en el ámbito público o en el privado.",
  },
  {
    pathCard: "CardYellow/Card2.png",
    title: "Violencia de género",
    subtitle:
      "Sistema Integrado de Información de Violencias de Género Ministerio de Salud y Protección Social-2016",
    text: "Cualquier acción o conducta que se desarrolle a partir de las relaciones de poder asimétricas basadas en el género, que sobrevaloran lo relacionado con lo masculino y subvaloran lo relacionado con lo femenino.",
  },
  {
    pathCard: "CardYellow/Card3.png",
    title: "Violencia física",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Riesgo o disminución de la integridad corporal de una persona.
      </p>
      <p>
        <strong>Ejemplos:</strong> Golpes, empujones, puños, cachetadas, patadas, quemaduras con fuego, ácido u otros agentes químicos, ataques con objetos, armas de fuego, traumáticas o cortopunzantes.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card4.png",
    title: "Violencia psicológica",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Consecuencia proveniente de la acción u omisión destinada a degradar o controlar las acciones, comportamientos, creencias y decisiones de otras personas, que implique un perjuicio en la salud psicológica, la autodeterminación o el desarrollo personal.
      </p>
      <p>
        <strong>Ejemplos:</strong> Insultos, humillaciones, chantajes, descalificaciones, celos, control de la autonomía, aislamiento, intimidación, manipulación, amenaza directa o indirecta.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card5.png",
    title: "Violencia sexual",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Obligar a una persona a mantener contacto sexualizado, físico o verbal, o a participar en otras interacciones sexuales mediante el uso de fuerza, intimidación, coerción, chantaje, soborno, manipulación, amenaza o cualquier otro mecanismo que anule o limite la voluntad personal. Igualmente, obligar a la persona agredida a realizar alguno de estos actos con terceras personas.
      </p>
      <p>Ejemplos:</p>
      <p>
        <strong>Actos sexuales:</strong> Acciones o comportamiento sexuales, donde no existe penetración del miembro viril por vía anal, vaginal u oral, y/o la penetración vaginal o anal con cualquier otra parte del cuerpo humano u otro objeto.
      </p>
      <p>
        <strong>Acceso carnal:</strong> Penetración del miembro viril por vía anal, vaginal u oral, así como la penetración vaginal o anal de cualquier otra parte del cuerpo humano u otro objeto.
      </p>
      <p>
        <strong>Acoso sexual:</strong> Acciones y comportamientos verbales, escritos, no verbales, físicos o virtuales con contenido sexual en donde se hostigue, acose, humille, asedie, ofenda, persiga; así como acercamientos corporales u otras conductas físicas de tipo sexual, sin su consentimiento, aprovechando relaciones de autoridad, poder, edad, sexo, posición social, familiar o económica.
      </p>
      <p>
        <strong>Explotación sexual comercial de niños, niñas y adolescentes (ESCNNA):</strong> Violencia sexual ejercida por adolescentes o adultos, mediada por una remuneración en dinero o en especie al niño o niña.
      </p>
      <p>
        <strong>Matrimonio temprano:</strong> Toda unión oficial o de hecho a temprana edad, donde una o ambas personas son niños, niñas y adolescentes.
      </p>
      <p>
        <strong>Esclavitud sexual:</strong> Es el ejercicio de uno de los atributos del derecho de propiedad (comprar, intercambiar, prestar) por medio de la violencia, para realizar uno o más actos de naturaleza sexual.
      </p>
      <p>
        <strong>Embarazo forzado:</strong> Sometimiento mediante amenazas o uso de la violencia física o psicológica para continuar con el embarazo.
      </p>
      <p>
        <strong>Desnudez forzada:</strong> Obligación por medio de la violencia a desnudarse total o parcialmente o a permanecer desnuda.
      </p>
      <p>
        <strong>Aborto forzado:</strong> Interrumpir u obligar a interrumpir el embarazo sin su consentimiento.
      </p>
      <p>
        <strong>Esterilización forzada:</strong> Uso de amenazas o de la violencia física o psicológica para la esterilización.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card6.png",
    title: "Violencia patrimonial y Económica",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        <strong>Violencia patrimonial:</strong> Pérdida, transformación, sustracción, destrucción, retención o distracción de objetos, instrumentos de trabajo, documentos personales, bienes, valores, o derechos económicos destinados a satisfacer las necesidades de la mujer.
      </p>
      <p>
        <strong>Ejemplos:</strong> Control sobre el uso del dinero, incumplimiento de obligaciones económicas, restricción para el uso de pertenencias o documentos personales, destrucción de instrumentos de trabajo.
      </p>
      <p style="text-align: center;">
        <strong>Violencia económica</strong>
      </p>
      <p>
        Cualquier acción u omisión orientada al abuso económico, el control abusivo de las finanzas, recompensas o castigos monetarios a las mujeres por razón de su condición social, económica o política.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card7.png",
    title: "Feminicidio",
    subtitle: "Ley 1761 de 2015",
    text: `
      <p>
        Causar la muerte a una mujer, por su condición de ser mujer o por motivos de su identidad de género o en donde haya concurrido o antecedido cualquiera de las siguientes circunstancias:
      </p>
      <ol>
        <li>
          Tener o haber tenido una relación familiar, íntima o de convivencia con la víctima, de amistad, de compañerismo o de trabajo y ser perpetrador de un ciclo de violencia física, sexual, psicológica o patrimonial que antecedió el crimen contra ella.
        </li>
        <li>
          Ejercer sobre el cuerpo y la vida de la mujer actos de instrumentalización de género o sexual o acciones de opresión y dominio sobre sus decisiones vitales y su sexualidad.
        </li>
        <li>
          Cometer el delito en aprovechamiento de las relaciones de poder ejercidas sobre la mujer, expresado en la jerarquización personal, económica, sexual, militar, política o sociocultural.
        </li>
        <li>
          Cometer el delito para generar terror o humillación a quien se considere enemigo.
        </li>
        <li>
          Que existan antecedentes o indicios de cualquier tipo de violencia o amenaza en el ámbito doméstico, familiar, laboral o escolar por parte del sujeto activo en contra de la víctima o de violencia de género cometida por el autor contra la víctima, independientemente que el hecho haya sido denunciado o no.
        </li>
        <li>
          Que la víctima haya sido incomunicada o privada de su libertad de locomoción, cualquiera que sea el tiempo previo a la muerte de aquella.
        </li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card8.png",
    title: "¿Dónde puede ocurrir la violencia contra las mujeres?",
    subtitle: "",
    text: `
      <p>
        <strong>Privado / Familiar:</strong> Tiene lugar dentro de la familia o unidad doméstica, o cualquier otra relación interpersonal, ya sea que el agresor comparta o haya compartido el mismo domicilio que la mujer. Comprende la violencia física, sexual u otros.
      </p>
      <p>
        <strong>Público / Comunitario:</strong> Tiene lugar en la comunidad, en instituciones educativas, establecimientos de salud o cualquier otro lugar y es perpetrada por cualquier persona. Comprende violencia sexual, maltrato, tortura, trata de personas, prostitución forzada, secuestro y acoso sexual entre otros.
      </p>
      <p>
        <strong>Estatal:</strong> Proviene de agentes estatales, incluyendo miembros de las Fuerzas Militares, Policía o instituciones civiles del Estado. Comprende la violencia directa como perpetradores de la misma o por acciones revictimizantes.
      </p>
      <p>
        <strong>Conflicto Armado:</strong> Actos cometidos por miembros de grupos armados. Generalmente, los actores del conflicto armado ejercen violencia contra las mujeres, casos en los cuales las mujeres tienen derecho a la protección general por su condición de ser mujeres y protección especial como víctimas del conflicto armado.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card9.png",
    title: "Derechos de las víctimas de violencia",
    subtitle: "",
    text: `
      <ol>
        <li>
          <p>Recibir atención integral, oportuna especializada y de calidad.</p>
        </li>
        <li>
          <p>Recibir asistencia jurídica gratuita y especializada.</p>
        </li>
        <li>
          <p>Recibir información clara y completa sobre sus derechos así como sobre los mecanismos y procedimientos para hacerlos efectivos.</p>
        </li>
        <li>
          <p>Autorizar los exámenes médico-legales en caso de violencia sexual y escoger el sexo del médico que brindará la atención.</p>
        </li>
        <li>
          <p>Recibir información clara, completa, veraz y oportuna frente a los derechos sexuales y reproductivos, incluida la Interrupción Voluntaria del Embarazo -IVE-.</p>
        </li>
        <li>
          <p>Recibir asistencia médica, psicológica, psiquiátrica y forense especializada e integral.</p>
        </li>
        <li>
          <p>Tener reserva de su identidad y la de sus familiares, al recibir asistencia médica, legal o asistencia social.</p>
        </li>
        <li>
          <p>Acceder a los mecanismos de protección y atención para ellas, sus hijos e hijas.</p>
        </li>
        <li>
          <p>La verdad, la justicia, la reparación y garantías de no repetición frente a los hechos constitutivos de violencia.</p>
        </li>
        <li>
          <p>La estabilización de su situación conforme a los términos previstos en esta ley.</p>
        </li>
        <li>
          <p>A decidir voluntariamente si puede ser confrontada con el agresor en cualquiera de los espacios de atención y en los procedimientos administrativos, judiciales o de otro tipo.</p>
        </li>
        <li>
          <p>Acceder a asistencia gratuita por un traductor o intérprete en caso de hablar una lengua distinta al español y no poder percibir el lenguaje por los órganos de los sentidos (Ley 906 de 2004 - Ley 1448 de 2011).</p>
        </li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card10.png",
    title: "Medidas de sensibilización y prevención",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Todas las autoridades encargadas de formular e implementar políticas públicas deberán reconocer las diferencias y desigualdades sociales, biológicas en las relaciones entre las personas según el sexo, la edad, la etnia y el rol que desempeñan en la familia y en el grupo social.
      </p>
      <p><strong>Responsabilidades de los Departamentos y Municipios</strong></p>
      <ul>
        <li>
          El tema de violencia contra las mujeres será incluido en la agenda de los Consejos para la Política Social.
        </li>
        <li>
          Los planes de desarrollo municipal y departamental incluirán un capítulo de prevención y atención para las mujeres víctimas de la violencia.
        </li>
        <li>
          A través del Servicio Exterior a cargo de la Cancillería colombiana, creará un "Protocolo estandarizado de atención a las mujeres potencialmente expuestas o que sean víctimas de violencia, que se encuentren en el exterior", el cual permita actuar de manera oportuna para prevenir, identificar, atender y canalizar a las mujeres a servicios especializados de apoyo.
        </li>
      </ul>
      <p>
        Dicho protocolo estandarizado deberá contener como mínimo una ruta de atención que considere las siguientes condiciones y/o recursos:
      </p>
      <ol>
        <li>Recopilación de datos de línea base.</li>
        <li>Disposición de la oferta consular de servicios de atención y protección a las mujeres víctimas de violencia, en lugares visibles, que faciliten el acceso al material informativo.</li>
        <li>Condiciones físicas en las oficinas consulares que garanticen confidencialidad y privacidad.</li>
        <li>Canales permanentes de atención especializada.</li>
        <li>Personal consular sensibilizado y capacitado permanentemente en la detección, el manejo preventivo y la atención de casos de violencia contra las mujeres.</li>
        <li>Coordinación interinstitucional y con la Defensoría del Pueblo y la Procuraduría General de la Nación entre las áreas del consulado, así como entre consulados, que permita una detección y canalización oportuna de las mujeres víctimas, a un área de atención y servicios adecuados que garanticen su protección.</li>
        <li>Coordinación con las áreas de las entidades cuya función es la protección de los derechos humanos como lo son la Defensoría del Pueblo y la Procuraduría General de la Nación.</li>
        <li>Creación y sostenimiento de Redes de Servicios Especializados.</li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card11.png",
    title: "Medidas de atención",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Servicios temporales de habitación, alimentación y transporte que necesitan las mujeres víctimas de violencia con afectación física y/o psicológica, sus hijos e hijas, cuando estos servicios sean inherentes al tratamiento recomendado por los profesionales de la salud, de acuerdo con el resumen de la historia clínica y cuando la Policía Nacional valore la situación especial de riesgo y recomiende que la víctima debe ser reubicada.
      </p>
      <ol>
        <li>
          <strong>Habitación y alimentación:</strong> En la Institución Prestadora de Salud IPS o en servicios de hotelería contratados por la Entidad Promotora de Salud EPS y la Administradora de Régimen Subsidiado ARS.
        </li>
        <li>
          <strong>Subsidio monetario mensual:</strong> cuando la mujer decida no permanecer en los servicios de habitación, siempre y cuando:
          <ul>
            <li>En el territorio que resida la víctima, no existan servicios de habitación contratados.</li>
            <li>No pueda desplazarse a otro municipio por su trabajo.</li>
            <li>Estén agotados los cupos asignados a la entidad territorial donde resida la víctima.</li>
          </ul>
        </li>
        <li><strong>Transporte.</strong></li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card12.png",
    title: "Medidas de protección",
    subtitle: "(Ley 1257 de 2008)",
    text: `
      <p>
        Acciones inmediatas que se pueden tomar para proteger la vida e integridad de las mujeres víctimas de violencia.
      </p>
      <p><strong>Sobre la casa o lugar donde habita la víctima:</strong></p>
      <ol>
        <li>Desalojo de la casa por parte del agresor.</li>
        <li>Impedir que el agresor ingrese a cualquier lugar donde esté la víctima.</li>
        <li>Decidir provisionalmente sobre el uso y disfrute de la vivienda.</li>
      </ol>
      <p><strong>Sobre los hijos e hijas (custodia y cuotas alimentarias):</strong></p>
      <ol>
        <li>Prohibir al agresor trasladar o esconder a niñas, niños y adolescentes.</li>
        <li>Regulación provisional de visitas y custodia.</li>
        <li>Decisión provisional de pensiones alimentarias.</li>
      </ol>
      <p><strong>Sobre las propiedades:</strong></p>
      <ol>
        <li>Suspender al agresor uso y porte de armas.</li>
        <li>Prohibir la comercialización de bienes de la sociedad conyugal o patrimonio vigente.</li>
        <li>Ordenar al agresor devolver objetos y documentos de uso personal o de identificación de la víctima.</li>
      </ol>
      <p><strong>Medidas de protección en ámbitos diferentes al familiar:</strong></p>
      <ol>
        <li>Remitir a la víctima, sus hijos y familia a un lugar donde se encuentren a salvo, con dignidad e integridad.</li>
        <li>Traslado de la institución penitenciaria para mujeres privadas de la libertad.</li>
      </ol>
      <p><strong>Otras medidas (Ley 2126 de 2021):</strong></p>
      <ul>
        <li>Obligar al agresor a acudir a un tratamiento reeducativo y terapéutico. Los costos deberán ser asumidos por el victimario.</li>
        <li>Ordenar a la autoridad de policía, previa solicitud de la víctima, el acompañamiento para su reingreso al lugar de domicilio cuando ella se haya visto en la obligación de salir para proteger su seguridad.</li>
      </ul>
    `,
  },
  {
    pathCard: "CardYellow/Card13.png",
    title: "Rutas de atención de violencias",
    subtitle: "",
    text: "La ruta de atención integral para víctimas de violencias es el conjunto de acciones que de manera articulada e integral, garantizan la protección de las víctimas, su recuperación y la restitución de los derechos. Está comprendida por acciones en salud, justicia y protección:Acceso a Acceso a la justicia y salud, Medidas de protección",
  },
  {
    pathCard: "CardYellow/Card14.png",
    title: "Acceso a la salud",
    subtitle: "",
    text: `
      <ul>
        <li>Valoración y atención inicial</li>
        <li>Administración de profilaxis</li>
        <li>Anticoncepción de emergencia</li>
        <li>Recolección de pruebas</li>
        <li>Seguimientos en salud física y mental</li>
        <li>Información sobre Interrupción Voluntaria del Embarazo y acceso a la misma por solicitud de la mujer</li>
        <li>Ingreso a programas especiales en salud</li>
        <li>Remisión a entidades de protección y justicia</li>
      </ul>
      <p>
        <strong>¿Quién lo garantiza?</strong> Hospitales, centros de salud, IPS
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card15.png",
    title: "Acceso a medidas de protección",
    subtitle: "",
    text: `
      <ul>
        <li>
          <p>Verificación de derechos.</p>
        </li>
        <li>
          <p>Medidas de protección y restablecimiento de derechos</p>
        </li>
        <li>
          <p>Proceso Administrativo de Restablecimiento de Derechos (para menores de edad).</p>
        </li>
        <li>
          <p>Notificación a la Fiscalía.</p>
        </li>
        <li>
          <p>Valoración médico legal.</p>
        </li>
        <li>
          <p>Remisión a las entidades de salud y justicia.</p>
        </li>
      </ul>
      <p>
        <strong>¿Quién lo garantiza?</strong> ICBF - Centro Zonal, Defensorías y Comisarías de Familia, Jueces de control de garantías, Personerías, Defensoría del Pueblo, Procuraduría General de la Nación.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card16.png",
    title: "Acceso a la justicia",
    subtitle: "",
    text: `
      <p>Recepción de denuncia.</p>
      <ul>
        <li>Investigación y judicialización del delito.</li>
        <li>Solicitud medidas de protección a través del juez de garantías.</li>
        <li>Solicitud de valoración médico legal.</li>
        <li>Remisión a las entidades de salud y protección.</li>
      </ul>
      <p>
        <strong>¿Quién lo garantiza?</strong> Estaciones de Policía, Comisarías de Familia, Fiscalía, Unidad de Reacción Inmediata, Centro de Atención Integral Víctimas de Violencia Sexual - CAIVAS, Centro de Atención Víctimas de Violencia Intrafamiliar.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card17.png",
    title: "Entidades que intervienen en la ruta de atención de violencias",
    subtitle: "",
    text: `
      <ol>
        <li>
          <p><strong>Entidades de salud:</strong> Realizan de manera gratuita la valoración a la víctima; prestan atención médica, psicológica o psiquiátrica, informan sobre los derechos sexuales y derechos reproductivos. En los casos de Violencia Intrafamiliar (VIF), ofrecen albergue o subsidio para alquiler de habitación y alimentación de la mujer víctima y sus hijos o hijas, en caso que su vida, salud física o mental se encuentren en riesgo.</p>
        </li>
        <li>
          <p><strong>Fiscalía:</strong> Brinda atención y orientación 24 horas, todos los días de la semana, para instaurar la denuncia penal. Investiga los delitos y determina la captura del agresor; solicita medidas de protección para la víctima de violencia.</p>
        </li>
        <li>
          <p><strong>Comisaría de familia:</strong> Recibe la denuncia, emite medidas de protección para la víctima de violencia intrafamiliar; hace acompañamiento ante el ICBF si la víctima y/o en el núcleo familiar hay menores de edad.</p>
        </li>
        <li>
          <p><strong>Policía:</strong> Recibe las denuncias; hace cumplir las medidas de protección ordenadas por las autoridades competentes; acompaña y garantiza la preservación de la vida, integridad y seguridad de la víctima y de sus hijas o hijos, una vez se emiten las medidas de protección.</p>
        </li>
        <li>
          <p><strong>Inspección de policía:</strong> Adelanta la valoración de la situación; orienta a la víctima y su familia y remite a las entidades pertinentes para la protección.</p>
        </li>
        <li>
          <p><strong>Instituto Colombiano de Bienestar Familiar:</strong> Restablece los derechos a niñas, niños y adolescentes; acompaña a procesos de la víctima si es menor de edad, en la denuncia, investigación y sanción y brinda acompañamiento psicosocial.</p>
        </li>
        <li>
          <p><strong>Personería:</strong> Brinda orientación y asesoría legal; apoyo para la víctima al igual que a su familia, de ser necesario asignar un defensor público. Remite a las mujeres a la dupla de género de la defensoría del pueblo, para que accedan a servicios de orientación y asistencia psico-jurídica.</p>
        </li>
        <li>
          <p><strong>Defensoría del pueblo:</strong> Presta asesoría jurídica y psicosocial a la víctima, familiares y amigos; acompañan a la víctima en el proceso de denuncia, investigación y sanción. Verifica que las entidades de la ruta cumplan con su labor y atiendan de forma digna y efectiva a las mujeres, así mismo designa el representante judicial de víctimas.</p>
        </li>
        <li>
          <p><strong>Instituciones educativas:</strong> Realizan el reporte del caso a las autoridades municipales y a la secretaría de educación; garantiza la continuidad del servicio educativo si es menor de edad o si tiene hijos o hijas menores de edad; ofrece atención psicológica para ellos y ellas.</p>
        </li>
        <li>
          <p><strong>Autoridades propias en los territorios, resguardos, cabildos, consejos comunitarios y otras organizaciones existentes:</strong> Prestan atención desde la justicia propia y/o remite a la justicia ordinaria; investiga y sanciona los hechos; remite a un servicio de salud para recibir atención; brinda asistencia de acuerdo con los usos y costumbres tradicionales (médico tradicional); otorga las medidas de protección para la víctima(s) y sus hijas y/o hijos.</p>
        </li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card18.png",
    title: "Líneas de atención:",
    subtitle: "",
    text: `
      <p>
        <strong>141</strong> - Instituto Colombiano de Bienestar Familiar: Línea gratuita nacional de protección a niños, niñas y adolescentes, para reportar una emergencia, hacer una denuncia o pedir orientación sobre un hecho de violencia. Disponible 7 días de la semana, las 24 horas del día.
      </p>
      <p>
        <strong>122</strong> - Fiscalía General de la Nación: Línea de denuncia y reporte de violencia intrafamiliar, sexual o de género y trata de personas, delitos informáticos, hurto, material con contenido de explotación sexual infantil, extorsión, falsedad en documentos y estafa. Disponible 7 días de la semana, las 24 horas del día.
      </p>
      <p>
        <strong>123</strong> - Policía Nacional: Línea Nacional que permite que en un solo número los colombianos puedan acceder a todos los servicios de emergencia y seguridad que ofrece el Estado gratuitamente. Disponible 7 días de la semana, las 24 horas del día.
      </p>
    `,
  },
  {
    pathCard: "CardYellow/Card19.png",
    title: "Línea de orientación a Mujeres Víctimas de Violencia 155",
    subtitle: "",
    text: `
      <ol>
        <li>
          <p>Operada por la Policía Nacional.</p>
        </li>
        <li>
          <p>Funciona en todo el país, 7 días de la semana, 24 horas del día.</p>
        </li>
        <li>
          <p>Garantiza una atención bajo reserva de identidad.</p>
        </li>
        <li>
          <p>Brinda información clara y completa sobre los derechos de las mujeres y tipos de violencias de los cuales puede ser víctima una mujer.</p>
        </li>
        <li>
          <p>Orienta sobre la forma de hacer una denuncia, así como los procedimientos para obtener atención jurídica y en materia de salud.</p>
        </li>
      </ol>
    `,
  },
  {
    pathCard: "CardYellow/Card20.png",
    title: "Marco Normativo",
    subtitle: "",
    text: `
      <ul>
        <li>
          <p><strong>Ley 051 de 1981.</strong> "Por la cual se ratifica la Convención Internacional sobre la Eliminación de todas las Formas de Discriminación contra la Mujer - CEDAW para Colombia"</p>
        </li>
        <li>
          <p><strong>Decreto 1398 de 1990. Presidencia de la República.</strong>"Por el cual se desarrolla la Ley 51 de 1981, que aprueba la Convención sobre Eliminación de todas las formas de discriminación contra la mujer, adoptada por las Naciones Unidas"</p>
        </li>
        <li>
          <p><strong>Constitución política de Colombia</strong> - artículos 11, 13, 15, 16, 20, 21, 25, 29, 43, 44, 67</p>
        </li>
        <li>
          <p><strong>Ley 248 de 1995.</strong> "Por medio de la cual se aprueba la Convención Internacional para prevenir, sancionar y erradicar la violencia contra la mujer, suscrita en la ciudad de Belem Do Para, Brasil, el 9 de junio de 1994"</p>
        </li>
        <li>
          <p><strong>Ley 599 del 2000.</strong> Código Penal.</p>
        </li>
        <li>
          <p><strong>Ley 984 de 2005.</strong> "Por medio de la cual se aprueba el Protocolo facultativo de la Convención sobre la eliminación de todas las formas de discriminación contra la mujer".</p>
        </li>
        <li>
          <p><strong>Ley 1010 de 2006.</strong> "por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo"</p>
        </li>
        <li>
          <p><strong>Ley 1257 de 2008.</strong> "Por la cual se dictan normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres, se reforman los Códigos Penal, de Procedimiento Penal, la Ley 294 de 1996 y se dictan otras disposiciones".</p>
        </li>
        <li>
          <p><strong>Ley 1542 de 2012.</strong> "Por la cual se reforma el artículo 74 de la Ley 906 de 2004, Código de Procedimiento Penal cuyo objeto es garantizar la protección y diligencia de las autoridades en la investigación de los presuntos delitos de violencia contra la mujer"</p>
        </li>
        <li>
          <p><strong>Ley 1719 de 2014.</strong> "Por la cual se modifican algunos artículos de las Leyes 599 de 2000, 906 de 2004 y se adoptan medidas para garantizar el acceso a la justicia de las víctimas de violencia sexual, en especial la violencia sexual con ocasión del conflicto armado, y se dictan otras disposiciones."</p>
        </li>
        <li>
          <p><strong>Ley 1761 de 2015.</strong> "Por la cual se crea el tipo penal de feminicidio como delito autónomo y se dictan otras disposiciones. (Rosa Elvira Cely)".</p>
        </li>
        <li>
          <p><strong>Ley 1773 de 2016.<strong> "Por medio de la cual se crea el artículo 116A, se modifican los artículos 68A, 104, 113, 359, y 374 de la Ley 599 de 2000 y se modifica el artículo 351 de la Ley 906 de 2004" (Ley Natalia Ponce de León, Ley de Víctimas de Ataques con Ácido).</p>
        </li>
        <li>
          <p><strong>Ley 2126 de 2021.</strong> "Por la cual se regula la creación, conformación y funcionamiento de las Comisarías de Familia, se establece el órgano rector y se dictan otras disposiciones".</p>
        </li>
      </ul>
    `,
  },
  // Add more cards as needed
];

let symbols = []; // Will be filled with randomly selected images
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

// Initialize the game
function initGame() {
  // Randomly select 8 images from the pool
  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);
  console.log(shuffledImages);
  symbols = shuffledImages.slice(0, 8);

  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";

  // Create pairs and shuffle
  cards = [...symbols, ...symbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      symbol: symbol,
      flipped: false,
      matched: false,
    }));

  // Create card elements
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "hidden");
    cardElement.dataset.id = index;
    cardElement.addEventListener("click", () => flipCard(index));
    gameBoard.appendChild(cardElement);
  });

  // Reset stats
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  canFlip = true;
  updateStats();
  document.getElementById("winMessage").style.display = "none";
}

// Flip a card
function flipCard(index) {
  // If card is already matched, show it in fullscreen
  if (cards[index].matched) {
    showMatchOverlay(cards[index].symbol);
    return;
  }

  if (!canFlip) return;
  if (cards[index].flipped) return;
  if (flippedCards.length >= 2) return;

  const cardElement = document.querySelector(`[data-id="${index}"]`);
  cards[index].flipped = true;
  cardElement.classList.remove("hidden");
  cardElement.classList.add("flipped");

  // Show image instead of text
  cardElement.style.backgroundImage = `url('${cards[index].symbol.pathCard}')`;
  cardElement.style.backgroundSize = "cover";
  cardElement.style.backgroundPosition = "center";

  flippedCards.push(index);

  if (flippedCards.length === 2) {
    moves++;
    updateStats();
    checkMatch();
  }
}

// Check if two flipped cards match
function checkMatch() {
  canFlip = false;
  const [first, second] = flippedCards;

  if (cards[first].symbol.pathCard === cards[second].symbol.pathCard) {
    // Match found!
    setTimeout(() => {
      // Show the big card overlay
      showMatchOverlay(cards[first].symbol);

      cards[first].matched = true;
      cards[second].matched = true;

      const firstElement = document.querySelector(`[data-id="${first}"]`);
      const secondElement = document.querySelector(`[data-id="${second}"]`);

      firstElement.classList.remove("flipped");
      firstElement.classList.add("matched");
      secondElement.classList.remove("flipped");
      secondElement.classList.add("matched");

      matchedPairs++;
      updateStats();
      flippedCards = [];
    }, 500);
  } else {
    // No match flip back
    setTimeout(() => {
      cards[first].flipped = false;
      cards[second].flipped = false;

      const firstElement = document.querySelector(`[data-id="${first}"]`);
      const secondElement = document.querySelector(`[data-id="${second}"]`);

      firstElement.classList.remove("flipped");
      firstElement.classList.add("hidden");
      firstElement.style.backgroundImage = "";
      secondElement.classList.remove("flipped");
      secondElement.classList.add("hidden");
      secondElement.style.backgroundImage = "";

      flippedCards = [];
      canFlip = true;
    }, 1000);
  }
}

// Update stats display
function updateStats() {
  document.getElementById("moves").textContent = moves;
  document.getElementById("matches").textContent = matchedPairs;
}

// Show match overlay with big card
function showMatchOverlay(cardData) {
  const overlay = document.getElementById("matchOverlay");
  const bigCard = document.getElementById("bigCard");

  // Set image on left side
  bigCard.style.backgroundImage = `url('${cardData.pathCard}')`;

  // Set text content on right side
  document.getElementById("cardTitle").textContent = cardData.title;
  document.getElementById("cardSubtitle").textContent = cardData.subtitle || "";
  document.getElementById("cardSubtitle").style.display = cardData.subtitle
    ? "block"
    : "none";
  document.getElementById("cardText").innerHTML = cardData.text;

  overlay.classList.add("show");
}

// Close overlay and continue game
function closeOverlay() {
  const overlay = document.getElementById("matchOverlay");
  overlay.classList.remove("show");
  canFlip = true;

  // Check if game is won
  if (matchedPairs === symbols.length) {
    setTimeout(showWinMessage, 500);
  }
}

// Show win message
function showWinMessage() {
  document.getElementById("finalMovesOverlay").textContent = moves;
  document.getElementById("winOverlay").classList.add("show");
}

// Reset game
function resetGame() {
  initGame();
}

// Play again from win screen
function playAgain() {
  document.getElementById("winOverlay").classList.remove("show");
  initGame();
}

// Return to home from win screen
function returnHomeFromWin() {
  document.getElementById("winOverlay").classList.remove("show");
  document.getElementById("homeScreen").classList.remove("hidden");
}

// Start game from home screen
function startGame() {
  console.log("Starting game...");
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("gameContainer").style.display = "block";
  document.getElementById("homeBtn").style.display = "block";
  initGame();
}

// Return to home screen
function returnHome() {
  document.getElementById("homeScreen").classList.remove("hidden");
  document.getElementById("gameContainer").style.display = "none";
  document.getElementById("homeBtn").style.display = "none";
  document.getElementById("winMessage").style.display = "none";
}

// Don't initialize game on page load wait for user to click start
// initGame();

import './App.css';
import Description from './components/Description/Description';

function App() {
  return (

    <div className='App'>
      <h1>Algunas de las amanitas más populares</h1>
      <Description
        image='caesarea'
        name='AMANITA CESAREA'
        use='Uso: Alimentario. Considerado desde el Imperio Romano, el hongo con más calidad gastronómica y sabor más delicado. '
        toxic='Comestible'
        text='Al nacer aparece como un blanquecino huevo de ave encerrado en una amplia volva elástica que al irse abriendo, va mostrando su sombrero anaranjado-rojizo. Cutícula delgada, lisa, sedosa, separable, de bordes estriados. Suele conservar restos blancos de la volva. Láminas de color amarillo limón, libres, apretadas. Pie amarillento, grueso, cilíndrico, bulboso en la base. Anillo colgante en la parte superior, frágil, membranoso, estriado y persistente. En la parte inferior, abultada volva blanca en forma de saco membranoso y persistente, con bordes lobulados. Carne blanca, cerrada, de olor suave y agradable. Sabor dulce, recuerda a la nuez. '
      />
      <Description
        image='muscaria'
        name='AMANITA MUSCARIA'
        use='Uso: Psicoactivo y Medicinal. utilizado tradicionalmente en Siberia por los chamanes para "ponerse en contacto con los espíritus"'
        toxic='Tóxica'
        text='Cutícula carnosa, color rojo escarlata (de viejo torna a naranja parduzco), con numerosos “copos” blancos, restos de la volva original (podría desaparecer con lluvia, variando su aspecto). Sombrero con bordes estriados. Láminas blancas, con lamélulas, libres y desiguales. Heterogénea (sombrero y pie separables). Pie blanco, cilíndrico, con anillo amplio, colgante, flexible y persistente. Volva desgarrable que al llover se rompe sobre el pie y forma una especie de rodetes en la base. Carne blanca de olor suave pero desagradable, a rábano.'
      />
      <Description
        image='phalloides'
        name='AMANITA PHALLOIDES'
        use='Uso: Utilizada por las tribus celtibéricas para envenenar a sus amos durante la ocupación romana'
        toxic='Tóxica: LETAL'
        text=' Talla media. Sombrero carnoso de carpóforo color marrón oscuro, café o pardo oliváceo, recubierto de abundantes verrugas blancas, como gotas de leche. Borde estriado o acanalado. Heterogénea (sombrero y pie separables). Láminas blancas, libres y desiguales, con lamélulas. Pie blanco, esbelto, delgado. Anillo colgante persistente, color blanco, que de adulto queda en la parte inferior. Volva blanca, friable, helicoidal y desgarrable.'
      />
      <Description
        image='vaginata'
        name='AMANITA VAGINATA'
        use='Uso alimentario con precauciones: Debe cocinarse mucho y a gran temperatura, para evaporar su toxicidad, antes de presentarla en la mesa.'
        toxic='Tóxica'
        text='Sombrero poco carnoso, liso salvo el margen muy estriado, va aplanándose pero conserva el mamelón central. Cutícula gris claro a gris pardo, lisa y satinada, a veces adornada por restos blancos del velo. Láminas blancas, libres. Desiguales, con bordes pubescentes. Pie blanco, esbelto, separable, cónico, consistente de joven y hueco después. Sin anillo, pero con gran volva saciforme y membranosa. Carne blanca, inodora, de sabor algo dulce.'
      />
      <Description
        image='rubescens'
        name='AMANITA RUBESCENS'
        use='Uso: Comestible con precauciones. Cocinarla a más de 70º, ejemplares jóvenes y solo el sombrero, una vez quitada la cutícula y el pie.'
        toxic='Tóxica'
        text='  Talla media-grande, forma convexa y extendida, liso, entero, borde sin estrías. Cutícula marrón-rojiza, se tiñe de tonos vinosos, recubierto de verrugas o placas harinosas horizontales de color gris, algo más separadas entre sí que en otras Amanitas. Láminas libres y desiguales, blanquecinas, con tintes rosas. Pie ancho y robusto, blanco rosado y vinoso abajo, enrojece al rasgarse o ser atacado por insectos. En la base tiene volva voluminosa, napiforme y friable, no membranosa ni suele conservar restos de la volva original. Anillo blanco rosado, colgante, delgado y membranoso, en la parte superior. Carne blanca, gruesa, enrojece al roce, al igual que la base del pie. Inodora y sabor al principio dulce y después agrio'
      />
      <Description
        image='pantherina'
        name='AMANITA PANTHERINA'
        use='Uso: Psicoactivo utilizado como droga recreativa alucinógena en la América hippy. Mortandad del 20%'
        toxic='Tóxica'
        text=' Talla media. Sombrero carnoso de carpóforo color marrón oscuro, café o pardo oliváceo, recubierto de abundantes verrugas blancas, como gotas de leche. Borde estriado o acanalado. Heterogénea (sombrero y pie separables). Láminas blancas, libres y desiguales, con lamélulas. Pie blanco, esbelto, delgado. Anillo colgante persistente, color blanco, que de adulto queda en la parte inferior. Volva blanca, friable, helicoidal y desgarrable.'
      />
    </div>

  )


}

export default App; 
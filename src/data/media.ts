// Client material (Biemme Finestre), web-sized by scripts/prep-media.mjs.
// Alt texts describe what is visible, in Italian, because they are read by screen readers and by AI crawlers.
import pergolaGiardino from '../assets/media/pergola-giardino.jpg';
import pergolaRender from '../assets/media/pergola-render.png';
import vetrate from '../assets/media/vetrate-panoramiche.jpg';
import flashAmbiente from '../assets/media/persiane-flash-ambiente.jpg';
import mixerAmbiente from '../assets/media/persiane-mixer-ambiente.jpg';
import flashAngolo from '../assets/media/flash-angolo.jpg';
import flashManiglia from '../assets/media/flash-maniglia.jpg';
import mixerAngolo from '../assets/media/mixer-angolo.jpg';
import mixerManiglia from '../assets/media/mixer-maniglia.jpg';
import mixerEsterna from '../assets/media/mixer-esterna.jpg';
import mixerInterna from '../assets/media/mixer-interna.jpg';
import inversaAmbiente from '../assets/media/inversa-ambiente.jpg';
import inversaAnta from '../assets/media/inversa-anta.jpg';
import inversaEsterno from '../assets/media/inversa-esterno.jpg';
import inversaInterno from '../assets/media/inversa-interno.jpg';
import inversaManiglia from '../assets/media/inversa-maniglia.jpg';

export interface Img { src: ImageMetadata; alt: string; caption?: string }

export const media: Record<string, Img> = {
  pergolaGiardino: {
    src: pergolaGiardino,
    alt: 'Pergola bioclimatica in alluminio grigio antracite su una terrazza in legno con tavolo, sedie e divano, accanto a una casa con giardino',
    caption: 'Pergola bioclimatica a parete su due gambe.',
  },
  pergolaRender: {
    src: pergolaRender,
    alt: 'Rendering di una pergola bioclimatica in alluminio con lame orientabili, illuminazione LED nel perimetro (a richiesta) e gamba con sistema di drenaggio',
    caption: 'Lame orientabili e drenaggio nelle gambe. LED nel perimetro a richiesta',
  },
  vetrate: {
    src: vetrate,
    alt: 'Villa moderna con ampia vetrata scorrevole panoramica con grandi pannelli di vetro, aperta su soggiorno e piscina al tramonto',
    caption: 'Vetrata panoramica senza montanti verticali',
  },
  flashAmbiente: {
    src: flashAmbiente,
    alt: 'Persiane Flash a lamelle di colore grigio chiaro su una facciata, una a due ante aperta e una chiusa, davanti a una terrazza',
    caption: 'Persiane Flash',
  },
  mixerAmbiente: {
    src: mixerAmbiente,
    alt: 'Persiane Mixer storica verdi a lamelle, una a due ante aperta e una chiusa, su una facciata chiara con terrazza',
    caption: 'Persiane Mixer storica',
  },
  flashAngolo: {
    src: flashAngolo,
    alt: 'Dettaglio dell\'angolo esterno di una persiana Flash: profilo del telaio, lamella e cerniera',
    caption: 'Flash, angolo esterno',
  },
  flashManiglia: {
    src: flashManiglia,
    alt: 'Dettaglio della maniglia color crema su una persiana Flash, con le lamelle in primo piano',
    caption: 'Flash, maniglia',
  },
  mixerAngolo: {
    src: mixerAngolo,
    alt: 'Dettaglio dell\'angolo esterno di una persiana Mixer storica color avorio con cerniera nera in ferro',
    caption: 'Mixer storica, angolo esterno',
  },
  mixerManiglia: {
    src: mixerManiglia,
    alt: 'Dettaglio della maniglia e della cerniera nera su una persiana Mixer storica color avorio',
    caption: 'Mixer storica, maniglia',
  },
  mixerEsterna: {
    src: mixerEsterna,
    alt: 'Persiana Mixer storica color avorio vista dall\'esterno, con lamelle e cerniere nere',
    caption: 'Vista esterna',
  },
  mixerInterna: {
    src: mixerInterna,
    alt: 'Persiana Mixer storica color avorio vista dall\'interno, con le lamelle',
    caption: 'Vista interna',
  },
  inversaAmbiente: {
    src: inversaAmbiente,
    alt: 'Soggiorno con due finestre Inversa a telaio sottile: una a due ante chiusa e una con le ante aperte sul panorama del mare',
    caption: 'Finestra Inversa in soggiorno',
  },
  inversaAnta: {
    src: inversaAnta,
    alt: 'Finestra Inversa a un\'anta con telaio color champagne e vetro, su fondo neutro',
    caption: 'Inversa, anta singola',
  },
  inversaEsterno: {
    src: inversaEsterno,
    alt: 'Finestre Inversa viste dall\'esterno di un\'abitazione con terrazza e vista sul mare',
    caption: 'Vista dall\'esterno',
  },
  inversaInterno: {
    src: inversaInterno,
    alt: 'Interno di una stanza con finestre Inversa a telaio champagne e vista sul mare',
    caption: 'Vista dall\'interno',
  },
  inversaManiglia: {
    src: inversaManiglia,
    alt: 'Dettaglio della maniglia dorata su un telaio Inversa color champagne',
    caption: 'Inversa, maniglia',
  },
};

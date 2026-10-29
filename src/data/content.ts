// All page copy. Every figure comes from the client's own pages (gencomultiservice.it, giennec.it)
// or from the Biemme Finestre material the client sent on 2026-10-26 (outdoor catalogue 2026, Inversa videos).
// No figure is invented; anything unknown is left out. Open points: ../../notes/landing-to-confirm.md

import { u } from '../lib/url';

export const hero = {
  kicker: 'Persiane · Pergole · Vetrate · Finestre',
  h1: 'Persiane, pergole e vetrate scorrevoli su misura, fornite e posate da un unico referente.',
  lead:
    'Mandaci qualche foto e le misure approssimative del punto da sistemare. Ti ricontattiamo noi per il sopralluogo e il preventivo.',
  primary: 'Richiedi un preventivo',
  secondary: 'Scrivici su WhatsApp',
  chips: ['Fornitura e posa', 'Post vendita', 'Schede tecniche del produttore'],
};

export const proof = [
  { value: 'Classe 6', label: 'resistenza al vento delle persiane, il livello massimo' },
  { value: '15 anni', label: 'di garanzia sulle vernici RAL ed effetto legno in classe 2' },
  { value: '5000 mm', label: 'di larghezza massima per ogni modulo di pergola, i moduli si affiancano' },
  { value: '5 anni', label: 'di garanzia sulle vetrate a pacchetto' },
];

export type Spec = [string, string];

export interface Group {
  title: string;
  text?: string;
  specsCaption?: string;
  specs?: Spec[];
}

export interface Product {
  id: string;
  kicker: string;
  teaser: string;
  h2: string;
  paras: string[];
  specsCaption: string;
  specs: Spec[];
  main: string;
  more: string[];
  groups?: Group[];
  cta: string;
  interest: string;
}

export const products: Product[] = [
  {
    id: 'persiane',
    kicker: 'Persiane e scuri',
    teaser: 'Classe 6 al vento, su misura',
    h2: 'Persiane su misura, senza limiti di quantità e di colore.',
    paras: [
      `Ogni persiana viene realizzata su misura per le tue finestre, nel colore che scegli. Le persiane sono certificate alla resistenza al vento in classe 6, il livello massimo.`,
      `Con le finiture RAL o effetto legno, trattate con vernici in classe 2, la garanzia contro i danni degli agenti atmosferici è di 15 anni.`,
    ],
    specsCaption: 'Persiane: dati principali',
    specs: [
      ['Resistenza al vento', 'Classe 6'],
      ['Finiture', 'RAL ed effetto legno'],
      ['Vernici', 'Classe 2'],
      ['Garanzia sulle vernici', '15 anni'],
      ['Quantità e colori', 'Nessun limite'],
    ],
    main: 'flashAmbiente',
    more: ['mixerAmbiente', 'flashAngolo', 'flashManiglia', 'mixerAngolo', 'mixerManiglia', 'mixerEsterna', 'mixerInterna'],
    groups: [
      {
        title: 'Flash',
        text: `Linea moderna a lamelle, con la maniglia sull'anta e il profilo del telaio dal disegno pulito. Si vede nelle foto dell'angolo esterno e della maniglia.`,
      },
      {
        title: 'Mixer storica',
        text: `Il disegno della persiana tradizionale, con cerniere nere in ferro ben visibili. Le lamelle si vedono sia dall'esterno sia dall'interno.`,
      },
      {
        title: 'Altri modelli a catalogo',
        text: `Isolflash, Newflash, Sicurflash, Club, Curva, Florentia, Scandola, Tenua e Softinterno.`,
      },
    ],
    cta: 'Chiedi un preventivo per le persiane',
    interest: 'Persiane',
  },
  {
    id: 'pergole',
    kicker: 'Pergole bioclimatiche',
    teaser: 'Lame motorizzate in alluminio',
    h2: 'Pergole bioclimatiche con lame motorizzate che regoli in base a sole e pioggia.',
    paras: [
      `La struttura è in alluminio e le lame motorizzate si orientano per far passare luce e aria. A lame chiuse proteggono dalla pioggia, e il sistema di drenaggio integrato nelle gambe porta via l'acqua senza accumuli sotto la copertura.`,
      `I LED sono integrati nella struttura, così la pergola si usa anche la sera. A richiesta si aggiungono sensori climatici per neve, pioggia, sole e vento, e tende motorizzate con sistema ZIP.`,
    ],
    specsCaption: 'Pergola bioclimatica Biemme Finestre: dati principali',
    specs: [
      ['Struttura', 'Alluminio'],
      ['Lame', 'Motorizzate, rotazione da 0° a 90°'],
      ['Lama dritta', 'Per larghezze fino a 4000 mm'],
      ['Lama ondulata', 'Per larghezze oltre 4000 mm'],
      ['Larghezza massima per modulo', '5000 mm, più moduli per larghezze maggiori'],
      ['Motore TUB200R2', '230 V, 350 W, rumore fino a 50 dB'],
      ['Installazione', 'Quattro gambe, a parete su due gambe, tra due pareti senza gambe'],
      ['A richiesta', 'Sensori per neve, pioggia, sole e vento. Tende motorizzate ZIP'],
    ],
    main: 'pergolaGiardino',
    more: ['pergolaRender'],
    groups: [
      {
        title: 'Altra linea: Climatika (Gaviota)',
        text: `Climatika ha lamelle orientabili da 0° a 135°. È predisposta per chiusure perimetrali con vetrate panoramiche, tende verticali e frangisole, con LED nelle gronde e, a richiesta, nelle lame.`,
        specsCaption: 'Pergola Climatika: dati principali',
        specs: [
          ['Lamelle', 'Orientabili da 0° a 135°'],
          ['Dimensioni massime', 'L 420 × S 600 cm'],
          ['Resistenza al vento', 'Classe 6'],
          ['Illuminazione', 'LED nel perimetro e nelle lame, luce bianca o RGB dimmerabile'],
        ],
      },
      {
        title: 'Altri modelli a catalogo',
        text: `Pergo Clima, Pergo Clima Rain, Pergo Classic, Pergo Arco e le coperture Clima 120, Hera Portico e Zen.`,
      },
    ],
    cta: 'Chiedi un preventivo per la pergola',
    interest: 'Pergola',
  },
  {
    id: 'vetrate',
    kicker: 'Vetrate scorrevoli',
    teaser: 'Scorrevoli, a pacchetto, Privé',
    h2: 'Vetrate panoramiche Visibilia: scorrevoli, a pacchetto o con vetro che si oscura.',
    paras: [
      `Visibilia ha tre versioni: scorrevole, impacchettabile e Privé. In tutte la vista resta libera, perché i pannelli di vetro non hanno montanti verticali.`,
      `I pannelli impacchettabili si raccolgono di lato, verso l'interno o verso l'esterno, e il vetro si pulisce da dentro. Il peso scarica sul profilo inferiore, quindi il sistema si monta anche sotto un controsoffitto. Secondo il produttore per installarle non servono opere murarie.`,
      `I componenti sono testati in nebbia salina, utile se abiti vicino al mare.`,
    ],
    specsCaption: 'Vetrate impacchettabili: dati principali',
    specs: [
      ['Vetro', 'Temperato da 10 mm'],
      ['Larghezza anta', 'Da 400 a 700 mm'],
      ['Altezza massima', '3000 mm'],
      ['Pannelli', 'Fino a 20'],
      ['Impacchettamento', 'Verso l\'interno o verso l\'esterno'],
      ['Apertura', 'Laterale a sinistra, a destra o centrale'],
      ['Configurazioni', 'Lineare, ad angolo, ad angolo con ante passanti'],
      ['Norma', 'UNI EN 14351-1'],
      ['Carico del vento, altezza 1800 mm', 'Classe 5 (2000 Pa)'],
      ['Carico del vento, altezza 3000 mm', 'Classe 3 (1200 Pa)'],
      ['Isolamento acustico', '35 dB'],
      ['Garanzia', '5 anni'],
    ],
    main: 'vetrate',
    more: [],
    groups: [
      {
        title: 'Scorrevole',
        text: `Le ante scorrono su carrelli con ruote in acciaio inox, regolabili fino a +7 mm. La guida è alta 19 mm, quindi riduce le barriere architettoniche.`,
        specsCaption: 'Visibilia scorrevole: dati principali',
        specs: [
          ['Guida', '19 mm'],
          ['Profilo portavetro', '64 mm'],
          ['Regolazione delle ante', 'Fino a +7 mm'],
          ['Resistenza alla pressione del vento', 'Fino a 600 Pa'],
          ['Guarnizioni', 'Paraspiffero, resistenti ai raggi UV'],
        ],
      },
      {
        title: 'Impacchettabile',
        text: `I compensatori superiore, inferiore e laterale permettono di registrare i fuori squadro: secondo Biemme Finestre è l'unico sistema sul mercato regolabile sui quattro lati del vano. I profili di scorrimento sono in teflon.`,
      },
      {
        title: 'Privé',
        text: `Privé aggiunge al vetro panoramico un dispositivo integrato: con un comando il vetro passa da trasparente a oscurato, per avere privacy e ridurre l'irraggiamento solare diretto. Esiste solo nella versione scorrevole.`,
        specsCaption: 'Visibilia Privé: dati principali',
        specs: [
          ['Temperatura di funzionamento', 'Da -20 °C a +60 °C'],
          ['Tempo di risposta', '10 ms'],
          ['Consumo', '3-5 W/m²'],
          ['Produzione del vetro', 'Serisolar / Innoptec'],
        ],
      },
    ],
    cta: 'Chiedi un preventivo per le vetrate',
    interest: 'Vetrate',
  },
  {
    id: 'finestre',
    kicker: 'Finestre Inversa',
    teaser: 'PVC e alluminio, Made in Italy',
    h2: 'Inversa: la finestra ibrida in PVC e alluminio, prodotta in Italia.',
    paras: [
      `Inversa è il primo serramento ibrido italiano: il cuore è in PVC, con un guscio riciclato al 97%, e la struttura esterna è in alluminio estruso. La sviluppa Biemme Finestre ed è progettata per rispondere ai requisiti della direttiva europea 2030.`,
      `Le linee sono ultra minimali: il nodo centrale è di 85 mm e quello laterale di 80 mm, quindi il vetro occupa più superficie e in casa entra più luce. Le cornici esterne sono in alluminio, a uno o due colori, con angoli saldati (sistema brevettato).`,
    ],
    specsCaption: 'Finestra Inversa: dati principali',
    specs: [
      ['Struttura', 'Cuore in PVC, esterno in alluminio estruso'],
      ['Guscio in PVC riciclato', '97%'],
      ['Nodo centrale', '85 mm'],
      ['Nodo laterale', '80 mm'],
      ['Cornici esterne', 'Alluminio mono o bicolore, angoli saldati (brevettato)'],
      ['Produzione', '100% Made in Italy'],
      ['Isolamento termico', 'In linea con i parametri di legge'],
    ],
    main: 'inversaAmbiente',
    more: ['inversaEsterno', 'inversaInterno', 'inversaAnta', 'inversaManiglia'],
    cta: 'Chiedi un preventivo per le finestre',
    interest: 'Finestre',
  },
];

export const videos = [
  {
    id: 'spot',
    src: u('/video/inversa-spot.mp4'),
    poster: u('/video/inversa-spot-poster.jpg'),
    captions: u('/video/inversa-spot.it.vtt'),
    title: 'Inversa, la finestra ibrida dal design minimale',
    description: 'Lo spot di Biemme Finestre per la finestra Inversa: design minimale e requisiti della direttiva europea 2030.',
    duration: 'PT30S',
    label: '30 secondi',
    transcript:
      'Tempo fa un celebre architetto tedesco disse «Less is more»: sognava di liberare il mondo dal superfluo. Come sarà la finestra del futuro? Si chiese. È trascorso un secolo e oggi noi di Biemme Finestre abbiamo la risposta. È Inversa, la finestra ibrida dal design minimale, progettata per rispondere ai requisiti della direttiva europea 2030. Inversa. Benvenuto nel tuo domani.',
  },
  {
    id: 'qualita',
    src: u('/video/inversa-controlli-qualita.mp4'),
    poster: u('/video/inversa-controlli-qualita-poster.jpg'),
    captions: u('/video/inversa-controlli-qualita.it.vtt'),
    title: 'Come Biemme Finestre controlla ogni finestra Inversa',
    description: 'I controlli di qualità sulla finestra Inversa in fabbrica, dalla verifica dei vetri alla documentazione fotografica del carico prima della consegna.',
    duration: 'PT2M50S',
    label: '2 minuti e 50',
    transcript:
      'La prima fase del controllo qualità riguarda la verifica dei vetri, con ispezione dell’intera superficie su una lavagna luminosa LED di ultima generazione. Il controllo prosegue sulle ante di Inversa, da cui si rimuove la pellicola protettiva per verificare e pulire le superfici in alluminio; la stessa procedura vale per i telai. Le ante vengono poi assemblate ai telai sulle cerniere, ante e telai si puliscono di nuovo e si controlla il funzionamento della ferramenta e dei sistemi di apertura e chiusura. Il serramento viene capovolto per ripetere i controlli sul lato esterno. Poi passa all’imballatrice automatica, dove viene confezionato singolarmente e identificato con un’etichetta di controllo finale applicata dall’operatore responsabile. Viene posizionato sul cavalletto in legno e il carico è protetto con un film personalizzato Biemme Finestre. Prima della partenza si fa una documentazione fotografica completa del carico, che viene confrontata con le immagini acquisite dagli autisti alla consegna, per verificare le condizioni della commessa e garantire la tracciabilità durante il trasporto.',
  },
];

export const qcSteps = [
  { t: 'Vetri', d: 'Ispezione dell’intera superficie su una lavagna luminosa LED.' },
  { t: 'Ante e telai', d: 'Si toglie la pellicola protettiva e si controllano e puliscono le superfici in alluminio.' },
  { t: 'Assemblaggio', d: 'Le ante si agganciano ai telai sulle cerniere, poi nuova pulizia.' },
  { t: 'Funzionamento', d: 'Prova della ferramenta e dei sistemi di apertura e chiusura.' },
  { t: 'Lato esterno', d: 'Il serramento si capovolge e si ripetono gli stessi controlli.' },
  { t: 'Spedizione', d: 'Imballo singolo con etichetta di controllo, cavalletto in legno con film protettivo, foto del carico prima della partenza e confronto con quelle alla consegna.' },
];

export const steps = [
  { n: '01', t: 'Ci scrivi', d: 'Compili il modulo con qualche foto e le misure approssimative del punto da coprire o chiudere.' },
  { n: '02', t: 'Sopralluogo', d: 'Passiamo a prendere le misure esatte e a controllare cosa serve per montare il prodotto.' },
  { n: '03', t: 'Preventivo', d: 'Ricevi un\'offerta per fornitura e posa, con modello, colore e finiture già definiti.' },
  { n: '04', t: 'Posa e assistenza', d: 'La squadra operativa monta il prodotto. Per dubbi o interventi dopo la posa hai lo stesso referente.' },
];

export const why = [
  { t: 'Un solo referente', d: 'Genco lavora come general contractor: fornitura e posa passano da un unico interlocutore, senza rimbalzi tra fornitore e posatore.' },
  { t: 'Schede tecniche pubbliche', d: 'Vetrate Visibilia, finestre Inversa e pergole sono sistemi di Biemme Finestre, con dati e certificazioni dichiarati dal produttore. Li trovi nelle schede qui sopra.' },
  { t: 'Post vendita compreso', d: 'Il servizio non finisce con la posa: restiamo a disposizione per regolazioni, ricambi e interventi.' },
];

export interface FaqGroup { title: string; items: { q: string; a: string }[] }

export const faq: FaqGroup[] = [
  {
    title: 'Pergole bioclimatiche',
    items: [
      {
        q: `Che differenza c'è tra una pergola bioclimatica e una pergola normale?`,
        a: `Una pergola bioclimatica ha le lame orientabili. Le inclini per far entrare luce e aria o le chiudi per fare ombra e riparare dalla pioggia. Nella pergola Biemme la rotazione va da 0° a 90°, nella Climatika da 0° a 135°.`,
      },
      {
        q: `Cosa succede quando piove?`,
        a: `A lame chiuse la copertura forma una barriera impermeabile. Il sistema di drenaggio nelle gambe porta via l'acqua, che quindi non si accumula sopra l'area coperta.`,
      },
      {
        q: `Quanto può essere grande una pergola?`,
        a: `Ogni modulo Biemme arriva a 5000 mm di larghezza, e per larghezze maggiori si affiancano più moduli. Le lame dritte arrivano a 4000 mm di larghezza, oltre si usano lame ondulate. La Climatika arriva a 420 cm di larghezza per 600 cm di sporgenza.`,
      },
      {
        q: `Come si installa una pergola?`,
        a: `In tre modi: autonoma su quattro gambe, a parete con due gambe anteriori, oppure tra due pareti senza gambe. La scelta dipende da dove la monti, e la definiamo al sopralluogo.`,
      },
      {
        q: `Si può aggiungere illuminazione, sensori o tende?`,
        a: `I LED sono integrati nella struttura. A richiesta si aggiungono sensori climatici per neve, pioggia, sole e vento e tende motorizzate con sistema ZIP.`,
      },
      {
        q: `Quanto resiste al vento la pergola Climatika?`,
        a: `La Climatika è in classe 6 di resistenza al vento, la dimensione massima è L 420 × S 600 cm.`,
      },
    ],
  },
  {
    title: 'Persiane',
    items: [
      {
        q: `Le persiane hanno una garanzia?`,
        a: `Le persiane con finitura RAL o effetto legno, trattate con vernici in classe 2, hanno 15 anni di garanzia contro i danni degli agenti atmosferici. La resistenza al vento è certificata in classe 6.`,
      },
      {
        q: `Che differenza c'è tra le persiane Flash e Mixer storica?`,
        a: `Flash è la linea moderna a lamelle, con la maniglia sull'anta. Mixer storica riprende il disegno della persiana tradizionale, con cerniere nere in ferro in vista. A catalogo ci sono anche Isolflash, Newflash, Sicurflash, Club, Curva, Florentia, Scandola, Tenua e Softinterno.`,
      },
      {
        q: `Posso scegliere il colore?`,
        a: `Sì. Le persiane sono realizzate su misura, senza limiti di quantità e di colore, anche con finiture RAL ed effetto legno.`,
      },
    ],
  },
  {
    title: 'Vetrate scorrevoli',
    items: [
      {
        q: `Che differenza c'è tra vetrata scorrevole, impacchettabile e Privé?`,
        a: `La scorrevole ha ante che scorrono su guide di 19 mm. L'impacchettabile raccoglie le ante di lato, verso l'interno o l'esterno, per liberare tutta l'apertura. La Privé è la scorrevole con un vetro che, con un comando, passa da trasparente a oscurato.`,
      },
      {
        q: `Come funziona il vetro Privé?`,
        a: `Un dispositivo integrato nel vetro lo rende trasparente o oscurato con un comando. Funziona da -20 °C a +60 °C, ha un tempo di risposta di 10 ms e consuma 3-5 W/m². Esiste solo nella versione scorrevole.`,
      },
      {
        q: `Le vetrate scorrevoli isolano dal freddo come un serramento?`,
        a: `No. Le vetrate a pacchetto proteggono da vento, pioggia, polvere e rumore (35 dB di isolamento acustico) e creano un cuscinetto d'aria tra la parete e l'esterno. Non sostituiscono un serramento isolante.`,
      },
      {
        q: `Per montare le vetrate servono lavori o permessi?`,
        a: `Il produttore dichiara che non servono opere murarie. Se per la tua casa servono un titolo edilizio o l'autorizzazione del condominio dipende dal comune e dall'edificio: lo guardiamo insieme al sopralluogo.`,
      },
    ],
  },
  {
    title: 'Finestre Inversa',
    items: [
      {
        q: `Cos'è la finestra Inversa?`,
        a: `È una finestra ibrida: il cuore è in PVC, con un guscio riciclato al 97%, e l'esterno è in alluminio estruso. La sviluppa Biemme Finestre e ha il nodo centrale da 85 mm e quello laterale da 80 mm.`,
      },
      {
        q: `Inversa è prodotta in Italia?`,
        a: `Sì, Biemme Finestre la presenta come il primo sistema ibrido 100% Made in Italy.`,
      },
      {
        q: `Come viene controllata una finestra Inversa prima della consegna?`,
        a: `In fabbrica si controllano i vetri su una lavagna luminosa LED e le superfici in alluminio di ante e telai, poi il funzionamento della ferramenta, anche sul lato esterno. Ogni finestra viene imballata singolarmente con un'etichetta di controllo, e prima della partenza si fotografa il carico per confrontarlo con le immagini alla consegna.`,
      },
    ],
  },
  {
    title: 'Preventivo e posa',
    items: [
      {
        q: `Posso chiedere un preventivo solo con foto e misure?`,
        a: `Sì, il modulo serve proprio a questo. Le misure esatte le prendiamo noi al sopralluogo, prima di confermare l'offerta.`,
      },
      {
        q: `Quanto costa?`,
        a: `Dipende da misure, modello, colore e finiture, per questo non pubblichiamo un listino. Il prezzo arriva dopo aver visto foto e misure del tuo caso.`,
      },
      {
        q: `Fate solo la fornitura o anche la posa?`,
        a: `Entrambe. Genco fornisce e posa persiane, pergole, vetrate e finestre, e segue anche il post vendita.`,
      },
    ],
  },
];

export const form = {
  title: 'Raccontaci cosa vuoi sistemare',
  intro: 'Bastano pochi dati. Le foto ce le puoi mandare dopo su WhatsApp.',
  interestLabel: 'Ti interessa',
  interests: ['Persiane', 'Pergola', 'Vetrate', 'Finestre', 'Non so ancora'],
  name: 'Nome e cognome',
  phone: 'Telefono',
  email: 'Email (facoltativa)',
  town: 'Comune dell\'installazione',
  message: 'Misure approssimative e note (facoltativo)',
  consent: 'Ho letto l\'informativa sulla privacy e acconsento al trattamento dei miei dati per essere ricontattato.',
  submit: 'Invia la richiesta',
  thanks: 'Richiesta inviata. Ti ricontattiamo noi appena possibile.',
  error: 'Non siamo riusciti a inviare la richiesta. Riprova o chiamaci.',
};

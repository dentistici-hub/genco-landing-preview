// All page copy. Every figure comes from the client's own pages (gencomultiservice.it, giennec.it)
// or from the Biemme Finestre material the client sent on 2026-10-26 (outdoor catalogue 2026, Inversa videos).
// No figure is invented; anything unknown is left out. Open points: ../../notes/landing-to-confirm.md
import { u } from '../lib/url';

export const hero = {
  kicker: 'Basiano (MI) · Fornitura e posa',
  line: 'Persiane, pergole e vetrate',
  script: 'su misura, fornite e posate da noi.',
  lead: 'Scrivici le misure di massima e mandaci qualche foto su WhatsApp. Ti richiamiamo per il sopralluogo e il preventivo.',
  primary: 'Richiedi un preventivo',
  secondary: 'Scrivici su WhatsApp',
};

export const intro = {
  kicker: 'Genco Multiservice',
  text: `Genco Multiservice srl, con sede a Basiano (MI), fornisce e posa persiane, pergole bioclimatiche, vetrate scorrevoli e finestre per case e aziende. Segue il lavoro dal sopralluogo alla posa e resta a disposizione dopo, per regolazioni e interventi.`,
};

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
    teaser: 'Su misura, classe 6 al vento',
    h2: 'Persiane su misura, nel colore che scegli.',
    paras: [
      `Le persiane si fanno su misura, senza limiti di quantità e di colore. Hanno la certificazione di resistenza al vento in classe 6, la più alta.`,
      `Con finitura RAL o effetto legno e vernici in classe 2, la garanzia contro i danni degli agenti atmosferici è di 15 anni.`,
    ],
    specsCaption: 'Persiane: dati principali',
    specs: [
      ['Resistenza al vento', 'Classe 6'],
      ['Finiture', 'RAL ed effetto legno'],
      ['Vernici', 'Classe 2'],
      ['Garanzia sulle vernici', '15 anni'],
      ['Quantità e colori', 'Nessun limite'],
    ],
    main: 'flashAmbiente',
    more: ['mixerAmbiente', 'flashManiglia', 'mixerAngolo', 'mixerEsterna'],
    groups: [
      {
        title: 'Flash',
        text: `Linea moderna a lamelle, con la maniglia sull'anta.`,
      },
      {
        title: 'Mixer storica',
        text: `Il disegno della persiana tradizionale, con cerniere nere in ferro in vista.`,
      },
      {
        title: 'Altre persiane a catalogo',
        text: `Isolflash, Newflash, Sicurflash, Club, Curva, Florentia, Scandola, Tenua e Softinterno.`,
      },
    ],
    cta: 'Preventivo per le persiane',
    interest: 'Persiane',
  },
  {
    id: 'pergole',
    kicker: 'Pergole bioclimatiche',
    teaser: 'Lame motorizzate in alluminio',
    h2: 'Pergole bioclimatiche con lame motorizzate.',
    paras: [
      `La struttura è in alluminio. Le lame motorizzate si orientano per far passare luce e aria. A lame chiuse la copertura protegge dalla pioggia e il drenaggio nelle gambe porta via l'acqua, senza ristagni.`,
      `I LED sono integrati nella struttura. A richiesta si aggiungono sensori per neve, pioggia, sole e vento e le tende motorizzate ZIP.`,
    ],
    specsCaption: 'Pergola bioclimatica: dati principali',
    specs: [
      ['Struttura', 'Alluminio'],
      ['Lame', 'Motorizzate, rotazione da 0° a 90°'],
      ['Lama dritta', 'Per larghezze fino a 4000 mm'],
      ['Lama ondulata', 'Per larghezze oltre 4000 mm'],
      ['Larghezza massima per modulo', '5000 mm, più moduli per larghezze maggiori'],
      ['Motore TUB200R2', '230 V, 350 W, rumore fino a 50 dB'],
      ['Installazione', 'Quattro gambe, a parete su due gambe, tra due pareti senza gambe'],
      ['A richiesta', 'Sensori per neve, pioggia, sole e vento. Tende motorizzate ZIP'],
    ],
    main: 'pergolaGiardino',
    more: ['pergolaRender'],
    groups: [
      {
        title: 'Climatika',
        text: `Un'altra linea a catalogo, con lamelle orientabili da 0° a 135°. È predisposta per chiusure perimetrali con vetrate panoramiche, tende verticali e frangisole.`,
        specsCaption: 'Pergola Climatika: dati principali',
        specs: [
          ['Lamelle', 'Orientabili da 0° a 135°'],
          ['Dimensioni massime', 'L 420 × S 600 cm'],
          ['Resistenza al vento', 'Classe 6'],
          ['Illuminazione', `A richiesta: LED nel perimetro (luce bianca o RGB dimmerabile) e nelle lame (bianca o RGB)`],
        ],
      },
      {
        title: 'Altre pergole a catalogo',
        text: `Pergo Clima, Pergo Clima Rain, Pergo Classic, Pergo Arco e le coperture Clima 120, Hera Portico e Zen.`,
      },
    ],
    cta: 'Preventivo per la pergola',
    interest: 'Pergola',
  },
  {
    id: 'vetrate',
    kicker: 'Vetrate scorrevoli',
    teaser: 'Scorrevoli, impacchettabili, Privé',
    h2: 'Vetrate panoramiche Visibilia, senza montanti verticali.',
    paras: [
      `Visibilia esiste in tre versioni: scorrevole, impacchettabile e Privé. I pannelli di vetro non hanno montanti verticali, quindi la vista resta libera.`,
      `Nell'impacchettabile le ante si raccolgono di lato, verso l'interno o verso l'esterno. Il peso scarica sul profilo inferiore, quindi il sistema si monta anche sotto un controsoffitto. Secondo la scheda del sistema non servono opere murarie, e i componenti sono testati in nebbia salina.`,
      `Le vetrate proteggono da vento, polvere e rumore, ma non sostituiscono un serramento isolante.`,
    ],
    specsCaption: 'Vetrate impacchettabili: dati principali',
    specs: [
      ['Vetro', 'Temperato da 10 mm'],
      ['Larghezza anta', 'Da 400 a 700 mm'],
      ['Altezza massima', '3000 mm'],
      ['Pannelli', 'Fino a 20'],
      ['Impacchettamento', 'Verso l\'interno o verso l\'esterno'],
      ['Apertura', 'Laterale a sinistra, a destra o centrale'],
      ['Configurazioni', 'Lineare, ad angolo, ad angolo con ante passanti'],
      ['Prove', 'UNE-EN 14351-1:2006, riportate nella scheda del sistema'],
      ['Carico del vento, altezza 1800 mm', 'Classe 5 (2000 Pa)'],
      ['Carico del vento, altezza 3000 mm', 'Classe 3 (1200 Pa)'],
      ['Isolamento acustico', '35 dB'],
      ['Garanzia', '5 anni'],
    ],
    main: 'vetrate',
    more: [],
    groups: [
      {
        title: 'Scorrevole',
        text: `Le ante scorrono su carrelli con ruote in acciaio inox, regolabili fino a +7 mm. La guida è alta 19 mm e riduce le barriere architettoniche.`,
        specsCaption: 'Visibilia scorrevole: dati principali',
        specs: [
          ['Guida', '19 mm'],
          ['Profilo portavetro', '64 mm'],
          ['Regolazione delle ante', 'Fino a +7 mm'],
          ['Resistenza alla pressione del vento', 'Fino a 600 Pa'],
          ['Guarnizioni', 'Paraspiffero, resistenti ai raggi UV'],
        ],
      },
      {
        title: 'Impacchettabile',
        text: `I compensatori superiore, inferiore e laterale registrano i fuori squadro. Secondo la scheda del sistema è l'unico sul mercato regolabile sui quattro lati del vano. I profili di scorrimento sono in teflon.`,
      },
      {
        title: 'Privé',
        text: `Un dispositivo integrato nel vetro lo rende trasparente o oscurato con un comando, per avere privacy e ridurre l'irraggiamento solare diretto. Esiste solo nella versione scorrevole.`,
        specsCaption: 'Visibilia Privé: dati principali',
        specs: [
          ['Temperatura di funzionamento', 'Da -20 °C a +60 °C'],
          ['Tempo di risposta', '10 ms'],
          ['Consumo', '3-5 W/m²'],
        ],
      },
    ],
    cta: 'Preventivo per le vetrate',
    interest: 'Vetrate',
  },
  {
    id: 'finestre',
    kicker: 'Finestre Inversa',
    teaser: 'PVC e alluminio, Made in Italy',
    h2: 'Inversa, la finestra in PVC e alluminio.',
    paras: [
      `Inversa è una finestra ibrida: dentro un guscio in PVC riciclato al 97%, fuori l'alluminio estruso. Viene presentata come il primo serramento ibrido italiano e in linea con i parametri europei 2030.`,
      `Il nodo centrale è di 85 mm e quello laterale di 80 mm, quindi il vetro occupa più superficie. Le cornici esterne sono in alluminio, a uno o due colori, con angoli saldati (sistema brevettato).`,
    ],
    specsCaption: 'Finestra Inversa: dati principali',
    specs: [
      ['Struttura', 'Cuore in PVC, esterno in alluminio estruso'],
      ['Guscio in PVC riciclato', '97%'],
      ['Nodo centrale', '85 mm'],
      ['Nodo laterale', '80 mm'],
      ['Cornici esterne', 'Alluminio mono o bicolore, angoli saldati (brevettato)'],
      ['Produzione', '100% Made in Italy'],
      ['Trasmittanza termica', 'Uw 1,3 con vetro doppio'],
    ],
    main: 'inversaAmbiente',
    more: ['inversaEsterno', 'inversaInterno', 'inversaManiglia'],
    cta: 'Preventivo per le finestre',
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
    description: 'Lo spot della finestra Inversa.',
    duration: 'PT30S',
    label: '30 secondi',
    transcript:
      `Tempo fa un celebre architetto tedesco disse «Less is more»: sognava di liberare il mondo dal superfluo. Come sarà la finestra del futuro? Si chiese. È trascorso un secolo e oggi noi di Biemme Finestre abbiamo la risposta. È Inversa, la finestra ibrida dal design minimale. Progettata per rispondere ai requisiti della direttiva europea 2030. Inversa. Benvenuto nel tuo domani.`,
  },
  {
    id: 'qualita',
    src: u('/video/inversa-controlli-qualita.mp4'),
    poster: u('/video/inversa-controlli-qualita-poster.jpg'),
    captions: u('/video/inversa-controlli-qualita.it.vtt'),
    title: 'I controlli di qualità su ogni finestra Inversa',
    description: 'In fabbrica, dalla verifica dei vetri alla documentazione fotografica del carico.',
    duration: 'PT2M50S',
    label: '2 minuti e 50 secondi',
    transcript:
      `La prima fase del controllo qualità riguarda la verifica dei vetri, sottoposti a una attenta ispezione dell'intera superficie mediante una lavagna luminosa LED di ultima generazione. Il controllo prosegue sulle ante di Inversa, dalle quali viene rimossa la pellicola protettiva mantenuta durante l'intero processo produttivo. La rimozione permette di effettuare una curata verifica visiva delle superfici in alluminio, che vengono contestualmente pulite e controllate in ogni dettaglio. La stessa procedura viene successivamente eseguita sui telai. Le ante vengono assemblate ai rispettivi telai mediante il corretto aggancio ai sistemi di cerniera. Ante e telai vengono nuovamente puliti per eliminare eventuali residui derivanti dalle precedenti fasi di lavorazione e movimentazione. Segue poi il controllo funzionale della ferramenta e dei sistemi di apertura e chiusura. Il serramento viene successivamente capovolto per ripetere le medesime operazioni sul lato esterno, assicurando così un controllo completo del prodotto. Superata questa fase, il serramento viene trasferito all'imballatrice automatica, dove viene confezionato singolarmente per garantirne un'adeguata protezione durante le successive operazioni di movimentazione e trasporto. Ogni serramento viene poi identificato mediante un'etichetta di controllo finale, applicata dall'operatore responsabile della verifica. Il serramento viene poi posizionato sul cavalletto in legno e l'intero carico viene ulteriormente protetto mediante film personalizzato Biemme Finestre. L'ultima fase riguarda il controllo del cavalletto dopo il caricamento sul mezzo di trasporto. Prima della partenza viene realizzata una documentazione fotografica completa del carico. Le immagini vengono successivamente confrontate con quelle acquisite dagli autisti al momento della consegna, consentendo di verificare le condizioni della commessa e garantire la tracciabilità del prodotto durante l'intero trasporto.`,
  },
];

export const qc = {
  title: 'Sei controlli prima della consegna',
  text: 'Il video mostra come passa ogni finestra Inversa dalla fabbrica al camion.',
  steps: [
    { t: 'Vetri', d: 'Ispezione dell\'intera superficie su una lavagna luminosa LED.' },
    { t: 'Ante e telai', d: 'Si toglie la pellicola protettiva e si controllano e puliscono le superfici in alluminio.' },
    { t: 'Assemblaggio', d: 'Le ante si agganciano ai telai sulle cerniere, poi nuova pulizia.' },
    { t: 'Funzionamento', d: 'Prova della ferramenta e dei sistemi di apertura e chiusura.' },
    { t: 'Lato esterno', d: 'Il serramento si capovolge e si ripetono gli stessi controlli.' },
    { t: 'Spedizione', d: 'Imballo singolo con etichetta di controllo, cavalletto in legno con film protettivo, foto del carico prima della partenza e confronto con quelle alla consegna.' },
  ],
};

export const steps = [
  { n: '01', t: 'Ci scrivi', d: 'Compili il modulo con nome, telefono e misure di massima. Le foto le mandi su WhatsApp.' },
  { n: '02', t: 'Sopralluogo', d: 'Veniamo a prendere le misure esatte e a controllare come si monta il prodotto nel tuo caso.' },
  { n: '03', t: 'Preventivo', d: 'Ricevi l\'offerta per fornitura e posa, con modello, colore e finiture.' },
  { n: '04', t: 'Posa e assistenza', d: 'La squadra monta il prodotto. Se dopo la posa serve una regolazione, chiami Genco.' },
];

export const about = {
  kicker: 'Genco',
  h2: 'General contractor per infissi, oscuranti, porte, vetrate e pergole.',
  text: `Genco Multiservice lavora per privati e aziende e segue il lavoro dalla fornitura alla posa, fino al post vendita. Nel catalogo completo ci sono anche porte, inferriate, zanzariere e tende da sole.`,
  link: 'Vai al catalogo completo',
};

export interface FaqGroup { title: string; items: { q: string; a: string }[] }

export const faq: FaqGroup[] = [
  {
    title: 'Pergole bioclimatiche',
    items: [
      {
        q: `Cos'è una pergola bioclimatica e come funziona?`,
        a: `Ha le lame orientabili. Le inclini per far entrare luce e aria o le chiudi per fare ombra e riparare dalla pioggia. Nel modello a catalogo la rotazione va da 0° a 90°, nella Climatika da 0° a 135°.`,
      },
      {
        q: `Cosa succede alla pergola quando piove?`,
        a: `A lame chiuse la copertura protegge dalla pioggia. Il drenaggio nelle gambe porta via l'acqua, che non si accumula sopra l'area coperta.`,
      },
      {
        q: `Quanto può essere grande una pergola bioclimatica?`,
        a: `Ogni modulo arriva a 5000 mm di larghezza e per larghezze maggiori si affiancano più moduli. Le lame dritte arrivano a 4000 mm di larghezza, oltre si usano lame ondulate. La Climatika arriva a 420 cm di larghezza per 600 cm di sporgenza.`,
      },
      {
        q: `Come si installa una pergola bioclimatica?`,
        a: `In tre modi: autonoma su quattro gambe, a parete con due gambe anteriori, oppure tra due pareti senza gambe. Quale usare lo decidiamo al sopralluogo.`,
      },
      {
        q: `Si possono aggiungere luci, sensori e tende?`,
        a: `I LED sono integrati nella struttura. A richiesta si aggiungono sensori per neve, pioggia, sole e vento e tende motorizzate con sistema ZIP.`,
      },
      {
        q: `Quanto resiste al vento la pergola Climatika?`,
        a: `La Climatika è in classe 6 di resistenza al vento.`,
      },
      {
        q: `Per la pergola serve un permesso?`,
        a: `Dipende dal comune, dall'edificio e da come la monti. Lo verifichiamo con te al sopralluogo, prima di fare l'offerta.`,
      },
    ],
  },
  {
    title: 'Persiane',
    items: [
      {
        q: `Le persiane hanno una garanzia?`,
        a: `Con finitura RAL o effetto legno e vernici in classe 2, la garanzia contro i danni degli agenti atmosferici è di 15 anni. La resistenza al vento è certificata in classe 6.`,
      },
      {
        q: `Che differenza c'è tra le persiane Flash e Mixer storica?`,
        a: `Flash è la linea moderna a lamelle, con la maniglia sull'anta. Mixer storica riprende il disegno della persiana tradizionale, con cerniere nere in ferro in vista. A catalogo ci sono anche Isolflash, Newflash, Sicurflash, Club, Curva, Florentia, Scandola, Tenua e Softinterno.`,
      },
      {
        q: `Posso scegliere il colore delle persiane?`,
        a: `Sì. Le persiane si fanno su misura, senza limiti di quantità e di colore, anche con finiture RAL ed effetto legno.`,
      },
    ],
  },
  {
    title: 'Vetrate scorrevoli',
    items: [
      {
        q: `Che differenza c'è tra vetrata scorrevole, impacchettabile e Privé?`,
        a: `La scorrevole ha ante che scorrono su guide di 19 mm. L'impacchettabile raccoglie le ante di lato, verso l'interno o l'esterno, e libera tutta l'apertura. La Privé è una scorrevole con un vetro che passa da trasparente a oscurato con un comando.`,
      },
      {
        q: `Come funziona il vetro Privé?`,
        a: `Un dispositivo integrato nel vetro lo rende trasparente o oscurato con un comando. Funziona da -20 °C a +60 °C, risponde in 10 ms e consuma 3-5 W/m². Esiste solo nella versione scorrevole.`,
      },
      {
        q: `Le vetrate scorrevoli isolano dal freddo?`,
        a: `Poco. Le vetrate a pacchetto proteggono da vento, polvere e rumore (35 dB di isolamento acustico) e creano un cuscinetto d'aria tra la parete e l'esterno, ma non sostituiscono un serramento isolante.`,
      },
      {
        q: `Per montare le vetrate scorrevoli servono lavori o permessi?`,
        a: `Secondo la scheda del sistema non servono opere murarie. Se per la tua casa servono un titolo edilizio o l'autorizzazione del condominio dipende dal comune e dall'edificio, e lo guardiamo insieme al sopralluogo.`,
      },
    ],
  },
  {
    title: 'Finestre Inversa',
    items: [
      {
        q: `Cos'è la finestra Inversa?`,
        a: `È una finestra ibrida: il cuore è in PVC, con un guscio riciclato al 97%, e l'esterno è in alluminio estruso. Il nodo centrale è da 85 mm e quello laterale da 80 mm.`,
      },
      {
        q: `Dove viene prodotta la finestra Inversa?`,
        a: `In Italia: viene presentata come il primo sistema ibrido 100% Made in Italy.`,
      },
      {
        q: `Come viene controllata una finestra Inversa prima della consegna?`,
        a: `In fabbrica si controllano i vetri su una lavagna luminosa LED e le superfici in alluminio di ante e telai, poi il funzionamento della ferramenta, anche sul lato esterno. Ogni finestra è imballata singolarmente con un'etichetta di controllo e, prima della partenza, il carico viene fotografato per confrontarlo con le immagini alla consegna.`,
      },
    ],
  },
  {
    title: 'Preventivo e posa',
    items: [
      {
        q: `Posso chiedere un preventivo con solo foto e misure?`,
        a: `Sì. Compili il modulo con le misure di massima e ci mandi le foto su WhatsApp. Le misure esatte le prendiamo noi al sopralluogo, prima di confermare l'offerta.`,
      },
      {
        q: `Quanto costano persiane, pergole e vetrate?`,
        a: `Dipende da misure, modello, colore e finiture, per questo non c'è un listino. Il prezzo arriva dopo aver visto foto e misure del tuo caso.`,
      },
      {
        q: `Genco fa anche la posa?`,
        a: `Sì. Genco fornisce e posa persiane, pergole, vetrate e finestre, e segue anche il post vendita.`,
      },
    ],
  },
];

export const form = {
  kicker: 'Preventivo',
  title: 'Chiedi un preventivo',
  intro: 'Bastano nome, telefono e due righe su cosa vuoi sistemare. Le foto le mandi dopo su WhatsApp.',
  interestLabel: 'Ti interessa',
  interests: ['Persiane', 'Pergola', 'Vetrate', 'Finestre', 'Non so ancora'],
  name: 'Nome e cognome',
  phone: 'Telefono',
  email: 'Email (facoltativa)',
  town: 'Comune dell\'installazione',
  message: 'Misure di massima e note (facoltativo)',
  consent: 'Ho letto l\'informativa sulla privacy e acconsento al trattamento dei miei dati per essere ricontattato.',
  submit: 'Invia la richiesta',
  thanks: 'Richiesta inviata. Ti ricontattiamo noi appena possibile.',
  error: 'Non siamo riusciti a inviare la richiesta. Riprova o chiamaci.',
};

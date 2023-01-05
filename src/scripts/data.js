const FirstNamesMale = [
  "João",
  "Carlos",
  "Marcos",
  "Antonio",
  "Vicente",
  "Nilton",
  "Gregório",
  "Galileu",
  "Nicolau",
];
const FirstNamesFemale = ["Jaqueline", "Mariana", "Marcela", "Maria"];

const LastNames = ["Silva", "Constantino", "Das Neves", "Siqueira", "Galilei"];

const componentes = [
  {
    name: "Mestre-Sala e Porta Bandeira",
    nameComponentes: [],
    componentesStats: [
      {
        sinergiaIndividual: [],
        sinergiaMedia: 0,
        sinergiaEntreComponentes: 0,
      },
    ],
  },
];
const juradosType = [
  {
    typeName: "Mestre-Sala e Porta-Bandeira",
    typeDiscription:
      "Mestre-sala e Porta-bandeira: É julgado a harmonia do casal e os movimentos desenvolvidos. Para obter nota máxima para essa categoria são necessárias leveza, coordenação e majestade.",
    typeStats: [
      {
        typeStatsName: "Tradicionalista",
        typeStatsDiscription:
          "Este jurado aprecia quando o casal de porta bandeira e metre sala mostra o amor pela escola que desfila, reverenciando a bandeira da escola e outras coisas mais",
        typeStatsMod: [
          {
            typeStatModNerf: 0,
          },
        ],
      },
    ],
  },
];

const generateComponentsMestreSalaPortaBandeira = () => {
  const firstNameMestreSala =
    FirstNamesMale[Math.floor(Math.random() * FirstNamesMale.length)];
  const lastNameMestreSala =
    LastNames[Math.floor(Math.random() * LastNames.length)];
  const nameMestreSala = firstNameMestreSala + " " + lastNameMestreSala;

  const firstNamePortaBandeira =
    FirstNamesFemale[Math.floor(Math.random() * FirstNamesFemale.length)];
  const lastNamePortaBandeira =
    LastNames[Math.floor(Math.random() * LastNames.length)];
  const namePortaBandeira =
    firstNamePortaBandeira + " " + lastNamePortaBandeira;

  const statsMestreSalaSinergia = Math.floor(Math.random() * 100);

  const statsPortaBandeiraSinergia = Math.floor(Math.random() * 100);

  const sinergiaMediaMestreSalaPortaBandeira =
    (statsPortaBandeiraSinergia + statsMestreSalaSinergia) / 2;

  componentes[0].nameComponentes[0] = nameMestreSala;
  componentes[0].nameComponentes[1] = namePortaBandeira;

  componentes[0].componentesStats[0].sinergiaIndividual[0] = 
    statsMestreSalaSinergia
  ;
  componentes[0].componentesStats[0].sinergiaIndividual[1] =
    statsPortaBandeiraSinergia
  ;
  componentes[0].componentesStats[0].sinergiaMedia =
    sinergiaMediaMestreSalaPortaBandeira;
};

//generateComponentsMestreSalaPortaBandeira()

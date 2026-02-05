let elements = {
    hydrogen: {
        name: 'hydrogen',
        symbol: 'H',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '1.008',
        energyLevels: ['1']
    },
    helium: {
        name: 'helium',
        symbol: 'He',
        state: 'gas',
        group: 'noble gas',
        weight: '4.0026',
        energyLevels: ['2']
    },
    lithium: {
        name: 'lithium',
        symbol: 'Li',
        state: 'solid',
        group: 'alkali metal',
        weight: '6.94',
        energyLevels: ['2', '1']
    },
    beryllium: {
        name: 'beryllium',
        symbol: 'Be',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '9.0122',
        energyLevels: ['2', '2']
    },
    boron: {
        name: 'boron',
        symbol: 'B',
        state: 'solid',
        group: 'metalloid',
        weight: '10.81',
        energyLevels: ['2', '3']
    },
    carbon: {
        name: 'carbon',
        symbol: 'C',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '12.011',
        energyLevels: ['4', '2']
    },
    nitrogen: {
        name: 'nitrogen',
        symbol: 'N',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '14.007',
        energyLevels: ['2', '5']
    },
    oxygen: {
        name: 'oxygen',
        symbol: 'O',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '15.999',
        energyLevels: ['2', '6']
    },
    flourine: {
        name: 'flourine',
        symbol: 'F',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '18.998',
        energyLevels: ['2', '7']
    },
    neon: {
        name: 'neon',
        symbol: 'Ne',
        state: 'gas',
        group: 'noble gas',
        weight: '20.180',
        energyLevels: ['2', '8']
    },
    sodium: {
        name: 'sodium',
        symbol: 'Na',
        state: 'solid',
        group: 'alkali metal',
        weight: '22.990',
        energyLevels: ['2', '8', '1']
    },
    magnesium: {
        name: 'magnesium',
        symbol: 'Mg',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '24.305',
        energyLevels: ['2', '8', '2']
    },
    aluminium: {
        name: 'aluminium',
        symbol: 'Al',
        state: 'solid',
        group: 'post-transition metal',
        weight: '26.982',
        energyLevels: ['2', '8', '3']
    },
    silicon: {
        name: 'silicon',
        symbol: 'Si',
        state: 'solid',
        group: 'metalloid',
        weight: '28.085',
        energyLevels: ['2', '8', '4']
    },
    phosphorus: {
        name: 'phosphorus',
        symbol: 'P',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '30.974',
        energyLevels: ['2', '8', '5']
    },
    sulfur: {
        name: 'sulfer',
        symbol: 'S',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '32.06',
        energyLevels: ['2', '8', '6']
    },
    chlorine: {
        name: 'chlorine',
        symbol: 'Cl',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '35.45',
        energyLevels: ['2', '8', '7'],
    },
    argon: {
        name: 'argon',
        symbol: 'Ar',
        state: 'gas',
        group: 'noble gas',
        weight: '39.948',
        energyLevels: ['2', '8', '8']
    },
    potassium: {
        name: 'potassium',
        symbol: 'K',
        state: 'solid',
        group: 'alkali metal',
        weight: '39.098',
        energyLevels: ['2', '8', '8', '1']
    },
    calcium: {
        name: 'calcium',
        symbol: 'Ca',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '40.078',
        energyLevels: ['2', '8', '8', '2']
    },
    scandium: {
        name: 'scandium',
        symbol: 'Sc',
        state: 'solid',
        group: 'transition metal',
        weight: '44.956',
        energyLevels: ['2', '8', '9', '2']
    },
    titanium: {
        name: 'titanium',
        symbol: 'Ti',
        state: 'solid',
        group: 'transition metal',
        weight: '47.867',
        energyLevels: ['2', '8', '10', '2']
    },
    vanadium: {
        name: 'vanadium',
        symbol: 'V',
        state: 'solid',
        group: 'transition metal',
        weight: '50.942',
        energyLevels: ['2', '8', '11', '2']
    },
    chromium: {
        name: 'chromium',
        symbol: 'Cr',
        state: 'solid',
        group: 'transition metal',
        weight: '51.996',
        energyLevels: ['2', '8', '13', '1']
    },
    manganese: {
        name: 'manganese',
        symbol: 'Mn',
        state: 'solid',
        group: 'transition metal',
        weight: '54.938',
        energyLevels: ['2', '8', '13', '2']
    },
    iron: {
        name: 'iron',
        symbol: 'Fe',
        state: 'solid',
        group: 'transition metal',
        weight: '55.845',
        energyLevels: ['2', '8', '14', '2']
    },
    cobalt: {
        name: 'cobalt',
        symbol: 'Co',
        state: 'solid',
        group: 'transition metal',
        weight: '58.933',
        energyLevels: ['2', '8', '15', '2']
    },
    nickel: {
        name: 'nickel',
        symbol: 'Ni',
        state: 'solid',
        group: 'transition metal',
        weight: '58.693',
        energyLevels: ['2', '8', '16', '2']
    },
    copper: {
        name: 'copper',
        symbol: 'Cu',
        state: 'solid',
        group: 'transition metal',
        weight: '63.546',
        energyLevels: ['2', '8', '18', '1']
    },
    zinc: {
        name: 'zinc',
        symbol: 'Zn',
        state: 'solid',
        group: 'transition metal',
        weight: '65.38',
        energyLevels: ['2', '8', '18', '2']
    },
    gallium: {
        name: 'gallium',
        symbol: 'Ga',
        state: 'solid',
        group: 'post-transition metal',
        weight: '69.723',
        energyLevels: ['2', '8', '18', '3']
    },
    germanium: {
        name: 'germanium',
        symbol: 'Ge',
        state: 'solid',
        group: 'metalloid',
        weight: '72.630',
        energyLevels: ['2', '8', '18', '4']
    },
    arsenic: {
        name: 'arsenic',
        symbol: 'As',
        state: 'solid',
        group: 'metalloid',
        weight: '74.922',
        energyLevels: ['2', '8', '18', '5']
    },
    selenium: {
        name: 'selenium',
        symbol: 'Se',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '78.971',
        energyLevels: ['2', '8', '18', '6']
    },
    bromine: {
        name: 'bromine',
        symbol: 'Br',
        state: 'liquid',
        group: 'reactive nonmetal',
        weight: '79.904',
        energyLevels: ['2', '8', '18', '7']
    },
    krypton: {
        name: 'krypton',
        symbol: 'Kr',
        state: 'gas',
        group: 'noble gas',
        weight: '83.798',
        energyLevels: ['2', '8', '18', '8']
    },
    rubidium: {
        name: 'rubidium',
        symbol: 'Rb',
        state: 'solid',
        group: 'alkali metal',
        weight: '85.468',
        energyLevels: ['2', '8', '18', '8', '1']
    },
    strontium: {
        name: 'strontium',
        symbol: 'Sr',
        state: 'solid', 
        group: 'alkaline earth metal',
        weight: '87.62',
        energyLevels: ['2', '8', '18', '8', '2']
    },
    yttrium: {
        name: 'yttrium',
        symbol: 'Y',
        state: 'solid',
        group: 'transition metal',
        weight: '88.906',
        energyLevels: ['2', '8', '18', '9', '2']
    },
    zirconium: {
        name: 'zirconium',
        symbol: 'Zr',
        state: 'solid',
        group: 'transition metal',
        weight: '91.224',
        energyLevels: ['2', '8', '18', '10', '2']
    },
    niobium: {
        name: 'niobium',
        symbol: 'Nb',
        state: 'solid',
        group: 'transition metal',
        weight: '92.906',
        energyLevels: ['2', '8', '18', '12', '1']
    },
    molybdenum: {
        name: 'molybdenum',
        symbol: 'Mo',
        state: 'solid',
        group: 'transition metal',
        weight: '95.95',
        energyLevels: ['2', '8', '18', '13', '1']
    },
    technetium: {
        name: 'technetium',
        symbol: 'Tc',
        state: 'solid',
        group: 'transition metal',
        weight: '98',
        energyLevels: ['2', '8', '18', '13', '2']
    },
    ruthenium: {
        name: 'ruthenium',
        symbol: 'Ru',
        state: 'solid', 
        group: 'transition metal',
        weight: '101.07',
        energyLevels: ['2', '8', '18', '15', '1']
    },
    rhodium: {
        name: 'rhodium',
        symbol: 'Rh',
        state: 'solid',
        group: 'transition metal',
        weight: '102.91',
        energyLevels: ['2', '8', '18', '16', '1']
    },
    palladium: {
        name: 'palladium',
        symbol: 'Pd',
        state: 'solid',
        group: 'transition metal',
        weight: '106.42',
        energyLevels: ['2', '8', '18', '18']
    },
    silver: {
        name: 'silver',
        symbol: 'Ag',
        state: 'solid',
        group: 'transition metal',
        weight: '107.87',
        energyLevels: ['2', '8', '18', '18', '1']
    },
    cadmium: {
        name: 'cadmium',
        symbol: 'Cd',
        state: 'solid',
        group: 'transition metal',
        weight: '112.41',
        energyLevels: ['2', '8', '18', '18', '2']
    },
    indium: {
        name: 'indium',
        symbol: 'In',
        state: 'solid',
        group: 'post-transition metal',
        weight: '114.82',
        energyLevels: ['2', '8', '18', '18', '3']
    },
    tin: {
        name: 'tin',
        symbol: 'Sn',
        state: 'solid',
        group: 'post-transition metal',
        weight: '118.71',
        energyLevels: ['2', '8', '18', '18', '4']
    },
    antimony: {
        name: 'antimony',
        symbol: 'Sb',
        state: 'solid',
        group: 'metalloid',
        weight: '121.76',
        energyLevels: ['2', '8', '18', '18', '5']
    },
    tellurium: {
        name: 'tellurium',
        symbol: 'Te',
        state: 'solid',
        group: 'metalloid',
        weight: '127.60',
        energyLevels: ['2', '8', '18', '18', '6']
    },
    iodine: {
        name: 'iodine',
        symbol: 'Br',
        state: 'liquid', 
        group: 'reactive nonmetal',
        weight: '79.904',
        energyLevels: ['2', '8', '18', '18', '7']
    },
    xenon: {
        name: 'xenon',
        symbol: 'Xe',
        state: 'gas',
        group: 'noble gas',
        weight: '131.29',
        energyLevels: ['2', '8', '18', '18', '8']
    },
    caesium: {
        name: 'caesium',
        symbol: 'Cs',
        state: 'solid',
        group: 'alkali metal',
        weight: '132.91',
        energyLevels: ['2', '8', '18', '18', '8', '1']
    },
    barium: {
        name: 'barium',
        symbol: 'Ba',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '137.33',
        energyLevels: ['2', '8', '18', '18', '8', '2']
    },
    lanthanum: {
        name: 'lanthanum',
        symbol: 'La',
        state: 'solid',
        group: 'lanthanide',
        weight: '138.91',
        energyLevels: ['2', '8', '18', '18', '9', '2']
    },
    cerium: {
        name: 'cerium',
        symbol: 'Ce',
        state: 'solid',
        group: 'lanthanide',
        weight: '140.12',
        energyLevels: ['2', '8', '18', '19', '9', '2']
    },
    praseodymium: {
        name: 'praseodymium',
        symbol: 'Pr',
        state: 'solid',
        group: 'lanthanide',
        weight: '140.91',
        energyLevels: ['2', '8', '18', '21', '8', '2']
    },
    neodymium: {
        name: 'neodymium',
        symbol: 'Nd',
        state: 'solid',
        group: 'lanthanide',
        weight: '144.24',
        energyLevels: ['2', '8', '18', '22', '8', '2']
    },
    promethium: {
        name: 'promethium',
        symbol: 'Pm',
        state: 'solid',
        group: 'lanthanide',
        weight: '145',
        energyLevels: ['2', '8', '18', '23', '8', '2']
    },
    samarium: {
        name: 'samarium',
        symbol: 'Sm',
        state: 'solid',
        group: 'lanthanide',
        weight: '150.36',
        energyLevels: ['2', '8', '18', '24', '8', '2']
    },
    europium: {
        name: 'europium',
        symbol: 'Eu',
        state: 'solid',
        group: 'lanthanide',
        weight: '151.96',
        energyLevels: ['2', '8', '18', '25', '8', '2']
    },
    gadolinium: {
        name: 'gadolinium',
        symbol: 'Gd',
        state: 'solid',
        group: 'lanthanide',
        weight: '157.25',
        energyLevels: ['2', '8', '18', '25', '9' ,'2']
    },
    terbium: {
        name: 'terbium',
        symbol: 'Tb',
        state: 'solid',
        group: 'lanthanide',
        weight: '158.93',
        energyLevels: ['2', '8', '18', '27', '8', '2']
    },
    dysprosium: {
        name: 'dysprosium',
        symbol: 'Dy',
        state: 'solid',
        group: 'lanthanide',
        weight: '162.50',
        energyLevels: ['2', '8', '18', '28', '8', '2']
    },
    holmium: {
        name: 'holmium',
        symbol: 'Ho',
        state: 'solid',
        group: 'lanthanide',
        weight: '164.93',
        energyLevels: ['2', '8', '18', '29', '2']
    },
    erbium: {
        name: 'erbium',
        symbol: 'Er',
        state: 'solid',
        group: 'lanthanide',
        weight: '167.26',
        energyLevels: ['2', '8', '18', '30', '8', '2']
    },
    thulium: {
        name: 'thulium',
        symbol: 'Tm',
        state: 'solid',
        group: 'lanthanide',
        weight: '168.93',
        energyLevels: ['2', '8', '18', '31', '8', '2']
    },
    ytterbium: {
        name: 'ytterbium',
        symbol: 'Yb',
        state: 'solid',
        group: 'lanthanide',
        weight: '173.05',
        energyLevels: ['2', '8', '18', '32', '8', '2']
    },
    lutetium: {
        name: 'lutetium',
        symbol: 'Lu',
        state: 'solid',
        group: 'lanthanide',
        weight: '174.97',
        energyLevels: ['2', '8', '18', '32', '9', '2']
    },
    hafnium: {
        name: 'hafnium',
        symbol: 'Hf',
        state: 'solid',
        group: 'transition metal',
        weight: '178.49',
        energyLevels: ['2', '8', '18', '32', '10', '2']
    },
    tantalum: {
        name: 'tantalum',
        symbol: 'Ta',
        state: 'solid',
        group: 'transition metal',
        weight: '180.95',
        energyLevels: ['2', '8', '18', '32', '11', '2']
    },
    tungsten: {
        name: 'tungsten',
        symbol: 'W',
        state: 'solid',
        group: 'transition metal',
        weight: '183.84',
        energyLevels: ['2', '8', '18', '32', '12', '2']
    },
    rhenium: {
        name: 'rhenium',
        symbol: 'Re',
        state: 'solid',
        group: 'transition metal',
        weight: '186.21',
        energyLevels: ['2', '8', '18', '32', '13', '2']
    },
    osmium: {
        name: 'osmium',
        symbol: 'Os',
        state: 'solid',
        group: 'transition metal',
        weight: '190.23',
        energyLevels: ['2', '8', '18', '32', '14', '2']
    },
    iridium: {
        name: 'iridium',
        symbol: 'Ir',
        state: 'solid',
        group: 'transition metal',
        weight: '192.22',
        energyLevels: ['2', '8', '18', '32', '15', '2']
    },
    platinum: {
        name: 'platinum',
        symbol: 'Pt',
        state: 'solid',
        group: 'transition metal',
        weight: '195.08',
        energyLevels: ['2', '8', '18', '32', '17', '1']
    },
    gold: {
        name: 'gold',
        symbol: 'Au',
        state: 'solid',
        group: 'transition metal',
        weight: '196.97',
        energyLevels: ['2', '8', '18', '32', '18', '1']
    },
    mercury: {
        name: 'mercury',
        symbol: 'Hg',
        state: 'liquid',
        group: 'transition metal',
        weight: '200.59',
        energyLevels: ['2', '8', '18', '32', '18', '2']
    },
    thallium: {
        name: 'thallium',
        symbol: 'Tl',
        state: 'solid',
        group: 'post-transition metal',
        weight: '204.38',
        energyLevels: ['2', '8', '18', '32', '18', '3']
    },
    lead: {
        name: 'lead',
        symbol: 'Pb',
        state: 'solid',
        group: 'post-transition metal',
        weight: '207.2',
        energyLevels: ['2', '8', '18', '32', '18', '4']
    },
    bismuth: {
        name: 'bismuth',
        symbol: 'Bi',
        state: 'solid',
        group: 'post-transition metal',
        weight: '208.98',
        energyLevels: ['2', '8', '18', '32', '18', '5']
    },
    polonium: {
        name: 'polonium',
        symbol: 'Po',
        state: 'solid',
        group: 'post-transition metal',
        weight: '209',
        energyLevels: ['2', '8', '18', '32', '18', '6']
    },
    astatine: {
        name: 'astatine',
        symbol: 'At',
        state: 'solid',
        group: 'post-transition metal',
        weight: '210',
        energyLevels: ['2', '8', '18', '32', '18', '7']
    },
    radon: {
        name: 'radon',
        symbol: 'Rn',
        state: 'gas',
        group: 'noble gas',
        weight: '222',
        energyLevels: ['2', '8', '18', '32', '18', '8']
    },
    francium: {
        name: 'francium',
        symbol: 'Fr',
        state: 'solid',
        group: 'alkali metal',
        weight: '223',
        energyLevels: ['2', '8', '18', '32', '18', '8', '1']
    },
    radium: {
        name: 'radium',
        symbol: 'Ra',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '226',
        energyLevels: ['2', '8', '18', '32', '18', '8', '2']
    },
    actinium: {
        name: 'actinium',
        symbol: 'Ac',
        state: 'solid',
        group: 'actinide',
        weight: '227',
        energyLevels: ['2', '8', '18', '32', '18', '9', '2']
    },
    thorium: {
        name: 'thorium',
        symbol: 'Th',
        state: 'solid',
        group: 'actinide',
        weight: '232.0377',
        energyLevels: ['2', '8', '18', '32', '18', '10', '2']
    },
    protactinium: {
        name: 'protactinium',
        symbol: 'Pa',
        state: 'solid',
        group: 'actinide',
        weight: '231.03588',
        energyLevels: ['2', '8', '18', '32', '20', '9', '2']
    },
    uranium: {
        name: 'uranium',
        symbol: 'U',
        state: 'solid',
        group: 'actinide',
        weight: '238.02891',
        energyLevels: ['2', '8', '18', '32', '21', '9', '2']
    },
    neptunium: {
        name: 'neptunium',
        symbol: 'Np',
        state: 'solid',
        group: 'actinide',
        weight: '237',
        energyLevels: ['2', '8', '18', '32', '22', '9', '2']
    },
    plutonium: {
        name: 'plutonium',
        symbol: 'Pu',
        state: 'solid',
        group: 'actinide',
        weight: '244',
        energyLevels: ['2', '8', '18', '32', '24', '8', '2']
    },
    americium: {
        name: 'americium',
        symbol: 'Am',
        state: 'solid',
        group: 'actinide',
        weight: '243',
        energyLevels: ['2', '8', '18', '32', '25', '8', '2']
    },
    curium: {
        name: 'curium',
        symbol: 'Cm',
        state: 'solid',
        group: 'actinide',
        weight: '247',
        energyLevels: ['2', '8', '18', '32', '25', '9', '2']
    },
    berkelium: {
        name: 'berkelium',
        symbol: 'Bk',
        state: 'solid',
        group: 'actinide',
        weight: '247',
        energyLevels: ['2', '8', '18', '32', '27', '8', '2']
    },
    californium: {
        name: 'californium',
        symbol: 'Cf',
        state: 'solid',
        group: 'actinide',
        weight: '251',
        energyLevels: ['2', '8', '18', '32', '28', '8', '2']
    },
    einsteinium: {
        name: 'einsteinium',
        symbol: 'Es',
        state: 'solid',
        group: 'actinide',
        weight: '252',
        energyLevels: ['2', '8', '18', '32', '29', '8', '2']
    },
    fermium: {
        name: 'fermium',
        symbol: 'Fm',
        state: 'solid',
        group: 'actinide',
        weight: '257',
        energyLevels: ['2', '8', '18', '32', '30', '8', '2']
    },
    mendelevium: {
        name: 'mendelevium',
        symbol: 'Md',
        state: 'solid',
        group: 'actinide',
        weight: '258', 
        energyLevels: ['2', '8', '18', '32', '31', '8', '2']
    },
    nobelium: {
        name: 'nobelium',
        symbol: 'No',
        state: 'solid',
        group: 'actinide',
        weight: '259',
        energyLevels: ['2', '8', '18', '32', '32', '8', '2']
    },
    lawrencium: {
        name: 'lawrencium',
        symbol: 'Lr',
        state: 'solid',
        group: 'actinide',
        weight: '266',
        energyLevels: ['2', '8', '18', '32', '32', '8', '3']
    },
    rutherfordium: {
        name: 'rutherfordium',
        symbol: 'Rf',
        state: 'unknown',
        group: 'transition metal',
        weight: '267',
        energyLevels: ['2', '8', '18', '32', '32', '10', '2']
    },
    dubnium: {
        name: 'dubnium',
        symbol: 'Db',
        state: 'unknown',
        group: 'transition metal',
        weight: '268',
        energyLevels: ['2', '8', '18', '32', '32', '11', '2']
    },
    seaborgium: {
        name: 'seaborgium',
        symbol: 'Sg',
        state: 'unknown',
        group: 'transition metal',
        weight: '269',
        energyLevels: ['2', '8', '18', '32', '32', '12', '2']
    },
    bohrium: {
        name: 'bohrium',
        symbol: 'Bh',
        state: 'unknown',
        group: 'transition metal',
        weight: '270',
        energyLevels: ['2', '8', '18', '32', '32', '13', '2']
    },
    hassium: {
        name: 'hassium',
        symbol: 'Hs',
        state: 'unknown',
        group: 'transition metal',
        weight: '270',
        energyLevels: ['2', '8', '18', '32', '32', '14', '2']
    },
    meitnerium: {
        name: 'meitnerium',
        symbol: 'Mt',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '278',
        energyLevels: ['2', '8', '18', '32', '32', '15', '2']
    },
    darmstadtium: {
        name: 'darmstadtium',
        symbol: 'Ds',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '281', 
        energyLevels: ['2', '8', '18', '32', '32', '17', '1']
    },
    roentgenium: {
        name: 'roentgenium',
        symbol: 'Rg',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '282',
        energyLevels: ['2', '8', '18', '32', '32', '17', '2']
    },
    copernicium: {
        name: 'copernicium',
        symbol: 'Cn',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '285',
        energyLevels: ['2', '8', '18', '32', '32', '18', '2']
    },
    nihonium: {
        name: 'nihonium',
        symbol: 'Nh',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '286',
        energyLevels: ['2', '8', '18', '32', '32', '18', '3']
    },
    flerovium: {
        name: 'flerovium',
        symbol: 'Fl',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '289',
        energyLevels: ['2', '8', '18', '32', '32', '18', '4']
    },
    moscovium: {
        name: 'moscovium',
        symbol: 'Mc',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '290',
        energyLevels: ['2', '8', '18', '32', '32', '18', '5']
    },
    livermorium: {
        name: 'livermorium',
        symbol: 'Lv',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '293',
        energyLevels: ['2', '8', '18', '32', '32', '18', '8']
    },
    tennessine: {
        name: 'tennessine',
        symbol: 'Ts',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '294',
        energyLevels: ['2', '8', '18', '32', '32', '18', '7']
    },
    oganesson: {
        name: 'oganesson',
        symbol: 'Og',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '294',
        energyLevels: ['2', '8', '18', '32', '32', '18', '8']
    }
}

export default elements;
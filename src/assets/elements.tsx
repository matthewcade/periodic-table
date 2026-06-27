let elements = {
    hydrogen: {
        name: 'Hydrogen',
        symbol: 'H',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '1.008',
        energyLevels: ['1']
    },
    helium: {
        name: 'Helium',
        symbol: 'He',
        state: 'gas',
        group: 'noble gas',
        weight: '4.0026',
        energyLevels: ['2']
    },
    lithium: {
        name: 'Lithium',
        symbol: 'Li',
        state: 'solid',
        group: 'alkali metal',
        weight: '6.94',
        energyLevels: ['2', '1']
    },
    beryllium: {
        name: 'Beryllium',
        symbol: 'Be',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '9.0122',
        energyLevels: ['2', '2']
    },
    boron: {
        name: 'Boron',
        symbol: 'B',
        state: 'solid',
        group: 'metalloid',
        weight: '10.81',
        energyLevels: ['2', '3']
    },
    carbon: {
        name: 'Carbon',
        symbol: 'C',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '12.011',
        energyLevels: ['4', '2']
    },
    nitrogen: {
        name: 'Nitrogen',
        symbol: 'N',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '14.007',
        energyLevels: ['2', '5']
    },
    oxygen: {
        name: 'Oxygen',
        symbol: 'O',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '15.999',
        energyLevels: ['2', '6']
    },
    flourine: {
        name: 'Flourine',
        symbol: 'F',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '18.998',
        energyLevels: ['2', '7']
    },
    neon: {
        name: 'Neon',
        symbol: 'Ne',
        state: 'gas',
        group: 'noble gas',
        weight: '20.180',
        energyLevels: ['2', '8']
    },
    sodium: {
        name: 'Sodium',
        symbol: 'Na',
        state: 'solid',
        group: 'alkali metal',
        weight: '22.990',
        energyLevels: ['2', '8', '1']
    },
    magnesium: {
        name: 'Magnesium',
        symbol: 'Mg',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '24.305',
        energyLevels: ['2', '8', '2']
    },
    aluminium: {
        name: 'Aluminium',
        symbol: 'Al',
        state: 'solid',
        group: 'post-transition metal',
        weight: '26.982',
        energyLevels: ['2', '8', '3']
    },
    silicon: {
        name: 'Silicon',
        symbol: 'Si',
        state: 'solid',
        group: 'metalloid',
        weight: '28.085',
        energyLevels: ['2', '8', '4']
    },
    phosphorus: {
        name: 'Phosphorus',
        symbol: 'P',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '30.974',
        energyLevels: ['2', '8', '5']
    },
    sulfur: {
        name: 'Sulfer',
        symbol: 'S',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '32.06',
        energyLevels: ['2', '8', '6']
    },
    chlorine: {
        name: 'Chlorine',
        symbol: 'Cl',
        state: 'gas',
        group: 'reactive nonmetal',
        weight: '35.45',
        energyLevels: ['2', '8', '7'],
    },
    argon: {
        name: 'Argon',
        symbol: 'Ar',
        state: 'gas',
        group: 'noble gas',
        weight: '39.948',
        energyLevels: ['2', '8', '8']
    },
    potassium: {
        name: 'Potassium',
        symbol: 'K',
        state: 'solid',
        group: 'alkali metal',
        weight: '39.098',
        energyLevels: ['2', '8', '8', '1']
    },
    calcium: {
        name: 'Calcium',
        symbol: 'Ca',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '40.078',
        energyLevels: ['2', '8', '8', '2']
    },
    scandium: {
        name: 'Scandium',
        symbol: 'Sc',
        state: 'solid',
        group: 'transition metal',
        weight: '44.956',
        energyLevels: ['2', '8', '9', '2']
    },
    titanium: {
        name: 'Titanium',
        symbol: 'Ti',
        state: 'solid',
        group: 'transition metal',
        weight: '47.867',
        energyLevels: ['2', '8', '10', '2']
    },
    vanadium: {
        name: 'Vanadium',
        symbol: 'V',
        state: 'solid',
        group: 'transition metal',
        weight: '50.942',
        energyLevels: ['2', '8', '11', '2']
    },
    chromium: {
        name: 'Chromium',
        symbol: 'Cr',
        state: 'solid',
        group: 'transition metal',
        weight: '51.996',
        energyLevels: ['2', '8', '13', '1']
    },
    manganese: {
        name: 'Manganese',
        symbol: 'Mn',
        state: 'solid',
        group: 'transition metal',
        weight: '54.938',
        energyLevels: ['2', '8', '13', '2']
    },
    iron: {
        name: 'Iron',
        symbol: 'Fe',
        state: 'solid',
        group: 'transition metal',
        weight: '55.845',
        energyLevels: ['2', '8', '14', '2']
    },
    cobalt: {
        name: 'Cobalt',
        symbol: 'Co',
        state: 'solid',
        group: 'transition metal',
        weight: '58.933',
        energyLevels: ['2', '8', '15', '2']
    },
    nickel: {
        name: 'Nickel',
        symbol: 'Ni',
        state: 'solid',
        group: 'transition metal',
        weight: '58.693',
        energyLevels: ['2', '8', '16', '2']
    },
    copper: {
        name: 'Copper',
        symbol: 'Cu',
        state: 'solid',
        group: 'transition metal',
        weight: '63.546',
        energyLevels: ['2', '8', '18', '1']
    },
    zinc: {
        name: 'Zinc',
        symbol: 'Zn',
        state: 'solid',
        group: 'transition metal',
        weight: '65.38',
        energyLevels: ['2', '8', '18', '2']
    },
    gallium: {
        name: 'Gallium',
        symbol: 'Ga',
        state: 'solid',
        group: 'post-transition metal',
        weight: '69.723',
        energyLevels: ['2', '8', '18', '3']
    },
    germanium: {
        name: 'Germanium',
        symbol: 'Ge',
        state: 'solid',
        group: 'metalloid',
        weight: '72.630',
        energyLevels: ['2', '8', '18', '4']
    },
    arsenic: {
        name: 'Arsenic',
        symbol: 'As',
        state: 'solid',
        group: 'metalloid',
        weight: '74.922',
        energyLevels: ['2', '8', '18', '5']
    },
    selenium: {
        name: 'Selenium',
        symbol: 'Se',
        state: 'solid',
        group: 'reactive nonmetal',
        weight: '78.971',
        energyLevels: ['2', '8', '18', '6']
    },
    bromine: {
        name: 'Bromine',
        symbol: 'Br',
        state: 'liquid',
        group: 'reactive nonmetal',
        weight: '79.904',
        energyLevels: ['2', '8', '18', '7']
    },
    krypton: {
        name: 'Krypton',
        symbol: 'Kr',
        state: 'gas',
        group: 'noble gas',
        weight: '83.798',
        energyLevels: ['2', '8', '18', '8']
    },
    rubidium: {
        name: 'Rubidium',
        symbol: 'Rb',
        state: 'solid',
        group: 'alkali metal',
        weight: '85.468',
        energyLevels: ['2', '8', '18', '8', '1']
    },
    strontium: {
        name: 'Strontium',
        symbol: 'Sr',
        state: 'solid', 
        group: 'alkaline earth metal',
        weight: '87.62',
        energyLevels: ['2', '8', '18', '8', '2']
    },
    yttrium: {
        name: 'Yttrium',
        symbol: 'Y',
        state: 'solid',
        group: 'transition metal',
        weight: '88.906',
        energyLevels: ['2', '8', '18', '9', '2']
    },
    zirconium: {
        name: 'Zirconium',
        symbol: 'Zr',
        state: 'solid',
        group: 'transition metal',
        weight: '91.224',
        energyLevels: ['2', '8', '18', '10', '2']
    },
    niobium: {
        name: 'Niobium',
        symbol: 'Nb',
        state: 'solid',
        group: 'transition metal',
        weight: '92.906',
        energyLevels: ['2', '8', '18', '12', '1']
    },
    molybdenum: {
        name: 'Molybdenum',
        symbol: 'Mo',
        state: 'solid',
        group: 'transition metal',
        weight: '95.95',
        energyLevels: ['2', '8', '18', '13', '1']
    },
    technetium: {
        name: 'Technetium',
        symbol: 'Tc',
        state: 'solid',
        group: 'transition metal',
        weight: '98',
        energyLevels: ['2', '8', '18', '13', '2']
    },
    ruthenium: {
        name: 'Ruthenium',
        symbol: 'Ru',
        state: 'solid', 
        group: 'transition metal',
        weight: '101.07',
        energyLevels: ['2', '8', '18', '15', '1']
    },
    rhodium: {
        name: 'Rhodium',
        symbol: 'Rh',
        state: 'solid',
        group: 'transition metal',
        weight: '102.91',
        energyLevels: ['2', '8', '18', '16', '1']
    },
    palladium: {
        name: 'Palladium',
        symbol: 'Pd',
        state: 'solid',
        group: 'transition metal',
        weight: '106.42',
        energyLevels: ['2', '8', '18', '18']
    },
    silver: {
        name: 'Silver',
        symbol: 'Ag',
        state: 'solid',
        group: 'transition metal',
        weight: '107.87',
        energyLevels: ['2', '8', '18', '18', '1']
    },
    cadmium: {
        name: 'Cadmium',
        symbol: 'Cd',
        state: 'solid',
        group: 'transition metal',
        weight: '112.41',
        energyLevels: ['2', '8', '18', '18', '2']
    },
    indium: {
        name: 'Indium',
        symbol: 'In',
        state: 'solid',
        group: 'post-transition metal',
        weight: '114.82',
        energyLevels: ['2', '8', '18', '18', '3']
    },
    tin: {
        name: 'Tin',
        symbol: 'Sn',
        state: 'solid',
        group: 'post-transition metal',
        weight: '118.71',
        energyLevels: ['2', '8', '18', '18', '4']
    },
    antimony: {
        name: 'Antimony',
        symbol: 'Sb',
        state: 'solid',
        group: 'metalloid',
        weight: '121.76',
        energyLevels: ['2', '8', '18', '18', '5']
    },
    tellurium: {
        name: 'Tellurium',
        symbol: 'Te',
        state: 'solid',
        group: 'metalloid',
        weight: '127.60',
        energyLevels: ['2', '8', '18', '18', '6']
    },
    iodine: {
        name: 'Iodine',
        symbol: 'Br',
        state: 'liquid', 
        group: 'reactive nonmetal',
        weight: '79.904',
        energyLevels: ['2', '8', '18', '18', '7']
    },
    xenon: {
        name: 'Xenon',
        symbol: 'Xe',
        state: 'gas',
        group: 'noble gas',
        weight: '131.29',
        energyLevels: ['2', '8', '18', '18', '8']
    },
    caesium: {
        name: 'Caesium',
        symbol: 'Cs',
        state: 'solid',
        group: 'alkali metal',
        weight: '132.91',
        energyLevels: ['2', '8', '18', '18', '8', '1']
    },
    barium: {
        name: 'Barium',
        symbol: 'Ba',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '137.33',
        energyLevels: ['2', '8', '18', '18', '8', '2']
    },
    lanthanum: {
        name: 'Lanthanum',
        symbol: 'La',
        state: 'solid',
        group: 'lanthanide',
        weight: '138.91',
        energyLevels: ['2', '8', '18', '18', '9', '2']
    },
    cerium: {
        name: 'Cerium',
        symbol: 'Ce',
        state: 'solid',
        group: 'lanthanide',
        weight: '140.12',
        energyLevels: ['2', '8', '18', '19', '9', '2']
    },
    praseodymium: {
        name: 'Praseodymium',
        symbol: 'Pr',
        state: 'solid',
        group: 'lanthanide',
        weight: '140.91',
        energyLevels: ['2', '8', '18', '21', '8', '2']
    },
    neodymium: {
        name: 'Neodymium',
        symbol: 'Nd',
        state: 'solid',
        group: 'lanthanide',
        weight: '144.24',
        energyLevels: ['2', '8', '18', '22', '8', '2']
    },
    promethium: {
        name: 'Promethium',
        symbol: 'Pm',
        state: 'solid',
        group: 'lanthanide',
        weight: '145',
        energyLevels: ['2', '8', '18', '23', '8', '2']
    },
    samarium: {
        name: 'Samarium',
        symbol: 'Sm',
        state: 'solid',
        group: 'lanthanide',
        weight: '150.36',
        energyLevels: ['2', '8', '18', '24', '8', '2']
    },
    europium: {
        name: 'Europium',
        symbol: 'Eu',
        state: 'solid',
        group: 'lanthanide',
        weight: '151.96',
        energyLevels: ['2', '8', '18', '25', '8', '2']
    },
    gadolinium: {
        name: 'Gadolinium',
        symbol: 'Gd',
        state: 'solid',
        group: 'lanthanide',
        weight: '157.25',
        energyLevels: ['2', '8', '18', '25', '9' ,'2']
    },
    terbium: {
        name: 'Terbium',
        symbol: 'Tb',
        state: 'solid',
        group: 'lanthanide',
        weight: '158.93',
        energyLevels: ['2', '8', '18', '27', '8', '2']
    },
    dysprosium: {
        name: 'Dysprosium',
        symbol: 'Dy',
        state: 'solid',
        group: 'lanthanide',
        weight: '162.50',
        energyLevels: ['2', '8', '18', '28', '8', '2']
    },
    holmium: {
        name: 'Holmium',
        symbol: 'Ho',
        state: 'solid',
        group: 'lanthanide',
        weight: '164.93',
        energyLevels: ['2', '8', '18', '29', '2']
    },
    erbium: {
        name: 'Erbium',
        symbol: 'Er',
        state: 'solid',
        group: 'lanthanide',
        weight: '167.26',
        energyLevels: ['2', '8', '18', '30', '8', '2']
    },
    thulium: {
        name: 'Thulium',
        symbol: 'Tm',
        state: 'solid',
        group: 'lanthanide',
        weight: '168.93',
        energyLevels: ['2', '8', '18', '31', '8', '2']
    },
    ytterbium: {
        name: 'Ytterbium',
        symbol: 'Yb',
        state: 'solid',
        group: 'lanthanide',
        weight: '173.05',
        energyLevels: ['2', '8', '18', '32', '8', '2']
    },
    lutetium: {
        name: 'Lutetium',
        symbol: 'Lu',
        state: 'solid',
        group: 'lanthanide',
        weight: '174.97',
        energyLevels: ['2', '8', '18', '32', '9', '2']
    },
    hafnium: {
        name: 'Hafnium',
        symbol: 'Hf',
        state: 'solid',
        group: 'transition metal',
        weight: '178.49',
        energyLevels: ['2', '8', '18', '32', '10', '2']
    },
    tantalum: {
        name: 'Tantalum',
        symbol: 'Ta',
        state: 'solid',
        group: 'transition metal',
        weight: '180.95',
        energyLevels: ['2', '8', '18', '32', '11', '2']
    },
    tungsten: {
        name: 'Tungsten',
        symbol: 'W',
        state: 'solid',
        group: 'transition metal',
        weight: '183.84',
        energyLevels: ['2', '8', '18', '32', '12', '2']
    },
    rhenium: {
        name: 'Rhenium',
        symbol: 'Re',
        state: 'solid',
        group: 'transition metal',
        weight: '186.21',
        energyLevels: ['2', '8', '18', '32', '13', '2']
    },
    osmium: {
        name: 'Osmium',
        symbol: 'Os',
        state: 'solid',
        group: 'transition metal',
        weight: '190.23',
        energyLevels: ['2', '8', '18', '32', '14', '2']
    },
    iridium: {
        name: 'Iridium',
        symbol: 'Ir',
        state: 'solid',
        group: 'transition metal',
        weight: '192.22',
        energyLevels: ['2', '8', '18', '32', '15', '2']
    },
    platinum: {
        name: 'Platinum',
        symbol: 'Pt',
        state: 'solid',
        group: 'transition metal',
        weight: '195.08',
        energyLevels: ['2', '8', '18', '32', '17', '1']
    },
    gold: {
        name: 'Gold',
        symbol: 'Au',
        state: 'solid',
        group: 'transition metal',
        weight: '196.97',
        energyLevels: ['2', '8', '18', '32', '18', '1']
    },
    mercury: {
        name: 'Mercury',
        symbol: 'Hg',
        state: 'liquid',
        group: 'transition metal',
        weight: '200.59',
        energyLevels: ['2', '8', '18', '32', '18', '2']
    },
    thallium: {
        name: 'Thallium',
        symbol: 'Tl',
        state: 'solid',
        group: 'post-transition metal',
        weight: '204.38',
        energyLevels: ['2', '8', '18', '32', '18', '3']
    },
    lead: {
        name: 'Lead',
        symbol: 'Pb',
        state: 'solid',
        group: 'post-transition metal',
        weight: '207.2',
        energyLevels: ['2', '8', '18', '32', '18', '4']
    },
    bismuth: {
        name: 'Bismuth',
        symbol: 'Bi',
        state: 'solid',
        group: 'post-transition metal',
        weight: '208.98',
        energyLevels: ['2', '8', '18', '32', '18', '5']
    },
    polonium: {
        name: 'Polonium',
        symbol: 'Po',
        state: 'solid',
        group: 'post-transition metal',
        weight: '209',
        energyLevels: ['2', '8', '18', '32', '18', '6']
    },
    astatine: {
        name: 'Astatine',
        symbol: 'At',
        state: 'solid',
        group: 'post-transition metal',
        weight: '210',
        energyLevels: ['2', '8', '18', '32', '18', '7']
    },
    radon: {
        name: 'Radon',
        symbol: 'Rn',
        state: 'gas',
        group: 'noble gas',
        weight: '222',
        energyLevels: ['2', '8', '18', '32', '18', '8']
    },
    francium: {
        name: 'Francium',
        symbol: 'Fr',
        state: 'solid',
        group: 'alkali metal',
        weight: '223',
        energyLevels: ['2', '8', '18', '32', '18', '8', '1']
    },
    radium: {
        name: 'Radium',
        symbol: 'Ra',
        state: 'solid',
        group: 'alkaline earth metal',
        weight: '226',
        energyLevels: ['2', '8', '18', '32', '18', '8', '2']
    },
    actinium: {
        name: 'Actinium',
        symbol: 'Ac',
        state: 'solid',
        group: 'actinide',
        weight: '227',
        energyLevels: ['2', '8', '18', '32', '18', '9', '2']
    },
    thorium: {
        name: 'Thorium',
        symbol: 'Th',
        state: 'solid',
        group: 'actinide',
        weight: '232.0377',
        energyLevels: ['2', '8', '18', '32', '18', '10', '2']
    },
    protactinium: {
        name: 'Protactinium',
        symbol: 'Pa',
        state: 'solid',
        group: 'actinide',
        weight: '231.03588',
        energyLevels: ['2', '8', '18', '32', '20', '9', '2']
    },
    uranium: {
        name: 'Uranium',
        symbol: 'U',
        state: 'solid',
        group: 'actinide',
        weight: '238.02891',
        energyLevels: ['2', '8', '18', '32', '21', '9', '2']
    },
    neptunium: {
        name: 'Neptunium',
        symbol: 'Np',
        state: 'solid',
        group: 'actinide',
        weight: '237',
        energyLevels: ['2', '8', '18', '32', '22', '9', '2']
    },
    plutonium: {
        name: 'Plutonium',
        symbol: 'Pu',
        state: 'solid',
        group: 'actinide',
        weight: '244',
        energyLevels: ['2', '8', '18', '32', '24', '8', '2']
    },
    americium: {
        name: 'Americium',
        symbol: 'Am',
        state: 'solid',
        group: 'actinide',
        weight: '243',
        energyLevels: ['2', '8', '18', '32', '25', '8', '2']
    },
    curium: {
        name: 'Curium',
        symbol: 'Cm',
        state: 'solid',
        group: 'actinide',
        weight: '247',
        energyLevels: ['2', '8', '18', '32', '25', '9', '2']
    },
    berkelium: {
        name: 'Berkelium',
        symbol: 'Bk',
        state: 'solid',
        group: 'actinide',
        weight: '247',
        energyLevels: ['2', '8', '18', '32', '27', '8', '2']
    },
    californium: {
        name: 'Californium',
        symbol: 'Cf',
        state: 'solid',
        group: 'actinide',
        weight: '251',
        energyLevels: ['2', '8', '18', '32', '28', '8', '2']
    },
    einsteinium: {
        name: 'Einsteinium',
        symbol: 'Es',
        state: 'solid',
        group: 'actinide',
        weight: '252',
        energyLevels: ['2', '8', '18', '32', '29', '8', '2']
    },
    fermium: {
        name: 'Fermium',
        symbol: 'Fm',
        state: 'solid',
        group: 'actinide',
        weight: '257',
        energyLevels: ['2', '8', '18', '32', '30', '8', '2']
    },
    mendelevium: {
        name: 'Mendelevium',
        symbol: 'Md',
        state: 'solid',
        group: 'actinide',
        weight: '258', 
        energyLevels: ['2', '8', '18', '32', '31', '8', '2']
    },
    nobelium: {
        name: 'Nobelium',
        symbol: 'No',
        state: 'solid',
        group: 'actinide',
        weight: '259',
        energyLevels: ['2', '8', '18', '32', '32', '8', '2']
    },
    lawrencium: {
        name: 'Lawrencium',
        symbol: 'Lr',
        state: 'solid',
        group: 'actinide',
        weight: '266',
        energyLevels: ['2', '8', '18', '32', '32', '8', '3']
    },
    rutherfordium: {
        name: 'Rutherfordium',
        symbol: 'Rf',
        state: 'unknown',
        group: 'transition metal',
        weight: '267',
        energyLevels: ['2', '8', '18', '32', '32', '10', '2']
    },
    dubnium: {
        name: 'Dubnium',
        symbol: 'Db',
        state: 'unknown',
        group: 'transition metal',
        weight: '268',
        energyLevels: ['2', '8', '18', '32', '32', '11', '2']
    },
    seaborgium: {
        name: 'Seaborgium',
        symbol: 'Sg',
        state: 'unknown',
        group: 'transition metal',
        weight: '269',
        energyLevels: ['2', '8', '18', '32', '32', '12', '2']
    },
    bohrium: {
        name: 'Bohrium',
        symbol: 'Bh',
        state: 'unknown',
        group: 'transition metal',
        weight: '270',
        energyLevels: ['2', '8', '18', '32', '32', '13', '2']
    },
    hassium: {
        name: 'Hassium',
        symbol: 'Hs',
        state: 'unknown',
        group: 'transition metal',
        weight: '270',
        energyLevels: ['2', '8', '18', '32', '32', '14', '2']
    },
    meitnerium: {
        name: 'Meitnerium',
        symbol: 'Mt',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '278',
        energyLevels: ['2', '8', '18', '32', '32', '15', '2']
    },
    darmstadtium: {
        name: 'Darmstadtium',
        symbol: 'Ds',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '281', 
        energyLevels: ['2', '8', '18', '32', '32', '17', '1']
    },
    roentgenium: {
        name: 'Roentgenium',
        symbol: 'Rg',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '282',
        energyLevels: ['2', '8', '18', '32', '32', '17', '2']
    },
    copernicium: {
        name: 'Copernicium',
        symbol: 'Cn',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '285',
        energyLevels: ['2', '8', '18', '32', '32', '18', '2']
    },
    nihonium: {
        name: 'Nihonium',
        symbol: 'Nh',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '286',
        energyLevels: ['2', '8', '18', '32', '32', '18', '3']
    },
    flerovium: {
        name: 'Flerovium',
        symbol: 'Fl',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '289',
        energyLevels: ['2', '8', '18', '32', '32', '18', '4']
    },
    moscovium: {
        name: 'Moscovium',
        symbol: 'Mc',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '290',
        energyLevels: ['2', '8', '18', '32', '32', '18', '5']
    },
    livermorium: {
        name: 'Livermorium',
        symbol: 'Lv',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '293',
        energyLevels: ['2', '8', '18', '32', '32', '18', '8']
    },
    tennessine: {
        name: 'Tennessine',
        symbol: 'Ts',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '294',
        energyLevels: ['2', '8', '18', '32', '32', '18', '7']
    },
    oganesson: {
        name: 'Oganesson',
        symbol: 'Og',
        state: 'unknown',
        group: 'unknown chemical properties',
        weight: '294',
        energyLevels: ['2', '8', '18', '32', '32', '18', '8']
    }
}

export default elements;
// https://fr.wikimini.org/wiki/Liste_des_pr%C3%A9noms_en_anglais
console.clear()

const number = 9

const username = {
    first: {
        a: ['Aalis',
        'Abel',
        'Adam',
        'Adelaide',
        'Adele',
        'Adelie',
        'Adeline',
        'Adrien',
        'Adrienne',
        'Agatha',
        'Agathe',
        'Aglae',
        'Agnes',
        'Aime',
        'Aimee',
        'Aimrick',
        'Alain',
        'Alena',
        'Alana',
        'Alban',
        'Albane',
        'Albert',
        'Albertine',
        'Albin',
        'Albine',
        'Alexandre',
        'Alexandra',
        'Alexandrine',
        'Alexanne',
        'Alexia',
        'Alexiane',
        'Alexios',
        'Alexis',
        'Alice',
        'Alicia',
        'Alienor',
        'Aline',
        'Alix',
        'Alyssa',
        'Alyzee',
        'Amandine',
        'Ambre',
        'Ambrine',
        'Ambroise',
        'Amaury',
        'Amaranth',
        'Amelie',
        'Anais',
        'Anastasia',
        'Anastasie',
        'Anatoline',
        'Andre',
        'Andree',
        'Andrenie',
        'Andrine',
        'Ange',
        'Angele',
        'Angeline',
        'Angelique',
        'Anne',
        'Anna',
        'Annick',
        'Anselme',
        'Antoine',
        'Antoinette',
        'Apollinaire',
        'Apolline',
        'Arianna',
        'Ariane',
        'Archambault',
        'Arielle',
        'Arlette',
        'Armand',
        'Arnaud',
        'Arsene',
        'Arthur',
        'Astrid',
        'Aubane',
        'Aubin',
        'Aude',
        'Audrey',
        'Auguste',
        'Augustin',
        'Augustine',
        'Aurelia',
        'Aurelianne',
        'Aurelie',
        'Aurelys',
        'Aurelien',
        'Auriane',
        'Aurore',
        'Axel',
        'Axelle',
        'Aymeric',
        'Avril'],
        b: ['Balian',
        'Balthazar',
        'Baptiste',
        'Barbara',
        'Barthelemy',
        'Basile',
        'Bastian',
        'Bastien',
        'Baudouin',
        'Beatrice',
        'Beatrix',
        'Berenice',
        'Beatriz',
        'Benedicte',
        'Benjamin',
        'Ben',
        'Benoît',
        'Beranger',
        'Berenger',
        'Berangere',
        'Berengere',
        'Bernard',
        'Bernadette',
        'Bertrand',
        'Blaise',
        'Blanche',
        'Blandine',
        'Boniface',
        'Brigitte',
        'Brunehaut',
        'Bruno',
        'Brunette'],
        c: ['Camille',
        'Caribert',
        'Caroline',
        'Cassandra',
        'Cassandre',
        'Cassian',
        'Cassie',
        'Casimir',
        'Cassius',
        'Cathaline',
        'Catherine',
        'Cecile',
        'Cedric',
        'Celestin',
        'Celestine',
        'Celine',
        'Cesar',
        'Charlene',
        'Charles',
        'Charline',
        'Charlotte',
        'Chloe',
        'Chretien',
        'Christian',
        'Christiane',
        'Christophe',
        'Clara',
        'Claude',
        'Clemence',
        'Clement',
        'Clementin',
        'Clementine',
        'Clotaire',
        'Clotilde',
        'Clovis',
        'Colas',
        'Coleen',
        'Colin',
        'Coline',
        'Come',
        'Constance',
        'Constant',
        'Constantin',
        'Constantine',
        'Coralie',
        'Coraline',
        'Coralyne',
        'Coralien',
        'Corrine',
        'Corentin',
        'Corentine',
        'Cyril',
        'Cyrille',
        'Cyprile'],
        d: ['Daniel',
        'Daniella',
        'Daniela',
        'Danielle',
        'Daniele',
        'Daphnee',
        'David',
        'Delphine',
        'Denis',
        'Denise',
        'Diana',
        'Diane',
        'Didier',
        'Dimitri',
        'Dominique',
        'Domitille',
        'Dorian',
        'Doriane',
        'Dorothee'],
        e: ['Edouard',
        'Edgar',
        'Eginhard',
        'Eleonore',
        'Eline',
        'Eliane',
        'Elisabeth',
        'Elodie',
        'Eloi',
        'Eloise',
        'Elouan',
        'Emeric',
        'Emile',
        'Emilie',
        'Emy',
        'Emie',
        'Emi',
        'Emilien',
        'Emma',
        'Emmanuel',
        'Emmanuelle',
        'Emmeline',
        'Enguerrand',
        'Eric',
        'Ernest',
        'Ernestine',
        'Esther',
        'Estelle',
        'Etienne',
        'Eudes',
        'Eugene',
        'Eulalie',
        'Eusebe',
        'Esteban',
        'Eva',
        'Eve'],
        f: ['Fabien',
        'Fabrice',
        'Fanny',
        'Fantine',
        'Faustine',
        'Felicie',
        'Felicia',
        'Felix',
        'Firmin',
        'Flore',
        'Florence',
        'Florent',
        'Florentin',
        'Florentine',
        'Florentina',
        'Florian',
        'Florie',
        'Foulques',
        'France',
        'Francis',
        'Francine',
        'François',
        'Françoise',
        'Frank',
        'Frederic',
        'Fulbert'],
        g: ['Gabriel',
        'Gabrielle',
        'Gael',
        'Gaelle',
        'Gaston',
        'Gaspard',
        'Gatien',
        'Gautier',
        'Genevieve',
        'Geoffroy',
        'Georges',
        'Georgette',
        'Gerard',
        'Germain',
        'Germaine',
        'Gertrude',
        'Ghislain',
        'Gwladys',
        'Gladys',
        'Gondebaud',
        'Gonthier',
        'Gontran',
        'Gonzague',
        'Gregoire',
        'Guenievre',
        'Gui',
        'Guilhem',
        'Guillaume',
        'Guy',
        'Gwenael',
        'Gwendolina',
        'Gwendoline',
        'Gilbert'],
        h: ['Harmonie',
        'Hector',
        'Helene',
        'Helena',
        'Henri',
        'Hermione',
        'Hippolyte',
        'Hortense',
        'Hubert',
        'Hugo',
        'Hugues',
        'Huguette'],
        i: ['Ian',
        'Ines',
        'Irina',
        'Iris',
        'Isabeau',
        'Isabelle',
        'Ismene',
        'Iseult',
        'Isidore',
        'Isaure',
        'Isor',
        'Isaur',
        'Isore'],
        j: ['Jacques',
        'Jean',
        'Jeanine',
        'Jeanne',
        'Jeremie',
        'Jerome',
        'Joachim',
        'Jocelyn',
        'Joseph',
        'Josephine',
        'Josse',
        'Jude',
        'Judicael',
        'Judith',
        'Justine',
        'Justin',
        'Jules',
        'Julian',
        'Julie',
        'Julien',
        'Jade',
        'Jada',
        'Juliette'],
        k: ['Kim',
        'Kevin',
        'Killian',
        'Kilian'],
        l: ['Laetitia',
        'Laura',
        'Lauranna',
        'Lausanne',
        'Laure',
        'Laurie',
        'Laurine',
        'Laurina',
        'Laureline',
        'Laurence',
        'Laurene',
        'Lorene',
        'Lauren',
        'Laurent',
        'Lea',
        'Leane',
        'Lili',
        'Lela',
        'Lola',
        'Lila',
        'Lana',
        'Lena',
        'Liny',
        'Lini',
        'Leila',
        'Leo',
        'Leon',
        'Linne',
        'Line',
        'Lynn',
        'Lyne',
        'Lise',
        'Lison',
        'Louison',
        'Loic',
        'Lorraine',
        'Lothaire',
        'Louis',
        'Louise',
        'Lucas',
        'Lucie',
        'Lucille',
        'Lucile',
        'Ludivine',
        'Ludovic',
        'Lydie',
        'Lydia',
        'Liv',
        'Luna',
        'Loona'],
        m: ['Madeleine',
        'Magali',
        'Mahault',
        'Mahaut',
        'Malo',
        'Marc',
        'Marcel',
        'Margot',
        'Margaux',
        'Marguerite',
        'Marie',
        'Maria',
        'Marianne',
        'Marine',
        'Marina',
        'Marion',
        'Marius',
        'Marcus',
        'Martin',
        'Martine',
        'Mathilde',
        'Mathurin',
        'Matthias',
        'Mathias',
        'Matthieu',
        'Mathieu',
        'Maud',
        'Maurice',
        'Max',
        'Maxence',
        'Maxime',
        'Maximilien',
        'Mayeul',
        'Mallis',
        'Maya',
        'Mederic',
        'Melanie',
        'Melina',
        'Meline',
        'Melena',
        'Melissandre',
        'Melodie',
        'Michel',
        'Mireille',
        'Miriam',
        'Morgane',
        'mona',
        'Mylene',
        'Marguerite'],
        n: ['Nadege',
        'Nael',
        'Nina',
        'Nila',
        'Nilo',
        'Nathalie',
        'Natacha',
        'Nathan',
        'Nestor',
        'Nicolas',
        'Nicole',
        'Noel',
        'Noemie',
        'Nolwen',
        'Norbert'],
        o: ['Octave',
        'Odilon',
        'Oger',
        'Olivier',
        'Olympe',
        'Ophelie',
        'Othon'],
        p: ['Pamela',
        'Pascal',
        'Pascale',
        'Patrice',
        'Patricia',
        'Patrick',
        'Paul',
        'Paule',
        'Paulette',
        'Pauline',
        'Pelagie',
        'Penelope',
        'Perceval',
        'Petronille',
        'Philemon',
        'Philibert',
        'Philippe',
        'Philomene',
        'Philothee',
        'Pierre',
        'Pollyanna',
        'Pulcherie'],
        q: ['Quentin',
        'Quitterie'],
        r: ['Raoul',
        'Raphael',
        'Raymond',
        'Regis',
        'Remy',
        'Remi',
        'Renaud',
        'Rene',
        'Renee',
        'Reynald',
        'Richard',
        'Robert',
        'Roch',
        'Rodolphe',
        'Roger',
        'Romain',
        'Romaine',
        'Romarin',
        'Romarin',
        'Romane',
        'Romeo',
        'Rose'],
        s: ['Sabine',
        'Salomon',
        'Salome',
        'Samuel',
        'Sandra',
        'Sandrine',
        'Sara',
        'Sarah',
        'Sebastien',
        'Segolene',
        'Septime',
        'Serge',
        'Severin',
        'Sigismond',
        'Siloe',
        'Simeon',
        'Simon',
        'Simone',
        'Solange',
        'Sonia',
        'Sophia',
        'Saphia',
        'Sophie',
        'Stanislas',
        'Stephane',
        'Stephanie',
        'Suzanne',
        'Suzette',
        'Sylvain',
        'Sylvaine',
        'Sylvestre',
        'Sylviane',
        'Sylvie',
        'Sylvia'],
        t: ['Tanguy',
        'Thalia',
        'Thais',
        'Tiana',
        'Tia',
        'Thea',
        'Theo',
        'Theodore',
        'Theophane',
        'Theophile',
        'Thibault',
        'Thieffrey',
        'Thierry',
        'Thomas',
        'Tilla',
        'Timothee',
        'Tiphaine',
        'Tom',
        'Tristan'],
        u: ['Ulysse',
        'Uranie',
        'Urbain'],
        v: ['Valentin',
        'Valerie',
        'Valery',
        'Vanessa',
        'Veronique',
        'Victoire',
        'Victor',
        'Victoria',
        'Victorine',
        'Vincent',
        'Virginie',
        'Vincent',
        'Vivianne'],
        w: ['Wilfrid',
        'Wilfried'],
        x: ['Xavier'],
        y: ['Yanis',
        'Yoann',
        'Yolande',
        'Ysaline',
        'Yse',
        'Yseult',
        'Ysoline',
        'Yves',
        'Yvette',
        'Yann',
        'Yannick'],
        z: ['Zacharie',
        'Zoe']
    },
    last: ['Martin',
    'Bernard',
    'Thomas',
    'Petit',
    'Robert',
    'Richard',
    'Durand',
    'Dubois',
    'Moreau',
    'Laurent',
    'Simon',
    'Michel',
    'Lefebvre',
    'Leroy',
    'Roux',
    'David',
    'Bertrand',
    'Morel',
    'Fournier',
    'Girard',
    'Bonnet',
    'Dupont',
    'Lambert',
    'Fontaine',
    'Rousseau',
    'Vincent',
    'Muller',
    'Lefevre',
    'Faure',
    'Andre',
    'Mercier',
    'Blanc',
    'Guerin',
    'Boyer',
    'Garnier',
    'Chevalier',
    'Francois',
    'Legrand',
    'Gauthier',
    'Garcia',
    'Perrin',
    'Robin',
    'Clement',
    'Morin',
    'Nicolas',
    'Henry',
    'Roussel',
    'Mathieu',
    'Gautier',
    'Masson',
    'Marchand',
    'Duval',
    'Denis',
    'Dumont',
    'Marie',
    'Lemaire',
    'Noel',
    'Meyer',
    'Dufour',
    'Meunier',
    'Brun',
    'Blanchard',
    'Giraud',
    'Joly',
    'Riviere',
    'Lucas',
    'Brunet',
    'Gaillard',
    'Barbier',
    'Arnaud',
    'Martinez',
    'Gerard',
    'Roche',
    'Renard',
    'Schmitt',
    'Roy',
    'Leroux',
    'Colin',
    'Vidal',
    'Caron',
    'Picard',
    'Roger',
    'Fabre',
    'Aubert',
    'Lemoine',
    'Renaud',
    'Dumas',
    'Lacroix',
    'Olivier',
    'Philippe',
    'Bourgeois',
    'Pierre',
    'Benoit',
    'Rey',
    'Leclerc',
    'Payet',
    'Rolland',
    'Guillaume',
    'Lecomte',
    'Lopez',
    'Jean',
    'Dupuy',
    'Guillot',
    'Hubert',
    'Berger',
    'Carpentier',
    'Sanchez',
    'Dupuis',
    'Moulin',
    'Louis',
    'Deschamps',
    'Huet',
    'Vasseur',
    'Perez',
    'Boucher',
    'Fleury',
    'Royer',
    'Klein',
    'Jacquet',
    'Adam',
    'Paris',
    'Poirier',
    'Marty',
    'Aubry',
    'Guyot',
    'Carre',
    'Charles',
    'Renault',
    'Charpentier',
    'Menard',
    'Maillard',
    'Baron',
    'Bertin',
    'Bailly',
    'Herve',
    'Schneider',
    'Fernandez',
    'LeGall',
    'Collet',
    'Leger',
    'Bouvier',
    'Julien',
    'Prevost',
    'Millet',
    'Perrot',
    'Daniel',
    'LeRoux',
    'Cousin',
    'Germain',
    'Breton',
    'Besson',
    'Langlois',
    'Remy',
    'LeGoff',
    'Pelletier',
    'Leveque',
    'Perrier',
    'Leblanc',
    'Barre',
    'Lebrun',
    'Marchal',
    'Weber',
    'Mallet',
    'Hamon',
    'Boulanger',
    'Jacob',
    'Monnier',
    'Michaud',
    'Rodriguez',
    'Guichard',
    'Gillet',
    'Etienne',
    'Grondin',
    'Poulain',
    'Tessier',
    'Chevallier',
    'Collin',
    'Chauvin',
    'DaSilva',
    'Bouchet',
    'Gay',
    'Lemaitre',
    'Benard',
    'Marechal',
    'Humbert',
    'Reynaud',
    'Antoine',
    'Hoarau',
    'Perret',
    'Barthelemy',
    'Cordier',
    'Pichon',
    'Lejeune',
    'Gilbert',
    'Lamy',
    'Delaunay',
    'Pasquier',
    'Carlier',
    'Laporte']
}

function rdmInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function rdmAlpha() {
    let l = 'qwertyuiopasdfghjklzxcvbnm'
    let i = rdmInt(0, l.length-1)
    return l.substring(i,i+1)
}

function pseudo() {

    // First
    let letter = rdmAlpha()
    let rdm = rdmInt(0, username.first[letter].length-1)
    let firstname = username.first[letter][rdm]

    // Last
    rdm = rdmInt(0, username.last.length-1)
    let lastname = username.last[rdm]

    // Dep
    let dep = rdmInt(1,95); if(dep<10){dep=`0${dep}`}

    console.log(`| ${firstname} ${lastname} ${dep}`)
    console.log(`| ${firstname.toLowerCase()}${lastname.toLowerCase()}${dep}`)
    console.log('+--------------------------------')

}

function main() {
    console.log('+--------------------------------')
    for(let i=1; i<=number; i++) {
        pseudo()
    }
}; main()

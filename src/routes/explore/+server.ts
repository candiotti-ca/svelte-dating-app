import type { ProfileParams } from "../../models/Profile";

const profileB: ProfileParams = {
    id: '2',
    firstname: 'Joe',
    lastname: 'Doe',
    abstract: "Ma partenaire a été perdue dans une piscine à boules. Cela a été un terrible évènement pour moi, une disparition brutale! Peut-être qu'une bonne paire en laine me donnera du réconfort...",
    city: 'Tiroir de droite',
    size: 38,
    colors: [{ name: 'Blue', code: '#8CBEB2' }, { name: 'White', code: '#F2EBBF' }],
    age: 0,
    pattern: 'Striped',
    favoriteProfiles: []
};

const profileC: ProfileParams = {
    id: '3',
    firstname: 'Doe',
    lastname: 'Doe',
    abstract: "J'ai perdu ma paire lors de mon passage dans la machine a laver. Je recherche celle qui m'accompagnera toute la vie",
    city: 'Tiroir de gauche',
    size: 38,
    colors: [{ name: 'Gray', code: '#5C4B51' }, { name: 'Red', code: '#F06060' }],
    age: 1,
    pattern: 'Polka-Dot',
    favoriteProfiles: []
};

export function GET() {
    return new Response(JSON.stringify([profileB, profileC]), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
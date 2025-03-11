import { type ProfileParams } from "../../models/Profile";

const profileA: ProfileParams = {
    id: '1',
    lastname: 'John',
    firstname: 'Doe',
    abstract: "Je déteste les salles de bains, on finit toujours mouillé !",
    city: 'Tiroir de gauche',
    size: 37,
    colors: [{ name: 'Red', code: '#F06060' }, { name: 'Yellow', code: '#F3B562' }],
    age: 3,
    pattern: 'Striped',
    favoriteProfiles: []
};

export function GET() {
    return new Response(JSON.stringify(profileA), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

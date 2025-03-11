import { json } from "@sveltejs/kit";
import { type ProfileParams } from "../../models/Profile";

const profileA: ProfileParams = {
    id: '1',
    lastname: 'John',
    firstname: 'Doe',
    abstract: "Je déteste les salles de bains, on finit toujours mouillé !",
    city: 'Tiroir de gauche',
    size: 37,
    bandColor: 1,
    bodyColor: 2,
    age: 3,
    pattern: 'Striped',
    favoriteProfiles: []
};

export function GET() {
    return json(profileA);
}

export async function PATCH(params: any) {
    const body = await params.request.json();
    delete body.id;

    return json({ ...profileA, ...body });
}
import disneyKithImg from '../assets/img/DisneyKithImg.jpg';
import offwhitexnikeImg from '../assets/img/offwhitexnikeImg.jpg';
import supremeImg from '../assets/img/supremeImg.jpg';
import bapexpokemonImg from '../assets/img/bapexpokemonImg.jpg';

export const EVENTS = [
    {
        id: 0,
        name: 'Disney x Kith',
        image: disneyKithImg,
        capacity: 100,
        featured: false,
        description:
            'Disney x Kith'
    },
    {
        id: 1,
        name: 'Off-White x Nike ',
        image: offwhitexnikeImg,
        capacity: 89,
        featured: false,
        description:
            'Virgil x Nike'
    },
    {
        id: 2,
        name: 'Supreme',
        image: supremeImg,
        capacity: 101,
        featured: false,
        description:
            'Hypebeast Supreme box logos'
    },
    {
        id: 3,
        name: 'Bape x Pokemon',
        image: bapexpokemonImg,
        capacity: 42,
        featured: true,
        description:
            "Baby Milo x Pikachu"
    }
];

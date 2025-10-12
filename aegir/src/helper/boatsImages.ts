export type Boats = {
  name: string;
  price: number;
  description: string;
  images: string[];
  id: number;
}

export const boats: Boats[] = [
  {
    name: "Intruder 720",
    price: 29000,
    description:
`
Eslora: 7,2 metros
Manga: 2,45 metros
Altura interior: 1,8 metros 
Material: fibra de vidrio 

Ubicado en Paraná 

Motorización:
Volvo diésel 150hp
Transmisión:
Pata Volvo 

Equipamiento:
Ecosonda gráfica Garmin 
Cuenta revoluciones 
Indicadores de temperatura de motor
Trim hidráulico 
Equipo de música 
Hardtop
Convertidor de 220
Malacate eléctrico 
Churrasquera
Luces exteriores 
Luces de navegación 

Interior:
Baño compartimentado con desagüe eléctrico 
Heladera
Cocina
Lugares de guarda
Cama doble en proa 
Conejera en popa
Iluminación LED

Service al día 
Fondo Noviembre 2023
Pata totalmente repasada
`
,   
    images: [
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291370/IMG-20241031-WA0012_lzqufz.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291463/IMG_20241030_171336_427_exo5qh.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291452/IMG_20241030_171451_891_ueibpw.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291442/IMG_20241030_171641_444_zp9f8l.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291432/IMG_20241030_171735_277_k9d578.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291420/IMG_20241030_172110_446_unikoa.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291408/IMG_20241030_172217_348_axuljk.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291395/IMG-20241031-WA0008_idocvz.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291381/IMG-20241031-WA0011_ahoa0l.jpg",
    "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760291304/IMG-20241031-WA0013_gfffnz.jpg",
    ]
    ,
    id: 1,
  },
];


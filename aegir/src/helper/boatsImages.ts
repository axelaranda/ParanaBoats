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
`,   
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
    ],
    id: 1,
  },

  {
    name: "Nautiglass C25",
    price: 26000,
    description:
    `
Material: fibra de vidrio 
Eslora: 7,5 metros
Manga: 2,9 metros
Altura interior: 1,8 metros
Año: 1977

Ubicado en Paraná 

Motorización: Toyota diésel marino cadenero de 90 hp del año 2000 con 404 horas
Transmisión: pata Volvo 280

Equipamiento:
Aire acondicionado 
Heladera 
Anafes
Bacha
Baño compartimentado con inodoro eléctrico 
Dos baterías nuevas 
Sub buffers con estereo 
Televisión con conexión a internet 
Conversor 220
Ecosonda Garmin   
VHF 

Fondo 2021
Instalación eléctrica impecable 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330929/IMG_20241211_182343_859_oycjtg.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330941/IMG_20241211_182138_946_ycbn5g.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330950/IMG_20241211_182123_741_aqlrpj.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330958/IMG_20241115_183238_317_gyrtyr.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330969/IMG_20241115_183210_027_rozmm6.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760330978/IMG_20241115_183112_435_wgpcpn.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760331018/IMG_20241115_181618_807_kwqyn6.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760331032/IMG_20241115_181456_164_wv6p7k.jpg",
    ],
    id: 2,
  },

  {
    name: "Tarrab Atlántico",
    price: 65000,
    description:
    `
Ubicado en Paraná 

Generosa altura interior

Año: 1998
Material: fibra de vidrio 

Eslora: 11,1 metros 
Manga: 3,92 metros 

Interior:
Camarote doble en proa 
Cucheta dobles a estribor 
Baño compartimentado a babor 
Cocina con horno 
Bacha
Mesada 
Calefón 

Equipamiento:
Indicadores de parámetros del motor completos 
Comando en el interior 
Comando en fly
Grupo electrógeno de gran capacidad 
Inverter 
Aire acondicionado 
Calefacción 
Bow thruster 

Iluminación interior y de navegación 

Motorización: dos Volvo Penta diésel de 280 hp
Transmisión: pata Volvo
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332061/IMG_20250329_174212_893_2_kvbwnn.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332071/IMG_20250329_174026_088_2_xatpvg.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332081/IMG_20250329_173739_414_2_ptedpo.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332092/IMG_20250329_173312_868_s9w1wq.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332047/IMG_20250329_174436_909_2_bnxaxl.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332037/IMG_20250329_174553_692_kgacxt.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332026/IMG_20250329_174647_229_xnk3e9.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332015/IMG_20250329_174656_381_ro77ps.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332003/IMG_20250329_174751_267_xmanxq.jpg",
    ],
    id: 3,
  },

    {
    name: "Corcovado 30 (VENDIDO)",
    price: 28000,
    description:
    `
Año 2000
Material: fibra de vidrio 

Ubicado en Paraná 

Eslora: 9 metros 
Manga: 3 metros 
Altura interior: 1,8 metros 
Calado: 0,7 metros 

Motor: Perkins diésel 6 cilindros con 400 horas 
Transmisión: pata Volvo 280

Luces de navegación en buen estado 
Elementos de seguridad 

Fondo hecho en el 2023

Baño compartimentado 
Cocina con horno
Camarote en proa
Conejera en popa 
Sillón a babor con mesa
Sillones a estribor 
Carpintería en buen estado 

Ecosonda Garmin 
Cuenta revoluciones 

Bomba de achique en sentina
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336809/IMG-20241107-WA0031_bzwqoz.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336818/IMG-20241023-WA0047_ufyjyg.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336827/IMG-20241023-WA0045_xexv8y.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336837/IMG-20241023-WA0041_meefzr.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336846/IMG-20241023-WA0031_zulj16.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760336854/IMG-20241023-WA0027_skhmfv.jpg",
    ],
    id: 4,
  },

    {
    name: "Ortholan Comando 8",
    price: 30000,
    description:
    `
Ubicado en Paraná 

Año 1985

Eslora: 8 metros 
Manga: 2,6 metros
Material: fibra de vidrio

Motor: Volvo Penta diésel 6 cilindros 240 hp
Transmisión: pata Volvo duo Prop 290

Interior:
Camarote doble en proa 
Mesa con sillones a estribor 
Baño compartimentado con bacha a babor
Bacha para cubiertos a babor 

Tanque de agua potable 

Equipamiento:
Conversor de 12 a 220 v
Anafe
Horno eléctrico 
TV led 24 pulgadas 
Iluminación led
VHF
Ecosonda 
Parrilla náutica 
Audio Pioneer
Duchador exterior 

Instalación eléctrica en buen estado 

Último mantenimiento de fondo y pata diciembre 2023
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332434/IMG-20250710-WA0014_txj6wh.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332444/IMG_20250710_145424_865_d9v1wr.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332454/IMG_20250710_144350_616_o8eoly.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332467/IMG_20250710_144324_102_ak4toq.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332479/IMG_20250710_144306_626_nbjjww.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332496/IMG_20250710_144256_052_qumbxc.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332506/IMG_20250710_144244_660_pocusw.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332517/IMG_20250710_144228_771_iaxrgb.jpg",
    ],
    id: 5,
  },

    {
    name: "Crucero 33 pies",
    price: 30000,
    description:
    `
Ubicado en Paraná 

Eslora: 9,9 metros 
Manga: 3,28 metros 
Altura interior: 2 metros 

Material: fibra de vidrio 

Motorización: 2 Ford nafteros 
Transmisión: pata Volvo 280

Interior:
Camarote doble en proa 
Baño compartimentado con duchador a estribor 
Mesa con sillones convertible en cama matrimonial a estribor 
Bacha a babor 
Muchos lugares de guarda 
Excelente carpintería 

Equipamiento:
Anafe
Heladera 
Inversor de 12v a 220v
Calefón 
Ecosonda 
Matafuegos 

Amplio cockpit 

Motores recién repasados 

Año: 1983
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332887/IMG_20250830_112032_057_wc3qp5.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332872/IMG_20250830_114430_846_m5jlbu.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332900/IMG_20250830_111552_466_kgxtdu.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332913/IMG_20250830_105632_704_x7pda5.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332938/IMG_20250830_105452_955_abktvy.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332949/IMG_20250830_105424_750_nxru6b.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760332961/IMG_20250830_105410_487_bvblro.jpg",
    ],
    id: 6,
  },

    {
    name: "Huracán 460",
    price: 8500,
    description:
    `
Año 2006

Ubicada en Paraná 

Material: fibra de vidrio 
Eslora: 4,3 metros 
Manga: 1,7 metros 

Motorización: Yamaha 70hp

Estéreo 
Power trim
Bomba de achique 
Ecosonda
Lona de recubrimiento 
Tráiler 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333918/IMG_20250322_182542_264_3_drjul7.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333906/IMG_20250322_182526_703_ukbdn3.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333890/IMG_20250322_182641_524_t6hbq2.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333875/IMG_20250322_182851_694_2_hwgnxz.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333862/IMG_20250322_182918_877_usy9h6.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333849/IMG_20250322_182951_393_ycf8ni.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760333837/IMG_20250322_183013_573_tyba29.jpg",
    ],
    id: 7,
  },

      {
    name: "Pontoon Lerch 21",
    price: 32000,
    description:
    `
260 horas de uso 
Material: aluminio naval 

Ubicado en Paraná 

Eslora: 6,3 metros 
Manga: 2,45 metros 
Calado del casco: 0,3 metro

Motorización: Mercury 60 hp pata larga 4 tiempos etiqueta eco
Tanque de combustible: 50 litros 

Equipamiento:
Equipo de música 
Ecosonda Garmin 
Indicadores de motor, revoluciones, temperatura de agua, nivel de aceite 
Bocina 
Inodoro con cerramiento completo 
Heladera Coleman
Bimini completo 
Cerramiento completo con toldo transparente para navegar en invierno 
Parrilla en proa 
Mesa desarmable 

Trailer doble eje 

Desarrolla velocidad de planeo 

Papeles al día 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334239/IMG_20241228_174225_049_adkhlk.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334251/IMG_20241228_174508_244_mmyfhz.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334272/IMG_20241228_173748_874_olzbvy.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334288/IMG_20241228_173105_146_pvob93.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334301/IMG_20241228_172914_209_ipr1lk.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334316/IMG_20241228_172828_702_syjieq.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334330/IMG_20241228_172811_044_j5s3jv.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760334349/IMG_20241228_173756_468_k3uvni.jpg",
    ],
    id: 8,
  },

    {
    name: "Eclipse 18",
    price: 15000,
    description:
    `
Eclipse 18 

Año 2012

Material: fibra de vidrio 

Eslora: 5,36 metros 
Manga: 2,11 metros 
Puntal: 0,98 metro

Motor: Mercury 115 hp, 2t

Trailer 

Ecosonda 
Medidores de parámetros del motor completos y con marco cromado 
Power trim 
Arranque eléctrico
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363255/IMG-20250510-WA0026_2_s1egll.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363265/IMG-20250510-WA0025_dzuers.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363275/IMG-20250509-WA0001_qvcppw.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363284/IMG-20250507-WA0015_f3xklq.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363293/IMG-20250507-WA0014_up9dco.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363302/IMG-20250507-WA0013_kclxfn.jpg",
    ],
    id: 9,
  },

   {
    name: "Semirrígido Sail Nautic",
    price: 14500,
    description:
    `
Goma 2022
Casco 2001
Motor 2003

Motor: Mercury 50 hp 4t 

Trailer doble eje

Eslora: 5,12 metros 
Manga: 2,3 metros 
Capacidad de pasajeros: 8
Capacidad de carga: 950 Kg

Power trim 
Arranque eléctrico 
Ecosonda Garmin 

Equipado para kite y wake
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363311/IMG-20250505-WA0026_iyos26.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363320/IMG-20250505-WA0025_nbzux4.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363328/IMG-20250505-WA0024_fsvk1f.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760363338/IMG-20250505-WA0023_hno7zu.jpg",
    ],
    id: 10,
  },

     {
    name: "Dangelo 30",
    price: 32000,
    description:
    `
Año 1984    

Material: fibra de vidrio 

Eslora: 9 metros 
Manga: 3,2 metros 
Calado: 1,8 metros 
Altura interior: 1,8 metros 

Motor: Volvo diésel de 18 hp
Transmisión: pata saildrive

Enrollador de proa 

Fondo recién hecho
Cubierta totalmente repasada con antideslizante nuevo 

Cabullería en buen estado 

Vela mayor con media vida de uso
Genoa de enrollar en impecable estado 
Spinnaker en buen estado 

Herrajes completos
Molinetes en óptimas condiciones 

Ecosonda 
Anemómetro 
Piloto automático 
VHF

Cocina con horno
Camarote compartimentado con cama doble en proa 
Conejera en popa
Sillón a estribor 
Mesa con sillón convertible en cama a babor
Baño compartimentado con inodoro eléctrico en proa 
Conservadora 
Adaptador para 220v

Toldo en buen estado y muy completo 
Bimini en popa

Instalación eléctrica recién renovada 

Papeles al día 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414866/FB_IMG_1760409172606_gme2uh.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414787/IMG_20250405_183111_088_ie2yus.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414796/IMG_20250405_182946_900_fz60eb.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414805/IMG_20250405_182936_203_p0uuia.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414816/IMG_20250405_182547_041_jtgue3.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414826/IMG_20250405_182529_131_wlavwi.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414836/IMG_20250405_182512_711_bmcftf.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414846/IMG_20250405_182357_846_bdihka.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760414856/IMG_20250405_182343_840_sehuvf.jpg",
    ],
    id: 11,
  },

     {
    name: "Ponyriver 760",
    price: 34000,
    description:
    `
Eslora: 7,6 metros 
Manga: 2,45 metros 
Altura interior en timonera: 1,9 metros 

Año: 2018

Material: fibra de vidrio 

Ubicado en Paraná 

Motor principal: Evinrude 90 hp
Motor auxiliar: Johnson 10 hp

Interior:
Camarote doble en proa 
Baño compartimentado con inodoro eléctrico 
Cocina de anafe 

Equipamiento:
Ancla 
Malacate eléctrico 
Trailer doble eje 
Estereo 
Ecosonda 
Lona cobertora 

Instalación eléctrica nueva
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415320/IMG_20250715_111350_480_2_mp3hkd.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415311/IMG_20250715_111424_591_dkxrnh.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415330/IMG_20250715_111328_164_jcm0vl.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415302/IMG_20250715_111636_844_ptx9zb.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415340/IMG_20250715_111109_383_yjedta.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415351/IMG_20250715_110232_389_xje2ox.jpg",
    ],
    id: 12,
  },

     {
    name: "Bermuda 175",
    price: 15900,
    description:
    `
Año 1998

Ubicada en Rosario 

Material: fibra de vidrio 
Eslora: 5,2 metros 
Manga: 2,1 metros 

Motor Mariner 150 hp del año 2018 con 182 hrs 

Trailer 
Lona
Ecosonda 
Estereo 
Barra de ski
Muchos accesorios!
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415618/IMG-20241110-WA0022_v11keb.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415601/IMG-20241110-WA0024_k9d29x.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415610/IMG-20241110-WA0023_o2yrhl.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415627/IMG-20241110-WA0021_vlvszj.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415638/IMG-20241110-WA0020_xsavw3.jpg",
    ],
    id: 13,
  },

     {
    name: "Optimist",
    price: 1500,
    description:
    `
Material: fibra de vidrio

Año:2011

Flotadores casi nuevos
Funda completa
Vela de competición

Homologado ISAF
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415988/IMG-20250926-WA0054_sysky0.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416008/IMG-20250926-WA0052_b78sgf.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416018/IMG-20250926-WA0032_cq1bwz.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760415998/IMG-20250926-WA0053_pjtuct.jpg",
    ],
    id: 14,
  },

      {
    name: "Atuel 460",
    price: 9000,
    description:
    `
Ubicada en Paraná 

Año 2019

Eslora: 4,6 metros 
Manga: 1,7 metros 

Motor: Yamaha 70 hp con power trim

Material fibra de vidrio 

Arranque eléctrico 
Techo para sol
Lona
Bomba de achique 
Luces
Ecosonda 
Trailer 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416309/IMG-20241121-WA0018_2_ukslks.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416320/IMG-20241121-WA0020_on6wfk.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416331/IMG-20241121-WA0024_2_txdrd6.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416341/IMG-20241121-WA0027_3_iyojkh.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416352/IMG-20241121-WA0030_fiweic.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760416361/IMG-20241121-WA0031_ez1oq7.jpg",
    ],
    id: 15,
  },

        {
    name: "Quicksilver 555",
    price: 21000,
    description:
    `
Año 2011

Ubicada en Colón

Motor: Evinrude 135 HO con solo 15 hrs 

Ecosonda 
Relojería de motor completa
Toldo 
Tráiler 
Equipo de música 
    `,
    images: [
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760417512/IMG-20250109-WA0023_xveoap.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760417521/IMG-20250109-WA0021_p77tsg.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760417531/IMG-20250109-WA0024_qghxb1.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760417541/IMG-20250109-WA0026_vw6tvr.jpg",
      "https://res.cloudinary.com/dahmjd1ew/image/upload/v1760417548/IMG-20250109-WA0030_ax6ymy.jpg",
    ],
    id: 16,
  },
];


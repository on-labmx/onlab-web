// Catálogo de On-Lab. Para cambiar precios, edita aquí Y en netlify/functions/checkout.js
window.ONLAB_PRODUCTS = [
  {id:"suede", cat:"kit", tags:["gamuza"], name:"Suede Kit", price:139, img:"tienda/suede.jpg",
   tagline:"Limpieza en seco para gamuza y nobuck", bullets:["Borrador limpiador","Cepillo texturizado","Sin agua: no mancha ni decolora"]},
  {id:"unyellow", cat:"kit", tags:["suelas"], name:"Unyellowing Kit", price:149, img:"tienda/unyellow.jpg",
   tagline:"Devuelve el blanco a tus suelas", bullets:["Salsa Secreta (Secret Sauce)","Pincel aplicador","Wrap"]},
  {id:"basic", cat:"kit", tags:["tela","piel"], name:"Basic Kit", price:199, img:"tienda/basic.jpg",
   tagline:"Lo esencial para el día a día", bullets:["Jabón concentrado (Deep Clean)","Cepillo de cerdas M1","Microfibra"]},
  {id:"caps", cat:"kit", tags:["gorras"], name:"Basic Caps", price:289, img:"tienda/caps.jpg",
   tagline:"Tus gorras como nuevas, sin deformarlas", bullets:["Espuma limpiadora (Sneaker & Cap Foam)","Cepillo de cerdas M1","Microfibra"]},
  {id:"essential", cat:"kit", tags:["piel","tela"], name:"Essential Kit", price:479, img:"tienda/essential.jpg", free:true,
   tagline:"El cuidado completo", bullets:["Jabón concentrado y espuma limpiadora","Aroma y cepillo M1","Microfibra y Shields protectoras"]},
  {id:"pro", cat:"kit", tags:["piel","tela","suelas"], name:"Pro Kit", price:699, img:"tienda/pro.jpg", free:true,
   tagline:"Nuestro kit más completo: 9 productos", bullets:["Limpieza, Salsa Secreta y aroma","Cepillos M1 y M2, pincel y microfibra","Shields y hormas protectoras"]},
  {id:"foam", cat:"liquido", tags:["gorras","tela"], name:"Sneaker & Cap Foam 150 ml", price:189, img:"tienda/foam.jpg",
   tagline:"Espuma limpiadora para tenis y gorras", bullets:["Acción rápida","Para tela, piel y gorras"]},
  {id:"secret", cat:"liquido", tags:["suelas"], name:"Secret Sauce 120 ml", price:129, img:"tienda/secret.jpg",
   tagline:"Tratamiento para suelas amarillentas", bullets:["Punta aplicadora","Recupera el blanco"]},
  {id:"deep", cat:"liquido", tags:["tela","piel"], name:"Deep Clean 100 ml", price:99, img:"tienda/deep.jpg",
   tagline:"Jabón concentrado para limpieza profunda", bullets:["Concentrado: rinde muchas limpiezas","Para manchas difíciles"]},
  {id:"aroma", cat:"liquido", tags:[], name:"Aroma 125 ml", price:89, img:"tienda/aroma.jpg",
   tagline:"Aromatizante para el interior del calzado", bullets:["Elimina malos olores","Atomizador"]},
  {id:"hormas", cat:"accesorio", tags:["piel"], name:"Hormas (par)", price:109, img:"tienda/hormas.jpg",
   tagline:"Mantienen la forma de tus tenis", bullets:["Ajustables","Ideales para guardar tus pares"]},
  {id:"shields", cat:"accesorio", tags:["piel"], name:"Shields (par)", price:69, img:"tienda/shields.jpg", options:["Blanco","Beige","Negro"],
   tagline:"Protectores anti arrugas", bullets:["Evitan marcas en la punta","Blanco, beige o negro"]},
  {id:"cepillos", cat:"accesorio", tags:["tela","piel"], name:"Cepillo M1 o M2", price:60, img:"tienda/cepillos.jpg", options:["M1","M2"],
   tagline:"Cepillo de cerdas para suela y upper", bullets:["Mango de madera","Precio por pieza"]},
  {id:"micro", cat:"accesorio", tags:[], name:"Microfibra", price:29, img:"tienda/micro.jpg",
   tagline:"Para secar y dar el acabado", bullets:["Súper absorbente"]}
];
window.ONLAB_CONFIG = {
  whatsapp:"528681373756",
  puntos:["Plaza Cumbres","Torre BBVA","Plaza Serranía"],
  avisoEntrega:"Entrega sin costo en Plaza Cumbres, Torre BBVA y Plaza Serranía"
};

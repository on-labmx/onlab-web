// Crea un pago en Mercado Pago (Checkout Pro) a partir del carrito.
// Requiere la variable de entorno MP_ACCESS_TOKEN en Netlify (Site configuration → Environment variables).
// Los precios se validan aquí para que nadie pueda cambiarlos desde el navegador.
const PRICES = {suede:139,unyellow:149,basic:199,caps:289,essential:479,pro:699,foam:189,secret:129,deep:99,aroma:89,hormas:109,shields:69,cepillos:60,micro:29};
const NAMES = {suede:"Suede Kit",unyellow:"Unyellowing Kit",basic:"Basic Kit",caps:"Basic Caps",essential:"Essential Kit",pro:"Pro Kit",foam:"Sneaker & Cap Foam 150 ml",secret:"Secret Sauce 120 ml",deep:"Deep Clean 100 ml",aroma:"Aroma 125 ml",hormas:"Hormas (par)",shields:"Shields (par)",cepillos:"Cepillo M1 o M2",micro:"Microfibra"};
const PUNTOS = ["Plaza Cumbres","Torre BBVA","Plaza Serranía"];

const json = (status, body) => ({statusCode: status, headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, {error: "Método no permitido"});
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) return json(500, {error: "Falta configurar MP_ACCESS_TOKEN en Netlify"});
  let data;
  try { data = JSON.parse(event.body || "{}"); } catch (e) { return json(400, {error: "Datos inválidos"}); }

  const items = (Array.isArray(data.items) ? data.items : [])
    .filter(i => PRICES[i.id] && Number.isInteger(i.qty) && i.qty > 0 && i.qty <= 50)
    .map(i => ({
      id: i.id,
      title: NAMES[i.id] + (i.option ? ` – ${String(i.option).slice(0, 20)}` : ""),
      quantity: i.qty,
      unit_price: PRICES[i.id],
      currency_id: "MXN"
    }));
  if (!items.length) return json(400, {error: "El carrito está vacío"});
  const entrega = PUNTOS.includes(data.entrega) ? data.entrega : null;
  if (!entrega) return json(400, {error: "Elige un punto de entrega"});

  const nombre = String(data.nombre || "").slice(0, 80);
  const telefono = String(data.telefono || "").replace(/[^0-9+ ]/g, "").slice(0, 20);
  const email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email || "") ? data.email : undefined;
  const base = process.env.URL || "https://onlabmex.netlify.app";

  const pref = {
    items,
    payer: {name: nombre, email},
    metadata: {entrega, nombre, telefono},
    back_urls: {success: `${base}/gracias.html?estado=aprobado`, pending: `${base}/gracias.html?estado=pendiente`, failure: `${base}/gracias.html?estado=rechazado`},
    auto_return: "approved",
    statement_descriptor: "ONLAB",
    external_reference: `ONLAB-${Date.now()}`
  };

  try {
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
      body: JSON.stringify(pref)
    });
    const out = await r.json();
    if (!r.ok) return json(502, {error: "Mercado Pago no pudo crear el pago", detalle: out.message || null});
    return json(200, {url: out.init_point, referencia: pref.external_reference});
  } catch (e) {
    return json(502, {error: "No se pudo conectar con Mercado Pago"});
  }
};

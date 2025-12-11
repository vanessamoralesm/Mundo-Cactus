// DATOS ESTÁTICOS DE MUNDO CACTUS
const MundoCactusData = {
    // DATOS DEL SITIO
    sitio: {
        nombre: "Mundo Cactus",
        slogan: "Tu Tienda de Cactus y Suculentas",
        telefono: "+505 8888 9999",
        email: "info@mundocactus.com",
        direccion: "Av. Jardín Botánico #123, Ciudad Verde",
        horario: "Lun-Vie: 9am - 6pm | Sáb: 10am - 2pm",
        whatsapp: "50588889999",
        copyright: `&copy; ${new Date().getFullYear()} Mundo Cactus. Todos los derechos reservados.`
    },

    // CATEGORÍAS
    categorias: [
        {
            id: 1,
            nombre: "Cactus de Interior",
            descripcion: "Perfectos para espacios interiores con poca luz natural",
            icono: "fas fa-cactus",
            imagen: "images/categorias/interior.jpg"
        },
        {
            id: 2,
            nombre: "Cactus de Exterior",
            descripcion: "Resistentes al sol directo y condiciones climáticas variadas",
            icono: "fas fa-sun",
            imagen: "images/categorias/exterior.jpg"
        },
        {
            id: 3,
            nombre: "Suculentas Variadas",
            descripcion: "Hermosas suculentas con formas y colores únicos",
            icono: "fas fa-leaf",
            imagen: "images/categorias/suculentas.jpg"
        },
        {
            id: 4,
            nombre: "Kits de Regalo",
            descripcion: "Conjuntos especiales para obsequiar a seres queridos",
            icono: "fas fa-gift",
            imagen: "images/categorias/kits.jpg"
        }
    ],

    // PRODUCTOS
    productos: [
        {
            id: 1,
            nombre: "Cactus Echinopsis",
            descripcion: "Cactus globular con hermosas flores rosadas que florecen en verano. Ideal para interiores con luz moderada.",
            precio: 450,
            categoria: "interior",
            imagen: "imagenes/imagen1.jpg",
            stock: 15,
            destacado: true
        },
        {
            id: 2,
            nombre: "Suculenta Echeveria",
            descripcion: "Forma de roseta perfecta con tonos azulados y púrpura. Muy decorativa y fácil de cuidar.",
            precio: 380,
            categoria: "suculenta",
            imagen: "imagenes/imagen2.jpg",
            stock: 22,
            destacado: true
        },
        {
            id: 3,
            nombre: "Cactus San Pedro",
            descripcion: "Cactus columnar de rápido crecimiento. Perfecto para jardines exteriores y patios soleados.",
            precio: 550,
            categoria: "exterior",
            imagen: "imagenes/imagen3.jpg",
            icono: "fas fa-tree",
            stock: 8,
            destacado: true
        },
        {
            id: 4,
            nombre: "Cactus Mammillaria",
            descripcion: "Pequeño cactus esférico cubierto de espinas blancas suaves. Muy resistente y de crecimiento lento.",
            precio: 320,
            categoria: "interior",
            imagen: "imagenes/imagen4.jpg",
            icono: "fas fa-circle",
            stock: 18,
            destacado: true
        },
        {
            id: 5,
            nombre: "Suculenta Aloe Vera",
            descripcion: "Planta medicinal con propiedades curativas para la piel. Requiere poco mantenimiento.",
            precio: 420,
            categoria: "suculenta",
            imagen: "imagenes/imagen5.jpg",
            icono: "fas fa-spa",
            stock: 25,
            destacado: true
        },
        {
            id: 6,
            nombre: "Cactus Oreja de Mickey",
            descripcion: "Forma divertida y única que recuerda las orejas de Mickey Mouse. Ideal para principiantes.",
            precio: 480,
            categoria: "interior",
            imagen: "imagenes/imagen6.jpg",
            icono: "fas fa-paw",
            stock: 12,
            destacado: true
        },
        {
            id: 7,
            nombre: "Kit Inicial Cactus",
            descripcion: "Incluye 3 cactus pequeños de diferentes especies + macetas decorativas + sustrato especial.",
            precio: 850,
            categoria: "kit",
            imagen: "imagenes/imagen7.jpg",
            icono: "fas fa-gift",
            stock: 6,
            destacado: true
        },
        {
            id: 8,
            nombre: "Cactus Cola de Mono",
            descripcion: "Cactus colgante con tallos largos. Perfecto para maceteros elevados o cestas colgantes.",
            precio: 520,
            categoria: "exterior",
            imagen: "imagenes/imagen8.jpg",
            icono: "fas fa-vine",
            stock: 10,
            destacado: true
        },
        {
            id: 9,
            nombre: "Cactus Peyote",
            descripcion: "Cactus pequeño y raro, de crecimiento muy lento. Requiere cuidados especiales.",
            precio: 1200,
            categoria: "interior",
            imagen: "imagenes/coleccion1.jpg",
            icono: "fas fa-seedling",
            stock: 3,
            destacado: false
        },
        {
            id: 10,
            nombre: "Suculenta Sedum",
            descripcion: "Suculenta tapizante ideal para cubrir suelos o crear jardines verticales.",
            precio: 350,
            categoria: "suculenta",
            imagen: "imagenes/coleccion2.jpg",
            icono: "fas fa-mountain",
            stock: 20,
            destacado: false
        }
    ],

    // FEATURES (CARACTERÍSTICAS)
    features: [
        {
            icono: "fas fa-truck",
            titulo: "Envíos Rápidos",
            descripcion: "Entrega en 24-48 horas a todo el país"
        },
        {
            icono: "fas fa-shield-alt",
            titulo: "Garantía Total",
            descripcion: "30 días de garantía en todas nuestras plantas"
        },
        {
            icono: "fas fa-headset",
            titulo: "Soporte Experto",
            descripcion: "Asesoría personalizada sobre cuidados"
        },
        {
            icono: "fas fa-seedling",
            titulo: "Calidad Premium",
            descripcion: "Plantas seleccionadas y sanas"
        }
    ],

    // ENLACES DEL FOOTER
    footerLinks: [
        { texto: "Inicio", href: "#inicio" },
        { texto: "Categorías", href: "#categorias" },
        { texto: "Productos", href: "#productos" },
        { texto: "Nosotros", href: "#nosotros" },
        { texto: "Contacto", href: "#contacto" }
    ],

    footerProducts: [
        { texto: "Cactus Pequeños" },
        { texto: "Cactus Grandes" },
        { texto: "Suculentas" },
        { texto: "Macetas Decorativas" },
        { texto: "Sustratos Especiales" }
    ],

    // REDES SOCIALES
    redesSociales: [
        { icono: "fab fa-facebook-f", href: "#", nombre: "Facebook" },
        { icono: "fab fa-instagram", href: "#", nombre: "Instagram" },
        { icono: "fab fa-whatsapp", href: "#", nombre: "WhatsApp" },
        { icono: "fab fa-tiktok", href: "#", nombre: "TikTok" }
    ],

    // IMÁGENES (URLs alternativas si no tienes las imágenes locales)
    imagenes: {
        hero: "imagenes/coleccion1.jpg",
        nosotros: "imagenes/coleccion2.jpg",
        productos: {
            echinopsis: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            echeveria: "https://images.unsplash.com/photo-1562243061-204d6d8d6c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            sanpedro: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            mammillaria: "https://images.unsplash.com/photo-1592235669391-6c0bcc5f2d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            aloeVera: "https://images.unsplash.com/photo-1598880940080-ff2e4b650d72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            orejaMickey: "https://images.unsplash.com/photo-1577968897966-5338a8e7d3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            kitInicial: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            colaMono: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            peyote: "https://images.unsplash.com/photo-1577968897966-5338a8e7d3f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            sedum: "https://images.unsplash.com/photo-1562243061-204d6d8d6c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    }
};

// Función para cargar imágenes de productos con fallback
function cargarImagenProducto(producto) {
    // Si es URL absoluta úsala, si no devuelve la ruta tal cual está definida en el objeto
    return producto.imagen.startsWith('http') ? producto.imagen : producto.imagen;
}
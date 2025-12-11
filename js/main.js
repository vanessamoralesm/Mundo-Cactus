// CARRITO DE COMPRAS
let carrito = [];
let cartCount = 0;
let cartTotal = 0;

// ELEMENTOS DOM
const productosGrid = document.getElementById('productosGrid');
const categoriasGrid = document.getElementById('categoriasGrid');
const featuresGrid = document.getElementById('featuresGrid');
const contactoDetails = document.getElementById('contactoDetails');
const socialIcons = document.getElementById('socialIcons');
const footerLinks = document.getElementById('footerLinks');
const footerProducts = document.getElementById('footerProducts');
const footerContact = document.getElementById('footerContact');
const footerCopyright = document.getElementById('footerCopyright');
const cartIcon = document.getElementById('cartIcon');
const cartCountElement = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const aboutImage = document.getElementById('aboutImage');
const imgFallback = document.getElementById('imgFallback');

// INICIALIZAR APLICACIÓN
document.addEventListener('DOMContentLoaded', () => {
    inicializarDatos();
    cargarCarrito();
    inicializarEventos();
    actualizarCarrito();
    
    // Establecer imagen de fondo del hero
    document.querySelector('.hero').style.backgroundImage = 
        `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${MundoCactusData.imagenes.hero}')`;
});

// INICIALIZAR DATOS ESTÁTICOS
function inicializarDatos() {
    cargarCategorias();
    cargarProductos();
    cargarFeatures();
    cargarContacto();
    cargarFooter();
    cargarImagenNosotros();
}

// CARGAR CATEGORÍAS
function cargarCategorias() {
    categoriasGrid.innerHTML = '';
    
    MundoCactusData.categorias.forEach(categoria => {
        const categoriaCard = document.createElement('div');
        categoriaCard.className = 'categoria-card';
        categoriaCard.innerHTML = `
            <i class="${categoria.icono} categoria-icon"></i>
            <h3>${categoria.nombre}</h3>
            <p>${categoria.descripcion}</p>
        `;
        
        categoriasGrid.appendChild(categoriaCard);
    });
}

// CARGAR PRODUCTOS
function cargarProductos() {
    productosGrid.innerHTML = '';
    
    // Filtrar productos destacados
    const productosDestacados = MundoCactusData.productos.filter(p => p.destacado);
    
    productosDestacados.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card';
        productoCard.innerHTML = `
            <div class="producto-img">
                <img src="${cargarImagenProducto(producto)}" alt="${producto.nombre}" 
                     onerror="this.style.display='none'; this.parentElement.querySelector('.img-fallback').style.display='flex';">
                <div class="img-fallback" style="display: none;">
                    <i class="${producto.icono}"></i>
                </div>
            </div>
            <div class="producto-info">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-desc">${producto.descripcion}</p>
                <div class="producto-precio">C$ ${producto.precio.toFixed(2)}</div>
                <div class="producto-actions">
                    <button class="btn btn-sm btn-add-to-cart" data-id="${producto.id}">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                    <button class="btn btn-sm btn-outline btn-view-details" data-id="${producto.id}">
                        <i class="fas fa-info"></i> Detalles
                    </button>
                </div>
            </div>
        `;
        
        productosGrid.appendChild(productoCard);
    });
    
    // Agregar eventos a los botones
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            agregarAlCarrito(id);
        });
    });
    
    document.querySelectorAll('.btn-view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            mostrarDetallesProducto(id);
        });
    });
}

// CARGAR FEATURES
function cargarFeatures() {
    featuresGrid.innerHTML = '';
    
    MundoCactusData.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature';
        featureElement.innerHTML = `
            <i class="${feature.icono}"></i>
            <div>
                <h4>${feature.titulo}</h4>
                <p>${feature.descripcion}</p>
            </div>
        `;
        
        featuresGrid.appendChild(featureElement);
    });
}

// CARGAR CONTACTO
function cargarContacto() {
    contactoDetails.innerHTML = `
        <div class="contacto-detail">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h4>Ubicación</h4>
                <p>${MundoCactusData.sitio.direccion}</p>
            </div>
        </div>
        
        <div class="contacto-detail">
            <i class="fas fa-phone"></i>
            <div>
                <h4>Teléfono</h4>
                <p>${MundoCactusData.sitio.telefono}</p>
            </div>
        </div>
        
        <div class="contacto-detail">
            <i class="fas fa-envelope"></i>
            <div>
                <h4>Email</h4>
                <p>${MundoCactusData.sitio.email}</p>
            </div>
        </div>
        
        <div class="contacto-detail">
            <i class="fas fa-clock"></i>
            <div>
                <h4>Horario</h4>
                <p>${MundoCactusData.sitio.horario}</p>
            </div>
        </div>
    `;
}

// CARGAR FOOTER
function cargarFooter() {
    // Redes sociales
    socialIcons.innerHTML = '';
    MundoCactusData.redesSociales.forEach(red => {
        socialIcons.innerHTML += `
            <a href="${red.href}" title="${red.nombre}">
                <i class="${red.icono}"></i>
            </a>
        `;
    });
    
    // Enlaces rápidos
    footerLinks.innerHTML = '';
    MundoCactusData.footerLinks.forEach(link => {
        footerLinks.innerHTML += `
            <li><a href="${link.href}">${link.texto}</a></li>
        `;
    });
    
    // Productos del footer
    footerProducts.innerHTML = '';
    MundoCactusData.footerProducts.forEach(producto => {
        footerProducts.innerHTML += `
            <li><a href="#productos">${producto.texto}</a></li>
        `;
    });
    
    // Contacto del footer
    footerContact.innerHTML = `
        <li><i class="fas fa-map-marker-alt"></i> ${MundoCactusData.sitio.direccion}</li>
        <li><i class="fas fa-phone"></i> ${MundoCactusData.sitio.telefono}</li>
        <li><i class="fas fa-envelope"></i> ${MundoCactusData.sitio.email}</li>
    `;
    
    // Copyright
    footerCopyright.innerHTML = MundoCactusData.sitio.copyright;
}

// CARGAR IMAGEN NOSOTROS
function cargarImagenNosotros() {
    if (aboutImage) {
        aboutImage.src = MundoCactusData.imagenes.nosotros;
        aboutImage.alt = "Vivero Mundo Cactus";
        aboutImage.onerror = function() {
            this.style.display = 'none';
            if (imgFallback) {
                imgFallback.style.display = 'flex';
            }
        };
    }
}

// AGREGAR AL CARRITO
function agregarAlCarrito(productoId) {
    const producto = MundoCactusData.productos.find(p => p.id === productoId);
    
    if (!producto) return;
    
    // Verificar stock
    if (producto.stock <= 0) {
        mostrarNotificacion(`Lo sentimos, ${producto.nombre} está agotado.`, 'warning');
        return;
    }
    
    // Verificar si ya está en el carrito
    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        // Verificar stock disponible
        if (itemExistente.cantidad >= producto.stock) {
            mostrarNotificacion(`Solo hay ${producto.stock} unidades disponibles de ${producto.nombre}.`, 'warning');
            return;
        }
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    // Actualizar contador
    cartCount = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartCountElement.textContent = cartCount;
    
    // Actualizar total
    cartTotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    cartTotalElement.textContent = `C$ ${cartTotal.toFixed(2)}`;
    
    // Actualizar items del carrito
    actualizarItemsCarrito();
    
    // Guardar en localStorage
    guardarCarrito();
}

// ACTUALIZAR ITEMS DEL CARRITO
function actualizarItemsCarrito() {
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <h3>Tu carrito está vacío</h3>
                <p>Agrega productos para comenzar tu compra</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = '';
    
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${cargarImagenProducto(item)}" alt="${item.nombre}"
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${item.icono}\\'></i>';">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nombre}</div>
                <div class="cart-item-price">C$ ${item.precio.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.cantidad}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        cartItems.appendChild(itemElement);
    });
    
    // Agregar eventos a los botones del carrito
    agregarEventosCarrito();
}

// AGREGAR EVENTOS AL CARRITO
function agregarEventosCarrito() {
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            cambiarCantidad(id, -1);
        });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            cambiarCantidad(id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('button').dataset.id);
            eliminarDelCarrito(id);
        });
    });
}

// CAMBIAR CANTIDAD
function cambiarCantidad(productoId, cambio) {
    const itemIndex = carrito.findIndex(item => item.id === productoId);
    
    if (itemIndex === -1) return;
    
    const producto = MundoCactusData.productos.find(p => p.id === productoId);
    
    if (cambio > 0 && carrito[itemIndex].cantidad >= producto.stock) {
        mostrarNotificacion(`Solo hay ${producto.stock} unidades disponibles.`, 'warning');
        return;
    }
    
    carrito[itemIndex].cantidad += cambio;
    
    if (carrito[itemIndex].cantidad <= 0) {
        carrito.splice(itemIndex, 1);
    }
    
    actualizarCarrito();
}

// ELIMINAR DEL CARRITO
function eliminarDelCarrito(productoId) {
    const itemIndex = carrito.findIndex(item => item.id === productoId);
    
    if (itemIndex === -1) return;
    
    const productoNombre = carrito[itemIndex].nombre;
    carrito.splice(itemIndex, 1);
    
    actualizarCarrito();
    mostrarNotificacion(`${productoNombre} eliminado del carrito`);
}

// MOSTRAR DETALLES DEL PRODUCTO
function mostrarDetallesProducto(productoId) {
    const producto = MundoCactusData.productos.find(p => p.id === productoId);
    
    if (!producto) return;
    
    // Crear modal de detalles
    const modalDetalles = document.createElement('div');
    modalDetalles.className = 'notification';
    modalDetalles.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        z-index: 1002;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        display: block;
        animation: fadeIn 0.3s ease;
    `;
    
    modalDetalles.innerHTML = `
        <div style="text-align: right; margin-bottom: 1.5rem;">
            <button id="closeDetails" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #2E7D32;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div style="text-align: center; margin-bottom: 2rem;">
            <img src="${cargarImagenProducto(producto)}" 
                 alt="${producto.nombre}" 
                 style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 15px; margin-bottom: 1rem;"
                 onerror="this.style.display='none'; this.parentElement.innerHTML+='<i class=\\'${producto.icono}\\' style=\\'font-size: 5rem; color: #2E7D32;\\'></i>';">
        </div>
        <h2 style="color: #1B5E20; margin-bottom: 1rem; font-size: 1.8rem;">${producto.nombre}</h2>
        <div style="background: #f5f5f5; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
            <p style="margin: 0; color: #444; line-height: 1.6;">${producto.descripcion}</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <div>
                <div style="font-size: 0.9rem; color: #666;">Categoría</div>
                <div style="font-weight: bold; color: #2E7D32;">${producto.categoria}</div>
            </div>
            <div>
                <div style="font-size: 0.9rem; color: #666;">Stock disponible</div>
                <div style="font-weight: bold; color: ${producto.stock > 5 ? '#2E7D32' : '#ff9800'};">${producto.stock} unidades</div>
            </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem;">
            <div>
                <div style="font-size: 2.2rem; font-weight: bold; color: #2E7D32;">C$ ${producto.precio.toFixed(2)}</div>
            </div>
            <button class="btn" id="addFromDetails" data-id="${producto.id}" style="padding: 1rem 2rem;">
                <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    document.body.appendChild(modalDetalles);
    overlay.style.display = 'block';
    
    // Eventos del modal de detalles
    document.getElementById('closeDetails').addEventListener('click', cerrarModalDetalles);
    document.getElementById('addFromDetails').addEventListener('click', () => {
        agregarAlCarrito(productoId);
        cerrarModalDetalles();
    });
    
    function cerrarModalDetalles() {
        document.body.removeChild(modalDetalles);
        overlay.style.display = 'none';
    }
    
    overlay.addEventListener('click', cerrarModalDetalles);
}

// COMPRAR POR WHATSAPP
function comprarPorWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío', 'warning');
        return;
    }
    
    // Crear mensaje para WhatsApp
    let mensaje = `¡Hola Mundo Cactus! \n\n`;
    mensaje += `Quiero hacer el siguiente pedido:\n\n`;
    
    carrito.forEach((item, index) => {
        const totalItem = item.precio * item.cantidad;
        mensaje += `${index + 1}. *${item.nombre}*\n`;
        mensaje += `   Cantidad: ${item.cantidad} x C$ ${item.precio.toFixed(2)} = C$ ${totalItem.toFixed(2)}\n\n`;
    });
    
    mensaje += `*📋 RESUMEN DEL PEDIDO*\n`;
    mensaje += `──────────────\n`;
    mensaje += `Total Productos: ${cartCount}\n`;
    mensaje += `Subtotal: C$ ${cartTotal.toFixed(2)}\n`;
    mensaje += `*TOTAL: C$ ${cartTotal.toFixed(2)}*\n\n`;
    mensaje += `📞 Mi teléfono: [Por favor indíquelo]\n`;
    mensaje += `📍 Dirección de entrega: [Por favor indíquela]\n\n`;
    mensaje += `¡Gracias! Espero su confirmación. 🌵`;
    
    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const telefono = MundoCactusData.sitio.whatsapp;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, '_blank');
    
    // Opcional: Limpiar carrito después de enviar
    // carrito = [];
    // actualizarCarrito();
}

// GUARDAR CARRITO EN LOCALSTORAGE
function guardarCarrito() {
    try {
        localStorage.setItem('mundocactus_carrito', JSON.stringify(carrito));
    } catch (e) {
        console.error('Error al guardar carrito:', e);
    }
}

// CARGAR CARRITO DESDE LOCALSTORAGE
function cargarCarrito() {
    try {
        const carritoGuardado = localStorage.getItem('mundocactus_carrito');
        
        if (carritoGuardado) {
            const carritoParseado = JSON.parse(carritoGuardado);
            
            // Reconstruir objetos de producto completos
            carrito = carritoParseado.map(item => {
                const productoOriginal = MundoCactusData.productos.find(p => p.id === item.id);
                return {
                    ...productoOriginal,
                    cantidad: item.cantidad
                };
            }).filter(item => item !== undefined);
        }
    } catch (e) {
        console.error('Error al cargar carrito:', e);
        carrito = [];
    }
}

// MOSTRAR NOTIFICACIÓN
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Remover notificaciones anteriores
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notification ${tipo}`;
    
    const icono = tipo === 'success' ? 'check-circle' : 
                 tipo === 'warning' ? 'exclamation-triangle' : 'exclamation-circle';
    
    notificacion.innerHTML = `
        <i class="fas fa-${icono}"></i>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notificacion.parentNode) {
                document.body.removeChild(notificacion);
            }
        }, 300);
    }, 4000);
}

// INICIALIZAR EVENTOS
function inicializarEventos() {
    // Eventos del carrito
    cartIcon.addEventListener('click', () => {
        cartModal.classList.add('active');
        overlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', () => {
        cartModal.classList.remove('active');
        overlay.classList.remove('active');
        mainNav.classList.remove('active');
    });
    
    // Eventos de compra
    checkoutBtn.addEventListener('click', comprarPorWhatsApp);
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        comprarPorWhatsApp();
    });
    
    // Evento del menú móvil
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        overlay.classList.add('active');
    });
    
    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tecla ESC para cerrar modales
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            mainNav.classList.remove('active');
            document.querySelectorAll('.notification').forEach(n => n.remove());
        }
    });
}
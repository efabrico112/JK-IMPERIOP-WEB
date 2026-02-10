document.addEventListener('DOMContentLoaded', () => {
    console.log('JK IMPERIO Loaded');

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // --- Hero Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (slides.length > 0) {
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Auto-play
        setInterval(nextSlide, slideInterval);
    }

    // --- Product Catalog (30 Items) ---
    const products = [
        // Reds
        {
            id: 1,
            name: 'Velvet Night',
            type: 'Rosa Freedom',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/freedom.jpg',
            category: 'reds',
            price: 119900,
            isBestSeller: true,
            description: 'El estándar de oro en rosas rojas. Con su color rojo carmesí profundo y aterciopelado, la Freedom es símbolo de amor eterno y pasión intensa. Sus pétalos de apertura perfecta y tallos robustos garantizan una presencia imponente y duradera.',
            occasion: 'Aniversarios, San Valentín, propuestas de matrimonio y declaraciones de amor apasionadas.',
            care: ['Recortar tallos 2cm en diagonal.', 'Usar agua fría y cambiar cada 2 días.', 'Evitar sol directo y corrientes de aire.']
        },
        {
            id: 2,
            name: 'Crimson Explorer',
            type: 'Rosa Explorer',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/freedom.jpg',
            category: 'reds',
            price: 124900,
            description: 'Sofisticación y misterio en cada pétalo. La rosa Explorer destaca por su tono rojo oscuro intenso y su increíble durabilidad. Su textura aterciopelada y apertura lenta la convierten en una obra de arte floral de lujo.',
            occasion: 'Eventos de gala, cenas románticas elegantes y decoración de interiores sofisticada.',
            care: ['Retirar pétalos guardas externos si es necesario.', 'Hidratar profundamente.', 'Ideal para ambientes frescos.']
        },
        {
            id: 3,
            name: 'Royal Red',
            type: 'Rosa Red France',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/Ragazza.jpg',
            category: 'reds',
            price: 119900,
            description: 'Un clásico francés de elegancia atemporal. Sus pétalos se despliegan en una forma de copa perfecta, revelando un rojo vibrante y luminoso. Ideal para quienes buscan tradición y belleza sin excesos.',
            occasion: 'Cumpleaños, agradecimientos y gestos románticos clásicos.',
            care: ['Cortar tallos bajo el agua.', 'Mantener el florero lleno al 75%.', 'Rociar los pétalos suavemente.']
        },

        // Whites & Creams
        {
            id: 4,
            name: 'Moonlight',
            type: 'Rosa Mondial',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/Mondial.jpg',
            category: 'whites',
            price: 129900,
            isExclusive: true,
            description: 'Conocida como la "Rosa de las Novias", la Mondial posee un blanco cremoso con sutiles toques verdes en los bordes. Simboliza pureza y unidad, con una apertura majestuosa y pétalos rizados.',
            occasion: 'Bodas, bautizos, condolencias y decoración minimalista.',
            care: ['Retirar hojas que toquen el agua.', 'Agua tibia para acelerar apertura.', 'Luz indirecta brillante.']
        },
        {
            id: 5,
            name: 'Pure Snow',
            type: 'Rosa Playa Blanca',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/playa_blanca.jpg',
            category: 'whites',
            price: 134900,
            description: 'Blancura pura y radiante. Playa Blanca es una rosa de jardín con una cantidad excepcional de pétalos que crean un centro denso y lujoso. Su color blanco puro ilumina cualquier espacio con serenidad.',
            occasion: 'Eventos "all-white", centros de mesa lujosos y regalos de paz.',
            care: ['Requiere mucha agua, revisar nivel diario.', 'Cortar tallos cada 3 días.', 'Evitar calor excesivo.']
        },
        {
            id: 6,
            name: 'Ivory Dream',
            type: 'Rosa Vendela',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/vendela.jpg',
            category: 'whites',
            price: 124900,
            description: 'La elegancia del color marfil. Vendela es famosa por su tono crema champán delicado y su forma clásica. Aporta calidez y distinción, siendo una favorita para combinar con otros colores suaves.',
            occasion: 'Bodas vintage, aniversarios de oro y decoración clásica.',
            care: ['Limpiar el florero con cloro antes de usar.', 'Agua fresca.', 'Retirar flores marchitas.']
        },
        {
            id: 7,
            name: 'White Cloud',
            type: 'Rosa White Chocolate',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/Snow-Bliss.jpg',
            category: 'whites',
            price: 129900,
            description: 'Densa, enorme y cremosa como el chocolate blanco. Esta variedad destaca por el tamaño gigante de su cabeza floral y sus pétalos gruesos que le otorgan una vida en florero superior.',
            occasion: 'Grandes arreglos florales, regalos impactantes y decoración de hoteles.',
            care: ['Soporte adecuado para el peso de la flor.', 'Hidratación constante.', 'Cortar en bisel profundo.']
        },

        // Pinks & Magentas
        {
            id: 8,
            name: 'Pink Floyd',
            type: 'Rosa Pink Floyd',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/Pink-Floyd.jpg',
            category: 'pinks',
            price: 134900,
            isBestSeller: true,
            description: 'Vibrante, eléctrica e inolvidable. Pink Floyd es una rosa fucsia intenso que roba todas las miradas. Su color saturado y gran tamaño la convierten en el centro de atención indiscutible.',
            occasion: 'Cumpleaños alegres, fiestas de 15 años y celebraciones vibrantes.',
            care: ['Mucha luz indirecta para mantener el color.', 'Agua limpia diaria.', 'Nutriente floral recomendado.']
        },
        {
            id: 9,
            name: 'Sweet Berry',
            type: 'Rosa Queen Berry',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/Queen-Barry.jpg',
            category: 'pinks',
            price: 129900,
            description: 'Un rosa frambuesa profundo y seductor. Queen Berry ofrece un color rico y sofisticado, perfecto para transmitir admiración y gratitud con un toque moderno y chic.',
            occasion: 'Día de la Madre, agradecimientos corporativos y citas románticas.',
            care: ['Cortar tallos regularmente.', 'Evitar frutas cerca (etileno).', 'Lugar fresco de noche.']
        },
        {
            id: 10,
            name: 'Rosalinda',
            type: 'Rosa Pink Mondial',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/pink-mondial.jpg',
            category: 'pinks',
            price: 129900,
            isNew: true,
            description: 'Suavidad y romanticismo en rosa pastel. Pink Mondial es la hermana rosada de la famosa Mondial, compartiendo sus pétalos rizados y su larga duración, pero con un rubor rosado de ensueño.',
            occasion: 'Baby showers, bodas románticas y regalos de ternura.',
            care: ['Tratar con delicadeza los pétalos.', 'Agua siempre limpia.', 'Evitar luz solar directa.']
        },

        {
            id: 11,
            name: 'Fuchsia Pop',
            type: 'Rosa Topaz',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/Tabatha_01.jpg',
            category: 'pinks',
            price: 124900,
            description: 'Energía pura en color fucsia brillante. Topaz es una rosa alegre y luminosa, con pétalos que parecen brillar. Perfecta para levantar el ánimo y celebrar la vida con color.',
            occasion: 'Graduaciones, ascensos laborales y festejos con amigos.',
            care: ['Cambiar agua cada 2 días.', 'Recorte de tallos frecuente.', 'Mantener alejada de fuentes de calor.']
        },
        {
            id: 12,
            name: 'Blush Kiss',
            type: 'Rosa Jesika',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/jesika.jpg',
            category: 'pinks',
            price: 129900,
            description: 'Dulce y delicada. Jesika presenta un tono rosa suave y equilibrado, clásico y femenino. Sus botones tienen una forma elegante que se abre lentamente para mostrar su belleza.',
            occasion: 'Primera cita, aniversarios de mes y detalles dulces.',
            care: ['Hidratación media.', 'Limpiar follaje sumergido.', 'Temperatura ambiente constante.']
        },
        {
            id: 13,
            name: 'Candy Crush',
            type: 'Rosa Frutetto',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/frutetto.jpg',
            category: 'pinks',
            price: 129900,
            description: 'Un rosa medio vibrante con corazón verdoso. Frutetto es fresca y juvenil, evocando la alegría de la primavera. Su color único aporta dinamismo a cualquier arreglo.',
            occasion: 'Cumpleaños de amigas, brunchs y regalos casuales.',
            care: ['Agua fría.', 'Nutriente floral vital.', 'Cortar 2cm cada 3 días.']
        },
        {
            id: 14,
            name: 'Soft Petal',
            type: 'Rosa Blessing',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/blessing.jpg',
            category: 'pinks',
            price: 124900,
            description: 'Bendición de color. Blessing es una rosa de tono rosa coral suave, cálida y acogedora. Transmite calma y felicidad con su apertura amplia y generosa.',
            occasion: 'Recuperación de salud, dar ánimos y visitas familiares.',
            care: ['Mucha agua.', 'Luz natural indirecta.', 'Retirar pétalos marchitos.']
        },
        {
            id: 15,
            name: 'Vibrant Soul',
            type: 'Rosa Alive',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/Alive-2.jpg',
            category: 'pinks',
            price: 129900,
            description: 'Intensidad que deslumbra. Alive es una rosa de color coral-naranja vibrante y encendido. Representa energía, entusiasmo y pasión por la vida. Imposible de ignorar.',
            occasion: 'Celebraciones de logros, inauguraciones y eventos creativos.',
            care: ['Hidratación profunda.', 'Evitar aire acondicionado directo.', 'Cambio de agua frecuente.']
        },
        {
            id: 16,
            name: 'Morning Dew',
            type: 'Rosa New Face',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/new_face.jpg',
            category: 'pinks',
            price: 124900,
            description: 'Frescura matutina. New Face suele presentar tonos rosa salmón suave, a veces con matices naranja. Es una rosa alegre y versátil que ilumina cualquier habitación.',
            occasion: 'Desayunos sorpresa, cumpleaños y arreglos de día.',
            care: ['Agua fresca.', 'Corte en bisel.', 'Luz clara pero no directa.']
        },

        // Yellows & Oranges
        {
            id: 17,
            name: 'Solar Flare',
            type: 'Rosa High & Magic',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/high-and-magic.jpg',
            category: 'yellows',
            price: 124900,
            isBestSeller: true,
            description: 'Magia de fuego. High & Magic es una rosa bicolor impresionante con base amarilla y bordes rojos intensos, como una llama viva. Aporta energía y calidez instantánea.',
            occasion: 'Hombres, éxitos corporativos y personas con personalidad fuerte.',
            care: ['Agua abundante.', 'Evitar calor extremo.', 'Cortar tallos cada 2 días.']
        },
        {
            id: 18,
            name: 'Sunset Glow',
            type: 'Rosa Orange Crush',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/orange-crush.jpg',
            category: 'yellows',
            price: 129900,
            description: 'El naranja por excelencia. Orange Crush ofrece un tono naranja puro, saturado y brillante. Es sinónimo de diversión, creatividad y éxito vibrante.',
            occasion: 'Fiestas temáticas, Halloween, Otoño y celebraciones creativas.',
            care: ['Hidratación constante.', 'Nutriente floral necesario.', 'Ambiente fresco.']
        },
        {
            id: 19,
            name: 'Golden Hour',
            type: 'Rosa Brighton',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/Super-Sun_01.jpg',
            category: 'yellows',
            price: 124900,
            description: 'Amarillo sol radiante. Brighton es una rosa amarilla pura, grande y luminosa. Representa amistad, alegría y nuevos comienzos con una luz propia inigualable.',
            occasion: 'Día de la Amistad, graduaciones y para desear buen camino.',
            care: ['Retirar hojas bajas.', 'Agua limpia siempre.', 'Evitar luz solar directa fuerte.']
        },
        {
            id: 20,
            name: 'High Pure',
            type: 'Rosa High Pure',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/high-and-pure.jpg',
            category: 'yellows',
            price: 129900,
            description: 'Contraste elegante. High Pure combina un blanco puro en el centro con un verde fresco y vibrante en los pétalos exteriores. Una rosa moderna y chic para gustos refinados.',
            occasion: 'Decoración moderna, oficinas y regalos para arquitectos/diseñadores.',
            care: ['Agua fría.', 'Cambio diario de agua.', 'Corte en diagonal.']
        },

        // Lavenders & Unique
        {
            id: 21,
            name: 'Mystic Purple',
            type: 'Rosa Moody Blues',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/moody-blues.jpg',
            category: 'vintage',
            price: 139900,
            isExclusive: true,
            description: 'Drama en color lavanda. Moody Blues ofrece un tono lila intenso y saturado con bordes oscuros, creando un efecto de profundidad y misterio fascinante. Única en su clase.',
            occasion: 'Eventos nocturnos de lujo, regalos originales y amantes del morado.',
            care: ['Hidratación crítica.', 'Evitar corrientes de aire.', 'Cortar tallos bajo agua.']
        },
        {
            id: 22,
            name: 'Lavender Dream',
            type: 'Rosa Jacaranda',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/jacaranda.jpg',
            category: 'vintage',
            price: 134900,
            description: 'Fucsia violáceo vibrante. Jacaranda camina entre el rosa intenso y el lila. Es una rosa con carácter, perfecta para quienes buscan algo fuera de lo común pero hermoso.',
            occasion: 'Cumpleaños, moda y eventos artísticos.',
            care: ['Mucha agua.', 'Nutriente floral.', 'Luz indirecta.']
        },
        {
            id: 23,
            name: 'Blueberry Frost',
            type: 'Rosa Blueberry',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/blueberry_02-1.jpg',
            category: 'vintage',
            price: 139900,
            isNew: true,
            description: 'El tono exacto del arándano. Blueberry es una rosa lavanda oscura, casi púrpura, con una textura rica y sofisticada. Aporta un toque de realeza y calma.',
            occasion: 'Meditación, espacios de relajación y regalos sobrios.',
            care: ['Agua fresca y limpia.', 'Recorte regular de tallos.', 'Ambiente fresco.']
        },
        {
            id: 24,
            name: 'Ocean Mist',
            type: 'Rosa Kendal',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/kendal.jpg',
            category: 'vintage',
            price: 134900,
            description: 'Lavanda suave y etéreo. Kendal es una rosa de color lila pastel, delicada y soñadora. Perfecta para composiciones florales que buscan transmitir serenidad y fantasía.',
            occasion: 'Quinceañeras, baby showers y decoraciones etéreas.',
            care: ['Trato delicado.', 'Agua limpia diaria.', 'Evitar calor.']
        },

        // Peaches & Earth Tones
        {
            id: 25,
            name: 'Vintage Peach',
            type: 'Rosa Kahala',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/Almah_01.jpg',
            category: 'vintage',
            price: 139900,
            description: 'El encanto vintage hecho flor. Kahala presenta una mezcla única de durazno, crema y terracota, con una apertura en forma de jardín. La favorita de las novias boho-chic.',
            occasion: 'Bodas estilo boho, decoración rústica y otoño.',
            care: ['Retirar pétalos externos con cuidado.', 'Mucha agua.', 'Luz natural.']
        },
        {
            id: 26,
            name: 'Sandstorm',
            type: 'Rosa Quicksand',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/cuenca.jpg',
            category: 'vintage',
            price: 134900,
            description: 'Arena rosa del desierto. Quicksand es famosa por su color beige arena con toques rosados sutiles. Neutra, elegante y moderna, combina con absolutamente todo.',
            occasion: 'Bodas modernas, decoración minimalista y eventos corporativos.',
            care: ['Hidratación media.', 'Cortar tallos en bisel.', 'Ambiente libre de humo.']
        },
        {
            id: 27,
            name: 'Sweet Nectar',
            type: 'Rosa Be Sweet',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/besweet.jpg',
            category: 'pinks',
            price: 129900,
            description: 'Dulcura en rosa pálido con bordes oscuros o toques crema. Be Sweet es tierna y romántica, con un aire de inocencia y dulzura clásica.',
            occasion: 'Nacimientos, regalos para niñas y detalles dulces.',
            care: ['Agua limpia.', 'Nutriente floral.', 'Evitar sol fuerte.']
        },
        {
            id: 28,
            name: 'Impressionist',
            type: 'Rosa Impression',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/impression.jpg',
            category: 'vintage',
            price: 129900,
            description: 'Arte en cada pétalo. Impression suele presentar bicolores o texturas que parecen pintadas a mano, ofreciendo una experiencia visual rica y texturizada.',
            occasion: 'Regalos para artistas, galerías y personas creativas.',
            care: ['Cambiar agua cada 2 días.', 'Recortar tallos.', 'Luz indirecta.']
        },
        {
            id: 29,
            name: 'Gemstone',
            type: 'Rosa Gemstone',
            image: 'https://casuparoses.com/wp-content/uploads/2024/11/gemstone.jpg',
            category: 'vintage',
            price: 129900,
            description: 'Una joya floral. Gemstone brilla con tonos rosados vibrantes y una forma perfecta. Es una rosa duradera y fuerte, como una piedra preciosa tallada.',
            occasion: 'Aniversarios importantes, joyas florales y eventos de lujo.',
            care: ['Hidratación profunda.', 'Agua fría.', 'Cortar 2cm cada 3 días.']
        },
        {
            id: 30,
            name: 'Stardust',
            type: 'Rosa Stardust',
            image: 'https://casuparoses.com/wp-content/uploads/2024/12/stardust.jpg',
            category: 'yellows',
            price: 134900,
            isNew: true,
            description: 'Polvo de estrellas dorado. Stardust es una rosa amarilla intensa, a veces con bordes rojizos difusos, que brilla con luz propia. Aporta felicidad y opulencia.',
            occasion: 'Celebraciones de Año Nuevo, éxitos dorados y fiestas nocturnas.',
            care: ['Mucha agua necesaria.', 'Evitar calor radiante.', 'Nutriente floral.']
        }
    ];

    // --- SEARCH & CART LOGIC ---
    const productGrid = document.querySelector('.product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    // Cart State
    let cart = [];
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeSidebar = document.querySelector('.close-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCountElement = document.querySelector('.cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Helper: Format Price
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
    };

    // --- Global Pricing ---
    const PRICE_DOCENA = 40000;

    // --- RENDER PRODUCTS ---
    function renderProducts(items) {
        if (!productGrid) return;
        productGrid.innerHTML = '';

        if (items.length === 0) {
            productGrid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">No encontramos flores con ese nombre 🥀</div>';
            return;
        }

        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card animate-on-scroll';

            let badgeHTML = '';
            if (product.isBestSeller) badgeHTML = '<span class="badge badge-bestseller">Más Vendido</span>';
            else if (product.isNew) badgeHTML = '<span class="badge badge-new">Nuevo</span>';
            else if (product.isExclusive) badgeHTML = '<span class="badge badge-exclusive">Exclusivo</span>';
            else badgeHTML = '<span class="badge badge-quality">Tipo Exportación</span>';

            card.innerHTML = `
                <div class="product-image">
                    ${badgeHTML}
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=2187&auto=format&fit=crop'">
                    <div class="card-overlay">
                        <button class="btn-quick-view" onclick="openModal(${product.id})">Ver Detalles</button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-type">${product.type} x12</p>
                    <div class="product-meta">
                        <p class="product-price">${formatPrice(PRICE_DOCENA)}</p>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})">🛒</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // --- FILTER LOGIC ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            if (category === 'all') {
                renderProducts(products);
            } else {
                renderProducts(products.filter(p => p.category === category));
            }
        });
    });

    // --- SEARCH LOGIC (Live Dropdown) ---
    const searchResults = document.getElementById('search-results');

    if (searchBtn && searchInput && searchResults) {
        // Search Toggle Logic (Classic)
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchInput.classList.toggle('active');
                if (searchInput.classList.contains('active')) {
                    searchInput.focus();
                } else {
                    searchResults.style.display = 'none';
                }
            });
        }

        // Live Search Input + Focus Suggestions
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length === 0) {
                // Show "Popular" or "All Varieties" on empty focus
                displaySearchResults(products.slice(0, 5)); // Show first 5 as suggestions
            }
        });

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            if (term.length === 0) {
                // Keep showing suggestions if empty
                displaySearchResults(products.slice(0, 5));
                return;
            }

            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.type.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            );

            displaySearchResults(filtered);
        });

        // Display Results in Dropdown
        function displaySearchResults(items) {
            searchResults.innerHTML = '';

            if (items.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No se encontraron flores 🥀</div>';
            } else {
                items.forEach(product => {
                    const div = document.createElement('div');
                    div.className = 'search-item';
                    div.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="search-item-info">
                            <h4>${product.name}</h4>
                            <p>${product.type}</p>
                            <span>${formatPrice(PRICE_DOCENA)}</span> <!-- Fixed Price -->
                        </div>
                    `;
                    div.addEventListener('click', () => {
                        openModal(product.id);
                        searchResults.style.display = 'none'; // Close after selection
                        searchInput.value = ''; // Optional: clear input
                    });
                    searchResults.appendChild(div);
                });
            }
            searchResults.style.display = 'block';
        }

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                searchResults.style.display = 'none';
            }
        });
    }

    // --- CART FUNCTIONS ---
    function toggleCart() {
        if (cartModal) cartModal.classList.toggle('show');
    }

    if (cartBtn) cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart();
    });

    if (closeSidebar) closeSidebar.addEventListener('click', toggleCart);

    // Make available globally for inline onclicks
    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        if (product) {
            // Updated logic: Single default variant (Docena), Price 40k
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    ...product,
                    quantity: 1,
                    price: PRICE_DOCENA // Use new fixed price
                });
            }
            updateCartUI();
            if (cartModal && !cartModal.classList.contains('show')) {
                toggleCart();
            }
        }
    };

    window.increaseQuantity = function (id) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity++;
            updateCartUI();
        }
    };

    window.decreaseQuantity = function (id) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity--;
            if (item.quantity <= 0) {
                cart = cart.filter(i => i.id !== id);
            }
            updateCartUI();
        }
    };

    window.removeFromCart = function (id) {
        cart = cart.filter(item => item.id !== id);
        updateCartUI();
    };

    function updateCartUI() {
        // Calculate Total Items
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Update Count
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
            cartCountElement.classList.add('bump');
            setTimeout(() => cartCountElement.classList.remove('bump'), 300);
        }

        // Update Items and Total
        if (cartItemsContainer && cartTotalPrice) {
            cartItemsContainer.innerHTML = '';
            let total = 0;

            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío 🥀</div>';
            } else {
                cart.forEach((item) => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;

                    const itemEl = document.createElement('div');
                    itemEl.className = 'cart-item';
                    itemEl.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-type" style="font-size: 0.8rem; color: #666;">Docena (12 Tallos)</div>
                            <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                            <div class="cart-controls">
                                <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                <span class="qty-val">${item.quantity}</span>
                                <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                            </div>
                        </div>
                        <div class="cart-item-total">
                            $${itemTotal.toLocaleString()}
                        </div>
                        <div class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Eliminar">&times;</div>
                    `;
                    cartItemsContainer.appendChild(itemEl);
                });
            }
            cartTotalPrice.textContent = '$' + total.toLocaleString();
        }
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return;
            let message = "Hola JK IMPERIO, deseo realizar el siguiente pedido: \n\n";
            let total = 0;
            cart.forEach(item => {
                const subtotal = item.price * item.quantity;
                message += `▪️ *(${item.quantity})* ${item.name} [Docena] - $${subtotal.toLocaleString()}\n`;
                total += subtotal;
            });
            message += `\n🌺 *TOTAL A PAGAR: $${total.toLocaleString()}*`;
            window.open(`https://wa.me/573002963698?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // --- MODAL LOGIC (Global) ---
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close-modal');
    // Model elements
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalDesc = document.getElementById('modal-desc');
    const modalOccasion = document.getElementById('modal-occasion');
    const modalCare = document.getElementById('modal-care');
    const modalAddCart = document.getElementById('modal-add-cart'); // The 'Add to Cart' inside modal
    const modalPrice = document.getElementById('modal-price'); // Price inside modal if exists

    // Clean up any stale variant container if it exists
    const staleVariantContainer = document.getElementById('variant-container');
    if (staleVariantContainer) {
        staleVariantContainer.remove();
    }

    window.openModal = function (id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        if (modalImg) modalImg.src = product.image;
        if (modalTitle) modalTitle.textContent = product.name;
        if (modalType) modalType.textContent = product.type;
        if (modalDesc) modalDesc.textContent = product.description;
        if (modalOccasion) modalOccasion.textContent = product.occasion || 'Perfecto para cualquier ocasión especial.';

        // Populate Care Instructions
        if (modalCare) {
            modalCare.innerHTML = '';
            const careTips = product.care || ['Cambiar agua cada 2 días', 'Cortar tallos en diagonal', 'Evitar sol directo'];
            careTips.forEach(tip => {
                const li = document.createElement('li');
                li.textContent = tip;
                modalCare.appendChild(li);
            });
        }

        // Modal Price (Fixed)
        if (modalPrice) {
            modalPrice.textContent = formatPrice(PRICE_DOCENA);
        }

        // Configure "Add to Cart" button in modal
        if (modalAddCart) {
            modalAddCart.onclick = function () {
                window.addToCart(product.id);
                if (modal) {
                    modal.classList.remove('show');
                    setTimeout(() => modal.style.display = 'none', 300);
                }
            };
            modalAddCart.textContent = 'Agregar al Carrito 🛒';
        }

        if (modal) {
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('show'), 10);
        }
    };

    if (closeModal) {
        closeModal.onclick = () => {
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.style.display = 'none', 300);
            }
        };
    }

    window.onclick = (e) => {
        if (modal && e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
        if (cartModal && e.target === cartModal) {
            toggleCart();
        }
    };

    // Initial Render
    renderProducts(products);

});

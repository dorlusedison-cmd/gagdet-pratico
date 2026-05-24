/* =========================
   ADMIN LOGIN SIMPLES
========================= */

const ADMIN_EMAIL = "admin@gadgetpratico.com";
const ADMIN_PASSWORD = "123456";

function adminLogin(event){
  event.preventDefault();

  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const message = document.getElementById("loginMessage");

  if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
    localStorage.setItem("isAdminLoggedIn", "true");
    window.location.href = "dashboard.html";
  }else{
    message.innerText = "Email ou senha incorretos.";
  }
}

function protectAdminPage(){
  const logged = localStorage.getItem("isAdminLoggedIn");

  if(logged !== "true"){
    window.location.href = "login.html";
  }
}

function logoutAdmin(){
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "login.html";
}

function isAdmin(){
  return localStorage.getItem("isAdminLoggedIn") === "true";
}

/* =========================
   PRODUCTS
========================= */

const defaultProducts = [
  {
  id: 1,
  name: "Mini Projetor Portátil HY300 4K",
  category: "Gadgets",
  price: "156,84",
  image: "https://m.media-amazon.com/images/I/81xR9y1bMtL._AC_SX522_.jpg",
  description: "Transforme qualquer parede em um cinema com este mini projetor HY300 4K. Com Wifi 6, Bluetooth 5.0, Android 11 e até 130 polegadas de projeção, ele entrega uma experiência incrível para filmes, jogos e apresentações.",
  linkType: "amazon",
  link: "https://amzn.to/4uxM0zE"
  },
  {
  id: 2,
  name: "AQUECEDOR PAQ2000B 127V",
  category: "Gadgets para Casa",
  price: "239,42",
  image: "https://m.media-amazon.com/images/I/51Evwde2p0L._AC_SX679_.jpg",
  description: "Deixe sua casa mais aconchegante nos dias frios com o aquecedor PAQ2000B 127V. Compacto, potente e moderno, ele aquece o ambiente rapidamente, proporcionando mais conforto e praticidade para o seu dia a dia.",
  linkType: "amazon",
  link: "https://amzn.to/3Rscl3x"
},
  {
  id: 3,
  name: "Dreo Aquecedor de Espaço 1500W",
  category: "Gadgets para Casa",
  price: "446,98",
  image: "https://m.media-amazon.com/images/I/719wLHRMiqL._AC_SX679_.jpg",
  description: "Aqueça seu ambiente com rapidez e eficiência usando o aquecedor portátil Dreo 1500W. Com tecnologia de cerâmica PTC, controle remoto, oscilação de 70°, termostato inteligente e temporizador de 12 horas, ele oferece conforto, segurança e praticidade para sua casa ou escritório.",
  linkType: "amazon",
  link: "https://amzn.to/3PoZj6i"
},
   {
  id: 4,
  name: "Controle Sem Fio Microsoft Xbox - Branco",
  category: "Setup Gamer",
  price: "341,05",
  image: "https://m.media-amazon.com/images/I/61qjDq2Eg9L._AC_SX679_.jpg",
  description: "Leve sua experiência gamer para outro nível com o Controle Sem Fio Microsoft Xbox. Com design moderno, conforto ergonômico e resposta ultra rápida, ele é perfeito para jogar por horas no Xbox, PC e dispositivos compatíveis.",
  linkType: "amazon",
  link: "https://amzn.to/4vbSjJg"
},
   {
  id: 5,
  name: "Notebook Acer Nitro V15 ANV15-52-51E4 Intel Core i5 16GB 512GB SSD RTX 4050",
  category: "Setup Gamer",
  price: "6.499,00",
  image: "https://m.media-amazon.com/images/I/51Six8vrr3L._AC_SX522_.jpg",
  description: "Domine qualquer jogo ou tarefa pesada com o poderoso Acer Nitro V15. Equipado com processador Intel Core i5, 16GB de RAM, SSD ultrarrápido de 512GB e placa de vídeo RTX 4050, ele entrega desempenho extremo, gráficos impressionantes e uma experiência fluida com tela IPS Full HD de 165Hz.",
  linkType: "amazon",
  link: "https://amzn.to/3PFwl1S"
},
   {
  id: 6,
  name: "Filtro de Linha iCLAMPER Energia 5 com Proteção contra Surtos Elétricos",
  category: "Setup Gamer",
  price: "61,99",
  image: "https://m.media-amazon.com/images/I/513zBX7OWdL._AC_SX522_.jpg",
  description: "Proteja seus aparelhos eletrônicos com segurança e eficiência usando o filtro de linha iCLAMPER Energia 5. Com proteção contra surtos elétricos, 5 tomadas e design moderno, ele é ideal para PC Gamer, notebook, monitor, PS5, roteador, Alexa e muito mais.",
  linkType: "amazon",
  link: "https://amzn.to/4wMeJ5l"
},
   {
  id: 7,
  name: "Carregador Portátil Mini Power Bank 10000mAh Com 02 Saídas Tipo-C / Lightning",
  category: "Acessórios Celular",
  price: "31,99",
  image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mf41ipxk0buvde.webp",
  description: "Nunca fique sem bateria novamente com este Mini Power Bank de 10000mAh. Compacto, leve e fácil de levar para qualquer lugar, ele conta com saídas Tipo-C e Lightning, ideal para carregar seu celular com rapidez e praticidade no dia a dia.",
  linkType: "shopee",
  link: "https://s.shopee.com.br/6Ai73bIAKp"
},
   {
  id: 8,
  name: "Balança Bioimpedância Digital Profissional via Bluetooth",
  category: "Tecnologia",
  price: "32,98",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-8260y-mkwtzunpb4eedc@resize_w450_nl.webp",
  description: "Monitore sua saúde de forma inteligente com esta balança digital de bioimpedância via Bluetooth. Ela analisa peso, gordura corporal, massa muscular e muito mais, sincronizando tudo diretamente no seu celular para acompanhar sua evolução com praticidade.",
  linkType: "shopee",
  link: "https://s.shopee.com.br/LkK7Dt7rz"
},
   {
  id: 9,
  name: "Havit Headphone Gamer H2002d com Microfone",
  category: "Setup Gamer",
  price: "139,99",
  image: "https://m.media-amazon.com/images/I/71+kXnOiM2L._AC_SX522_.jpg",
  description: "Mergulhe nos seus jogos com o Headphone Gamer Havit H2002d. Equipado com falantes potentes de 53mm, áudio imersivo e microfone de alta qualidade, ele oferece conforto extremo e comunicação clara para longas sessões de gameplay no PC, PS4 e Xbox.",
  linkType: "amazon",
  link: "https://amzn.to/4wS3qIU"
},
   {
  id: 10,
  name: "Mouse Gamer Logitech G203 LIGHTSYNC RGB",
  category: "Setup Gamer",
  price: "99,90",
  image: "https://m.media-amazon.com/images/I/512M0CAOftL._AC_SX522_.jpg",
  description: "Eleve sua gameplay com o Logitech G203 LIGHTSYNC RGB. Com sensor preciso de até 8.000 DPI, iluminação RGB personalizável e 6 botões programáveis, este mouse gamer oferece velocidade, conforto e desempenho profissional para qualquer tipo de jogo.",
  linkType: "amazon",
  link: "https://amzn.to/4wMieIL"
},
];

function getProducts(){
  let saved = localStorage.getItem("products");

  if(!saved){
    localStorage.setItem("products", JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  return JSON.parse(saved);
}

function saveProducts(products){
  localStorage.setItem("products", JSON.stringify(products));
}

function getLinkLabel(type){
  const labels = {
    amazon: "Comprar na Amazon",
    shopee: "Comprar na Shopee",
    mercado: "Ver no Mercado Livre",
    youtube: "Ver no YouTube",
    site: "Abrir site",
    outro: "Abrir link"
  };

  return labels[type] || "Abrir link";
}

function getLinkClass(type){
  const classes = {
    amazon: "amazon",
    shopee: "shopee",
    mercado: "mercado",
    youtube: "mercado",
    site: "mercado",
    outro: "mercado"
  };

  return classes[type] || "mercado";
}

function renderProducts(containerId, category = "Todos"){
  const container = document.getElementById(containerId);

  if(!container) return;

  let products = getProducts();

  if(category !== "Todos"){
    products = products.filter(p => p.category === category);
  }

  container.innerHTML = products.map(p => {
    const type = p.linkType || "outro";
    const link = p.link || p.amazon || p.shopee || p.mercado || "#";
    const description = p.description || "";

    return `
      <div class="card product-card">
        <img src="${p.image}" alt="${p.name}">
        <div class="content">
          <h3 title="${p.name}">${p.name}</h3>
          <div class="price">R$ ${p.price}</div>

          <p class="product-description collapsed">${description}</p>
          ${description.length > 95 ? `
            <button class="more-btn" type="button" onclick="toggleDescription(this)">
              Ver mais
            </button>
          ` : ""}

          <div class="buy">
            <a class="${getLinkClass(type)}" href="${link}" target="_blank">
              Abrir link
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleDescription(button){
  const description = button.previousElementSibling;

  if(!description) return;

  description.classList.toggle("collapsed");

  if(description.classList.contains("collapsed")){
    button.innerText = "Ver mais";
  }else{
    button.innerText = "Ver menos";
  }
}

function renderDashboard(){
  const tbody = document.getElementById("productTable");

  if(!tbody) return;

  const products = getProducts();

  tbody.innerHTML = products.map(p => {
    const type = p.linkType || "outro";
    const link = p.link || p.amazon || p.shopee || p.mercado || "#";

    return `
      <tr>
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>R$ ${p.price}</td>
        <td>${getLinkLabel(type)}</td>
        <td class="actions">
          <button class="edit" onclick="editProduct(${p.id})">Editar</button>
          <button class="delete" onclick="deleteProduct(${p.id})">Apagar</button>
        </td>
      </tr>
    `;
  }).join("");

  const total = document.getElementById("totalProducts");
  if(total) total.innerText = products.length;
}

function addProduct(event){
  event.preventDefault();

  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const products = getProducts();

  const product = {
    id: Date.now(),
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    linkType: document.getElementById("linkType").value,
    link: document.getElementById("productLink").value
  };

  products.push(product);
  saveProducts(products);

  event.target.reset();
  renderDashboard();

  alert("Produto adicionado com sucesso!");
}

function deleteProduct(id){
  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  if(!confirm("Deseja apagar este produto?")) return;

  const products = getProducts().filter(p => p.id !== id);

  saveProducts(products);
  renderDashboard();
}

function editProduct(id){
  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const products = getProducts();
  const p = products.find(item => item.id === id);

  if(!p) return;

  document.getElementById("name").value = p.name;
  document.getElementById("category").value = p.category;
  document.getElementById("price").value = p.price;
  document.getElementById("image").value = p.image;
  document.getElementById("description").value = p.description;
  document.getElementById("linkType").value = p.linkType || "outro";
  document.getElementById("productLink").value = p.link || p.amazon || p.shopee || p.mercado || "";

  const updatedProducts = products.filter(item => item.id !== id);
  saveProducts(updatedProducts);

  renderDashboard();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   BLOGS
========================= */

const defaultBlogs = [
  {
  id: 1,
  title: "Por que a Balança Bioimpedância virou tendência em 2026?",
  image: "https://down-br.img.susercontent.com/file/sg-11134201-8260y-mkwtzunpb4eedc@resize_w450_nl.webp",
  description: "Descubra como essa balança inteligente está ajudando milhares de pessoas a cuidarem melhor da saúde.",
  content: "A tecnologia chegou até na forma de cuidar da saúde. A Balança Bioimpedância Digital Profissional via Bluetooth não mostra apenas o peso, ela também analisa gordura corporal, massa muscular, IMC, metabolismo e vários outros dados importantes diretamente no seu celular. Com conexão Bluetooth, você acompanha toda sua evolução em tempo real através do aplicativo, tornando o processo muito mais prático e motivador. Ideal para quem quer emagrecer, ganhar massa muscular ou simplesmente manter uma rotina mais saudável.",
  linkType: "shopee",
  link: "https://s.shopee.com.br/LkK7Dt7rz"
  },
  {
    id: 2,
    title: "Como montar um setup gamer barato",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop",
    description: "Dicas para economizar e comprar certo.",
    content: "Escolha teclado, mouse, headset e iluminação com bom custo-benefício.",
    linkType: "shopee",
    link: "https://shopee.com.br"
  }
];

function getBlogs(){
  let saved = localStorage.getItem("blogs");

  if(!saved){
    localStorage.setItem("blogs", JSON.stringify(defaultBlogs));
    return defaultBlogs;
  }

  return JSON.parse(saved);
}

function saveBlogs(blogs){
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function renderBlogs(containerId){
  const container = document.getElementById(containerId);

  if(!container) return;

  const blogs = getBlogs();

  if(!blogs.length){
    container.innerHTML = `<div class="no-results">Nenhum artigo publicado ainda.</div>`;
    return;
  }

  container.innerHTML = blogs.map(b => {
    const image = b.image || "";
    const title = safeText ? safeText(b.title) : b.title;
    const description = safeText ? safeText(b.description) : b.description;

    return `
      <a class="card blog-card" href="artigo.html?id=${b.id}">
        ${image ? `<img src="${image}" alt="${title}">` : ""}
        <div class="content">
          <span class="blog-label">Artigo</span>
          <h3>${title}</h3>
          <p>${description}</p>
</div>
      </a>
    `;
  }).join("");
}

function renderArticleDetail(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const blogs = getBlogs();
  const article = blogs.find(b => Number(b.id) === id);

  if(!article){
    container.innerHTML = `
      <div class="form-box text-box">
        <span class="kicker">Blog</span>
        <h2>Artigo não encontrado</h2>
        <p>Volte para o blog e escolha outro artigo.</p>
        <br>
        <a class="btn primary" href="blog.html">Voltar ao blog</a>
      </div>
    `;
    return;
  }

  const type = article.linkType || "outro";
  const link = article.link || "";
  const title = safeText(article.title);
  const description = safeText(article.description || "");
  const content = safeText(article.content || "").replace(/\n/g,"<br><br>");

  document.title = `${article.title} - Gadget Prático`;

  container.innerHTML = `
    <article class="article-page">
      ${article.image ? `<img class="article-image" src="${article.image}" alt="${title}">` : ""}

      <span class="kicker">Blog</span>
      <h1 class="article-title">${title}</h1>
      <p class="article-description">${description}</p>

      <div class="article-content">
        ${content}
      </div>

      ${link ? `
        <div class="buy article-buy">
          <a class="${getLinkClass(type)}" href="${link}" target="_blank" rel="nofollow sponsored noopener">
            ${getCtaLabel ? getCtaLabel(type) : getLinkLabel(type)}
          </a>
        </div>
      ` : ""}

      <br><br>
      <a class="btn dark" href="blog.html">← Voltar ao blog</a>
    </article>
  `;
}

function renderBlogDashboard(){
  const tbody = document.getElementById("blogTable");

  if(!tbody) return;

  const blogs = getBlogs();

  tbody.innerHTML = blogs.map(b => `
    <tr>
      <td>${b.title}</td>
      <td>${getLinkLabel(b.linkType || "outro")}</td>
      <td class="actions">
        <button class="edit" onclick="editBlog(${b.id})">Editar</button>
        <button class="delete" onclick="deleteBlog(${b.id})">Apagar</button>
      </td>
    </tr>
  `).join("");

  const total = document.getElementById("totalBlogs");
  if(total) total.innerText = blogs.length;
}

function addBlog(event){
  event.preventDefault();

  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const blogs = getBlogs();

  const blog = {
    id: Date.now(),
    title: document.getElementById("blogTitle").value,
    image: document.getElementById("blogImage").value,
    description: document.getElementById("blogDescription").value,
    content: document.getElementById("blogContent").value,
    linkType: document.getElementById("blogLinkType").value,
    link: document.getElementById("blogLink").value
  };

  blogs.push(blog);
  saveBlogs(blogs);

  event.target.reset();
  renderBlogDashboard();

  alert("Blog publicado com sucesso!");
}

function deleteBlog(id){
  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  if(!confirm("Deseja apagar este blog?")) return;

  const blogs = getBlogs().filter(b => b.id !== id);

  saveBlogs(blogs);
  renderBlogDashboard();
}

function editBlog(id){
  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const blogs = getBlogs();
  const b = blogs.find(item => item.id === id);

  if(!b) return;

  document.getElementById("blogTitle").value = b.title;
  document.getElementById("blogImage").value = b.image || "";
  document.getElementById("blogDescription").value = b.description;
  document.getElementById("blogContent").value = b.content;
  document.getElementById("blogLinkType").value = b.linkType || "outro";
  document.getElementById("blogLink").value = b.link || "";

  const updatedBlogs = blogs.filter(item => item.id !== id);
  saveBlogs(updatedBlogs);

  renderBlogDashboard();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   LIGHT / DARK MODE
========================= */

document.addEventListener("DOMContentLoaded", function(){
  const themeBtn = document.querySelector(".theme");

  if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
  }

  if(themeBtn){
    themeBtn.addEventListener("click", function(){
      document.body.classList.toggle("light-mode");

      if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme", "light");
      }else{
        localStorage.setItem("theme", "dark");
      }
    });
  }
});


/* =========================
TOP SITE FEATURES: SEARCH, BADGES, PRODUCT DETAIL
========================= */

function safeText(value){
  return String(value || "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function getCtaLabel(type){
  const labels = {
    amazon: "Ver oferta na Amazon",
    shopee: "Ver oferta na Shopee",
    mercado: "Conferir no Mercado Livre",
    youtube: "Ver no YouTube",
    site: "Abrir site oficial",
    outro: "Ver oferta agora"
  };
  return labels[type] || "Ver oferta agora";
}

function getProductBadge(product, index){
  if(product.badge) return product.badge;
  const badges = ["Melhor escolha","Mais vendido","Custo-benefício","Oferta quente","Top recomendado"];
  return badges[index % badges.length];
}

function renderProductCards(container, products){
  if(!container) return;

  if(!products.length){
    container.innerHTML = `<div class="no-results">Nenhum produto encontrado. Tente buscar por outro nome ou categoria.</div>`;
    return;
  }

  container.innerHTML = products.map((p, index) => {
    const type = p.linkType || "outro";
    const link = p.link || p.amazon || p.shopee || p.mercado || "#";
    const description = p.description || "";
    const badge = getProductBadge(p, index);

    return `
      <div class="card product-card" data-name="${safeText(p.name).toLowerCase()}" data-category="${safeText(p.category).toLowerCase()}" data-description="${safeText(description).toLowerCase()}">
        <span class="product-badge">${safeText(badge)}</span>
        <img src="${p.image}" alt="${safeText(p.name)}">
        <div class="content">
          <h3 title="${safeText(p.name)}">${safeText(p.name)}</h3>
          <div class="price">R$ ${safeText(p.price)}</div>

          <p class="product-description collapsed">${safeText(description)}</p>
          ${description.length > 95 ? `
            <button class="more-btn" type="button" onclick="toggleDescription(this)">Ver mais</button>
          ` : ""}

          <div class="buy">
            <a class="${getLinkClass(type)}" href="${link}" target="_blank" rel="nofollow sponsored noopener">
              ${getCtaLabel(type)}
            </a>
            <a class="detail-link" href="produto.html?id=${p.id}">Ver detalhes</a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderProducts(containerId, category = "Todos"){
  const container = document.getElementById(containerId);
  if(!container) return;

  let products = getProducts();

  if(category !== "Todos"){
    products = products.filter(p => p.category === category);
  }

  container.dataset.category = category;
  window.lastProductRender = { containerId, category };

  renderProductCards(container, products);
  setupProductSearch(containerId, category);
}

function setupProductSearch(containerId, category){
  const input = document.getElementById("searchInput");
  const container = document.getElementById(containerId);
  if(!input || !container || input.dataset.ready === "true") return;

  input.dataset.ready = "true";
  input.addEventListener("input", function(){
    const term = this.value.trim().toLowerCase();
    let products = getProducts();

    if(category !== "Todos"){
      products = products.filter(p => p.category === category);
    }

    if(term){
      products = products.filter(p =>
        String(p.name || "").toLowerCase().includes(term) ||
        String(p.category || "").toLowerCase().includes(term) ||
        String(p.description || "").toLowerCase().includes(term)
      );
    }

    renderProductCards(container, products);
  });
}

function addProduct(event){
  event.preventDefault();

  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const products = getProducts();

  const product = {
    id: Date.now(),
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    description: document.getElementById("description").value,
    badge: document.getElementById("badge") ? document.getElementById("badge").value : "Melhor escolha",
    linkType: document.getElementById("linkType").value,
    link: document.getElementById("productLink").value
  };

  products.push(product);
  saveProducts(products);

  event.target.reset();
  renderDashboard();

  alert("Produto adicionado com sucesso!");
}

function renderDashboard(){
  const tbody = document.getElementById("productTable");
  if(!tbody) return;

  const products = getProducts();

  tbody.innerHTML = products.map(p => {
    const type = p.linkType || "outro";

    return `
      <tr>
        <td>${safeText(p.name)}</td>
        <td>${safeText(p.category)}</td>
        <td>R$ ${safeText(p.price)}</td>
        <td>${getCtaLabel(type)}</td>
        <td class="actions">
          <button class="edit" onclick="editProduct(${p.id})">Editar</button>
          <button class="delete" onclick="deleteProduct(${p.id})">Apagar</button>
        </td>
      </tr>
    `;
  }).join("");

  const total = document.getElementById("totalProducts");
  if(total) total.innerText = products.length;
}

function editProduct(id){
  if(!isAdmin()){
    window.location.href = "login.html";
    return;
  }

  const products = getProducts();
  const p = products.find(item => item.id === id);

  if(!p) return;

  document.getElementById("name").value = p.name;
  document.getElementById("category").value = p.category;
  document.getElementById("price").value = p.price;
  document.getElementById("image").value = p.image;
  document.getElementById("description").value = p.description;
  if(document.getElementById("badge")) document.getElementById("badge").value = p.badge || "Melhor escolha";
  document.getElementById("linkType").value = p.linkType || "outro";
  document.getElementById("productLink").value = p.link || p.amazon || p.shopee || p.mercado || "";

  saveProducts(products.filter(item => item.id !== id));
  renderDashboard();
  window.scrollTo({ top:0, behavior:"smooth" });
}

function renderProductDetail(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const products = getProducts();
  const product = products.find(p => Number(p.id) === id) || products[0];

  if(!product){
    container.innerHTML = `<div class="no-results">Produto não encontrado.</div>`;
    return;
  }

  const type = product.linkType || "outro";
  const link = product.link || product.amazon || product.shopee || product.mercado || "#";
  const benefits = [
    "Produto selecionado pela curadoria Gadget Prático",
    "Boa opção para quem busca praticidade e custo-benefício",
    "Confira preço, prazo e disponibilidade diretamente na loja"
  ];

  document.title = `${product.name} - Gadget Prático`;

  container.innerHTML = `
    <div class="product-detail">
      <img src="${product.image}" alt="${safeText(product.name)}">
      <div class="product-detail-card">
        <span class="kicker">${safeText(product.category || "Produto recomendado")}</span>
        <h1>${safeText(product.name)}</h1>
        <div class="detail-price">R$ ${safeText(product.price)}</div>
        <p class="page-desc">${safeText(product.description || "")}</p>

        <div class="benefits">
          ${benefits.map(b => `<div class="benefit">✓ ${b}</div>`).join("")}
        </div>

        <a class="cta-main" href="${link}" target="_blank" rel="nofollow sponsored noopener">
          ${getCtaLabel(type)}
        </a>
      </div>
    </div>
  `;
}


/* =========================
VIRAL BRAND FEATURES
========================= */

function renderHomeShowcases(){
  const products = getProducts();
  const viral = products.filter((p, i) => {
    const text = `${p.name || ""} ${p.category || ""} ${p.badge || ""}`.toLowerCase();
    return text.includes("viral") || text.includes("oferta") || text.includes("mais vendido") || i < 4;
  }).slice(0,4);

  const best = products.filter((p, i) => {
    const text = `${p.name || ""} ${p.category || ""} ${p.badge || ""}`.toLowerCase();
    return text.includes("melhor") || text.includes("custo") || text.includes("top") || i < 8;
  }).slice(0,4);

  const viralContainer = document.getElementById("viralProducts");
  const bestContainer = document.getElementById("bestSellerProducts");

  if(viralContainer) renderProductCards(viralContainer, viral.length ? viral : products.slice(0,4));
  if(bestContainer) renderProductCards(bestContainer, best.length ? best : products.slice(0,4));
}

function subscribeNewsletter(event){
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input[type='email']");
  const message = form.parentElement.querySelector("small") || document.getElementById("newsletterMessage");

  if(!input) return;

  const emails = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
  if(!emails.includes(input.value)) emails.push(input.value);
  localStorage.setItem("newsletterEmails", JSON.stringify(emails));

  if(message) message.innerText = "Pronto! Você vai receber novidades e gadgets virais.";
  input.value = "";
  localStorage.setItem("newsletterSubscribed", "true");
}

function createWhatsAppButton(){
  if(document.querySelector(".whatsapp-float")) return;

  const a = document.createElement("a");
  a.className = "whatsapp-float";
  a.href = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20gadgets%20do%20site";
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = "💬 Fale conosco";
  document.body.appendChild(a);
}

function createNewsletterPopup(){
  if(localStorage.getItem("newsletterSubscribed") === "true") return;
  if(document.querySelector(".newsletter-popup")) return;

  const box = document.createElement("div");
  box.className = "newsletter-popup";
  box.innerHTML = `
    <button class="popup-close" type="button" aria-label="Fechar">×</button>
    <h3>🔥 Gadgets virais</h3>
    <p>Receba tendências, ofertas e produtos úteis toda semana.</p>
    <form onsubmit="subscribeNewsletter(event)">
      <input type="email" placeholder="Seu email" required>
      <button type="submit">Receber novidades</button>
    </form>
    <small></small>
  `;

  document.body.appendChild(box);

  box.querySelector(".popup-close").addEventListener("click", () => {
    box.classList.remove("show");
    localStorage.setItem("newsletterSubscribed", "true");
  });

  setTimeout(() => box.classList.add("show"), 1800);
}

function setupRevealAnimations(){
  const items = document.querySelectorAll(".section, .card, .form-box");
  items.forEach(el => el.classList.add("reveal"));

  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});

  items.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", function(){
  renderHomeShowcases();
  createWhatsAppButton();
  createNewsletterPopup();
  setupRevealAnimations();
});


/* =========================
PROFESSIONAL PREMIUM FEATURES
========================= */

function saveNewsletterEmail(event){
  event.preventDefault();

  const input = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");

  if(!input) return;

  const emails = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
  const email = input.value.trim();

  if(email && !emails.includes(email)){
    emails.push(email);
    localStorage.setItem("newsletterEmails", JSON.stringify(emails));
  }

  input.value = "";

  if(message){
    message.innerText = "Cadastro realizado! Você receberá novidades em breve.";
  }
}

document.addEventListener("DOMContentLoaded", () => {

  // WhatsApp floating button
  if(!document.querySelector(".whatsapp-float")){
    const wa = document.createElement("a");
    wa.className = "whatsapp-float";
    wa.href = "contato.html";
    wa.innerText = "💬 Fale conosco";
    document.body.appendChild(wa);
  }

  // Scroll reveal
  const revealItems = document.querySelectorAll(".reveal, .card, .form-box");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
      }
    });
  }, {threshold:.12});

  revealItems.forEach(item => observer.observe(item));

});

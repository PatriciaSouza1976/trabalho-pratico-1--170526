// JavaScript para o site Conheça BH - Turismo em Belo Horizonte
// Este arquivo contém dados simulados e funcionalidades para o site
// O mesmo script é usado na página inicial e na página de detalhes

// Dados simulados dos locais em Belo Horizonte
// Estrutura: nome, categoria, imagem, descricao, bairro, avaliacao, totalAvaliacoes, comentarios, popularidade
const locais = [
  // Museus
  {
    id: 1,
    nome: "Museu das Minas e do Metal",
    categoria: "museu",
    imagem: "assets/imagem/museu1.png",
    descricao: "Museu dedicado à história da mineração e metalurgia em Minas Gerais.",
    bairro: "Centro",
    avaliacao: 4.5,
    totalAvaliacoes: 120,
    comentarios: ["Incrível exposição!", "Muito educativo para estudantes.", "Recomendo visitar."],
    popularidade: 85
  },
  {
    id: 2,
    nome: "Museu de Arte da Pampulha",
    categoria: "museu",
    imagem: "assets/imagem/museu2.png",
    descricao: "Museu com acervo de arte moderna brasileira.",
    bairro: "Pampulha",
    avaliacao: 4.7,
    totalAvaliacoes: 95,
    comentarios: ["Belas obras de arte.", "Ambiente agradável.", "Perfeito para amantes de arte."],
    popularidade: 90
  },
  {
    id: 3,
    nome: "Museu Histórico Abílio Barreto",
    categoria: "museu",
    imagem: "assets/imagem/museu3.png",
    descricao: "Museu que conta a história de Belo Horizonte.",
    bairro: "Centro",
    avaliacao: 4.2,
    totalAvaliacoes: 78,
    comentarios: ["Interessante para história local.", "Bem organizado."],
    popularidade: 70
  },

  // Parques
  {
    id: 4,
    nome: "Parque das Mangabeiras",
    categoria: "parque",
    imagem: "assets/imagem/parque1.png",
    descricao: "Parque com vista panorâmica da cidade e trilhas.",
    bairro: "Mangabeiras",
    avaliacao: 4.8,
    totalAvaliacoes: 200,
    comentarios: ["Vista incrível!", "Perfeito para caminhadas.", "Família ama vir aqui."],
    popularidade: 95
  },
  {
    id: 5,
    nome: "Parque Municipal",
    categoria: "parque",
    imagem: "assets/imagem/parque2.png",
    descricao: "Parque urbano com lago e áreas de lazer.",
    bairro: "Centro",
    avaliacao: 4.3,
    totalAvaliacoes: 150,
    comentarios: ["Bom para piqueniques.", "Área verde no centro."],
    popularidade: 80
  },
  {
    id: 6,
    nome: "Parque Ecológico da Pampulha",
    categoria: "parque",
    imagem: "assets/imagem/parque3.png",
    descricao: "Parque ecológico com fauna e flora diversificada.",
    bairro: "Pampulha",
    avaliacao: 4.6,
    totalAvaliacoes: 110,
    comentarios: ["Natureza preservada.", "Ideal para observação de aves."],
    popularidade: 88
  },

  // Bares
  {
    id: 7,
    nome: "Bar do Zé",
    categoria: "bar",
    imagem: "assets/imagem/bar1.png",
    descricao: "Bar tradicional com música ao vivo e petiscos mineiros.",
    bairro: "Savassi",
    avaliacao: 4.4,
    totalAvaliacoes: 180,
    comentarios: ["Música ótima!", "Comida deliciosa.", "Ambiente animado."],
    popularidade: 92
  },
  {
    id: 8,
    nome: "Cervejaria BH",
    categoria: "bar",
    imagem: "assets/imagem/bar2.png",
    descricao: "Cervejaria artesanal com variedades locais.",
    bairro: "Lourdes",
    avaliacao: 4.5,
    totalAvaliacoes: 140,
    comentarios: ["Cervejas incríveis.", "Atendimento bom.", "Recomendo as artesanais."],
    popularidade: 87
  },
  {
    id: 9,
    nome: "Boteco Mineiro",
    categoria: "bar",
    imagem: "assets/imagem/bar3.png",
    descricao: "Boteco autêntico com pratos típicos mineiros.",
    bairro: "Centro",
    avaliacao: 4.1,
    totalAvaliacoes: 100,
    comentarios: ["Comida caseira.", "Preços acessíveis.", "Ambiente familiar."],
    popularidade: 75
  }
];

// Dados para o carrossel de destaques
const destaques = [
  {
    nome: "Praça da Liberdade",
    descricao: "Centro cultural e histórico de BH.",
    imagem: "assets/imagem/destaque1.png"
  },
  {
    nome: "Parque das Mangabeiras",
    descricao: "Vista panorâmica deslumbrante.",
    imagem: "assets/imagem/destaque2.png"
  },
  {
    nome: "Feira Hippie",
    descricao: "Cultura e gastronomia aos domingos.",
    imagem: "assets/imagem/destaque3.png"
  }
];

// Informações das categorias para a página detalhe.html
const categoriasInfo = {
  museu: {
    nome: 'Museus',
    imagem: 'assets/imagem/museus.png',
    descricao: 'Os museus de Belo Horizonte preservam a história, a arte e a cultura mineira, oferecendo experiências educativas e culturais para visitantes.'
  },
  parque: {
    nome: 'Parques',
    imagem: 'assets/imagem/parques.png',
    descricao: 'Os parques de Belo Horizonte conectam moradores e visitantes à natureza, oferecendo trilhas, lazer e momentos ao ar livre.'
  },
  bar: {
    nome: 'Bares',
    imagem: 'assets/imagem/bares.png',
    descricao: 'Os bares de Belo Horizonte trazem gastronomia, música e encontros sociais em ambientes acolhedores e vibrantes.'
  }
};

// Variável para armazenar a categoria atual filtrada
let categoriaAtual = null;

// Função para gerar estrelas com base na avaliação
function gerarEstrelas(avaliacao) {
  const estrelasCheias = Math.floor(avaliacao);
  const meiaEstrela = avaliacao % 1 >= 0.5;
  let estrelas = '';

  for (let i = 0; i < estrelasCheias; i++) {
    estrelas += '⭐';
  }
  if (meiaEstrela) {
    estrelas += '⭐'; // Simplificado, sem meia estrela
  }
  return estrelas;
}

// Função para carregar o carrossel de destaques na página principal
// Explicação: Renderiza os slides no Bootstrap Carousel usando JavaScript puro
function carregarCarrossel() {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselIndicators = document.getElementById('carouselIndicators');
  if (!carouselInner || !carouselIndicators) return;

  carouselInner.innerHTML = '';
  carouselIndicators.innerHTML = '';

  destaques.forEach((destaque, index) => {
    const activeClass = index === 0 ? 'active' : '';

    carouselInner.innerHTML += `
      <div class="carousel-item ${activeClass}">
        <img src="${destaque.imagem}" class="d-block w-100" alt="${destaque.nome}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>${destaque.nome}</h5>
          <p>${destaque.descricao}</p>
        </div>
      </div>
    `;

    carouselIndicators.innerHTML += `
      <button type="button" data-bs-target="#carouselBH" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${activeClass ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>
    `;
  });
}

// Função para carregar os cards de categoria
function carregarCategorias() {
  const container = document.getElementById('categorias');
  if (!container) return;

  const categorias = [
    { nome: 'Museus', categoria: 'museu', imagem: 'assets/imagem/museus.png' },
    { nome: 'Parques', categoria: 'parque', imagem: 'assets/imagem/parques.png' },
    { nome: 'Bares', categoria: 'bar', imagem: 'assets/imagem/bares.png' }
  ];

  container.innerHTML = '';
  categorias.forEach(cat => {
    container.innerHTML += `
      <div class="col">
        <div class="card h-100 categoria-card" data-categoria="${cat.categoria}" style="cursor: pointer;">
          <img src="${cat.imagem}" class="card-img-top" alt="${cat.nome}">
          <div class="card-body">
            <h5 class="card-title">${cat.nome}</h5>
            <p class="card-text">Explore os melhores ${cat.nome.toLowerCase()} de BH.</p>
          </div>
        </div>
      </div>
    `;
  });

  // Adicionar event listeners para clicar nas categorias
  // Explicação: Capturamos o clique do usuário no card de categoria
  // Usamos window.location.href para redirecionar o navegador para detalhe.html
  // Enviamos a categoria escolhida pela URL como query string
  document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoria = card.getAttribute('data-categoria');
      window.location.href = `detalhe.html?categoria=${encodeURIComponent(categoria)}`;
    });
  });
}

function carregarLocais(filtrarBusca = '', ordenarPor = null) {
  const container = document.getElementById('destinosContainer');
  if (!container) return;

  // Adicionar classe de loading para feedback visual
  container.classList.add('loading');

  // Simular delay para loading (pode ser removido em produção)
  setTimeout(() => {
    let locaisFiltrados = locais;

    // Filtrar por categoria se selecionada
    if (categoriaAtual) {
      locaisFiltrados = locaisFiltrados.filter(local => local.categoria === categoriaAtual);
    }

    // Filtrar por busca
    if (filtrarBusca) {
      locaisFiltrados = locaisFiltrados.filter(local =>
        local.nome.toLowerCase().includes(filtrarBusca.toLowerCase())
      );
    }

    // Ordenar
    if (ordenarPor === 'avaliacao') {
      locaisFiltrados.sort((a, b) => b.avaliacao - a.avaliacao);
    } else if (ordenarPor === 'popularidade') {
      locaisFiltrados.sort((a, b) => b.popularidade - a.popularidade);
    }

    container.innerHTML = '';
    locaisFiltrados.forEach(local => {
      const estrelas = gerarEstrelas(local.avaliacao);
      container.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${local.imagem}" class="card-img-top" alt="${local.nome}">
            <div class="card-body">
              <h5 class="card-title">${local.nome}</h5>
              <p class="card-text">${local.descricao}</p>
              <p class="card-text"><small class="text-muted">${local.bairro}</small></p>
              <p class="card-text">${estrelas} (${local.avaliacao}) - ${local.totalAvaliacoes} avaliações</p>
              <p class="card-text">Popularidade: ${local.popularidade}%</p>
              <p class="card-text"><strong>Comentários:</strong> ${local.comentarios.slice(0, 2).join(', ')}...</p>
              <a href="detalhe.html?id=${local.id}" class="btn btn-primary">Ver Detalhes</a>
            </div>
          </div>
        </div>
      `;
    });

    container.classList.remove('loading');
  }, 500); // Simular loading
}

// Função para configurar a busca
// Explicação: Adiciona event listener ao botão de busca
// Lê o termo digitado e redireciona para a categoria correspondente
function configurarBusca() {
  const btnBuscar = document.getElementById('btnBuscar');
  const campoBusca = document.getElementById('campoBusca');

  if (btnBuscar && campoBusca) {
    btnBuscar.addEventListener('click', (e) => {
      e.preventDefault();
      const busca = campoBusca.value.trim().toLowerCase();
      const mapaCategorias = {
        museu: 'museu',
        museus: 'museu',
        parque: 'parque',
        parques: 'parque',
        bar: 'bar',
        bares: 'bar'
      };
      const categoria = mapaCategorias[busca];

      if (categoria) {
        window.location.href = `detalhe.html?categoria=${categoria}`;
      } else {
        alert('Digite museu, parque ou bar para ver a categoria correspondente.');
      }
    });
  }
}

// Função para configurar a ordenação
// Explicação: Adiciona event listeners aos botões de ordenação
// Chama carregarLocais com o parâmetro de ordenação
function configurarOrdenacao() {
  const btnAvaliacao = document.getElementById('ordenarAvaliacao');
  const btnPopularidade = document.getElementById('ordenarPopularidade');

  if (btnAvaliacao) {
    btnAvaliacao.addEventListener('click', () => carregarLocais('', 'avaliacao'));
  }
  if (btnPopularidade) {
    btnPopularidade.addEventListener('click', () => carregarLocais('', 'popularidade'));
  }
}

// Função para carregar a página de categoria em detalhe.html
// Explicação: Lê a categoria enviada pela URL usando URLSearchParams
// Filtra os dados com base nessa categoria e renderiza o banner e os cards de cada local
function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get('categoria');
  const container = document.getElementById('conteudoDetalhes');

  if (!container) return;

  if (!categoria) {
    container.innerHTML = `
      <div class="text-center py-5">
        <h2>Categoria não informada</h2>
        <p class="text-muted">Retorne à página inicial e escolha uma categoria.</p>
        <a class="btn btn-primary" href="index.html">Voltar à página inicial</a>
      </div>
    `;
    return;
  }

  const infoCategoria = categoriasInfo[categoria];
  const locaisFiltrados = locais.filter(local => local.categoria === categoria);

  if (!infoCategoria) {
    container.innerHTML = `
      <div class="text-center py-5">
        <h2>Categoria inválida</h2>
        <p class="text-muted">A categoria selecionada não é reconhecida.</p>
        <a class="btn btn-primary" href="index.html">Voltar à página inicial</a>
      </div>
    `;
    return;
  }

  const nomeCategoria = infoCategoria.nome;

  if (locaisFiltrados.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <h2>Categoria sem locais</h2>
        <p class="text-muted">Não há locais cadastrados para &quot;${nomeCategoria}&quot;.</p>
        <a class="btn btn-primary" href="index.html">Voltar à página inicial</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <section class="categoria-banner mb-4 position-relative overflow-hidden rounded">
      <img src="${infoCategoria.imagem}" class="img-fluid w-100" alt="${nomeCategoria}">
      <div class="categoria-banner-text p-4 p-md-5 text-white position-absolute top-0 start-0 h-100 w-100 d-flex flex-column justify-content-end" style="background: rgba(0,0,0,0.35);">
        <span class="badge bg-primary mb-2">Categoria</span>
        <h1 class="display-6">${nomeCategoria}</h1>
        <p class="mb-0">${infoCategoria.descricao}</p>
      </div>
    </section>
    <section>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 class="h4 mb-1">Indicações de ${nomeCategoria}</h2>
          <p class="text-muted mb-0">Confira os melhores locais dessa categoria em BH.</p>
        </div>
        <a class="btn btn-secondary" href="index.html">Voltar para o início</a>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        ${locaisFiltrados.map(local => `
          <article class="col">
            <div class="card h-100 shadow-sm detalhe-card">
              <img src="${local.imagem}" class="card-img-top" alt="${local.nome}">
              <div class="card-body">
                <h5 class="card-title">${local.nome}</h5>
                <p class="card-text text-muted">${local.descricao}</p>
                <p class="card-text"><strong>Bairro:</strong> ${local.bairro}</p>
                <p class="card-text"><strong>Avaliação:</strong> ${gerarEstrelas(local.avaliacao)} (${local.avaliacao})</p>
                <p class="card-text"><strong>Total de avaliações:</strong> ${local.totalAvaliacoes}</p>
                <p class="card-text"><strong>Popularidade:</strong> ${local.popularidade}%</p>
                <div class="mt-3 detalhe-comentarios">
                  <strong>Comentários:</strong>
                  <ul class="mb-0 ps-3">
                    ${local.comentarios.map(com => `<li>${com}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

// Inicialização quando o DOM estiver carregado
// Inicialização quando o DOM estiver carregado
// Explicação: Garante que todos os elementos HTML estejam disponíveis antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
  carregarCarrossel();
  carregarCategorias();
  configurarBusca();
  configurarOrdenacao();
  carregarDetalhes(); // Para a página de detalhes / categoria
});
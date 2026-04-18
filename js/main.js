async function init() {
      // Hero Section
        const koreaHome = await getHomeDrama('korea');
          if (koreaHome.status === 1 && koreaHome.data.length > 0) {
              const featured = koreaHome.data[0];
                  const heroEl = document.getElementById('hero');
                      heroEl.style.backgroundImage = `url('${featured.image}')`;
                          heroEl.innerHTML = `
                                <div class="absolute inset-0 bg-gradient-to-r from-zinc-950/90 to-transparent"></div>
                                      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                                            <div class="max-w-screen-2xl mx-auto px-8 relative z-10 h-full flex items-center">
                                                    <div class="max-w-2xl">
                                                              <span class="bg-rose-600 text-white text-sm font-bold px-5 py-2 rounded-full">${featured.category ? featured.category.split(',')[0] : 'K-Drama'}</span>
                                                                        <h1 class="text-6xl font-bold mt-6 mb-6 leading-none">${featured.title}</h1>
                                                                                  <p class="text-lg text-zinc-300 mb-10">${(featured.synopsis || '').substring(0, 160)}...</p>
                                                                                            <button onclick="showDramaDetail(${featured.id})" 
                                                                                                              class="bg-white text-black px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-zinc-100">
                                                                                                                          <i class="fa-solid fa-play"></i> Tonton Sekarang
                                                                                                                                    </button>
                                                                                                                                            </div>
                                                                                                                                                  </div>
                                                                                                                                                      `;
                                                                                                                                                        }

                                                                                                                                                          // Load Sections
                                                                                                                                                            const korea = await getHomeDrama('korea');
                                                                                                                                                              if (korea.status === 1) renderDramaCards('korea-section', korea.data, '<i class="fa-solid fa-flag text-blue-500"></i> Drama Korea Terpopuler');

                                                                                                                                                                const china = await getHomeDrama('china');
                                                                                                                                                                  if (china.status === 1) renderDramaCards('china-section', china.data, '<i class="fa-solid fa-flag text-red-500"></i> Drama China Terbaru');
                                                                                                                                                                  }

                                                                                                                                                                  window.onload = init;
}
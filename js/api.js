const API_BASE = "https://api.sonzaix.indevs.in/drama";

async function fetchData(endpoint) {
  try {
      const res = await fetch(endpoint);
          if (!res.ok) throw new Error("Network error");
              return await res.json();
                } catch (err) {
                    console.error("Fetch error:", err);
                        return { status: 0, data: [] };
                          }
                          }

                          async function getHomeDrama(type) {
                            return await fetchData(`\( {API_BASE}/home/ \){type}?page=1`);
                            }

                            async function getDramaInfo(id) {
                              return await fetchData(`\( {API_BASE}/info?id= \){id}`);
                              }

                              async function searchDrama(query) {
                                return await fetchData(`\( {API_BASE}/search?q= \){encodeURIComponent(query)}&limit=30`);
                                }

                                async function getStreamLink(episodeId) {
                                  return await fetchData(`\( {API_BASE}/stream?id= \){episodeId}`);
                                  }
// ==========================================
// 0. SIHIR MULTI-BAHASA
// ==========================================
const translations = {
  en: {
    heroSub: "The Web3 Ocean is Yours", heroDesc: "The most aesthetic crypto wallet. Dive into the decentralized network, manage your assets, and track your treasure radar like a true Whale.",
    scroll: "Scroll to Dive", marqueeTitle: "Supporting The Largest Ecosystems",
    bento1Title: "Deep Sea Security", bento1Desc: "Mariana trench level security. We never store your Private Keys.",
    bento2Title: "Whale Radar Charts", bento2Desc: "Monitor real-time price movements and your profit waves seamlessly.",
    mascotTitle: "THE\nAPEX PREDATOR", bento3Title: "Instant Cross-Swap", bento3Desc: "Swap crypto assets with lightning speed and absolute minimal gas fees.",
    bento4Title: "Hyper Fast Node", bento4Desc: "Directly connected to premium RPC Nodes ensuring zero lags or pending tx.",
    playTitle: "Deep Sea Radar", playSub: "Play the sonar to find hidden treasures", pingSonar: "Ping Sonar",
    stat1: "Active Whales", stat2: "Trading Volume", stat3: "Hack Incidents",
    tlTitle: "How to Start Diving", tlSub: "Three simple steps to join the Web3 whale pod.",
    s1Title: "Prepare Your Oxygen", s1Desc: "Install MetaMask extension in your browser. Always keep your Seed Phrase secure.",
    s2Title: "Connect the Radar", s2Desc: "Scroll to the bottom of this page, click 'Awaken The Whale' to authorize connection.",
    s3Title: "Start Swimming", s3Desc: "Monitor live market waves, send assets, and manage your wealth elegantly.",
    ctaTitle: "Ready to Dive?", ctaSub: "Prove you are not just a Plankton",
    cardTitle: "Gateway to Web3", cardDesc: "Awaken your MetaMask to unlock the Nexus Whale Extension.",
    btnAwaken: "Awaken The Whale 🐳", buy: "Buy", send: "Send", sendTitle: "Send ETH"
  },
  id: {
    heroSub: "Lautan Web3 Milikmu", heroDesc: "Dompet kripto paling estetik. Menyelam ke jaringan desentralisasi, kelola aset, dan pantau radar harta karun layaknya seekor Paus.",
    scroll: "Mulai Menyelam", marqueeTitle: "Mendukung Jaringan Ekosistem Terbesar",
    bento1Title: "Keamanan Laut Dalam", bento1Desc: "Keamanan tingkat palung Mariana. Kami tidak menyimpan Private Key lu.",
    bento2Title: "Radar Gelombang", bento2Desc: "Pantau pergerakan harga real-time dan rasakan gelombang profit.",
    mascotTitle: "SANG\nPREDATOR PUNCAK", bento3Title: "Tukar Instan", bento3Desc: "Tukar aset crypto dengan kecepatan arus laut dan biaya gas fee minimal.",
    bento4Title: "Node Super Cepat", bento4Desc: "Terhubung langsung dengan RPC Node premium, anti lemot dan pending.",
    playTitle: "Radar Laut Dalam", playSub: "Mainkan sonar untuk mencari harta karun", pingSonar: "Ping Sonar",
    stat1: "Paus Aktif", stat2: "Volume Transaksi", stat3: "Kasus Peretasan",
    tlTitle: "Cara Mulai Menyelam", tlSub: "Tiga langkah mudah untuk bergabung dengan kawanan paus Web3.",
    s1Title: "Siapkan Tabung Oksigen", s1Desc: "Pasang ekstensi MetaMask di browser. Jangan lupa catat Seed Phrase.",
    s2Title: "Hubungkan Radar", s2Desc: "Scroll ke bawah layar ini, klik tombol 'Bangkitkan Paus' dan berikan izin.",
    s3Title: "Mulai Berenang", s3Desc: "Pantau grafik ombak market secara real-time, kelola aset lu dengan elegan.",
    ctaTitle: "Sudah Siap Menyelam?", ctaSub: "Buktikan lu bukan sekadar Plankton",
    cardTitle: "Gerbang ke Web3", cardDesc: "Panggil dompet MetaMask lu untuk membuka UI Ekstensi Nexus Whale.",
    btnAwaken: "Bangkitkan Paus 🐳", buy: "Beli", send: "Kirim", sendTitle: "Kirim ETH"
  },
  zh: {
    heroSub: "Web3 海洋属于你", heroDesc: "最美观的加密钱包。潜入去中心化网络，管理您的资产，并像真正的巨鲸一样追踪您的财富雷达。",
    scroll: "滚动以潜水", marqueeTitle: "支持最大的生态系统",
    bento1Title: "深海安全", bento1Desc: "马里亚纳海沟级别的安全。我们从不存储您的私钥。",
    bento2Title: "巨鲸雷达", bento2Desc: "实时监控价格变动和您的利润波动。",
    mascotTitle: "顶级\n掠食者", bento3Title: "即时交叉交换", bento3Desc: "以闪电般的速度和绝对最低的Gas费交换加密资产。",
    bento4Title: "超快节点", bento4Desc: "直接连接到高级RPC节点，确保零延迟或待处理的交易。",
    playTitle: "深海雷达", playSub: "播放声纳以寻找隐藏的宝藏", pingSonar: "声纳扫描",
    stat1: "活跃巨鲸", stat2: "交易量", stat3: "黑客事件",
    tlTitle: "如何开始潜水", tlSub: "只需三个简单的步骤即可加入 Web3 巨鲸群。",
    s1Title: "准备你的氧气", s1Desc: "在浏览器中安装 MetaMask 扩展程序。始终妥善保管您的助记词。",
    s2Title: "连接雷达", s2Desc: "滚动到页面底部，点击“唤醒巨鲸”以授权连接。",
    s3Title: "开始游泳", s3Desc: "实时监控市场波动，发送资产，优雅地管理您的财富。",
    ctaTitle: "准备好潜水了吗？", ctaSub: "证明你不仅仅是浮游生物",
    cardTitle: "Web3 网关", cardDesc: "唤醒您的 MetaMask 以解锁 Nexus 巨鲸扩展。",
    btnAwaken: "唤醒巨鲸 🐳", buy: "购买", send: "发送", sendTitle: "发送 ETH"
  }
};

const setLanguage = (lang) => {
  document.getElementById('t-hero-sub').innerText = translations[lang].heroSub;
  document.getElementById('t-hero-desc').innerText = translations[lang].heroDesc;
  document.getElementById('t-scroll').innerText = translations[lang].scroll;
  document.getElementById('t-marquee-title').innerText = translations[lang].marqueeTitle;
  document.getElementById('t-bento1-title').innerText = translations[lang].bento1Title;
  document.getElementById('t-bento1-desc').innerText = translations[lang].bento1Desc;
  document.getElementById('t-bento2-title').innerText = translations[lang].bento2Title;
  document.getElementById('t-bento2-desc').innerText = translations[lang].bento2Desc;
  document.getElementById('t-bento3-title').innerText = translations[lang].bento3Title;
  document.getElementById('t-bento3-desc').innerText = translations[lang].bento3Desc;
  document.getElementById('t-bento4-title').innerText = translations[lang].bento4Title;
  document.getElementById('t-bento4-desc').innerText = translations[lang].bento4Desc;
  document.getElementById('t-play-title').innerText = translations[lang].playTitle;
  document.getElementById('t-play-sub').innerText = translations[lang].playSub;
  document.getElementById('btn-radar').innerText = translations[lang].pingSonar;
  document.getElementById('t-stat1').innerText = translations[lang].stat1;
  document.getElementById('t-stat2').innerText = translations[lang].stat2;
  document.getElementById('t-stat3').innerText = translations[lang].stat3;
  document.getElementById('t-tltitle').innerHTML = translations[lang].tlTitle.replace('Diving', '<span class="text-cyan-400">Diving</span>').replace('Menyelam', '<span class="text-cyan-400">Menyelam</span>').replace('潜水', '<span class="text-cyan-400">潜水</span>');
  document.getElementById('t-tlsub').innerText = translations[lang].tlSub;
  document.getElementById('t-s1-title').innerText = translations[lang].s1Title;
  document.getElementById('t-s1-desc').innerText = translations[lang].s1Desc;
  document.getElementById('t-s2-title').innerText = translations[lang].s2Title;
  document.getElementById('t-s2-desc').innerText = translations[lang].s2Desc;
  document.getElementById('t-s3-title').innerText = translations[lang].s3Title;
  document.getElementById('t-s3-desc').innerText = translations[lang].s3Desc;
  document.getElementById('t-cta-title').innerText = translations[lang].ctaTitle;
  document.getElementById('t-cta-sub').innerText = translations[lang].ctaSub;
  document.getElementById('t-card-title').innerText = translations[lang].cardTitle;
  document.getElementById('t-card-desc').innerText = translations[lang].cardDesc;
  document.getElementById('btn-connect').innerText = translations[lang].btnAwaken;
  document.getElementById('t-ic-buy').innerText = translations[lang].buy;
  document.getElementById('t-ic-send').innerText = translations[lang].send;
  document.getElementById('t-send-title').innerText = translations[lang].sendTitle;
  document.getElementById('current-lang').innerText = lang.toUpperCase();
  ['en', 'id', 'zh'].forEach(l => {
    const btn = document.getElementById(`lang-${l}`);
    if(l === lang) btn.className = "w-full text-left px-4 py-2 text-sm text-cyan-400 font-bold bg-cyan-900/20";
    else btn.className = "w-full text-left px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors";
  });
};

// ==========================================
// 1. LIVE WHALE ALERT SYSTEM (FITUR DEWA BARU! 🚨)
// ==========================================
const alertContainer = document.getElementById('whale-alert-container');
const spawnAlert = () => {
  if(!alertContainer) return;
  const amounts = [1500, 5000, 12000, 8500, 3200, 25000, 450];
  const destinations = ['Binance', 'Unknown Wallet', 'Coinbase', 'Kraken', 'Nexus Protocol'];
  const amount = amounts[Math.floor(Math.random() * amounts.length)];
  const dest = destinations[Math.floor(Math.random() * destinations.length)];
  
  const alert = document.createElement('div');
  alert.className = 'glass-card px-4 py-3 rounded-xl flex items-center gap-3 animate-[slideInLeft_0.5s_ease-out] shadow-[0_0_20px_rgba(34,211,238,0.2)] border-l-4 border-l-cyan-400 text-sm z-[120]';
  alert.innerHTML = `<span class="text-xl">🐋</span><div><p class="font-bold text-white tracking-wide">Whale Alert</p><p class="text-cyan-100/70 text-xs">${amount.toLocaleString()} ETH to ${dest}</p></div>`;
  
  alertContainer.appendChild(alert);
  
  // Mainkan suara pelan notif
  playBloop();

  // Hilang otomatis setelah 4 detik
  setTimeout(() => {
    alert.style.animation = 'slideOutLeft 0.5s ease-in forwards';
    setTimeout(() => alert.remove(), 500);
  }, 4000);
};

// Munculin alert acak setiap 12 sampai 20 detik
setInterval(spawnAlert, Math.random() * 8000 + 12000);


// ==========================================
// 2. LIVE GAS FEE & CRYPTO TICKER 📈
// ==========================================
setInterval(() => {
  const gasEl = document.getElementById('gas-fee');
  let newGas = parseInt(gasEl.innerText) + Math.floor(Math.random() * 5) - 2;
  if(newGas < 8) newGas = 8; if(newGas > 30) newGas = 30;
  gasEl.innerText = newGas;
  if(newGas < 15) gasEl.className = "text-green-400";
  else if(newGas < 22) gasEl.className = "text-yellow-400";
  else gasEl.className = "text-red-400";
}, 5000);

const generateTicker = () => {
  const coins = [ {s: 'BTC', p: 64230, c: '+1.2'}, {s: 'ETH', p: 3450, c: '+2.4'}, {s: 'SOL', p: 145, c: '-0.5'}, {s: 'BNB', p: 580, c: '+0.8'}, {s: 'XRP', p: 120, c: '+1.5'}, {s: 'ADA', p: 0.54, c: '-1.2'} ];
  let html = '';
  for(let j=0; j<4; j++) { 
    coins.forEach(c => {
      const color = c.c.includes('+') ? 'text-green-400' : 'text-red-400';
      html += `<span class="mx-6"><span class="font-bold text-white">${c.s}</span> $${c.p.toLocaleString()} <span class="${color}">${c.c}%</span></span>`;
    });
  }
  document.getElementById('crypto-ticker').innerHTML = html;
};
generateTicker();

// ==========================================
// 3. AUDIO SFX 🔊
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const playSonar = () => {
  if(audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
  osc.type = 'sine'; osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(); osc.stop(audioCtx.currentTime + 1.5);
};
const playBloop = () => {
  if(audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
  osc.type = 'sine'; osc.frequency.setValueAtTime(400, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.start(); osc.stop(audioCtx.currentTime + 0.1);
};

// ==========================================
// 4. VISUAL MAGIC (RIPPLE, BUBBLES, TRAIL, NFT 3D) 🌊
// ==========================================
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div'); ripple.className = 'ripple';
  ripple.style.left = `${e.clientX}px`; ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple); setTimeout(() => ripple.remove(), 600); 
});

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.3) { 
    const trail = document.createElement('div'); trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px'; trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail); setTimeout(() => trail.remove(), 800);
  }
});

const createBubbles = () => {
  const container = document.getElementById('bubbles-container');
  if(!container) return;
  for (let i = 0; i < 25; i++) {
    let bubble = document.createElement('div'); bubble.classList.add('bubble');
    bubble.style.width = `${Math.random() * 40 + 10}px`; bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random() * 100}vw`; bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; bubble.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(bubble);
  }
}
createBubbles(); 

const mascot = document.getElementById('interactive-mascot');
if (mascot) {
  document.addEventListener('mousemove', (e) => {
    const rotateX = (((window.innerHeight / 2) - e.clientY) / 25).toFixed(2);
    const rotateY = ((e.clientX - (window.innerWidth / 2)) / 25).toFixed(2);
    mascot.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });
  document.addEventListener('mouseleave', () => { mascot.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`; });
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; const heroText = document.getElementById('hero-text');
  if (heroText) heroText.style.transform = `translateY(${scrollY * 0.5}px) scale(${1 - scrollY * 0.0005})`;
});

// FITUR BARU: 3D HOLOGRAM NFT CARDS ✨
const nftCards = document.querySelectorAll('.nft-card');
nftCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const centerX = rect.width / 2; const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 5).toFixed(2);
    const rotateY = ((centerX - x) / 5).toFixed(2);
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'transform 0.5s ease';
  });
  card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
});


// ==========================================
// 5. RADAR GACHA MINI-GAME 🎯
// ==========================================
const btnRadar = document.getElementById('btn-radar');
const radarSweep = document.getElementById('radar-sweep');
const radarResult = document.getElementById('radar-result');

btnRadar.addEventListener('click', (e) => {
  e.stopPropagation(); playSonar();
  radarSweep.classList.remove('hidden'); radarSweep.style.animation = 'spin-radar 2s linear infinite';
  const currLang = document.getElementById('current-lang').innerText.toLowerCase();
  const scanningText = {en: "Scanning...", id: "Memindai...", zh: "扫描中..."};
  radarResult.innerText = scanningText[currLang] || "Scanning...";
  radarResult.className = "text-xl font-bold text-cyan-400 animate-pulse mb-2 font-mono";
  btnRadar.disabled = true; btnRadar.classList.add('opacity-50');

  setTimeout(() => {
    radarSweep.classList.add('hidden'); radarSweep.style.animation = 'none';
    const loots = [
      { icon: "🐋", text: { en: "100 ETH! Whale Alert!", id: "100 ETH! Paus Terdeteksi!", zh: "100 ETH！巨鲸警报！" }},
      { icon: "🦐", text: { en: "A tiny Plankton...", id: "Hanya seekor Plankton...", zh: "微小的浮游生物..." }},
      { icon: "💎", text: { en: "Rare Pearl NFT", id: "NFT Mutiara Langka", zh: "稀有珍珠 NFT" }},
      { icon: "🪙", text: { en: "5,000 Nexus Tokens", id: "5,000 Token Nexus", zh: "5,000 Nexus 代币" }},
      { icon: "🧽", text: { en: "Just a Sponge", id: "Cuma Spons Kuning", zh: "只是一块海绵" }}
    ];
    const loot = loots[Math.floor(Math.random() * loots.length)];
    radarResult.innerText = `${loot.icon} ${loot.text[currLang] || loot.text.en}`;
    radarResult.className = "text-xl md:text-2xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]";
    playBloop(); btnRadar.disabled = false; btnRadar.classList.remove('opacity-50');
  }, 2000);
});

// ==========================================
// 6. CORE WEB3 LOGIC
// ==========================================
let ethChartInstance = null; let userProvider = null; let userSigner = null;   
let userEthBalance = 0; let userAddressFull = ""; 

const extOverlay = document.getElementById('ext-overlay');
const extContainer = document.getElementById('ext-container');
const btnConnect = document.getElementById('btn-connect');
const btnCloseExt = document.getElementById('btn-close-ext');

const formatUSD = (angka) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(angka);
const shortenAddress = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const renderNeonChart = (chartData) => {
  const ctx = document.getElementById('ethChart');
  if(!ctx) return; if(ethChartInstance) ethChartInstance.destroy();
  let gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 100);
  gradient.addColorStop(0, 'rgba(34, 211, 238, 0.3)'); gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
  ethChartInstance = new Chart(ctx, {
    type: 'line', data: { labels: ['D-7', 'D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'Today'], datasets: [{ data: chartData, borderColor: '#22d3ee', borderWidth: 2, backgroundColor: gradient, fill: true, pointRadius: 0, pointHoverRadius: 4, tension: 0.4 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { display: false } }, interaction: { intersect: false, mode: 'index' } }
  });
};

const connectWallet = async (e) => {
  e.stopPropagation(); playSonar(); 
  if (typeof window.ethereum !== 'undefined') {
    try {
      btnConnect.innerText = "...";
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddressFull = accounts[0]; 
      userProvider = new ethers.providers.Web3Provider(window.ethereum);
      userSigner = userProvider.getSigner();
      
      const balance = await userProvider.getBalance(userAddressFull);
      userEthBalance = parseFloat(ethers.utils.formatEther(balance)); 

      document.getElementById('ext-address').innerText = shortenAddress(userAddressFull);
      document.getElementById('ext-balance').innerText = userEthBalance.toFixed(4);

      try {
        const response = await fetch('http://localhost:8080/api/eth');
        if (response.ok) {
            const cryptoData = await response.json();
            const totalUSD = (userEthBalance * cryptoData.price_idr) / 15500;
            document.getElementById('ext-fiat').innerHTML = `≈ ${formatUSD(totalUSD)}`;
            renderNeonChart(cryptoData.chart);
        }
      } catch (err) {}

      btnConnect.innerText = document.getElementById('t-btn-connect') ? document.getElementById('t-btn-connect').innerText : "Connected! 🐳";
      extOverlay.classList.remove('hidden');
      setTimeout(() => { extOverlay.classList.remove('opacity-0'); extContainer.classList.remove('translate-y-10'); }, 10);
    } catch (error) { console.error(error); }
  } else { alert("MetaMask is not installed!"); }
};

btnCloseExt.addEventListener('click', () => {
  extOverlay.classList.add('opacity-0'); extContainer.classList.add('translate-y-10');
  setTimeout(() => extOverlay.classList.add('hidden'), 300);
});

btnConnect.addEventListener('click', connectWallet);

// COPY ADDRESS 
const copyBtn = document.getElementById('copy-address-btn');
copyBtn.addEventListener('click', (e) => {
  e.stopPropagation(); if(!userAddressFull) return;
  playBloop(); navigator.clipboard.writeText(userAddressFull);
  const addrText = document.getElementById('ext-address');
  addrText.innerText = "Copied! ✓"; addrText.classList.replace('text-cyan-100', 'text-green-400');
  setTimeout(() => { addrText.innerText = shortenAddress(userAddressFull); addrText.classList.replace('text-green-400', 'text-cyan-100'); }, 2000);
});

// TAB & SEND LOGIC
const switchTab = (tabName) => {
  ['token', 'nft', 'activity'].forEach(tab => {
    const btn = document.getElementById(`tab-btn-${tab}`);
    const content = document.getElementById(`tab-content-${tab}`);
    if (tab === tabName) { btn.className = "flex-1 pb-4 text-base font-bold text-cyan-400 border-b-2 border-cyan-400 cursor-pointer"; content.classList.remove('hidden'); } 
    else { btn.className = "flex-1 pb-4 text-base font-bold text-slate-500 hover:text-slate-300 cursor-pointer"; content.classList.add('hidden'); }
  });
};

const viewHome = document.getElementById('view-home'); const viewKirim = document.getElementById('view-kirim');
const bukaViewKirim = () => { viewHome.classList.add('hidden'); viewKirim.classList.remove('hidden'); };
const tutupViewKirim = () => { viewKirim.classList.add('hidden'); viewHome.classList.remove('hidden'); };

document.getElementById('btn-execute-send').addEventListener('click', async () => {
  const addressTo = document.getElementById('send-address').value;
  const amountStr = document.getElementById('send-amount').value;
  if (!ethers.utils.isAddress(addressTo) || parseFloat(amountStr) <= 0) return alert("Data tidak valid!");
  try {
    const tx = await userSigner.sendTransaction({ to: addressTo, value: ethers.utils.parseEther(amountStr) });
    await tx.wait(); alert(`Success! Hash: ${tx.hash}`);
    tutupViewKirim(); connectWallet();  
  } catch (err) { alert("Transaksi dibatalkan."); }
});
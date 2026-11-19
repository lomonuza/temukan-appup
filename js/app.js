let daftarBarang = JSON.parse(localStorage.getItem('dataBarang')) || [];
const listBarangContainer = document.getElementById('listBarang');
const searchLocalInput = document.getElementById('searchLocalInput');

// Fungsi menyimpan ke localStorage
function simpanData() {
    localStorage.setItem('dataBarang', JSON.stringify(daftarBarang));
}

// Fungsi menampilkan barang ke HTML
function renderBarang(data = daftarBarang) {
    listBarangContainer.innerHTML = '';
    
    if (data.length === 0) {
        listBarangContainer.innerHTML = '<p style="text-align:center; color:#94a3b8; margin-top: 20px;">Belum ada laporan barang.</p>';
        return;
    }

    data.sort((a, b) => b.id - a.id).forEach((barang) => {
        const statusClass = barang.status === 'Ditemukan' ? 'status-ditemukan' : 'status-proses';
        const tanggal = new Date(barang.id).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric'
        });
        
        const imgContent = barang.foto 
            ? `<img src="${barang.foto}" alt="${barang.nama}" class="barang-img">` 
            : `<div class="barang-img">📦</div>`;

        const itemHTML = `
            <div class="barang-item">
                ${imgContent}
                <div class="barang-info">
                    <h3>${barang.nama}</h3>
                    <p>${barang.deskripsi}</p>
                    <p><i class="fa-solid fa-location-dot"></i> ${barang.lokasi}</p>
                    <p><small>${tanggal}</small></p>
                </div>
                <span class="status ${statusClass}">${barang.status}</span>
            </div>
        `;
        listBarangContainer.innerHTML += itemHTML;
    });
}

// Fitur Pencarian di Daftar (Kanan)
searchLocalInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredData = daftarBarang.filter(barang => 
        barang.nama.toLowerCase().includes(keyword) || 
        barang.deskripsi.toLowerCase().includes(keyword)
    );
    renderBarang(filteredData);
});

// Fitur Pencarian dari Hero (Atas)
document.getElementById('searchBtn').addEventListener('click', () => {
    const keyword = document.getElementById('searchInput').value;
    searchLocalInput.value = keyword;
    document.getElementById('daftar').scrollIntoView({ behavior: 'smooth' });
    
    // Trigger event input manual agar data terfilter
    const event = new Event('input');
    searchLocalInput.dispatchEvent(event);
});

// Tampilkan data awal
renderBarang();

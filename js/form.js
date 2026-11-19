const formLapor = document.getElementById('formLapor');

if (formLapor) {
    formLapor.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailPelapor = localStorage.getItem('userEmail') || 'Anonim';
        const fileFoto = document.getElementById('fotoBarang').files[0];

        const prosesSimpan = async (fotoBase64 = '') => {
            const barangBaru = {
                id: Date.now(), 
                nama: document.getElementById('namaBarang').value,
                deskripsi: document.getElementById('deskripsi').value,
                lokasi: document.getElementById('lokasi').value,
                foto: fotoBase64,
                status: 'Proses',
                pelapor: emailPelapor
            };

            // Panggil fungsi Firebase dari index.html
            if (window.simpanBarangKeFirebase) {
                const sukses = await window.simpanBarangKeFirebase(barangBaru);
                if (sukses) formLapor.reset();
            }
        };

        // Logika Upload Foto (sama seperti sebelumnya)
        if (fileFoto) {
            const reader = new FileReader();
            reader.onload = (event) => prosesSimpan(event.target.result);
            reader.readAsDataURL(fileFoto);
        } else {
            prosesSimpan();
        }
    });
}

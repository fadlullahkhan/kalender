const waktuSekarang = new Date();
let keBulan = 1;

window.addEventListener("DOMContentLoaded", () => {
  renderKop()
  renderTanggal()
});

const lanjutTmbl = document.getElementById('next');
lanjutTmbl.addEventListener('click', () => {
  keBulan = keBulan + 1;
  renderKop();
  renderTanggal();
})

const mundurTmbl = document.getElementById('prev');
mundurTmbl.addEventListener('click', () => {
  keBulan -= 1;
  renderKop();
  renderTanggal();
})

const renderTanggal = () => {
  const tanggal = document.querySelector(".tanggal");
  const tgl = new Date(waktuSekarang.getYear(),  waktuSekarang.getMonth()+keBulan, 0);
  const awalBulan = new Date(waktuSekarang.getFullYear(), tgl.getMonth(), 1);
  let dataTanggal = "";
  
  for (let i = 1; i <= tgl.getDate(); i++) {
    if (tgl.getMonth() == waktuSekarang.getMonth() && i == waktuSekarang.getDate()) {
      dataTanggal += `<span class="tgl hari-ini">${i}</span>`;
    }else {
      dataTanggal += `<span class="tgl">${i}</span>`
    }
  }

  tanggal.innerHTML = dataTanggal;
  tanggal.childNodes[0].style.gridColumnStart = awalBulan.getDay()+1;
  
  const hari = document.querySelectorAll('.tgl')
  for(let i = 7 - awalBulan.getDay();i < hari.length;i += 7){
    if (awalBulan.getDay() == 0) {
      hari[0].classList.add('libur')
      hari[i].classList.add('libur');
    } else {
      hari[i].classList.add('libur');
    }
  }
}

const renderKop = () => {
  const bulan = document.getElementById('bulan'),
        tahun = document.getElementById('tahun'),
        bulanStr = ['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER'];
  const tgl = new Date(waktuSekarang.getYear(),  waktuSekarang.getMonth()+keBulan, 0);
        
  bulan.textContent = bulanStr[tgl.getMonth()];
  tahun.textContent = waktuSekarang.getFullYear();
}
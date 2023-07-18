const downloadBtn = document.querySelector(".download-btn");
const fileLink = 'https://drive.google.com/file/d/1TB5gdWe-Dhp4OvHLE5i4OiFsTg-hIpw6/view?usp=sharing'

const initTimer = () => {

  if(downloadBtn.classList.contains('disable-timer')){
    return( window.open(fileLink, 'Download'))
  }
  
  let timer = downloadBtn.dataset.timer;
   downloadBtn.classList.add('timer')
   downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`

   const initCounter = setInterval(()=>{
    if(timer>0){
      timer--
      return (downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`)
    }
    console.log('clear')
    clearInterval(initCounter)
    window.open(fileLink, 'Download');  
    downloadBtn.textContent = 'your file is downloading...'
    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer");
      downloadBtn.innerHTML = ` <i class="fa fa-file-download"></i> Download Again`;
  }, 3000);
   },1000)
   
}
downloadBtn.addEventListener("click", initTimer);



/*function showHiddenDown (id) {
  /*carddDown.classList.toggle('pCard_one')
  const carddDown = document.querySelector('.'+'pCard_down')
  carddDown.id = carddDown.getAttribute('carddDown') ? '': 'carddDown'


  const iconMap = document.querySelector(".location")
 iconMap.classList.add("active");
 overlay = document.querySelector(".overlay"),
 closeBtn = document.querySelector(".close-btn");



  const map = L.map('carddDown').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/


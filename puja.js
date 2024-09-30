var i = 0;
var txt = ` "Sarvamangala MangalyeShive Sarvartha Sadhike Sharanye Tryambake Gauri Narayani Namoastu 
                        Te Brahmarupe Sadanande Paramananda Svarupini"`; 
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("durga-mantra").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.typeWriter();

const receiverName = document.querySelector("#receiver");
const senderName = document.querySelector("#sender");
receiverName.innerText = new URLSearchParams(location.search).get(
  "receiver"
);
senderName.innerText = new URLSearchParams(location.search).get("sender") || 'yadavji';

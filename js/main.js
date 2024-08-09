// Define the API URL
const apiUrl = "https://api.alquran.cloud/v1/quran/en.asad";

// Make a GET request
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    var surah = document.querySelectorAll(".surah");
    var ayah = document.querySelectorAll(".ayahs");
    surah.forEach((element) => {
      element.addEventListener("click", () => {
        element.parentElement.lastElementChild.classList.toggle("d-none");
      });
    });

    data.data.surahs.forEach((element) => {
      var surahs = document.querySelector(".surahs");

      var surahayah = document.createElement("div");
      surahayah.classList.add("surahayah");

      function ayahsli() {
        var linner = [];
        element.ayahs.forEach((element) => {
            console.log(element);
            
          linner.push(`<li>${element.numberInSurah}. ${element.text}</li>`);
        });
        return linner.join("");
      }
      document.querySelector("ul").innerHTML = ayahsli();
      surahayah.innerHTML += `
      <div class ="surah">
              <div class="number"><span>№:</span> ${element.number}</div>
              <div class="name"><span>Arabic Name:</span> ${element.name}</div>
              <div class="englishname"><span>Name:</span> ${
                element.englishName
              }s</div>
              <div class="translation"><span>Translation:</span> ${
                element.englishNameTranslation
              }</div>
              <div class="revelationtype"><span>Revelation:</span> ${
                element.revelationType
              }</div>
              <div class="ayahsnumber"><span>Number of Ayahs:</span> ${
                element.ayahs.length
              }</div>
        </div>
        
            <div class="ayahs">
            <ul>
            ${ayahsli()}
            </ul>
        </div>
        `;
      surahs.appendChild(surahayah);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

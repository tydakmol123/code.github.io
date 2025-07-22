$(document).ready(function () {
  const envelope = $('#envelope');
  const openBtn = $("#openBtn");
  const resetBtn = $("#resetBtn");

  let currentPage = 1;
  const totalPages = 23;
  let isOpen = false;

  envelope.on('click', function () {
      if (isOpen) nextLyric();
  });

  openBtn.on('click', function () {
      envelope.removeClass("close").addClass("open");
      isOpen = true;
      openBtn.hide();
      resetBtn.show();
  });

  resetBtn.on('click', function () {
      envelope.removeClass("open").addClass("close");
      isOpen = false;
      setTimeout(function () {
          currentPage = 1;
          updateActivePage();
          resetBtn.hide();
          openBtn.show();
      }, 600);
  });

  function nextLyric() {
      currentPage = currentPage < totalPages ? currentPage + 1 : 1;
      updateActivePage();
  }

  function updateActivePage() {
      $(".lyric-page").removeClass("active");
      $("#page" + currentPage).addClass("active");
  }
});

const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");
const envelope = document.getElementById("envelope");
const audio = document.getElementById("sound");

let hasPlayed = false;

function playAudioOnce() {
    if (!hasPlayed) {
        audio.play().then(() => {
            hasPlayed = true;
        }).catch((e) => {
            console.log("Không thể phát nhạc:", e);
        });
    }
}

openBtn.addEventListener("click", function () {
    envelope.classList.remove("close");
    envelope.classList.add("open");
    openBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    playAudioOnce();
});

resetBtn.addEventListener("click", function () {
    envelope.classList.remove("open");
    envelope.classList.add("close");
    openBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    playAudioOnce();
});

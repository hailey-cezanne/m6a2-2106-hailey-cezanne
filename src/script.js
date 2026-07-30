const buttons = document.querySelectorAll(".toggle-btn");
const views = document.querySelectorAll(".view");

const audio = document.querySelector(".audio-player");
const video = document.querySelector(".video-player");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedView = button.dataset.view;

    buttons.forEach((currentButton) => {
      currentButton.classList.toggle(
        "is-active",
        currentButton === button
      );
    });

    views.forEach((view) => {
      view.classList.toggle(
        "is-active",
        view.classList.contains(`view-${selectedView}`)
      );
    });

    if (selectedView === "video") {
      const wasPlaying = !audio.paused;

      video.currentTime = audio.currentTime;
      audio.pause();

      if (wasPlaying) {
        video.play().catch(() => {
          console.log("Press play to continue the video.");
        });
      }
    }

    if (selectedView === "audio") {
      const wasPlaying = !video.paused;

      audio.currentTime = video.currentTime;
      video.pause();

      if (wasPlaying) {
        audio.play().catch(() => {
          console.log("Press play to continue the audio.");
        });
      }
    }
  });
});

audio.addEventListener("timeupdate", () => {
  if (Math.abs(video.currentTime - audio.currentTime) > 0.5) {
    video.currentTime = audio.currentTime;
  }
});

video.addEventListener("timeupdate", () => {
  if (Math.abs(audio.currentTime - video.currentTime) > 0.5) {
    audio.currentTime = video.currentTime;
  }
});

audio.addEventListener("ended", () => {
  video.currentTime = 0;
});

video.addEventListener("ended", () => {
  audio.currentTime = 0;
});
// Switch between the Audio and Video views when a toggle button is clicked.
const buttons = document.querySelectorAll(".toggle-btn");
const views = document.querySelectorAll(".view");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const wanted = button.dataset.view; // "audio" or "video"

    // Highlight the clicked button, un-highlight the others.
    buttons.forEach((b) => b.classList.toggle("is-active", b === button));

    // Show the matching view, hide the rest.
    views.forEach((view) => {
      view.classList.toggle("is-active", view.classList.contains("view-" + wanted));
    });
  });
});

// Reserved for additional interactivity if needed
// For example, logging clicks or showing popups
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Toggled: ${button.textContent.trim()}`);
    });
  });
  
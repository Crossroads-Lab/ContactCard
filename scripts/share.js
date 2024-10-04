const shareData = {
  title: "Contact Card",
  text: "Check out my contact info",
  url: window.location.href,
},
btn = document.getElementById("share");
btn && btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    
  }
});
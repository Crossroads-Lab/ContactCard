const shareData = {
  title: "Contact Info",
  text: "Check out my info",
  url: window.location.href
},
btn = document.getElementById("share");
btn && btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    
  }
});
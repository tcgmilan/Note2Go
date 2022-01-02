document.getElementById("toggle-dark-mode").addEventListener("click", async () => {
    const is_dark = await window.darkmode.toggle()
    const element = document.getElementById("toggle-dark-mode")
    
    element.src = is_dark ? "../img/switch_light.png" : "../img/switch_dark.png"
})

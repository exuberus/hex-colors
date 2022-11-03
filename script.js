const btn = document.getElementById("btn")
const colors = document.querySelector(".colors")

btn.addEventListener('click', function(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    hex.sort(() => Math.random() - 0.5);
    var hexNumber = (hex.join('').slice(-6))
    
    var hexColor = `#${hexNumber}`
    document.body.style.backgroundColor = hexColor
    colors.textContent = hexColor;
});
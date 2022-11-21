function run(){
    let simbolos = '0123456789abcdef'
    let color = '#'

    for(let i = 0; i<6; i++)
        color += simbolos[Math.floor(Math.random()*16)]
    console.log(color);

    document.body.style.background = color

    let texto = document.getElementById("hex")

    texto.innerHTML = color
    texto.style.color = '#fff'
    texto.style.textShadow = "2px 0 0 #000"
    
}
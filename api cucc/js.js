const BASE_URL = "http://127.0.0.1:8000"
let wrapper = document.getElementById("wrapper");



const characterBioGenerator = ({name, strength, intelligence, agility, dexterity, endurance, image}) => {

    let imageCSS = `background-image: url(${BASE_URL+image})`
    return `<div class="character">
                <div class="image" style="${imageCSS}"></div>
                <h1>${name}</h1>
                <div class="stats">
                    <span>strength: ${strength}</span>
                    <span>intelligence: ${intelligence}</span>
                    <span>agility: ${agility}</span>
                    <span>dexterity: ${dexterity}</span>
                    <span>endurance: ${endurance}</span>
                </div>
            </div>`
}
const startFight = (f1,f2,scene) => {
    let f1Round = true
    f1.hp = 100;
    f2.hp = 100;
    let intervalID = setInterval(()=>{
        let attacker = f1Round ? f1 : f2;
        let defender = f1Round ? f2 : f1;

        f1Round ? f2.hp -= 2*f1.strength : f1.hp -= 2*f2.strength 

        document.getElementById("fight").innerHTML += `<div>${attacker.name} megtámadja ${defendert.name}-t! ${defender.name} megsérül.</div>`
        f1Round = !f1Round
    },500)
}
        
        
fetch(BASE_URL + "/api/fighters/")
.then(res => res.json())
.then(data => {
    wrapper.innerHTML += characterBioGenerator(data[0])
    let figthScene = document.createElement("div")
    figthScene.id = "fight";
    wrapper.appendChild(figthScene)
    wrapper.innerHTML += characterBioGenerator(data[1])
    startFight(data[0],data[1],figthScene)
})

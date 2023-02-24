let selectedCharacter = null;
let selectedCharacterName = null;
let selectedCharacterImage = null;
let selectedBattlePartner = null;
let selectedBattlePartnerName = null;
let selectedBattlePartnerImage = null;
let selectedBattlePartnerMove1 = null;
let selectedBattlePartnerMove2 = null;
let selectedBattlePartnerMove3 = null;
let selectedBattlePartnerMove4 = null;
let player2CharacterIndex = 0;
let player2BattlePartnerIndex = 0;
let player2Character = null;
let player2BattlePartner =null;
let player2Image = null;

// Battle Partner Class & Objects

class BattlePartner {
    constructor(name, image, moves) {
        this.name = name;
        this.image = image;
        this.moves = moves;
    };
};

const charizard = new BattlePartner ("Charizard", ["/assets/char1.png","/assets/char2.png"], ["Ember", "Dragon Rage", "Flame Thrower", "Rock Throw"]);
const blastoise = new BattlePartner("Blastoise",["/assets/blas1.png","/assets/blas2.png"],["Water Gun", "Hydro Pump", "Surf","Rain Dance"]);
const gengar = new BattlePartner("Gengar",["/assets/geng1.png","/assets/geng2.png"],["Shawdow Ball", "Dark Pulse", "Shadow Claw","Dream Eater"]);
const gyarados = new BattlePartner("Gyarados",["/assets/gyar1.png","/assets/gyar2.png"],["Hyper Beam", "Dragon Pulse", "Crunch","Waterfall"]);
const pikachu = new BattlePartner("Pikachu",["/assets/pika1.png","/assets/pika2.png"],["Thunderbolt", "Thunder Punch", "Electro Ball","Thunder"]);
const venusaur = new BattlePartner("Venusaur",["/assets/venu1.png","/assets/venu2.png"],["Solar Beam", "Toxic", "Razor Leaf","Sludge Bomb"]);
const blueEyesWhiteDragon = new BattlePartner ("Blue Eyes White Dragon", ["/assets/bewd1.png","/assets/bewd2.png"], ["White Lightning Blast", "Ultimate Dragon Burst", "Dragonic Roar", "Divine Dragon Cannon"]);
const darkMagician = new BattlePartner("Dark Magician",["/assets/dm1.png","/assets/dm2.png"],["Dark Magic Attack", "Thousand Knives", "Illusion Magic","Dark Renewal"]);
const elementalHeroFlameWingman = new BattlePartner("Elemental Hero Flame Wingman",["/assets/ehfw1.png","/assets/ehfw2.png"],["Inferno Blast", "Wing Burst", "Flame Tornado","Flare Strike"]);
const gaiaTheFierceKnight = new BattlePartner("Gaia the Fierce Knight",["/assets/gtfn1.png","/assets/gtfn2.png"],["Lightning Blade", "Thunder Spear Slash", "Tornado Blade","Swift Strike"]);
const redEyesBlackDragon = new BattlePartner("Red Eyes Black Dragon",["/assets/rebd1.png","/assets/rebd2.png"],["Dark Flare Burst", "Black Fireball Blast", "Inferno Dive","Fire Blast"]);
const valkyrionTheMagnaWarrior = new BattlePartner("Valkyrion the Magna Warrior",["/assets/valk1.png","/assets/valk2.png"],["Terra Magna Shot", "Magna Blast", "Shockwave","Magnetic Implosion"]);

const BattlePartnerList = {
    blas: blastoise,
    char: charizard,
    geng: gengar,
    gyar: gyarados,
    pika: pikachu,
    venu: venusaur,
    bewd: blueEyesWhiteDragon,
    dm: darkMagician,
    ehfw: elementalHeroFlameWingman,
    gtfn: gaiaTheFierceKnight,
    rebd: redEyesBlackDragon,
    valk: valkyrionTheMagnaWarrior
};

class Character {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    };

};

const ash = new Character ("Ash", ["/assets/ash1.png","/assets/ash2.png"]);
const brock = new Character ("Brock", ["/assets/brock1.png","/assets/brock2.png"]);
const yami = new Character ("Yami", ["/assets/yami1.png","/assets/yami2.png"]);
const joey = new Character ("Joey", ["/assets/joey1.png","/assets/joey2.png"]);

const characterList = {
    ash: ash,
    brock: brock,
    yami: yami,
    joey: joey
};

// Music Player On Battle Page
function toggleMusic() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
}

// Start Button On Home Page
const startButton = document.querySelector('.start');
if (startButton) {
startButton.addEventListener('click', () => {
    window.location.href = '/character/character.html';
  });
}

// Select Character
let myCharacterText = document.querySelector('.myCharacter');
const characterImages = document.querySelectorAll('.character img');
characterImages.forEach(img => {
    img.addEventListener('click', () => {
        selectedCharacter = characterList[img.classList[0]];
        console.log(img.classList[0]);
        console.log(selectedCharacter)
        selectedCharacterName = selectedCharacter.name;
        sessionStorage.setItem('selectedCharacterName', selectedCharacter.name);
        sessionStorage.setItem('selectedCharacterImage', selectedCharacter.image[0])
        myCharacterText.innerHTML = `You Selected: ${selectedCharacter.name}`;
    });
});





// Next Button On Character Page

const nextButton = document.querySelector('.next');
if (nextButton) {
nextButton.addEventListener('click', () => {
    if (selectedCharacter) {
    window.location.href = '/battle_partner/battle_partner.html';
    }
  });
}

// Battle Partner Page

// Function to take use selection and input it into the selection div
function mySelection(battlePartner) {
    document.querySelector('.partnerName').innerHTML = battlePartner.name;
    document.querySelector('.selectedPartnerImg').setAttribute('src', battlePartner.image[0]);
    const moveBoxes = document.querySelectorAll('.movebox p');
    for (i = 0; i < battlePartner.moves.length; i++) {
        moveBoxes[i].innerHTML = battlePartner.moves[i];
    };
};



const battlePartnerImages = document.querySelectorAll('.pokemon img, .yugioh img');
battlePartnerImages.forEach(img => {
    img.addEventListener('click', () => {
        selectedBattlePartner = img.classList[0];
        const battlePartner = BattlePartnerList[selectedBattlePartner];
        mySelection(battlePartner);
        console.log(battlePartner.image[0])
        selectedBattlePartnerName = battlePartner.name;
        selectedBattlePartnerImage = battlePartner.image[0];
        selectedBattlePartnerMove1 = battlePartner.moves[0];
        selectedBattlePartnerMove2 = battlePartner.moves[1];
        selectedBattlePartnerMove3 = battlePartner.moves[2];
        selectedBattlePartnerMove4 = battlePartner.moves[3];
        sessionStorage.setItem('selectedBattlePartnerName', selectedBattlePartnerName);
        sessionStorage.setItem('selectedBattlePartnerImage', selectedBattlePartnerImage);
        sessionStorage.setItem('selectedBattlePartnerMove1', selectedBattlePartnerMove1);
        sessionStorage.setItem('selectedBattlePartnerMove2', selectedBattlePartnerMove2);
        sessionStorage.setItem('selectedBattlePartnerMove3', selectedBattlePartnerMove3);
        sessionStorage.setItem('selectedBattlePartnerMove4', selectedBattlePartnerMove4);
});
});


// Battle Button
const battleButton = document.querySelector('.battleButton');
if (battleButton) {
battleButton.addEventListener('click', () => {
    if (selectedBattlePartner) {
    window.location.href = '/battle/battle.html';
    }
  });
}

// Battle Page
selectedCharacterName = sessionStorage.getItem('selectedCharacterName');
selectedCharacterImage = sessionStorage.getItem('selectedCharacterImage');
selectedBattlePartnerName = sessionStorage.getItem('selectedBattlePartnerName');
selectedBattlePartnerImage = sessionStorage.getItem('selectedBattlePartnerImage');
selectedBattlePartnerMove1 = sessionStorage.getItem('selectedBattlePartnerMove1');
selectedBattlePartnerMove2 = sessionStorage.getItem('selectedBattlePartnerMove2');
selectedBattlePartnerMove3 = sessionStorage.getItem('selectedBattlePartnerMove3');
selectedBattlePartnerMove4 = sessionStorage.getItem('selectedBattlePartnerMove4');
let battlePage = document.querySelector('.team','.playerLeftImg','.partnerLeftImg');
if (battlePage) {
document.querySelector('.team').innerHTML = `Team ${selectedCharacterName}`;
document.querySelector('.playerLeftImg').setAttribute('src', selectedCharacterImage);
document.querySelector('.partnerLeftImg').setAttribute('src', selectedBattlePartnerImage);
document.querySelector('.player1Img').setAttribute('src', selectedBattlePartnerImage);
document.querySelector('#move1').innerHTML = `${selectedBattlePartnerMove1}`;
document.querySelector('#move2').innerHTML = `${selectedBattlePartnerMove2}`;
document.querySelector('#move3').innerHTML = `${selectedBattlePartnerMove3}`;
document.querySelector('#move4').innerHTML = `${selectedBattlePartnerMove4}`;
player2CharacterIndex = Math.floor(Math.random() * Object.keys(characterList).length);
player2BattlePartnerIndex = Math.floor(Math.random() * Object.keys(BattlePartnerList).length);
player2Character = characterList[Object.keys(characterList)[player2CharacterIndex]];
player2BattlePartner = BattlePartnerList[Object.keys(BattlePartnerList)[player2BattlePartnerIndex]];
console.log(player2BattlePartner.moves);
console.log(player2Character.image[1]);
player2Image = player2Character.image[1];
console.log(player2Image)
document.querySelector('.team2').innerHTML = `Team ${player2Character.name}`;
document.querySelector('.player2Img').setAttribute('src', player2Character.image[1]);
console.log(document.querySelector('.player2Img').getAttribute('src')); 
document.querySelector('.partner2Img').setAttribute('src', player2BattlePartner.image[1]);
document.querySelector('.player1Img').setAttribute('src', selectedBattlePartnerImage);
document.querySelector('#move5').innerHTML = `${player2BattlePartner.moves[0]}`;
document.querySelector('#move6').innerHTML = `${player2BattlePartner.moves[1]}`;
document.querySelector('#move7').innerHTML = `${player2BattlePartner.moves[2]}`;
document.querySelector('#move8').innerHTML = `${player2BattlePartner.moves[3]}`;
document.querySelector('.partner2Img2').setAttribute('src', player2BattlePartner.image[1]);
};

// Battle Begins
let player1Health = 100;
let player2Health = 100;
let attack = 20;
const player1Moves = [selectedBattlePartnerMove1, selectedBattlePartnerMove2, selectedBattlePartnerMove3, selectedBattlePartnerMove4];
console.log(player1Moves);
const player2Moves =[player2BattlePartner.moves[0],player2BattlePartner.moves[1],player2BattlePartner.moves[2],player2BattlePartner.moves[3]];
console.log(player2Moves);
const moveButtons = document.querySelectorAll('.moveButtons1 button');
console.log(moveButtons);
let gameDetails = document.querySelector('.gameDetails');
let player1Turn = true;

function player1Attack() {
    gameDetails.innerHTML = 'Choose Your Move';
    moveButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (player1Turn) {
            moveButtons.forEach(button => {
                button.disabled = true;
            });
            let player1Attack = player1Moves[index];
            gameDetails.innerHTML = `${selectedBattlePartnerName} uses ${player1Attack}`;
            setTimeout(() => {
                let damage = calculateDamage();
                gameDetails.innerHTML = `Dealing ${damage} damage`;
                player2Health -= damage;
                setTimeout(() => {
                    if (player2Health <= 0) {
                        endGame(selectedBattlePartnerName);
                    } else {
                        player1Turn = false;
                        player2Attack();
                    }
                   }, 2000);
              }, 2000);
        }
        });
    })
}
player1Attack();
function player2Attack() {
    const player2Move = player2BattlePartner.moves[Math.floor(Math.random() * player2BattlePartner.moves.length)];
    console.log(player2Move)
    gameDetails.innerHTML = `${player2BattlePartner.name} uses ${player2Move}`
    setTimeout(() => {
        let damage = calculateDamage();
        gameDetails.innerHTML = `Dealing ${damage} damage`;
        setTimeout(() => {
            player1Attack();
        })
        }, 5000);
}

function calculateDamage() {
    const damageMultiplier = Math.random() + 0.5;
    let damage = Math.floor(damageMultiplier * attack);
    return damage;
}


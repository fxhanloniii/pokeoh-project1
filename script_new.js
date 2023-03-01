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

class BattlePartner {
    constructor(name, image, moves) {
        this.name = name;
        this.image = image;
        this.moves = moves;
    };
}

const charizard = new BattlePartner ("Charizard", ["/assets/char1.png","/assets/char2.png"], ["Ember", "Dragon Rage", "Flame Thrower", "Rock Throw"]);
const blastoise = new BattlePartner("Blastoise",["/assets/blas1.png","/assets/blas2.png"],["Water Gun", "Hydro Pump", "Surf","Rain Dance"]);
const gengar = new BattlePartner("Gengar",["/assets/geng1.png","/assets/geng2.png"],["Shadow Ball", "Dark Pulse", "Shadow Claw","Dream Eater"]);
const gyarados = new BattlePartner("Gyarados",["/assets/gyar1.png","/assets/gyar2.png"],["Hyper Beam", "Dragon Pulse", "Crunch","Waterfall"]);
const pikachu = new BattlePartner("Pikachu",["/assets/pika1.png","/assets/pika2.png"],["Thunderbolt", "Thunder Punch", "Electro Ball","Thunder"]);
const venusaur = new BattlePartner("Venusaur",["/assets/venu1.png","/assets/venu2.png"],["Solar Beam", "Toxic", "Razor Leaf","Sludge Bomb"]);
const blueEyesWhiteDragon = new BattlePartner ("Blue Eyes White Dragon", ["/assets/bewd1.png","/assets/bewd2.png"], ["White Lightning Blast", "Ultimate Dragon Burst", "Dragonic Roar", "Divine Dragon Cannon"]);
const darkMagician = new BattlePartner("Dark Magician",["/assets/dm1.png","/assets/dm2.png"],["Dark Magic Attack", "Thousand Knives", "Illusion Magic","Dark Renewal"]);
const elementalHeroFlameWingman = new BattlePartner("Elemental Hero Flame Wingman",["/assets/ehfw1.png","/assets/ehfw2.png"],["Inferno Blast", "Wing Burst", "Flame Tornado","Flare Strike"]);
const gaiaTheFierceKnight = new BattlePartner("Gaia the Fierce Knight",["/assets/gtfn1.png","/assets/gtfn2.png"],["Lightning Blade", "Thunder Spear Slash", "Tornado Blade","Swift Strike"]);
const redEyesBlackDragon = new BattlePartner("Red Eyes Black Dragon",["/assets/rebd1.png","/assets/rebd2.png"],["Dark Flare Burst", "Black Fireball Blast", "Inferno Dive","Fire Blast"]);
const valkyrionTheMagnaWarrior = new BattlePartner("Valkyrion the Magna Warrior",["/assets/valk1.png","/assets/valk2.png"],["Terra Magna Shot", "Magna Blast", "Shockwave","Magnetic Implosion"]);


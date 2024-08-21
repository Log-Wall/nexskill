export const weaponmastery = {
  razeNone: {
    id: "razeNone",
    fullName: "Raze",
    firstPerson:
      /^You whip .+ through the air in front of (?<target>\w+), to no effect\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "No raze",
    tags: ["raze"],
    length: 2,
  },
  raze: {
    id: "raze",
    fullName: "Raze",
    firstPerson: false,
    secondPerson:
      /^(?<user>\w+) razes your (?<info>aura of rebounding|magical shield) with .+?\.$/,
    thirdPerson:
      /^(?<user>\w+) razes (?<target>.+?)'s (aura of rebounding|magical shield) with .+?\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Shield",
    tags: ["raze"],
    length: 2,
    reaction(action) {
      if (action.info === "aura of rebounding") {
        action.info = "Rebounding";
      } else {
        action.info = "Shield";
      }
    },
  },
  impale: {
    id: "impale",
    fullName: "Impale",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) draws back \w+ blade and impales (?<target>\w+) to the hilt\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "balance",
    tags: [],
    length: 4,
  },
  disembowel: {
    id: "disembowel",
    fullName: "Disembowel",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^With a vicious snarl (?<user>\w+) carves a merciless swathe through the steaming guts of (?<target>\w+), who gurgles and chokes as \w+ withdraws \w+ dripping blade, glistening with gore\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "balance",
    tags: [],
    length: 3,
  },
  //#region 2H
  battlefuryFocus: {
    id: "battlefuryFocus",
    fullName: "Battlefury Focus",
    firstPerson:
      /^Channeling the fury of battle, you prepare to unleash a brutally swift stroke against your foe\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "free",
    tags: [],
    length: 0,
  },
  slaughter: {
    id: "slaughter",
    fullName: "Slaughter",
    firstPerson:
      /^Drawing back .+, you unleash a flesh-mincing blow at (?<target>.+?)\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery",
    balance: "balance",
    tags: ["damage"],
    length: 0,
  },
  //#endregion
  //#region SNB
  slice: {
    id: "slice",
    fullName: "Slice",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^The blade of (?<user>\w+) is a blur as he moves forward, slicing into (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: false,
    tags: [],
    length: 2.5,
  },
  smashHigh: {
    id: "smashHigh",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) swings \w+ shield around, smashing the temple of (?<target>\w+) with a backhanded blow\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "High",
    tags: [],
    length: 2.5,
  },
  smashMid: {
    id: "smashMid",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^Lunging to the side, (?<user>\w+) brings \w+ shield around to smash into the spine of (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Mid",
    tags: [],
    length: 2.5,
  },
  smashLow: {
    id: "smashLow",
    fullName: "Smash",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) smashes the edge of .+? into the kneecaps of (?<target>\w+), causing \w+ to stumble\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "balance",
    info: "Low",
    tags: [],
    length: 2.5,
  },
  shieldStrikeHigh: {
    id: "shieldStrikeHigh",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson: false,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "High",
    tags: [],
    length: 2.5,
  },
  shieldStrikeMid: {
    id: "shieldStrikeMid",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) draws .+? back, then lunges forward with a savage strike to the ribs of (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "Mid",
    tags: [],
    length: 2.5,
  },
  shieldStrikeLow: {
    id: "shieldStrikeLow",
    fullName: "Shieldstrike",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) lunges downward, slamming the edge of .+? into the shins of (?<target>\w+)\.$/,
    profession: ["runewarden", "paladin", "infernal", "unnamable"],
    skill: "weaponmastery", // Not weaponmastery. Actually in each knight's chivalry replacement skillset.
    balance: "tertiary",
    info: "Low",
    tags: [],
    length: 2.5,
  },
  //#endregion
};

//(?<user>\w+) whips Matsuhama's morningstar toward the right leg of Archaeon.
//Archaeon goes down in a tangle of limbs as \w+ legs are swept out from under him. //(Expend - morningstar - leg)
/*
20:13:36.078 (?<user>\w+) whips Matsuhama's morningstar toward the left leg of Archaeon.
20:13:36.078 (?<user>\w+) misses Archaeon with Matsuhama's morningstar.
20:13:36.078 (?<user>\w+) whips Matsuhama's morningstar toward the left leg of Archaeon.
20:13:36.078 (?<user>\w+) misses Archaeon with Matsuhama's morningstar.


10:59:25.048 (?<user>\w+) whips Matsuhama's morningstar toward the left leg of Archaeon.
10:59:25.048 The attack rebounds back onto (?<user>\w+)!
10:59:25.048 (?<user>\w+) whips Matsuhama's morningstar toward the left leg of Archaeon.
10:59:25.048 The attack rebounds back onto (?<user>\w+)!

Lightning-quick, Emiya jabs you with a hydra-etched scimitar with a vine-wreathed hilt.
Lightning-quick, Emiya jabs your left leg with a hydra-etched scimitar with a vine-wreathed hilt.
Emiya swings a hydra-etched scimitar with a vine-wreathed hilt at your left leg with all her might.
Emiya slashes into your left leg with a hydra-etched scimitar with a vine-wreathed hilt.


*/

export default Object.values(weaponmastery);

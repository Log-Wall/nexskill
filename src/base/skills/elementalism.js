const elementalism = {
  light: {
    id: "light",
    fullName: "Light",
    firstPerson:
      /^You chant a brief spell and a flash of revealing light floods the room\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) chants a brief spell and a flash of revealing light floods the room\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  erode: {
    id: "erode",
    fullName: "Erode",
    firstPerson: /^You cast a spell of erosion at Pamxen\.$/,
    secondPerson: /^Khaseem casts a spell of erosion at you\.$/,
    thirdPerson: /^(?<user>\w+) casts a spell of erosion at Pamxen\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  deepfreeze: {
    id: "deepfreeze",
    fullName: "Deepfreeze",
    firstPerson:
      /^You drain the heat from the air around your enemies, causing them to experience the cold of the abyss itself\.$/,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) gestures grandly, and causes a deepfreeze to settle over his enemies\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  holocaust: {
    id: "holocaust",
    fullName: "Holocaust",
    firstPerson: false,
    secondPerson: false,
    thirdPerson:
      /^(?<user>\w+) fashions a holocaust globe out of pure elemental fire and arms it\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 6.0,
  },
  shalestorm: {
    id: "shalestorm",
    fullName: "Shalestorm",
    firstPerson: false,
    secondPerson:
      /^The powers of Elemental Earth conform to the will of (?<user>\w+), and with a thunderous roar boulders begin materialising from the air itself to hammer relentlessly at your body\.$/,
    thirdPerson: false,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.4,
  },
  shalestormTick: {
    id: "shalestormTick",
    fullName: "Shalestorm Tick",
    firstPerson: false,
    secondPerson:
      /^Huge boulders relentlessly hammer at you as they materialise from the very air\.$/,
    thirdPerson: false,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 5,
  },
  gust: {
    id: "gust",
    fullName: "Gust",
    firstPerson:
      /^You call upon a gust of wind to push (?<target>\w+) out to the southwest\.$/,
    secondPerson:
      /^(?<user>\w+) raises \w+ arms and a gust of wind slams into you, pushing you to the (?<info>\w+)\.$/,
    thirdPerson:
      /^(?<user>\w+) raises \w+ arms and a gust of wind slams into (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  firelashLOS: {
    id: "firelashLOS",
    fullName: "Firelash Ranged",
    firstPerson:
      /^You form a lash of fire, and send it speeding to the (?<info>\w+) to scorch the flesh of (?<target>\w+)\.$/,
    secondPerson:
      /^A lash of fire comes speeding in from the (?<info>\w+), to painfully scorch your flesh\.$/,
    thirdPerson:
      /^(?<user>\w+) casts a spell, and a lash of flame appears. With a gesture, \w+ sends it speeding off to the (?<info>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.4,
  },
  firelash: {
    id: "firelash",
    fullName: "Firelash",
    firstPerson:
      /^You form a lash of fire, and send it to scorch the flesh of (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) forms a lash of fire, and sends it to painfully scorch your flesh\.$/,
    thirdPerson:
      /^(?<user>\w+) forms a lash of fire, and sends it to scorch the flesh of (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.4,
  },
  freeze: {
    id: "freeze",
    fullName: "Freeze",
    firstPerson:
      /^You point your fists at (?<target>\w+) and blast \w+ with frigidly cold air\.$/,
    secondPerson:
      /^(?<user>\w+) points \w+ fists at you and blasts you with frigidly cold air\.$/,
    thirdPerson:
      /^(?<user>\w+) points \w+ fists at (?<target>\w+) and blasts \w+ with frigidly cold air\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  geyser: {
    id: "geyser",
    fullName: "Geyser",
    firstPerson: false,
    secondPerson: [
      /^The earth suddenly splits open, and a mighty geyser soars skywards\.$/,
      /^The geyser strikes you full-on, and you tumble to the ground helplessly\.$/,
    ],
    thirdPerson: [
      /^The earth suddenly splits open, and a mighty geyser soars skywards\.$/,
      /^The geyser strikes (?<target>\w+) full-on, and \w+ tumbles to the ground helplessly\.$/,
    ],
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 3.0,
  },
  dehydrate: {
    id: "dehydrate",
    fullName: "Dehydrate",
    firstPerson:
      /^Weaving the elements of fire and water, you attempt to rip the excess water from the body of (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) weaves fire and water as \w+ directs \w+ arcane might against you\.$/,
    thirdPerson:
      /^(?<user>\w+) weaves fire and water as \w+ directs \w+ arcane might against (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  fulminate: {
    id: "fulminate",
    fullName: "Fulminate",
    firstPerson:
      /^You click your fingers and lightning strikes from the air to smite (?<target>\w+)\.$/,
    secondPerson:
      /^(?<user>\w+) clicks \w+ fingers and a bolt of lightning strikes from the air in a fulminous flash to transfix you\.$/,
    thirdPerson:
      /^(?<user>\w+) clicks \w+ fingers and a bolt of lightning strikes from the air in a fulminous flash to transfix (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  bombard: {
    id: "bombard",
    fullName: "Bombard",
    firstPerson:
      /^You tap the Elemental Plane of Earth, summoning up a flurry of rocks to bombard (?<target>\w+)\.$/,
    secondPerson:
      /^The air thrums about (?<user>\w+) as \w+ weaves Elemental Earth, a flurry of rocks materialising to batter and disorient you\.$/,
    thirdPerson:
      /^The air thrums about (?<user>\w+) as a flurry of rocks materialise to bombard (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  mudslide: {
    id: "mudslide",
    fullName: "Mudslide",
    firstPerson:
      /^You weave earth and water and a torrent of thick mud thunders forth to roll over (?<target>\w+), knocking \w+ sprawling\.$/,
    secondPerson:
      /^(?<user>\w+) weaves earth and water and a torrent of thick sticky mud thunders forth to roll over you and knocking you off your feet\.$/,
    thirdPerson:
      /^(?<user>\w+) weaves earth and water and a torrent of thick mud thunders forth to roll over (?<target>\w+), knocking \w+ sprawling\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
  magma: {
    id: "magma",
    fullName: "Magma",
    firstPerson:
      /^You weave fire and earth and bubbling magma boils into existence to wash over (?<target>\w+) in a skin-melting tide\.$/,
    secondPerson:
      /^(?<user>\w+) weaves fire and earth in a complex pattern and magma boils into existence in a bubbling tide which crashes down upon you in a wash of heat and pain\.$/,
    thirdPerson:
      /^(?<user>\w+) weaves fire and earth in a complex pattern and bubbling magma boils into existence in a searing tide to crash down upon (?<target>\w+)\.$/,
    profession: ["magi"],
    skill: "elementalism",
    balance: "equilibrium",
    tags: [],
    affs: [],
    info: false,
    length: 2.3,
  },
};

export default Object.values(elementalism);
/*
(Myrddin) points \w+ staff at you, and a bolt of lightning cascades out and roars, screaming, into your body.

A bolt of lightning roars into Ogoun's body.

Lyndee attempts to transfix you, but succeeds only in curing your blindness.

With blinding speed, (Myrddin) transfixes you with a swirling pattern of fire and air.

Lyndee attempts to transfix you, but succeeds only in curing your blindness.
The mesmerising patterns draw your attention away from the matters at hand...  //stupidity

Lyndee weaves fire and air together to transfix someone.
The eyes of Ogoun grow distant as \w+ observes the complex patterns.

(Mizik) casts a spell over you, and a reflection of yourself appears next to you.

The sky grows dark as Aegoth calls upon powerful magics. Raising \w+ hands balefully, \w+ causes lightning bolts, the hammer of the storm, to shoot from \w+ hands and slam into Amranu.

Emanation?(air?): Aegoth sweeps a disfigured staff of kindled birch overhead and a great wind rises, picking up Amranu and casting \w+ violently about before hurling \w+ back to the ground.

Resonance 3p:
-Air
--1 Amranu clutches at \w+ throat as \w+ gasps for breath.
--2 A vicious wind rises, lashing and flaying at the body of Amranu to leave \w+ sensitive and raw.
--3 A dreadful pallor overcomes the features of Amranu.
-Fire
--1 Aegoth sends a spray of sparks to sear the flesh of Amranu.
--1 The air between Aegoth and Amranu ripples with a haze of heat.
--2 The air between Aegoth and Amranu ripple with a haze of heat, and flames ignite upon the skin of Amranu.
--3 Blisters burst open across the body of Amranu as \w+ skin glows as if lit from within.
---(Blister proc) As Amranu over extends \w+ blisters rip open, blood and pus dripping from the open wounds.
-Water
--1 A freezing wave of water materialises as if from nothing, crashing down upon Amranu.
--2 A flurry of freezing icicles materialise to slash at Amranu in a shower of freezing daggers.
--3 Aegoth makes no motion or word, but Amranu turns shockingly pale and staggers as if struck.
-Earth
--1 A loud crack emanates from the right arm of Amranu.
--2 Amranu buckles under an unseen blow.
--3 Amranu hacks and coughs as a series of unpleasant cracks sound in grim staccato from \w+ chest.

Resonance 1p:
-Air
--1 Amranu clutches at \w+ throat as \w+ gasps for breath.
--2 A vicious wind rises, lashing and flaying at the body of Amranu to leave \w+ sensitive and raw.
--3 A dreadful pallor overcomes the features of Amranu.
-Fire
--1 You send a spray of sparks to assault (?<target>\w+).
--1(has temperence) You direct your will against the temperance elixir which protects (?<target>\w+) and it burns away.
--1 The air between Aegoth and Amranu ripples with a haze of heat.
--2 You will that (?<target>\w+) should burn, and so \w+ does.
--3 The incandescent might of Elemental Fire filling you, you command (?<target>\w+) to burn from within.
-Water
--1 As you begin to tap your connection with the Elemental Plane of Water, you summon up a freezing wave to deluge (?<target>\w+).
--2 You summon up a flurry of icicles to slash at (?<target>\w+) in a shower of freezing daggers.
--3 The might of Elemental Water suffusing you, you tear at the vital fluids which sustain the body of (?<target>\w+) with your will alone.
-Earth
--1 A loud crack emanates from the right arm of Amranu.
--2 You bleed off residual power from your connection with the Elemental Plane of Earth, directing it in an unfocussed blast of arcane might at (?<target>\w+).
--3 The might of Elemental Earth coursing through you, you smite (?<target>\w+) with the full force of your directed will.

You are no longer resonant with the Elemental Plane of Fire.
You are now minorly resonant with the Elemental Plane of Fire.
*/
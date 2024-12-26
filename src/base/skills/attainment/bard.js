export const bard = {
  moulinet: {
    id: "moulinet",
    fullName: "Moulinet",
    firstPerson:
      /^You twist your wrist swiftly, slicing (?<target>.+?) with a long slash of your sweeping blade\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    tags: ["pve", "damage"],
    length: 16.0,
  },
  trill: {
    id: "trill",
    fullName: "Trill",
    firstPerson:
      /^You direct your voice in a high-pitched trill at (?<target>.+?), dazing \w+\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: "Amnesia",
    affs: ["amensia"],
    tags: ["pve", "amnesia"],
    length: 41.0,
  },
  resonance: {
    id: "resonance",
    fullName: "Resonance",
    firstPerson:
      /^You let loose a steady stream of cold air around (?<target>.+?), who begins to shiver uncontrollably\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: "raze",
    affs: [],
    tags: ["pve", "raze"],
    length: 0.0,
  },
  howlslash: {
    id: "howlslash",
    fullName: "Howlslash",
    firstPerson:
      /^You use your powerful voice to distract (?<target>.+?) with a ululating howl before stepping in with a vicious slash\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    affs: [],
    tags: ["pve", "damage"],
    length: 23.0,
  },
  cyclone: {
    id: "cyclone",
    fullName: "Cyclone",
    firstPerson:
      /^Your careful footwork leads you in a tight spin past (?<target>.+?), but \w+ is able to avoid the worst of your slashing blade\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: false,
    affs: [],
    tags: ["pve", "damage"],
    length: 23.0,
  },
  charm: {
    id: "charm",
    fullName: "Charm",
    firstPerson:
      /^You direct a soothing song at (?<target>.+?), enticing \w+ into defending you\.$/,
    secondPerson: false,
    thirdPerson: false,
    profession: ["bard"],
    skill: "attainment",
    balance: "battlerage",
    info: "Charm",
    affs: ["charm"],
    tags: ["pve", "charm"],
    length: 43.0,
  },
};

export default Object.values(bard);

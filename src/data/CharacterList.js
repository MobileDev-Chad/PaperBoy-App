import { Asset } from "expo-asset";

export const CharacterList = [
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MarioHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Whether you're dressed as a construction worker, a wedding goer, or just regular old Mario, it shouldn't come as a surprise that the man himself shows up in this game. Another great addition is Cappy, coming from Super Mario Odyssey, who adds some power to the man himself. When you play as Mario, you get to be a part of a great team!",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/q_auto:low/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
      portrait: Asset.fromModule(require("../assets/images/Mario.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mario.png")
      ).uri,
    },
    name: "Mario",
    id: "1",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DonkeyKongHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Donkey Kong is another OG character from the original Smash Bros game, so it's great to see him in this game as well. Kong is known for his intense punches, and he uses his strength to his advantage. Use him if you're looking to smack down your opponents.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501698/Ultimate%20Characters/Icons/120px-DonkeyKongHeadSSBUWebsite_h8qz9i.png",
      portrait: Asset.fromModule(require("../assets/images/Donkey_Kong.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Donkey_Kong.png")
      ).uri,
    },
    name: "Donkey Kong",
    id: "2",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/DKSymbol.png")
      ).uri,
      name: "Donkey Kong",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LinkHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Whether you're playing as traditional Link or the new Breath of the Wild version, it's great to see a legend make his way back into this game. Not only has Link been \"upgraded,\" but you now can throw remote bombs as if you were in BOTW. Don't forget to unleash the chickens!",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501722/Ultimate%20Characters/Icons/120px-LinkHeadSSBUWebsite_pzo2jz.png",
      portrait: Asset.fromModule(require("../assets/images/Link.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Link.png")
      ).uri,
    },
    name: "Link",
    id: "3",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SamusHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Everyone's favorite lady has come back to kick more behind because we all know last time wasn't enough. Her gun is still taking names, and she's not afraid to use her hands if need be. Don't forget to charge up your attacks since your opponents will be hurting way more when you do.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595194655/Ultimate%20Characters/Icons/i5rvljkpajr2rqkflkmm.png",
      portrait: Asset.fromModule(require("../assets/images/Samus.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Samus.png")
      ).uri,
    },
    name: "Samus",
    id: "4",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MetroidSymbol.png")
      ).uri,
      name: "Metroid",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DarkSamusHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Unlike Zero Suit Samus, Dark Samus is an Echo fighter, which means she features the same exact basic moveset and abilities as the original Samus. Dark Samus was a variant of the Metroid protagonist that initially appeared in Metroid 3.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595196410/Ultimate%20Characters/Icons/sjopx966kkczkijelpim.png",
      portrait: Asset.fromModule(require("../assets/images/Dark_Samus.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Dark_Samus.png")
      ).uri,
    },
    name: "Dark Samus",
    id: "04",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MetroidSymbol.png")
      ).uri,
      name: "Metroid",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/YoshiHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Yoshi has loads of attacks that he can use on enemies to defeat them in his own way. He can turn himself or his enemies into eggs or eat them and spit em out as they're stunned. You can also play as the other versions of Yoshi as well, so you can never get tired of playing as Yoshi.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595197033/Ultimate%20Characters/Icons/yzfsd5sz2h6izdgre4ub.png",
      portrait: Asset.fromModule(require("../assets/images/Yoshi.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Yoshi.png")
      ).uri,
    },
    name: "Yoshi",
    id: "5",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/YoshiSymbol.png")
      ).uri,
      name: "Yoshi",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/KirbyHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Kirby is one of the best characters to use in this game because of his special powers. Along with his melee attacks and his special attack, he can absorb his opponents and take on their abilities to fight them. Kirby is a great character to choose when it comes to taking on some of your friends.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595198280/Ultimate%20Characters/Icons/b3xbw1uwuhubocyibecv.png",
      portrait: Asset.fromModule(require("../assets/images/Kirby.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Kirby.png")
      ).uri,
    },
    name: "Kirby",
    id: "6",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KirbySymbol.png")
      ).uri,
      name: "Kirby",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/FoxHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Fox is the main character in Starfox as well as a main component of the Smash Bros universe. Not only does it have melee attacks and pistol attacks, but you can choose between the male and female versions of Fox. Choose Fox if you want to win against the opponents you take on.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595198574/Ultimate%20Characters/Icons/ahaz2u4oaenmzgqhrpz6.png",
      portrait: Asset.fromModule(require("../assets/images/Fox.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Fox.png")
      ).uri,
    },
    name: "Fox",
    id: "7",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StarFoxSymbol.png")
      ).uri,
      name: "Star Fox",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PikachuHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Pikachu is everyone's favorite little Pokemon, but it can be a little bugger if it wants to be. Its attacks are electrifying, to say the least, and it has the same ultimate as Pichu. It'll take the competition by storm, electric storm, that is.",
    availability: "Starter",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595198731/Ultimate%20Characters/Icons/o07zv6beydfx0erkavfk.png",
      portrait: Asset.fromModule(require("../assets/images/Pikachu.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pikachu.png")
      ).uri,
    },
    name: "Pikachu",
    id: "8",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LuigiHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Everyone's favorite goofball is another major character in Super Smash Bros, and his moves are just as silly as before. His movements are sure to throw opponents for a loop because they're just as powerful as they are silly. Luigi is a great pick when it comes to choosing what character you want to defeat your opponent.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199027/Ultimate%20Characters/Icons/bhciash4n90qbxy4bu3e.png",
      portrait: Asset.fromModule(require("../assets/images/Luigi.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Luigi.png")
      ).uri,
    },
    name: "Luigi",
    id: "9",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/NessHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Ness is a magical little kid whose spells pack a big punch. He has different spells and abilities that help him take down his enemies. Keep an eye out on the other characters that might be familiar when his ultimate is used.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199211/Ultimate%20Characters/Icons/eyzbbk2u1upzrfuxzpxo.png",
      portrait: Asset.fromModule(require("../assets/images/Ness.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ness.png")
      ).uri,
    },
    name: "Ness",
    id: "10",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/EarthboundSymbol.png")
      ).uri,
      name: "EarthBound",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/CaptainFalconHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Captain Falcon is another oldie yet a goodie for Smash Bros, with his older suit and an updated one. With some great attacks, he's an excellent choice. If you're looking for a character to take some names, pick Captain Falcon.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199362/Ultimate%20Characters/Icons/oeseikgvv04jdik1m47l.png",
      portrait: Asset.fromModule(require("../assets/images/Captain_Falcon.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Captain_Falcon.png")
      ).uri,
    },
    name: "Captain Falcon",
    id: "11",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FZeroSymbol.png")
      ).uri,
      name: "F-Zero",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/JigglypuffHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/n64-logo.png")
    ).uri,
    description:
      "Although Jigglypuff may be one of the cutest Pokemon around, it can be one of the deadliest ones around. Its punches and blows can be rather painful, and when it ends up getting to its Ultimate, your enemies will want to watch out. Jiggly is a great character to pick up when you're feeling a bit deceitful.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595199643/Ultimate%20Characters/Icons/vgbgm6ao6yrpfae0chmk.png",
      portrait: Asset.fromModule(require("../assets/images/Jigglypuff.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Jigglypuff.png")
      ).uri,
    },
    name: "Jigglypuff",
    id: "12",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PeachHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Peach is another classic hero who we've seen throughout the Super Smash games of the past. Not only does she have potent attacks of her own, but she has Toad, who can come to her aid whenever needed. With her own attacks and Toad's assistance, Peach can be an unstoppable force.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595210915/Ultimate%20Characters/Icons/adenccvsngq5mmxtgg6c.png",
      portrait: Asset.fromModule(require("../assets/images/Peach.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Peach.png")
      ).uri,
    },
    name: "Peach",
    id: "13",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DaisyHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Daisy is a great character known as an Echo form, which means she is exactly like another character. Daisy is the Echo form of our beloved Peach, so her attacks are the same as Peach's attacks. She's a beautiful character to have when you're out on the battlefield.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595211071/Ultimate%20Characters/Icons/yzrulx2ixqfuktvsslwc.png",
      portrait: Asset.fromModule(require("../assets/images/Daisy.png")).uri,
    },
    name: "Daisy",
    id: "013",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/BowserHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Everyone's favorite villain is here to take down enemies with his sick moves, and he's going to look good while doing it. Bowser will surely be an opponent worth fighting throughout this game, and it will take some strategy to take him down.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595211321/Ultimate%20Characters/Icons/ku5bfpewtw5qvvxrbbyc.png",
      portrait: Asset.fromModule(require("../assets/images/Bowser.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Bowser.png")
      ).uri,
    },
    name: "Bowser",
    id: "14",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/IceClimbersHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "This cute team can be anything but cute if you use them correctly. With their deadly hammers and ice magic, they can take on anyone who comes their way. They make a great team, and only negative things can come for their opponents when they work together.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595211554/Ultimate%20Characters/Icons/f0x0erel0h87cko9qgyl.png",
      portrait: Asset.fromModule(require("../assets/images/Ice_Climbers.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ice_Climbers.png")
      ).uri,
    },
    name: "Ice Climbers",
    id: "15",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/IceClimberSymbol.png")
      ).uri,
      name: "Ice Climbers",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SheikHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Sheik is another awesome bad guy who is here to take the names of his opponents. Although we know that Sheik has powers, he also uses his fists for close-quarter attacks. Learn how to harness both abilities to truly take on enemies as Sheik.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595211924/Ultimate%20Characters/Icons/kxacuatj0g1lhvawmlib.png",
      portrait: Asset.fromModule(require("../assets/images/Sheik.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Sheik.png")
      ).uri,
    },
    name: "Sheik",
    id: "16",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/ZeldaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Zelda is rocking her Ocarina of Time outfit in this Super Smash Bros series instead of her Breath of the Wild outfit. She uses magic to take on enemies, and she can even break buildings to take them on. Watch as she uses her ultimate to completely get rid of her opponents.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595212046/Ultimate%20Characters/Icons/yl8te2a0y3k9tuhs2onr.png",
      portrait: Asset.fromModule(require("../assets/images/Zelda.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Zelda.png")
      ).uri,
    },
    name: "Zelda",
    id: "17",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DrMarioHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Dr. Mario is a unique character in the universe of Super Smash Bros, and that comes with some unique abilities compared to others. Although he has typical attacks like other melee attackers, he can also attack others with items like pills. Also, his ultimate attack also uses that aspect to push across the idea of him being a doctor.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595212315/Ultimate%20Characters/Icons/wz4wmoj8ky5wbdsxfz9l.png",
      portrait: Asset.fromModule(require("../assets/images/Dr.Mario.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Dr.Mario.png")
      ).uri,
    },
    name: "Dr. Mario",
    id: "18",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PichuHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Little Pichu may be cute, but its attacks will leave you rather shocked. You can attack your enemies with your electric shock and use your ultimate to up the intensity. Pichu is a cute little one, but don't let that take you by surprise.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595212716/Ultimate%20Characters/Icons/h1tn2ec517gvnvze1jns.png",
      portrait: Asset.fromModule(require("../assets/images/Pichu.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pichu.png")
      ).uri,
    },
    name: "Pichu",
    id: "19",
    series: {
      price: "4.99",
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595198731/Series/mstlaeic4u1lgbzyfjdw.svg",
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/FalcoHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Falco is one of the many characters from Starfox that is often showcased in this game. Whether he's using his melee attack or taking them on with his laser pistol, he'll fight through the end to win. He's a worthy fighter throughout this game, and he's sure to help you win.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595212959/Ultimate%20Characters/Icons/g7chnuctc9jy3jclrnuf.png",
      portrait: Asset.fromModule(require("../assets/images/Falco.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Falco.png")
      ).uri,
    },
    name: "Falco",
    id: "20",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StarFoxSymbol.png")
      ).uri,
      name: "Star Fox",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MarthHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "From Fire Emblem, Marth is a great option when it comes to fighters in this game. He uses his sword to take down all of his enemies and make their suffering end quickly. Marth is a good choice when it comes to who you want to use as you fight",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213106/Ultimate%20Characters/Icons/hcz3nbywrdgd1zgu5lvg.png",
      portrait: Asset.fromModule(require("../assets/images/Marth.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Marth.png")
      ).uri,
    },
    name: "Marth",
    id: "21",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LucinaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Lucina is another Echo form of an original character, Marth, from the Fire Emblem series. She has the same attacks as Marth, so her sword will be her best friend in any kind of attack. She's a great choice if you're more comfortable fighting with a sword and you enjoy melee attacks.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213224/Ultimate%20Characters/Icons/qfucv1c7wobimkzaltwl.png",
      portrait: Asset.fromModule(require("../assets/images/Lucina.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Lucina.png")
      ).uri,
    },
    name: "Lucina",
    id: "021",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/YoungLinkHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Head back to the days of Link's past as you control the younger version of him. With your trusty shield and Navi by your side, there is nobody that you can't take on. Don't forget to use your fire arrows when enemies are at a greater distance.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213463/Ultimate%20Characters/Icons/ratlejqm8xek4wrl8ad1.png",
      portrait: Asset.fromModule(require("../assets/images/Young_Link.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Young_Link.png")
      ).uri,
    },
    name: "Young Link",
    id: "22",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/GanondorfHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Ganondorf is another great villain from the world of Legend of Zelda who has many powers. His melee attacks are incredibly powerful, and he can transform when using his ultimate in this game. Use Ganondorf if you want to use his unique abilities to take down even the most worthy opponents.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213635/Ultimate%20Characters/Icons/nidtfbolm0wpkw400auw.png",
      portrait: Asset.fromModule(require("../assets/images/Ganondorf.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ganondorf.png")
      ).uri,
    },
    name: "Ganondorf",
    id: "23",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MewtwoHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Mewtwo is a pretty awesome character to get to play as, and it's a good thing that it has incredible attacks to go with it. The attacks are all magic that it uses against its enemies is true to other games we've seen it in. Use the powerful Mewtwo against any enemies, and they won't stand a chance.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213769/Ultimate%20Characters/Icons/zpde70pzlkxolgrfbdya.png",
      portrait: Asset.fromModule(require("../assets/images/Mewtwo.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mewtwo.png")
      ).uri,
    },
    name: "Mewtwo",
    id: "24",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/RoyHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Roy is one of the final characters in the Fire Emblem game that has a lot going for him. With sword in hand, you can do quick attacks or charge up your attack for more pain to your opponent. He even has a little help from a friend when he goes through with his ultimate.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213882/Ultimate%20Characters/Icons/pj3iad6leump9k0jx1hj.png",
      portrait: Asset.fromModule(require("../assets/images/Roy.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Roy.png")
      ).uri,
    },
    name: "Roy",
    id: "25",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/ChromHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Chrom is the Echo Fighter of Roy, though he shares a special move adapted from Ike. Chrom is one of Fire Emblem's most endeared protagonists, having made his debut in Fire Emblem Awakening. He wields a powerful sword with enough energy to send anyone flying off the stage.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595213968/Ultimate%20Characters/Icons/j0qwtq8tpcengvaymmce.png",
      portrait: Asset.fromModule(require("../assets/images/Chrom.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Chrom.png")
      ).uri,
    },
    name: "Chrom",
    id: "025",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Melee"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MrGame&WatchHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/gamecube-logo.png")
    ).uri,
    description:
      "Mr. Game & Watch is sure to bring you back to the older days of Nintendo. He has several abilities that can take down enemies and give you a shoo-in to win. His abilities might be the most incredible of all the characters; just make sure the timing is right.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595214130/Ultimate%20Characters/Icons/ycqk3kzvmb3todifwfpn.png",
      portrait: Asset.fromModule(require("../assets/images/Mr.Game_Watch.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mr.Game_Watch.png")
      ).uri,
    },
    name: "Mr. Game & Watch",
    id: "26",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/GameWatchSymbol.png")
      ).uri,
      name: "Game & Watch",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MetaKnightHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Meta Knight is another character from the Kirby universe, and it has a few attacks that are useful in fights. Whether it uses its attack to confuse enemies or hurt them, the attacks are always beneficial to Meta. Make sure to use this character whenever you take on enemies that would be simple to take on.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595263616/Ultimate%20Characters/Icons/gy3ymahlwvsgptwfrypu.png",
      portrait: Asset.fromModule(require("../assets/images/Meta_Knight.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Meta_Knight.png")
      ).uri,
    },
    name: "Meta Knight",
    id: "27",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KirbySymbol.png")
      ).uri,
      name: "Kirby",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/PitHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Pit is another angelic character whose attacks are anything other than pure. Whether he's using his bow and arrow, dual blades, or his large sword, his attacks will surely take down any enemy in his way. His ultimate attack is something coming straight from the heavens as well.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595263748/Ultimate%20Characters/Icons/fedzu1dun3ahpda0lwve.png",
      portrait: Asset.fromModule(require("../assets/images/Pit.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pit.png")
      ).uri,
    },
    name: "Pit",
    id: "28",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KidIcarusSymbol.png")
      ).uri,
      name: "Kid Icarus",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DarkPitHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Dark Pit is the Echo Form of...yup, you guessed it, Pit. His attacks are the same as Pit, so you'll be able to control him easily if you're used to having Pit as your main character. Make sure to use Dark Pit as your guardian throughout this battle game.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595263875/Ultimate%20Characters/Icons/zj5eosi1phfoklbcvngg.png",
      portrait: Asset.fromModule(require("../assets/images/Dark_Pit.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Dark_Pit.png")
      ).uri,
    },
    name: "Dark Pit",
    id: "1028",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KidIcarusSymbol.png")
      ).uri,
      name: "Kid Icarus",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/ZeroSuitSamusHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Samus has upgraded to a Zero Suit, and she's got bigger and better moves against enemies. She's still a gun-wielding girl, but now she can jump higher and even has different abilities. Her melee attacks are just as good as her shots, so it's no surprise that she is so well-rounded.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595264033/Ultimate%20Characters/Icons/sgwnmktnr7khqbkqtbah.png",
      portrait: Asset.fromModule(
        require("../assets/images/Zero_Suit_Samus.png")
      ).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Zero_Suit_Samus.png")
      ).uri,
    },
    name: "Zero Suit Samus",
    id: "29",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MetroidSymbol.png")
      ).uri,
      name: "Metroid",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/WarioHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Wario is one of the more goofy characters with his mannerisms, but his attacks are just as silly. Whether he's slapping or kicking his opponents, he can take them down without even trying. You should try and jump on top of them, using Wario's body weight to your advantage.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595264211/Ultimate%20Characters/Icons/jgrrjer1mjlsvteav3dh.png",
      portrait: Asset.fromModule(require("../assets/images/Wario.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Wario.png")
      ).uri,
    },
    name: "Wario",
    id: "30",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/WarioSymbol.png")
      ).uri,
      name: "Wario Ware",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SnakeHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Sneak around and take down your opponents in secret as Snake from Metal Gear Solid. Either you sneak up on them, or you take them on with the full force of your fists. No matter what your choice is, Snake is a solid choice when it comes to the best characters.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595264393/Ultimate%20Characters/Icons/v5776tdmn4axkpjk46n9.png",
      portrait: Asset.fromModule(require("../assets/images/Snake.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Snake.png")
      ).uri,
    },
    name: "Snake",
    id: "31",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MetalGearSymbol.png")
      ).uri,
      name: "Metal Gear",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/IkeHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Ike is another character from the Fire Emblem game with an awesome fighting strategy. His melee attacks are deadly, and he can easily take down enemies when he starts fighting. He's a great character to choose when it comes down to who you're going up against.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595264563/Ultimate%20Characters/Icons/exnw4xwqdqa5zht1xsyf.png",
      portrait: Asset.fromModule(require("../assets/images/Ike.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ike.png")
      ).uri,
    },
    name: "Ike",
    id: "32",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PokemonTrainerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "When you are the Pokémon Trainer, you have three different Pokémon to choose from. Whether you pick Squirtle, Ivysaur, or Charizard, you'll be sure to take down any opponents that come your way. Don't forget that you can switch between any of those Pokémon as well!",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595264862/Ultimate%20Characters/Icons/yvnxrxzchwuctsjprkhc.png",
      portrait: Asset.fromModule(
        require("../assets/images/Pokemon_Trainer.png")
      ).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pokemon_Trainer.png")
      ).uri,
    },
    name: "Pokemon Trainer",
    id: "33-35",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DiddyKongHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Everyone's favorite goofy monkey has made his way into Smash Bros once again! Use his extra powers, like the jetpack and his wooden gun, and continue the fight with melee to defeat your enemies. Take on your opponents as Diddy and use your ultimate against all of them.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265008/Ultimate%20Characters/Icons/qewoja1kyygqbcqtj0ty.png",
      portrait: Asset.fromModule(require("../assets/images/Diddy_Kong.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Diddy_Kong.png")
      ).uri,
    },
    name: "Diddy Kong",
    id: "36",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/DKSymbol.png")
      ).uri,
      name: "Donkey Kong",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LucasHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Lucas is a cute little boy who has a lot more to him than just his adorable looks. With his melee attacks and a friend to help him along the way, he has a lot to him, plus magical powers to take on enemies. Make sure to use his attacks to your advantage when you use him against all of your opponents.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265199/Ultimate%20Characters/Icons/axcr2z2uhwbzdljdgsk5.png",
      portrait: Asset.fromModule(require("../assets/images/Lucas.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Lucas.png")
      ).uri,
    },
    name: "Lucas",
    id: "37",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/EarthboundSymbol.png")
      ).uri,
      name: "EarthBound",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SonicHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Sonic's speed is the thing that truly makes him a great character to play with. His fast punches and ability to sprint towards enemies help him be a great competitor. Not only can you also play as Knuckles, but when you use Sonic's ultimate, you harness all the powers of all the other Sonic characters.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265319/Ultimate%20Characters/Icons/i8du3ktijy2ceifcl7rs.png",
      portrait: Asset.fromModule(require("../assets/images/Sonic.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Sonic.png")
      ).uri,
    },
    name: "Sonic",
    id: "38",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/SonicSymbol.png")
      ).uri,
      name: "Sonic",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/KingDededeHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "King Dedede is another fun villain that you can pick up while playing Super Smash Bros. As a Kirby Villain, he has a bit of the same abilities as Kirby with his own twist. Wielding his giant hammer, he can smash down his opponents with a few swift hits.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265460/Ultimate%20Characters/Icons/r6cduawxidkezml8khdx.png",
      portrait: Asset.fromModule(require("../assets/images/King_Dedede.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/King_Dedede.png")
      ).uri,
    },
    name: "King Dedede",
    id: "39",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KirbySymbol.png")
      ).uri,
      name: "Kirby",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/OlimarHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Olimar uses his plants to his advantage when he takes on his opponents in Super Smash Bros. Whenever he attacks, his alien friends are always there to aid him against enemies. You can even play as Louie and use your spaceship when making your ultimate move.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265648/Ultimate%20Characters/Icons/v4vmilfphcpdnc1heilp.png",
      portrait: Asset.fromModule(require("../assets/images/Olimar.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Olimar.png")
      ).uri,
    },
    name: "Olimar",
    id: "40",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PikminSymbol.png")
      ).uri,
      name: "Pikmin",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LucarioHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Lucario is another stand-alone Pokemon that can operate without the Pokemon trainer, and it does well without one anyways. With its magical powers, it can take on its opponents with different magic to hurt them in different ways. Lucario is an excellent Pokemon to choose when fighting against other opponents throughout this game.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265813/Ultimate%20Characters/Icons/use8lbowukfewcfzy3il.png",
      portrait: Asset.fromModule(require("../assets/images/Lucario.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Lucario.png")
      ).uri,
    },
    name: "Lucario",
    id: "41",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/ROBHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "R.O.B. is a fun character for everyone to play, as who has silly yet awesome moves. From drilling opponents into the ground to using his underside to burn them away, there are loads of goofy moves you can use on opponents. Don't let his silliness fool you; he is still a very worthy opponent.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595265939/Ultimate%20Characters/Icons/vaoggp5lxk1qr4wocf2v.png",
      portrait: Asset.fromModule(require("../assets/images/ROB.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/ROB.png")
      ).uri,
    },
    name: "R.O.B.",
    id: "42",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ROBSymbol.png")
      ).uri,
      name: "R.O.B.",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/ToonLinkHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Toon Link is a very cute competitor when it comes to the others in the competition with him. With his little shield, sword, and bow and arrow, he proves to be a tougher enemy than others would have thought. Whether he's using his bow for long-distance or attacking with his ultimate, Toon Link is a good option when it comes to this game.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595266122/Ultimate%20Characters/Icons/vqmqapbk94jdzat6g6tc.png",
      portrait: Asset.fromModule(require("../assets/images/Toon_Link.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Toon_Link.png")
      ).uri,
    },
    name: "Toon Link",
    id: "43",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ZeldaSymbol.png")
      ).uri,
      name: "Zelda",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["Brawl"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/WolfHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wii-logo.png")
    ).uri,
    description:
      "Wolf is the last of the Starfox characters to be named, but he is not in the least bit any less than the others. Not only does he have claws to attack others with, but he also has a gun he can use from long range. With metal claws and a long-range weapon, what could possibly go wrong for this go-getter?",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595266237/Ultimate%20Characters/Icons/momtovlmoul2gs5tlenu.png",
      portrait: Asset.fromModule(require("../assets/images/Wolf.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Wolf.png")
      ).uri,
    },
    name: "Wolf",
    id: "44",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StarFoxSymbol.png")
      ).uri,
      name: "Star Fox",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/VillagerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "I like to think of the villager as the most realistic of all of the characters in the Smash Bros. games. It uses its resources to take down enemies and even has other Animal Crossing friends to help it with its ultimate move! It's a cute little character that's smart with the way it fights.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595550229/Ultimate%20Characters/Icons/f0a03rl1wrgwfl4rcwwt.png",
      portrait: Asset.fromModule(require("../assets/images/Villager.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Villager.png")
      ).uri,
    },
    name: "Villager",
    id: "45",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/AnimalCrossingSymbol.png")
      ).uri,
      name: "Animal Crossing",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MegaManHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Mega Man is one of the coolest characters in Super Smash Bros based on the fact that you can play as every version of Mega Man. No matter what version of Mega Man you choose, they each have a special ability to use against their opponents. Check out which version might be the best for each fight you're encountering.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595550778/Ultimate%20Characters/Icons/ez6sg3td4pq0o0wcbdoj.png",
      portrait: Asset.fromModule(require("../assets/images/Mega_Man.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mega_Man.png")
      ).uri,
    },
    name: "Mega Man",
    id: "46",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MegaManSymbol.png")
      ).uri,
      name: "Mega Man",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/WiiFitTrainerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "The Wii Fit Trainer is one of my favorite characters because it's so fun to watch someone beat up with yoga poses. Whether you play as the male or female trainer, all of your attacks will be different yoga poses against any enemy. What better way to get fit than fighting for your life?",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595551025/Ultimate%20Characters/Icons/xacbfbddsmooqyogsvrc.png",
      portrait: Asset.fromModule(
        require("../assets/images/Wii_Fit_Trainer.png")
      ).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Wii_Fit_Trainer.png")
      ).uri,
    },
    name: "Wii Fit Trainer",
    id: "47",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/WiiFitSymbol.png")
      ).uri,
      name: "Wii Fit",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/RosalinaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Rosalina and Luma are a sort of package deal when it comes to Super Smash Ultimate. As Rosalina casts spells, Luma is there to protect Rosalina from other attacks. When these two are together, there is no force to stop them.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595551321/Ultimate%20Characters/Icons/jszwwl83pbkc2gy7uj0y.png",
      portrait: Asset.fromModule(require("../assets/images/Rosalina.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Rosalina.png")
      ).uri,
    },
    name: "Rosalina & Luma",
    id: "48",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/LittleMacHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "This boxer has some killer punches that can knock down opponents as swiftly as he gives them out. Charge up punches when you get the chance to show them what you've got. Little Mac is great at giving them the old one-two to take on whatever enemy comes his way.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595551548/Ultimate%20Characters/Icons/e0t8wsr9xruc3c74scke.png",
      portrait: Asset.fromModule(require("../assets/images/Little_Mac.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Little_Mac.png")
      ).uri,
    },
    name: "Little Mac",
    id: "49",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PunchOutSymbol.png")
      ).uri,
      name: "Punch-Out!!",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/GreninjaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Here's a Pokemon you can use outside of the Pokemon Trainer that has a mind of his own. He's as quick as he is stealthy, and he uses these powers to his advantage. Greninja is a great character to use against any opponent where it might be better to sneak around them.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595551923/Ultimate%20Characters/Icons/itsfz1r92y3iqgtm4qvo.png",
      portrait: Asset.fromModule(require("../assets/images/Greninja.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Greninja.png")
      ).uri,
    },
    name: "Greninja",
    id: "50",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MiiBrawlerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Mii Fighter is one of three Miis you can choose between to see which best fits your enemy. Whether you choose Brawler, Swordfight, or Gunner, you'll be sure to take down any enemy that comes your way. Who knows, they might even be dressed as some familiar characters.",
    availability: "Custom",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552332/Ultimate%20Characters/Icons/wzxqsikk2zq9jspwl9bm.png",
      portrait: Asset.fromModule(require("../assets/images/Mii_Brawler.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mii_Brawler.png")
      ).uri,
    },
    name: "Mii Brawler",
    id: "51",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/SmashBrosSymbol.png")
      ).uri,
      name: "Ultimate",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MiiSwordfighterHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Mii Fighter is one of three Miis you can choose between to see which best fits your enemy. Whether you choose Brawler, Swordfight, or Gunner, you'll be sure to take down any enemy that comes your way. Who knows, they might even be dressed as some familiar characters.",
    availability: "Custom",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552434/Ultimate%20Characters/Icons/sc5k2mb8cgfuaqhcsejf.png",
      portrait: Asset.fromModule(
        require("../assets/images/Mii_Swordfighter.png")
      ).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mii_Swordfighter.png")
      ).uri,
    },
    name: "Mii Swordfighter",
    id: "52",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/SmashBrosSymbol.png")
      ).uri,
      name: "Ultimate",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MiiGunnerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Mii Fighter is one of three Miis you can choose between to see which best fits your enemy. Whether you choose Brawler, Swordfight, or Gunner, you'll be sure to take down any enemy that comes your way. Who knows, they might even be dressed as some familiar characters.",
    availability: "Custom",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552507/Ultimate%20Characters/Icons/wi8suczj7o1wwrfvapn4.png",
      portrait: Asset.fromModule(require("../assets/images/Mii_Gunner.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Mii_Gunner.png")
      ).uri,
    },
    name: "Mii Gunner",
    id: "53",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/SmashBrosSymbol.png")
      ).uri,
      name: "Ultimate",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PalutenaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Palutena is an angelic woman who has no regrets about taking down her enemies. With both her staff and shield aiding her attacks, she is essentially an unstoppable force. Aid Palutena in her quest to take on those who threaten her mission.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552666/Ultimate%20Characters/Icons/rk39ts4tibwb5ne9icou.png",
      portrait: Asset.fromModule(require("../assets/images/Palutena.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Palutena.png")
      ).uri,
    },
    name: "Palutena",
    id: "54",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KidIcarusSymbol.png")
      ).uri,
      name: "Kid Icarus",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/Pac-ManHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "The big yellow man himself is using his skills to take others down in this game. Not only do his attacks pay tribute to his beginnings, but he has also learned how to use his fists against others. You now get to experience older Pac-Man as well as an awesome updated version.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552783/Ultimate%20Characters/Icons/vzz3x3ssvytgupyp3qog.png",
      portrait: Asset.fromModule(require("../assets/images/Pac-Man.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pac-Man.png")
      ).uri,
    },
    name: "Pac-Man",
    id: "55",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PacManSymbol.png")
      ).uri,
      name: "Pac-Man",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/RobinHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Robin is just that person if you're looking for a spell caster who can also double as a warrior. You can either be a male or female, but either way, you're just as awesome. Whether you go the spell route or decide to get your hands or sword, dirty, Robin is the way to take down any opponents.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595552922/Ultimate%20Characters/Icons/tloqxpo9hmeovslexn6m.png",
      portrait: Asset.fromModule(require("../assets/images/Robin.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Robin.png")
      ).uri,
    },
    name: "Robin",
    id: "56",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/ShulkHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Shulk has an advantage with the weapon he has chosen to take down his enemies with. With it being both a blade and a gun, he can take down anyone whether they're in close combat or even several feet away. He also harnesses the powers of all of his friends when he uses his ultimate on his opponents.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553030/Ultimate%20Characters/Icons/ggdtogz09jiiu4w3lzwl.png",
      portrait: Asset.fromModule(require("../assets/images/Shulk.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Shulk.png")
      ).uri,
    },
    name: "Shulk",
    id: "57",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/XenobladeSymbol.png")
      ).uri,
      name: "Xenoblade",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/BowserJrHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Here's another character that won't be much of a surprise to those coming back from the other Super Smash Bros. games. Bowser Jr. is a worthy opponent with a few new tricks up his sleeve when it comes to battle, whether it's just him or a few of his fellow misfits as well. He'll be another great character that you'll want to use throughout your gameplay.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553178/Ultimate%20Characters/Icons/kxm4lzndmj4yxcs1l9hx.png",
      portrait: Asset.fromModule(require("../assets/images/Bowser_Jr.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Bowser_Jr.png")
      ).uri,
    },
    name: "Bowser Jr.",
    id: "58",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/DuckHuntHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Duck Hunt uses the forces that once worked against each other and has them work together to fight each other. The dog and the duck work together to take on opponents, as well as a pixelated man with a gun that can pop up and take on your opponents. This duo is a great pair for you to be able to take on others.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553304/Ultimate%20Characters/Icons/rhbwlrbzfaxoqtokr7yf.png",
      portrait: Asset.fromModule(require("../assets/images/Duck_Hunt.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Duck_Hunt.png")
      ).uri,
    },
    name: "Duck Hunt",
    id: "59",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/DuckHuntSymbol.png")
      ).uri,
      name: "Duck Hunt",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/RyuHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Ryu is bringing his Street Fighter expertise from his own game into the world of Super Smash Bros once again. Not only does he continue to fight with his fists, but he still has his Hadoken. When he uses Hadoken, his opponents will definitely be feeling it later.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553458/Ultimate%20Characters/Icons/hk7szzdgutkt9u4i8kov.png",
      portrait: Asset.fromModule(require("../assets/images/Ryu.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ryu.png")
      ).uri,
    },
    name: "Ryu",
    id: "60",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StreetFighterSymbol.png")
      ).uri,
      name: "Street Fighter",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(require("../assets/icons/Emblems/KenHeadSSBU.png"))
      .uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "He's the brother of Ryu, and he has his own slot in Super Smash Bros. Ultimate. Ken Masters comes in as an echo character, meaning he features roughly the same moves and abilities as someone else in the game. That someone else is Ryu, though Ken will have special effects and even have different kicking animations.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553607/Ultimate%20Characters/Icons/ctvo71pqwbljfxucwwsj.png",
      portrait: Asset.fromModule(require("../assets/images/Ken.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ken.png")
      ).uri,
    },
    name: "Ken",
    id: "1060",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StreetFighterSymbol.png")
      ).uri,
      name: "Street Fighter",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/CloudHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Play as one of your favorite Final Fantasy characters when you pick Cloud when playing this game. Whether you use melee attacks or special magic attacks, you'll be sure to take down your opponents when you play as Cloud.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553876/Ultimate%20Characters/Icons/yk2vhtzoeno1yo34ezng.png",
      portrait: Asset.fromModule(require("../assets/images/Cloud.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Cloud.png")
      ).uri,
    },
    name: "Cloud",
    id: "61",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StreetFighterSymbol.png")
      ).uri,
      name: "Final Fantasy",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/CorrinHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Whether you're a female or male, Corwin is a great character to choose when you go through this game. As a character from Fire Emblem, you can use your melee attack or transform your ultimate hit. Corwin is a wonderful choice for whomever you fight.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595553876/Ultimate%20Characters/Icons/yk2vhtzoeno1yo34ezng.png",
      portrait: Asset.fromModule(require("../assets/images/Corrin.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Corrin.png")
      ).uri,
    },
    name: "Corrin",
    id: "61",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSB4"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/BayonettaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/wiiu-logo.png")
    ).uri,
    description:
      "Bayonetta is once again in Super Smash Bros. This time we see her in her Bayonetta 2 costume and her original look. With guns in her shoes along with teleportation, Bayonetta is a force to be reckoned with.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595554138/Ultimate%20Characters/Icons/nman7jnoazuhef5sau0s.png",
      portrait: Asset.fromModule(require("../assets/images/Bayonetta.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Bayonetta.png")
      ).uri,
    },
    name: "Bayonetta",
    id: "63",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/BayonettaSymbol.png")
      ).uri,
      name: "Bayonetta",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/InklingHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "This one is a given if you've seen the trailer when the game was announced in the last Nintendo Direct. The original Inklings will be new characters to the Smash Bros gaming universe, but they won't be the only newbies on this list.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595554138/Ultimate%20Characters/Icons/nman7jnoazuhef5sau0s.png",
      portrait: Asset.fromModule(require("../assets/images/Inkling.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Inkling.png")
      ).uri,
    },
    name: "Inkling",
    id: "64",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/SplatoonSymbol.png")
      ).uri,
      name: "Splatoon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/RidleyHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "The new character that has everyone even more incredibly excited for Super Smash Bros Ultimate has got to be Ridley. From Metroid to SSB, his debut has proven to be quite incredible, considering his attacks. From fireballs to using his tail as a spear, this has got to be one of the coolest new characters in this game.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595698333/Ultimate%20Characters/Icons/kxmmeakhmba5pxijb8ay.png",
      portrait: Asset.fromModule(require("../assets/images/Ridley.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Ridley.png")
      ).uri,
    },
    name: "Ridley",
    id: "65",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MetroidSymbol.png")
      ).uri,
      name: "Metroid",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SimonHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Everyone's favorite vampire hunter is making his way to the Super Smash Bros. pantheon. When you play as Simon, you will get access to his iconic whip, and his finishers will include a few other recognizable items from the Castlevania franchise.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595698474/Ultimate%20Characters/Icons/smmkbvyoaazxzjyvl5if.png",
      portrait: Asset.fromModule(require("../assets/images/Simon.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Simon.png")
      ).uri,
    },
    name: "Simon",
    id: "66",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/CastlevaniaSymbol.png")
      ).uri,
      name: "Castlevania",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/RichterHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Richter is a character from Castlevania lore, an echo of Simon, with the two sharing many of the same attacks and abilities. The one difference is that his holy water attack is a different color. Richter first appeared in Castlevania: Rondo of Blood, where he went on a quest to save a blood relative.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595698599/Ultimate%20Characters/Icons/czu2zelvmwdktwfnolxt.png",
      portrait: Asset.fromModule(require("../assets/images/Richter.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Richter.png")
      ).uri,
    },
    name: "Richter",
    id: "066",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/CastlevaniaSymbol.png")
      ).uri,
      name: "Castlevania",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/KingKRoolHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "The bane of Donkey and Diddy Kong's existence, King K. Rool is a newcomer to Smash, and he's back to cause more headaches for the ape brothers. K. Rool is a stable antagonist in the Donkey Kong series. In Smash Bros. Ultimate, his Final Smash attack is the Blast-O-Matic, designed to destroy DK Island.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595698772/Ultimate%20Characters/Icons/xfp1vgwbrwejst5dmttz.png",
      portrait: Asset.fromModule(require("../assets/images/King_K._Rool.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/King_K._Rool.png")
      ).uri,
    },
    name: "King K. Rool",
    id: "67",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/DKSymbol.png")
      ).uri,
      name: "Donkey Kong",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/IsabelleHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Although you'd think Isabelle would be an echo form of Villager, this Animal Crossing veteran comes to the stage with her own full list of moves, abilities, attacks, and animations. (I mean, she'd have to, right? The Villager is human, after all.) Isabelle is an expert at closing the distance using her fishing rod to pull her foes in and recover from being knocked off platforms.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595698901/Ultimate%20Characters/Icons/zybbki3g0hwmpa6ybb4b.png",
      portrait: Asset.fromModule(require("../assets/images/Isabelle.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Isabelle.png")
      ).uri,
    },
    name: "Isabelle",
    id: "68",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/AnimalCrossingSymbol.png")
      ).uri,
      name: "Animal Crossing",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/IncineroarHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "This Pokemon character has been envisioned as a wrestler. Inceneroar's strength allows him to throw opponents further than anyone in the game, though the downside to using it is its undying need to taunt opponents after big moves. Master the art of canceling these taunts, and you'll be hard to deal with.",
    availability: "Unlockable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699009/Ultimate%20Characters/Icons/s2fdhbzperd5qhvkav6s.png",
      portrait: Asset.fromModule(require("../assets/images/Incineroar.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Incineroar.png")
      ).uri,
    },
    name: "Incineroar",
    id: "69",
    series: {
      price: "4.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PokemonSymbol.png")
      ).uri,
      name: "Pokemon",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PiranhaPlantHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Everyone disregards the big violent flower with teeth trying to get Mario to the depths of the tunnel it protects. Well, the joke's on them now because Piranha Plant comes to Super Smash Bros. Ultimate as a playable character! It throws spiked balls and spits poison, and just because it has a tunnel for feet doesn't mean it can't kick you off the stage.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699149/Ultimate%20Characters/Icons/zwn1q3ctncghuitbybo3.png",
      portrait: Asset.fromModule(require("../assets/images/Piranha_Plant.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Piranha_Plant.png")
      ).uri,
    },
    name: "Piranha Plant",
    id: "70",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MarioSymbol.png")
      ).uri,
      name: "Super Mario",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/JokerHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "This awesome character from Persona 5 wields a gun and a sword to keep people at bay. You'll also be able to use Arsene, Joker's default Persona, to fight off opponents.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699295/Ultimate%20Characters/Icons/clwi7yt9k2thtcs6sfkk.png",
      portrait: Asset.fromModule(require("../assets/images/Joker.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Joker.png")
      ).uri,
    },
    name: "Joker",
    id: "71",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/PersonaSymbol.png")
      ).uri,
      name: "Persona",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/HeroHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "The main character from Dragon Quest (DQ) joins the fray bringing with him his trusted sword and shield as well as several new attacks for players to enjoy. He has the most unique attacks of any other player because he can cast spells. Hero has four different forms to choose from: Eleven from DQXI, Aursu from DQQIII, Solo from DQIV, and Eight from DQVIII.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699474/Ultimate%20Characters/Icons/nee4ttazorwhvu3xm5ft.png",
      portrait: Asset.fromModule(require("../assets/images/Hero.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Hero.png")
      ).uri,
    },
    name: "Hero",
    id: "72",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/DragonQuestSymbol.png")
      ).uri,
      name: "Dragon Quest",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/Banjo&KazooieHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "For the first time, this bird and bear duo have come to Super Smash Bros. They bring with them plenty of new attacks as well as new music and arenas.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699735/Ultimate%20Characters/Icons/pzutype0y89ulck3gs3h.png",
      portrait: Asset.fromModule(require("../assets/images/Banjoo_Kazooie.png"))
        .uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Banjoo_Kazooie.png")
      ).uri,
    },
    name: "Banjo & Kazooie",
    id: "73",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/BanjoKazooieSymbol.png")
      ).uri,
      name: "Banjo-Kazooie",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/TerryHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "The main protagonist from the Fatal Fury series enters the fray. He automatically faces his opponents when on the stage and is best known for his martial barrage of punch and kick attacks.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699847/Ultimate%20Characters/Icons/lynnfsewq7grm3eiygx2.png",
      portrait: Asset.fromModule(require("../assets/images/Terry.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Terry.png")
      ).uri,
    },
    name: "Terry",
    id: "74",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FatalFurySymbol.png")
      ).uri,
      name: "Fatal Fury",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/BylethHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Byleth is a skilled fighter from Fire Emblem: Three Houses. Since players have the chance of choosing between playing a male or female version of Byleth in that game, both versions are available in Super Smash Bros. Ultimate.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595699952/Ultimate%20Characters/Icons/aibsspkpveu4yw4fg2xf.png",
      portrait: Asset.fromModule(require("../assets/images/Byleth.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Byleth.png")
      ).uri,
    },
    name: "Byleth",
    id: "75",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/FireEmblemSymbol.png")
      ).uri,
      name: "Fire Emblem",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/MinMinHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Min Min joins the Super Smash Bros arena from the Nintendo Switch game ARMS. Given this origin, her attacks are primarily punches and focus on the special ability of her extra lengthy arms.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Min_Min.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Min_Min.png")
      ).uri,
    },
    name: "Min Min",
    id: "76",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/ARMSSymbol.png")
      ).uri,
      name: "ARMS",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SteveHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Considering that Minecraft is one of the best-selling games of all time, it's not too surprising that its characters made their way into this ultimate fighter. Steve has some of the best attacks in the game and has a very unique playstyle. He's an excellent choice for any player.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Steve.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Steve.png")
      ).uri,
    },
    name: "Steve",
    id: "77",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/MinecraftSymbol.png")
      ).uri,
      name: "MINECRAFT",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SephirothHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "The reveal for this popular Final Fantasy character made it look like Mario had met his end on Sephiroth's long blade, but Cloud showed up to save the day. In addition to his Sword, Sephiroth launches projectiles that can deal a lot of damage.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Sephiroth.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Sephiroth.png")
      ).uri,
    },
    name: "Sephiroth",
    id: "78",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/StreetFighterSymbol.png")
      ).uri,
      name: "Final Fantasy",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/PyraHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Anyone who's played Xenoblade Chronicles 2 will recognize this pair of fighters. Players can switch between the two characters with ease. Pyra is faster but weaker, while Mythra is a little slower by deals more damage.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Pyra.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Pyra.png")
      ).uri,
    },
    name: "Pyra/Mythra",
    id: "79",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/XenobladeSymbol.png")
      ).uri,
      name: "Xenoblade",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/KazuyaHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "From one fighting ring to another, Kazuya enters Smash Bros. Ultimate! Kazuya is a classic Tekken character ready to bring his martial arts style to the Smash Bros world. Players who choose him can battle with an iron fist!",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Kazuya.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Kazuya.png")
      ).uri,
    },
    name: "Kazuya",
    id: "80",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/TekkenSymbol.png")
      ).uri,
      name: "Tekken",
    },
  },
  {
    selected: 0,
    alsoAppearsIn: ["SSBU"],
    emblem: Asset.fromModule(
      require("../assets/icons/Emblems/SoraHeadSSBU.png")
    ).uri,
    debut: Asset.fromModule(
      require("../assets/icons/franchise_icons/switch-logo.png")
    ).uri,
    description:
      "Sora is a very light fighter who wields a Key Blade for up-close attacks. However, he can also shoot Fire, Ice, and Lightning at opponents from a distance. Unfortunately, none of his Disney friends appear at his side, but his alternative costumes include his outfits from the three main Kingdom Hearts games.",
    availability: "Downloadable",
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595700128/Ultimate%20Characters/Icons/tlzzdzaoswd0jzwmcocr.png",
      portrait: Asset.fromModule(require("../assets/images/Sora.png")).uri,
      portrait_2: Asset.fromModule(
        require("../assets/images/Character_Images/Sora.png")
      ).uri,
    },
    name: "Sora",
    id: "81",
    series: {
      price: "6.99",
      icon: Asset.fromModule(
        require("../assets/icons/franchise_icons/KingdomHeartsSymbol.png")
      ).uri,
      name: "Kingdom Hearts",
    },
  },
  // {
  //   selected: 0,
  //   alsoAppearsIn: ["SSBU"],
  //   debut: Asset.fromModule(require("../assets/icons/franchise_icons/switch-logo.png")).uri,
  //   description: "Random",
  //   availability: "Random",
  //   images: {
  //     icon: "",
  //     portrait: Asset.fromModule(require("../assets/images/Question.png")).uri,
  //   },
  //   name: "Random",
  //   id: "82",
  //   series: {
  //     price: "",
  //     icon: "",
  //     name: "",
  //   },
  // },
];
export default CharacterList;

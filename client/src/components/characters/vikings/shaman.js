import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Shaman',
  role:'Assassin',
  faction:'Vikings',
  image:'images/heroes/vikings/shaman.png',
  feats:[feats.level1.rush,feats.level1.stealth,feats.level1.stunTrap,
          feats.level2.bearTrap,feats.level2.fleshWound,feats.level2.revengeAttack,
          feats.level3.fury,feats.level3.secondWind,feats.level3.throwingAxe,
          feats.level4.fireFlask,feats.level4.nailBomb,feats.level4.scout],
  perks:{
    common:[perks.devourer,perks.remedy,perks.supersonic],
    rare:perks.endurance,
    heroic:perks.cleverTactics,
    epic:perks.headHunter,
    legendary:perks.crushThem
  }

}

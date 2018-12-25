import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Berserker',
  role:'Assassin',
  faction:'Vikings',
  image:'images/heroes/vikings/berserker.png',
  feats:[feats.level1.stunTrap,feats.level1.bountyHunter,feats.level1.rush,
          feats.level2.doomBanner,feats.level2.bearTrap,feats.level2.revengeAttack,
          feats.level3.sharpenBlade,feats.level3.fury,feats.level3.throwingAxe,
          feats.level4.fearItself,feats.level4.berserker,feats.level4.fireFlask],
  perks:{
    common:[perks.galestorm,perks.devourer,perks.earlyReaper],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.crushThem,
    legendary:perks.headHunter
  }

}

import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Orochi',
  role:'Assassin',
  faction:'Samurai',
  image:'images/heroes/samurai/orochi.png',
  feats:[feats.level1.ironLungs,feats.level1.bountyHunter,feats.level1.kiai,
          feats.level2.smokeBomb,feats.level2.kunai,feats.level2.revengeAttack,
          feats.level3.longBow,feats.level3.sharpenBlade,feats.level3.slipThrough,
          feats.level4.fearItself,feats.level4.nailBomb,feats.level4.arrowStorm],
  perks:{
    common:[perks.galestorm,perks.devourer,perks.earlyReaper],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.crushThem,
    legendary:perks.headHunter
  }

}

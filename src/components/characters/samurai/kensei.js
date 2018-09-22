import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Kensei',
  role:'Vanguard',
  faction:'Samurai',
  image:'images/heroes/samurai/kensei.png',
  feats:[feats.level1.fastRecovery,feats.level1.bodyCount,feats.level1.ironLungs,
          feats.level2.inspire,feats.level2.smokeBomb,feats.level2.chillingStare,
          feats.level3.secondWind,feats.level3.longBow,feats.level3.steadFast,
          feats.level4.arrowStorm,feats.level4.stalwartBanner,feats.level4.unblockable],
  perks:{
    common:[perks.shieldsUp,perks.aegis,perks.devourer],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.headHunter,
    legendary:perks.freshFocus
  }

}

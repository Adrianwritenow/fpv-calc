import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Aramusha',
  role:'Hybrid',
  faction:'Samurai',
  image:'images/heroes/samurai/aramusha.png',
  feats:[feats.level1.ironLungs,feats.level1.bodyCount,feats.level1.deadly,
          feats.level2.smokeBomb,feats.level2.juggernaut,feats.level2.rockSteady,
          feats.level3.secondWind,feats.level3.sharpenBlade,feats.level3.longBow,
          feats.level4.arrowStorm,feats.level4.stalwartBanner,feats.level4.fearItself],
  perks:{
    common:[perks.aegis,perks.shieldsUp,perks.bastion],
    rare:perks.vengefulBarrier,
    heroic:perks.lastStand,
    epic:perks.freshFocus,
    legendary:perks.bulkUp
  }

}

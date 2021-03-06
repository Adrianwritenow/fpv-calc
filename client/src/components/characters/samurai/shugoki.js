import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Shugoki',
  role:'Heavy',
  faction:'Samurai',
  image:'images/heroes/samurai/shugoki.png',
  feats:[feats.level1.ironLungs,feats.level1.speedRevive,feats.level1.throwFarther,
          feats.level2.rockSteady,feats.level2.smokeBomb,feats.level2.juggernaut,
          feats.level3.punchThrough,feats.level3.longBow,feats.level3.hardToKill,
          feats.level4.staggeringBlow,feats.level4.arrowStorm,feats.level4.regenerate],
  perks:{
    common:[perks.remedy,perks.bastion,perks.felineAgility],
    rare:perks.vengefulBarrier,
    heroic:perks.lastStand,
    epic:perks.bulkUp,
    legendary:perks.risingDawn
  }

}

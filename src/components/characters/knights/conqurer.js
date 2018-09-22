import feats from '../../feats';
import perks from '../../perks';


export default{
  name:'Conqurer',
  role:'Heavy',
  faction:'Knights',
  image:'images/heroes/knights/conqueror.png',
  feats:[feats.level1.speedRevive,feats.level1.conqueror,feats.level1.bodyCount,
          feats.level2.juggernaut,feats.level2.shieldBasher,feats.level2.fiatLux,
          feats.level3.punchThrough,feats.level3.healOnBlock,feats.level3.pugnoMortis,
          feats.level4.dauntless,feats.level4.regenerate,feats.level4.catapult],
  perks:{
    common:[perks.remedy,perks.bastion,perks.felineAgility],
    rare:perks.vengefulBarrier,
    heroic:perks.lastStand,
    epic:perks.bulkUp,
    legendary:perks.risingDawn
  }
}

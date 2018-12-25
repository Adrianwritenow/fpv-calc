import feats from '../../feats';
import perks from '../../perks';


export default{
  name:'Highlander',
  role:'Hybrid',
  faction:'Vikings',
  image:'images/heroes/vikings/highlander.png',
  feats:[feats.level1.rush,feats.level1.bodyCount,feats.level1.fastRecovery,
          feats.level2.bearTrap,feats.level2.inspire,feats.level2.winnersAdvantage,
          feats.level3.secondWind,feats.level3.longBow,feats.level3.fury,
          feats.level4.spearStorm,feats.level4.fireFlask,feats.level4.championsAura],
  perks:{
    common:[perks.aegis,perks.shieldsUp,perks.bastion],
    rare:perks.vengefulBarrier,
    heroic:perks.lastStand,
    epic:perks.freshFocus,
    legendary:perks.bulkUp
  }

}

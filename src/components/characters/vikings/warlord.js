import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Warlord',
  role:'Heavy',
  faction:'Vikings',
  image:'images/heroes/vikings/warlord.png',
  feats:[feats.level1.speedRevive,feats.level1.rush,feats.level1.deadly,
          feats.level2.bearTrap,feats.level2.juggernaut,feats.level2.fleshWound,
          feats.level3.fury,feats.level3.punchThrough,feats.level3.toughAsNails,
          feats.level4.regenerate,feats.level4.autoRevive,feats.level4.fireFlask],
  perks:{
    common:[perks.aegis,perks.shieldsUp,perks.bastion],
    rare:perks.vengefulBarrier,
    heroic:perks.lastStand,
    epic:perks.freshFocus,
    legendary:perks.bulkUp
  }

}

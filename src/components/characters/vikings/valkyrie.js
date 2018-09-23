import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Valkyrie',
  role:'Hybrid',
  faction:'Vikings',
  image:'images/heroes/vikings/valkyrie.png',
  feats:[feats.level1.rush,feats.level1.deadly,feats.level1.bountyHunter,
          feats.level2.bloodLust,feats.level2.bearTrap,feats.level2.juggernaut,
          feats.level3.javelin,feats.level3.fury,feats.level3.sharpenBlade,
          feats.level4.scout,feats.level4.fireFlask,feats.level4.regenerate],
  perks:{
    common:[perks.radiantRebound,perks.remedy,perks.felineAgility],
    rare:perks.supersonic,
    heroic:perks.cleverTactics,
    epic:perks.risingDawn,
    legendary:perks.rapidRefresh
  }
}

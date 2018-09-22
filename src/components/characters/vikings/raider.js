import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Raider',
  role:'Vanguard',
  faction:'Vikings',
  image:'images/heroes/vikings/raider.png',
  feats:[feats.level1.rush,feats.level1.tireless,feats.level1.bodyCount,
          feats.level2.markedForDeath,feats.level2.inspire,feats.level2.bearTrap,
          feats.level3.secondWind,feats.level3.fury,feats.level3.battleCry,
          feats.level4.fireFlask,feats.level4.stalwartBanner,feats.level4.slippery],
  perks:{
    common:[perks.shieldsUp,perks.aegis,perks.devourer],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.headHunter,
    legendary:perks.freshFocus
  }

}

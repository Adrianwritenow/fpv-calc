import feats from '../../feats';
import perks from '../../perks';


export default{
  name:'Warden',
  role:'Vanguard',
  faction:'Knights',
  image:'images/heroes/knights/warden.png',
  feats:[feats.level1.bodyCount,feats.level1.conqueror,feats.level1.comeAtMe,
          feats.level2.inspire,feats.level2.fiatLux,feats.level2.thickBlood,
          feats.level3.secondWind,feats.level3.pugnoMortis,feats.level3.takedown,
          feats.level4.catapult,feats.level4.stalwartBanner,feats.level4.moraleBooster],
  perks:{
    common:[perks.shieldsUp,perks.aegis,perks.devourer],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.headHunter,
    legendary:perks.freshFocus
  }
}

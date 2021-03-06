import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Centurion',
  faction:'Knights',
  role:'Hybrid',
  image:'images/heroes/knights/centurion.png',
  feats:[feats.level1.ironLungs,feats.level1.bountyHunter,feats.level1.rush,
          feats.level2.inspire,feats.level2.haymaker,feats.level2.centurionsMarch,
          feats.level3.secondWind,feats.level3.pugio,feats.level3.sharpenBlade,
          feats.level4.catapult,feats.level4.stalwartBanner,feats.level4.phalanx],
  perks:{
    common:[perks.galestorm,perks.devourer,perks.earlyReaper],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.crushThem,
    legendary:perks.headHunter
  }

}

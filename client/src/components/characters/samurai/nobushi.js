import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Nobushi',
  role:'Hybrid',
  faction:'Samurai',
  image:'images/heroes/samurai/nobushi.png',
  feats:[feats.level1.ironLungs,feats.level1.speedRevive,feats.level1.bodyCount,
          feats.level2.arrowStrike,feats.level2.smokeBomb,feats.level2.revengeAttack,
          feats.level3.secondWind,feats.level3.longBow,feats.level3.sharpenBlade,
          feats.level4.stalwartBanner,feats.level4.arrowStorm,feats.level4.fireTrap],
  perks:{
    common:[perks.radiantRebound,perks.remedy,perks.felineAgility],
    rare:perks.supersonic,
    heroic:perks.cleverTactics,
    epic:perks.risingDawn,
    legendary:perks.rapidRefresh
  }

}

import feats from '../../feats';
import perks from '../../perks';


export default{
  name:'Peacekeeper',
  role:'Assassin',
  faction:'Knights',
  image:'images/heroes/knights/peacekeeper.png',
  feats:[feats.level1.stealth,feats.level1.bountyHunter,feats.level1.conqueror,
          feats.level2.fiatLux,feats.level2.thickSkin,feats.level2.revengeAttack,
          feats.level3.crossBow,feats.level3.pugnoMortis,feats.level3.sharpenBlade,
          feats.level4.catapult,feats.level4.fearItself,feats.level4.lastLaugh],
  perks:{
    common:[perks.galestorm,perks.devourer,perks.earlyReaper],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.crushThem,
    legendary:perks.headHunter
  }
}

import feats from '../../feats';
import perks from '../../perks';

export default{
  name:'Shinobi',
  role:'Assassin',
  faction:'Samurai',
  image:'images/heroes/samurai/shinobi.png',
  feats:[feats.level1.stealth,feats.level1.bountyHunter,feats.level1.kiai,
          feats.level2.smokeBomb,feats.level2.shootingStars,feats.level2.revengeAttack,
          feats.level3.sharpenBlade,feats.level3.nukekubi,feats.level3.slipThrough,
          feats.level4.arrowStorm,feats.level4.nailBomb,feats.level4.yamaUba],
  perks:{
    common:[perks.devourer,perks.remedy,perks.supersonic],
    rare:perks.endurance,
    heroic:perks.cleverTactics,
    epic:perks.headHunter,
    legendary:perks.crushThem
  }

}

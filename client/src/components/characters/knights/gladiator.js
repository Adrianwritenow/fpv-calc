import feats from '../../feats';
import perks from '../../perks';


export default{
  name:'Gladiator',
  role:'Assassin',
  faction:'Knights',
  image:'images/heroes/knights/gladiator.png',
  feats:[feats.level1.ironLungs,feats.level1.bountyHunter,feats.level1.deadly,
          feats.level2.righteousDeflection,feats.level2.haymaker,feats.level2.revengeAttack,
          feats.level3.pugnoMortis,feats.level3.neptunesWrath,feats.level3.boleadoras,
          feats.level4.fearItself,feats.level4.catapult,feats.level4.roarOfTheCrowd],
  perks:{
    common:[perks.galestorm,perks.devourer,perks.earlyReaper],
    rare:perks.endurance,
    heroic:perks.survivalInstinct,
    epic:perks.crushThem,
    legendary:perks.headHunter
  }
}

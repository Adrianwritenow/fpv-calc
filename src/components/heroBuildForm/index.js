import React, {Component} from 'react';
import HeroMultiCardOption from './heroMultiCardOption';
import FeatPicker from './featPicker';
import PerkPicker from './perkPicker';



class HeroBuildForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: undefined,
      buildName: undefined,
      buildInfo: undefined,
      featsPicked: {
        lv1: undefined,
        lv2: undefined,
        lv3: undefined,
        lv4: undefined
      },
      perksPicked: []
    };

    this.handleChange = this.handleChange.bind(this);

    this.heroSelect = this.heroSelect.bind(this);
    this.featSelect = this.featSelect.bind(this);
    this.perkSelect = this.perkSelect.bind(this);
    this.repickHero = this.repickHero.bind(this);
    this.perkFilter = this.perkFilter.bind(this);

  }

  handleChange(field, e) {
    e.preventDefault();

    if (field === 'nameField') {
      this.setState({
        buildName: e.target.value
      });
      console.log('The state:', this.state);

    } else if (field === 'detailField') {
      this.setState({
        buildInfo: e.target.value
      });
      console.log('The state:', this.state);

    }

  }


  // Removes and adds feats; removes only if duplicate and adds it to
  // State base on level of feat.

  featSelect(newFeat, e) {
    e.preventDefault();
    let featLevel = newFeat.level;
    let featRemove = this.state.featsPicked[`lv${featLevel}`];

    if (featRemove != undefined) {
      let featNameCheck = featRemove.name.toString();
      if (featNameCheck == newFeat.name) {

        console.log('remove it')
        this.setState(prevState => ({
          featsPicked: {
            ...prevState.featsPicked,
            [`lv${featLevel}`]: undefined
          }
        }));
      }
    } else {
      this.setState(prevState => ({
        featsPicked: {
          ...prevState.featsPicked,
          [`lv${featLevel}`]: newFeat
        }
      }));
    }
  }


  // perkFilter limits amount picked and by cost by using
  // costCalc callback

  perkFilter(perkStateArray, newPerk, value, perkStateLength, costCalc) {

    if (perkStateLength + 1 == 4) {
      perkStateArray.splice(2, 1);
      return;
    } else if (costCalc() + .8 > 3.1) {
      perkStateArray.splice(0, 1);
      newPerk = false;
    } else {
      perkStateArray.forEach((perk, i) => {
        let perkIndex = perkStateArray[`${i}`];

        if (perkIndex.name == newPerk.name) {

          perkStateArray.splice(i, 1);
          newPerk = false;
        }
      });
    }

    console.log('newPerk', newPerk);
    if (newPerk !== false && perkStateArray.length < 3) {

      this.setState({
        perksPicked: [...perkStateArray, newPerk]
      });

      return;
    }



  }



  // Filters all perks for balance, limiting a combination of value and
  // Amount without duplication
  perkSelect(newPerk, e, value) {
    e.preventDefault();
    newPerk.rating = value;
    let perkStateArray = this.state.perksPicked;
    let perkStateLength = perkStateArray.length;

    // CostCalc goes through current state of perks added to calculate
    // the total sum to be passed and if greater than limit it triggers
    // the perkFilter to kick the first index of the array out.

    function costCalc() {
      let costArray = [.001]
      const getSum = (total, num) => total += num;

      perkStateArray.forEach((perk) => {
        costArray.push(perk.rating.cost);
      });
      let perkValueSum = costArray.reduce(getSum);

      return perkValueSum;
    }

    // First pick in index always gets pushed through
    if (perkStateLength == 0) {
      console.log('first block')
      this.setState({
        perksPicked: [...perkStateArray, newPerk]
      });
    }

    // If it has a value in the perkStateArray.length it will loop array
    // and apply filters 1 by 1
    for (var i = 0; i < perkStateLength; i++) {
      if (perkStateLength <= 3) {
        this.perkFilter(perkStateArray, newPerk, value, perkStateLength, costCalc);
        return;
      }
      return;
    }
    return;
  }


  // Selects  hero to pull data from and  loads form
  heroSelect(hero, e) {
    e.preventDefault();
    console.log('The link was clicked.', hero);
    this.setState({
      hero: hero
    });
    console.log(this.state);


  }

  repickHero() {
    this.setState({
      hero: null,
      featsPicked: {
        lv1: undefined,
        lv2: undefined,
        lv3: undefined,
        lv4: undefined
      },
      perksPicked: []
    });
  }


  componentDidMount() {
    console.log("COMPONENT MOUNTED:");

  }



  render() {

    const nameField='nameField';
    const detailField='detailField';
    const heroPicked=this.state.hero;


    return (
      <div>
      <form>
      {heroPicked ? (
        <div className='buildCreateOverview'>
        <img src={this.state.hero.image} alt={this.state.hero.name}/>
        <FeatPicker heroProp={this.state.hero} onFeatSelect={this.featSelect}  featStateProp={this.state.featsPicked}/>
        <PerkPicker heroProp={this.state.hero} onPerkSelect={this.perkSelect} featStateProp={this.state.perksPicked}/>
        <button onClick={this.repickHero}>New Hero</button>
        </div>

      ):(
        <HeroMultiCardOption onHeroSelect={this.heroSelect} />
      )}
        <input type="text" name="name" onChange={(e) => this.handleChange(nameField, e)} />
        <input type="text" name="details" onChange={(e) => this.handleChange(detailField, e)} />
      </form>;
      </div>

    );
  }
}

export default HeroBuildForm;

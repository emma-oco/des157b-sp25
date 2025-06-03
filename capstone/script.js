Parse.initialize("oB6iJEE6L6Rc2fIhMiWA3RH29VrJX6PJGZey3O3o", "5dAb2nqLKFBFaRmnQwJUKdRStoTFLSZLCrkFTU4m"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";


const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

/* BUTTON #1 ONLY */
async function button1vote(answer) {
    const myNewObject = new Parse.Object('Capstone1');
    myNewObject.set('button1', answer);
    try {
      const result = await myNewObject.save();
      console.log('Capstone1 vote save', result);
      percentVote();
    } catch (error) {
      console.error('Error while creating Capstone1: ', error);
    }
  }

    async function percentVote(){
    const Capstone1 = Parse.Object.extend('Capstone1');
    const query = new Parse.Query(Capstone1);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      const numVotes = results.length;

      let numYes = 0;
      for(let i=0; i<results.length; i++){
        let vote = results[i];
        if(vote.get('button1') === 'Yes'){
            numYes++;
        }
      }
     
      let percentYes = 0;
      if (numVotes > 0){
        percentYes = Math.round((numYes/numVotes)*100);
      }

      console.log(`Yes votes: ${numYes}/${numVotes} (${percentYes}%)`);
      
      // Optionally update HTML
    const percentDisplay = document.querySelector("#percentDisplay");
    if (percentDisplay) {
      percentDisplay.textContent = `Yes: ${percentYes}%`;
    }

    } catch (error) {
      console.error('Error while fetching Capstone1', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote);




/* BUTTON 2 ONLY */
async function button2vote(answer2) {
    const myNewObject2 = new Parse.Object('CapstoneButton2');
    myNewObject2.set('button2', answer2);
    try {
      const result = await myNewObject2.save();
      console.log('CapstoneButton2 vote save', result);
      percentVote2();
    } catch (error) {
      console.error('Error while creating CapstoneButton2: ', error);
    }
  }

    async function percentVote2(){
    const CapstoneButton2 = Parse.Object.extend('CapstoneButton2');
    const query = new Parse.Query(CapstoneButton2);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      const numVotes = results.length;

      let numYes = 0;
      for(let i=0; i<results.length; i++){
        let vote = results[i];
        if(vote.get('button2') === 'Yes'){
            numYes++;
        }
      }
     
      let percentYes = 0;
      if (numVotes > 0){
        percentYes = Math.round((numYes/numVotes)*100);
      }

      console.log(`Yes votes: ${numYes}/${numVotes} (${percentYes}%)`);
      
      // Optionally update HTML
    const percentDisplay2 = document.querySelector("#percentDisplay2");
    if (percentDisplay2) {
      percentDisplay2.textContent = `Yes: ${percentYes}%`;
    }

    } catch (error) {
      console.error('Error while fetching CapstoneButton2', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote2);



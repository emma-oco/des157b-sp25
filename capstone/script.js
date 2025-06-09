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
      alert("Your answer has been submitted. Keep scrolling to continue!");
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
      for(let i=0; i<numVotes; i++){
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
    percentDisplay.innerHTML = `<div class="emp">${percentYes}%</div> answered yes when asked if  dreams<br> start before you can dream for yourself.`;


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
      for(let i=0; i<numVotes; i++){
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
      
      // update HTML
    const percentDisplay2 = document.querySelector("#percentDisplay2");
    percentDisplay2.innerHTML = `<div class="emp">${percentYes}%</div> believe dreams start with society's <br>preconceived notions of who you should be. `;


    } catch (error) {
      console.error('Error while fetching CapstoneButton2', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote2);




/* BUTTON 3 ONLY */
async function button3vote(answer3) {
    const myNewObject3 = new Parse.Object('CapstoneButton3');
    myNewObject3.set('button3', answer);
    try {
      const result = await myNewObject3.save();
      console.log('CapstoneButton3 vote save', result);
      percentVote3();
    } catch (error) {
      console.error('Error while creating CapstoneButton3: ', error);
    }
  }

    async function percentVote3(){
    const CapstoneButton3 = Parse.Object.extend('CapstoneButton3');
    const query = new Parse.Query(CapstoneButton3);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      const numVotes = results.length;

      let numYes = 0;
      for(let i=0; i<numVotes; i++){
        let vote = results[i];
        if(vote.get('button3') === 'Yes'){
            numYes++;
        }
      }
     
      let percentYes = 0;
      if (numVotes > 0){
        percentYes = Math.round((numYes/numVotes)*100);
      }

      console.log(`Yes votes: ${numYes}/${numVotes} (${percentYes}%)`);
      
      // update HTML
    const percentDisplay3 = document.querySelector("#percentDisplay3");
    percentDisplay3.innerHTML = `<div class="emp">${percentYes}%</div> had a dream of what their future<br> would look like when they were young.`;


    } catch (error) {
      console.error('Error while fetching CapstoneButton3', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote3);


/* BUTTON 3 VOTE */
/* async function button3vote(answer3){
  const myNewObject3 = new Parse.Object('CapstoneButton3');
  myNewObject3.set('button3', answer3);
  try {
    const result = await myNewObject3.save();
    console.log('CapstoneButton3 vote save', result);
    percentVote3();
  } catch (error) {
    console.error('Error while creating CapstoneButton3: ', error);
  }
}

async function percentVote3(){
  const CapstoneButton3 = Parse.Object.extend('CapstoneButton3');
  const query = new Parse.Query('CapstoneButton3');

  try{
    const results = await query.find();
    const numVotes = results.length;

    let numOpt1 = 0
    for(let i=0; i<numVotes; i++){
      let vote = results[i];
      if(vote.get('button3') === 'opt1'){
        numOpt1++;
      }
    }

    const displayOpt1 = document.querySelector('#opt1Display');
    displayOpt1.innerHTML = `Number of people that chose option 1: ${numOpt1}`;

  } catch(error){
    console.error('Error while fetching CapstoneButton3', error);
  }
}
 */

//GSAP
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });
  
    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 3,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      }
    });
  })


      gsap.from(".underline.long", {
      scrollTrigger: {
        trigger: ".horizontal-container",
        start: "top top",
        end: "+=5000", // depends on your horizontal scroll length
        scrub: true,
        markers:true,
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    }); 
  
  



  let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-container",
      pin: true,
      scrub: 1,
       /* snap: 1 / (sections.length - 1),  */
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500",
    }
  });
  





/* BUTTON 4 ONLY */
async function button4vote(answer4) {
    const myNewObject4 = new Parse.Object('CapstoneButton4');
    myNewObject4.set('button4', answer);
    try {
      const result = await myNewObject4.save();
      console.log('CapstoneButton4 vote save', result);
      percentVote4();
    } catch (error) {
      console.error('Error while creating CapstoneButton4: ', error);
    }
  }

    async function percentVote4(){
    const CapstoneButton4 = Parse.Object.extend('CapstoneButton4');
    const query = new Parse.Query(CapstoneButton4);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      const numVotes = results.length;

      let numYes = 0;
      for(let i=0; i<numVotes; i++){
        let vote = results[i];
        if(vote.get('button4') === 'Yes'){
            numYes++;
        }
      }
     
      let percentYes = 0;
      if (numVotes > 0){
        percentYes = Math.round((numYes/numVotes)*100);
      }

      console.log(`Yes votes: ${numYes}/${numVotes} (${percentYes}%)`);
      
      // update HTML
    const percentDisplay4 = document.querySelector("#percentDisplay4");
    percentDisplay4.innerHTML = `<div class="emp">${percentYes}%</div> believe their younger selves would think <br>they have acheived their dreams if they saw them today.`;



    } catch (error) {
      console.error('Error while fetching CapstoneButton4', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote4);





  /* BUTTON 5 ONLY */
async function button5vote(answer5) {
    const myNewObject5 = new Parse.Object('CapstoneButton5');
    myNewObject5.set('button5', answer);
    try {
      const result = await myNewObject5.save();
      console.log('CapstoneButton5 vote save', result);
      percentVote5();
    } catch (error) {
      console.error('Error while creating CapstoneButton5: ', error);
    }
  }

    async function percentVote5(){
    const CapstoneButton5 = Parse.Object.extend('CapstoneButton5');
    const query = new Parse.Query(CapstoneButton5);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      const numVotes = results.length;

      let numYes = 0;
      for(let i=0; i<numVotes; i++){
        let vote = results[i];
        if(vote.get('button5') === 'Yes'){
            numYes++;
        }
      }
     
      let percentYes = 0;
      if (numVotes > 0){
        percentYes = Math.round((numYes/numVotes)*100);
      }

      console.log(`Yes votes: ${numYes}/${numVotes} (${percentYes}%)`);
      
      // update HTML
    const percentDisplay5 = document.querySelector("#percentDisplay5");
    percentDisplay5.innerHTML = `<div class="emp">${percentYes}%</div> feel fulfilled by the dreams and goals they've accomplished.`;



    } catch (error) {
      console.error('Error while fetching CapstoneButton5', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote5);

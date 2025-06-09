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
    percentDisplay.innerHTML = `Yes: ${percentYes}%`;


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
    percentDisplay2.innerHTML = `Yes: ${percentYes}%`;


    } catch (error) {
      console.error('Error while fetching CapstoneButton2', error);
    }
  }

  //show % vote yes for q1 after page loads
  window.addEventListener('DOMContentLoaded', percentVote2);




/* BUTTON 3 VOTE */
async function button3vote(answer3){
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

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.to("#mom",{
  scrollTrigger:{
    trigger:"#mom",
    start:"-200px 90%",
    end:"+=600px",
    once: true,
   scrub:4,
/*    pin:true, */

  },
 x:1300,
 duration:3,
});

gsap.to("#section1",{
  scrollTrigger:{
    trigger:"#section1",
    pin:true
  }
})



gsap.to("#bubble1",{
  scrollTrigger:{
    trigger:"#bubble1",
    start:"900px 90%",
    end:"+=600px",
    once: true,

  },
  opacity:1,
})

gsap.to("#bubble2",{
  scrollTrigger:{
    trigger:"#bubble1",
    start:"1000px 90%",
    end:"+=600px",
    once: true,
  },
  opacity:1,
})

gsap.to("#bubble3",{
  scrollTrigger:{
    trigger:"#bubble1",
    start:"1100px 90%",
    end:"+=600px",
    once: true,
  },
  opacity:1,
})

gsap.to("#bubble4",{
  scrollTrigger:{
    trigger:"#bubble1",
    start:"1200px 90%",
    end:"+=2000px",
    once: true,
  },
  opacity:1,
})

gsap.to(".button1",{
  scrollTrigger:{
    trigger:".container",
    start: "clamp(600px)",
    end: "clamp(700px)",

  },
  opacity:1,
})

//Section2

gsap.to("#section2",{
  scrollTrigger:{
    trigger:"#section2",
    pin:true,
    once: true
  }
})
gsap.to(".button2",{
  scrollTrigger:{
    trigger:".button2",
    start: "700px",
    end: "+=100px",
 
  },
  opacity:1,
})

gsap.to("#cake",{
  scrollTrigger:{
    trigger:"#cake",
    start:"50px",
    end:"+=100px",
   scrub:4,
/*    pin:true, */

  },
 x:1600,
 duration:3,
});

gsap.registerPlugin(SplitText, ScrollTrigger);

gsap.set(".split", { opacity: 1 });

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".container");

  containers.forEach((container) => {
    let text = container.querySelector(".split");
    let animation;

    SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            once: true,
            scrub: true,
            start: "clamp(500px)",
            end: "clamp(600px)"
          }
        });
      }
    });
  });
});

//Section 3

gsap.to("#section3",{
  scrollTrigger:{
    trigger:"#section3",
    pin:true,
  }
})

gsap.to(".button3",{
  scrollTrigger:{
    trigger:".button3",
    start: "700px",
    end: "+=100px",

  },
  opacity:1,
})


gsap.to("#boyAndGirl",{
  scrollTrigger:{
    trigger:"#boyAndGirl",
    start:"50px",
    end:"+=100px",
   scrub:4,
   once: true
/*    pin:true, */

  },
 x:1450,
 duration:3,
});
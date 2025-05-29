Parse.initialize("oB6iJEE6L6Rc2fIhMiWA3RH29VrJX6PJGZey3O3o", "5dAb2nqLKFBFaRmnQwJUKdRStoTFLSZLCrkFTU4m"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

async function displayPercent() {
    const percent = Parse.Object.extend('Capstone1');
    const query = new Parse.Query(percent);
    const results = await query.ascending('button1').find();
    console.log(results);
}

displayPercent();
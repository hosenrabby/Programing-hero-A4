//  problem 1

function cashOut( money ) {
    if (money > 0 && typeof money === "number") {
        const cashOutChrg = money * 1.75 / 100;
        return cashOutChrg;
    } else{
        return "Invalid";
    }
}
// console.log(cashOut(2000))

//problem 2

function  validEmail( email ) {
    if (typeof email === "string") {
        if ((email.startsWith('.') !== true && email.startsWith('-') !== true && email.startsWith('_') !== true && email.startsWith('@') !== true)) {
                if (email.includes('@') && email.includes(" ") !== true) {
                    if (email.endsWith(".com")) {
                        return true;
                    } else {return false }
                } else {return false }
        }else {return false }
    } else{ return "Invalid"}
}
// console.log(validEmail('test@email.com'))

//problem 3

function  electionResult( votes ) {
    let mango = null;
    let banana = null;
    if (Array.isArray(votes)) {
        for (const singleVote of votes) {
            if (singleVote === 'mango') {
                mango++
            } if (singleVote === 'banana') {
                banana++
            }
        }
        let result = mango > banana ? "Mango" : banana > mango ? "Banana" : mango === banana ? "Draw" : votes.length === 0 ? "Draw" : "Draw";
        return result;
    } else{ return "Invalid"}
}

// console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]))

//problem 4

function  isBestFriend( f1 , f2 ) {
    if (typeof(f1) === "object" && typeof(f2) === "object" && !Array.isArray(f1) && !Array.isArray(f2)) {
        if (f1.roll === f2.bestFriend && f1.bestFriend === f2.roll) {
             return true
         } else {return false }
    } else{ return "Invalid"}
}

// console.log(isBestFriend( { name: "hashem", roll: 1, bestFriend: 22 },
//                             { name: "kashem", roll: 22, bestFriend: 1 }  ))

//problem 5

function  calculateWatchTime( times ) {
    let secondCount = null;
    if (Array.isArray(times)) {
        for (const sec of times) {
            if (typeof(sec) === "number") {
                secondCount += sec;
            }else{ return "Invalid"}
        }
        const totalTime = {}
        const hours = Math.floor(secondCount / 3600);
        const remainigSec = secondCount % 3600;
        const min = Math.floor(remainigSec / 60);
        const second = remainigSec % 60;

            totalTime.Hour = hours;
            totalTime.Minute = min;
            totalTime.Second = second;
            return totalTime;
    } else{ return "Invalid"}
}


// console.log(calculateWatchTime([100, 3800, 6050]))
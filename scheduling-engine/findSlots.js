const corealg = require('./core-algorithm');

module.exports = {
    findslots: function findSlots(userDef, all_events, numUser) {
        let meeting = []
        for (let i = 0; i< numUser; i++){
            const chunks = corealg.divideChunks(all_events[i],userDef)
            if (meeting.length){
                meeting.forEach(temp =>{
                    if (!chunks.includes(temp)){
                        let index = meeting.indexOf(temp)
                        meeting.splice(index, 1)
                    } 
                })
            }
            else{ 
                meeting = chunks
            }
        }

        console.log('the meetings are', meeting)
        return meeting
    }
}
/*

Implement class User

A user starts at rank -8 and can progress all the way to 8.
There is no 0 (zero) rank. The next rank after -1 is 1.
Users will complete activities. These activities also have ranks.
Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank

The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
A user cannot progress beyond rank 8.
The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.

The progress is scored like so:

Completing an activity that is ranked the same as that of the user's will be worth 3 points
Completing an activity that is ranked one ranking lower than the user's will be worth 1 point

Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored

Completing an activity ranked higher than the current user's rank will accelerate the rank progression. 

The greater the difference between rankings the more the progression will be increased. 
The formula is 10 d d where d equals the difference in ranking between the activity and the user.

var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
*/


function task405 () {

  

  class User {

    constructor() {
      this.rank = -8
      this.progress = 0
    }

    _incRank() {
      switch(this.rank){
        case -1:
          this.rank += 2
          break;
        default:
          this.rank++
          break;
      }
    }

    _calcActivityWeight(activityRank) {
      let diff = activityRank - this.rank
      
      // remove `zero` rank
      if (activityRank > 0 && this.rank < 0) diff--
      else if (activityRank < 0 && this.rank > 0) diff++
      
      // increased points
      if (activityRank > this.rank) {
        return 10 * Math.pow(Math.abs(diff), 2)
      }

      //default points
      switch (diff) {
        case -1: return 1
        case 0:  return 3
        default: return 0
      }
    }

    _validateRank(rank) {
      if (!(rank < User.rank.min || rank === 0 || rank > User.rank.max)) return
      throw new Error(`Incorrect Rank ${rank}`)
    }

    incProgress(activityRank) {
      this._validateRank(activityRank)
      let progress = this.progress + this._calcActivityWeight(activityRank)
      
      while(progress >= User.rank.capacity){
        if (this.rank === User.rank.max) {
          progress = 0
          break
        }
        this._incRank()
        progress -= User.rank.capacity
      }
      this.progress = this.rank === User.rank.max ? 0 : progress
    }
  }

  Object.defineProperty(User, 'rank', {
    value: {
      capacity: 100,
      min: -8,
      max: 8
    },
    writable: false
  })


  let user = new User()
  
  user.incProgress(8) 
  user.incProgress(8) 
  user.incProgress(8) 
  user.incProgress(8) 

  /*

    After applying rank of -8 the progress was expected to be 3, but was actually 99
    After applying rank of -7 the progress was expected to be 10, but was actually 99
    After applying rank of -6 the progress was expected to be 40, but was actually 99
    After applying rank of -5 the progress was expected to be 90, but was actually 99
    After applying rank of -4 the progress was expected to be 60, but was actually 99
    After applying rank of -8 the progress was expected to be 3, but was actually 99
    After applying rank of 1 the progress was expected to be 40, but was actually 99
    After applying rank of 1 the progress was expected to be 80, but was actually 0
    After applying rank of 1 the progress was expected to be 20, but was actually 0
    After applying rank of 1 the progress was expected to be 30, but was actually 0
    After applying rank of 1 the progress was expected to be 40, but was actually 0
    After applying rank of 2 the progress was expected to be 80, but was actually 0
    After applying rank of 2 the progress was expected to be 20, but was actually 0
    After applying rank of -1 the progress was expected to be 21, but was actually 0
    After applying rank of 3 the progress was expected to be 61, but was actually 0
    After applying rank of 8 the progress was expected to be 51, but was actually 0
    After applying rank of 8 the progress was expected to be 91, but was actually 0
    After applying rank of 8 the progress was expected to be 31, but was actually 0
    After applying rank of 8 the progress was expected to be 41, but was actually 0
    After applying rank of 8 the progress was expected to be 51, but was actually 0
    After applying rank of 8 the progress was expected to be 61, but was actually 0
    After applying rank of 8 the progress was expected to be 71, but was actually 0
    After applying rank of 8 the progress was expected to be 81, but was actually 0
    After applying rank of 8 the progress was expected to be 91, but was actually 0
  */

}
// task405()
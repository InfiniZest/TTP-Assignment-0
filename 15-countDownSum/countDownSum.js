class MySolution {
  sum = 0;
  countDownSum(num) {
    //console.log("Given " + num);
    if(num > 1) {
        this.sum+=num;
        //console.log(this.sum + 1 + " " + num);
        return this.countDownSum(num - 1);
    } else if (num == 0)
        return 0;
    else {
        let solution = this.sum + 1;
        this.sum = 0;
        return solution;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

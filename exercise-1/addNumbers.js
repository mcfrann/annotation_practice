// Declare function named addNumbers
function addNumbers() {
// Declare variable firstNum assigned to number
  var firstNum = 9
// Declare variable secondNum assigned to number
  var secondNum = 14

// Reassign value to variable firstNum
  firstNum = 3
// Reassign value to variable secondNum
  secondNum = 4

// Declaring new variable nums assigned to an array
  var nums = [firstNum, secondNum]

// Declare variable product assigned to variable firstNum times
// variable secondNum
  var product = firstNum * secondNum
// Declare variable sum assigned to variable firstNum plus
// variable secondNum
  var sum = firstNum + secondNum
// Declare variable average assigned to variable sum divided
// by the length of variable nums
  var average = sum / nums.length

// Log to console first item in the nums array
// Output will be first item in nums
  console.log(nums[0])
// Log to console second item in the nums array
// Output will be second item in nums
  console.log(nums[1])

// Output will be string interpolated with variables num1 and num2
  console.log(`The first number is ${firstNum} and the second number is ${secondNum}!`)

// Output will be the variable of sum
  return sum
}

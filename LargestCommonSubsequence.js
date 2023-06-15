// if number is equal/same then add (1+ upperdiagonal value) else choose the max of upper or left
var longestCommonSubsequence = function (text1, text2) {
    const lengthofText1 = text1.length;
    const lengthofText2 = text2.length;

    if (lengthofText1 === 0 || lengthofText2 === 0)
        return 0;

    const testMatrix = [];
    for (let i = 0; i < lengthofText1 + 1; i++) {
        testMatrix.push([])
        for (let j = 0; j < lengthofText2 + 1; j++) {
            testMatrix[i].push(0);
        }
    }
    for (let i = 1; i <=lengthofText1; i++) {
        for (let j = 1; j <= lengthofText2; j++) {
            if (text1[i-1] === text2[j-1]) {
                testMatrix[i][j] = 1 + testMatrix[i - 1][j - 1] // diagonal
            }
            else {
                testMatrix[i][j] = Math.max(testMatrix[i - 1][j], testMatrix[i][j - 1])
            }
        }
    }
    return testMatrix[lengthofText1][lengthofText2]
};

console.log('ans1', longestCommonSubsequence('abaaba', 'babbab')) // ans 4
console.log('ans2', longestCommonSubsequence('a', 'babbab')) // ans 1
console.log('ans3', longestCommonSubsequence('', '')) // ans 0
console.log('ans4', longestCommonSubsequence('abaabaa', 'bab')) // ans 3
console.log('ans4', longestCommonSubsequence('abc', 'def')) // ans 0
console.log('ans4', longestCommonSubsequence('ab', 'bc')) // ans 1



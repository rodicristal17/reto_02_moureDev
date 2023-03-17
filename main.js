function isAnagrama(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word1[word1.length - 1 - i]) {
            return false;
        }
    }
    for (let j = 0; j < word2.length; j++) {
        if (word2[j] !== word2[word2.length - 1 - j]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagrama("ana", "ana"));
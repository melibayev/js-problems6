// Array1: 2 sonining dastlabki n ta darajasidan tashkil topgan massiv
function getLevel2(n) {
  var result = [];
  var power = 1;

  for (var i = 0; i < n; i++) {
    power *= 2;
    result.push(power);
  }

  return result;
}

// Array2: Barcha elementlari o'zidan oldingi elementlari yig'indisiga teng bo'lgan massiv
function getSumArray(n, A, B) {
  var result = [A, B];

  for (var i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

// Array3: Elementlarni teskari tartibda chiqaruvchi funksiya
function reverseArray(arr) {
  return arr.reverse();
}

// Array4: Toqlarni indekslari o'sish tartibida chiqaruvchi funksiya
function printOdds(arr) {
  var odds = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      odds.push(arr[i]);
    }
  }

  console.log(odds.join(' '));
  console.log('Toqlar soni = ' + odds.length);
}

// Array5: Juftlarini indekslari o'sish tartibda, toqlarini kamayish tartibda chiqaruvchi funksiya
function printEvenOdd(arr) {
  var evens = [];
  var odds = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  console.log(evens.join(' ') + ' ' + odds.reverse().join(' '));
}

// Array6: Juft indeksli elementlarni chiqaruvchi funksiya
function printEvenIndices(arr) {
  var evens = [];

  for (var i = 0; i < arr.length; i += 2) {
    evens.push(arr[i]);
  }

  console.log(evens.join(' '));
}

// Array7: Toq indeksli elementlarni chiqaruvchi funksiya
function printOddIndices(arr) {
  var odds = [];

  for (var i = arr.length - 1; i >= 0; i -= 2) {
    odds.push(arr[i]);
  }

  console.log(odds.join(' '));
}

// Array8: Juft indekslilarni keyin toq indekslilarni chiqaruvchi funksiya
function printEvenOddIndices(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  for (var j = 1; j < arr.length; j += 2) {
    result.push(arr[j]);
  }

  console.log(result.join(' '));
}

// Array9: Toq indekslilarni o'shish tartibda, juft indekslilarni kamayish tartibda chiqaruvchi funksiya
function printOddEvenIndices(arr) {
  var odds = [];
  var evens = [];

  for (var i = 1; i < arr.length; i += 2) {
    odds.push(arr[i]);
  }

  for (var j = arr.length - 2; j >= 0; j -= 2) {
    evens.push(arr[j]);
  }

  console.log(odds.join(' ') + ' ' + evens.join(' '));
}

// Array10: Elementlarni belgilangan tartibda chiqaruvchi funksiya
function printCustomOrder(arr) {
  var n = arr.length;
  var result = [];

  for (var i = 0; i < n / 2; i++) {
    result.push(arr[i], arr[n - i - 1]);
  }

  if (n % 2 !== 0) {
    result.push(arr[Math.floor(n / 2)]);
  }

  console.log(result.join(' '));
}

// Array11: K va L indekslari orasidagi elementlarning yig'indisini topuvchi funksiya
function rangeOutSum(arr, K, L) {
  var sum = 0;

  for (var i = K + 1; i < L; i++) {
    sum += arr[i];
  }

  return sum;
}

// Array12: Truthy va falsy elementlardan iborat 2 ta massiv hosil qiluvchi funksiya
function separateTruthyFalsy(arr) {
  var truthy = [];
  var falsy = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i]);
    } else {
      falsy.push(arr[i]);
    }
  }

  return { truthy: truthy, falsy: falsy };
}

// Array13: Juft indeksli elementlarning eng kichigini topuvchi funksiya
function getOddMin(arr) {
  var min = Infinity;

  for (var i = 1; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Array14: Toq indeksli elementlarning eng kattasini topuvchi funksiya
function getEvenMax(arr) {
  var max = -Infinity;

  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Array15: Oxirgi lokal maksimum elementning indeksini topuvchi funksiya
function getLastLocalMaxIndex(arr) {
  var n = arr.length;

  for (var i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }

  return -1; // No local maximum found
}

// Array16: R soniga eng yaqin sonni topuvchi funksiya
function findClosestNumber(arr, R) {
  var closest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - R) < Math.abs(closest - R)) {
      closest = arr[i];
    }
  }

  return closest;
}

// Array17: Yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi funksiya
function findLargestPairSum(arr) {
  var largest1 = -Infinity;
  var largest2 = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest1) {
      largest2 = largest1;
      largest1 = arr[i];
    } else if (arr[i] > largest2) {
      largest2 = arr[i];
    }
  }

  return largest1 + largest2;
}

// Array18: Bir xil qiymatli elementlar indekslarini chiqaruvchi funksiya
function findDuplicateIndices(arr) {
  var indices = {};

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num in indices) {
      indices[num].push(i);
    } else {
      indices[num] = [i];
    }
  }

  var result = [];
  for (var num in indices) {
    if (indices[num].length > 1) {
      result.push(indices[num]);
    }
  }

  return result;
}

// Array19: Eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi funksiya
function findMostFrequentElement(arr) {
  var frequencies = {};
  var maxFrequency = 0;
  var mostFrequentElement = null;

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num in frequencies) {
      frequencies[num]++;
    } else {
      frequencies[num] = 1;
    }

    if (frequencies[num] > maxFrequency) {
      maxFrequency = frequencies[num];
      mostFrequentElement = num;
    }
  }

  return [mostFrequentElement, maxFrequency];
}

// Array20: Juft elementlardan tashkil topgan massivni hosil qiluvchi funksiya
function createEvenArray(arr) {
  var evenArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }

  return evenArray;
}

// Array21: Massivdagi har bir elementni k ga orttiruvchi funksiya
function incrementElements(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += k;
  }

  return arr;
}

// Array22: Birinchi yarmi va ikkinchi yarmi qiymatlarni almashtiruvchi funksiya
function swapHalves(arr) {
  var half = Math.floor(arr.length / 2);

  for (var i = 0; i < half; i++) {
    var temp = arr[i];
    arr[i] = arr[i + half];
    arr[i + half] = temp;
  }

  return arr;
}

// Array23: Massiv elementlarini teskari tartibda joylashtiruvchi funksiya
function reverseArray(arr) {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

// Array24: Eng kichik va eng katta elementlar orasidagilarini nolga almashtiruvchi funksiya
function replaceMinMax(arr) {
  var minIndex = 0;
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }

    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  var temp = arr[minIndex];
  arr[minIndex] = arr[maxIndex];
  arr[maxIndex] = temp;

  return arr;
}

// Array25: Massivni bir qadam chapga siljituvchi funksiya
function shiftLeft(arr) {
  var temp = arr[0];

  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = temp;

  return arr;
}

// Array26: Indeksi k ga teng bo'lgan elementni o'chiruvchi funksiya
function deleteElementWithIndex(arr, k) {
  arr.splice(k, 1);
  return arr;
}

// Array27: Indeksleri k dan m gacha bo'lgan elementlarni o'chiruvchi funksiya
function deleteElementsInRange(arr, k, m) {
  arr.splice(k, m - k + 1);
  return arr;
}

// Array28: Bir xil qo'shnilarning birini o'chiruvchi funksiya
function deleteOneOfDuplicates(arr) {
  var duplicates = {};

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num in duplicates) {
      duplicates[num] = true;
    } else {
      duplicates[num] = false;
    }
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    var num = arr[i];
    if (duplicates[num]) {
      arr.splice(i, 1);
      break;
    }
  }

  return arr;
}

// Array29: Bir marta ishtirok etgan elementlardan iborat yangi massivni chiqaruvchi funksiya
function getElementsOneTime(arr) {
  var occurrences = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num in occurrences) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (occurrences[num] === 1) {
      result.push(num);
    }
  }

  return result;
}

// Array30: Massivda berilgan qiymatga teng elementlarni indekslarini qidiruvchi funksiya
function searchAllElements(arr, value) {
  var indices = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indices.push(i);
    }
  }

  return indices;
}



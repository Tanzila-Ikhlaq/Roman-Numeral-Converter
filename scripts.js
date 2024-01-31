const input = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = (num) => {
  const romanNumerals = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
    ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9],
    ['V', 5], ['IV', 4], ['I', 1]
  ];
  let res = '';

  romanNumerals.forEach(([roman, value]) => {
    while (value <= num) {
      res += roman;
      num -= value;
    }
  });

  return res;
};

const isValid = (int) => {
  const errText = isNaN(int)
    ? 'Please enter a valid number.'
    : int < 1
    ? 'Please enter a number greater than or equal to 1.'
    : int > 3999
    ? 'Please enter a number less than or equal to 3999.'
    : '';

  output.innerText = errText;

  return errText === '';
};

const clearOutput = () => {
  output.innerText = '';
};

const updateUI = () => { 
  const num = parseInt(input.value, 10);

  output.classList.remove('hidden');
  clearOutput();

  if (isValid(num)) {
    output.innerText = convertToRoman(num);
  }
};

convertButton.addEventListener('click', (e) => {
    e.preventDefault();
});

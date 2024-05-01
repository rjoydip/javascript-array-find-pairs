import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

function findPairs(arr, target) {
  arr.sort((a, b) => a - b);
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

function renderFindPairsResults(element) {
  const arr = [1, 2, 3, 4, 5, 6];
  const target = 7;
  const pairs = findPairs(arr, target);
  console.log(pairs);
  element.innerHTML = `<pre>${pairs
    .map((item) => `<span>[${item}]</span>`)
    .join('')}</pre>`;
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div id="findPairs"><div>
  </div>
`;

renderFindPairsResults(document.querySelector('#findPairs'));

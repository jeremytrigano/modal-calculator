{
  let subText = '';
  let mainText = '';
  let calcSelector = document.getElementById('calculator');
  if (calcSelector) {
    initCalc();
    let calcBtn = document.getElementById('calcBtn');
    calcSelector.style.display = 'none';
    calcBtn.addEventListener('click', showCalc);
    clickEvent();
  }
  bindFunctionsToKeys();

  function initCalc() {
    calcSelector.innerHTML = `      <div id="base">
        <a id="closeBtn"></a>
        <div id="mainDisplay">
          <div id="subDisplay"><span id="subText"></span></div>
          <span id="mainText"></span>
        </div>
        <div id="keypad">
          <div id="grid-container">
            <div class="keys" id="clearBtn">C</div>
            <div class="keys opkey" id="backspaceBtn">&lt;=</div>
            <div class="keys opkey" id="modBtn">%</div>
            <div class="keys opkey" id="divideBtn">/</div>
            <div class="keys opkey" id="multiplyBtn">*</div>
            <div class="keys opkey" id="substractBtn">-</div>
            <div class="keys opkey" id="addBtn">+</div>
            <div class="keys opkey" id="equalBtn">=</div>
            <div class="keys opkey" id="oppositeBtn">+/-</div>
            <div class="keys opkey" id="dotBtn">.</div>
            <div class="keys numkey" id="zeroBtn">0</div>
            <div class="keys numkey" id="oneBtn">1</div>
            <div class="keys numkey" id="twoBtn">2</div>
            <div class="keys numkey" id="threeBtn">3</div>
            <div class="keys numkey" id="fourBtn">4</div>
            <div class="keys numkey" id="fiveBtn">5</div>
            <div class="keys numkey" id="sixBtn">6</div>
            <div class="keys numkey" id="sevenBtn">7</div>
            <div class="keys numkey" id="eightBtn">8</div>
            <div class="keys numkey" id="nineBtn">9</div>
          </div>
        </div>
      </div>`;
  }

  function bindFunctionsToKeys() {
    document.getElementById('closeBtn').addEventListener('click', closeCalc);
    document.getElementById('clearBtn').addEventListener('click', allClear);
    document
      .getElementById('backspaceBtn')
      .addEventListener('click', backspace);
    document.getElementById('equalBtn').addEventListener('click', equal);
    document.getElementById('oppositeBtn').addEventListener('click', opposite);
    document.getElementById('zeroBtn').addEventListener('click', function () {
      pressKey('0');
    });
    document.getElementById('oneBtn').addEventListener('click', function () {
      pressKey('1');
    });
    document.getElementById('twoBtn').addEventListener('click', function () {
      pressKey('2');
    });
    document.getElementById('threeBtn').addEventListener('click', function () {
      pressKey('3');
    });
    document.getElementById('fourBtn').addEventListener('click', function () {
      pressKey('4');
    });
    document.getElementById('fiveBtn').addEventListener('click', function () {
      pressKey('5');
    });
    document.getElementById('sixBtn').addEventListener('click', function () {
      pressKey('6');
    });
    document.getElementById('sevenBtn').addEventListener('click', function () {
      pressKey('7');
    });
    document.getElementById('eightBtn').addEventListener('click', function () {
      pressKey('8');
    });
    document.getElementById('nineBtn').addEventListener('click', function () {
      pressKey('9');
    });
    document.getElementById('modBtn').addEventListener('click', function () {
      pressKey('%');
    });
    document.getElementById('divideBtn').addEventListener('click', function () {
      pressKey('/');
    });
    document
      .getElementById('multiplyBtn')
      .addEventListener('click', function () {
        pressKey('*');
      });
    document
      .getElementById('substractBtn')
      .addEventListener('click', function () {
        pressKey('-');
      });
    document.getElementById('addBtn').addEventListener('click', function () {
      pressKey('+');
    });
    document.getElementById('dotBtn').addEventListener('click', function () {
      pressKey('.');
    });
  }

  function clickEvent() {
    document.onclick = function (e) {
      if (!e.path.includes(calcBtn) && !e.path.includes(calcSelector)) {
        closeCalc();
      }
    };
  }

  function showCalc() {
    calcSelector.style.display = 'block';
  }

  function closeCalc() {
    allClear();
    calcSelector.style.display = 'none';
  }

  function displayMainText() {
    document.getElementById('mainText').innerHTML = mainText;
  }

  function displaySubText() {
    document.getElementById('subText').innerHTML = subText;
  }

  function pressKey(key) {
    let lastKey = '';

    if (mainText.length === 0 && (key === '/' || key === '*' || key === '%')) {
      return;
    }
    if (mainText.length > 0) {
      lastKey = mainText[mainText.length - 1];
    }
    if (
      (lastKey === '/' ||
        lastKey === '*' ||
        lastKey === '-' ||
        lastKey === '+' ||
        lastKey === '%') &&
      (key === '/' || key === '*' || key === '-' || key === '+' || key === '%')
    ) {
      mainText = mainText.slice(0, -1);
    }
    mainText += key;
    displayMainText();
  }

  function allClear() {
    mainText = '';
    displayMainText();
    subText = '';
    displaySubText();
  }

  function backspace() {
    mainText = mainText.slice(0, -1);
    displayMainText();
  }

  function opposite() {
    try {
      let lastNum = mainText.match(/\d+$/)[0];
      lastNum = +lastNum * -1;
      mainText =
        mainText.slice(0, -lastNum.toString().length + 1) + lastNum.toString();
      displayMainText();
    } catch (error) {
      return;
    }
  }

  function equal() {
    subText = mainText;
    try {
      mainText = eval(mainText).toString();
    } catch (error) {
      subText = 'ERROR: Invalid Operation';
    }
    displayMainText();
    displaySubText();
  }
}

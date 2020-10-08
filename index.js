{
  let calcDial = document.getElementById('calculator');
  let subText = '';
  let mainText = '';

  function showDialog() {
    calcDial.show();
  }

  function closeDialog() {
    allClear();
    calcDial.close();
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

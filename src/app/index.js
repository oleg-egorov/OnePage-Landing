import '../style/style.scss';

function buttonCount() {
  const x = document.getElementById('InputWeight').value;
  const y = document.getElementById('InputHeigth').value;
  if (x > 0 && y > 0) {
    const Res = x / y ** 2;
    document.getElementById('Result').value = Res.toFixed(2);
  } else {
    alert('Ошибка ввода');
  }

  if (y > 3) alert('Укажите высоту в метрах');
}

const calculate = document.getElementById('CalculateButton');
calculate.addEventListener('click', buttonCount);

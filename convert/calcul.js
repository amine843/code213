// أسعار تقريبية فقط – يمكنك تغييرها
// سنجعل كل شيء مبني على USD كعملة أساس
const rates = {
  USD: 1,
  EUR: 1,   // 1 USD ≈ 0.9 EUR
  DZD: 25.1    // 1 USD ≈ 134 DZD
};

const amountInput = document.getElementById("amount");
const fromSelect  = document.getElementById("from");
const toSelect    = document.getElementById("to");
const resultP     = document.getElementById("result");

const convertBtn  = document.getElementById("convertBtn");
const resetBtn    = document.getElementById("resetBtn");

convertBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  const from   = fromSelect.value;
  const to     = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultP.textContent = "Please enter a valid amount.";
    return;
  }

  // تحويل المبلغ إلى USD أولاً
  const amountInUSD = amount / rates[from];
  // ثم من USD إلى العملة المطلوبة
  const converted   = amountInUSD * rates[to];

  resultP.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});

resetBtn.addEventListener("click", () => {
  amountInput.value = "";
  fromSelect.value = "DZD";
  toSelect.value = "DZD";
  resultP.textContent = "";
});

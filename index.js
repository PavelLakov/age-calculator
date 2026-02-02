const userInput = document.getElementById("date");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

userInput.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", calculateAge);

function calculateAge() {
  if (!userInput.value) {
    result.textContent = "Please select your birth date.";
    return;
  }

  const birthDate = new Date(userInput.value);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}

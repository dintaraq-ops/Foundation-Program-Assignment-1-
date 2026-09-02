// Question No. 1 - Value check korar jonno
function describeValue(value) {
  const t = typeof value;
  const isTrue = value ? "truthy" : "falsy";
  return t + " | " + isTrue;
}

// Question No. 2 - Weekend ba working day check
function getDayType(day) {
  const d = day.toLowerCase();
  switch (d) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// Question No. 3 - Username validation
function validateUsername(user) {
  if (user.length < 4) {
    return "Too Short";
  }
  if (user.includes(" ")) {
    return "No Space Allowed";
  }
  if (user.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

// Question No. 4 - CNG Fare calculation
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let total = 50;
  if (distance > 2) {
    total = 50 + (distance - 2) * 15;
  }
  total = total + (waitingMinutes * 2);

  if (isNight) {
    total = total + (total * 0.20);
  }
  return total;
}

// Question No. 5 - Cricket run chase status
const getChaseVerdict = (target, scored, ballsLeft) => {
  const leftRuns = target - scored;

  if (leftRuns <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }

  const runRate = (leftRuns / ballsLeft) * 6;
  let status = "";

  if (runRate <= 6) {
    status = "Comfortable";
  } else if (runRate <= 12) {
    status = "Tough";
  } else {
    status = "Almost Impossible";
  }

  return `Need ${leftRuns} runs in ${ballsLeft} balls | ${status}`;
};
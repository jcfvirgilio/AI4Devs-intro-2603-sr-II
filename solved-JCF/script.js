// DOM Elements
const inputText = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

// Minimum characters required to show the reverse button
const MIN_CHARS = 3;

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Updates the UI based on the current input value
 */
function updateUI() {
  const text = inputText.value;
  const hasEnoughChars = text.length > MIN_CHARS;

  // Show/hide reverse button based on text length
  if (hasEnoughChars) {
    reverseBtn.classList.remove("hidden");
  } else {
    reverseBtn.classList.add("hidden");
  }

  // Update reversed text in real-time
  if (text.length > 0) {
    result.textContent = reverseString(text);
    result.classList.remove("hidden");
    copyBtn.classList.remove("hidden");
  } else {
    result.classList.add("hidden");
    copyBtn.classList.add("hidden");
  }
}

/**
 * Handles the reverse button click
 * Inverts the current input and updates the display
 */
function handleReverse() {
  const text = inputText.value;
  const reversed = reverseString(text);

  // Update the input with the reversed text
  inputText.value = reversed;

  // Update the result display
  result.textContent = reverseString(reversed);
}

/**
 * Copies the reversed text to clipboard
 */
async function handleCopy() {
  const textToCopy = result.textContent;

  try {
    await navigator.clipboard.writeText(textToCopy);

    // Visual feedback
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = "Copied! <span>&#10003;</span>";

    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 1500);
  } catch (err) {
    console.error("Failed to copy text:", err);
  }
}

// Event Listeners
inputText.addEventListener("input", updateUI);
reverseBtn.addEventListener("click", handleReverse);
copyBtn.addEventListener("click", handleCopy);

// Initialize UI on page load
updateUI();

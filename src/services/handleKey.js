export function handleKey(e) {
    if (
        e.target.value.length > 0 &&
        e.key != "Backspace" &&
        e.target.nextElementSibling
      ) {
        e.target.nextElementSibling.focus();
      } else if (
        e.target.value.length < 1 &&
        e.key === "Backspace" &&
        e.target.previousElementSibling
      ) {
        e.target.previousElementSibling.focus();
      }
}

export function showToast({
    text = "This is a toast",
    duration = 3000,
    destination = null,
    newWindow = true,
    close = true,
    gravity = "top", 
    position = "right",
    stopOnFocus = true,
    background = "linear-gradient(to right, #00b09b, #96c93d)",
    onClick = () => {}
  } = {}) {
    Toastify({
      text,
      duration,
      destination,
      newWindow,
      close,
      gravity,
      position,
      stopOnFocus,
      style: {
        background,
      },
      onClick
    }).showToast();
  }
  
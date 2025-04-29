function openPopupInNewTab(url, windowName, width, height) {
    // Set default values if width or height are not provided
    const popupWidth = width || 600;
    const popupHeight = height || 400;
  
    // Calculate the center position of the screen
    const left = (window.innerWidth - popupWidth) / 2;
    const top = (window.innerHeight - popupHeight) / 2;
  
    // Construct the features string for window.open
    const features = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no`;
  
    // Open the popup in a new tab or window
    const popupWindow = window.open(url, windowName || '_blank', features);
  
    // Optionally focus the new window if it was successfully opened
    if (popupWindow) {
      popupWindow.focus();
    } else {
      alert('Popup blocked! Please allow popups for this site to open the content.');
    }
  }
  
  // Example usage:
  
  // 1. Open a specific URL in a new tab with default size and no name
  openPopupInNewTab('https://chat.whatsapp.com/CY8nNhMIJoMH6HutXTKdmZ');
  
  // 2. Open a specific URL with a custom name and default size
  // openPopupInNewTab('https://www.anothersite.com', 'myPopup');
  
  // 3. Open a specific URL with a custom size
  // openPopupInNewTab('https://www.yetanothersite.net', 'imagePopup', 800, 600);
  
  // You can trigger this function on a button click or any other event:
  // const myButton = document.getElementById('popupButton');
  // if (myButton) {
  //   myButton.addEventListener('click', () => {
  //     openPopupInNewTab('https://www.someimage.jpg', 'imageViewer', 900, 700);
  //   });
  // }
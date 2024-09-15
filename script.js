const payButton = document.querySelector('.pay');
  const payBox = document.querySelector('.pay-box');

// Function to show the pay-box
function showBox(box) {
  let boxTemp = box;
    boxTemp.style.display = 'block';
  }
  
  // Function to hide the pay-box
  function hideBox(box) {
    let boxTemp = box;
    boxTemp.style.display = 'none';
  }
  
  // Show the pay-box when hovering over the pay button
  payButton.addEventListener('mouseenter', ()=>{
    showBox(payBox);
  });
  
  // Hide the pay-box only if neither the button nor the box is hovered
  payButton.addEventListener('mouseleave', function() {
    // Delay the check for a short moment to allow moving the mouse
    setTimeout(function() {
      if (!payButton.matches(':hover') && !payBox.matches(':hover')) {
        hideBox(payBox);
      }
    }, 1000);  // 100ms delay to allow mouse transition
  });
  
  // Ensure the pay-box stays visible when moving the mouse between pay-button and pay-box
  payBox.addEventListener('mouseenter', ()=>{
            showBox(payBox)
  });
  
  // Hide the pay-box when leaving the pay-box
  payBox.addEventListener('mouseleave', function() {
    // Delay the check for a short moment to ensure the transition is smooth
    setTimeout(function() {
      if (!payButton.matches(':hover') && !payBox.matches(':hover')) {
        hideBox(payBox);
      }
    }, 100);  // 100ms delay to allow for smooth transition
  });

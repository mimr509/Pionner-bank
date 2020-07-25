// login button even handeler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function(){
  const loginArea = document.getElementById('login-area');
  loginArea.style.display = 'none';
  const transactionArea = document.getElementById('transaction-area');
  transactionArea.style.display = 'block';
  
  })

  //deposit button even handeler

  const depositButton = document.getElementById('addDeposit');
  depositButton.addEventListener('click', function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit =.document.getElementById("currentDeposit").inner 
    
    
  })

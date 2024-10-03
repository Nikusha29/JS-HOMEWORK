document.addEventListener('DOMContentLoaded', function() {
  
  if (localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-notification').style.display = 'none';
  }

  document.getElementById('accept-cookies').addEventListener('click', function() {
    
    localStorage.setItem('cookiesAccepted', 'true');
    
    document.getElementById('cookie-notification').style.display = 'none';
  });
});

  
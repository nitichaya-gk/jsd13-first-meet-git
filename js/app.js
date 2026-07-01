(function () {
  'use strict';

  /* ==========================================
     Toast System
     ========================================== */
  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  /* ==========================================
     Signup Form Handler
     ========================================== */
  var signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = signupForm.querySelector('input[placeholder="Full name"]').value.trim();
      var email = signupForm.querySelector('input[type="email"]').value.trim();
      if (name && email) {
        showToast('Account created! Welcome to CodeDaily, ' + name.split(' ')[0] + '!');
        signupForm.reset();
        setTimeout(function () {
          window.location.href = 'dashboard.html';
        }, 500);
      }
    });
  }

  /* ==========================================
     Task Completion Handler
     ========================================== */
  var completeButtons = document.querySelectorAll('.task-complete-btn');
  completeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.task-card');
      if (!card) return;
      card.querySelector('.tag').textContent = 'Completed';
      card.querySelector('.tag').className = 'tag tag-done';
      card.dataset.status = 'done';
      btn.textContent = '✓ Completed';
      btn.className = 'btn btn-outline';
      btn.disabled = true;
      showToast('Task marked as complete! Great work!');
    });
  });

  /* ==========================================
     Task Filtering
     ========================================== */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var taskBoard = document.querySelector('.task-board');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      var cards = document.querySelectorAll('.task-card');
      cards.forEach(function (card) {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          card.style.display = card.dataset.status === filter ? '' : 'none';
        }
      });
    });
  });

})();

document.addEventListener("DOMContentLoaded", function (event) {
    var dismissButtons = document.querySelectorAll('[data-dismiss="modal"]');
  
    for (var i = 0; i < dismissButtons.length; i++) {
      dismissButtons[i].addEventListener('click', function () {
        hideModals();
      });
    }
  
    var modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');
  
    for (var i = 0; i < modalToggleButtons.length; i++) {
      modalToggleButtons[i].addEventListener('click', function (el) {
        console.log(el.target);
        showModal(el.target.getAttribute('data-modal-toggle'));
      });
    }
  
    var hideModals = function hideModals() {
      var modals = document.getElementsByClassName('modal');
  
      for (i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
      }
    };
  
    var showModal = function showModal(id) {
      document.getElementById(id).style.display = 'flex';
    };
  });
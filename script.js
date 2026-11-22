const count = document.getElementById('bagCount');
const toast = document.getElementById('toast');
let items = 0;
function message(text){toast.textContent=text;toast.classList.add('show');clearTimeout(message.timer);message.timer=setTimeout(()=>toast.classList.remove('show'),2300)}
document.querySelectorAll('.add').forEach(button=>button.addEventListener('click',()=>{items++;count.textContent=items;message('Added to your bag!')}));
document.querySelector('.bag').addEventListener('click',()=>message(items ? `Your bag contains ${items} item(s).` : 'Your bag is currently empty.'));
document.querySelectorAll('.choose').forEach(button=>button.addEventListener('click',()=>message('Thank you! Subscription checkout is a demo.')));
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

// Demo account reset and contact form feedback (no data is sent or stored).
const resetPlanButton = document.getElementById('resetPlan');
if (resetPlanButton) {
  resetPlanButton.addEventListener('click', () => {
    document.getElementById('accountStatus').textContent = 'No active plan selected. Choose a skincare plan to start your loop.';
    document.getElementById('accountFeedback').textContent = 'Your demo plan selection has been reset.';
  });
}
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('formFeedback').textContent = 'Thank you for your message! This is a demo form, so no message was sent.';
    contactForm.reset();
  });
}

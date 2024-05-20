const getUsersBtn = document.getElementById('get-users');
const userCardGrid = document.querySelector('.user-card-grid');
const loader = document.querySelector('.loader');

getUsersBtn.addEventListener('click', async () => {
  loader.hidden = false;
  userCardGrid.innerHTML = '';

  try {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();

    if (data.data) {
      data.data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');

        const img = document.createElement('img');
        img.src = user.avatar;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = `${user.first_name} ${user.last_name}`;
        card.appendChild(name);

        const email = document.createElement('p');
        email.textContent = user.email;
        card.appendChild(email);

        userCardGrid.appendChild(card);
      });
    } else {
      console.error('Error fetching data');
    }
  } catch (error) {
    console.error(error);
  } finally {
    loader.hidden = true;
  }
});
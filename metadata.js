fetch('metadata.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(users => {
    const usersContainer = document.getElementById('users');
    users.forEach(user => {
      // Her kullanıcı için bir <p> etiketi oluştur
      const userElement = document.createElement('p');
      userElement.textContent = `Name: ${user.title}, Age: ${user.age}, City: ${user.city}`;
      // <p> etiketini usersContainer içine ekle
      usersContainer.appendChild(userElement);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
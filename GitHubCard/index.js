// get, adjusted for better reusability by making it an object literal
const cards = document.querySelector('.cards');
const user = 'BNMoyers'
axios.get(`https://api.github.com/users/${user}`)
.then(data => {
  const userArray = data.data
  const userObject = createCard(userArray)
  cards.appendChild(userObject)
  })
  .catch(error => {
    console.log('Something went wrong in your get statement')
  })
  



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createCard(cardObject){
  //card
  const card = document.createElement('div');
  card.classList.add('card');

   //pic
  pic = document.createElement('img');
  pic.src = cardObject.avatar_url;
  card.appendChild('pic');

  //card info
   cardInfo = document.createElement('div');
   cardInfo.classList.add('card-info');
   card.appendChild('cardInfo');

   //user info

   realName = document.createElement('h3');
   realName.classList.add('name');
   realName.textContent = cardObject.name;
   cardInfo.appendChild('realName');

   username = document.createElement('p');
   username.classList.add('username');
   username.textContent = cardObject.userame;
   cardInfo.appendChild('username');

   location = document.createElement('p');
   location.textContent = cardObject.location;
   cardInfo.appendChild('location');

   profileContainer = document.createElement('p');
   cardInfo.appendChild('profileContainer');
   profileLink = document.createElement('a');
   profileLink.href = cardObject.html_url;
   profileContainer.appendChild('profileLink');

   followers = document.createElement('p');
   followers.textContent = cardObject.followers_url;
   cardInfo.appendChild('followers');

   following = document.createElement('p');
   following.textContent = cardObject.following_url;
   cardInfo.appendChild('following');

   bio = document.createElement('p');
   bio.textcontent = cardObject.bio;
   cardInfo.appendChild('bio');

   return card;
  
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

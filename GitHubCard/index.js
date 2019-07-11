// get, adjusted for better reusability by making it an object literal
console.log('here')
const cards = document.querySelector('.cards');
let user = 'BNMoyers'

axios.get(`https://api.github.com/users/${user}`)
.then(data => {
  console.log(data);
  const userArray = data.data
  const userObject = createCard(userArray)
  cards.appendChild(userObject)
  })
  .catch(error => {
    console.log('Something went wrong in your get statement')
  })


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(data => {
    console.log(data);
    const userArray = data.data
    const userObject = createCard(userArray)
    cards.appendChild(userObject)
    })
    .catch(error => {
      console.log('Something went wrong in your get statement')
    })
})


// */
function createCard(cardObject){
  //card
  const card = document.createElement('div');
  card.classList.add('card');

   //pic
  const pic = document.createElement('img');
  pic.src = cardObject.avatar_url;
  card.appendChild(pic);

  //card info
   const cardInfo = document.createElement('div');
   cardInfo.classList.add('card-info');
   card.appendChild(cardInfo);

   //user info

   const realName = document.createElement('h3');
   realName.classList.add('name');
   realName.textContent = cardObject.name;
   cardInfo.appendChild(realName);

   const username = document.createElement('p');
   username.classList.add('username');
   username.textContent = `@${cardObject.login}`;
   cardInfo.appendChild(username);

   const location = document.createElement('p');
   location.textContent = cardObject.location;
   cardInfo.appendChild(location);

   const profileContainer = document.createElement('p');
   cardInfo.appendChild(profileContainer);
   const profileLink = document.createElement('a');
   profileLink.textContent = "Profile"
   profileLink.href = cardObject.html_url;
   profileContainer.appendChild(profileLink);
   console.log('profile link', profileLink);

   const followers = document.createElement('p');
   const followersLink = document.createElement('a')
   followersLink.textContent = "Followers";
   followersLink.href = cardObject.followers_url;
   cardInfo.appendChild(followers);
   followers.appendChild(followersLink);

   const following = document.createElement('p');
   const followingLink = document.createElement('a');
   followingLink.href = cardObject.following_url;
   followingLink.textContent = "Following";
   cardInfo.appendChild(following);
   following.appendChild(followingLink);

   const bio = document.createElement('p');
   bio.innerText = cardObject.bio;
   cardInfo.appendChild(bio);

   return card;
  
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

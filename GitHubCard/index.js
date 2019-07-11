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
   cardInfo = document.createElement('div');
   cardInfo.classList.add('card-info');
   card.appendChild(cardInfo);

   //user info

   realName = document.createElement('h3');
   realName.classList.add('name');
   realName.textContent = cardObject.name;
   cardInfo.appendChild(realName);

   username = document.createElement('p');
   username.classList.add('username');
   username.textContent = cardObject.userame;
   cardInfo.appendChild(username);

   const location = document.createElement('p');
   location.textContent = cardObject.location;
   cardInfo.appendChild(location);

   const profileContainer = document.createElement('p');
   cardInfo.appendChild(profileContainer);
   profileLink = document.createElement('a');
   profileLink.href = cardObject.html_url;
   profileContainer.appendChild(profileLink);

   const followers = document.createElement('p');
   followers.textContent = cardObject.followers_url;
   cardInfo.appendChild(followers);

   const following = document.createElement('p');
   following.textContent = cardObject.following_url;
   cardInfo.appendChild(following);

   const bio = document.createElement('p');
   bio.textcontent = cardObject.bio;
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

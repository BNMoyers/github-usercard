// get, adjusted for better reusability by making it an object literal
const user = 'BNMoyers'
axios.get(`https://api.github.com/users/${user}`)
.then(data => {
  const userArray = data.data
  const userObject = createCard(userArray)
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
  //elements
  const card = document.createElement('div'),
   pic = document.createElement('img'),
   cardInfo = document.createElement('div'),
   realName = document.createElement('h3'),
   username = document.createElement('p'),
   profileContainer = document.createElement('p'),
   profileLink = document.createElement('a'),
   followers = document.createElement('p'),
   following = document.createElement('p'),
   bio = document.createElement('p')
//links
  card.appendChild(pic, cardInfo)
  cardInfo.appendChild(realName, username, profileContainer, followers, following, bio)
  profileContainer.appendChild(profileLink)
//classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  realName.classList.add('name')
  username.classList.add('username')
  //content
  // pic.src = 
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

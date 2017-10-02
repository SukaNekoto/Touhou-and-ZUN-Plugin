javascript:(function(){

document.getElementsByClassName("navigate lobby-link")[2].textContent=("HALL");  //LOBBY
document.getElementById("login-link").textContent=("S'IDENTIFIER");//LOGIN
document.getElementById("signup-link").textContent=("S'INSCRIRE");//SIGN UP
document.getElementsByClassName("navigate lobby-link")[0].textContent=("Hall");  //Lobby
document.getElementsByClassName("navigate lobby-link")[1].textContent=("Faire un don");  //Donate
document.getElementsByClassName("icon-logout")[0].nextSibling.textContent=(" Se déconnecter"); //Log out
document.getElementsByClassName("icon-remove-circle close-login-window")[0].nextElementSibling.nextElementSibling.textContent=("Rejoindre la fête");//Join the Party on login page
document.getElementsByClassName("icon-remove-circle close-login-window")[3].nextElementSibling.nextElementSibling.textContent=("Rejoindre la fête");//Join the Party on forgot password page
document.getElementsByClassName("icon-remove-circle close-login-window")[2].nextElementSibling.nextElementSibling.textContent=("Rejoindre la fête");//Join the Party on sign up page

//all of these four sign ins need to have their width changed to 310 px because they are longer than in English and also need to be recentered

document.getElementsByClassName("facebook-login")[0].lastChild.textContent=("Connecter-vous avec Facebook");//Sign in with Facebook
document.getElementsByClassName("twitter-login")[0].lastChild.textContent=("Connecter-vous avec Twitter");//Sign in with Twitter
document.getElementsByClassName("soundcloud-login")[0].lastChild.textContent=("Connecter-vous avec Soundcloud");//Sign in with Soundcloud
document.getElementsByClassName("twitch-login")[0].lastChild.textContent=("Connecter-vous avec Twitch");//Sign in with Twitch

//Or enter your email
document.getElementsByName("username")[0].placeholder=("E-mail ou nom d'utilisateur"); //Email or username
document.getElementsByName("password")[0].placeholder=("Mot de passe"); //password
//Sign in
//reset password

//all of these four sign ups need to have their width changed to 308 px because they are longer than in English and also need to be recentered

document.getElementsByClassName("facebook-login")[1].lastChild.textContent=("Inscrivez-vous avec Facebook");//Sign up with Facebook
document.getElementsByClassName("twitter-login")[1].lastChild.textContent=("Inscrivez-vous avec Twitter");//Sign up with Twitter
document.getElementsByClassName("soundcloud-login")[1].lastChild.textContent=("Inscrivez-vous avec Soundcloud");//Sign up with Soundcloud
document.getElementsByClassName("twitch-login")[1].lastChild.textContent=("Inscrivez-vous avec Twitch");//Sign up with Twitch

//or register with your email
document.getElementsByName("username")[2].placeholder=("Nom d'utilisateur"); //username
//Forgot password?
//Need an account?
//Have an account?
document.getElementsByClassName("displayVideo-el")[0].textContent=("VIDÉO");  //VIDEO
//Click here to begin
//hosted by
document.getElementsByClassName("display-mods-controls")[1].textContent=("CONTRÔLES"); //CONTROLS
//USER CONTROLS
//Click a command to place in chat field
//Skip current song
//Lock the queue
//Unlock the queue
//Ban someone
//Unban someone
//Kick someone out
//Ban someone temporarily
//Silently mute someone
//Silently unmute someone
//Set someone as co-owner
//Remove someone as co-owner
//Set someone as moderator
//Remove someone as moderator
//Set someone as manager
//Remove someone as manager
//Set someone as resident DJ (Disk Jockey)
//Remove someone as DJ (Disk Jockey)
//Set someone as VIP (Very Important Person)
//Remove someone as VIP (Very Important Person)
//@username
//@username x (x = variable for time)
document.getElementsByClassName("display-ban-list")[0].textContent=("LISTE DES BANNIS"); //BAN LIST
//UNBAN
document.getElementsByClassName("display-mute-list")[0].textContent=("LISTE DES MUETS"); //MUTE LIST
//UNMUTE
document.getElementsByClassName("display-staff-list")[0].textContent=("LISTE DU PERSONNEL"); //STAFF LIST
//REMOVE ROLE
document.getElementsByClassName("display-role-list")[0].textContent=("PERMISSIONS DU RÔLE"); //ROLE PERMS
//PERMISSIONS
//Update Room
//Set Manager
//Set Mod
//Set Vip (Very important person)
//Set Rdj (Resident disk jockey)
//Set Dj (Disk jockey)
//Delete Chat
//Lock Queue
//Reorder Queue
//Join Locked Queue
//is playing
document.getElementsByName("room-users-search")[0].placeholder=("Utilisateurs de la salle de filtrage"); //Filter room users
//By Role
//By Dubs
//By Name
document.getElementsByClassName("chat-option-header")[0].textContent=("ECRAN DE CHAT"); //CHAT DISPLAY
//Hide Images
//Show Images
document.getElementsByClassName("clearChatToggle")[0].textContent=("Effacer le chat"); //Clear Chat
//Disable Role Colors
//Enable Role Colors
//Show Deleted Messages
//Hide Deleted Messages
//Disable Emojis
//Enable Emojis
document.getElementsByClassName("chat-option-header")[1].textContent=("NOTIFICATIONS SONORES"); //SOUND NOTIFICATIONS
//On
//@Mention
//Off
//Chat has been cleared!
document.getElementById("new-message-input").placeholder=("Nouveau message privé"); //New private message
document.getElementById("message-input").placeholder=("Entrez votre message ici..."); //Enter your message here...
//BACK
//current DJ (Disk Jockey)
document.getElementsByClassName("title")[0].textContent=("VOS PLAYLIST"); //YOUR PLAYLISTS
document.getElementsByName("youtube-search")[0].placeholder=("Chercher"); //Search (seems it doesn't change when I click Soundcloud...?)
//Pause
//Resume
//Clear
//Advertisement
//Please help support us by whitelisting us on your adblocker
document.getElementsByClassName("playlist-items-count")[0].previousSibling.textContent=("Ma file d'attente"); //My queue //need to change padding or somethin' (remember to keep number)
document.getElementsByClassName("playlist-items-count")[1].previousSibling.textContent=("La file d'attente"); //Room queue //need to change padding or somethin' (remember to keep number)
document.getElementsByClassName("playlist-items-count")[2].previousSibling.textContent=("Liste d'attente"); //Room waitlist
document.getElementsByClassName("icon-history")[0].nextSibling.textContent=("Historique de la salle"); //Room history //make box width 200px
document.getElementsByClassName("import-playlist")[2].lastChild.textContent=(" Importer des playlists"); //Import playlists
document.getElementsByClassName("close-import-playlist icon-close")[0].nextSibling.textContent=("IMPORTER DES PLAYLISTS"); //IMPORT PLAYLISTS
document.getElementsByClassName("youtube-username")[0].placeholder=("ID de la liste de lecture Youtube");//Youtube playlist ID (Identity Document)
document.getElementsByClassName("soundcloud-username")[0].placeholder=("Nom d'utilisateur Soundcloud"); //Soundcloud username
//New playlist
document.getElementsByClassName("import-playlist icon-inbox")[0].textContent=("IMPORTATION"); //YouTube's IMPORT button
document.getElementsByClassName("import-playlist icon-inbox")[1].textContent=("IMPORTATION"); //Soundcloud's IMPORT button
document.getElementsByClassName("icon-createplaylist")[0].nextSibling.textContent=(" Créer une playlist"); //Create playlist

//The text for create a new playlist fits but need to change the css to make it look good

document.getElementsByClassName("create-playlist-form")[0].firstChild.placeholder=("Créer une nouvelle playlist"); //create a new playlist

//Filter queue
//Filter history
//Preview
//Queued by
//Remove Dj (Disk jockey) From Queue
//Clear All Dj’s (Disk jockey’s) Songs
//You are not in the room queue, click here to join :]
//Played by
//LOADING...
document.getElementsByName("message")[0].placeholder=("Rejoindre la conversation"); //Join the conversation
//less than a minute ago
//about a minute ago
//minutes ago
//about an hour ago
//about 2 hours ago
//hours ago
//a day ago
//days ago
//locked the queue
//unlocked the queue
//LOOKING FOR ROOMS
//LOADING USER…
//FOLLOW
//FOLLOWERS
//LOAD MORE FOLLOWERS
document.getElementById("room-search").placeholder=("Recherche d'une chambre..."); //Search for a room… //change box width to 210px
document.getElementsByClassName("create-room")[0].textContent=("CRÉATION D'UNE CHAMBRE"); //CREATE ROOM
//Go ahead, play a song!
//Fetching Follow…
//Follow
//Unfollow
//Set role
//default
//Ban for
//custom
//10 minutes
//30 minutes
//1 hour
//1 day
//1 week
//eternity
//time

//Need to change size of box/text to make it look right

document.getElementById("login-popover").firstChild.textContent=("Vous semblez profiter de cette communauté!"); //You seem to be enjoying this community!
document.getElementsByClassName("navigate")[5].previousSibling.textContent=("Pourquoi ne pas vous joindre à l'amusement en vous "); //Why don’t you join the fun by
document.getElementsByClassName("navigate")[5].textContent=("connectant "); //logging in
document.getElementsByClassName("navigate")[5].nextSibling.textContent=("ou en vous "); //or
document.getElementsByClassName("navigate")[6].textContent=("inscrivant"); //signing up
document.getElementsByClassName("icon-close")[2].previousSibling.textContent=("Cela vous permettra de mettre en file d'attente des vidéos, chansons, de participer au chat et plus encore!"); //This will allow you to queue videos, songs, chat and more!

//Your Room
//Name
//Privacy
//Public
//Private (Beta)
//Search visibility
//Yes
//No
//Lobby visibility
//Max. (Maximum) song length (minutes)
//Don’t allow same song to be played until (minutes)
//Limit queue length
//Max (Maximum) users in queue
//Show DJ’s (Disk Jockey’s) songs in queue list
//Show message when someone enters
//Show message when someone leaves
//Show when someone grabs the current song
//Re-queue DJs (Disk Jockeys) after play
//Background (Max (Maximum) size: 2 MB (MegaBytes))
//Description
//use M markdown to style it
//About your room...
//Welcome message
//you can use {username}, {roomname}, and M markdown
//Welcome! Variables “{username}” and “{roomname}” can be used.
//Metadata description
//shown on social media sites and search engines
//Lock queue
//Type of room
//Save
//Cancel
document.getElementsByClassName("queue-info")[0].previousSibling.textContent=(" Insérer une chanson"); //Queue a song
//Join queue
//Join Locked Queue
//Leave queue
//SKIPPED
//Ban
//Kick
//Мute
//Skip
document.getElementsByClassName("skip-el")[0].textContent=("PASSER"); //SKIP


})();
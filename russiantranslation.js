javascript:(function(){

document.getElementsByClassName("navigate lobby-link")[2].textContent=("ЛОББИ");  //LOBBY
document.getElementById("login-link").textContent=("ЛОГИН");//LOGIN
document.getElementById("signup-link").textContent=("РЕГИСТРАЦИЯ");//SIGN UP
document.getElementsByClassName("navigate lobby-link")[0].textContent=("Лобби");  //Lobby
document.getElementsByClassName("navigate lobby-link")[1].textContent=("Пожертвования");  //Donate
document.getElementsByClassName("navigate lobby-link")[1].nextElementSibling.textContent=("Блог");//Blog
document.getElementsByClassName("navigate lobby-link")[1].nextElementSibling.nextElementSibling.textContent=("ЧАВО"); //FAQ
document.getElementsByClassName("navigate lobby-link")[1].nextElementSibling.nextElementSibling.nextElementSibling.textContent=("Контакты") //Contact
document.getElementsByClassName("icon-logout")[0].nextSibling.textContent=(" Выход"); //Log out
document.getElementsByClassName("icon-remove-circle close-login-window")[0].nextElementSibling.nextElementSibling.textContent=("Присоедениться к комнате");//Join the Party on login page
document.getElementsByClassName("icon-remove-circle close-login-window")[3].nextElementSibling.nextElementSibling.textContent=("Присоедениться к комнате");//Join the Party on forgot password page
document.getElementsByClassName("icon-remove-circle close-login-window")[2].nextElementSibling.nextElementSibling.textContent=("Присоедениться к комнате");//Join the Party on sign up page

//all of these four sign ins need to have their width changed to 300 px because they are longer than in English and also need to be recentered

document.getElementsByClassName("facebook-login")[0].lastChild.textContent=("Логин с помощью Facebook");//Sign in with Facebook
document.getElementsByClassName("twitter-login")[0].lastChild.textContent=("Логин с помощью Twitter");//Sign in with Twitter
document.getElementsByClassName("soundcloud-login")[0].lastChild.textContent=("Логин с помощью Soundcloud");//Sign in with Soundcloud
document.getElementsByClassName("twitch-login")[0].lastChild.textContent=("Логин с помощью Twitch");//Sign in with Twitch

//Or enter your email
document.getElementsByName("username")[0].placeholder=("Email или имя пользователя"); //Email or username
document.getElementsByName("password")[0].placeholder=("Пароль"); //password
//Sign in
//reset password

//all of these four sign ups need to have their width changed to 358 px because they are longer than in English and also need to be recentered

document.getElementsByClassName("facebook-login")[1].lastChild.textContent=("Регистрация с помощью Facebook");//Sign up with Facebook
document.getElementsByClassName("twitter-login")[1].lastChild.textContent=("Регистрация с помощью Twitter");//Sign up with Twitter
document.getElementsByClassName("soundcloud-login")[1].lastChild.textContent=("Регистрация с помощью Soundcloud");//Sign up with Soundcloud
document.getElementsByClassName("twitch-login")[1].lastChild.textContent=("Регистрация с помощью Twitch");//Sign up with Twitch

//Or register with your email
document.getElementsByName("username")[2].placeholder=("Имя пользователя"); //username
//Forgot password?
//Need an account?
//Have an account?
document.getElementsByClassName("displayVideo-el")[0].textContent=("ВИДЕО");  //VIDEO
document.getElementsByClassName("display-queue")[0].textContent=("ОЧЕРЕДЬ");  //QUEUE
document.getElementsByClassName("room-info-display")[0].textContent=("ИНФО");  //INFO
//Click here to begin
//hosted by in INFO
document.getElementsByClassName("display-mods-controls")[1].textContent=("УПРАВЛЕНИЕ"); //CONTROLS
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
document.getElementsByClassName("display-ban-list")[0].textContent=("БАН ЛИСТ"); //BAN LIST
//UNBAN
document.getElementsByClassName("display-mute-list")[0].textContent=("МУТ ЛИСТ"); //MUTE LIST
//UNMUTE
document.getElementsByClassName("display-staff-list")[0].textContent=("СПИСОК АДМИНИСТРАЦИИ"); //STAFF LIST
//REMOVE ROLE
document.getElementsByClassName("display-role-list")[0].textContent=("ФУНКЦИИ РОЛИ"); //ROLE PERMS
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
document.getElementsByName("room-users-search")[0].placeholder=("Фильтр пользователей в комнате"); //Filter room users
//By Role
//By Dubs
//By Name
document.getElementsByClassName("chat-option-header")[0].textContent=("ОТОБРАЖЕНИЕ ЧАТА"); //CHAT DISPLAY
//Hide Images
//Show Images
document.getElementsByClassName("clearChatToggle")[0].textContent=("Очистить чат"); //Clear Chat
//Disable Role Colors
//Enable Role Colors
//Show Deleted Messages
//Hide Deleted Messages
//Disable Emojis
//Enable Emojis
document.getElementsByClassName("chat-option-header")[1].textContent=("ЗВУКОВЫЕ ОПОВЕЩЕНИЯ"); //SOUND NOTIFICATIONS
//On
//@Mention
//Off
//Chat has been cleared!
document.getElementById("new-message-input").placeholder=("Новое личное сообщение"); //New private message
document.getElementById("message-input").placeholder=("Введите ваше сообщение..."); //Enter your message here...
//BACK
//current DJ (Disk Jockey)
document.getElementsByClassName("title")[0].textContent=("ВАШ ПЛЕЙЛИСТ");//YOUR PLAYLISTS
document.getElementsByName("youtube-search")[0].placeholder=("Поиск"); //Search (seems it doesn't change when I click Soundcloud...?)
//Pause
//Resume
//Clear
//Advertisement
//Please help support us by whitelisting us on your adblocker
document.getElementsByClassName("playlist-items-count")[0].previousSibling.textContent=("Моя очередь"); //My queue
document.getElementsByClassName("playlist-items-count")[1].previousSibling.textContent=("Очередь комнаты"); //Room queue //need to change padding or somethin' (remember to keep number)
document.getElementsByClassName("playlist-items-count")[2].previousSibling.textContent=("Список ожидания комнаты"); //Room waitlist //need to change padding or somethin' (remember to keep number)
document.getElementsByClassName("icon-history")[0].nextSibling.textContent=("История комнаты"); //Room history //need to change box width to 180
document.getElementsByClassName("import-playlist")[2].lastChild.textContent=(" Импорт плейлиста"); //Import playlists
document.getElementsByClassName("close-import-playlist icon-close")[0].nextSibling.textContent=("ИМПОРТ ПЛЕЙЛИСТА"); //IMPORT PLAYLISTS
document.getElementsByClassName("youtube-username")[0].placeholder=("ID Плейлиста с youtube");//Youtube playlist ID (Identity Document)
document.getElementsByClassName("soundcloud-username")[0].placeholder=("Имя пользователя с Soundcloud"); //Soundcloud username
//New playlist
document.getElementsByClassName("import-playlist icon-inbox")[0].textContent=("ИМПОРТ"); //YouTube's IMPORT button
document.getElementsByClassName("import-playlist icon-inbox")[1].textContent=("ИМПОРТ"); //Soundcloud's IMPORT button
document.getElementsByClassName("icon-createplaylist")[0].nextSibling.textContent=(" Создать плейлист"); //Create playlist

//The text for create a new playlist fits but need to change the css to make it look good

document.getElementsByClassName("create-playlist-form")[0].firstChild.placeholder=("Создать новый плейлистt") //create a new playlist

//Filter queue
//Filter history
//Preview
//Queued by
//Remove Dj (Disk jockey) From Queue
//Clear All Dj’s (Disk jockey’s) Songs
//You are not in the room queue, click here to join :]
//Played by
//LOADING...
document.getElementsByName("message")[0].placeholder=("Присоедениться к разговору"); //Join the conversation
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
document.getElementById("room-search").placeholder=("Поиск комнаты..."); //Search for a room…
document.getElementsByClassName("create-room")[0].textContent=("СОЗДАТЬ КОМНАТУ"); //CREATE ROOM
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

//Need to change size of box/text to make it look right, perhaps just a height of 110px

document.getElementById("login-popover").firstChild.textContent=("Похоже, что Вам нравится это сообщество!"); //You seem to be enjoying this community!
document.getElementsByClassName("navigate")[5].previousSibling.textContent=("Почему бы не присоедениться к веселью, "); //Why don’t you join the fun by
document.getElementsByClassName("navigate")[5].textContent=("войдя в учетную запись "); //logging in
document.getElementsByClassName("navigate")[5].nextSibling.textContent=("или "); //or
document.getElementsByClassName("navigate")[6].textContent=("зарегистрировавшись"); //signing up
document.getElementsByClassName("icon-close")[2].previousSibling.textContent=("Это позволит Вам ставить в очередь видео и песни, общаться в чате и многое другое!"); //This will allow you to queue videos, songs, chat and more!

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
document.getElementsByClassName("queue-info")[0].previousSibling.textContent=(" Добавить песню в очередь"); //Queue a song
//Join queue
//Join Locked Queue
//Leave queue
//SKIPPED
//Ban
//Kick
//Мute
//Skip
document.getElementsByClassName("skip-el")[0].textContent=("ПРОПУСТИТЬ"); //SKIP


})();
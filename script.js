// Function to post a tweet
document.getElementById('post-tweet').addEventListener('click', function () {
    const tweetInput = document.getElementById('tweet-input');
    const tweetText = tweetInput.value.trim();
  
    if (tweetText) {
      const tweetFeed = document.getElementById('tweet-feed');
  
      // Create a new tweet element
      const tweet = document.createElement('div');
      tweet.className = 'tweet';
  
      const tweetContent = document.createElement('p');
      tweetContent.textContent = tweetText;
  
      const tweetTime = document.createElement('small');
      tweetTime.textContent = new Date().toLocaleTimeString();
  
      tweet.appendChild(tweetContent);
      tweet.appendChild(tweetTime);
  
      // Add the tweet to the feed
      tweetFeed.prepend(tweet);
  
      // Clear the input
      tweetInput.value = '';
    }
  });
  
  // Function to handle sidebar navigation
  const mainContentHeader = document.querySelector('.header h1');
  const tweetBox = document.querySelector('.tweet-box');
  const tweetFeed = document.getElementById('tweet-feed');
  
  document.getElementById('home').addEventListener('click', function (e) {
    e.preventDefault();
    mainContentHeader.textContent = 'Home';
    tweetBox.style.display = 'block';
    tweetFeed.style.display = 'block';
  });
  
  document.getElementById('explore').addEventListener('click', function (e) {
    e.preventDefault();
    mainContentHeader.textContent = 'Explore';
    tweetBox.style.display = 'none';
    tweetFeed.style.display = 'none';
    alert('Explore page is under construction!');
  });
  
  document.getElementById('notifications').addEventListener('click', function (e) {
    e.preventDefault();
    mainContentHeader.textContent = 'Notifications';
    tweetBox.style.display = 'none';
    tweetFeed.style.display = 'none';
    alert('You have no new notifications.');
  });
  
  document.getElementById('messages').addEventListener('click', function (e) {
    e.preventDefault();
    mainContentHeader.textContent = 'Messages';
    tweetBox.style.display = 'none';
    tweetFeed.style.display = 'none';
    alert('Messages feature is coming soon!');
  });
  
  document.getElementById('profile').addEventListener('click', function (e) {
    e.preventDefault();
    mainContentHeader.textContent = 'Profile';
    tweetBox.style.display = 'none';
    tweetFeed.style.display = 'none';
    alert('Profile page is under construction!');
  });
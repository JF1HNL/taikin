let now = new Date()

function tweet() {
  const content = {
    url: window.location.href,
    text: `【退勤】${now.getHours()}時${now.getMinutes()}分 @open_kim_ `,
    tag: ["退勤ボタン"]
  };
  for (let key in content) {
    content[key] = encodeURIComponent(content[key]);
  }
  //window.location.href = "https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag
  //window.open("https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag)

  let to_url = ""
  const ua = window.navigator.userAgent.toLowerCase();

  if(ua.indexOf("android") !== -1) {
    to_url = "twitter://post?message=" + content.text + content.url
  } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
    to_url = "twitter://post?message=" + content.text + content.url
  } else {
    to_url = "https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag
  }
  window.location.href = to_url
}

tweet()
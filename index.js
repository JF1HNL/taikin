let now = new Date()

function tweet() {
  const content = {
    url: window.location.href,
    text: `【退勤】${now.getHours()}時${now.getMinutes()}分 @open_kim_`,
    tag: ["退勤ボタン"]
  };
  for (let key in content) {
    content[key] = encodeURIComponent(content[key]);
  }
  //window.location.href = "https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag
  //window.open("https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag)
  window.open("twitter://post?message=" + content.text + content.url)
}

tweet()
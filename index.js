let now = new Date()

function tweet() {
  const content = {
    url: window.location.href,
    text: `【退勤】${now.getHours()}時${now.getMinutes()}分`,
    tag: ["退勤ボタン"],
    mention: ["open_kim_"]
  };
  for (let key in content) {
    content[key] = encodeURIComponent(content[key]);
  }
  //window.location.href = "https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag
  //window.open("https://twitter.com/intent/tweet?url=" + content.url + "&text=" + content.text + "&hashtags=" + content.tag)
  window.location.href = "twitter://post?message=" + content.text + "&mention=" + content.mention + "&hashtags=" + content.tag + "&url=" + content.url
}

tweet()
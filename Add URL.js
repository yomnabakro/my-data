<script> mnajiri_id = 3;
var mnajiri_now = new Date()
var detik = mnajiri_now.getSeconds()
var mnajiri_ads = detik % mnajiri_id;
mnajiri_ads += 1;
if (mnajiri_ads == 1) {
  //* link *//
  url = "https://mdwab.blogspot.com";
  alt = "mdwab 1";
  //* title your banner *//
  title = "Mohamed Najiri";
  //* url img *//
  banner = "https://1.bp.blogspot.com/-UlJbueM8Z8c/XP6QwzdVlGI/AAAAAAAAF8I/CTBXQjY7U3UXqf1kyFFk96nmKYMgShjAACLcBGAs/s1600/mnajiri1.jpg";
  //* mnajiri *//
  width = "250";
  height = "250";
}
if (mnajiri_ads == 2) {
  url = "https://ar1books.blogspot.com";
  alt = "mdwab 2";
  title = "Mohamed Najiri";
  banner = "https://1.bp.blogspot.com/-WBxb986YFGw/XP6QnTP3WXI/AAAAAAAAF8E/HEYAMiRvTA4TZDT0Di17dfSCTd0plwl4ACLcBGAs/s1600/mnajiri2.jpg";
  width = "250";
  height = "250";
}
if (mnajiri_ads == 3) {
  url = "https://mdwab.blogspot.com";
  alt = "mdwab 3";
  title = "Mohamed Najiri";
  banner = "https://1.bp.blogspot.com/-xVgZ9h9yCF8/XP6QRc8Sn5I/AAAAAAAAF78/yvLuiuH9zw8MYDNPfZKm3GiRKBcMBa9qgCLcBGAs/s1600/mnajiri3.jpg";
  width = "250";
  height = "250";
}
document.write('<a href=\"' + url + '\" target=\"_blank\" rel=\"nofollow\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('title=\"' + title + '\" alt=

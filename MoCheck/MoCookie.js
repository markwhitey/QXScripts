/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("kcjsCookie") != undefined) {
    if ($prefs.valueForKey("kcjsCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "kcjsCookie");
      if (!cookie) {
        $notify("更新Cookie失败！", "", "");
      } else {
        $notify("更新Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "kcjsCookie");
    if (!cookie) {
      $notify("首次写入Cookie失败！", "", "");
    } else {
      $notify("首次写入Cookie成功！", "", "");
    }
  }
}
$done({});
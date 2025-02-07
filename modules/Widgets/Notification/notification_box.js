// =============================================================== >> Widget <<
function Notification(Text, Icon) {
  // ---------------------------------------------- >> Widget <<
  const Notification = document.createElement("div");
  Notification.classList.add("Notification");
  // ---------------------------------------------- >> Widget <<
  //
  // ------------------------------------------------ >> Icon <<
  const NotificationIcon = document.createElement("iconify-icon");
  NotificationIcon.classList.add("NotificationIcon");
  //
  // Fill The Icon >>
  NotificationIcon.setAttribute("icon", `${Icon}`);
  // Fill The Icon >>
  //
  // AppendChild >>
  Notification.appendChild(NotificationIcon);
  // AppendChild <<
  //
  // ------------------------------------------------ >> Icon <<
  //
  // ------------------------------------------------ >> Text <<
  const NotificationText = document.createElement("span");
  NotificationText.classList.add("NotificationText");
  //
  // Fill The Span >>
  NotificationText.textContent = Text;
  // Fill The Span >>
  //
  // AppendChild >>
  Notification.appendChild(NotificationText);
  // AppendChild <<
  //
  // ------------------------------------------------ >> Text <<
  //
  // ---------------------------------------------- >> Return <<
  return Notification;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Widget <<
//
// ============================================================= >> CallBack <<
export function NotificationCallBack(Text, Icon, classname, Father, layer) {
  //
  // ---------------------------------------- >> Notification <<
  const Notif = Notification(Text, Icon);
  Notif.classList.add(classname);
  // ---------------------------------------- >> Notification <<
  //
  // -------------------------------------------------- >> AC <<
  Father.appendChild(Notif);
  // -------------------------------------------------- >> AC <<
  //
  // -------------------------------------------------- >> SM <<
  //
  layer.classList.add("show");
  Notif.classList.add("show");
  //
  setTimeout(() => {
    layer.classList.remove("show");
    Notif.classList.remove("show");
  }, 2000);
  //
  setTimeout(() => {
    Father.removeChild(Notif);
  }, 2500);
  //
  // -------------------------------------------------- >> SM <<
  //
  //
}
// ============================================================= >> CallBack <<

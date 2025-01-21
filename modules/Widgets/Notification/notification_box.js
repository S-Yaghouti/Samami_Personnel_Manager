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
export function NotificationCallBack(Father, ClassName, Text, Icon) {
  //
  // Class Management >>
  Father.classList.add("show");
  // Class Management <<
  //
  // Callback >>
  const Notif = Notification(Text, Icon);
  Notif.classList.add(ClassName);
  // Callback <<
  //
  // Ap >>
  Father.appendChild(Notif);
  // Ap <<
  //
  // Remove Child >>
  setTimeout(() => {
    Father.classList.remove("show");
  }, 2000);
  //
  setTimeout(() => {
    Father.removeChild(Notif);
    Notif.classList.remove(ClassName);
  }, 2100);
  // Remove Child <<
}
// ============================================================= >> CallBack <<

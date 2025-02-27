// ============================================================== >> Imports <<
//
// -------------------------------------------------- >> Feild <<
import { Field } from "./../../modules/Widgets/Field/Field.js";
// -------------------------------------------------- >> Feild <<
//
// ---------------------------------------------------- >> BTN <<
import { BTN } from "./../../modules/Widgets/BTN/BTN.js";
// ---------------------------------------------------- >> BTN <<
//
// ----------------------------------------- >> Request Result <<
import { RequestResult } from "../../modules/Data_Builder/request_result.js";
// ----------------------------------------- >> Request Result <<
//
// ------------------------------------------ >> Local Storage <<
import { RetrieveLocalStorage } from "../Local_Storage/local_storage.js";
// ------------------------------------------ >> Local Storage <<
//
// ------------------------------------------------ >> Loading <<
import { LoadingcallBack } from "../Widgets/Loading/loading.js";
// ------------------------------------------------ >> Loading <<
//
// ------------------------------------------- >> Notification <<
import { NotificationCallBack } from "../Widgets/Notification/notification_box.js";
// ------------------------------------------- >> Notification <<
//
// -------------------------------------------- >> Web Service <<
import { GET } from "../Web_Service/web_service.js";
// -------------------------------------------- >> Web Service <<
// 
// ============================================================== >> Imports <<
//
// ========================================================== >> Definitions <<
//
// V => { Variables }
//
// CB => { CallBack }
//
// SM => { State Management }
//
// L => { Lsitener }
//
// AC => { Append Child }
//
// RC => { Remove Child }
//
// RM => { Response Manager }
//
// WS => { Web Socket }
//
// ========================================================== >> Definitions <<
//
// ==================================================================== >> V <<
//
// ----------------------------------------------------------- >> WS <<
let WS;
let previousSender = null;
// ----------------------------------------------------------- >> WS <<
//
// ------------------------------------------------------ >> Layer 5 <<
const Layer5 = document.querySelector(".Layer5");
const BG_5 = document.querySelector("#BG_5");
// ------------------------------------------------------ >> Layer 5 <<
//
// ------------------------------------------------------ >> Layer 6 <<
const Layer6 = document.querySelector(".Layer6");
const BG_6 = document.querySelector("#BG_6");
// ------------------------------------------------------ >> Layer 6 <<
//
// ------------------------------------------------------ >> Layer 7 <<
const Layer7 = document.querySelector(".Layer7");
const BG_7 = document.querySelector("#BG_7");
// ------------------------------------------------------ >> Layer 7 <<
//
// ==================================================================== >> V <<
//
// =============================================================== >> Module <<
export function ChatRome(id) {
  //
  // ----------------------------------------------- >> Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ----------------------------------------------- >> Loading <<
  //
  // ------------------------------------------------- >> token <<
  const token = RetrieveLocalStorage("token");
  // ------------------------------------------------- >> token <<
  //
  // ---------------------------------------------------- >> WS <<
  const URL = `wss://personnel.samami.co/ws/${id}/${token}`;
  WS = new WebSocket(URL);
  // ---------------------------------------------------- >> WS <<
  //
  // ------------------------------------------------ >> onopen <<
  WS.onopen = () => {
    //
    BG_5.appendChild(ChatRome);
    //
    setTimeout(() => {
      Layer5.classList.add("show");
    }, 500);
    //
    LoadingcallBack(BG_6, 2, Layer6);
    //
  };
  // ------------------------------------------------ >> onopen <<
  //
  // --------------------------------------------- >> onmessage <<
  WS.onmessage = (event) => {
    //
    // ---------------------------------- > Data <
    const messageData = JSON.parse(event.data);
    // ---------------------------------- > Data <
    //
    // ------------------------------------ > CB <
    RM(messageData, ChatsList);
    // ------------------------------------ > CB <
    //
    setTimeout(() => {
      const Loading = document.querySelector(".Loading");
      if (Loading) {
        LoadingcallBack(BG_6, 2, Layer6);
      }
    }, 500);
    //
  };
  // --------------------------------------------- >> onmessage <<
  //
  // ----------------------------------------------- >> onerror <<
  WS.onerror = (event) => {
    //
    // ---------------------------- > Notifiaction <
    NotificationCallBack(event.reason, "si:error-fill", "red", BG_7, Layer7);
    // ---------------------------- > Notifiaction <
    //
    // -------------------------------------- > SM <
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.innerHTML = "";
    }, 500);
    // -------------------------------------- > SM <
    //
  };
  // ----------------------------------------------- >> onerror <<
  //
  // ----------------------------------------------- >> onclose <<
  WS.onclose = (event) => {
    //
    // ---------------------------- > Notifiaction <
    NotificationCallBack(
      event.reason,
      "fluent:plug-disconnected-20-filled",
      "red",
      BG_7,
      Layer7
    );
    // ---------------------------- > Notifiaction <
    //
    // -------------------------------------- > SM <
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.innerHTML = "";
    }, 500);
    // -------------------------------------- > SM <
    //
  };
  // ----------------------------------------------- >> onclose <<
  //
  // ------------------------------------------------ >> Widget <<
  const ChatRome = document.createElement("div");
  ChatRome.classList.add("ChatRome", "show");
  //
  //
  // ------------------------------------------------ >> Widget <<
  //
  // ------------------------------------------------- >> Close <<
  //
  // ------------------------------------------ > CB <
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // ------------------------------------------ > CB <
  //
  // ----------------------------------------- > CSS <
  ColseBTN.widget.style.marginLeft = "auto";
  // ----------------------------------------- > CSS <
  //
  // ------------------------------------------- > L <
  function ColseBTNListener() {
    //
    // ----------------------------------- SM >>
    Layer5.classList.remove("show");
    // ----------------------------------- SM <<
    //
    // ----------------------------------- RC >>
    setTimeout(() => {
      BG_5.removeChild(ChatRome);
    }, 500);
    // ----------------------------------- RC <<
    //
    // ----------------------------- Close WS >>
    WS.close(1000, "Exit Chat");
    previousSender = null;
    // ----------------------------- Close WS <<
    //
  }
  // ------------------------------------------- > L <
  //
  // ------------------------------------------ > AC <
  ChatRome.appendChild(ColseBTN.widget);
  // ------------------------------------------ > AC <
  //
  // ------------------------------------------------- >> Close <<
  //
  // -------------------------------------------- >> Chats List <<
  const ChatsList = document.createElement("div");
  ChatsList.classList.add("ChatsList");
  //
  // ------------------------------------- > AC <
  ChatRome.appendChild(ChatsList);
  // ------------------------------------- > AC <
  //
  // -------------------------------------------- >> Chats List <<
  //
  // ----------------------------------------------- >> Send CB <<
  //
  // ---------------------------------------- > CB <
  const Send = SendSection();
  // ---------------------------------------- > CB <
  //
  // ---------------------------------------- > AC <
  ChatRome.appendChild(Send.widget);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Send CB <<
  //
}
// =============================================================== >> Module <<
//
// =================================================================== >> RM <<
function RM(data, father) {
  //
  // -------------------------------------------------------- >> 👍 <<
  if (data.list.length !== 0) {
    //
    // ------------------------------------------------ > V <
    const RequestResult = document.querySelector(".RequestResult");
    // ------------------------------------------------ > V <
    //
    // ----------------------------------------------- > SM <
    if (father.contains(RequestResult)) {
      //
      previousSender = null;
      //
      RequestResult.classList.add("remove");
      //
      setTimeout(() => {
        father.removeChild(RequestResult);
      }, 500);
      //
      setTimeout(() => {
        data.list.forEach((info) => {
          //
          // -------------------------------- CB >>
          const ChatBox = Chat(info);
          // -------------------------------- CB <<
          //
          // -------------------------------- AC >>
          father.appendChild(ChatBox);
          // -------------------------------- AC <<
          //
        });
      }, 500);
    }
    // ----------------------------------------------- > SM <
    //
    // ------------------------------------------ > foreach <
    else {
      //
      data.list.forEach((info) => {
        //
        // -------------------------------- CB >>
        const ChatBox = Chat(info);
        // -------------------------------- CB <<
        //
        // -------------------------------- AC >>
        father.appendChild(ChatBox);
        // -------------------------------- AC <<
        //
      });
      //
    }
    // ------------------------------------------ > foreach <
    //
  }
  // -------------------------------------------------------- >> 👍 <<
  //
  // ----------------------------------------------------- >> empty <<
  else if (data.list.length == 0) {
    //
    // --------------------------------------------- > V <
    const SVG_URL = "./../assets/svg/Empty_Response.svg";
    // --------------------------------------------- > V <
    //
    // -------------------------------------------- > CB <
    const Widget = RequestResult(SVG_URL, "Chat is empty");
    // -------------------------------------------- > CB <
    //
    // -------------------------------------------- > AC <
    father.appendChild(Widget);
    // -------------------------------------------- > AC <
  }
  // ----------------------------------------------------- >> empty <<
  //
  // -------------------------------------------------------- >> 👎 <<
  else {
    //
    // --------------------------------------------- > V <
    const SVG_URL = "./../../assets/svg/Error_Response.svg";
    // --------------------------------------------- > V <
    //
    // -------------------------------------------- > CB <
    const Widget = RequestResult(SVG_URL, "Faild request 👎");
    // -------------------------------------------- > CB <
    //
    // -------------------------------------------- > AC <
    father.appendChild(Widget);
    // -------------------------------------------- > AC <
  }
  // -------------------------------------------------------- >> 👎 <<
  //
  // ---------------------------------------------------- >> scroll <<
  setTimeout(() => {
    father.scrollTop = father.scrollHeight;
  }, 750);
  // ---------------------------------------------------- >> scroll <<
  //
}
// =================================================================== >> RM <<
//
// ========================================================== >> Chat Widget <<
function Chat(info) {
  //
  // --------------------------------------------- >> Chat <<
  const Chat = document.createElement("div");
  Chat.classList.add("Chat");
  // --------------------------------------------- >> Chat <<
  //
  // ----------------------------------------------- >> SM <<
  Chat.style.flexDirection = info.is_me ? "row-reverse" : "row";
  Chat.style.margin = info.is_me ? "0 0 0 auto" : "0 auto 0 0";
  Chat.style.transform = `translateX(${info.is_me ? "150%" : "-150%"})`;
  setTimeout(() => (Chat.style.transform = "translateX(0%)"), 750);
  // ----------------------------------------------- >> SM <<
  //
  // ------------------------------------------- >> Avatar <<
  const ChatAvatar = document.createElement("img");
  ChatAvatar.classList.add("ChatAvatar", info.is_me ? "right" : "left");
  //
  // --------------------------------- > src <
  ChatAvatar.src =
    info.sender.avatar_image || "./../assets/svg/person icon.svg";
  // --------------------------------- > src <
  //
  // --------------------------------- > CSS <
  ChatAvatar.classList.add(info.is_me ? "right" : "left");
  ChatAvatar.style.visibility =
    previousSender === info.sender.username ? "hidden" : "visible";
  // --------------------------------- > CSS <
  //
  // ---------------------------------- > AC <
  Chat.appendChild(ChatAvatar);
  // ---------------------------------- > AC <
  //
  // ------------------------------------------- >> Avatar <<
  //
  // --------------------------------------------- >> Chat <<
  const ChatData = document.createElement("div");
  ChatData.classList.add("ChatData", info.is_me ? "right" : "left");
  //
  if (previousSender === info.sender.username) {
    ChatData.style.borderRadius = "max(0.2rem,5px)";
  }
  //
  // -------------------------------------- > AC <
  Chat.appendChild(ChatData);
  // -------------------------------------- > AC <
  //
  // --------------------------------------- > L <
  if (info.type == "file") {
    ChatData.style.cursor = "pointer";
    ChatData.addEventListener("click", () => {
      DownloadWebService(info.id);
    });
  }
  // --------------------------------------- > L <
  //
  // --------------------------------------------- >> Chat <<
  //
  // --------------------------------------------- >> Text <<
  const ChatAvatarName = document.createElement("span");
  ChatAvatarName.classList.add("ChatAvatarName");
  //
  // ----------------------------------- > value <
  ChatAvatarName.textContent = info.sender.username;
  // ----------------------------------- > value <
  //
  // -------------------------------------- > AC <
  if (previousSender !== info.sender.username) {
    ChatData.appendChild(ChatAvatarName);
  }
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> Text <<
  //
  // --------------------------------------------- >> icon <<
  const ChatIcon = document.createElement("img");
  ChatIcon.classList.add("ChatIcon");
  //
  // ----------------------------------- > value <
  ChatIcon.src = getFileIcon(info.file_extension);
  // ----------------------------------- > value <
  //
  // -------------------------------------- > AC <
  if (info.type == "file") {
    ChatData.appendChild(ChatIcon);
  }
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> icon <<
  //
  // --------------------------------------------- >> Text <<
  const ChatText = document.createElement("sprpan");
  ChatText.classList.add("ChatText");
  //
  // ----------------------------------- > value <
  if (info.type == "text") {
    ChatText.innerHTML = info.text.replace(/\n/g, "<br>");
  } else {
    ChatText.innerHTML = info.file_name;
  }
  // ----------------------------------- > value <
  //
  // ----------------------------------- > Align <
  ChatText.style.textAlign = /[\u0600-\u06FF\uFB50-\uFDFF]/.test(
    ChatText.textContent
  )
    ? "end"
    : "start";
  // ----------------------------------- > Align <
  //
  // -------------------------------------- > AC <
  ChatData.appendChild(ChatText);
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> Text <<
  //
  // --------------------------------------------- >> Flex <<
  const ChatFlex = document.createElement("div");
  ChatFlex.classList.add("ChatFlex", info.is_me ? "right" : "left");
  //
  // ------------------------------------- > AC <
  ChatData.appendChild(ChatFlex);
  // ------------------------------------- > AC <
  //
  // ----------------------------------- > Date <
  const ChatDate = document.createElement("span");
  ChatDate.classList.add("ChatDate");
  //
  // -------------------------- value >>
  ChatDate.textContent = info.shamsi_date;
  // -------------------------- value <<
  //
  // ----------------------------- AC >>
  ChatFlex.appendChild(ChatDate);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > Date <
  //
  // -------------------------------- > Divider <
  const ChatFlexDivider = document.createElement("div");
  ChatFlexDivider.classList.add("ChatFlexDivider");
  //
  // -------------------------- AC >>
  ChatFlex.appendChild(ChatFlexDivider);
  // -------------------------- AC <<
  //
  // -------------------------------- > Divider <
  //
  // ----------------------------------- > Date <
  const ChatTime = document.createElement("span");
  ChatTime.classList.add("ChatTime");
  //
  // -------------------------- value >>
  ChatTime.textContent = info.iran_time;
  // -------------------------- value <<
  //
  // ----------------------------- AC >>
  ChatFlex.appendChild(ChatTime);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > Date <
  //
  // --------------------------------------------- >> Flex <<
  //
  // ----------------------------------------------- >> SM <<
  previousSender = info.sender.username;
  // ----------------------------------------------- >> SM <<
  //
  // -------------------------------------------- >> return <<
  return Chat;
  // -------------------------------------------- >> return <<
  //
}
// ========================================================== >> Chat Widget <<
//
// ============================================================ >> File Icon <<
function getFileIcon(format) {
  const icons = {
    txt: "receipt-icon.svg",
    mp4: "video-icon.svg",
    jpg: "picture-icon.svg",
    jpeg: "picture-icon.svg",
    pdf: "pdf-icon.svg",
    word: "word-icon.svg",
    excel: "excel-icon.svg",
    mp3: "music-icon.svg",
    powerpoint: "powerpoint-icon.svg",
  };
  return `./../assets/svg/${icons[format] || "unknown-icon.svg"}`;
}
// ============================================================ >> File Icon <<
//
// ================================================================= >> Send <<
function SendSection() {
  //
  // ----------------------------------------------------- >> div <<
  const SendSection = document.createElement("div");
  SendSection.classList.add("SendSection");
  // ----------------------------------------------------- >> div <<
  //
  // --------------------------------------------------- >> Field <<
  //
  // --------------------------------------------- > V <
  //
  const MessageFieldID = "ChatMessageField";
  //
  const MessageFieldInputPlaceholder = "Type here ...";
  //
  // --------------------------------------------- > V <
  //
  // -------------------------------------------- > CB <
  const MessageField = Field(
    "",
    false,
    "",
    "",
    true,
    MessageFieldID,
    "",
    MessageFieldInputPlaceholder,
    10000
  );
  const Input = MessageField.Input;
  // -------------------------------------------- > CB <
  //
  // --------------------------------------------- > L <
  Input.addEventListener("input", function () {
    //
    // --------------------------------- Hieght >>
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    // --------------------------------- Hieght <<
    //
    // ---------------------------------- Align >>
    if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(Input.value)) {
      Input.style.textAlign = "end";
      Input.placeholder = " ... اینجا بنویسید ";
    } else if (/^[A-Za-z\s]+$/.test(Input.value)) {
      Input.style.textAlign = "start";
      Input.placeholder = " type here ...";
    }
    // ---------------------------------- Align <<
    //
  });
  // --------------------------------------------- > L <
  //
  // -------------------------------------------- > id <
  MessageField.widget.id = "ChatMessageField";
  MessageField.Input.id = "ChatMessageFieldInput";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  SendSection.appendChild(MessageField.widget);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> Field <<
  //
  // ----------------------------------------------------- >> BTN <<
  //
  // ---------------------------------------------- > CB <
  const ChatsFilePickerBTN = BTN(
    "ChatsBTN",
    false,
    "",
    true,
    "famicons:document-attach",
    true,
    ChatsFilePickerBTNListener
  );
  // ---------------------------------------------- > CB <
  //
  // ----------------------------------------------- > L <
  function ChatsFilePickerBTNListener() {
    //
    FilePicker();
    //
  }
  // ----------------------------------------------- > L <
  //
  // ---------------------------------------------- > AC <
  SendSection.appendChild(ChatsFilePickerBTN.widget);
  // ---------------------------------------------- > AC <
  //
  // ----------------------------------------------------- >> BTN <<
  //
  // ----------------------------------------------------- >> BTN <<
  //
  // ---------------------------------------------- > CB <
  const ChatsSendBTN = BTN(
    "ChatsBTN",
    false,
    "",
    true,
    "fluent:send-28-filled",
    true,
    ChatsSendBTNListener
  );
  // ---------------------------------------------- > CB <
  //
  // ----------------------------------------------- > L <
  function ChatsSendBTNListener() {
    //
    // --------------------------------------- 👍 >>
    if (Input.value.length !== 0) {
      WS.send(
        JSON.stringify({
          type: "text",
          text: Input.value,
        })
      );
      Input.value = "";
      Input.style.height = "auto";
      Input.style.height = Input.scrollHeight + "px";
    }
    // --------------------------------------- 👍 <<
    //
    // --------------------------------------- 👎 >>
    else {
      //
      // ---------------------- Notifiaction >
      NotificationCallBack("Not allowed", "fa:close", "red", BG_7, Layer7);
      // ---------------------- Notifiaction <
      //
    }
    // --------------------------------------- 👎 <<
    //
  }
  // ----------------------------------------------- > L <
  //
  // ---------------------------------------------- > AC <
  SendSection.appendChild(ChatsSendBTN.widget);
  // ---------------------------------------------- > AC <
  //
  // ----------------------------------------------------- >> BTN <<
  //
  // -------------------------------------------------- >> return <<
  return {
    widget: SendSection,
    textarea: MessageField.Input,
  };
  // -------------------------------------------------- >> return <<
  //
}
// ================================================================= >> Send <<
//
// =========================================================== >> FilePicker <<
function FilePicker() {
  //
  // --------------------------------------------- >> Input <<
  const FilePicker = document.createElement("input");
  FilePicker.classList.add("FilePicker");
  FilePicker.type = "file";
  // --------------------------------------------- >> Input <<
  //
  // ------------------------------------------------- >> L <<
  FilePicker.addEventListener("change", (event) => {
    //
    // -------------------------------------- > file <
    const file = event.target.files[0];
    // -------------------------------------- > file <
    //
    // ------------------------------------- > limit <
    const FILE_SIZE_LIMIT = 2 * 1024 * 1024 * 1024;
    // ------------------------------------- > limit <
    //
    // ---------------------------------------- > 👎 <
    if (!file) {
      //
      // ----------------------------- Notif >>
      NotificationCallBack(
        "No file selected",
        "ic:round-data-object",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------------- Notif <<
      //
    }
    // ---------------------------------------- > 👎 <
    //
    // ----------------------------------------- > ? <
    else {
      //
      // --------------------------------- 👎 >>
      if (file.size > FILE_SIZE_LIMIT) {
        //
        // ----------------------- Notif >
        NotificationCallBack(
          "Selected file is to large",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ----------------------- Notif <
        //
        // ----------------- clear value >
        FilePicker.value = "";
        // ----------------- clear value <
        //
      }
      // --------------------------------- 👎 <<
      //
      // --------------------------------- 👍 >>
      else {
        //
        // -------------------- Uploader >
        Upload(file);
        // -------------------- Uploader <
        //
      }
      // --------------------------------- 👍 >>
      //
    }
    // ----------------------------------------- > ? <
    //
    //
  });
  // ------------------------------------------------- >> L <<
  //
  // --------------------------------------------- >> Click <<
  FilePicker.click();
  // --------------------------------------------- >> Click <<
  //
}
// =========================================================== >> FilePicker <<
//
// =============================================================== >> Upload <<
function Upload(file) {
  //
  // ----------------------------------------------- >> Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ----------------------------------------------- >> Loading <<
  //
  // ----------------------------------------------- >> WS Send <<
  const reader = new FileReader(); // Create a new FileReader

  // Set up the onload event listener to handle the file once it's read
  reader.onload = () => {
    const base64FileData = reader.result.split(",")[1]; // Get base64 string (remove prefix)

    // Prepare the object to send over WebSocket
    const fileObject = {
      type: "file", // Type of data being sent
      file: base64FileData, // The base64-encoded file content
      fileName: file.name, // The original file name
    };

    // Assuming you have a WebSocket instance
    WS.send(JSON.stringify(fileObject)); // Send the object as a string via WebSocket
  };

  // Read the file as a Data URL (which automatically converts to base64)
  reader.readAsDataURL(file);

  // ----------------------------------------------- >> WS Send <<
  //
}
// =============================================================== >> Upload <<
//
// ============================================================= >> Download <<
function DownloadWebService(id) {
  //
  // ----------------------------------------- >> Add Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ----------------------------------------- >> Add Loading <<
  //
  // ----------------------------------------- >> Web Service <<
  //
  // --------------------------------- > API <
  let Api = `https://personnel.samami.co/storage/download?id=${id}&from_chat=${true}`;
  // --------------------------------- > API <
  //
  // --------------------------------- > GET <
  GET(Api)
    //
    // ------------------------ then >
    .then((response) => {
      //
      // ----------------------------- > 200 <
      if (response.status == 200) {
        //
        // ----------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ----------------------------------- >> remove loading <<
        //
        // ----------------------------------- >> download <<
        //
        // ----------------------------- > V <
        const fileUrl = response.data; // Use the link from the response
        const filename = fileUrl.split("/").pop(); // Get the filename (e.g., "20250217135606.mp4")
        // ----------------------------- > V <
        //
        // ----------------------------- > a <
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = filename || "samami-unnamed-file";
        // ----------------------------- > a <
        //
        // ------------------------ > images <
        if (fileUrl.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
          fetch(fileUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const imageUrl = URL.createObjectURL(blob);
              link.href = imageUrl; // Use the Blob URL for images
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((err) => {
              console.error("Image download failed:", err);
              // Handle any errors in fetching the image
            });
        }
        // ------------------------ > images <
        //
        // -------------------------- > file <
        else {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        // -------------------------- > file <
        //
        // ----------------------------------- >> download <<
        //
      }
      // ----------------------------- > 200 <
      //
      // ----------------------------- > error <
      else {
        //
        // ------------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------------------- >> remove loading <<
        //
        // ------------------------------------- >> Notif <<
        NotificationCallBack(
          "Failed to download 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ------------------------------------- >> Notif <<
        //
      }
      // ----------------------------- > error <
      //
    })
    // ------------------------ then <
    //
    // ----------------------- catch >
    .catch((error) => {
      //
      // ----------------------------- > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // ----------------------------- > remove loading <
      //
      // ----------------------------- > Notif <
      NotificationCallBack(
        "Failed to download 👎",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------------- > Notif <
      //
    });
  // ------------------------- catch <
  //
  // --------------------------------- > GET <
  //
  // ----------------------------------------- >> Web Service <<
  //
}
// ============================================================= >> Download <<

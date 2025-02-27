// ============================================================ >> Local Storage <<
import { RetrieveLocalStorage } from "./../Local_Storage/local_storage.js";
// ============================================================ >> Local Storage <<
//
// ====================================================================== >> GET <<
//
// ---------------------------------------------------------- >> async <<
async function GET(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: RetrieveLocalStorage("token") || "",
      },
    });

    // >> response data <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> response data <<

    // >> catch error <<
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
  // >> catch error <<
}
// ---------------------------------------------------------- >> async <<
//
// --------------------------------------------------------- >> export <<
export { GET };
// --------------------------------------------------------- >> export <<
//
// ====================================================================== >> GET <<
//
// ===================================================================== >> POST <<
//
// --------------------------------------------------------- >> async <<
async function POST(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: RetrieveLocalStorage("token") || "",
      },
      body: JSON.stringify(data),
    });

    // >> handle successs response <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> handle successs response <<
  } catch (error) {
    // >> handle faild response <<
    console.log(error);
    // >> handle faild response <<
  }
}
// --------------------------------------------------------- >> async <<
//
// -------------------------------------------------------- >> export <<
export { POST };
// -------------------------------------------------------- >> export <<
//
// ===================================================================== >> POST <<
//
// =============================================================== >> POST Image <<
//
// --------------------------------------------------- >> async <<
async function PostImage(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        token: RetrieveLocalStorage("token") || "",
      },
      body: data,
    });

    // >> handle successs response <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> handle successs response <<
  } catch (error) {
    // >> handle faild response <<
    console.log(error);
    // >> handle faild response <<
  }
}
// --------------------------------------------------- >> async <<
//
// -------------------------------------------------- >> export <<
export { PostImage };
// -------------------------------------------------- >> export <<
//
// =============================================================== >> POST Image <<
//
// ====================================================================== >> PUT <<
//
// ---------------------------------------------------------- >> async <<
async function PUT(url, data) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: RetrieveLocalStorage("token") || "",
      },
      body: JSON.stringify(data),
    });

    // >> handle successs response <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> handle successs response <<
  } catch (error) {
    // >> handle faild response <<
    console.log(error);
    // >> handle faild response <<
  }
}
// ---------------------------------------------------------- >> async <<
//
// --------------------------------------------------------- >> export <<
export { PUT };
// --------------------------------------------------------- >> export <<
//
// ====================================================================== >> PUT <<
//
// =================================================================== >> Delete <<
//
// ------------------------------------------------------- >> async <<
async function DELETE(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: RetrieveLocalStorage("token") || "",
      },
    });

    // >> Check if the response status is OK (200) <<
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // >> Check if the response status is OK (200) <<

    // >> response data <<
    const responseData = await response.json();
    const result = {
      status: response.status,
      data: responseData,
    };
    return result;
    // >> response data <<

    // >> catch error <<
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
  // >> catch error <<
}
// ------------------------------------------------------- >> async <<
//
// ------------------------------------------------------ >> export <<
export { DELETE };
// ------------------------------------------------------ >> export <<
//
// =================================================================== >> Delete <<

(async() => { 
    while(!window.hasOwnProperty("Swal")) // define the condition as you like
        await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Variable is defined");
})();

// function httpGet(url) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", url, false); // false for synchronous request
//     xmlHttp.send(null);
//     return xmlHttp.responseText;
// }

// function tryParseJSONObject(jsonString) {
//     try {
//         var o = JSON.parse(jsonString);
//         if (o && typeof o === "object") {
//             return o;
//         }
//     } catch (e) {}
//     return false;
// };
// if (!__st.cid) {
//     let product_json = tryParseJSONObject(httpGet(location.protocol + '//' + location.host + location.pathname + '.json'))
//     if (product_json) {
//         if (product_json.product) {
//             // Product pulled up
//             console.log(product_json.product.id)
//             window.location.replace(location.protocol + '//' + location.host + '/account/login');
//         }
//         if (product_json.shop) {
//             // Collection pulled up
//             console.log(product_json.shop.id)
//             window.location.replace(location.protocol + '//' + location.host + '/account/login');
//         }
//     }
// }

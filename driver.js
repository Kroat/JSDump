var elemDiv = document.createElement('div');
elemDiv.innerHTML = `<div id="modal-1" aria-hidden="true">

  <!-- [2] -->
  <div tabindex="-1" data-micromodal-close>

    <!-- [3] -->
    <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >


      <header>
        <h2 id="modal-1-title">
          Modal Title
        </h2>

        <!-- [4] -->
        <button aria-label="Close modal" data-micromodal-close></button>
      </header>

      <div id="modal-1-content">
        Modal Content
      </div>

    </div>
  </div>
</div>`
document.body.appendChild(elemDiv);
MicroModal.init();
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

(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("0b1e2a0f-ce10-4e0d-b2ea-5b972b3f78dc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b1e2a0f-ce10-4e0d-b2ea-5b972b3f78dc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"872d52d8-4e0d-4faa-a1ce-63bbc563ca52":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"85ed66a3-11bb-4671-88e5-bbf74b6b06d1","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"b49c74a8-ac59-4183-8d7d-c781be277d4c","type":"Title"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a4d1951-f3cb-4ca8-9774-0a904502daf4","type":"BasicTicker"}},"id":"17137c61-8bfc-4012-8766-9b3764a3b712","type":"Grid"},{"attributes":{},"id":"c35ea605-f94a-4949-92dc-369fedaee42c","type":"BasicTicker"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"eb47e06d-20cf-4857-bb11-32c59de74538","type":"SaveTool"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"f6016756-bf61-4480-8a18-a49804d2b71e","type":"PanTool"},{"attributes":{},"id":"d4b0ab97-764d-487a-8d6c-38a0fbfcf67c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cc6f2f0b-2d21-4f11-937e-7dde416d0caa","type":"BasicTickFormatter"},"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},"ticker":{"id":"c35ea605-f94a-4949-92dc-369fedaee42c","type":"BasicTicker"},"y_range_name":"foo"},"id":"10a0f06d-e83c-44f8-b518-b7676fd35c8d","type":"LinearAxis"},{"attributes":{},"id":"d8a34675-4cda-46b4-9390-4d8d0eee5c41","type":"BasicTicker"},{"attributes":{"callback":null,"end":100},"id":"251eb5d9-0e92-4bfe-afc8-a1a697af70bd","type":"Range1d"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"9d727ac2-c9ef-4a8c-991c-002048b37a6c","type":"Range1d"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"44f8758b-6743-4a90-bd09-cb302b2705ce","type":"Range1d"},{"attributes":{"formatter":{"id":"b7f1a6db-29b3-42a9-978c-b61e44825dfe","type":"BasicTickFormatter"},"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a34675-4cda-46b4-9390-4d8d0eee5c41","type":"BasicTicker"}},"id":"10a77f61-de45-4ed7-a36c-68fb9e3595d5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"58b8220b-734a-42c2-9f0f-d7853690e7fa","type":"Circle"},{"attributes":{"overlay":{"id":"85ed66a3-11bb-4671-88e5-bbf74b6b06d1","type":"BoxAnnotation"},"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"c4f948f7-978e-4d87-b83a-7e964cedc098","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"b5f1f42e-fdba-4515-acc8-32e2575a7886","type":"ColumnDataSource"},"glyph":{"id":"6b7335f3-e574-4673-bc03-a0a1cc881628","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"58b8220b-734a-42c2-9f0f-d7853690e7fa","type":"Circle"},"selection_glyph":null,"y_range_name":"foo"},"id":"5ae499fa-dec3-4b22-b6e7-0f8d7b389b2e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6016756-bf61-4480-8a18-a49804d2b71e","type":"PanTool"},{"id":"b1b28052-76ae-4e6c-b32a-a489ab05f561","type":"WheelZoomTool"},{"id":"c4f948f7-978e-4d87-b83a-7e964cedc098","type":"BoxZoomTool"},{"id":"eb47e06d-20cf-4857-bb11-32c59de74538","type":"SaveTool"},{"id":"18999e8e-a9bf-4568-8787-fe86d3479735","type":"ResetTool"},{"id":"26c6f85d-12e9-4009-9e0e-8f1217e49f0c","type":"HelpTool"}]},"id":"14073250-df7a-4ba8-bae6-22f9d5f40490","type":"Toolbar"},{"attributes":{"data_source":{"id":"651019b2-4023-4823-9e1f-0d3d4cbeca85","type":"ColumnDataSource"},"glyph":{"id":"e8768232-bf5c-4f02-b35d-d7c236823ac1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f27dd6a1-8682-48ba-b4dd-ec77cb79666c","type":"Circle"},"selection_glyph":null},"id":"50e78c80-543c-4b3b-9f3c-2bc7b8e717b3","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8768232-bf5c-4f02-b35d-d7c236823ac1","type":"Circle"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6b7335f3-e574-4673-bc03-a0a1cc881628","type":"Circle"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"18999e8e-a9bf-4568-8787-fe86d3479735","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8a34675-4cda-46b4-9390-4d8d0eee5c41","type":"BasicTicker"}},"id":"20562d14-a6f8-4b9b-9cef-4713ec1ada35","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"b5f1f42e-fdba-4515-acc8-32e2575a7886","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"651019b2-4023-4823-9e1f-0d3d4cbeca85","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f27dd6a1-8682-48ba-b4dd-ec77cb79666c","type":"Circle"},{"attributes":{},"id":"8cc8192f-e235-4e63-859a-e907093a97e1","type":"ToolEvents"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"b1b28052-76ae-4e6c-b32a-a489ab05f561","type":"WheelZoomTool"},{"attributes":{},"id":"b7f1a6db-29b3-42a9-978c-b61e44825dfe","type":"BasicTickFormatter"},{"attributes":{},"id":"cc6f2f0b-2d21-4f11-937e-7dde416d0caa","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"928bca8e-b2a1-47da-a0ac-705c8cdba757","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"251eb5d9-0e92-4bfe-afc8-a1a697af70bd","type":"Range1d"}},"left":[{"id":"10a77f61-de45-4ed7-a36c-68fb9e3595d5","type":"LinearAxis"},{"id":"10a0f06d-e83c-44f8-b518-b7676fd35c8d","type":"LinearAxis"}],"renderers":[{"id":"928bca8e-b2a1-47da-a0ac-705c8cdba757","type":"LinearAxis"},{"id":"17137c61-8bfc-4012-8766-9b3764a3b712","type":"Grid"},{"id":"10a77f61-de45-4ed7-a36c-68fb9e3595d5","type":"LinearAxis"},{"id":"20562d14-a6f8-4b9b-9cef-4713ec1ada35","type":"Grid"},{"id":"85ed66a3-11bb-4671-88e5-bbf74b6b06d1","type":"BoxAnnotation"},{"id":"50e78c80-543c-4b3b-9f3c-2bc7b8e717b3","type":"GlyphRenderer"},{"id":"5ae499fa-dec3-4b22-b6e7-0f8d7b389b2e","type":"GlyphRenderer"},{"id":"10a0f06d-e83c-44f8-b518-b7676fd35c8d","type":"LinearAxis"}],"title":{"id":"b49c74a8-ac59-4183-8d7d-c781be277d4c","type":"Title"},"tool_events":{"id":"8cc8192f-e235-4e63-859a-e907093a97e1","type":"ToolEvents"},"toolbar":{"id":"14073250-df7a-4ba8-bae6-22f9d5f40490","type":"Toolbar"},"x_range":{"id":"44f8758b-6743-4a90-bd09-cb302b2705ce","type":"Range1d"},"y_range":{"id":"9d727ac2-c9ef-4a8c-991c-002048b37a6c","type":"Range1d"}},"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"d4b0ab97-764d-487a-8d6c-38a0fbfcf67c","type":"BasicTickFormatter"},"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a4d1951-f3cb-4ca8-9774-0a904502daf4","type":"BasicTicker"}},"id":"928bca8e-b2a1-47da-a0ac-705c8cdba757","type":"LinearAxis"},{"attributes":{},"id":"8a4d1951-f3cb-4ca8-9774-0a904502daf4","type":"BasicTicker"},{"attributes":{"plot":{"id":"ae8967b3-041a-40bc-a046-87d3d70c5697","subtype":"Figure","type":"Plot"}},"id":"26c6f85d-12e9-4009-9e0e-8f1217e49f0c","type":"HelpTool"}],"root_ids":["ae8967b3-041a-40bc-a046-87d3d70c5697"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"872d52d8-4e0d-4faa-a1ce-63bbc563ca52","elementid":"0b1e2a0f-ce10-4e0d-b2ea-5b972b3f78dc","modelid":"ae8967b3-041a-40bc-a046-87d3d70c5697"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

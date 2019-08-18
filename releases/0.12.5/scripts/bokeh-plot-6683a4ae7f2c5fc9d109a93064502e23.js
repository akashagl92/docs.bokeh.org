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
      };var element = document.getElementById("c9cb3728-cebd-4d8e-87fa-1701a4ac82b8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9cb3728-cebd-4d8e-87fa-1701a4ac82b8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"001a3da8-05b8-4591-b590-5213dac009d1":{"roots":{"references":[{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"d12ed8ad-36c6-4f62-8e38-7544a1b3a188","type":"HelpTool"},{"attributes":{"below":[{"id":"c263a04c-baa0-47fb-a235-bde591a1a055","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"a09b3b45-08e8-4c86-9ed2-718a757980d6","type":"Range1d"}},"left":[{"id":"af0a0587-4b6b-4400-834d-13ccee8d3e0b","type":"LinearAxis"},{"id":"a88bcd75-7b41-4fd1-bf0e-d99f120c5266","type":"LinearAxis"}],"renderers":[{"id":"c263a04c-baa0-47fb-a235-bde591a1a055","type":"LinearAxis"},{"id":"09688439-b075-4dca-a2b3-3870b549076a","type":"Grid"},{"id":"af0a0587-4b6b-4400-834d-13ccee8d3e0b","type":"LinearAxis"},{"id":"22a3922b-3b5c-4ded-8353-f6cae92626b5","type":"Grid"},{"id":"4a0e1ffd-ed71-410a-baba-7003ed0adefa","type":"BoxAnnotation"},{"id":"f00e7163-b00a-4ea9-aba7-ff5ea3d5dac6","type":"GlyphRenderer"},{"id":"85df0128-4192-4ef8-bd1e-277f453926f0","type":"GlyphRenderer"},{"id":"a88bcd75-7b41-4fd1-bf0e-d99f120c5266","type":"LinearAxis"}],"title":{"id":"b95c4006-2782-4600-8f9f-af653dc30dd3","type":"Title"},"tool_events":{"id":"876a4207-24bc-40ae-bc9c-dafa088713e5","type":"ToolEvents"},"toolbar":{"id":"3cd4cbfb-97a9-4e2e-92df-92b58612416a","type":"Toolbar"},"x_range":{"id":"94b41095-64b6-48e7-865a-c365ffd328af","type":"Range1d"},"y_range":{"id":"6d79da28-881e-4eb8-b508-1865ea5ecc7a","type":"Range1d"}},"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d071b16e-ab6c-4441-8ee7-4c8be0f00489","type":"BasicTicker"},{"attributes":{},"id":"64d1c12e-abfe-4ce3-9c0d-e12fd79a8ff3","type":"BasicTicker"},{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"d071b16e-ab6c-4441-8ee7-4c8be0f00489","type":"BasicTicker"}},"id":"09688439-b075-4dca-a2b3-3870b549076a","type":"Grid"},{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"36c76411-3ae7-4e76-aa0c-298d124d6f55","type":"ResetTool"},{"attributes":{},"id":"9993f8ff-ef79-406e-8d0e-27eb18b176a3","type":"BasicTickFormatter"},{"attributes":{},"id":"876a4207-24bc-40ae-bc9c-dafa088713e5","type":"ToolEvents"},{"attributes":{"callback":null,"end":100},"id":"a09b3b45-08e8-4c86-9ed2-718a757980d6","type":"Range1d"},{"attributes":{"formatter":{"id":"9993f8ff-ef79-406e-8d0e-27eb18b176a3","type":"BasicTickFormatter"},"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"d071b16e-ab6c-4441-8ee7-4c8be0f00489","type":"BasicTicker"}},"id":"c263a04c-baa0-47fb-a235-bde591a1a055","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d40aae35-b581-4133-99f6-5309d80b72dd","type":"BasicTickFormatter"},"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0db8cf4-3dba-4bb4-be71-8aac1cee2695","type":"BasicTicker"},"y_range_name":"foo"},"id":"a88bcd75-7b41-4fd1-bf0e-d99f120c5266","type":"LinearAxis"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"6d79da28-881e-4eb8-b508-1865ea5ecc7a","type":"Range1d"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"145d44f9-83d8-47ac-82fb-4400898c10d5","type":"Circle"},{"attributes":{},"id":"f9df3b88-82c9-47ec-9712-c408beea492e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72af679b-552f-4e6d-a3d4-a5971cb13db1","type":"PanTool"},{"id":"aef18153-20db-4320-a7bd-cd8473e392a5","type":"WheelZoomTool"},{"id":"02cc4c39-963a-442c-98a8-38fca40c874c","type":"BoxZoomTool"},{"id":"f2aed641-e0bc-4585-a81f-217e0f95a3aa","type":"SaveTool"},{"id":"36c76411-3ae7-4e76-aa0c-298d124d6f55","type":"ResetTool"},{"id":"d12ed8ad-36c6-4f62-8e38-7544a1b3a188","type":"HelpTool"}]},"id":"3cd4cbfb-97a9-4e2e-92df-92b58612416a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"9956c934-7080-4ccb-a79d-8f8cb9760d57","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"ca970190-2ddc-4c26-bf02-160a42fe7f2d","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4a0e1ffd-ed71-410a-baba-7003ed0adefa","type":"BoxAnnotation"},"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"02cc4c39-963a-442c-98a8-38fca40c874c","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"64d1c12e-abfe-4ce3-9c0d-e12fd79a8ff3","type":"BasicTicker"}},"id":"22a3922b-3b5c-4ded-8353-f6cae92626b5","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e482706-6152-421a-aff5-f1e56cc9a015","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1dac4014-01a3-44d8-be7f-38c3b279bf87","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"b95c4006-2782-4600-8f9f-af653dc30dd3","type":"Title"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"94b41095-64b6-48e7-865a-c365ffd328af","type":"Range1d"},{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"72af679b-552f-4e6d-a3d4-a5971cb13db1","type":"PanTool"},{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"aef18153-20db-4320-a7bd-cd8473e392a5","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a0e1ffd-ed71-410a-baba-7003ed0adefa","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"f9df3b88-82c9-47ec-9712-c408beea492e","type":"BasicTickFormatter"},"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"},"ticker":{"id":"64d1c12e-abfe-4ce3-9c0d-e12fd79a8ff3","type":"BasicTicker"}},"id":"af0a0587-4b6b-4400-834d-13ccee8d3e0b","type":"LinearAxis"},{"attributes":{},"id":"c0db8cf4-3dba-4bb4-be71-8aac1cee2695","type":"BasicTicker"},{"attributes":{},"id":"d40aae35-b581-4133-99f6-5309d80b72dd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"706bd355-f928-484a-a757-0a0ea2be9a37","subtype":"Figure","type":"Plot"}},"id":"f2aed641-e0bc-4585-a81f-217e0f95a3aa","type":"SaveTool"},{"attributes":{"data_source":{"id":"9956c934-7080-4ccb-a79d-8f8cb9760d57","type":"ColumnDataSource"},"glyph":{"id":"145d44f9-83d8-47ac-82fb-4400898c10d5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"239d6d28-1021-4fe8-9029-ce846b214b10","type":"Circle"},"selection_glyph":null,"y_range_name":"foo"},"id":"85df0128-4192-4ef8-bd1e-277f453926f0","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ca970190-2ddc-4c26-bf02-160a42fe7f2d","type":"ColumnDataSource"},"glyph":{"id":"1dac4014-01a3-44d8-be7f-38c3b279bf87","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6e482706-6152-421a-aff5-f1e56cc9a015","type":"Circle"},"selection_glyph":null},"id":"f00e7163-b00a-4ea9-aba7-ff5ea3d5dac6","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"239d6d28-1021-4fe8-9029-ce846b214b10","type":"Circle"}],"root_ids":["706bd355-f928-484a-a757-0a0ea2be9a37"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"001a3da8-05b8-4591-b590-5213dac009d1","elementid":"c9cb3728-cebd-4d8e-87fa-1701a4ac82b8","modelid":"706bd355-f928-484a-a757-0a0ea2be9a37"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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

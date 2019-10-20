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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("c700f76e-32dd-4c9d-8d19-31da5b7acca4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c700f76e-32dd-4c9d-8d19-31da5b7acca4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"de38f4cc-7b87-483b-acc9-2b2d7363b05c":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"4b14c8f8-58d6-43f0-acd0-a2cbfca19c2d","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"8550af73-60b5-41d8-a6a4-9b9ab332abaf","type":"Title"},{"attributes":{"below":[{"id":"543d0228-4f88-4bbe-beab-66373a9f545e","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"52803b7a-0acc-45e3-a887-5749c5d1f400","type":"Range1d"}},"left":[{"id":"6bc52f1a-7017-4393-a973-71befafc5000","type":"LinearAxis"},{"id":"ed7b1a49-f561-4ae7-8e2f-156478d92262","type":"LinearAxis"}],"renderers":[{"id":"543d0228-4f88-4bbe-beab-66373a9f545e","type":"LinearAxis"},{"id":"8f0af711-2fc5-4816-970a-395af954d728","type":"Grid"},{"id":"6bc52f1a-7017-4393-a973-71befafc5000","type":"LinearAxis"},{"id":"47b4fb9e-c357-4fe6-8936-050c3c7d36e4","type":"Grid"},{"id":"92a9d87d-e560-4b7a-85f4-1eae7f58fc19","type":"BoxAnnotation"},{"id":"c4b50786-4a58-4910-a696-acc4ea68fece","type":"GlyphRenderer"},{"id":"407745d6-c51b-43d2-8e1e-65609851321c","type":"GlyphRenderer"},{"id":"ed7b1a49-f561-4ae7-8e2f-156478d92262","type":"LinearAxis"}],"title":{"id":"8550af73-60b5-41d8-a6a4-9b9ab332abaf","type":"Title"},"tool_events":{"id":"1910a520-a285-479d-a1df-89ddd1e036ba","type":"ToolEvents"},"toolbar":{"id":"d6679fb5-dadf-47ac-95cf-98b460cdb998","type":"Toolbar"},"x_range":{"id":"1dae08f0-84a2-4517-9fe9-9b84614b63ca","type":"Range1d"},"x_scale":{"id":"faff7bfa-ba72-4912-91a0-e3e41db50d89","type":"LinearScale"},"y_range":{"id":"5ecfbfc1-5dfb-418a-bcd0-3d3faebf0529","type":"Range1d"},"y_scale":{"id":"20eab715-431a-4110-89df-001ed41a1c35","type":"LinearScale"}},"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"307663ad-3bb7-4b64-8e8a-afbb663be24c","type":"PanTool"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"b0e376e2-5598-4aab-b39f-0d093b296a2f","type":"ResetTool"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"4b89533e-ded8-4224-aa19-e8790e54622e","type":"HelpTool"},{"attributes":{},"id":"a8f357ab-4157-4190-a93e-b95037cdcc8b","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"5ecfbfc1-5dfb-418a-bcd0-3d3faebf0529","type":"Range1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b57a1bdf-f394-4346-899b-62e80f99a30f","type":"Circle"},{"attributes":{"formatter":{"id":"bd3154f7-1c32-49ec-beff-dadb9e816b31","type":"BasicTickFormatter"},"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8f357ab-4157-4190-a93e-b95037cdcc8b","type":"BasicTicker"}},"id":"543d0228-4f88-4bbe-beab-66373a9f545e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3c91d74-6330-49a9-8c75-1e0918cf7ef9","type":"BasicTicker"}},"id":"47b4fb9e-c357-4fe6-8936-050c3c7d36e4","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"307663ad-3bb7-4b64-8e8a-afbb663be24c","type":"PanTool"},{"id":"e9e0bca8-0953-4bf3-882d-53cbe28094d9","type":"WheelZoomTool"},{"id":"ab9c16fe-22c4-491b-8577-372859602076","type":"BoxZoomTool"},{"id":"1088695a-c155-4f6a-967e-5355535e7470","type":"SaveTool"},{"id":"b0e376e2-5598-4aab-b39f-0d093b296a2f","type":"ResetTool"},{"id":"4b89533e-ded8-4224-aa19-e8790e54622e","type":"HelpTool"}]},"id":"d6679fb5-dadf-47ac-95cf-98b460cdb998","type":"Toolbar"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"e9e0bca8-0953-4bf3-882d-53cbe28094d9","type":"WheelZoomTool"},{"attributes":{},"id":"faff7bfa-ba72-4912-91a0-e3e41db50d89","type":"LinearScale"},{"attributes":{},"id":"2ac868b4-63d1-40ef-9d65-fd954de1b2d2","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"92a9d87d-e560-4b7a-85f4-1eae7f58fc19","type":"BoxAnnotation"},"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"ab9c16fe-22c4-491b-8577-372859602076","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8f357ab-4157-4190-a93e-b95037cdcc8b","type":"BasicTicker"}},"id":"8f0af711-2fc5-4816-970a-395af954d728","type":"Grid"},{"attributes":{},"id":"f3c91d74-6330-49a9-8c75-1e0918cf7ef9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"83fbd0ab-3766-4bb2-8929-ebbd80e9681d","type":"BasicTickFormatter"},"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3c91d74-6330-49a9-8c75-1e0918cf7ef9","type":"BasicTicker"}},"id":"6bc52f1a-7017-4393-a973-71befafc5000","type":"LinearAxis"},{"attributes":{"data_source":{"id":"4b14c8f8-58d6-43f0-acd0-a2cbfca19c2d","type":"ColumnDataSource"},"glyph":{"id":"b57a1bdf-f394-4346-899b-62e80f99a30f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9b5383c8-c53b-4761-90b1-d890c210e6c1","type":"Circle"},"selection_glyph":null},"id":"c4b50786-4a58-4910-a696-acc4ea68fece","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"2ac868b4-63d1-40ef-9d65-fd954de1b2d2","type":"BasicTickFormatter"},"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"},"ticker":{"id":"d1815436-6370-472c-9909-6fc042976295","type":"BasicTicker"},"y_range_name":"foo"},"id":"ed7b1a49-f561-4ae7-8e2f-156478d92262","type":"LinearAxis"},{"attributes":{},"id":"1910a520-a285-479d-a1df-89ddd1e036ba","type":"ToolEvents"},{"attributes":{},"id":"bd3154f7-1c32-49ec-beff-dadb9e816b31","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"a10b67d3-110d-4e15-b5ae-47884149897a","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"92a9d87d-e560-4b7a-85f4-1eae7f58fc19","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b5383c8-c53b-4761-90b1-d890c210e6c1","type":"Circle"},{"attributes":{},"id":"20eab715-431a-4110-89df-001ed41a1c35","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b7bb3ed-865b-4655-b340-a193a6c59248","type":"Circle"},{"attributes":{"callback":null,"end":100},"id":"52803b7a-0acc-45e3-a887-5749c5d1f400","type":"Range1d"},{"attributes":{"data_source":{"id":"a10b67d3-110d-4e15-b5ae-47884149897a","type":"ColumnDataSource"},"glyph":{"id":"029e5d17-a2b4-42d0-9f87-a278a35747de","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4b7bb3ed-865b-4655-b340-a193a6c59248","type":"Circle"},"selection_glyph":null,"y_range_name":"foo"},"id":"407745d6-c51b-43d2-8e1e-65609851321c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"e4aa9311-d3d7-43af-945d-54b1a9f72122","subtype":"Figure","type":"Plot"}},"id":"1088695a-c155-4f6a-967e-5355535e7470","type":"SaveTool"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"029e5d17-a2b4-42d0-9f87-a278a35747de","type":"Circle"},{"attributes":{},"id":"83fbd0ab-3766-4bb2-8929-ebbd80e9681d","type":"BasicTickFormatter"},{"attributes":{},"id":"d1815436-6370-472c-9909-6fc042976295","type":"BasicTicker"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"1dae08f0-84a2-4517-9fe9-9b84614b63ca","type":"Range1d"}],"root_ids":["e4aa9311-d3d7-43af-945d-54b1a9f72122"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"de38f4cc-7b87-483b-acc9-2b2d7363b05c","elementid":"c700f76e-32dd-4c9d-8d19-31da5b7acca4","modelid":"e4aa9311-d3d7-43af-945d-54b1a9f72122"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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

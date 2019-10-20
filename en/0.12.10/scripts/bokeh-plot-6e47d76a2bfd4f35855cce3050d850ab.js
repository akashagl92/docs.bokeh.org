(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("35c71e7b-0ba2-4257-8122-62d5d4eb954d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '35c71e7b-0ba2-4257-8122-62d5d4eb954d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"fc03db02-ae43-4cf8-99a1-ed62e390958b":{"roots":{"references":[{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"d76d54b5-b80b-4731-b8ba-ae9e956f115d","type":"Range1d"},{"attributes":{"data_source":{"id":"5c88ff77-08fb-4bd4-854b-ca82e8f517f2","type":"ColumnDataSource"},"glyph":{"id":"c1fdd0a9-6a40-4b48-a617-a339abb0bd14","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"819bea11-c53a-4bdb-ae60-9d3e2cd0ac5a","type":"Circle"},"selection_glyph":null,"view":{"id":"46f5c0f5-e9b2-4fc8-adbe-edb805a7ae36","type":"CDSView"},"y_range_name":"foo"},"id":"b51bdf02-be97-4a93-87aa-11667de2db36","type":"GlyphRenderer"},{"attributes":{},"id":"61a32118-58ec-430b-99c1-3919ade7a0c2","type":"LinearScale"},{"attributes":{"source":{"id":"5c88ff77-08fb-4bd4-854b-ca82e8f517f2","type":"ColumnDataSource"}},"id":"46f5c0f5-e9b2-4fc8-adbe-edb805a7ae36","type":"CDSView"},{"attributes":{"formatter":{"id":"5fb9f97c-2912-487d-8ce9-932cf93c413a","type":"BasicTickFormatter"},"plot":{"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},"ticker":{"id":"21a19ca4-2efd-4b47-90cf-985c4232f506","type":"BasicTicker"}},"id":"68cbdf92-a418-4194-b50c-573bb3316738","type":"LinearAxis"},{"attributes":{"source":{"id":"24614cfa-cc3a-4f09-ae6d-fe481552d481","type":"ColumnDataSource"}},"id":"90b3ca0f-e16f-4034-9251-2e44cab9dc79","type":"CDSView"},{"attributes":{},"id":"bf19e89e-778f-4eff-b644-c3b47ebfa334","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5bb99f38-3942-457b-b329-5eaa60ced58d","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"165f2d33-add3-4efa-a8b0-bf2b2602eb6f","type":"PanTool"},{"id":"60462a13-3dd9-499b-bfb7-dd2568515675","type":"WheelZoomTool"},{"id":"76363780-862b-42cc-b38e-a763ec8cda81","type":"BoxZoomTool"},{"id":"dc58b2f8-9fbe-40e0-adbd-1d5616076dcf","type":"SaveTool"},{"id":"1548d0f5-e8d2-4ffc-b0a2-0e6c18d53f02","type":"ResetTool"},{"id":"c9eeab05-4629-4f1a-bffe-a9506da073f7","type":"HelpTool"}]},"id":"37830f64-2208-4a05-827c-be9a0fe06eaf","type":"Toolbar"},{"attributes":{},"id":"5fb9f97c-2912-487d-8ce9-932cf93c413a","type":"BasicTickFormatter"},{"attributes":{},"id":"1548d0f5-e8d2-4ffc-b0a2-0e6c18d53f02","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},"ticker":{"id":"6fdd29ff-f20b-4813-b6c5-1192c82606d5","type":"BasicTicker"}},"id":"2c4c2850-0295-4c3d-bb57-28c0321642b6","type":"Grid"},{"attributes":{},"id":"21a19ca4-2efd-4b47-90cf-985c4232f506","type":"BasicTicker"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"efce9e80-d009-457b-aa2e-115df78ca287","type":"Range1d"},{"attributes":{"overlay":{"id":"44ee668c-3e30-453f-92dc-0a003923d467","type":"BoxAnnotation"}},"id":"76363780-862b-42cc-b38e-a763ec8cda81","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8050d917-8224-4859-8bf8-08d6fd2913d7","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"5c88ff77-08fb-4bd4-854b-ca82e8f517f2","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"24614cfa-cc3a-4f09-ae6d-fe481552d481","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"dad862a3-1ae2-440d-b9a4-4513bcc94fcb","type":"BasicTickFormatter"},"plot":{"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},"ticker":{"id":"6fdd29ff-f20b-4813-b6c5-1192c82606d5","type":"BasicTicker"}},"id":"c0315589-253b-4964-ae82-6262a48d6ce3","type":"LinearAxis"},{"attributes":{},"id":"c9eeab05-4629-4f1a-bffe-a9506da073f7","type":"HelpTool"},{"attributes":{},"id":"6fdd29ff-f20b-4813-b6c5-1192c82606d5","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44ee668c-3e30-453f-92dc-0a003923d467","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"24614cfa-cc3a-4f09-ae6d-fe481552d481","type":"ColumnDataSource"},"glyph":{"id":"8050d917-8224-4859-8bf8-08d6fd2913d7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5bb99f38-3942-457b-b329-5eaa60ced58d","type":"Circle"},"selection_glyph":null,"view":{"id":"90b3ca0f-e16f-4034-9251-2e44cab9dc79","type":"CDSView"}},"id":"5d86913b-4461-4ae1-a245-00cdbf6e017a","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":100},"id":"9341d33c-1f84-4399-a050-de14151c2583","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"9aecb7b0-a348-4333-8bf3-81d5be23ca73","type":"Title"},{"attributes":{},"id":"60462a13-3dd9-499b-bfb7-dd2568515675","type":"WheelZoomTool"},{"attributes":{},"id":"d707582a-9bd8-48fe-a343-da102ac045bc","type":"LinearScale"},{"attributes":{"formatter":{"id":"bf19e89e-778f-4eff-b644-c3b47ebfa334","type":"BasicTickFormatter"},"plot":{"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},"ticker":{"id":"d6950755-f638-42ef-bb35-8ab5bc5ac53c","type":"BasicTicker"},"y_range_name":"foo"},"id":"2bfebff5-1e67-498b-8eac-21bf6778afb8","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"819bea11-c53a-4bdb-ae60-9d3e2cd0ac5a","type":"Circle"},{"attributes":{"plot":{"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},"ticker":{"id":"21a19ca4-2efd-4b47-90cf-985c4232f506","type":"BasicTicker"}},"id":"8b2cb230-a696-401f-9f9f-cef5f75cf0d2","type":"Grid"},{"attributes":{},"id":"dad862a3-1ae2-440d-b9a4-4513bcc94fcb","type":"BasicTickFormatter"},{"attributes":{},"id":"dc58b2f8-9fbe-40e0-adbd-1d5616076dcf","type":"SaveTool"},{"attributes":{"below":[{"id":"68cbdf92-a418-4194-b50c-573bb3316738","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"9341d33c-1f84-4399-a050-de14151c2583","type":"Range1d"}},"left":[{"id":"c0315589-253b-4964-ae82-6262a48d6ce3","type":"LinearAxis"},{"id":"2bfebff5-1e67-498b-8eac-21bf6778afb8","type":"LinearAxis"}],"renderers":[{"id":"68cbdf92-a418-4194-b50c-573bb3316738","type":"LinearAxis"},{"id":"8b2cb230-a696-401f-9f9f-cef5f75cf0d2","type":"Grid"},{"id":"c0315589-253b-4964-ae82-6262a48d6ce3","type":"LinearAxis"},{"id":"2c4c2850-0295-4c3d-bb57-28c0321642b6","type":"Grid"},{"id":"44ee668c-3e30-453f-92dc-0a003923d467","type":"BoxAnnotation"},{"id":"5d86913b-4461-4ae1-a245-00cdbf6e017a","type":"GlyphRenderer"},{"id":"b51bdf02-be97-4a93-87aa-11667de2db36","type":"GlyphRenderer"},{"id":"2bfebff5-1e67-498b-8eac-21bf6778afb8","type":"LinearAxis"}],"title":{"id":"9aecb7b0-a348-4333-8bf3-81d5be23ca73","type":"Title"},"toolbar":{"id":"37830f64-2208-4a05-827c-be9a0fe06eaf","type":"Toolbar"},"x_range":{"id":"d76d54b5-b80b-4731-b8ba-ae9e956f115d","type":"Range1d"},"x_scale":{"id":"61a32118-58ec-430b-99c1-3919ade7a0c2","type":"LinearScale"},"y_range":{"id":"efce9e80-d009-457b-aa2e-115df78ca287","type":"Range1d"},"y_scale":{"id":"d707582a-9bd8-48fe-a343-da102ac045bc","type":"LinearScale"}},"id":"c3dd4400-8215-4029-b145-06e420bcc301","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d6950755-f638-42ef-bb35-8ab5bc5ac53c","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1fdd0a9-6a40-4b48-a617-a339abb0bd14","type":"Circle"},{"attributes":{},"id":"165f2d33-add3-4efa-a8b0-bf2b2602eb6f","type":"PanTool"}],"root_ids":["c3dd4400-8215-4029-b145-06e420bcc301"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"fc03db02-ae43-4cf8-99a1-ed62e390958b","elementid":"35c71e7b-0ba2-4257-8122-62d5d4eb954d","modelid":"c3dd4400-8215-4029-b145-06e420bcc301"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

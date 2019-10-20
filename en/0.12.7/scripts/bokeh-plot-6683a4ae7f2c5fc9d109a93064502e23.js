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
      };var element = document.getElementById("abf687df-49ce-4c4f-b16a-9b28713daa2c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'abf687df-49ce-4c4f-b16a-9b28713daa2c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"3e4810e6-0271-4e71-9a0e-805e836ee43b":{"roots":{"references":[{"attributes":{},"id":"f4e77be2-d20a-4a4e-aa93-4af6ca34f6c4","type":"SaveTool"},{"attributes":{"callback":null,"end":100},"id":"199a856c-0ac2-4f07-bc24-fff3862c7c4c","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb0e22f3-2dba-4d44-ab31-550d47f68f00","type":"PanTool"},{"id":"3cc467df-fa8a-4b81-b35e-70a2e9949a18","type":"WheelZoomTool"},{"id":"14fb2120-7c3b-465d-bcdd-d9c0f4e50a94","type":"BoxZoomTool"},{"id":"f4e77be2-d20a-4a4e-aa93-4af6ca34f6c4","type":"SaveTool"},{"id":"76359aa7-69e9-4bb2-97e3-515b13b8a06d","type":"ResetTool"},{"id":"632f82b9-9d5a-4877-be44-6d97467fa1bf","type":"HelpTool"}]},"id":"48f9935b-80e1-43c6-a6b4-b0de98d0c924","type":"Toolbar"},{"attributes":{"source":{"id":"1a7c5385-8cac-494a-a894-49f0d7ad93c5","type":"ColumnDataSource"}},"id":"ac9fdb93-f58b-4b1c-b276-87adf21061b5","type":"CDSView"},{"attributes":{"overlay":{"id":"400fbc5b-5fdc-47c5-b9f2-2ed40e6380a0","type":"BoxAnnotation"}},"id":"14fb2120-7c3b-465d-bcdd-d9c0f4e50a94","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"41995749-6169-4d73-81ad-c6245ce95918","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"400fbc5b-5fdc-47c5-b9f2-2ed40e6380a0","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"fb779a08-3b04-4e35-88a6-6baa9002c312","type":"BasicTickFormatter"},"plot":{"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6eab99f9-1009-4055-9940-48408cd01f63","type":"BasicTicker"},"y_range_name":"foo"},"id":"019e22f8-c1e7-4db1-a47b-0300ad808464","type":"LinearAxis"},{"attributes":{},"id":"76359aa7-69e9-4bb2-97e3-515b13b8a06d","type":"ResetTool"},{"attributes":{},"id":"632f82b9-9d5a-4877-be44-6d97467fa1bf","type":"HelpTool"},{"attributes":{"below":[{"id":"3a9d9ac8-2c51-4e6b-900b-aeb703543e60","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"199a856c-0ac2-4f07-bc24-fff3862c7c4c","type":"Range1d"}},"left":[{"id":"9ae89c9d-b0e1-4f9b-b3c0-3a7d0d378b83","type":"LinearAxis"},{"id":"019e22f8-c1e7-4db1-a47b-0300ad808464","type":"LinearAxis"}],"renderers":[{"id":"3a9d9ac8-2c51-4e6b-900b-aeb703543e60","type":"LinearAxis"},{"id":"b321fd4e-7756-43b8-8a80-074fd55bbfd6","type":"Grid"},{"id":"9ae89c9d-b0e1-4f9b-b3c0-3a7d0d378b83","type":"LinearAxis"},{"id":"9d507439-88a5-42c1-b570-e7b6fab0e59a","type":"Grid"},{"id":"400fbc5b-5fdc-47c5-b9f2-2ed40e6380a0","type":"BoxAnnotation"},{"id":"60ff78f3-5bde-4ff9-ae38-96a5cb73e0e0","type":"GlyphRenderer"},{"id":"53fc52b6-c933-4a70-979c-b56abf29b16c","type":"GlyphRenderer"},{"id":"019e22f8-c1e7-4db1-a47b-0300ad808464","type":"LinearAxis"}],"title":{"id":"f87185ca-45b5-4548-835f-97b2ec6845b2","type":"Title"},"toolbar":{"id":"48f9935b-80e1-43c6-a6b4-b0de98d0c924","type":"Toolbar"},"x_range":{"id":"3cc2c4be-0c92-4e73-a50b-c810870a0798","type":"Range1d"},"x_scale":{"id":"214baf0f-b8c5-4a89-b9be-d316b539a039","type":"LinearScale"},"y_range":{"id":"41995749-6169-4d73-81ad-c6245ce95918","type":"Range1d"},"y_scale":{"id":"4919ed9a-adba-41c6-8c49-6afbd20dd614","type":"LinearScale"}},"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6341bca1-b5ee-4eb7-a8ed-f9ae08451f73","type":"Circle"},{"attributes":{},"id":"0a79bf44-4494-4c6a-aee0-3cbc355afb8b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1a7c5385-8cac-494a-a894-49f0d7ad93c5","type":"ColumnDataSource"},"glyph":{"id":"af7ebb2f-bb5d-483f-8e5f-4c36c298efd8","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f92e637b-a579-4aad-9027-b977323585aa","type":"Circle"},"selection_glyph":null,"view":{"id":"ac9fdb93-f58b-4b1c-b276-87adf21061b5","type":"CDSView"},"y_range_name":"foo"},"id":"53fc52b6-c933-4a70-979c-b56abf29b16c","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"af7ebb2f-bb5d-483f-8e5f-4c36c298efd8","type":"Circle"},{"attributes":{"formatter":{"id":"929ef21f-e602-4bce-b988-41733479bb65","type":"BasicTickFormatter"},"plot":{"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d63122a-c2be-4cc0-aac3-6347088d10e8","type":"BasicTicker"}},"id":"9ae89c9d-b0e1-4f9b-b3c0-3a7d0d378b83","type":"LinearAxis"},{"attributes":{"plot":{"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"13f7d007-5e5a-4a5b-a56b-905fa2a8a7ca","type":"BasicTicker"}},"id":"b321fd4e-7756-43b8-8a80-074fd55bbfd6","type":"Grid"},{"attributes":{},"id":"fb779a08-3b04-4e35-88a6-6baa9002c312","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"f87185ca-45b5-4548-835f-97b2ec6845b2","type":"Title"},{"attributes":{},"id":"4d63122a-c2be-4cc0-aac3-6347088d10e8","type":"BasicTicker"},{"attributes":{},"id":"bb0e22f3-2dba-4d44-ab31-550d47f68f00","type":"PanTool"},{"attributes":{"formatter":{"id":"0a79bf44-4494-4c6a-aee0-3cbc355afb8b","type":"BasicTickFormatter"},"plot":{"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"13f7d007-5e5a-4a5b-a56b-905fa2a8a7ca","type":"BasicTicker"}},"id":"3a9d9ac8-2c51-4e6b-900b-aeb703543e60","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"7ca80d71-3f2d-46a0-a02b-0ca8225cd588","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"1a7c5385-8cac-494a-a894-49f0d7ad93c5","type":"ColumnDataSource"},{"attributes":{},"id":"214baf0f-b8c5-4a89-b9be-d316b539a039","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e6b5ad72-ba8a-4a1b-9f79-785fd0fe0fa1","type":"Circle"},{"attributes":{},"id":"6eab99f9-1009-4055-9940-48408cd01f63","type":"BasicTicker"},{"attributes":{},"id":"13f7d007-5e5a-4a5b-a56b-905fa2a8a7ca","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7ca80d71-3f2d-46a0-a02b-0ca8225cd588","type":"ColumnDataSource"},"glyph":{"id":"6341bca1-b5ee-4eb7-a8ed-f9ae08451f73","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e6b5ad72-ba8a-4a1b-9f79-785fd0fe0fa1","type":"Circle"},"selection_glyph":null,"view":{"id":"c24790c4-5a9e-47b9-ad66-921f802a216b","type":"CDSView"}},"id":"60ff78f3-5bde-4ff9-ae38-96a5cb73e0e0","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7ca80d71-3f2d-46a0-a02b-0ca8225cd588","type":"ColumnDataSource"}},"id":"c24790c4-5a9e-47b9-ad66-921f802a216b","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"deed6919-0331-4bca-a176-5f300016e3a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d63122a-c2be-4cc0-aac3-6347088d10e8","type":"BasicTicker"}},"id":"9d507439-88a5-42c1-b570-e7b6fab0e59a","type":"Grid"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"3cc2c4be-0c92-4e73-a50b-c810870a0798","type":"Range1d"},{"attributes":{},"id":"3cc467df-fa8a-4b81-b35e-70a2e9949a18","type":"WheelZoomTool"},{"attributes":{},"id":"929ef21f-e602-4bce-b988-41733479bb65","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f92e637b-a579-4aad-9027-b977323585aa","type":"Circle"},{"attributes":{},"id":"4919ed9a-adba-41c6-8c49-6afbd20dd614","type":"LinearScale"}],"root_ids":["deed6919-0331-4bca-a176-5f300016e3a6"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3e4810e6-0271-4e71-9a0e-805e836ee43b","elementid":"abf687df-49ce-4c4f-b16a-9b28713daa2c","modelid":"deed6919-0331-4bca-a176-5f300016e3a6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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

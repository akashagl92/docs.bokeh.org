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
      };var element = document.getElementById("f4db009b-8402-4f66-b3d5-e2883c71effc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4db009b-8402-4f66-b3d5-e2883c71effc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"24fba186-7e86-4065-9d7b-8ef30d47fde7":{"roots":{"references":[{"attributes":{},"id":"74520e10-e116-4fe5-a79a-0b94775a7b6f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}}},"id":"694b0452-97b9-420c-a2a2-521193593c66","type":"ColumnDataSource"},{"attributes":{},"id":"d7ca2116-d5b3-453f-a782-3fce726a897e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2cdf2d04-91da-4856-8d02-b3201ccba88b","type":"ColumnDataSource"},"glyph":{"id":"e953a8eb-a98b-4c2b-86df-96a2e46127d1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"31a2edaf-c6c4-406b-a4e1-962dbdd4c7bc","type":"Circle"},"selection_glyph":null,"view":{"id":"51674c58-5544-498f-85bf-13cd52bc53f8","type":"CDSView"}},"id":"b1739a2e-d8d2-49f8-8cec-b8d93b5861c6","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a7a5b25e-4505-4ce0-bd1c-574fc04393c8","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"d0089c7d-8d9e-4820-83ac-ea08e7515b0f","type":"Range1d"}},"left":[{"id":"c84e5fe0-cec3-4fec-913a-c33da9cbc200","type":"LinearAxis"},{"id":"8f4384da-dbf3-43ac-98d6-d88644eb7c86","type":"LinearAxis"}],"renderers":[{"id":"a7a5b25e-4505-4ce0-bd1c-574fc04393c8","type":"LinearAxis"},{"id":"229166aa-eeed-45a7-b9d4-615b355bde8d","type":"Grid"},{"id":"c84e5fe0-cec3-4fec-913a-c33da9cbc200","type":"LinearAxis"},{"id":"040bb13f-8592-48f9-8361-d8c17fa0fe91","type":"Grid"},{"id":"ccce279e-af3e-4276-b578-0c0e97977e38","type":"BoxAnnotation"},{"id":"b1739a2e-d8d2-49f8-8cec-b8d93b5861c6","type":"GlyphRenderer"},{"id":"a9ef676c-bba1-4cf9-9eb3-0f2d8bee0d47","type":"GlyphRenderer"},{"id":"8f4384da-dbf3-43ac-98d6-d88644eb7c86","type":"LinearAxis"}],"title":{"id":"0d2fd027-c3bf-45db-a167-34253d6f1ec1","type":"Title"},"toolbar":{"id":"be60e1e2-fa35-4c66-98f5-098042d95bdc","type":"Toolbar"},"x_range":{"id":"02759d8e-d2d5-425f-ba72-721966deb759","type":"Range1d"},"x_scale":{"id":"0531fb29-1849-439f-922f-40ff4c2e590b","type":"LinearScale"},"y_range":{"id":"7b183851-3e73-4038-8668-732e98e99ecb","type":"Range1d"},"y_scale":{"id":"c9d84f18-f5ab-4000-b626-6e715bbc2646","type":"LinearScale"}},"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f7fcf6a5-7f27-47ae-affe-ef1310bec3db","type":"PanTool"},{"id":"53350d86-60b6-4be8-afa4-05226857f5d4","type":"WheelZoomTool"},{"id":"5fb0e045-bdce-464d-b35c-cf20c4e3c906","type":"BoxZoomTool"},{"id":"3152f233-83a2-4e13-91a5-cd42b38936e2","type":"SaveTool"},{"id":"3e68dccf-e78a-43a7-bda1-c9d34d0aa06b","type":"ResetTool"},{"id":"84dbc9fb-4d74-4f99-b79a-16b4038adda0","type":"HelpTool"}]},"id":"be60e1e2-fa35-4c66-98f5-098042d95bdc","type":"Toolbar"},{"attributes":{"callback":null,"end":100},"id":"d0089c7d-8d9e-4820-83ac-ea08e7515b0f","type":"Range1d"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"02759d8e-d2d5-425f-ba72-721966deb759","type":"Range1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"e953a8eb-a98b-4c2b-86df-96a2e46127d1","type":"Circle"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"af7ecbd2-e839-478f-9613-8b25a2597de9","type":"Circle"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"7b183851-3e73-4038-8668-732e98e99ecb","type":"Range1d"},{"attributes":{},"id":"0531fb29-1849-439f-922f-40ff4c2e590b","type":"LinearScale"},{"attributes":{},"id":"c9d84f18-f5ab-4000-b626-6e715bbc2646","type":"LinearScale"},{"attributes":{"plot":{"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},"ticker":{"id":"819c040b-8fca-47a4-a4bb-fa69f420f231","type":"BasicTicker"}},"id":"229166aa-eeed-45a7-b9d4-615b355bde8d","type":"Grid"},{"attributes":{"formatter":{"id":"eff765a3-3b6c-4b94-b593-c54e83c1e3f6","type":"BasicTickFormatter"},"plot":{"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},"ticker":{"id":"819c040b-8fca-47a4-a4bb-fa69f420f231","type":"BasicTicker"}},"id":"a7a5b25e-4505-4ce0-bd1c-574fc04393c8","type":"LinearAxis"},{"attributes":{},"id":"819c040b-8fca-47a4-a4bb-fa69f420f231","type":"BasicTicker"},{"attributes":{"formatter":{"id":"74520e10-e116-4fe5-a79a-0b94775a7b6f","type":"BasicTickFormatter"},"plot":{"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},"ticker":{"id":"603e29d4-3617-43ac-a57f-0d45cc04a335","type":"BasicTicker"}},"id":"c84e5fe0-cec3-4fec-913a-c33da9cbc200","type":"LinearAxis"},{"attributes":{"data_source":{"id":"694b0452-97b9-420c-a2a2-521193593c66","type":"ColumnDataSource"},"glyph":{"id":"af7ecbd2-e839-478f-9613-8b25a2597de9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c849c7e4-3250-4b29-a94f-f4b1522d87e5","type":"Circle"},"selection_glyph":null,"view":{"id":"a4401920-6015-4672-a284-511411f348e1","type":"CDSView"},"y_range_name":"foo"},"id":"a9ef676c-bba1-4cf9-9eb3-0f2d8bee0d47","type":"GlyphRenderer"},{"attributes":{},"id":"eff765a3-3b6c-4b94-b593-c54e83c1e3f6","type":"BasicTickFormatter"},{"attributes":{},"id":"3152f233-83a2-4e13-91a5-cd42b38936e2","type":"SaveTool"},{"attributes":{},"id":"603e29d4-3617-43ac-a57f-0d45cc04a335","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ccce279e-af3e-4276-b578-0c0e97977e38","type":"BoxAnnotation"}},"id":"5fb0e045-bdce-464d-b35c-cf20c4e3c906","type":"BoxZoomTool"},{"attributes":{},"id":"8c18abc4-cc2c-4c9e-a3d2-ddf74fa99073","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},"ticker":{"id":"603e29d4-3617-43ac-a57f-0d45cc04a335","type":"BasicTicker"}},"id":"040bb13f-8592-48f9-8361-d8c17fa0fe91","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9cFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9AHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8w16rZM9/pP1IvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9q5l0jcnDVP0AySNa4n84/z9a2bTgQwj9JFpiCD0qlP9km6Dk3462/9Aq3ygIxxL+fS/8QyVrQv1Fhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/wiQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/+CLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwOg1R2oh8w/rDXOvj7cvz+YZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/PLQgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9YNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}}},"id":"2cdf2d04-91da-4856-8d02-b3201ccba88b","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31a2edaf-c6c4-406b-a4e1-962dbdd4c7bc","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ccce279e-af3e-4276-b578-0c0e97977e38","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2cdf2d04-91da-4856-8d02-b3201ccba88b","type":"ColumnDataSource"}},"id":"51674c58-5544-498f-85bf-13cd52bc53f8","type":"CDSView"},{"attributes":{},"id":"f7fcf6a5-7f27-47ae-affe-ef1310bec3db","type":"PanTool"},{"attributes":{},"id":"53350d86-60b6-4be8-afa4-05226857f5d4","type":"WheelZoomTool"},{"attributes":{},"id":"3e68dccf-e78a-43a7-bda1-c9d34d0aa06b","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"0d2fd027-c3bf-45db-a167-34253d6f1ec1","type":"Title"},{"attributes":{},"id":"84dbc9fb-4d74-4f99-b79a-16b4038adda0","type":"HelpTool"},{"attributes":{"source":{"id":"694b0452-97b9-420c-a2a2-521193593c66","type":"ColumnDataSource"}},"id":"a4401920-6015-4672-a284-511411f348e1","type":"CDSView"},{"attributes":{"formatter":{"id":"d7ca2116-d5b3-453f-a782-3fce726a897e","type":"BasicTickFormatter"},"plot":{"id":"586e43e5-7155-494c-87ce-17cebe386192","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c18abc4-cc2c-4c9e-a3d2-ddf74fa99073","type":"BasicTicker"},"y_range_name":"foo"},"id":"8f4384da-dbf3-43ac-98d6-d88644eb7c86","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c849c7e4-3250-4b29-a94f-f4b1522d87e5","type":"Circle"}],"root_ids":["586e43e5-7155-494c-87ce-17cebe386192"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"24fba186-7e86-4065-9d7b-8ef30d47fde7","elementid":"f4db009b-8402-4f66-b3d5-e2883c71effc","modelid":"586e43e5-7155-494c-87ce-17cebe386192"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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

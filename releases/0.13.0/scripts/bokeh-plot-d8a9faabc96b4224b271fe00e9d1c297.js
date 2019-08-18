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
      };var element = document.getElementById("d16e2072-a76a-42da-be8e-923d2f944622");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd16e2072-a76a-42da-be8e-923d2f944622' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"a9d4659d-4ab1-4f9d-8a5e-319fdae84b09":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"B1wUMyamsTwky4vLro65P6zSPSP/bck/Jbq6lc3p0j9XZyvpOuzYP9gFS3Tort4/S0GlF40R4j+pGUZpbp3kP7z+v8KU9OY/MKhdmAMR6T/eDAmPVO3qPyhjLUzFhOw/t1UaokPT7T9BHsX5d9XuP/vgRN/NiO8/iG0sm3rr7z/HQuDHgfzvP72YL9e3u+8//RW9gcIp7z9qOBofF0juP2C00er2GO0/HHPrP2mf6z8x16rZM9/pP1MvWC3R3Oc/0tHD9WSd5T/vys8NrybjPwGGoLv8fuA/p6ckJDFa2z9p5l0jcnDVPz8ySNa4n84/z9a2bTgQwj9JFpiCD0qlP9gm6Dk3462/9Qq3ygIxxL+gS/8QyVrQv1Jhun47c9a/JdHwQ0FS3L/dGi7savTgv0DA7P9WlOO/crMfLS4C5r9cHtzduTfov3DI4npTL+q/lhLQ3/Lj67/viQE6O1Htv8QoRTGGc+6/Y0DHPe1H77+p7F0TUczvv1HsNw9f/++/DT4MmpTg77/B6yJ2QHDvv2CZ4PWBr+6/9yLYHEag7b8lJbqyQkXsv5cSvFTvoeq/3gUyl3y66L/SsApOyZPmv0H2lhdWM+S/OMh6STef4b8a4Y7HCrzdv3u+C2SY7de/LaSwivHh0b9m/jPXGVHHv0bTvttYRbW/xSXLwqk3kT/JIzUvK9a9PxjIxkANics//AfpL0vw0z91hzWkD+nZP4cP6pqNn98/CxrYG5SC4j9hCW3CCAblP+5iZOG2U+c/hMjjJbpl6T/Mcx3cxjbrP44pBXs3wuw/3a38hhgE7j/R9xCtMvnuPzNU7vwSn+8/IbeALBH07z+1XzrVU/fvP6DPKKDSqO8/pbRJW1YJ7z+JM+n3dhruP8RhK3eX3uw/Jvgtz99Y6z+f2l/YNI3pP+WxtFcugOc/zaIuPws35T/F08pCpLfiP3g4I+RcCOA/mTEMNiZg2j8025+JG2zUPwSg1R2oh8w/qzXOvj7cvz+ZZ0Soul6ZPxMepJQaPbO/RLIVCFdQxr8Pn7GuhmTRv7Nrs+BkdNe/O7QgoURI3b9ITvP1nmjhv9zlVSmUAOS/XGXQmV9l5r9ZNdHU4ZDov+OMb++Nfeq/d0LwuHcm7L9QJSxSYIftv8TXognBnO6/SRtzYNRj779HhCYhndrvv+yTLnbr/++/NaAP81/T77/KpXWIbFXvv+6vwmBTh+6/2k8AqCNr7b+D929HtAPsv7RWM6KcVOq/8K2gZSti6L8bWsKEWzHmvw8RMHvHx+O/52bX95or4b9I9bkoBsfcv2FS64I67da/RcPLJ8rY0L9F3NCChDLFvyPcIcx4+rC/","dtype":"float64","shape":[126]}},"selected":{"id":"492d4e13-253f-4141-b1cd-f24b86243738","type":"Selection"},"selection_policy":{"id":"f8a0787c-50c7-493e-8b99-c83290561a09","type":"UnionRenderers"}},"id":"b63560c3-6cdb-4c1d-88aa-5a8d537dbc50","type":"ColumnDataSource"},{"attributes":{},"id":"fb876133-637e-422c-9795-aaa0066d7b0f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"5fafc85b-8e47-4f89-a3f7-a4d7d82cd057","type":"PanTool"},{"id":"5902ab69-3e2d-46ad-8727-39dd2c852d22","type":"WheelZoomTool"},{"id":"e0dea314-2300-4670-9acf-5516faaddc45","type":"BoxZoomTool"},{"id":"2017837e-c023-4a69-a4bb-6d8d87423922","type":"SaveTool"},{"id":"091f87a6-a11a-4a33-8d09-6a01031ff6cb","type":"ResetTool"},{"id":"cfcdf43f-45f8-4077-9908-ce91f90caffe","type":"HelpTool"}]},"id":"ff87cd14-9b2b-4873-8527-ec8821940447","type":"Toolbar"},{"attributes":{"data_source":{"id":"1d0873f9-de7a-4f90-b7a5-8816270f40e2","type":"ColumnDataSource"},"glyph":{"id":"61de655a-19fc-43c5-aa25-2f0260c2b603","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"06b0fb8a-fba2-4239-bd81-514b735acf67","type":"Circle"},"selection_glyph":null,"view":{"id":"a1494c46-c00f-433f-a6d5-109572b68a3f","type":"CDSView"},"y_range_name":"foo"},"id":"6b79b5d3-8447-4e52-8f7d-a2733a9d0c0e","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"GC1EVPshGcCyxt3tlLsYwExgd4cuVRjA5vkQIcjuF8CAk6q6YYgXwBotRFT7IRfAtMbd7ZS7FsBOYHeHLlUWwOj5ECHI7hXAgpOqumGIFcAcLURU+yEVwLbG3e2UuxTAUGB3hy5VFMDq+RAhyO4TwISTqrphiBPAHi1EVPshE8C4xt3tlLsSwFJgd4cuVRLA7PkQIcjuEcCGk6q6YYgRwCAtRFT7IRHAusbd7ZS7EMBUYHeHLlUQwNzzIUKQ3Q/AECdVdcMQD8BEWoio9kMOwHiNu9spdw3ArMDuDl2qDMDg8yFCkN0LwBQnVXXDEAvASFqIqPZDCsB8jbvbKXcJwLDA7g5dqgjA5PMhQpDdB8AYJ1V1wxAHwExaiKj2QwbAgI272yl3BcC0wO4OXaoEwOjzIUKQ3QPAHCdVdcMQA8BQWoio9kMCwISNu9spdwHAuMDuDl2qAMDY50OEILv/v0BOquqGIf6/qLQQUe2H/L8QG3e3U+76v3iB3R26VPm/4OdDhCC7979ITqrqhiH2v7C0EFHth/S/GBt3t1Pu8r+Agd0dulTxv9DPhwhBdu+/oJxU1Q1D7L9waSGi2g/pv0A27m6n3OW/EAO7O3Sp4r/Anw8Rguzev2A5qaobhti/ANNCRLUf0r9A2bi7nXLHvwAZ2N2hS7W/AAIG7943kT8AGltVkee9P8BZeneVwMs/QJMjIrFG1D+g+YmIF63aPwAwePe+ieA/MGOrKvK84z9glt5dJfDmP5DJEZFYI+o/wPxExItW7T/4F7x730TwP5CxVRV53vE/KEvvrhJ48z/A5IhIrBH1P1h+IuJFq/Y/8Be8e99E+D+IsVUVed75PyBL764SePs/uOSISKwR/T9QfiLiRav+P/QL3r1vIgBAwNiqijzvAECMpXdXCbwBQFhyRCTWiAJAJD8R8aJVA0DwC969byIEQLzYqoo87wRAiKV3Vwm8BUBUckQk1ogGQCA/EfGiVQdA7AvevW8iCEC42KqKPO8IQISld1cJvAlAUHJEJNaICkAcPxHxolULQOgL3r1vIgxAtNiqijzvDECApXdXCbwNQExyRCTWiA5AGD8R8aJVD0DyBe/eNxEQQFhsVUWedxBAvtK7qwTeEEAkOSISa0QRQIqfiHjRqhFA8AXv3jcREkBWbFVFnncSQLzSu6sE3hJAIjkiEmtEE0CIn4h40aoTQO4F7943ERRAVGxVRZ53FEC60rurBN4UQCA5IhJrRBVAhp+IeNGqFUDsBe/eNxEWQFJsVUWedxZAuNK7qwTeFkAeOSISa0QXQISfiHjRqhdA6gXv3jcRGEBQbFVFnncYQLbSu6sE3hhA","dtype":"float64","shape":[126]},"y":{"__ndarray__":"AAAAAAAAAACamZmZmZnpP5qZmZmZmfk/NDMzMzMzA0CamZmZmZkJQAAAAAAAABBANDMzMzMzE0BnZmZmZmYWQJqZmZmZmRlAzczMzMzMHEAAAAAAAAAgQJqZmZmZmSFANDMzMzMzI0DNzMzMzMwkQGdmZmZmZiZAAAAAAAAAKECamZmZmZkpQDQzMzMzMytAzczMzMzMLEBnZmZmZmYuQAAAAAAAADBAzczMzMzMMECamZmZmZkxQGdmZmZmZjJANDMzMzMzM0AAAAAAAAA0QM3MzMzMzDRAmpmZmZmZNUBnZmZmZmY2QDQzMzMzMzdAAAAAAAAAOEDNzMzMzMw4QJqZmZmZmTlAZ2ZmZmZmOkA0MzMzMzM7QAAAAAAAADxAzczMzMzMPECamZmZmZk9QGdmZmZmZj5ANDMzMzMzP0AAAAAAAABAQGdmZmZmZkBAzczMzMzMQEAzMzMzMzNBQJqZmZmZmUFAAAAAAAAAQkBnZmZmZmZCQM3MzMzMzEJANDMzMzMzQ0CamZmZmZlDQAAAAAAAAERAZ2ZmZmZmREDNzMzMzMxEQDQzMzMzM0VAmpmZmZmZRUAAAAAAAABGQGdmZmZmZkZAzczMzMzMRkA0MzMzMzNHQJqZmZmZmUdAAAAAAAAASEBnZmZmZmZIQM3MzMzMzEhANDMzMzMzSUCamZmZmZlJQAAAAAAAAEpAZ2ZmZmZmSkDNzMzMzMxKQDQzMzMzM0tAmpmZmZmZS0AAAAAAAABMQGdmZmZmZkxAzczMzMzMTEA0MzMzMzNNQJqZmZmZmU1AAAAAAAAATkBnZmZmZmZOQM3MzMzMzE5ANDMzMzMzT0CamZmZmZlPQAAAAAAAAFBAMzMzMzMzUEBnZmZmZmZQQJqZmZmZmVBAzczMzMzMUEAAAAAAAABRQDMzMzMzM1FAZ2ZmZmZmUUCamZmZmZlRQM3MzMzMzFFAAAAAAAAAUkAzMzMzMzNSQGdmZmZmZlJAmpmZmZmZUkDNzMzMzMxSQAAAAAAAAFNANDMzMzMzU0BnZmZmZmZTQJqZmZmZmVNAzczMzMzMU0AAAAAAAABUQDQzMzMzM1RAZ2ZmZmZmVECamZmZmZlUQM3MzMzMzFRAAAAAAAAAVUA0MzMzMzNVQGdmZmZmZlVAmpmZmZmZVUDNzMzMzMxVQAAAAAAAAFZANDMzMzMzVkBnZmZmZmZWQJqZmZmZmVZAzczMzMzMVkAAAAAAAABXQDQzMzMzM1dAZ2ZmZmZmV0CamZmZmZlXQM3MzMzMzFdAAAAAAAAAWEA0MzMzMzNYQGdmZmZmZlhAmpmZmZmZWEDNzMzMzMxYQAAAAAAAAFlA","dtype":"float64","shape":[126]}},"selected":{"id":"7b5f6183-c475-4040-acf1-68d5c438eee9","type":"Selection"},"selection_policy":{"id":"c236e9eb-eca9-4ac6-8f0a-9759daafd987","type":"UnionRenderers"}},"id":"1d0873f9-de7a-4f90-b7a5-8816270f40e2","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"72ab4811-5547-4f65-a428-1a1c6a83439e","type":"BasicTicker"}},"id":"f3a6de09-47ab-447f-b9d9-a2f75a5a0b70","type":"Grid"},{"attributes":{},"id":"091f87a6-a11a-4a33-8d09-6a01031ff6cb","type":"ResetTool"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"61de655a-19fc-43c5-aa25-2f0260c2b603","type":"Circle"},{"attributes":{},"id":"7b5f6183-c475-4040-acf1-68d5c438eee9","type":"Selection"},{"attributes":{},"id":"94303ed2-8632-4dfd-be63-0fc26aba8a8a","type":"BasicTickFormatter"},{"attributes":{},"id":"5fafc85b-8e47-4f89-a3f7-a4d7d82cd057","type":"PanTool"},{"attributes":{},"id":"2017837e-c023-4a69-a4bb-6d8d87423922","type":"SaveTool"},{"attributes":{"data_source":{"id":"b63560c3-6cdb-4c1d-88aa-5a8d537dbc50","type":"ColumnDataSource"},"glyph":{"id":"26d692df-9069-4d7d-b2b0-30ac72b9645f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9ba2c73-4a94-44db-b22e-74ceba2ae925","type":"Circle"},"selection_glyph":null,"view":{"id":"3215b9b2-aaaf-4c3c-b47d-eba9712ef2a9","type":"CDSView"}},"id":"7d8a778e-6e5f-4f65-9bd7-5b17e3bbc15a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c28bb3e2-7aa8-45b0-907e-10434f0d1cfc","type":"BasicTicker"}},"id":"969765b4-2543-4c21-b86e-6b60a3b3b2d7","type":"Grid"},{"attributes":{"formatter":{"id":"576d2a6f-5da4-4ea5-bb4c-be12e689344f","type":"BasicTickFormatter"},"plot":{"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c28bb3e2-7aa8-45b0-907e-10434f0d1cfc","type":"BasicTicker"}},"id":"dc4a915f-7ef4-4113-a666-a2118ae50d96","type":"LinearAxis"},{"attributes":{},"id":"d8a2b5aa-6268-49e4-a1dd-07a61d8997d2","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"653c1373-ab34-4059-98d0-b9d18ea5761b","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"dc4a915f-7ef4-4113-a666-a2118ae50d96","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"2e4cd33f-1bc8-4012-8472-d14f93a9e688","type":"Range1d"}},"left":[{"id":"52c72173-5e4f-4abd-8b7e-64e21bbc9668","type":"LinearAxis"},{"id":"5257fead-0b6a-49f4-addb-0b4969ba95b1","type":"LinearAxis"}],"renderers":[{"id":"dc4a915f-7ef4-4113-a666-a2118ae50d96","type":"LinearAxis"},{"id":"969765b4-2543-4c21-b86e-6b60a3b3b2d7","type":"Grid"},{"id":"52c72173-5e4f-4abd-8b7e-64e21bbc9668","type":"LinearAxis"},{"id":"f3a6de09-47ab-447f-b9d9-a2f75a5a0b70","type":"Grid"},{"id":"653c1373-ab34-4059-98d0-b9d18ea5761b","type":"BoxAnnotation"},{"id":"7d8a778e-6e5f-4f65-9bd7-5b17e3bbc15a","type":"GlyphRenderer"},{"id":"6b79b5d3-8447-4e52-8f7d-a2733a9d0c0e","type":"GlyphRenderer"},{"id":"5257fead-0b6a-49f4-addb-0b4969ba95b1","type":"LinearAxis"}],"title":{"id":"98636b02-b08f-4990-ad99-0eb87c2b5317","type":"Title"},"toolbar":{"id":"ff87cd14-9b2b-4873-8527-ec8821940447","type":"Toolbar"},"x_range":{"id":"f3085160-8bd5-40b1-b45b-0e9348f153b8","type":"Range1d"},"x_scale":{"id":"f0e56b56-ac71-4fee-9bb3-bbe846d3b16b","type":"LinearScale"},"y_range":{"id":"bfcf6c81-727e-4161-9306-6dbcee4ce58b","type":"Range1d"},"y_scale":{"id":"5577f185-c300-4f0b-8ab3-fc7091138841","type":"LinearScale"}},"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"72ab4811-5547-4f65-a428-1a1c6a83439e","type":"BasicTicker"},{"attributes":{"callback":null,"end":100},"id":"2e4cd33f-1bc8-4012-8472-d14f93a9e688","type":"Range1d"},{"attributes":{},"id":"f0e56b56-ac71-4fee-9bb3-bbe846d3b16b","type":"LinearScale"},{"attributes":{},"id":"cfcdf43f-45f8-4077-9908-ce91f90caffe","type":"HelpTool"},{"attributes":{},"id":"576d2a6f-5da4-4ea5-bb4c-be12e689344f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"f3085160-8bd5-40b1-b45b-0e9348f153b8","type":"Range1d"},{"attributes":{"overlay":{"id":"653c1373-ab34-4059-98d0-b9d18ea5761b","type":"BoxAnnotation"}},"id":"e0dea314-2300-4670-9acf-5516faaddc45","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"bfcf6c81-727e-4161-9306-6dbcee4ce58b","type":"Range1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26d692df-9069-4d7d-b2b0-30ac72b9645f","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"98636b02-b08f-4990-ad99-0eb87c2b5317","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9ba2c73-4a94-44db-b22e-74ceba2ae925","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"06b0fb8a-fba2-4239-bd81-514b735acf67","type":"Circle"},{"attributes":{"source":{"id":"1d0873f9-de7a-4f90-b7a5-8816270f40e2","type":"ColumnDataSource"}},"id":"a1494c46-c00f-433f-a6d5-109572b68a3f","type":"CDSView"},{"attributes":{"formatter":{"id":"94303ed2-8632-4dfd-be63-0fc26aba8a8a","type":"BasicTickFormatter"},"plot":{"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"72ab4811-5547-4f65-a428-1a1c6a83439e","type":"BasicTicker"}},"id":"52c72173-5e4f-4abd-8b7e-64e21bbc9668","type":"LinearAxis"},{"attributes":{"source":{"id":"b63560c3-6cdb-4c1d-88aa-5a8d537dbc50","type":"ColumnDataSource"}},"id":"3215b9b2-aaaf-4c3c-b47d-eba9712ef2a9","type":"CDSView"},{"attributes":{"formatter":{"id":"d8a2b5aa-6268-49e4-a1dd-07a61d8997d2","type":"BasicTickFormatter"},"plot":{"id":"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"fb876133-637e-422c-9795-aaa0066d7b0f","type":"BasicTicker"},"y_range_name":"foo"},"id":"5257fead-0b6a-49f4-addb-0b4969ba95b1","type":"LinearAxis"},{"attributes":{},"id":"5577f185-c300-4f0b-8ab3-fc7091138841","type":"LinearScale"},{"attributes":{},"id":"f8a0787c-50c7-493e-8b99-c83290561a09","type":"UnionRenderers"},{"attributes":{},"id":"492d4e13-253f-4141-b1cd-f24b86243738","type":"Selection"},{"attributes":{},"id":"c236e9eb-eca9-4ac6-8f0a-9759daafd987","type":"UnionRenderers"},{"attributes":{},"id":"5902ab69-3e2d-46ad-8727-39dd2c852d22","type":"WheelZoomTool"},{"attributes":{},"id":"c28bb3e2-7aa8-45b0-907e-10434f0d1cfc","type":"BasicTicker"}],"root_ids":["4685fedc-d0e0-48a9-83c8-11d52e3b8b5d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"a9d4659d-4ab1-4f9d-8a5e-319fdae84b09","roots":{"4685fedc-d0e0-48a9-83c8-11d52e3b8b5d":"d16e2072-a76a-42da-be8e-923d2f944622"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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
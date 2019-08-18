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
      };var element = document.getElementById("65d15124-6ca6-4c83-b15b-46c453096b3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '65d15124-6ca6-4c83-b15b-46c453096b3b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"a1092ecb-3535-42c1-a6ac-b4a697d02039":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28","subtype":"Figure","type":"Plot"},"ticker":{"id":"61148c48-c6cc-40f8-8d7e-4dc933409d76","type":"BasicTicker"}},"id":"b8d3c9cc-b962-4647-aff7-cc587cf8e182","type":"Grid"},{"attributes":{},"id":"61148c48-c6cc-40f8-8d7e-4dc933409d76","type":"BasicTicker"},{"attributes":{"plot":null,"text":"MPG by # Cylinders"},"id":"88a0eb3a-7b5e-4dfc-9c5a-073aef479649","type":"Title"},{"attributes":{"below":[{"id":"e145a7c4-04c7-45a4-aa25-a4070e5f0d7b","type":"CategoricalAxis"}],"left":[{"id":"baa433cb-64b7-44b1-bc98-a7ae4336b673","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"e145a7c4-04c7-45a4-aa25-a4070e5f0d7b","type":"CategoricalAxis"},{"id":"c367508c-7003-4a92-b1ca-ca1daaf553c2","type":"Grid"},{"id":"baa433cb-64b7-44b1-bc98-a7ae4336b673","type":"LinearAxis"},{"id":"b8d3c9cc-b962-4647-aff7-cc587cf8e182","type":"Grid"},{"id":"56766be2-1820-4c02-883a-c7fd4881ca05","type":"GlyphRenderer"}],"title":{"id":"88a0eb3a-7b5e-4dfc-9c5a-073aef479649","type":"Title"},"toolbar":{"id":"9f98bbc8-fbfb-406a-a298-126d1206b7ae","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"17247155-9b23-44de-8378-72ea6068324f","type":"FactorRange"},"x_scale":{"id":"2d020315-69ba-454d-b65e-948c12fc120b","type":"CategoricalScale"},"y_range":{"id":"c6a4d62a-0707-4f0e-af14-9e4c5d0ab3eb","type":"DataRange1d"},"y_scale":{"id":"b919a0ec-27cf-41dc-b8df-568c767ee1e0","type":"LinearScale"}},"id":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"523bdc4e-f894-4673-b39e-3b9bc6253e74","type":"CategoricalTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28","subtype":"Figure","type":"Plot"},"ticker":{"id":"523bdc4e-f894-4673-b39e-3b9bc6253e74","type":"CategoricalTicker"}},"id":"c367508c-7003-4a92-b1ca-ca1daaf553c2","type":"Grid"},{"attributes":{"axis_label":"some stuff","formatter":{"id":"e2f1145e-4062-4bb5-92e8-47aff6eac18f","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28","subtype":"Figure","type":"Plot"},"ticker":{"id":"523bdc4e-f894-4673-b39e-3b9bc6253e74","type":"CategoricalTicker"}},"id":"e145a7c4-04c7-45a4-aa25-a4070e5f0d7b","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"17247155-9b23-44de-8378-72ea6068324f","type":"FactorRange"},{"attributes":{},"id":"2d020315-69ba-454d-b65e-948c12fc120b","type":"CategoricalScale"},{"attributes":{},"id":"b919a0ec-27cf-41dc-b8df-568c767ee1e0","type":"LinearScale"},{"attributes":{},"id":"e2f1145e-4062-4bb5-92e8-47aff6eac18f","type":"CategoricalTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9f98bbc8-fbfb-406a-a298-126d1206b7ae","type":"Toolbar"},{"attributes":{"callback":null,"start":0},"id":"c6a4d62a-0707-4f0e-af14-9e4c5d0ab3eb","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"e75e5153-d4e4-43da-9b0c-fcc9e772519c","type":"VBar"},{"attributes":{"formatter":{"id":"adbdc13f-6597-44d4-a9f5-171b8fc1370b","type":"BasicTickFormatter"},"plot":{"id":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28","subtype":"Figure","type":"Plot"},"ticker":{"id":"61148c48-c6cc-40f8-8d7e-4dc933409d76","type":"BasicTicker"}},"id":"baa433cb-64b7-44b1-bc98-a7ae4336b673","type":"LinearAxis"},{"attributes":{},"id":"adbdc13f-6597-44d4-a9f5-171b8fc1370b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","origin_count","origin_mean","origin_std","origin_min","origin_25%","origin_50%","origin_75%","origin_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","yr_count","yr_mean","yr_std","yr_min","yr_25%","yr_50%","yr_75%","yr_max","cyl"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkCamZmZmZktQGZmZmZm5jFAmpmZmZkZLkAAAAAAAAAnQA==","dtype":"float64","shape":[5]},"accel_50%":{"__ndarray__":"AAAAAAAAK0AzMzMzMzMwQGZmZmZm5jNAAAAAAAAAMEAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"accel_75%":{"__ndarray__":"AAAAAAAAK0AAAAAAAAAyQAAAAAAAADRAmpmZmZmZMUAAAAAAAAAsQA==","dtype":"float64","shape":[5]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"accel_max":{"__ndarray__":"AAAAAAAAK0DNzMzMzMw4QJqZmZmZGTRAAAAAAAAANUAzMzMzMzM2QA==","dtype":"float64","shape":[5]},"accel_mean":{"__ndarray__":"AAAAAACAKkCRxCwG+JQwQCIiIiIiojJA7d9LWxRBMEA+LI1MIukpQA==","dtype":"float64","shape":[5]},"accel_min":{"__ndarray__":"AAAAAAAAKUAzMzMzMzMnQM3MzMzMzC9AmpmZmZmZJkAAAAAAAAAgQA==","dtype":"float64","shape":[5]},"accel_std":{"__ndarray__":"AAAAAAAA4D+b1TA5wxADQO1jrP039AJA0StM4BRBAED/ZpysTswBQA==","dtype":"float64","shape":[5]},"cyl":["3","4","5","6","8"],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAAMBWQAAAAAAAgF9AAAAAAADwaEAAAAAAABBzQA==","dtype":"float64","shape":[5]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAEBaQAAAAAAAYGBAAAAAAADgbEAAAAAAAOB1QA==","dtype":"float64","shape":[5]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAEBeQAAAAAAAoGNAAAAAAABAb0AAAAAAAIB2QA==","dtype":"float64","shape":[5]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBjQAAAAAAA4GZAAAAAAABgcEAAAAAAAHB8QA==","dtype":"float64","shape":[5]},"displ_mean":{"__ndarray__":"AAAAAAAgUkD/9sBG72pbQAAAAAAAIGJAmjq/9pBLa0DJeVnEJ5B1QA==","dtype":"float64","shape":[5]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAABRQAAAAAAAQF5AAAAAAAAgYkAAAAAAAEBwQA==","dtype":"float64","shape":[5]},"displ_std":{"__ndarray__":"AAAAAAAAFEC8furRdmA1QLmT4WuwpEBAT4BvAbA2QEDXs8ZGYGNHQA==","dtype":"float64","shape":[5]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAABRQAAAAAAAAFJAAAAAAAAgV0AAAAAAAIBhQA==","dtype":"float64","shape":[5]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAIBTQAAAAAAAQFNAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAABWQAAAAAAAgFZAAAAAAACAW0AAAAAAAOBlQA==","dtype":"float64","shape":[5]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAMBcQAAAAAAAwFlAAAAAAACgZEAAAAAAAMBsQA==","dtype":"float64","shape":[5]},"hp_mean":{"__ndarray__":"AAAAAADQWEB2PKeSApJTQFVVVVVVlVRAsD3ksmJgWUDCfquNocljQA==","dtype":"float64","shape":[5]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABHQAAAAAAAwFBAAAAAAAAAUkAAAAAAAIBWQA==","dtype":"float64","shape":[5]},"hp_std":{"__ndarray__":"sTIWI2yaIECGr0Go0wstQDKsjxZJlTJAxZAwIvaeLEBQwZb3G3Q8QA==","dtype":"float64","shape":[5]},"mpg_25%":{"__ndarray__":"AAAAAADAMkAAAAAAAAA5QJqZmZmZ2TZAAAAAAAAAMkAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"mpg_50%":{"__ndarray__":"AAAAAABANEBmZmZmZmY8QGZmZmZmZjlAAAAAAAAAM0AAAAAAAAAsQA==","dtype":"float64","shape":[5]},"mpg_75%":{"__ndarray__":"zczMzMwMNkCamZmZmXlAQGZmZmZm5j5AAAAAAAAANUAAAAAAAAAwQA==","dtype":"float64","shape":[5]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"mpg_max":{"__ndarray__":"MzMzMzOzN0DNzMzMzExHQDMzMzMzM0JAAAAAAAAAQ0CamZmZmZk6QA==","dtype":"float64","shape":[5]},"mpg_mean":{"__ndarray__":"zczMzMyMNEBwD2z0rkg9QN3d3d3dXTtA6lu15jb5M0BgwH9VHO0tQA==","dtype":"float64","shape":[5]},"mpg_min":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAyQM3MzMzMTDRAAAAAAAAALkAAAAAAAAAiQA==","dtype":"float64","shape":[5]},"mpg_std":{"__ndarray__":"ca9eOxmEBECNLXOmo64WQOWG1RfXdCBALURKf2ahDkC0cW7BtbAGQA==","dtype":"float64","shape":[5]},"origin_25%":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_50%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_75%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"origin_max":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAACEAAAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_mean":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAdX7tIZcV8z8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_min":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_std":{"__ndarray__":"AAAAAAAAAACo00pJEbfqPwAAAAAAAAAAPS9VpaOj4T8AAAAAAAAAAA==","dtype":"float64","shape":[5]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAAP6fQAAAAAAAlKZAAAAAAAACp0AAAAAAAK6tQA==","dtype":"float64","shape":[5]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAAGyhQAAAAAAADKdAAAAAAAAUqUAAAAAAACywQA==","dtype":"float64","shape":[5]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAAAWkQAAAAAAAUKlAAAAAAADOqkAAAAAAgDOxQA==","dtype":"float64","shape":[5]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAIypQAAAAAAAlKtAAAAAAACGrkAAAAAAABS0QA==","dtype":"float64","shape":[5]},"weight_mean":{"__ndarray__":"AAAAAAC9okAsMl+aOAKiQKuqqqqqPqhAjqbOrz0EqUBD0x3stxKwQA==","dtype":"float64","shape":[5]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAADSZQAAAAAAAHKZAAAAAAABQo0AAAAAAAByoQA==","dtype":"float64","shape":[5]},"weight_std":{"__ndarray__":"udhs7B3ybkC6+VSg9G11QA9pSX6AZXdAdmeNgiLGdEC+UR6eVA18QA==","dtype":"float64","shape":[5]},"yr_25%":{"__ndarray__":"AAAAAAAwUkAAAAAAAIBSQAAAAAAAoFNAAAAAAACAUkAAAAAAAABSQA==","dtype":"float64","shape":[5]},"yr_50%":{"__ndarray__":"AAAAAADAUkAAAAAAAEBTQAAAAAAAwFNAAAAAAAAAU0AAAAAAAEBSQA==","dtype":"float64","shape":[5]},"yr_75%":{"__ndarray__":"AAAAAABwU0AAAAAAAABUQAAAAAAA4FNAAAAAAACAU0AAAAAAAABTQA==","dtype":"float64","shape":[5]},"yr_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"yr_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBUQAAAAAAAAFRAAAAAAACAVEAAAAAAAEBUQA==","dtype":"float64","shape":[5]},"yr_mean":{"__ndarray__":"AAAAAADgUkDEWG397UFTQAAAAAAAwFNAghLeaOr8UkCL+ARSyXlSQA==","dtype":"float64","shape":[5]},"yr_min":{"__ndarray__":"AAAAAAAAUkAAAAAAAIBRQAAAAAAAgFNAAAAAAACAUUAAAAAAAIBRQA==","dtype":"float64","shape":[5]},"yr_std":{"__ndarray__":"p1MQvCOTDUAd5PLGXeYNQAAAAAAAAPA/p0OY+nMdCkAEv1x2cisIQA==","dtype":"float64","shape":[5]}}},"id":"86df26e1-8131-4333-8879-a90fb7257eec","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"86df26e1-8131-4333-8879-a90fb7257eec","type":"ColumnDataSource"},"glyph":{"id":"9ad78569-88c0-4d6e-806c-7c192c3dc858","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e75e5153-d4e4-43da-9b0c-fcc9e772519c","type":"VBar"},"selection_glyph":null,"view":{"id":"ad95a8db-d9b9-4757-bd61-dfe41b2d2c97","type":"CDSView"}},"id":"56766be2-1820-4c02-883a-c7fd4881ca05","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"cyl","transform":{"id":"30b6c8cb-8988-4acf-86cb-9e4881637dc2","type":"CategoricalColorMapper"}},"line_color":{"field":"cyl","transform":{"id":"30b6c8cb-8988-4acf-86cb-9e4881637dc2","type":"CategoricalColorMapper"}},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"9ad78569-88c0-4d6e-806c-7c192c3dc858","type":"VBar"},{"attributes":{"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"30b6c8cb-8988-4acf-86cb-9e4881637dc2","type":"CategoricalColorMapper"},{"attributes":{"source":{"id":"86df26e1-8131-4333-8879-a90fb7257eec","type":"ColumnDataSource"}},"id":"ad95a8db-d9b9-4757-bd61-dfe41b2d2c97","type":"CDSView"}],"root_ids":["1f08cb39-3bf8-4c7c-b15b-bff546ec4d28"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"a1092ecb-3535-42c1-a6ac-b4a697d02039","elementid":"65d15124-6ca6-4c83-b15b-46c453096b3b","modelid":"1f08cb39-3bf8-4c7c-b15b-bff546ec4d28"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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
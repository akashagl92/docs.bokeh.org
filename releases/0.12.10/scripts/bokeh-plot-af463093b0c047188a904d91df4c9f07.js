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
      };var element = document.getElementById("d33763ea-7d9f-42d8-8e95-6cfe196d63df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd33763ea-7d9f-42d8-8e95-6cfe196d63df' but no matching script tag was found. ")
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
                    var docs_json = {"39ac48a7-49f8-4bd1-8978-f6dced9cf8e1":{"roots":{"references":[{"attributes":{},"id":"587bb606-b5cc-40f5-8f24-317e4de3a86d","type":"LinearScale"},{"attributes":{},"id":"2c30d59c-2747-4aa9-a537-9dda888b39ef","type":"CategoricalScale"},{"attributes":{"dimension":1,"plot":{"id":"e5997e01-7751-4683-b938-3ae7d5f9c942","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed1bc389-38c3-4a5e-b486-4609e8b00e15","type":"BasicTicker"}},"id":"3c27b3a1-d405-4f1e-baad-d70c4ae4517b","type":"Grid"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"77e21be5-6c78-4d2d-9f44-1c96d774afa8","type":"FactorRange"},{"attributes":{"plot":null,"text":"MPG by # Cylinders"},"id":"cc0e8103-db8d-4504-b627-4d49808ddb19","type":"Title"},{"attributes":{"axis_label":"some stuff","formatter":{"id":"f9896fa7-140a-4c25-8136-6a51886aef2c","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"e5997e01-7751-4683-b938-3ae7d5f9c942","subtype":"Figure","type":"Plot"},"ticker":{"id":"efbeff45-4400-4f44-83f5-66828d7c929d","type":"CategoricalTicker"}},"id":"d12a9528-b6bd-4cf4-8b58-9567dde5d861","type":"CategoricalAxis"},{"attributes":{"source":{"id":"dd92a875-d5b0-413d-a9c2-3819f657071c","type":"ColumnDataSource"}},"id":"32842dfa-4ce0-4587-8511-f14f6cf41e8e","type":"CDSView"},{"attributes":{"data_source":{"id":"dd92a875-d5b0-413d-a9c2-3819f657071c","type":"ColumnDataSource"},"glyph":{"id":"c858b735-23e4-4d5e-8ec5-ba16ea3263b0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cdfd4ebd-a19a-4077-8e0d-d77b8357a9bb","type":"VBar"},"selection_glyph":null,"view":{"id":"32842dfa-4ce0-4587-8511-f14f6cf41e8e","type":"CDSView"}},"id":"ab6f5d26-165b-4b4d-b0e2-386f6bd04412","type":"GlyphRenderer"},{"attributes":{},"id":"f9896fa7-140a-4c25-8136-6a51886aef2c","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"cdfd4ebd-a19a-4077-8e0d-d77b8357a9bb","type":"VBar"},{"attributes":{"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"0d60c84f-0679-40c8-a0e6-fb4a61ca315c","type":"CategoricalColorMapper"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","origin_count","origin_mean","origin_std","origin_min","origin_25%","origin_50%","origin_75%","origin_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","yr_count","yr_mean","yr_std","yr_min","yr_25%","yr_50%","yr_75%","yr_max","cyl"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkCamZmZmZktQGZmZmZm5jFAmpmZmZkZLkAAAAAAAAAnQA==","dtype":"float64","shape":[5]},"accel_50%":{"__ndarray__":"AAAAAAAAK0AzMzMzMzMwQGZmZmZm5jNAAAAAAAAAMEAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"accel_75%":{"__ndarray__":"AAAAAAAAK0AAAAAAAAAyQAAAAAAAADRAmpmZmZmZMUAAAAAAAAAsQA==","dtype":"float64","shape":[5]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"accel_max":{"__ndarray__":"AAAAAAAAK0DNzMzMzMw4QJqZmZmZGTRAAAAAAAAANUAzMzMzMzM2QA==","dtype":"float64","shape":[5]},"accel_mean":{"__ndarray__":"AAAAAACAKkCRxCwG+JQwQCIiIiIiojJA7d9LWxRBMEA+LI1MIukpQA==","dtype":"float64","shape":[5]},"accel_min":{"__ndarray__":"AAAAAAAAKUAzMzMzMzMnQM3MzMzMzC9AmpmZmZmZJkAAAAAAAAAgQA==","dtype":"float64","shape":[5]},"accel_std":{"__ndarray__":"AAAAAAAA4D+b1TA5wxADQO1jrP039AJA0StM4BRBAED/ZpysTswBQA==","dtype":"float64","shape":[5]},"cyl":["3","4","5","6","8"],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAAMBWQAAAAAAAgF9AAAAAAADwaEAAAAAAABBzQA==","dtype":"float64","shape":[5]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAEBaQAAAAAAAYGBAAAAAAADgbEAAAAAAAOB1QA==","dtype":"float64","shape":[5]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAEBeQAAAAAAAoGNAAAAAAABAb0AAAAAAAIB2QA==","dtype":"float64","shape":[5]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBjQAAAAAAA4GZAAAAAAABgcEAAAAAAAHB8QA==","dtype":"float64","shape":[5]},"displ_mean":{"__ndarray__":"AAAAAAAgUkD/9sBG72pbQAAAAAAAIGJAmjq/9pBLa0DJeVnEJ5B1QA==","dtype":"float64","shape":[5]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAABRQAAAAAAAQF5AAAAAAAAgYkAAAAAAAEBwQA==","dtype":"float64","shape":[5]},"displ_std":{"__ndarray__":"AAAAAAAAFEC8furRdmA1QLmT4WuwpEBAT4BvAbA2QEDXs8ZGYGNHQA==","dtype":"float64","shape":[5]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAABRQAAAAAAAAFJAAAAAAAAgV0AAAAAAAIBhQA==","dtype":"float64","shape":[5]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAIBTQAAAAAAAQFNAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAABWQAAAAAAAgFZAAAAAAACAW0AAAAAAAOBlQA==","dtype":"float64","shape":[5]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAMBcQAAAAAAAwFlAAAAAAACgZEAAAAAAAMBsQA==","dtype":"float64","shape":[5]},"hp_mean":{"__ndarray__":"AAAAAADQWEB2PKeSApJTQFVVVVVVlVRAsD3ksmJgWUDCfquNocljQA==","dtype":"float64","shape":[5]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABHQAAAAAAAwFBAAAAAAAAAUkAAAAAAAIBWQA==","dtype":"float64","shape":[5]},"hp_std":{"__ndarray__":"sTIWI2yaIECGr0Go0wstQDKsjxZJlTJAxZAwIvaeLEBQwZb3G3Q8QA==","dtype":"float64","shape":[5]},"mpg_25%":{"__ndarray__":"AAAAAADAMkAAAAAAAAA5QJqZmZmZ2TZAAAAAAAAAMkAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"mpg_50%":{"__ndarray__":"AAAAAABANEBmZmZmZmY8QGZmZmZmZjlAAAAAAAAAM0AAAAAAAAAsQA==","dtype":"float64","shape":[5]},"mpg_75%":{"__ndarray__":"zczMzMwMNkCamZmZmXlAQGZmZmZm5j5AAAAAAAAANUAAAAAAAAAwQA==","dtype":"float64","shape":[5]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"mpg_max":{"__ndarray__":"MzMzMzOzN0DNzMzMzExHQDMzMzMzM0JAAAAAAAAAQ0CamZmZmZk6QA==","dtype":"float64","shape":[5]},"mpg_mean":{"__ndarray__":"zczMzMyMNEBwD2z0rkg9QN3d3d3dXTtA6lu15jb5M0BgwH9VHO0tQA==","dtype":"float64","shape":[5]},"mpg_min":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAyQM3MzMzMTDRAAAAAAAAALkAAAAAAAAAiQA==","dtype":"float64","shape":[5]},"mpg_std":{"__ndarray__":"ca9eOxmEBECNLXOmo64WQOWG1RfXdCBALURKf2ahDkC0cW7BtbAGQA==","dtype":"float64","shape":[5]},"origin_25%":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_50%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_75%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"origin_max":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAACEAAAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_mean":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAdX7tIZcV8z8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_min":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_std":{"__ndarray__":"AAAAAAAAAACo00pJEbfqPwAAAAAAAAAAPS9VpaOj4T8AAAAAAAAAAA==","dtype":"float64","shape":[5]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAAP6fQAAAAAAAlKZAAAAAAAACp0AAAAAAAK6tQA==","dtype":"float64","shape":[5]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAAGyhQAAAAAAADKdAAAAAAAAUqUAAAAAAACywQA==","dtype":"float64","shape":[5]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAAAWkQAAAAAAAUKlAAAAAAADOqkAAAAAAgDOxQA==","dtype":"float64","shape":[5]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAIypQAAAAAAAlKtAAAAAAACGrkAAAAAAABS0QA==","dtype":"float64","shape":[5]},"weight_mean":{"__ndarray__":"AAAAAAC9okAsMl+aOAKiQKuqqqqqPqhAjqbOrz0EqUBD0x3stxKwQA==","dtype":"float64","shape":[5]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAADSZQAAAAAAAHKZAAAAAAABQo0AAAAAAAByoQA==","dtype":"float64","shape":[5]},"weight_std":{"__ndarray__":"udhs7B3ybkC6+VSg9G11QA9pSX6AZXdAdmeNgiLGdEC+UR6eVA18QA==","dtype":"float64","shape":[5]},"yr_25%":{"__ndarray__":"AAAAAAAwUkAAAAAAAIBSQAAAAAAAoFNAAAAAAACAUkAAAAAAAABSQA==","dtype":"float64","shape":[5]},"yr_50%":{"__ndarray__":"AAAAAADAUkAAAAAAAEBTQAAAAAAAwFNAAAAAAAAAU0AAAAAAAEBSQA==","dtype":"float64","shape":[5]},"yr_75%":{"__ndarray__":"AAAAAABwU0AAAAAAAABUQAAAAAAA4FNAAAAAAACAU0AAAAAAAABTQA==","dtype":"float64","shape":[5]},"yr_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"yr_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBUQAAAAAAAAFRAAAAAAACAVEAAAAAAAEBUQA==","dtype":"float64","shape":[5]},"yr_mean":{"__ndarray__":"AAAAAADgUkDEWG397UFTQAAAAAAAwFNAghLeaOr8UkCL+ARSyXlSQA==","dtype":"float64","shape":[5]},"yr_min":{"__ndarray__":"AAAAAAAAUkAAAAAAAIBRQAAAAAAAgFNAAAAAAACAUUAAAAAAAIBRQA==","dtype":"float64","shape":[5]},"yr_std":{"__ndarray__":"p1MQvCOTDUAd5PLGXeYNQAAAAAAAAPA/p0OY+nMdCkAEv1x2cisIQA==","dtype":"float64","shape":[5]}}},"id":"dd92a875-d5b0-413d-a9c2-3819f657071c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"05421e64-9762-4186-b587-80c323c6c713","type":"Toolbar"},{"attributes":{"fill_color":{"field":"cyl","transform":{"id":"0d60c84f-0679-40c8-a0e6-fb4a61ca315c","type":"CategoricalColorMapper"}},"line_color":{"field":"cyl","transform":{"id":"0d60c84f-0679-40c8-a0e6-fb4a61ca315c","type":"CategoricalColorMapper"}},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"c858b735-23e4-4d5e-8ec5-ba16ea3263b0","type":"VBar"},{"attributes":{"formatter":{"id":"880e04ea-8e99-47f2-a971-8c4fdcb6b060","type":"BasicTickFormatter"},"plot":{"id":"e5997e01-7751-4683-b938-3ae7d5f9c942","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed1bc389-38c3-4a5e-b486-4609e8b00e15","type":"BasicTicker"}},"id":"3776336c-aa21-436e-99c3-116b65159f4e","type":"LinearAxis"},{"attributes":{},"id":"efbeff45-4400-4f44-83f5-66828d7c929d","type":"CategoricalTicker"},{"attributes":{},"id":"ed1bc389-38c3-4a5e-b486-4609e8b00e15","type":"BasicTicker"},{"attributes":{"below":[{"id":"d12a9528-b6bd-4cf4-8b58-9567dde5d861","type":"CategoricalAxis"}],"left":[{"id":"3776336c-aa21-436e-99c3-116b65159f4e","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"d12a9528-b6bd-4cf4-8b58-9567dde5d861","type":"CategoricalAxis"},{"id":"0f5a989f-ad44-46bd-9614-068bfd0ee3b9","type":"Grid"},{"id":"3776336c-aa21-436e-99c3-116b65159f4e","type":"LinearAxis"},{"id":"3c27b3a1-d405-4f1e-baad-d70c4ae4517b","type":"Grid"},{"id":"ab6f5d26-165b-4b4d-b0e2-386f6bd04412","type":"GlyphRenderer"}],"title":{"id":"cc0e8103-db8d-4504-b627-4d49808ddb19","type":"Title"},"toolbar":{"id":"05421e64-9762-4186-b587-80c323c6c713","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"77e21be5-6c78-4d2d-9f44-1c96d774afa8","type":"FactorRange"},"x_scale":{"id":"2c30d59c-2747-4aa9-a537-9dda888b39ef","type":"CategoricalScale"},"y_range":{"id":"8ba7f7c3-fef5-47d6-a1ee-c07faea9b378","type":"DataRange1d"},"y_scale":{"id":"587bb606-b5cc-40f5-8f24-317e4de3a86d","type":"LinearScale"}},"id":"e5997e01-7751-4683-b938-3ae7d5f9c942","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"880e04ea-8e99-47f2-a971-8c4fdcb6b060","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"8ba7f7c3-fef5-47d6-a1ee-c07faea9b378","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"e5997e01-7751-4683-b938-3ae7d5f9c942","subtype":"Figure","type":"Plot"},"ticker":{"id":"efbeff45-4400-4f44-83f5-66828d7c929d","type":"CategoricalTicker"}},"id":"0f5a989f-ad44-46bd-9614-068bfd0ee3b9","type":"Grid"}],"root_ids":["e5997e01-7751-4683-b938-3ae7d5f9c942"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"39ac48a7-49f8-4bd1-8978-f6dced9cf8e1","elementid":"d33763ea-7d9f-42d8-8e95-6cfe196d63df","modelid":"e5997e01-7751-4683-b938-3ae7d5f9c942"}];
                
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
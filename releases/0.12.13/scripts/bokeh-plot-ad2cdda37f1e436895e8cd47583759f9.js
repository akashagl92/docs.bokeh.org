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
      };var element = document.getElementById("ef56a9d4-7a4d-468a-8d31-19b5f27e3ac9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef56a9d4-7a4d-468a-8d31-19b5f27e3ac9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.13.min.js"];
    
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
                    
                  var docs_json = '{"87d9f058-3396-4e84-95eb-d7a7874ccc61":{"roots":{"references":[{"attributes":{"axis_label":"some stuff","formatter":{"id":"b9c5fa37-df57-437c-a78a-f3da84ee68af","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"a9d4a89e-441e-48e6-ba36-7bf914d48be1","subtype":"Figure","type":"Plot"},"ticker":{"id":"29cbdf01-46f4-4fc1-a3fb-9badd1b47165","type":"CategoricalTicker"}},"id":"a79aee85-25d1-4ad1-a08c-2712149b17b3","type":"CategoricalAxis"},{"attributes":{},"id":"a36481f1-ba80-44cc-9e0d-120b8132f4f3","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"0e87be05-696a-4913-87ef-b59af7568109","type":"FactorRange"},{"attributes":{"fill_color":{"field":"cyl","transform":{"id":"fed4dc5a-0574-41c8-b81d-a18a48988e07","type":"CategoricalColorMapper"}},"line_color":{"field":"cyl","transform":{"id":"fed4dc5a-0574-41c8-b81d-a18a48988e07","type":"CategoricalColorMapper"}},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"ba36c5d4-8069-49d4-90a6-2590f6312b23","type":"VBar"},{"attributes":{},"id":"29cbdf01-46f4-4fc1-a3fb-9badd1b47165","type":"CategoricalTicker"},{"attributes":{"source":{"id":"2c78909a-7499-49bb-9240-758bb01071c7","type":"ColumnDataSource"}},"id":"2c3ebcd8-ec38-4722-802f-7a710c1a4172","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"a9d4a89e-441e-48e6-ba36-7bf914d48be1","subtype":"Figure","type":"Plot"},"ticker":{"id":"29cbdf01-46f4-4fc1-a3fb-9badd1b47165","type":"CategoricalTicker"}},"id":"82bbec77-200c-454c-8a83-949882eb9a36","type":"Grid"},{"attributes":{},"id":"30ff9d62-38b5-421e-a0b7-b1849d63cffd","type":"BasicTicker"},{"attributes":{},"id":"082f4f64-3ca3-43b1-999f-a44f90767b74","type":"CategoricalScale"},{"attributes":{},"id":"b9c5fa37-df57-437c-a78a-f3da84ee68af","type":"CategoricalTickFormatter"},{"attributes":{},"id":"78df8ef5-5c64-46b9-a2b1-8487d37fef6e","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"dbb63510-a16d-4fdd-ae6e-f0838cfd9ba1","type":"Toolbar"},{"attributes":{"formatter":{"id":"a36481f1-ba80-44cc-9e0d-120b8132f4f3","type":"BasicTickFormatter"},"plot":{"id":"a9d4a89e-441e-48e6-ba36-7bf914d48be1","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ff9d62-38b5-421e-a0b7-b1849d63cffd","type":"BasicTicker"}},"id":"2873499b-d3c2-442b-9a83-5f9f5a90c4a6","type":"LinearAxis"},{"attributes":{"callback":null,"start":0},"id":"8708b559-35d0-40eb-8af3-724e7c37f270","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"c4383de1-c590-4a7b-ab5f-ecf9abe2ca76","type":"VBar"},{"attributes":{"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"fed4dc5a-0574-41c8-b81d-a18a48988e07","type":"CategoricalColorMapper"},{"attributes":{"plot":null,"text":"MPG by # Cylinders"},"id":"07799721-b902-4afe-8089-7641df04e066","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"a9d4a89e-441e-48e6-ba36-7bf914d48be1","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ff9d62-38b5-421e-a0b7-b1849d63cffd","type":"BasicTicker"}},"id":"6ba730ea-5f5f-4a67-9592-b534b5ec089d","type":"Grid"},{"attributes":{"data_source":{"id":"2c78909a-7499-49bb-9240-758bb01071c7","type":"ColumnDataSource"},"glyph":{"id":"ba36c5d4-8069-49d4-90a6-2590f6312b23","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c4383de1-c590-4a7b-ab5f-ecf9abe2ca76","type":"VBar"},"selection_glyph":null,"view":{"id":"2c3ebcd8-ec38-4722-802f-7a710c1a4172","type":"CDSView"}},"id":"4cd34325-fc7b-404d-8876-317168e7181c","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a79aee85-25d1-4ad1-a08c-2712149b17b3","type":"CategoricalAxis"}],"left":[{"id":"2873499b-d3c2-442b-9a83-5f9f5a90c4a6","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"a79aee85-25d1-4ad1-a08c-2712149b17b3","type":"CategoricalAxis"},{"id":"82bbec77-200c-454c-8a83-949882eb9a36","type":"Grid"},{"id":"2873499b-d3c2-442b-9a83-5f9f5a90c4a6","type":"LinearAxis"},{"id":"6ba730ea-5f5f-4a67-9592-b534b5ec089d","type":"Grid"},{"id":"4cd34325-fc7b-404d-8876-317168e7181c","type":"GlyphRenderer"}],"title":{"id":"07799721-b902-4afe-8089-7641df04e066","type":"Title"},"toolbar":{"id":"dbb63510-a16d-4fdd-ae6e-f0838cfd9ba1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0e87be05-696a-4913-87ef-b59af7568109","type":"FactorRange"},"x_scale":{"id":"082f4f64-3ca3-43b1-999f-a44f90767b74","type":"CategoricalScale"},"y_range":{"id":"8708b559-35d0-40eb-8af3-724e7c37f270","type":"DataRange1d"},"y_scale":{"id":"78df8ef5-5c64-46b9-a2b1-8487d37fef6e","type":"LinearScale"}},"id":"a9d4a89e-441e-48e6-ba36-7bf914d48be1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","origin_count","origin_mean","origin_std","origin_min","origin_25%","origin_50%","origin_75%","origin_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","yr_count","yr_mean","yr_std","yr_min","yr_25%","yr_50%","yr_75%","yr_max","cyl"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkCamZmZmZktQGZmZmZm5jFAmpmZmZkZLkAAAAAAAAAnQA==","dtype":"float64","shape":[5]},"accel_50%":{"__ndarray__":"AAAAAAAAK0AzMzMzMzMwQGZmZmZm5jNAAAAAAAAAMEAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"accel_75%":{"__ndarray__":"AAAAAAAAK0AAAAAAAAAyQAAAAAAAADRAmpmZmZmZMUAAAAAAAAAsQA==","dtype":"float64","shape":[5]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"accel_max":{"__ndarray__":"AAAAAAAAK0DNzMzMzMw4QJqZmZmZGTRAAAAAAAAANUAzMzMzMzM2QA==","dtype":"float64","shape":[5]},"accel_mean":{"__ndarray__":"AAAAAACAKkCRxCwG+JQwQCIiIiIiojJA7d9LWxRBMEA+LI1MIukpQA==","dtype":"float64","shape":[5]},"accel_min":{"__ndarray__":"AAAAAAAAKUAzMzMzMzMnQM3MzMzMzC9AmpmZmZmZJkAAAAAAAAAgQA==","dtype":"float64","shape":[5]},"accel_std":{"__ndarray__":"AAAAAAAA4D+b1TA5wxADQO1jrP039AJA0StM4BRBAED/ZpysTswBQA==","dtype":"float64","shape":[5]},"cyl":["3","4","5","6","8"],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAAMBWQAAAAAAAgF9AAAAAAADwaEAAAAAAABBzQA==","dtype":"float64","shape":[5]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAEBaQAAAAAAAYGBAAAAAAADgbEAAAAAAAOB1QA==","dtype":"float64","shape":[5]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAEBeQAAAAAAAoGNAAAAAAABAb0AAAAAAAIB2QA==","dtype":"float64","shape":[5]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBjQAAAAAAA4GZAAAAAAABgcEAAAAAAAHB8QA==","dtype":"float64","shape":[5]},"displ_mean":{"__ndarray__":"AAAAAAAgUkD/9sBG72pbQAAAAAAAIGJAmjq/9pBLa0DJeVnEJ5B1QA==","dtype":"float64","shape":[5]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAABRQAAAAAAAQF5AAAAAAAAgYkAAAAAAAEBwQA==","dtype":"float64","shape":[5]},"displ_std":{"__ndarray__":"AAAAAAAAFEC8furRdmA1QLmT4WuwpEBAT4BvAbA2QEDXs8ZGYGNHQA==","dtype":"float64","shape":[5]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAABRQAAAAAAAAFJAAAAAAAAgV0AAAAAAAIBhQA==","dtype":"float64","shape":[5]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAIBTQAAAAAAAQFNAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAABWQAAAAAAAgFZAAAAAAACAW0AAAAAAAOBlQA==","dtype":"float64","shape":[5]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAMBcQAAAAAAAwFlAAAAAAACgZEAAAAAAAMBsQA==","dtype":"float64","shape":[5]},"hp_mean":{"__ndarray__":"AAAAAADQWEB2PKeSApJTQFVVVVVVlVRAsD3ksmJgWUDCfquNocljQA==","dtype":"float64","shape":[5]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABHQAAAAAAAwFBAAAAAAAAAUkAAAAAAAIBWQA==","dtype":"float64","shape":[5]},"hp_std":{"__ndarray__":"sTIWI2yaIECGr0Go0wstQDKsjxZJlTJAxZAwIvaeLEBQwZb3G3Q8QA==","dtype":"float64","shape":[5]},"mpg_25%":{"__ndarray__":"AAAAAADAMkAAAAAAAAA5QJqZmZmZ2TZAAAAAAAAAMkAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"mpg_50%":{"__ndarray__":"AAAAAABANEBmZmZmZmY8QGZmZmZmZjlAAAAAAAAAM0AAAAAAAAAsQA==","dtype":"float64","shape":[5]},"mpg_75%":{"__ndarray__":"zczMzMwMNkCamZmZmXlAQGZmZmZm5j5AAAAAAAAANUAAAAAAAAAwQA==","dtype":"float64","shape":[5]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"mpg_max":{"__ndarray__":"MzMzMzOzN0DNzMzMzExHQDMzMzMzM0JAAAAAAAAAQ0CamZmZmZk6QA==","dtype":"float64","shape":[5]},"mpg_mean":{"__ndarray__":"zczMzMyMNEBwD2z0rkg9QN3d3d3dXTtA6lu15jb5M0BgwH9VHO0tQA==","dtype":"float64","shape":[5]},"mpg_min":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAyQM3MzMzMTDRAAAAAAAAALkAAAAAAAAAiQA==","dtype":"float64","shape":[5]},"mpg_std":{"__ndarray__":"ca9eOxmEBECNLXOmo64WQOWG1RfXdCBALURKf2ahDkC0cW7BtbAGQA==","dtype":"float64","shape":[5]},"origin_25%":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_50%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_75%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"origin_max":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAACEAAAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_mean":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAdX7tIZcV8z8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_min":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_std":{"__ndarray__":"AAAAAAAAAACo00pJEbfqPwAAAAAAAAAAPS9VpaOj4T8AAAAAAAAAAA==","dtype":"float64","shape":[5]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAAP6fQAAAAAAAlKZAAAAAAAACp0AAAAAAAK6tQA==","dtype":"float64","shape":[5]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAAGyhQAAAAAAADKdAAAAAAAAUqUAAAAAAACywQA==","dtype":"float64","shape":[5]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAAAWkQAAAAAAAUKlAAAAAAADOqkAAAAAAgDOxQA==","dtype":"float64","shape":[5]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAIypQAAAAAAAlKtAAAAAAACGrkAAAAAAABS0QA==","dtype":"float64","shape":[5]},"weight_mean":{"__ndarray__":"AAAAAAC9okAsMl+aOAKiQKuqqqqqPqhAjqbOrz0EqUBD0x3stxKwQA==","dtype":"float64","shape":[5]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAADSZQAAAAAAAHKZAAAAAAABQo0AAAAAAAByoQA==","dtype":"float64","shape":[5]},"weight_std":{"__ndarray__":"udhs7B3ybkC6+VSg9G11QA9pSX6AZXdAdmeNgiLGdEC+UR6eVA18QA==","dtype":"float64","shape":[5]},"yr_25%":{"__ndarray__":"AAAAAAAwUkAAAAAAAIBSQAAAAAAAoFNAAAAAAACAUkAAAAAAAABSQA==","dtype":"float64","shape":[5]},"yr_50%":{"__ndarray__":"AAAAAADAUkAAAAAAAEBTQAAAAAAAwFNAAAAAAAAAU0AAAAAAAEBSQA==","dtype":"float64","shape":[5]},"yr_75%":{"__ndarray__":"AAAAAABwU0AAAAAAAABUQAAAAAAA4FNAAAAAAACAU0AAAAAAAABTQA==","dtype":"float64","shape":[5]},"yr_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"yr_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBUQAAAAAAAAFRAAAAAAACAVEAAAAAAAEBUQA==","dtype":"float64","shape":[5]},"yr_mean":{"__ndarray__":"AAAAAADgUkDEWG397UFTQAAAAAAAwFNAghLeaOr8UkCL+ARSyXlSQA==","dtype":"float64","shape":[5]},"yr_min":{"__ndarray__":"AAAAAAAAUkAAAAAAAIBRQAAAAAAAgFNAAAAAAACAUUAAAAAAAIBRQA==","dtype":"float64","shape":[5]},"yr_std":{"__ndarray__":"p1MQvCOTDUAd5PLGXeYNQAAAAAAAAPA/p0OY+nMdCkAEv1x2cisIQA==","dtype":"float64","shape":[5]}}},"id":"2c78909a-7499-49bb-9240-758bb01071c7","type":"ColumnDataSource"}],"root_ids":["a9d4a89e-441e-48e6-ba36-7bf914d48be1"]},"title":"Bokeh Application","version":"0.12.13"}}';
                  var render_items = [{"docid":"87d9f058-3396-4e84-95eb-d7a7874ccc61","elementid":"ef56a9d4-7a4d-468a-8d31-19b5f27e3ac9","modelid":"a9d4a89e-441e-48e6-ba36-7bf914d48be1"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.13.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.13.min.css");
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
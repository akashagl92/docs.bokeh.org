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
      };var element = document.getElementById("69e70821-9050-4f21-9ab2-5fb1c43448af");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69e70821-9050-4f21-9ab2-5fb1c43448af' but no matching script tag was found. ")
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
                    var docs_json = {"c69e70f3-b785-4407-9854-5198cc15dd50":{"roots":{"references":[{"attributes":{},"id":"6ecf9c2a-6d93-4a6a-ab1f-d9d3c09e8964","type":"LinearScale"},{"attributes":{},"id":"2cfd775a-aaec-47ed-ad21-bd292ec1e22c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","origin_count","origin_mean","origin_std","origin_min","origin_25%","origin_50%","origin_75%","origin_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","yr_count","yr_mean","yr_std","yr_min","yr_25%","yr_50%","yr_75%","yr_max","cyl"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkCamZmZmZktQGZmZmZm5jFAmpmZmZkZLkAAAAAAAAAnQA==","dtype":"float64","shape":[5]},"accel_50%":{"__ndarray__":"AAAAAAAAK0AzMzMzMzMwQGZmZmZm5jNAAAAAAAAAMEAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"accel_75%":{"__ndarray__":"AAAAAAAAK0AAAAAAAAAyQAAAAAAAADRAmpmZmZmZMUAAAAAAAAAsQA==","dtype":"float64","shape":[5]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"accel_max":{"__ndarray__":"AAAAAAAAK0DNzMzMzMw4QJqZmZmZGTRAAAAAAAAANUAzMzMzMzM2QA==","dtype":"float64","shape":[5]},"accel_mean":{"__ndarray__":"AAAAAACAKkCRxCwG+JQwQCIiIiIiojJA7d9LWxRBMEA+LI1MIukpQA==","dtype":"float64","shape":[5]},"accel_min":{"__ndarray__":"AAAAAAAAKUAzMzMzMzMnQM3MzMzMzC9AmpmZmZmZJkAAAAAAAAAgQA==","dtype":"float64","shape":[5]},"accel_std":{"__ndarray__":"AAAAAAAA4D+b1TA5wxADQO1jrP039AJA0StM4BRBAED/ZpysTswBQA==","dtype":"float64","shape":[5]},"cyl":["3","4","5","6","8"],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAAMBWQAAAAAAAgF9AAAAAAADwaEAAAAAAABBzQA==","dtype":"float64","shape":[5]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAEBaQAAAAAAAYGBAAAAAAADgbEAAAAAAAOB1QA==","dtype":"float64","shape":[5]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAEBeQAAAAAAAoGNAAAAAAABAb0AAAAAAAIB2QA==","dtype":"float64","shape":[5]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBjQAAAAAAA4GZAAAAAAABgcEAAAAAAAHB8QA==","dtype":"float64","shape":[5]},"displ_mean":{"__ndarray__":"AAAAAAAgUkD/9sBG72pbQAAAAAAAIGJAmjq/9pBLa0DJeVnEJ5B1QA==","dtype":"float64","shape":[5]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAABRQAAAAAAAQF5AAAAAAAAgYkAAAAAAAEBwQA==","dtype":"float64","shape":[5]},"displ_std":{"__ndarray__":"AAAAAAAAFEC8furRdmA1QLmT4WuwpEBAT4BvAbA2QEDXs8ZGYGNHQA==","dtype":"float64","shape":[5]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAABRQAAAAAAAAFJAAAAAAAAgV0AAAAAAAIBhQA==","dtype":"float64","shape":[5]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAIBTQAAAAAAAQFNAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAABWQAAAAAAAgFZAAAAAAACAW0AAAAAAAOBlQA==","dtype":"float64","shape":[5]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAMBcQAAAAAAAwFlAAAAAAACgZEAAAAAAAMBsQA==","dtype":"float64","shape":[5]},"hp_mean":{"__ndarray__":"AAAAAADQWEB2PKeSApJTQFVVVVVVlVRAsD3ksmJgWUDCfquNocljQA==","dtype":"float64","shape":[5]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABHQAAAAAAAwFBAAAAAAAAAUkAAAAAAAIBWQA==","dtype":"float64","shape":[5]},"hp_std":{"__ndarray__":"sTIWI2yaIECGr0Go0wstQDKsjxZJlTJAxZAwIvaeLEBQwZb3G3Q8QA==","dtype":"float64","shape":[5]},"mpg_25%":{"__ndarray__":"AAAAAADAMkAAAAAAAAA5QJqZmZmZ2TZAAAAAAAAAMkAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"mpg_50%":{"__ndarray__":"AAAAAABANEBmZmZmZmY8QGZmZmZmZjlAAAAAAAAAM0AAAAAAAAAsQA==","dtype":"float64","shape":[5]},"mpg_75%":{"__ndarray__":"zczMzMwMNkCamZmZmXlAQGZmZmZm5j5AAAAAAAAANUAAAAAAAAAwQA==","dtype":"float64","shape":[5]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"mpg_max":{"__ndarray__":"MzMzMzOzN0DNzMzMzExHQDMzMzMzM0JAAAAAAAAAQ0CamZmZmZk6QA==","dtype":"float64","shape":[5]},"mpg_mean":{"__ndarray__":"zczMzMyMNEBwD2z0rkg9QN3d3d3dXTtA6lu15jb5M0BgwH9VHO0tQA==","dtype":"float64","shape":[5]},"mpg_min":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAyQM3MzMzMTDRAAAAAAAAALkAAAAAAAAAiQA==","dtype":"float64","shape":[5]},"mpg_std":{"__ndarray__":"ca9eOxmEBECNLXOmo64WQOWG1RfXdCBALURKf2ahDkC0cW7BtbAGQA==","dtype":"float64","shape":[5]},"origin_25%":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_50%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_75%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"origin_max":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAACEAAAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_mean":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAdX7tIZcV8z8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_min":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_std":{"__ndarray__":"AAAAAAAAAACo00pJEbfqPwAAAAAAAAAAPS9VpaOj4T8AAAAAAAAAAA==","dtype":"float64","shape":[5]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAAP6fQAAAAAAAlKZAAAAAAAACp0AAAAAAAK6tQA==","dtype":"float64","shape":[5]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAAGyhQAAAAAAADKdAAAAAAAAUqUAAAAAAACywQA==","dtype":"float64","shape":[5]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAAAWkQAAAAAAAUKlAAAAAAADOqkAAAAAAgDOxQA==","dtype":"float64","shape":[5]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAIypQAAAAAAAlKtAAAAAAACGrkAAAAAAABS0QA==","dtype":"float64","shape":[5]},"weight_mean":{"__ndarray__":"AAAAAAC9okAsMl+aOAKiQKuqqqqqPqhAjqbOrz0EqUBD0x3stxKwQA==","dtype":"float64","shape":[5]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAADSZQAAAAAAAHKZAAAAAAABQo0AAAAAAAByoQA==","dtype":"float64","shape":[5]},"weight_std":{"__ndarray__":"udhs7B3ybkC6+VSg9G11QA9pSX6AZXdAdmeNgiLGdEC+UR6eVA18QA==","dtype":"float64","shape":[5]},"yr_25%":{"__ndarray__":"AAAAAAAwUkAAAAAAAIBSQAAAAAAAoFNAAAAAAACAUkAAAAAAAABSQA==","dtype":"float64","shape":[5]},"yr_50%":{"__ndarray__":"AAAAAADAUkAAAAAAAEBTQAAAAAAAwFNAAAAAAAAAU0AAAAAAAEBSQA==","dtype":"float64","shape":[5]},"yr_75%":{"__ndarray__":"AAAAAABwU0AAAAAAAABUQAAAAAAA4FNAAAAAAACAU0AAAAAAAABTQA==","dtype":"float64","shape":[5]},"yr_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"yr_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBUQAAAAAAAAFRAAAAAAACAVEAAAAAAAEBUQA==","dtype":"float64","shape":[5]},"yr_mean":{"__ndarray__":"AAAAAADgUkDEWG397UFTQAAAAAAAwFNAghLeaOr8UkCL+ARSyXlSQA==","dtype":"float64","shape":[5]},"yr_min":{"__ndarray__":"AAAAAAAAUkAAAAAAAIBRQAAAAAAAgFNAAAAAAACAUUAAAAAAAIBRQA==","dtype":"float64","shape":[5]},"yr_std":{"__ndarray__":"p1MQvCOTDUAd5PLGXeYNQAAAAAAAAPA/p0OY+nMdCkAEv1x2cisIQA==","dtype":"float64","shape":[5]}}},"id":"32c68be5-c337-4cb6-8a51-f682833304bb","type":"ColumnDataSource"},{"attributes":{"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"960bd38d-7d2f-4010-bc9c-cb29aae06d4e","type":"CategoricalColorMapper"},{"attributes":{"axis_label":"some stuff","formatter":{"id":"2813198b-9e6b-4b71-b39b-a0fae5e3beae","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"433113da-310e-4395-aa42-63be5618a7de","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c886463-ff71-44c1-8db2-1e3f036c7dfe","type":"CategoricalTicker"}},"id":"ae7693ec-2754-413c-b903-db7a120b6bc8","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"MPG by # Cylinders"},"id":"8b088833-9a07-4665-b6c6-8284d884b617","type":"Title"},{"attributes":{},"id":"4c886463-ff71-44c1-8db2-1e3f036c7dfe","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"32c68be5-c337-4cb6-8a51-f682833304bb","type":"ColumnDataSource"},"glyph":{"id":"1ef99e6b-885e-4023-9f84-d236ac89efdf","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2224b00a-f423-4b66-81f9-d9af7aa0e1cf","type":"VBar"},"selection_glyph":null,"view":{"id":"4e635a29-d39d-47e0-8976-7702158cb86f","type":"CDSView"}},"id":"8ad2e726-94b1-4a2c-a3ea-5e40675b4d3f","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"17896847-6196-4b82-b8fa-e1de22b3d9ef","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"433113da-310e-4395-aa42-63be5618a7de","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cfd775a-aaec-47ed-ad21-bd292ec1e22c","type":"BasicTicker"}},"id":"2defdb89-361e-4e4b-8013-31f69576fb35","type":"Grid"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"433113da-310e-4395-aa42-63be5618a7de","subtype":"Figure","type":"Plot"},"ticker":{"id":"4c886463-ff71-44c1-8db2-1e3f036c7dfe","type":"CategoricalTicker"}},"id":"0adc73b1-07b9-4a4a-b463-cbb69b4546d5","type":"Grid"},{"attributes":{"fill_color":{"field":"cyl","transform":{"id":"960bd38d-7d2f-4010-bc9c-cb29aae06d4e","type":"CategoricalColorMapper"}},"line_color":{"field":"cyl","transform":{"id":"960bd38d-7d2f-4010-bc9c-cb29aae06d4e","type":"CategoricalColorMapper"}},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"1ef99e6b-885e-4023-9f84-d236ac89efdf","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"2224b00a-f423-4b66-81f9-d9af7aa0e1cf","type":"VBar"},{"attributes":{},"id":"2813198b-9e6b-4b71-b39b-a0fae5e3beae","type":"CategoricalTickFormatter"},{"attributes":{"source":{"id":"32c68be5-c337-4cb6-8a51-f682833304bb","type":"ColumnDataSource"}},"id":"4e635a29-d39d-47e0-8976-7702158cb86f","type":"CDSView"},{"attributes":{"below":[{"id":"ae7693ec-2754-413c-b903-db7a120b6bc8","type":"CategoricalAxis"}],"left":[{"id":"7d5781a9-3c1b-4a82-aacd-259b599406af","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"ae7693ec-2754-413c-b903-db7a120b6bc8","type":"CategoricalAxis"},{"id":"0adc73b1-07b9-4a4a-b463-cbb69b4546d5","type":"Grid"},{"id":"7d5781a9-3c1b-4a82-aacd-259b599406af","type":"LinearAxis"},{"id":"2defdb89-361e-4e4b-8013-31f69576fb35","type":"Grid"},{"id":"8ad2e726-94b1-4a2c-a3ea-5e40675b4d3f","type":"GlyphRenderer"}],"title":{"id":"8b088833-9a07-4665-b6c6-8284d884b617","type":"Title"},"toolbar":{"id":"afc8ecca-882f-4694-a334-022268f84890","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10c47094-be73-48d0-be95-9aa716a1fcb8","type":"FactorRange"},"x_scale":{"id":"f7b0b399-256f-453b-b251-6cabcf6123aa","type":"CategoricalScale"},"y_range":{"id":"17896847-6196-4b82-b8fa-e1de22b3d9ef","type":"DataRange1d"},"y_scale":{"id":"6ecf9c2a-6d93-4a6a-ab1f-d9d3c09e8964","type":"LinearScale"}},"id":"433113da-310e-4395-aa42-63be5618a7de","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f7b0b399-256f-453b-b251-6cabcf6123aa","type":"CategoricalScale"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"10c47094-be73-48d0-be95-9aa716a1fcb8","type":"FactorRange"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"afc8ecca-882f-4694-a334-022268f84890","type":"Toolbar"},{"attributes":{},"id":"aa0a4342-827f-4c03-9a9f-b5f687f9bdb8","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"aa0a4342-827f-4c03-9a9f-b5f687f9bdb8","type":"BasicTickFormatter"},"plot":{"id":"433113da-310e-4395-aa42-63be5618a7de","subtype":"Figure","type":"Plot"},"ticker":{"id":"2cfd775a-aaec-47ed-ad21-bd292ec1e22c","type":"BasicTicker"}},"id":"7d5781a9-3c1b-4a82-aacd-259b599406af","type":"LinearAxis"}],"root_ids":["433113da-310e-4395-aa42-63be5618a7de"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"c69e70f3-b785-4407-9854-5198cc15dd50","elementid":"69e70821-9050-4f21-9ab2-5fb1c43448af","modelid":"433113da-310e-4395-aa42-63be5618a7de"}];
                
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

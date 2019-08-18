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
      };var element = document.getElementById("80977653-fc51-431a-932d-4415506317d2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '80977653-fc51-431a-932d-4415506317d2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"bacdaba4-29c3-4f06-a1c1-274ae6886d63":{"roots":{"references":[{"attributes":{"callback":null,"start":0},"id":"1e3f166b-4607-4deb-a0ee-1dd0731dceba","type":"DataRange1d"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"e406cb47-a1ff-4afe-8617-09262ffa49b1","type":"FactorRange"},{"attributes":{},"id":"29d465f0-62b4-4f9b-b324-f4288ba08122","type":"LinearScale"},{"attributes":{"plot":null,"text":"MPG by # Cylinders"},"id":"71f2626a-4d77-4c81-a4ed-e147c3f7b1f2","type":"Title"},{"attributes":{},"id":"e9d3bf7f-5ade-4087-8139-90691d8b889a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4cc7a36e-1253-4f3a-bb2a-a600557e665c","type":"BasicTickFormatter"},"plot":{"id":"da827168-a38c-4c45-803e-61635959cf93","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9d3bf7f-5ade-4087-8139-90691d8b889a","type":"BasicTicker"}},"id":"08f30f80-55ce-4a0d-9dd2-5ffa7075656e","type":"LinearAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"da827168-a38c-4c45-803e-61635959cf93","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb0882af-863f-4db0-8d3e-752bb906fcbc","type":"CategoricalTicker"}},"id":"ff0e2dba-8582-49aa-99ff-328d248e9929","type":"Grid"},{"attributes":{"source":{"id":"4813b589-ac1c-4b34-bd99-857bf7991bbc","type":"ColumnDataSource"}},"id":"f79328a2-d2e8-4204-b38b-87245a37aa7b","type":"CDSView"},{"attributes":{"fill_color":{"field":"cyl","transform":{"id":"09f4621a-3e20-47f7-9edd-81e7612db81c","type":"CategoricalColorMapper"}},"line_color":{"field":"cyl","transform":{"id":"09f4621a-3e20-47f7-9edd-81e7612db81c","type":"CategoricalColorMapper"}},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"49f502a4-6b00-4b55-9653-e6be5a44203a","type":"VBar"},{"attributes":{},"id":"4cc7a36e-1253-4f3a-bb2a-a600557e665c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3b003c50-8722-4540-88a8-49d6e6eae92c","type":"Toolbar"},{"attributes":{"data_source":{"id":"4813b589-ac1c-4b34-bd99-857bf7991bbc","type":"ColumnDataSource"},"glyph":{"id":"49f502a4-6b00-4b55-9653-e6be5a44203a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"354fa5df-2117-4265-aa03-28a369b2d098","type":"VBar"},"selection_glyph":null,"view":{"id":"f79328a2-d2e8-4204-b38b-87245a37aa7b","type":"CDSView"}},"id":"5d973616-9fcb-4c60-8f7f-72dd6ce6ab66","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"mpg_mean"},"width":{"value":1},"x":{"field":"cyl"}},"id":"354fa5df-2117-4265-aa03-28a369b2d098","type":"VBar"},{"attributes":{"dimension":1,"plot":{"id":"da827168-a38c-4c45-803e-61635959cf93","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9d3bf7f-5ade-4087-8139-90691d8b889a","type":"BasicTicker"}},"id":"592be8cf-a593-47a7-9bda-525d2962f815","type":"Grid"},{"attributes":{"factors":["3","4","5","6","8"],"palette":["#2b83ba","#abdda4","#ffffbf","#fdae61","#d7191c"]},"id":"09f4621a-3e20-47f7-9edd-81e7612db81c","type":"CategoricalColorMapper"},{"attributes":{"below":[{"id":"bb604119-f425-4ae0-86b6-1d373e9c7429","type":"CategoricalAxis"}],"left":[{"id":"08f30f80-55ce-4a0d-9dd2-5ffa7075656e","type":"LinearAxis"}],"outline_line_color":{"value":null},"plot_height":350,"renderers":[{"id":"bb604119-f425-4ae0-86b6-1d373e9c7429","type":"CategoricalAxis"},{"id":"ff0e2dba-8582-49aa-99ff-328d248e9929","type":"Grid"},{"id":"08f30f80-55ce-4a0d-9dd2-5ffa7075656e","type":"LinearAxis"},{"id":"592be8cf-a593-47a7-9bda-525d2962f815","type":"Grid"},{"id":"5d973616-9fcb-4c60-8f7f-72dd6ce6ab66","type":"GlyphRenderer"}],"title":{"id":"71f2626a-4d77-4c81-a4ed-e147c3f7b1f2","type":"Title"},"toolbar":{"id":"3b003c50-8722-4540-88a8-49d6e6eae92c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e406cb47-a1ff-4afe-8617-09262ffa49b1","type":"FactorRange"},"x_scale":{"id":"47c7c1f4-c1e6-4ab3-9555-75a6198d36ca","type":"CategoricalScale"},"y_range":{"id":"1e3f166b-4607-4deb-a0ee-1dd0731dceba","type":"DataRange1d"},"y_scale":{"id":"29d465f0-62b4-4f9b-b324-f4288ba08122","type":"LinearScale"}},"id":"da827168-a38c-4c45-803e-61635959cf93","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["accel_count","accel_mean","accel_std","accel_min","accel_25%","accel_50%","accel_75%","accel_max","displ_count","displ_mean","displ_std","displ_min","displ_25%","displ_50%","displ_75%","displ_max","hp_count","hp_mean","hp_std","hp_min","hp_25%","hp_50%","hp_75%","hp_max","mpg_count","mpg_mean","mpg_std","mpg_min","mpg_25%","mpg_50%","mpg_75%","mpg_max","origin_count","origin_mean","origin_std","origin_min","origin_25%","origin_50%","origin_75%","origin_max","weight_count","weight_mean","weight_std","weight_min","weight_25%","weight_50%","weight_75%","weight_max","yr_count","yr_mean","yr_std","yr_min","yr_25%","yr_50%","yr_75%","yr_max","cyl"],"data":{"accel_25%":{"__ndarray__":"AAAAAACAKkCamZmZmZktQGZmZmZm5jFAmpmZmZkZLkAAAAAAAAAnQA==","dtype":"float64","shape":[5]},"accel_50%":{"__ndarray__":"AAAAAAAAK0AzMzMzMzMwQGZmZmZm5jNAAAAAAAAAMEAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"accel_75%":{"__ndarray__":"AAAAAAAAK0AAAAAAAAAyQAAAAAAAADRAmpmZmZmZMUAAAAAAAAAsQA==","dtype":"float64","shape":[5]},"accel_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"accel_max":{"__ndarray__":"AAAAAAAAK0DNzMzMzMw4QJqZmZmZGTRAAAAAAAAANUAzMzMzMzM2QA==","dtype":"float64","shape":[5]},"accel_mean":{"__ndarray__":"AAAAAACAKkCRxCwG+JQwQCIiIiIiojJA7d9LWxRBMEA+LI1MIukpQA==","dtype":"float64","shape":[5]},"accel_min":{"__ndarray__":"AAAAAAAAKUAzMzMzMzMnQM3MzMzMzC9AmpmZmZmZJkAAAAAAAAAgQA==","dtype":"float64","shape":[5]},"accel_std":{"__ndarray__":"AAAAAAAA4D+b1TA5wxADQO1jrP039AJA0StM4BRBAED/ZpysTswBQA==","dtype":"float64","shape":[5]},"cyl":["3","4","5","6","8"],"displ_25%":{"__ndarray__":"AAAAAACAUUAAAAAAAMBWQAAAAAAAgF9AAAAAAADwaEAAAAAAABBzQA==","dtype":"float64","shape":[5]},"displ_50%":{"__ndarray__":"AAAAAACAUUAAAAAAAEBaQAAAAAAAYGBAAAAAAADgbEAAAAAAAOB1QA==","dtype":"float64","shape":[5]},"displ_75%":{"__ndarray__":"AAAAAAAgUkAAAAAAAEBeQAAAAAAAoGNAAAAAAABAb0AAAAAAAIB2QA==","dtype":"float64","shape":[5]},"displ_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"displ_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBjQAAAAAAA4GZAAAAAAABgcEAAAAAAAHB8QA==","dtype":"float64","shape":[5]},"displ_mean":{"__ndarray__":"AAAAAAAgUkD/9sBG72pbQAAAAAAAIGJAmjq/9pBLa0DJeVnEJ5B1QA==","dtype":"float64","shape":[5]},"displ_min":{"__ndarray__":"AAAAAACAUUAAAAAAAABRQAAAAAAAQF5AAAAAAAAgYkAAAAAAAEBwQA==","dtype":"float64","shape":[5]},"displ_std":{"__ndarray__":"AAAAAAAAFEC8furRdmA1QLmT4WuwpEBAT4BvAbA2QEDXs8ZGYGNHQA==","dtype":"float64","shape":[5]},"hp_25%":{"__ndarray__":"AAAAAADQV0AAAAAAAABRQAAAAAAAAFJAAAAAAAAgV0AAAAAAAIBhQA==","dtype":"float64","shape":[5]},"hp_50%":{"__ndarray__":"AAAAAACgWEAAAAAAAIBTQAAAAAAAQFNAAAAAAAAAWUAAAAAAAMBiQA==","dtype":"float64","shape":[5]},"hp_75%":{"__ndarray__":"AAAAAACgWUAAAAAAAABWQAAAAAAAgFZAAAAAAACAW0AAAAAAAOBlQA==","dtype":"float64","shape":[5]},"hp_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"hp_max":{"__ndarray__":"AAAAAACAW0AAAAAAAMBcQAAAAAAAwFlAAAAAAACgZEAAAAAAAMBsQA==","dtype":"float64","shape":[5]},"hp_mean":{"__ndarray__":"AAAAAADQWEB2PKeSApJTQFVVVVVVlVRAsD3ksmJgWUDCfquNocljQA==","dtype":"float64","shape":[5]},"hp_min":{"__ndarray__":"AAAAAACAVkAAAAAAAABHQAAAAAAAwFBAAAAAAAAAUkAAAAAAAIBWQA==","dtype":"float64","shape":[5]},"hp_std":{"__ndarray__":"sTIWI2yaIECGr0Go0wstQDKsjxZJlTJAxZAwIvaeLEBQwZb3G3Q8QA==","dtype":"float64","shape":[5]},"mpg_25%":{"__ndarray__":"AAAAAADAMkAAAAAAAAA5QJqZmZmZ2TZAAAAAAAAAMkAAAAAAAAAqQA==","dtype":"float64","shape":[5]},"mpg_50%":{"__ndarray__":"AAAAAABANEBmZmZmZmY8QGZmZmZmZjlAAAAAAAAAM0AAAAAAAAAsQA==","dtype":"float64","shape":[5]},"mpg_75%":{"__ndarray__":"zczMzMwMNkCamZmZmXlAQGZmZmZm5j5AAAAAAAAANUAAAAAAAAAwQA==","dtype":"float64","shape":[5]},"mpg_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"mpg_max":{"__ndarray__":"MzMzMzOzN0DNzMzMzExHQDMzMzMzM0JAAAAAAAAAQ0CamZmZmZk6QA==","dtype":"float64","shape":[5]},"mpg_mean":{"__ndarray__":"zczMzMyMNEBwD2z0rkg9QN3d3d3dXTtA6lu15jb5M0BgwH9VHO0tQA==","dtype":"float64","shape":[5]},"mpg_min":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAyQM3MzMzMTDRAAAAAAAAALkAAAAAAAAAiQA==","dtype":"float64","shape":[5]},"mpg_std":{"__ndarray__":"ca9eOxmEBECNLXOmo64WQOWG1RfXdCBALURKf2ahDkC0cW7BtbAGQA==","dtype":"float64","shape":[5]},"origin_25%":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_50%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_75%":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"origin_max":{"__ndarray__":"AAAAAAAACEAAAAAAAAAIQAAAAAAAAABAAAAAAAAACEAAAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_mean":{"__ndarray__":"AAAAAAAACEAAAAAAAAAAQAAAAAAAAABAdX7tIZcV8z8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_min":{"__ndarray__":"AAAAAAAACEAAAAAAAADwPwAAAAAAAABAAAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","shape":[5]},"origin_std":{"__ndarray__":"AAAAAAAAAACo00pJEbfqPwAAAAAAAAAAPS9VpaOj4T8AAAAAAAAAAA==","dtype":"float64","shape":[5]},"weight_25%":{"__ndarray__":"AAAAAADNoUAAAAAAAP6fQAAAAAAAlKZAAAAAAAACp0AAAAAAAK6tQA==","dtype":"float64","shape":[5]},"weight_50%":{"__ndarray__":"AAAAAACOokAAAAAAAGyhQAAAAAAADKdAAAAAAAAUqUAAAAAAACywQA==","dtype":"float64","shape":[5]},"weight_75%":{"__ndarray__":"AAAAAAB+o0AAAAAAAAWkQAAAAAAAUKlAAAAAAADOqkAAAAAAgDOxQA==","dtype":"float64","shape":[5]},"weight_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"weight_max":{"__ndarray__":"AAAAAABApUAAAAAAAIypQAAAAAAAlKtAAAAAAACGrkAAAAAAABS0QA==","dtype":"float64","shape":[5]},"weight_mean":{"__ndarray__":"AAAAAAC9okAsMl+aOAKiQKuqqqqqPqhAjqbOrz0EqUBD0x3stxKwQA==","dtype":"float64","shape":[5]},"weight_min":{"__ndarray__":"AAAAAACYoEAAAAAAADSZQAAAAAAAHKZAAAAAAABQo0AAAAAAAByoQA==","dtype":"float64","shape":[5]},"weight_std":{"__ndarray__":"udhs7B3ybkC6+VSg9G11QA9pSX6AZXdAdmeNgiLGdEC+UR6eVA18QA==","dtype":"float64","shape":[5]},"yr_25%":{"__ndarray__":"AAAAAAAwUkAAAAAAAIBSQAAAAAAAoFNAAAAAAACAUkAAAAAAAABSQA==","dtype":"float64","shape":[5]},"yr_50%":{"__ndarray__":"AAAAAADAUkAAAAAAAEBTQAAAAAAAwFNAAAAAAAAAU0AAAAAAAEBSQA==","dtype":"float64","shape":[5]},"yr_75%":{"__ndarray__":"AAAAAABwU0AAAAAAAABUQAAAAAAA4FNAAAAAAACAU0AAAAAAAABTQA==","dtype":"float64","shape":[5]},"yr_count":{"__ndarray__":"AAAAAAAAEEAAAAAAAOBoQAAAAAAAAAhAAAAAAADAVEAAAAAAAMBZQA==","dtype":"float64","shape":[5]},"yr_max":{"__ndarray__":"AAAAAAAAVEAAAAAAAIBUQAAAAAAAAFRAAAAAAACAVEAAAAAAAEBUQA==","dtype":"float64","shape":[5]},"yr_mean":{"__ndarray__":"AAAAAADgUkDEWG397UFTQAAAAAAAwFNAghLeaOr8UkCL+ARSyXlSQA==","dtype":"float64","shape":[5]},"yr_min":{"__ndarray__":"AAAAAAAAUkAAAAAAAIBRQAAAAAAAgFNAAAAAAACAUUAAAAAAAIBRQA==","dtype":"float64","shape":[5]},"yr_std":{"__ndarray__":"p1MQvCOTDUAd5PLGXeYNQAAAAAAAAPA/p0OY+nMdCkAEv1x2cisIQA==","dtype":"float64","shape":[5]}},"selected":null,"selection_policy":null},"id":"4813b589-ac1c-4b34-bd99-857bf7991bbc","type":"ColumnDataSource"},{"attributes":{},"id":"cb0882af-863f-4db0-8d3e-752bb906fcbc","type":"CategoricalTicker"},{"attributes":{"axis_label":"some stuff","formatter":{"id":"c444bafd-c6e3-48db-b869-77732a6b4a39","type":"CategoricalTickFormatter"},"major_label_orientation":1.2,"plot":{"id":"da827168-a38c-4c45-803e-61635959cf93","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb0882af-863f-4db0-8d3e-752bb906fcbc","type":"CategoricalTicker"}},"id":"bb604119-f425-4ae0-86b6-1d373e9c7429","type":"CategoricalAxis"},{"attributes":{},"id":"47c7c1f4-c1e6-4ab3-9555-75a6198d36ca","type":"CategoricalScale"},{"attributes":{},"id":"c444bafd-c6e3-48db-b869-77732a6b4a39","type":"CategoricalTickFormatter"}],"root_ids":["da827168-a38c-4c45-803e-61635959cf93"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"bacdaba4-29c3-4f06-a1c1-274ae6886d63","elementid":"80977653-fc51-431a-932d-4415506317d2","modelid":"da827168-a38c-4c45-803e-61635959cf93"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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
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
      };var element = document.getElementById("58a6e54c-8c1d-4e7e-a3e0-55bf8569a236");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '58a6e54c-8c1d-4e7e-a3e0-55bf8569a236' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"afb617a4-fc17-4c80-9a12-7200278cfdc9":{"roots":{"references":[{"attributes":{"formatter":{"id":"ea28f06b-5b2b-4c02-b70a-a12a5c6a6b3a","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"8a96db70-0229-4b68-b7a0-23bce299de5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"24f1db8b-d585-4e6f-a3df-f222bad008f2","type":"CategoricalTicker"}},"id":"7658e4d4-5fdf-4e92-b3e1-024e2aadbdf9","type":"CategoricalAxis"},{"attributes":{},"id":"49fd2d61-416e-4e84-87bc-ac834aead537","type":"LinearScale"},{"attributes":{},"id":"d6354f59-b4a5-49cb-a8fe-be0f69256c83","type":"CategoricalScale"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"7568279c-6cea-4520-9559-a2715bfd8afa","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"e6846527-c2b4-41c4-8b5b-95e630fd96e4","type":"VBar"},{"attributes":{"formatter":{"id":"a55c8fcf-9737-4e9d-a5f6-0f8a248a770b","type":"BasicTickFormatter"},"plot":{"id":"8a96db70-0229-4b68-b7a0-23bce299de5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b999e482-da08-4e24-9b99-bfab3231999f","type":"BasicTicker"}},"id":"badf5249-0e61-4b4e-b416-3ce9661abf05","type":"LinearAxis"},{"attributes":{},"id":"a55c8fcf-9737-4e9d-a5f6-0f8a248a770b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"start":0},"id":"81a3cd87-1931-42d3-af56-047ada7dbff0","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"8a96db70-0229-4b68-b7a0-23bce299de5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"b999e482-da08-4e24-9b99-bfab3231999f","type":"BasicTicker"}},"id":"f15af30f-3c45-4dd2-b438-b0e8d7411691","type":"Grid"},{"attributes":{},"id":"b999e482-da08-4e24-9b99-bfab3231999f","type":"BasicTicker"},{"attributes":{},"id":"ea28f06b-5b2b-4c02-b70a-a12a5c6a6b3a","type":"CategoricalTickFormatter"},{"attributes":{},"id":"24f1db8b-d585-4e6f-a3df-f222bad008f2","type":"CategoricalTicker"},{"attributes":{},"id":"16f4402c-8320-432b-b5cb-1ef3861c43b9","type":"Selection"},{"attributes":{"source":{"id":"127db78d-2386-4bb7-8e03-a56ba00f835c","type":"ColumnDataSource"}},"id":"7edca15a-9a2d-4fac-80dc-a1f2076d77e4","type":"CDSView"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"92ca2fd3-5b01-4fdb-af7d-d5bac2fdbf72","type":"Title"},{"attributes":{"data_source":{"id":"127db78d-2386-4bb7-8e03-a56ba00f835c","type":"ColumnDataSource"},"glyph":{"id":"e6846527-c2b4-41c4-8b5b-95e630fd96e4","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"143cf642-37b0-463d-9f9f-d6690c1b502c","type":"VBar"},"selection_glyph":null,"view":{"id":"7edca15a-9a2d-4fac-80dc-a1f2076d77e4","type":"CDSView"}},"id":"3e9b0e88-6aa3-46d7-a957-f09901ea1309","type":"GlyphRenderer"},{"attributes":{},"id":"8aca5dbc-9f9b-41d7-8dd4-c897c70c2165","type":"UnionRenderers"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"ad417e9d-6987-4c5f-85c7-0b32464bcb64","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8a96db70-0229-4b68-b7a0-23bce299de5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"24f1db8b-d585-4e6f-a3df-f222bad008f2","type":"CategoricalTicker"}},"id":"9de30424-4d70-4f89-bbd4-44e3484af69b","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"143cf642-37b0-463d-9f9f-d6690c1b502c","type":"VBar"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"16f4402c-8320-432b-b5cb-1ef3861c43b9","type":"Selection"},"selection_policy":{"id":"8aca5dbc-9f9b-41d7-8dd4-c897c70c2165","type":"UnionRenderers"}},"id":"127db78d-2386-4bb7-8e03-a56ba00f835c","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"19153600-96ba-4dd3-9a4c-fa71183e1903","type":"Toolbar"},{"attributes":{"below":[{"id":"7658e4d4-5fdf-4e92-b3e1-024e2aadbdf9","type":"CategoricalAxis"}],"left":[{"id":"badf5249-0e61-4b4e-b416-3ce9661abf05","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"7658e4d4-5fdf-4e92-b3e1-024e2aadbdf9","type":"CategoricalAxis"},{"id":"9de30424-4d70-4f89-bbd4-44e3484af69b","type":"Grid"},{"id":"badf5249-0e61-4b4e-b416-3ce9661abf05","type":"LinearAxis"},{"id":"f15af30f-3c45-4dd2-b438-b0e8d7411691","type":"Grid"},{"id":"3e9b0e88-6aa3-46d7-a957-f09901ea1309","type":"GlyphRenderer"}],"title":{"id":"92ca2fd3-5b01-4fdb-af7d-d5bac2fdbf72","type":"Title"},"toolbar":{"id":"19153600-96ba-4dd3-9a4c-fa71183e1903","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ad417e9d-6987-4c5f-85c7-0b32464bcb64","type":"FactorRange"},"x_scale":{"id":"d6354f59-b4a5-49cb-a8fe-be0f69256c83","type":"CategoricalScale"},"y_range":{"id":"81a3cd87-1931-42d3-af56-047ada7dbff0","type":"DataRange1d"},"y_scale":{"id":"49fd2d61-416e-4e84-87bc-ac834aead537","type":"LinearScale"}},"id":"8a96db70-0229-4b68-b7a0-23bce299de5e","subtype":"Figure","type":"Plot"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"7568279c-6cea-4520-9559-a2715bfd8afa","type":"CategoricalColorMapper"}],"root_ids":["8a96db70-0229-4b68-b7a0-23bce299de5e"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"afb617a4-fc17-4c80-9a12-7200278cfdc9","roots":{"8a96db70-0229-4b68-b7a0-23bce299de5e":"58a6e54c-8c1d-4e7e-a3e0-55bf8569a236"}}];
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
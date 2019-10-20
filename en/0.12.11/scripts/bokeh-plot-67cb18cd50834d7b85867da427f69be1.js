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
      };var element = document.getElementById("c9f0e708-fce9-4f31-a6d8-78c4332a1e99");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c9f0e708-fce9-4f31-a6d8-78c4332a1e99' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"761b66ef-2425-40a9-b86c-8e636d3c1052":{"roots":{"references":[{"attributes":{},"id":"6e9d355e-a4e8-4e2c-ae69-e727183140b0","type":"BasicTicker"},{"attributes":{"callback":null,"start":0},"id":"bb519885-bf5a-4fcb-9164-2d313bfdf2d7","type":"DataRange1d"},{"attributes":{},"id":"ff5501a3-ad60-4d87-b302-62b21c2c2893","type":"LinearScale"},{"attributes":{"below":[{"id":"9a00f47a-d8bc-498a-bc98-4da504cc582b","type":"CategoricalAxis"}],"left":[{"id":"ed589b21-f5db-4f42-b0cc-f40a53a55507","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"9a00f47a-d8bc-498a-bc98-4da504cc582b","type":"CategoricalAxis"},{"id":"8a30d39c-d077-4881-9dea-a1277f8fe7f4","type":"Grid"},{"id":"ed589b21-f5db-4f42-b0cc-f40a53a55507","type":"LinearAxis"},{"id":"55424884-1c94-4466-a95d-0bc023c17c0c","type":"Grid"},{"id":"f1e4f4eb-0c79-48c7-8593-1135d32462a3","type":"GlyphRenderer"}],"title":{"id":"937aad45-a5f3-44d9-88e5-7ba06f7dd40e","type":"Title"},"toolbar":{"id":"c28cb4a4-e70b-4f12-b962-ea555813b7ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"04e46ac1-a030-4adc-af66-9bd0d698832f","type":"FactorRange"},"x_scale":{"id":"3418fa7d-d9dd-4b84-91b6-692202de0385","type":"CategoricalScale"},"y_range":{"id":"bb519885-bf5a-4fcb-9164-2d313bfdf2d7","type":"DataRange1d"},"y_scale":{"id":"ff5501a3-ad60-4d87-b302-62b21c2c2893","type":"LinearScale"}},"id":"473b8e46-fe23-4539-ba88-723e62904a02","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3418fa7d-d9dd-4b84-91b6-692202de0385","type":"CategoricalScale"},{"attributes":{},"id":"040cfbc7-8f80-4566-afe5-caea61f76765","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"d7deeada-742f-421e-bfc5-379ae7fda974","type":"VBar"},{"attributes":{"formatter":{"id":"3ef69757-751a-407d-ba17-cd56adfd94f8","type":"BasicTickFormatter"},"plot":{"id":"473b8e46-fe23-4539-ba88-723e62904a02","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e9d355e-a4e8-4e2c-ae69-e727183140b0","type":"BasicTicker"}},"id":"ed589b21-f5db-4f42-b0cc-f40a53a55507","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"937aad45-a5f3-44d9-88e5-7ba06f7dd40e","type":"Title"},{"attributes":{},"id":"3ef69757-751a-407d-ba17-cd56adfd94f8","type":"BasicTickFormatter"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"473b8e46-fe23-4539-ba88-723e62904a02","subtype":"Figure","type":"Plot"},"ticker":{"id":"50eaa5fd-8496-45a2-a9d6-a3067db70cef","type":"CategoricalTicker"}},"id":"8a30d39c-d077-4881-9dea-a1277f8fe7f4","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c28cb4a4-e70b-4f12-b962-ea555813b7ea","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"473b8e46-fe23-4539-ba88-723e62904a02","subtype":"Figure","type":"Plot"},"ticker":{"id":"6e9d355e-a4e8-4e2c-ae69-e727183140b0","type":"BasicTicker"}},"id":"55424884-1c94-4466-a95d-0bc023c17c0c","type":"Grid"},{"attributes":{"formatter":{"id":"040cfbc7-8f80-4566-afe5-caea61f76765","type":"CategoricalTickFormatter"},"plot":{"id":"473b8e46-fe23-4539-ba88-723e62904a02","subtype":"Figure","type":"Plot"},"ticker":{"id":"50eaa5fd-8496-45a2-a9d6-a3067db70cef","type":"CategoricalTicker"}},"id":"9a00f47a-d8bc-498a-bc98-4da504cc582b","type":"CategoricalAxis"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"04e46ac1-a030-4adc-af66-9bd0d698832f","type":"FactorRange"},{"attributes":{"source":{"id":"ecfbaa14-24b1-4d60-a7d6-89e76a97b86a","type":"ColumnDataSource"}},"id":"a9ba7c28-0c80-4918-9fed-bad3fbec1adb","type":"CDSView"},{"attributes":{"data_source":{"id":"ecfbaa14-24b1-4d60-a7d6-89e76a97b86a","type":"ColumnDataSource"},"glyph":{"id":"306650f0-fb6d-4bed-b69d-94e15149c8b0","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d7deeada-742f-421e-bfc5-379ae7fda974","type":"VBar"},"selection_glyph":null,"view":{"id":"a9ba7c28-0c80-4918-9fed-bad3fbec1adb","type":"CDSView"}},"id":"f1e4f4eb-0c79-48c7-8593-1135d32462a3","type":"GlyphRenderer"},{"attributes":{},"id":"50eaa5fd-8496-45a2-a9d6-a3067db70cef","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"306650f0-fb6d-4bed-b69d-94e15149c8b0","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"ecfbaa14-24b1-4d60-a7d6-89e76a97b86a","type":"ColumnDataSource"}],"root_ids":["473b8e46-fe23-4539-ba88-723e62904a02"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"761b66ef-2425-40a9-b86c-8e636d3c1052","elementid":"c9f0e708-fce9-4f31-a6d8-78c4332a1e99","modelid":"473b8e46-fe23-4539-ba88-723e62904a02"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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
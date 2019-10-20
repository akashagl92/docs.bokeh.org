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
      };var element = document.getElementById("ffaac77a-70e6-4aac-bc12-95fd788def77");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ffaac77a-70e6-4aac-bc12-95fd788def77' but no matching script tag was found. ")
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
                    var docs_json = {"a822e21a-32a9-4ace-9fd9-216882e67a99":{"roots":{"references":[{"attributes":{"data_source":{"id":"09811182-0887-43b6-8349-c2305795adad","type":"ColumnDataSource"},"glyph":{"id":"761a3ca8-ea1c-4ac5-8df2-e24378d8d2d2","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9de27c6-efd0-44fd-9146-152edf5d7323","type":"Quad"},"selection_glyph":null,"view":{"id":"b68d7fad-ffa4-4106-8fd7-5a23ba9d9b4b","type":"CDSView"}},"id":"e19dfe26-e5b8-424a-8ba9-3603a7d9f582","type":"GlyphRenderer"},{"attributes":{},"id":"1889e2ac-e493-4489-a75e-a5efbafae281","type":"LinearScale"},{"attributes":{},"id":"8475b010-22ce-4126-8af1-e8f3ddd593e8","type":"BasicTickFormatter"},{"attributes":{},"id":"3fc2b15f-b517-438c-bc58-dc67b18721c4","type":"HelpTool"},{"attributes":{},"id":"b794ac2c-3fc2-428d-a083-f6e7e5ac9158","type":"LinearScale"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"b9de27c6-efd0-44fd-9146-152edf5d7323","type":"Quad"},{"attributes":{"plot":null,"text":""},"id":"1e8dfc0d-2da6-49a2-83d6-c4f55eda230c","type":"Title"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"09811182-0887-43b6-8349-c2305795adad","type":"ColumnDataSource"},{"attributes":{},"id":"73d14927-7dc6-4049-bc85-c868839aec05","type":"SaveTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"761a3ca8-ea1c-4ac5-8df2-e24378d8d2d2","type":"Quad"},{"attributes":{"source":{"id":"09811182-0887-43b6-8349-c2305795adad","type":"ColumnDataSource"}},"id":"b68d7fad-ffa4-4106-8fd7-5a23ba9d9b4b","type":"CDSView"},{"attributes":{"below":[{"id":"d9a919c5-4e3e-4de0-8736-ff2d97d251d1","type":"LinearAxis"}],"left":[{"id":"dd3b061e-3df5-4f23-880d-d3083992598c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d9a919c5-4e3e-4de0-8736-ff2d97d251d1","type":"LinearAxis"},{"id":"caf23a10-7cba-47bb-9e4a-14312654d21b","type":"Grid"},{"id":"dd3b061e-3df5-4f23-880d-d3083992598c","type":"LinearAxis"},{"id":"a27d8753-c2bf-4456-bb28-fcc0a619ae2f","type":"Grid"},{"id":"89e48158-ae0d-4a27-a837-3c42a34f03fa","type":"BoxAnnotation"},{"id":"e19dfe26-e5b8-424a-8ba9-3603a7d9f582","type":"GlyphRenderer"}],"title":{"id":"1e8dfc0d-2da6-49a2-83d6-c4f55eda230c","type":"Title"},"toolbar":{"id":"5b34ab2e-81d0-4cc4-8568-2f59bb2aa145","type":"Toolbar"},"x_range":{"id":"44aecef1-2ac4-40fb-9582-6673b0d7917a","type":"DataRange1d"},"x_scale":{"id":"b794ac2c-3fc2-428d-a083-f6e7e5ac9158","type":"LinearScale"},"y_range":{"id":"aa5757cc-a96a-4cc8-8d59-6ac189236d4c","type":"DataRange1d"},"y_scale":{"id":"1889e2ac-e493-4489-a75e-a5efbafae281","type":"LinearScale"}},"id":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"52a04039-626a-4c13-8c21-49753e63369d","type":"BasicTicker"},{"attributes":{},"id":"3925a5a3-9c5c-46fb-8d21-cf0ae824754e","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2556827-61df-4e69-98e8-715cce4beb6b","type":"PanTool"},{"id":"dafa657d-41fb-4075-95ab-e2342e25605d","type":"WheelZoomTool"},{"id":"e8a7c0ed-b869-4924-89a3-1790880f8072","type":"BoxZoomTool"},{"id":"73d14927-7dc6-4049-bc85-c868839aec05","type":"SaveTool"},{"id":"3925a5a3-9c5c-46fb-8d21-cf0ae824754e","type":"ResetTool"},{"id":"3fc2b15f-b517-438c-bc58-dc67b18721c4","type":"HelpTool"}]},"id":"5b34ab2e-81d0-4cc4-8568-2f59bb2aa145","type":"Toolbar"},{"attributes":{"formatter":{"id":"65e7b60f-5845-44ca-810f-058df5f94fad","type":"BasicTickFormatter"},"plot":{"id":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2764392d-f705-4ed4-bdb0-25109617bd49","type":"BasicTicker"}},"id":"d9a919c5-4e3e-4de0-8736-ff2d97d251d1","type":"LinearAxis"},{"attributes":{"plot":{"id":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2764392d-f705-4ed4-bdb0-25109617bd49","type":"BasicTicker"}},"id":"caf23a10-7cba-47bb-9e4a-14312654d21b","type":"Grid"},{"attributes":{"callback":null},"id":"44aecef1-2ac4-40fb-9582-6673b0d7917a","type":"DataRange1d"},{"attributes":{},"id":"65e7b60f-5845-44ca-810f-058df5f94fad","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7","subtype":"Figure","type":"Plot"},"ticker":{"id":"52a04039-626a-4c13-8c21-49753e63369d","type":"BasicTicker"}},"id":"a27d8753-c2bf-4456-bb28-fcc0a619ae2f","type":"Grid"},{"attributes":{"callback":null},"id":"aa5757cc-a96a-4cc8-8d59-6ac189236d4c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"89e48158-ae0d-4a27-a837-3c42a34f03fa","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"89e48158-ae0d-4a27-a837-3c42a34f03fa","type":"BoxAnnotation"}},"id":"e8a7c0ed-b869-4924-89a3-1790880f8072","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"8475b010-22ce-4126-8af1-e8f3ddd593e8","type":"BasicTickFormatter"},"plot":{"id":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7","subtype":"Figure","type":"Plot"},"ticker":{"id":"52a04039-626a-4c13-8c21-49753e63369d","type":"BasicTicker"}},"id":"dd3b061e-3df5-4f23-880d-d3083992598c","type":"LinearAxis"},{"attributes":{},"id":"2764392d-f705-4ed4-bdb0-25109617bd49","type":"BasicTicker"},{"attributes":{},"id":"f2556827-61df-4e69-98e8-715cce4beb6b","type":"PanTool"},{"attributes":{},"id":"dafa657d-41fb-4075-95ab-e2342e25605d","type":"WheelZoomTool"}],"root_ids":["771c2f01-c6a4-4fe7-8f99-5143edc6dda7"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"a822e21a-32a9-4ace-9fd9-216882e67a99","elementid":"ffaac77a-70e6-4aac-bc12-95fd788def77","modelid":"771c2f01-c6a4-4fe7-8f99-5143edc6dda7"}];
                
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

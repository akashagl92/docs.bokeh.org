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
      };var element = document.getElementById("d08d0f12-86dc-44f3-815a-4d832150858d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd08d0f12-86dc-44f3-815a-4d832150858d' but no matching script tag was found. ")
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
                    var docs_json = {"72374161-8600-40b4-af17-bec1b20d255b":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"91611d71-0c97-47f8-be3c-25633e15cc66","type":"BasicTicker"}},"id":"34b41e97-3c9f-46fb-887a-c86526a31543","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"57f51463-1ba3-4094-a2cf-094ab440d1fb","type":"Ray"},{"attributes":{},"id":"d3eb694f-89cd-4389-81e7-ffa1ac19f045","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d6278878-6a9c-44cb-a88d-a13fb3a6a22e","type":"ColumnDataSource"},"glyph":{"id":"3996396f-ab4c-4e25-99bb-e0697ef51dec","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57f51463-1ba3-4094-a2cf-094ab440d1fb","type":"Ray"},"selection_glyph":null,"view":{"id":"c88f235b-a47d-47ff-9a49-a45317ff5d8c","type":"CDSView"}},"id":"6e410c24-5d9f-47fb-92fc-481a352fa040","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d6278878-6a9c-44cb-a88d-a13fb3a6a22e","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"71255559-7885-47af-9e74-f5c7323d186a","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"587e6c83-d11e-463e-86e1-2b20d163cc60","type":"LinearAxis"}],"left":[{"id":"7e5af028-bbc3-4a6c-a29a-ab7e04666235","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"587e6c83-d11e-463e-86e1-2b20d163cc60","type":"LinearAxis"},{"id":"7a97bc98-3551-4c92-8293-6073648ad6f3","type":"Grid"},{"id":"7e5af028-bbc3-4a6c-a29a-ab7e04666235","type":"LinearAxis"},{"id":"34b41e97-3c9f-46fb-887a-c86526a31543","type":"Grid"},{"id":"71255559-7885-47af-9e74-f5c7323d186a","type":"BoxAnnotation"},{"id":"6e410c24-5d9f-47fb-92fc-481a352fa040","type":"GlyphRenderer"}],"title":{"id":"4a343238-8356-4807-9399-5caee95c2f70","type":"Title"},"toolbar":{"id":"142983b1-3d42-4e7e-ae1d-58991ccecdcf","type":"Toolbar"},"x_range":{"id":"bea8ebe7-6c77-4271-8613-3b0c61608ab5","type":"DataRange1d"},"x_scale":{"id":"c4bb4651-98d2-4df2-b8ae-d1542c07d755","type":"LinearScale"},"y_range":{"id":"f250e1b7-489c-4f9a-bac8-074e0dfb12ba","type":"DataRange1d"},"y_scale":{"id":"33ab4c09-b3ff-4b09-9933-8e04e0a8a6dc","type":"LinearScale"}},"id":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"0d96fe74-5b6e-4f48-bc78-d7442d2a68e7","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d96fe74-5b6e-4f48-bc78-d7442d2a68e7","type":"PanTool"},{"id":"46e6f6a4-e9f4-445b-9c69-1e04089738e8","type":"WheelZoomTool"},{"id":"85ac1c03-4176-4327-946e-892de594356c","type":"BoxZoomTool"},{"id":"c7ac1363-9200-42d9-a87f-acbaca399cb7","type":"SaveTool"},{"id":"ed90c58a-31e9-4f20-ac03-7efa94a3cc9a","type":"ResetTool"},{"id":"db473636-c0c4-4a1f-baff-fd129cb86c5f","type":"HelpTool"}]},"id":"142983b1-3d42-4e7e-ae1d-58991ccecdcf","type":"Toolbar"},{"attributes":{"source":{"id":"d6278878-6a9c-44cb-a88d-a13fb3a6a22e","type":"ColumnDataSource"}},"id":"c88f235b-a47d-47ff-9a49-a45317ff5d8c","type":"CDSView"},{"attributes":{"callback":null},"id":"bea8ebe7-6c77-4271-8613-3b0c61608ab5","type":"DataRange1d"},{"attributes":{},"id":"46e6f6a4-e9f4-445b-9c69-1e04089738e8","type":"WheelZoomTool"},{"attributes":{},"id":"9097d729-ff72-4252-8f45-70a6aee57502","type":"BasicTicker"},{"attributes":{"overlay":{"id":"71255559-7885-47af-9e74-f5c7323d186a","type":"BoxAnnotation"}},"id":"85ac1c03-4176-4327-946e-892de594356c","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3996396f-ab4c-4e25-99bb-e0697ef51dec","type":"Ray"},{"attributes":{},"id":"c7ac1363-9200-42d9-a87f-acbaca399cb7","type":"SaveTool"},{"attributes":{"formatter":{"id":"d3eb694f-89cd-4389-81e7-ffa1ac19f045","type":"BasicTickFormatter"},"plot":{"id":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9097d729-ff72-4252-8f45-70a6aee57502","type":"BasicTicker"}},"id":"587e6c83-d11e-463e-86e1-2b20d163cc60","type":"LinearAxis"},{"attributes":{},"id":"ed90c58a-31e9-4f20-ac03-7efa94a3cc9a","type":"ResetTool"},{"attributes":{"callback":null},"id":"f250e1b7-489c-4f9a-bac8-074e0dfb12ba","type":"DataRange1d"},{"attributes":{},"id":"db473636-c0c4-4a1f-baff-fd129cb86c5f","type":"HelpTool"},{"attributes":{},"id":"c4bb4651-98d2-4df2-b8ae-d1542c07d755","type":"LinearScale"},{"attributes":{},"id":"33ab4c09-b3ff-4b09-9933-8e04e0a8a6dc","type":"LinearScale"},{"attributes":{"plot":{"id":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"9097d729-ff72-4252-8f45-70a6aee57502","type":"BasicTicker"}},"id":"7a97bc98-3551-4c92-8293-6073648ad6f3","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"4a343238-8356-4807-9399-5caee95c2f70","type":"Title"},{"attributes":{"formatter":{"id":"841298bf-6713-4d70-81a0-b6d1aba89018","type":"BasicTickFormatter"},"plot":{"id":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d","subtype":"Figure","type":"Plot"},"ticker":{"id":"91611d71-0c97-47f8-be3c-25633e15cc66","type":"BasicTicker"}},"id":"7e5af028-bbc3-4a6c-a29a-ab7e04666235","type":"LinearAxis"},{"attributes":{},"id":"841298bf-6713-4d70-81a0-b6d1aba89018","type":"BasicTickFormatter"},{"attributes":{},"id":"91611d71-0c97-47f8-be3c-25633e15cc66","type":"BasicTicker"}],"root_ids":["d349f6bd-2299-4f1e-a9ab-dbf4e25df64d"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"72374161-8600-40b4-af17-bec1b20d255b","elementid":"d08d0f12-86dc-44f3-815a-4d832150858d","modelid":"d349f6bd-2299-4f1e-a9ab-dbf4e25df64d"}];
                
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

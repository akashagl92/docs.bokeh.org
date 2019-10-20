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
      };var element = document.getElementById("c99309c2-abdd-46e0-a954-b0c043f3ea4c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c99309c2-abdd-46e0-a954-b0c043f3ea4c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"2b2fbb3b-cc42-4f49-b48c-5d41d8981ece":{"roots":{"references":[{"attributes":{},"id":"11918","type":"SaveTool"},{"attributes":{},"id":"11916","type":"WheelZoomTool"},{"attributes":{"source":{"id":"11930","type":"ColumnDataSource"}},"id":"11934","type":"CDSView"},{"attributes":{"plot":{"id":"11896","subtype":"Figure","type":"Plot"},"ticker":{"id":"11906","type":"BasicTicker"}},"id":"11909","type":"Grid"},{"attributes":{},"id":"11903","type":"LinearScale"},{"attributes":{},"id":"11906","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11923","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"11905","type":"LinearAxis"}],"left":[{"id":"11910","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11905","type":"LinearAxis"},{"id":"11909","type":"Grid"},{"id":"11910","type":"LinearAxis"},{"id":"11914","type":"Grid"},{"id":"11923","type":"BoxAnnotation"},{"id":"11933","type":"GlyphRenderer"}],"title":{"id":"11935","type":"Title"},"toolbar":{"id":"11921","type":"Toolbar"},"x_range":{"id":"11897","type":"DataRange1d"},"x_scale":{"id":"11901","type":"LinearScale"},"y_range":{"id":"11899","type":"DataRange1d"},"y_scale":{"id":"11903","type":"LinearScale"}},"id":"11896","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"11915","type":"PanTool"},{"attributes":{},"id":"11911","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11939","type":"BasicTickFormatter"},"plot":{"id":"11896","subtype":"Figure","type":"Plot"},"ticker":{"id":"11906","type":"BasicTicker"}},"id":"11905","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11915","type":"PanTool"},{"id":"11916","type":"WheelZoomTool"},{"id":"11917","type":"BoxZoomTool"},{"id":"11918","type":"SaveTool"},{"id":"11919","type":"ResetTool"},{"id":"11920","type":"HelpTool"}]},"id":"11921","type":"Toolbar"},{"attributes":{"callback":null},"id":"11899","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11932","type":"Quad"},{"attributes":{"data_source":{"id":"11930","type":"ColumnDataSource"},"glyph":{"id":"11931","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11932","type":"Quad"},"selection_glyph":null,"view":{"id":"11934","type":"CDSView"}},"id":"11933","type":"GlyphRenderer"},{"attributes":{},"id":"11939","type":"BasicTickFormatter"},{"attributes":{},"id":"11901","type":"LinearScale"},{"attributes":{},"id":"11937","type":"BasicTickFormatter"},{"attributes":{},"id":"11943","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"11896","subtype":"Figure","type":"Plot"},"ticker":{"id":"11911","type":"BasicTicker"}},"id":"11914","type":"Grid"},{"attributes":{},"id":"11919","type":"ResetTool"},{"attributes":{"formatter":{"id":"11937","type":"BasicTickFormatter"},"plot":{"id":"11896","subtype":"Figure","type":"Plot"},"ticker":{"id":"11911","type":"BasicTicker"}},"id":"11910","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"11935","type":"Title"},{"attributes":{},"id":"11920","type":"HelpTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"11931","type":"Quad"},{"attributes":{"overlay":{"id":"11923","type":"BoxAnnotation"}},"id":"11917","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"11942","type":"Selection"},"selection_policy":{"id":"11943","type":"UnionRenderers"}},"id":"11930","type":"ColumnDataSource"},{"attributes":{},"id":"11942","type":"Selection"},{"attributes":{"callback":null},"id":"11897","type":"DataRange1d"}],"root_ids":["11896"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"2b2fbb3b-cc42-4f49-b48c-5d41d8981ece","roots":{"11896":"c99309c2-abdd-46e0-a954-b0c043f3ea4c"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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
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
      };var element = document.getElementById("3d02c438-8956-4c44-862e-1eabcc3e21fb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3d02c438-8956-4c44-862e-1eabcc3e21fb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
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
                    
                  var docs_json = '{"c9550d53-4016-40db-bb81-ba83d137d485":{"roots":{"references":[{"attributes":{"source":{"id":"11070","type":"ColumnDataSource"}},"id":"11074","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11084","type":"Selection"},"selection_policy":{"id":"11083","type":"UnionRenderers"}},"id":"11070","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11065","type":"ColumnDataSource"},"glyph":{"id":"11066","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11067","type":"Line"},"selection_glyph":null,"view":{"id":"11069","type":"CDSView"}},"id":"11068","type":"GlyphRenderer"},{"attributes":{},"id":"11081","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"11050","type":"PanTool"},{"id":"11051","type":"WheelZoomTool"},{"id":"11052","type":"BoxZoomTool"},{"id":"11053","type":"SaveTool"},{"id":"11054","type":"ResetTool"},{"id":"11055","type":"HelpTool"}]},"id":"11056","type":"Toolbar"},{"attributes":{},"id":"11079","type":"BasicTickFormatter"},{"attributes":{},"id":"11082","type":"Selection"},{"attributes":{},"id":"11054","type":"ResetTool"},{"attributes":{},"id":"11084","type":"Selection"},{"attributes":{},"id":"11083","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"11058","type":"BoxAnnotation"}},"id":"11052","type":"BoxZoomTool"},{"attributes":{},"id":"11046","type":"BasicTicker"},{"attributes":{"source":{"id":"11065","type":"ColumnDataSource"}},"id":"11069","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11067","type":"Line"},{"attributes":{},"id":"11041","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11079","type":"BasicTickFormatter"},"plot":{"id":"11031","subtype":"Figure","type":"Plot"},"ticker":{"id":"11041","type":"BasicTicker"}},"id":"11040","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"11075","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"11031","subtype":"Figure","type":"Plot"},"ticker":{"id":"11046","type":"BasicTicker"}},"id":"11049","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]},"selected":{"id":"11082","type":"Selection"},"selection_policy":{"id":"11081","type":"UnionRenderers"}},"id":"11065","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11072","type":"Circle"},{"attributes":{},"id":"11077","type":"BasicTickFormatter"},{"attributes":{},"id":"11055","type":"HelpTool"},{"attributes":{"below":[{"id":"11040","type":"LinearAxis"}],"left":[{"id":"11045","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11040","type":"LinearAxis"},{"id":"11044","type":"Grid"},{"id":"11045","type":"LinearAxis"},{"id":"11049","type":"Grid"},{"id":"11058","type":"BoxAnnotation"},{"id":"11068","type":"GlyphRenderer"},{"id":"11073","type":"GlyphRenderer"}],"title":{"id":"11075","type":"Title"},"toolbar":{"id":"11056","type":"Toolbar"},"x_range":{"id":"11032","type":"DataRange1d"},"x_scale":{"id":"11036","type":"LinearScale"},"y_range":{"id":"11034","type":"DataRange1d"},"y_scale":{"id":"11038","type":"LinearScale"}},"id":"11031","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"11071","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11058","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"11077","type":"BasicTickFormatter"},"plot":{"id":"11031","subtype":"Figure","type":"Plot"},"ticker":{"id":"11046","type":"BasicTicker"}},"id":"11045","type":"LinearAxis"},{"attributes":{},"id":"11051","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"11032","type":"DataRange1d"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11066","type":"Line"},{"attributes":{"data_source":{"id":"11070","type":"ColumnDataSource"},"glyph":{"id":"11071","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11072","type":"Circle"},"selection_glyph":null,"view":{"id":"11074","type":"CDSView"}},"id":"11073","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"11031","subtype":"Figure","type":"Plot"},"ticker":{"id":"11041","type":"BasicTicker"}},"id":"11044","type":"Grid"},{"attributes":{},"id":"11053","type":"SaveTool"},{"attributes":{"callback":null},"id":"11034","type":"DataRange1d"},{"attributes":{},"id":"11050","type":"PanTool"},{"attributes":{},"id":"11036","type":"LinearScale"},{"attributes":{},"id":"11038","type":"LinearScale"}],"root_ids":["11031"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c9550d53-4016-40db-bb81-ba83d137d485","roots":{"11031":"3d02c438-8956-4c44-862e-1eabcc3e21fb"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
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
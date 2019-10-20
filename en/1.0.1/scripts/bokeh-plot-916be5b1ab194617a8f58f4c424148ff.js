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
      };var element = document.getElementById("3dc119b8-bc0f-453d-9603-3530ca8f2b80");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3dc119b8-bc0f-453d-9603-3530ca8f2b80' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.1.min.js"];
    
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
                    
                  var docs_json = '{"0f8e1186-8ff4-4d2f-9aa1-628c15c110dc":{"roots":{"references":[{"attributes":{"active_drag":{"id":"18730","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18705","type":"PanTool"},{"id":"18706","type":"WheelZoomTool"},{"id":"18707","type":"BoxZoomTool"},{"id":"18708","type":"SaveTool"},{"id":"18709","type":"ResetTool"},{"id":"18710","type":"HelpTool"},{"id":"18730","type":"PolyDrawTool"},{"id":"18731","type":"PolyDrawTool"}]},"id":"18711","type":"Toolbar"},{"attributes":{},"id":"18710","type":"HelpTool"},{"attributes":{},"id":"18739","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18725","type":"ColumnDataSource"}},"id":"18729","type":"CDSView"},{"attributes":{},"id":"18691","type":"LinearScale"},{"attributes":{},"id":"18705","type":"PanTool"},{"attributes":{},"id":"18737","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":10},"id":"18687","type":"Range1d"},{"attributes":{"overlay":{"id":"18713","type":"BoxAnnotation"}},"id":"18707","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":10},"id":"18689","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18727","type":"MultiLine"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"18743","type":"Selection"},"selection_policy":{"id":"18744","type":"UnionRenderers"}},"id":"18725","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"18695","type":"LinearAxis"}],"left":[{"id":"18700","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18695","type":"LinearAxis"},{"id":"18699","type":"Grid"},{"id":"18700","type":"LinearAxis"},{"id":"18704","type":"Grid"},{"id":"18713","type":"BoxAnnotation"},{"id":"18723","type":"GlyphRenderer"},{"id":"18728","type":"GlyphRenderer"}],"title":{"id":"18684","type":"Title"},"toolbar":{"id":"18711","type":"Toolbar"},"x_range":{"id":"18687","type":"Range1d"},"x_scale":{"id":"18691","type":"LinearScale"},"y_range":{"id":"18689","type":"Range1d"},"y_scale":{"id":"18693","type":"LinearScale"}},"id":"18685","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"18685","subtype":"Figure","type":"Plot"},"ticker":{"id":"18696","type":"BasicTicker"}},"id":"18699","type":"Grid"},{"attributes":{},"id":"18696","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18713","type":"BoxAnnotation"},{"attributes":{},"id":"18709","type":"ResetTool"},{"attributes":{"renderers":[{"id":"18728","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18731","type":"PolyDrawTool"},{"attributes":{},"id":"18706","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18721","type":"Patches"},{"attributes":{"formatter":{"id":"18737","type":"BasicTickFormatter"},"plot":{"id":"18685","subtype":"Figure","type":"Plot"},"ticker":{"id":"18696","type":"BasicTicker"}},"id":"18695","type":"LinearAxis"},{"attributes":{},"id":"18741","type":"Selection"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18726","type":"MultiLine"},{"attributes":{},"id":"18743","type":"Selection"},{"attributes":{"formatter":{"id":"18739","type":"BasicTickFormatter"},"plot":{"id":"18685","subtype":"Figure","type":"Plot"},"ticker":{"id":"18701","type":"BasicTicker"}},"id":"18700","type":"LinearAxis"},{"attributes":{},"id":"18744","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18720","type":"ColumnDataSource"},"glyph":{"id":"18721","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18722","type":"Patches"},"selection_glyph":null,"view":{"id":"18724","type":"CDSView"}},"id":"18723","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Poly Draw Tool"},"id":"18684","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18722","type":"Patches"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"18741","type":"Selection"},"selection_policy":{"id":"18742","type":"UnionRenderers"}},"id":"18720","type":"ColumnDataSource"},{"attributes":{},"id":"18701","type":"BasicTicker"},{"attributes":{"data_source":{"id":"18725","type":"ColumnDataSource"},"glyph":{"id":"18726","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18727","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18729","type":"CDSView"}},"id":"18728","type":"GlyphRenderer"},{"attributes":{"renderers":[{"id":"18723","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18730","type":"PolyDrawTool"},{"attributes":{},"id":"18708","type":"SaveTool"},{"attributes":{},"id":"18742","type":"UnionRenderers"},{"attributes":{"source":{"id":"18720","type":"ColumnDataSource"}},"id":"18724","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"18685","subtype":"Figure","type":"Plot"},"ticker":{"id":"18701","type":"BasicTicker"}},"id":"18704","type":"Grid"},{"attributes":{},"id":"18693","type":"LinearScale"}],"root_ids":["18685"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"0f8e1186-8ff4-4d2f-9aa1-628c15c110dc","roots":{"18685":"3dc119b8-bc0f-453d-9603-3530ca8f2b80"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.1.min.css");
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
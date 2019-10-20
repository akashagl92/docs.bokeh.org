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
      };var element = document.getElementById("7b9c441f-ba0a-456a-a005-e6e35c792c8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7b9c441f-ba0a-456a-a005-e6e35c792c8a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"22f5d3c6-6e4a-42e6-ab45-6973ab5424d4":{"roots":{"references":[{"attributes":{"plot":null,"text":"Poly Draw Tool"},"id":"18685","type":"Title"},{"attributes":{"below":[{"id":"18696","type":"LinearAxis"}],"left":[{"id":"18701","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18696","type":"LinearAxis"},{"id":"18700","type":"Grid"},{"id":"18701","type":"LinearAxis"},{"id":"18705","type":"Grid"},{"id":"18714","type":"BoxAnnotation"},{"id":"18724","type":"GlyphRenderer"},{"id":"18729","type":"GlyphRenderer"}],"title":{"id":"18685","type":"Title"},"toolbar":{"id":"18712","type":"Toolbar"},"x_range":{"id":"18688","type":"Range1d"},"x_scale":{"id":"18692","type":"LinearScale"},"y_range":{"id":"18690","type":"Range1d"},"y_scale":{"id":"18694","type":"LinearScale"}},"id":"18686","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18738","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"18726","type":"ColumnDataSource"}},"id":"18730","type":"CDSView"},{"attributes":{"plot":{"id":"18686","subtype":"Figure","type":"Plot"},"ticker":{"id":"18697","type":"BasicTicker"}},"id":"18700","type":"Grid"},{"attributes":{},"id":"18706","type":"PanTool"},{"attributes":{},"id":"18745","type":"Selection"},{"attributes":{},"id":"18710","type":"ResetTool"},{"attributes":{"data_source":{"id":"18726","type":"ColumnDataSource"},"glyph":{"id":"18727","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18728","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18730","type":"CDSView"}},"id":"18729","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18721","type":"ColumnDataSource"}},"id":"18725","type":"CDSView"},{"attributes":{"formatter":{"id":"18740","type":"BasicTickFormatter"},"plot":{"id":"18686","subtype":"Figure","type":"Plot"},"ticker":{"id":"18702","type":"BasicTicker"}},"id":"18701","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"18686","subtype":"Figure","type":"Plot"},"ticker":{"id":"18702","type":"BasicTicker"}},"id":"18705","type":"Grid"},{"attributes":{},"id":"18744","type":"UnionRenderers"},{"attributes":{},"id":"18743","type":"Selection"},{"attributes":{"formatter":{"id":"18738","type":"BasicTickFormatter"},"plot":{"id":"18686","subtype":"Figure","type":"Plot"},"ticker":{"id":"18697","type":"BasicTicker"}},"id":"18696","type":"LinearAxis"},{"attributes":{},"id":"18694","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18714","type":"BoxAnnotation"},{"attributes":{},"id":"18709","type":"SaveTool"},{"attributes":{"callback":null,"end":10},"id":"18690","type":"Range1d"},{"attributes":{},"id":"18692","type":"LinearScale"},{"attributes":{"renderers":[{"id":"18729","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18732","type":"PolyDrawTool"},{"attributes":{"active_drag":{"id":"18731","type":"PolyDrawTool"},"active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18706","type":"PanTool"},{"id":"18707","type":"WheelZoomTool"},{"id":"18708","type":"BoxZoomTool"},{"id":"18709","type":"SaveTool"},{"id":"18710","type":"ResetTool"},{"id":"18711","type":"HelpTool"},{"id":"18731","type":"PolyDrawTool"},{"id":"18732","type":"PolyDrawTool"}]},"id":"18712","type":"Toolbar"},{"attributes":{},"id":"18707","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.4},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.4},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18722","type":"Patches"},{"attributes":{"callback":null,"end":10},"id":"18688","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18728","type":"MultiLine"},{"attributes":{"data_source":{"id":"18721","type":"ColumnDataSource"},"glyph":{"id":"18722","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18723","type":"Patches"},"selection_glyph":null,"view":{"id":"18725","type":"CDSView"}},"id":"18724","type":"GlyphRenderer"},{"attributes":{},"id":"18740","type":"BasicTickFormatter"},{"attributes":{},"id":"18711","type":"HelpTool"},{"attributes":{"line_alpha":{"value":0.4},"line_color":{"value":"red"},"line_width":{"value":5},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18727","type":"MultiLine"},{"attributes":{},"id":"18742","type":"UnionRenderers"},{"attributes":{"renderers":[{"id":"18724","type":"GlyphRenderer"}],"vertex_renderer":null},"id":"18731","type":"PolyDrawTool"},{"attributes":{"callback":null,"data":{"xs":[[1,9]],"ys":[[5,5]]},"selected":{"id":"18745","type":"Selection"},"selection_policy":{"id":"18744","type":"UnionRenderers"}},"id":"18726","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"xs":[[2,5,8]],"ys":[[2,8,2]]},"selected":{"id":"18743","type":"Selection"},"selection_policy":{"id":"18742","type":"UnionRenderers"}},"id":"18721","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18714","type":"BoxAnnotation"}},"id":"18708","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":0},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18723","type":"Patches"},{"attributes":{},"id":"18697","type":"BasicTicker"},{"attributes":{},"id":"18702","type":"BasicTicker"}],"root_ids":["18686"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"22f5d3c6-6e4a-42e6-ab45-6973ab5424d4","roots":{"18686":"7b9c441f-ba0a-456a-a005-e6e35c792c8a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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
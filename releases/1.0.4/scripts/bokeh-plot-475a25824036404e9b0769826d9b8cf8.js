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
      };var element = document.getElementById("386599b6-94fa-4237-b938-f188301169a6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '386599b6-94fa-4237-b938-f188301169a6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c79b920f-8d04-44ee-8544-88378af818e4":{"roots":{"references":[{"attributes":{},"id":"12001","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"12008","type":"BoxAnnotation"}},"id":"12002","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"12000","type":"PanTool"},{"id":"12001","type":"WheelZoomTool"},{"id":"12002","type":"BoxZoomTool"},{"id":"12003","type":"SaveTool"},{"id":"12004","type":"ResetTool"},{"id":"12005","type":"HelpTool"}]},"id":"12006","type":"Toolbar"},{"attributes":{},"id":"11988","type":"LinearScale"},{"attributes":{"below":[{"id":"11990","type":"LinearAxis"}],"left":[{"id":"11995","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"11990","type":"LinearAxis"},{"id":"11994","type":"Grid"},{"id":"11995","type":"LinearAxis"},{"id":"11999","type":"Grid"},{"id":"12008","type":"BoxAnnotation"},{"id":"12018","type":"GlyphRenderer"}],"title":{"id":"12020","type":"Title"},"toolbar":{"id":"12006","type":"Toolbar"},"x_range":{"id":"11982","type":"DataRange1d"},"x_scale":{"id":"11986","type":"LinearScale"},"y_range":{"id":"11984","type":"DataRange1d"},"y_scale":{"id":"11988","type":"LinearScale"}},"id":"11981","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"12000","type":"PanTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"12017","type":"Rect"},{"attributes":{"data_source":{"id":"12015","type":"ColumnDataSource"},"glyph":{"id":"12016","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"12017","type":"Rect"},"selection_glyph":null,"view":{"id":"12019","type":"CDSView"}},"id":"12018","type":"GlyphRenderer"},{"attributes":{},"id":"12027","type":"Selection"},{"attributes":{},"id":"11996","type":"BasicTicker"},{"attributes":{},"id":"12004","type":"ResetTool"},{"attributes":{"formatter":{"id":"12022","type":"BasicTickFormatter"},"plot":{"id":"11981","subtype":"Figure","type":"Plot"},"ticker":{"id":"11996","type":"BasicTicker"}},"id":"11995","type":"LinearAxis"},{"attributes":{"source":{"id":"12015","type":"ColumnDataSource"}},"id":"12019","type":"CDSView"},{"attributes":{},"id":"12003","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"12016","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"11981","subtype":"Figure","type":"Plot"},"ticker":{"id":"11996","type":"BasicTicker"}},"id":"11999","type":"Grid"},{"attributes":{},"id":"12005","type":"HelpTool"},{"attributes":{},"id":"12024","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"12020","type":"Title"},{"attributes":{"plot":{"id":"11981","subtype":"Figure","type":"Plot"},"ticker":{"id":"11991","type":"BasicTicker"}},"id":"11994","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"12008","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"12024","type":"BasicTickFormatter"},"plot":{"id":"11981","subtype":"Figure","type":"Plot"},"ticker":{"id":"11991","type":"BasicTicker"}},"id":"11990","type":"LinearAxis"},{"attributes":{"callback":null},"id":"11982","type":"DataRange1d"},{"attributes":{},"id":"12026","type":"UnionRenderers"},{"attributes":{},"id":"11986","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"12027","type":"Selection"},"selection_policy":{"id":"12026","type":"UnionRenderers"}},"id":"12015","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"11984","type":"DataRange1d"},{"attributes":{},"id":"12022","type":"BasicTickFormatter"},{"attributes":{},"id":"11991","type":"BasicTicker"}],"root_ids":["11981"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"c79b920f-8d04-44ee-8544-88378af818e4","roots":{"11981":"386599b6-94fa-4237-b938-f188301169a6"}}];
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
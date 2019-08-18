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
      };var element = document.getElementById("04ad79a5-7666-4f03-b628-fdf7ae5a215d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '04ad79a5-7666-4f03-b628-fdf7ae5a215d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.0.min.js"];
    
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
                    
                  var docs_json = '{"c6c4329f-32e5-47b1-a97f-99a13830d516":{"roots":{"references":[{"attributes":{"source":{"id":"14014","type":"ColumnDataSource"}},"id":"14018","type":"CDSView"},{"attributes":{"callback":null},"id":"13981","type":"DataRange1d"},{"attributes":{"callback":null},"id":"13983","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13999","type":"PanTool"},{"id":"14000","type":"WheelZoomTool"},{"id":"14001","type":"BoxZoomTool"},{"id":"14002","type":"SaveTool"},{"id":"14003","type":"ResetTool"},{"id":"14004","type":"HelpTool"}]},"id":"14005","type":"Toolbar"},{"attributes":{},"id":"14003","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14007","type":"BoxAnnotation"},{"attributes":{},"id":"13990","type":"BasicTicker"},{"attributes":{},"id":"14027","type":"UnionRenderers"},{"attributes":{},"id":"14024","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"14026","type":"Selection"},"selection_policy":{"id":"14027","type":"UnionRenderers"}},"id":"14014","type":"ColumnDataSource"},{"attributes":{},"id":"14002","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"14020","type":"Title"},{"attributes":{},"id":"14000","type":"WheelZoomTool"},{"attributes":{},"id":"13999","type":"PanTool"},{"attributes":{},"id":"13985","type":"LinearScale"},{"attributes":{"formatter":{"id":"14024","type":"BasicTickFormatter"},"plot":{"id":"13980","subtype":"Figure","type":"Plot"},"ticker":{"id":"13995","type":"BasicTicker"}},"id":"13994","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14016","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"13980","subtype":"Figure","type":"Plot"},"ticker":{"id":"13995","type":"BasicTicker"}},"id":"13998","type":"Grid"},{"attributes":{},"id":"14022","type":"BasicTickFormatter"},{"attributes":{},"id":"13995","type":"BasicTicker"},{"attributes":{"plot":{"id":"13980","subtype":"Figure","type":"Plot"},"ticker":{"id":"13990","type":"BasicTicker"}},"id":"13993","type":"Grid"},{"attributes":{"below":[{"id":"13989","type":"LinearAxis"}],"left":[{"id":"13994","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"13989","type":"LinearAxis"},{"id":"13993","type":"Grid"},{"id":"13994","type":"LinearAxis"},{"id":"13998","type":"Grid"},{"id":"14007","type":"BoxAnnotation"},{"id":"14017","type":"GlyphRenderer"}],"title":{"id":"14020","type":"Title"},"toolbar":{"id":"14005","type":"Toolbar"},"x_range":{"id":"13981","type":"DataRange1d"},"x_scale":{"id":"13985","type":"LinearScale"},"y_range":{"id":"13983","type":"DataRange1d"},"y_scale":{"id":"13987","type":"LinearScale"}},"id":"13980","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"14022","type":"BasicTickFormatter"},"plot":{"id":"13980","subtype":"Figure","type":"Plot"},"ticker":{"id":"13990","type":"BasicTicker"}},"id":"13989","type":"LinearAxis"},{"attributes":{"data_source":{"id":"14014","type":"ColumnDataSource"},"glyph":{"id":"14015","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14016","type":"Circle"},"selection_glyph":null,"view":{"id":"14018","type":"CDSView"}},"id":"14017","type":"GlyphRenderer"},{"attributes":{},"id":"14026","type":"Selection"},{"attributes":{"overlay":{"id":"14007","type":"BoxAnnotation"}},"id":"14001","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"14015","type":"Circle"},{"attributes":{},"id":"13987","type":"LinearScale"},{"attributes":{},"id":"14004","type":"HelpTool"}],"root_ids":["13980"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"c6c4329f-32e5-47b1-a97f-99a13830d516","roots":{"13980":"04ad79a5-7666-4f03-b628-fdf7ae5a215d"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.0.min.css");
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
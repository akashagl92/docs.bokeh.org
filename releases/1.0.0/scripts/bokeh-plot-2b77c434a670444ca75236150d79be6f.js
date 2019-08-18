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
      };var element = document.getElementById("488ead83-c827-400d-8874-f7cb3efe12ce");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '488ead83-c827-400d-8874-f7cb3efe12ce' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"0723649b-9367-4be4-bbb1-8db2b6761e2d":{"roots":{"references":[{"attributes":{"callback":null},"id":"16484","type":"DataRange1d"},{"attributes":{"formatter":{"id":"16523","type":"BasicTickFormatter"},"plot":{"id":"16481","subtype":"Figure","type":"Plot"},"ticker":{"id":"16491","type":"BasicTicker"}},"id":"16490","type":"LinearAxis"},{"attributes":{},"id":"16525","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16517","type":"Circle"},{"attributes":{"plot":{"id":"16481","subtype":"Figure","type":"Plot"},"ticker":{"id":"16491","type":"BasicTicker"}},"id":"16494","type":"Grid"},{"attributes":{},"id":"16496","type":"BasicTicker"},{"attributes":{"overlay":{"id":"16508","type":"BoxAnnotation"}},"id":"16502","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16527","type":"Selection"},"selection_policy":{"id":"16528","type":"UnionRenderers"}},"id":"16515","type":"ColumnDataSource"},{"attributes":{},"id":"16523","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"16525","type":"BasicTickFormatter"},"plot":{"id":"16481","subtype":"Figure","type":"Plot"},"ticker":{"id":"16496","type":"BasicTicker"}},"id":"16495","type":"LinearAxis"},{"attributes":{"callback":null},"id":"16482","type":"DataRange1d"},{"attributes":{"source":{"id":"16515","type":"ColumnDataSource"}},"id":"16519","type":"CDSView"},{"attributes":{"data_source":{"id":"16515","type":"ColumnDataSource"},"glyph":{"id":"16516","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16517","type":"Circle"},"selection_glyph":null,"view":{"id":"16519","type":"CDSView"}},"id":"16518","type":"GlyphRenderer"},{"attributes":{},"id":"16488","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16500","type":"PanTool"},{"id":"16501","type":"WheelZoomTool"},{"id":"16502","type":"BoxZoomTool"},{"id":"16503","type":"SaveTool"},{"id":"16504","type":"ResetTool"},{"id":"16505","type":"HelpTool"}]},"id":"16506","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"16521","type":"Title"},{"attributes":{},"id":"16501","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"16490","type":"LinearAxis"}],"left":[{"id":"16495","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16490","type":"LinearAxis"},{"id":"16494","type":"Grid"},{"id":"16495","type":"LinearAxis"},{"id":"16499","type":"Grid"},{"id":"16508","type":"BoxAnnotation"},{"id":"16518","type":"GlyphRenderer"}],"title":{"id":"16521","type":"Title"},"toolbar":{"id":"16506","type":"Toolbar"},"x_range":{"id":"16482","type":"DataRange1d"},"x_scale":{"id":"16486","type":"LinearScale"},"y_range":{"id":"16484","type":"DataRange1d"},"y_scale":{"id":"16488","type":"LinearScale"}},"id":"16481","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16528","type":"UnionRenderers"},{"attributes":{},"id":"16503","type":"SaveTool"},{"attributes":{},"id":"16527","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16508","type":"BoxAnnotation"},{"attributes":{},"id":"16486","type":"LinearScale"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"16481","subtype":"Figure","type":"Plot"},"ticker":{"id":"16496","type":"BasicTicker"}},"id":"16499","type":"Grid"},{"attributes":{},"id":"16491","type":"BasicTicker"},{"attributes":{},"id":"16505","type":"HelpTool"},{"attributes":{},"id":"16500","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16516","type":"Circle"},{"attributes":{},"id":"16504","type":"ResetTool"}],"root_ids":["16481"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"0723649b-9367-4be4-bbb1-8db2b6761e2d","roots":{"16481":"488ead83-c827-400d-8874-f7cb3efe12ce"}}];
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
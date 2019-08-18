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
      };var element = document.getElementById("3699d5ee-7a95-495b-a850-08b82184ba48");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3699d5ee-7a95-495b-a850-08b82184ba48' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"feb34c30-2406-4755-ba5a-fc943ed0736c":{"roots":{"references":[{"attributes":{},"id":"16505","type":"ResetTool"},{"attributes":{},"id":"16506","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16509","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"16491","type":"LinearAxis"}],"left":[{"id":"16496","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"16491","type":"LinearAxis"},{"id":"16495","type":"Grid"},{"id":"16496","type":"LinearAxis"},{"id":"16500","type":"Grid"},{"id":"16509","type":"BoxAnnotation"},{"id":"16519","type":"GlyphRenderer"}],"title":{"id":"16522","type":"Title"},"toolbar":{"id":"16507","type":"Toolbar"},"x_range":{"id":"16483","type":"DataRange1d"},"x_scale":{"id":"16487","type":"LinearScale"},"y_range":{"id":"16485","type":"DataRange1d"},"y_scale":{"id":"16489","type":"LinearScale"}},"id":"16482","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"16526","type":"BasicTickFormatter"},"plot":{"id":"16482","subtype":"Figure","type":"Plot"},"ticker":{"id":"16497","type":"BasicTicker"}},"id":"16496","type":"LinearAxis"},{"attributes":{},"id":"16526","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16518","type":"Circle"},{"attributes":{},"id":"16501","type":"PanTool"},{"attributes":{},"id":"16492","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16485","type":"DataRange1d"},{"attributes":{"overlay":{"id":"16509","type":"BoxAnnotation"}},"id":"16503","type":"BoxZoomTool"},{"attributes":{"source":{"id":"16516","type":"ColumnDataSource"}},"id":"16520","type":"CDSView"},{"attributes":{"callback":null},"id":"16483","type":"DataRange1d"},{"attributes":{},"id":"16504","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"16522","type":"Title"},{"attributes":{},"id":"16528","type":"UnionRenderers"},{"attributes":{},"id":"16489","type":"LinearScale"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"16482","subtype":"Figure","type":"Plot"},"ticker":{"id":"16497","type":"BasicTicker"}},"id":"16500","type":"Grid"},{"attributes":{},"id":"16529","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16517","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16501","type":"PanTool"},{"id":"16502","type":"WheelZoomTool"},{"id":"16503","type":"BoxZoomTool"},{"id":"16504","type":"SaveTool"},{"id":"16505","type":"ResetTool"},{"id":"16506","type":"HelpTool"}]},"id":"16507","type":"Toolbar"},{"attributes":{"plot":{"id":"16482","subtype":"Figure","type":"Plot"},"ticker":{"id":"16492","type":"BasicTicker"}},"id":"16495","type":"Grid"},{"attributes":{"formatter":{"id":"16524","type":"BasicTickFormatter"},"plot":{"id":"16482","subtype":"Figure","type":"Plot"},"ticker":{"id":"16492","type":"BasicTicker"}},"id":"16491","type":"LinearAxis"},{"attributes":{},"id":"16502","type":"WheelZoomTool"},{"attributes":{},"id":"16497","type":"BasicTicker"},{"attributes":{"data_source":{"id":"16516","type":"ColumnDataSource"},"glyph":{"id":"16517","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16518","type":"Circle"},"selection_glyph":null,"view":{"id":"16520","type":"CDSView"}},"id":"16519","type":"GlyphRenderer"},{"attributes":{},"id":"16524","type":"BasicTickFormatter"},{"attributes":{},"id":"16487","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16529","type":"Selection"},"selection_policy":{"id":"16528","type":"UnionRenderers"}},"id":"16516","type":"ColumnDataSource"}],"root_ids":["16482"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"feb34c30-2406-4755-ba5a-fc943ed0736c","roots":{"16482":"3699d5ee-7a95-495b-a850-08b82184ba48"}}];
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
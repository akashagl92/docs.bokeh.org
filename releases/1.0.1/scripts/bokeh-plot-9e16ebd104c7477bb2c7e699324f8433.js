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
      };var element = document.getElementById("c6ce8f75-68af-4ad0-b6e8-152142dc0800");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6ce8f75-68af-4ad0-b6e8-152142dc0800' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f18921e6-fd70-4aeb-9fec-6d5174797a4a":{"roots":{"references":[{"attributes":{},"id":"17591","type":"LinearScale"},{"attributes":{},"id":"17606","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"17629","type":"BasicTickFormatter"},"plot":{"id":"17585","subtype":"Figure","type":"Plot"},"ticker":{"id":"17601","type":"BasicTicker"}},"id":"17600","type":"LinearAxis"},{"attributes":{},"id":"17629","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"17585","subtype":"Figure","type":"Plot"},"ticker":{"id":"17596","type":"BasicTicker"}},"id":"17599","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17621","type":"Circle"},{"attributes":{},"id":"17605","type":"PanTool"},{"attributes":{"formatter":{"id":"17627","type":"BasicTickFormatter"},"plot":{"id":"17585","subtype":"Figure","type":"Plot"},"ticker":{"id":"17596","type":"BasicTicker"}},"id":"17595","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17613","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17620","type":"ColumnDataSource"}},"id":"17624","type":"CDSView"},{"attributes":{"below":[{"id":"17595","type":"LinearAxis"}],"left":[{"id":"17600","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"17595","type":"LinearAxis"},{"id":"17599","type":"Grid"},{"id":"17600","type":"LinearAxis"},{"id":"17604","type":"Grid"},{"id":"17613","type":"BoxAnnotation"},{"id":"17623","type":"GlyphRenderer"}],"title":{"id":"17584","type":"Title"},"toolbar":{"id":"17611","type":"Toolbar"},"x_range":{"id":"17587","type":"DataRange1d"},"x_scale":{"id":"17591","type":"LinearScale"},"y_range":{"id":"17589","type":"DataRange1d"},"y_scale":{"id":"17593","type":"LinearScale"}},"id":"17585","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"17620","type":"ColumnDataSource"},"glyph":{"id":"17621","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17622","type":"Circle"},"selection_glyph":null,"view":{"id":"17624","type":"CDSView"}},"id":"17623","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"17631","type":"Selection"},"selection_policy":{"id":"17632","type":"UnionRenderers"}},"id":"17620","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17613","type":"BoxAnnotation"}},"id":"17607","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"17584","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"17622","type":"Circle"},{"attributes":{},"id":"17610","type":"HelpTool"},{"attributes":{},"id":"17596","type":"BasicTicker"},{"attributes":{},"id":"17627","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17605","type":"PanTool"},{"id":"17606","type":"WheelZoomTool"},{"id":"17607","type":"BoxZoomTool"},{"id":"17608","type":"SaveTool"},{"id":"17609","type":"ResetTool"},{"id":"17610","type":"HelpTool"}]},"id":"17611","type":"Toolbar"},{"attributes":{"callback":null},"id":"17587","type":"DataRange1d"},{"attributes":{},"id":"17631","type":"Selection"},{"attributes":{"callback":null},"id":"17589","type":"DataRange1d"},{"attributes":{},"id":"17609","type":"ResetTool"},{"attributes":{},"id":"17601","type":"BasicTicker"},{"attributes":{},"id":"17593","type":"LinearScale"},{"attributes":{},"id":"17608","type":"SaveTool"},{"attributes":{},"id":"17632","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"17585","subtype":"Figure","type":"Plot"},"ticker":{"id":"17601","type":"BasicTicker"}},"id":"17604","type":"Grid"}],"root_ids":["17585"]},"title":"Bokeh Application","version":"1.0.1"}}';
                  var render_items = [{"docid":"f18921e6-fd70-4aeb-9fec-6d5174797a4a","roots":{"17585":"c6ce8f75-68af-4ad0-b6e8-152142dc0800"}}];
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
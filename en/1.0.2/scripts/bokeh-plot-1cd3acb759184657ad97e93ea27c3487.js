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
      };var element = document.getElementById("2222d729-41c3-4e87-b149-e3776abf387b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2222d729-41c3-4e87-b149-e3776abf387b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b22e8203-9172-4d03-a911-ad818ea87949":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19022","type":"Circle"},{"attributes":{},"id":"19031","type":"UnionRenderers"},{"attributes":{},"id":"19008","type":"SaveTool"},{"attributes":{},"id":"18996","type":"BasicTicker"},{"attributes":{},"id":"19029","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"19032","type":"Selection"},"selection_policy":{"id":"19031","type":"UnionRenderers"}},"id":"19020","type":"ColumnDataSource"},{"attributes":{},"id":"19009","type":"ResetTool"},{"attributes":{"plot":{"id":"18985","subtype":"Figure","type":"Plot"},"ticker":{"id":"18996","type":"BasicTicker"}},"id":"18999","type":"Grid"},{"attributes":{},"id":"19027","type":"BasicTickFormatter"},{"attributes":{},"id":"19010","type":"HelpTool"},{"attributes":{"data_source":{"id":"19020","type":"ColumnDataSource"},"glyph":{"id":"19021","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19022","type":"Circle"},"selection_glyph":null,"view":{"id":"19024","type":"CDSView"}},"id":"19023","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"19029","type":"BasicTickFormatter"},"plot":{"id":"18985","subtype":"Figure","type":"Plot"},"ticker":{"id":"19001","type":"BasicTicker"}},"id":"19000","type":"LinearAxis"},{"attributes":{"below":[{"id":"18995","type":"LinearAxis"}],"left":[{"id":"19000","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"18995","type":"LinearAxis"},{"id":"18999","type":"Grid"},{"id":"19000","type":"LinearAxis"},{"id":"19004","type":"Grid"},{"id":"19013","type":"BoxAnnotation"},{"id":"19023","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"19011","type":"Toolbar"},"toolbar_location":"below","x_range":{"id":"18987","type":"DataRange1d"},"x_scale":{"id":"18991","type":"LinearScale"},"y_range":{"id":"18989","type":"DataRange1d"},"y_scale":{"id":"18993","type":"LinearScale"}},"id":"18985","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"18985","subtype":"Figure","type":"Plot"},"ticker":{"id":"19001","type":"BasicTicker"}},"id":"19004","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19005","type":"PanTool"},{"id":"19006","type":"WheelZoomTool"},{"id":"19007","type":"BoxZoomTool"},{"id":"19008","type":"SaveTool"},{"id":"19009","type":"ResetTool"},{"id":"19010","type":"HelpTool"}]},"id":"19011","type":"Toolbar"},{"attributes":{"callback":null},"id":"18987","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"19021","type":"Circle"},{"attributes":{"callback":null},"id":"18989","type":"DataRange1d"},{"attributes":{},"id":"18991","type":"LinearScale"},{"attributes":{},"id":"19032","type":"Selection"},{"attributes":{"source":{"id":"19020","type":"ColumnDataSource"}},"id":"19024","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19013","type":"BoxAnnotation"},{"attributes":{},"id":"19005","type":"PanTool"},{"attributes":{},"id":"18993","type":"LinearScale"},{"attributes":{},"id":"19006","type":"WheelZoomTool"},{"attributes":{},"id":"19001","type":"BasicTicker"},{"attributes":{"overlay":{"id":"19013","type":"BoxAnnotation"}},"id":"19007","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"19027","type":"BasicTickFormatter"},"plot":{"id":"18985","subtype":"Figure","type":"Plot"},"ticker":{"id":"18996","type":"BasicTicker"}},"id":"18995","type":"LinearAxis"}],"root_ids":["18985"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"b22e8203-9172-4d03-a911-ad818ea87949","roots":{"18985":"2222d729-41c3-4e87-b149-e3776abf387b"}}];
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
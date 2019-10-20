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
      };var element = document.getElementById("7a8723e2-fb84-4276-91c1-9f88018c3b15");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7a8723e2-fb84-4276-91c1-9f88018c3b15' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b9df9bb4-04c1-4caf-9d23-946eb4a2b850":{"roots":{"references":[{"attributes":{},"id":"16689","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"16645","subtype":"Figure","type":"Plot"},"ticker":{"id":"16655","type":"BasicTicker"}},"id":"16658","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16664","type":"PanTool"},{"id":"16665","type":"WheelZoomTool"},{"id":"16666","type":"BoxZoomTool"},{"id":"16667","type":"SaveTool"},{"id":"16668","type":"ResetTool"},{"id":"16669","type":"HelpTool"}]},"id":"16670","type":"Toolbar"},{"attributes":{"data_source":{"id":"16679","type":"ColumnDataSource"},"glyph":{"id":"16680","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16681","type":"Circle"},"selection_glyph":null,"view":{"id":"16683","type":"CDSView"}},"id":"16682","type":"GlyphRenderer"},{"attributes":{},"id":"16687","type":"BasicTickFormatter"},{"attributes":{},"id":"16692","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16681","type":"Circle"},{"attributes":{"below":[{"id":"16654","type":"LinearAxis"}],"left":[{"id":"16659","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"16654","type":"LinearAxis"},{"id":"16658","type":"Grid"},{"id":"16659","type":"LinearAxis"},{"id":"16663","type":"Grid"},{"id":"16672","type":"BoxAnnotation"},{"id":"16682","type":"GlyphRenderer"}],"title":{"id":"16685","type":"Title"},"toolbar":{"id":"16670","type":"Toolbar"},"x_range":{"id":"16646","type":"DataRange1d"},"x_scale":{"id":"16650","type":"LinearScale"},"y_range":{"id":"16648","type":"DataRange1d"},"y_scale":{"id":"16652","type":"LinearScale"}},"id":"16645","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"16679","type":"ColumnDataSource"}},"id":"16683","type":"CDSView"},{"attributes":{},"id":"16650","type":"LinearScale"},{"attributes":{},"id":"16664","type":"PanTool"},{"attributes":{},"id":"16660","type":"BasicTicker"},{"attributes":{"formatter":{"id":"16687","type":"BasicTickFormatter"},"plot":{"id":"16645","subtype":"Figure","type":"Plot"},"ticker":{"id":"16655","type":"BasicTicker"}},"id":"16654","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16672","type":"BoxAnnotation"},{"attributes":{},"id":"16691","type":"Selection"},{"attributes":{},"id":"16669","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"16691","type":"Selection"},"selection_policy":{"id":"16692","type":"UnionRenderers"}},"id":"16679","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"16680","type":"Circle"},{"attributes":{"callback":null},"id":"16646","type":"DataRange1d"},{"attributes":{},"id":"16652","type":"LinearScale"},{"attributes":{"formatter":{"id":"16689","type":"BasicTickFormatter"},"plot":{"id":"16645","subtype":"Figure","type":"Plot"},"ticker":{"id":"16660","type":"BasicTicker"}},"id":"16659","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"16645","subtype":"Figure","type":"Plot"},"ticker":{"id":"16660","type":"BasicTicker"}},"id":"16663","type":"Grid"},{"attributes":{},"id":"16668","type":"ResetTool"},{"attributes":{"callback":null},"id":"16648","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"16685","type":"Title"},{"attributes":{},"id":"16665","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"16672","type":"BoxAnnotation"}},"id":"16666","type":"BoxZoomTool"},{"attributes":{},"id":"16667","type":"SaveTool"},{"attributes":{},"id":"16655","type":"BasicTicker"}],"root_ids":["16645"]},"title":"Bokeh Application","version":"1.0.0"}}';
                  var render_items = [{"docid":"b9df9bb4-04c1-4caf-9d23-946eb4a2b850","roots":{"16645":"7a8723e2-fb84-4276-91c1-9f88018c3b15"}}];
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
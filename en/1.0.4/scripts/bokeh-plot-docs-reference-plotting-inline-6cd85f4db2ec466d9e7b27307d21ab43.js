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
      };var element = document.getElementById("59ba0f8a-3141-4ea7-81e0-2bdb2c603cfe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59ba0f8a-3141-4ea7-81e0-2bdb2c603cfe' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d9e3e500-ec16-4581-b59d-6e5bd7e6aa8c":{"roots":{"references":[{"attributes":{"callback":null},"id":"34100","type":"DataRange1d"},{"attributes":{},"id":"34116","type":"PanTool"},{"attributes":{},"id":"34120","type":"ResetTool"},{"attributes":{},"id":"34102","type":"LinearScale"},{"attributes":{"source":{"id":"34131","type":"ColumnDataSource"}},"id":"34135","type":"CDSView"},{"attributes":{},"id":"34121","type":"HelpTool"},{"attributes":{},"id":"34117","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"34116","type":"PanTool"},{"id":"34117","type":"WheelZoomTool"},{"id":"34118","type":"BoxZoomTool"},{"id":"34119","type":"SaveTool"},{"id":"34120","type":"ResetTool"},{"id":"34121","type":"HelpTool"}]},"id":"34122","type":"Toolbar"},{"attributes":{},"id":"34138","type":"BasicTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34132","type":"Quad"},{"attributes":{"callback":null},"id":"34098","type":"DataRange1d"},{"attributes":{"data_source":{"id":"34131","type":"ColumnDataSource"},"glyph":{"id":"34132","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34133","type":"Quad"},"selection_glyph":null,"view":{"id":"34135","type":"CDSView"}},"id":"34134","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"34133","type":"Quad"},{"attributes":{"callback":null,"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]},"selected":{"id":"34143","type":"Selection"},"selection_policy":{"id":"34142","type":"UnionRenderers"}},"id":"34131","type":"ColumnDataSource"},{"attributes":{},"id":"34142","type":"UnionRenderers"},{"attributes":{},"id":"34143","type":"Selection"},{"attributes":{"below":[{"id":"34106","type":"LinearAxis"}],"left":[{"id":"34111","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"34106","type":"LinearAxis"},{"id":"34110","type":"Grid"},{"id":"34111","type":"LinearAxis"},{"id":"34115","type":"Grid"},{"id":"34124","type":"BoxAnnotation"},{"id":"34134","type":"GlyphRenderer"}],"title":{"id":"34136","type":"Title"},"toolbar":{"id":"34122","type":"Toolbar"},"x_range":{"id":"34098","type":"DataRange1d"},"x_scale":{"id":"34102","type":"LinearScale"},"y_range":{"id":"34100","type":"DataRange1d"},"y_scale":{"id":"34104","type":"LinearScale"}},"id":"34097","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"34124","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"34097","subtype":"Figure","type":"Plot"},"ticker":{"id":"34112","type":"BasicTicker"}},"id":"34115","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"34136","type":"Title"},{"attributes":{"formatter":{"id":"34140","type":"BasicTickFormatter"},"plot":{"id":"34097","subtype":"Figure","type":"Plot"},"ticker":{"id":"34107","type":"BasicTicker"}},"id":"34106","type":"LinearAxis"},{"attributes":{},"id":"34107","type":"BasicTicker"},{"attributes":{},"id":"34119","type":"SaveTool"},{"attributes":{"plot":{"id":"34097","subtype":"Figure","type":"Plot"},"ticker":{"id":"34107","type":"BasicTicker"}},"id":"34110","type":"Grid"},{"attributes":{"overlay":{"id":"34124","type":"BoxAnnotation"}},"id":"34118","type":"BoxZoomTool"},{"attributes":{},"id":"34140","type":"BasicTickFormatter"},{"attributes":{},"id":"34104","type":"LinearScale"},{"attributes":{"formatter":{"id":"34138","type":"BasicTickFormatter"},"plot":{"id":"34097","subtype":"Figure","type":"Plot"},"ticker":{"id":"34112","type":"BasicTicker"}},"id":"34111","type":"LinearAxis"},{"attributes":{},"id":"34112","type":"BasicTicker"}],"root_ids":["34097"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"d9e3e500-ec16-4581-b59d-6e5bd7e6aa8c","roots":{"34097":"59ba0f8a-3141-4ea7-81e0-2bdb2c603cfe"}}];
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
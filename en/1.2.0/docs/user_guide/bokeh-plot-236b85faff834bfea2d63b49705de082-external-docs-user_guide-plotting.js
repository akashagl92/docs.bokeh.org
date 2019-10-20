(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("d37b696c-6b28-474d-9ef4-f4478a8c1bb4");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd37b696c-6b28-474d-9ef4-f4478a8c1bb4' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.css"];
    
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
                    
                  var docs_json = '{"853880b8-fdba-41fa-80c6-c3a5139c2498":{"roots":{"references":[{"attributes":{"fields":["y1"]},"id":"28151","type":"Stack"},{"attributes":{},"id":"28170","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"28171","type":"BoxAnnotation"}},"id":"28140","type":"BoxZoomTool"},{"attributes":{},"id":"28142","type":"ResetTool"},{"attributes":{"text":""},"id":"28163","type":"Title"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28151","type":"Stack"}}},"id":"28154","type":"Line"},{"attributes":{"formatter":{"id":"28165","type":"BasicTickFormatter"},"ticker":{"id":"28134","type":"BasicTicker"}},"id":"28133","type":"LinearAxis"},{"attributes":{"callback":null},"id":"28120","type":"DataRange1d"},{"attributes":{},"id":"28141","type":"SaveTool"},{"attributes":{"fields":["y1","y2"]},"id":"28152","type":"Stack"},{"attributes":{},"id":"28134","type":"BasicTicker"},{"attributes":{"formatter":{"id":"28167","type":"BasicTickFormatter"},"ticker":{"id":"28129","type":"BasicTicker"}},"id":"28128","type":"LinearAxis"},{"attributes":{},"id":"28143","type":"HelpTool"},{"attributes":{},"id":"28124","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y1":[1,2,4,3,4],"y2":[1,4,2,2,3]},"selected":{"id":"28169","type":"Selection"},"selection_policy":{"id":"28170","type":"UnionRenderers"}},"id":"28118","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"28118","type":"ColumnDataSource"},"glyph":{"id":"28154","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"28155","type":"Line"},"selection_glyph":null,"view":{"id":"28157","type":"CDSView"}},"id":"28156","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28152","type":"Stack"}}},"id":"28160","type":"Line"},{"attributes":{"source":{"id":"28118","type":"ColumnDataSource"}},"id":"28162","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28171","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"28134","type":"BasicTicker"}},"id":"28137","type":"Grid"},{"attributes":{},"id":"28169","type":"Selection"},{"attributes":{"data_source":{"id":"28118","type":"ColumnDataSource"},"glyph":{"id":"28159","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"28160","type":"Line"},"selection_glyph":null,"view":{"id":"28162","type":"CDSView"}},"id":"28161","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28152","type":"Stack"}}},"id":"28159","type":"Line"},{"attributes":{"callback":null},"id":"28122","type":"DataRange1d"},{"attributes":{},"id":"28165","type":"BasicTickFormatter"},{"attributes":{},"id":"28129","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"expr":{"id":"28151","type":"Stack"}}},"id":"28155","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"28138","type":"PanTool"},{"id":"28139","type":"WheelZoomTool"},{"id":"28140","type":"BoxZoomTool"},{"id":"28141","type":"SaveTool"},{"id":"28142","type":"ResetTool"},{"id":"28143","type":"HelpTool"}]},"id":"28144","type":"Toolbar"},{"attributes":{},"id":"28139","type":"WheelZoomTool"},{"attributes":{"source":{"id":"28118","type":"ColumnDataSource"}},"id":"28157","type":"CDSView"},{"attributes":{},"id":"28126","type":"LinearScale"},{"attributes":{"below":[{"id":"28128","type":"LinearAxis"}],"center":[{"id":"28132","type":"Grid"},{"id":"28137","type":"Grid"}],"left":[{"id":"28133","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"28156","type":"GlyphRenderer"},{"id":"28161","type":"GlyphRenderer"}],"title":{"id":"28163","type":"Title"},"toolbar":{"id":"28144","type":"Toolbar"},"x_range":{"id":"28120","type":"DataRange1d"},"x_scale":{"id":"28124","type":"LinearScale"},"y_range":{"id":"28122","type":"DataRange1d"},"y_scale":{"id":"28126","type":"LinearScale"}},"id":"28119","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"28138","type":"PanTool"},{"attributes":{},"id":"28167","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"28129","type":"BasicTicker"}},"id":"28132","type":"Grid"}],"root_ids":["28119"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"853880b8-fdba-41fa-80c6-c3a5139c2498","roots":{"28119":"d37b696c-6b28-474d-9ef4-f4478a8c1bb4"}}];
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
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
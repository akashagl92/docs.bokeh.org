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
      };var element = document.getElementById("e4cb83ba-ef77-4b7c-93d6-bc0abc121b08");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e4cb83ba-ef77-4b7c-93d6-bc0abc121b08' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js"];
      var css_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.css", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.css"];
    
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
                    
                  var docs_json = '{"d429847f-2dbb-403f-8cdb-cd53bc388fca":{"roots":{"references":[{"attributes":{},"id":"15688","type":"HelpTool"},{"attributes":{"callback":null},"id":"15665","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"15709","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"15679","type":"BasicTicker"}},"id":"15682","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15683","type":"PanTool"},{"id":"15684","type":"WheelZoomTool"},{"id":"15685","type":"BoxZoomTool"},{"id":"15686","type":"SaveTool"},{"id":"15687","type":"ResetTool"},{"id":"15688","type":"HelpTool"}]},"id":"15689","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15698","type":"Patches"},{"attributes":{},"id":"15671","type":"LinearScale"},{"attributes":{"formatter":{"id":"15704","type":"BasicTickFormatter"},"ticker":{"id":"15679","type":"BasicTicker"}},"id":"15678","type":"LinearAxis"},{"attributes":{"callback":null},"id":"15667","type":"DataRange1d"},{"attributes":{"source":{"id":"15696","type":"ColumnDataSource"}},"id":"15700","type":"CDSView"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15697","type":"Patches"},{"attributes":{},"id":"15669","type":"LinearScale"},{"attributes":{"data_source":{"id":"15696","type":"ColumnDataSource"},"glyph":{"id":"15697","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15698","type":"Patches"},"selection_glyph":null,"view":{"id":"15700","type":"CDSView"}},"id":"15699","type":"GlyphRenderer"},{"attributes":{},"id":"15683","type":"PanTool"},{"attributes":{"formatter":{"id":"15706","type":"BasicTickFormatter"},"ticker":{"id":"15674","type":"BasicTicker"}},"id":"15673","type":"LinearAxis"},{"attributes":{"text":""},"id":"15702","type":"Title"},{"attributes":{},"id":"15684","type":"WheelZoomTool"},{"attributes":{},"id":"15679","type":"BasicTicker"},{"attributes":{},"id":"15704","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"15709","type":"BoxAnnotation"}},"id":"15685","type":"BoxZoomTool"},{"attributes":{},"id":"15674","type":"BasicTicker"},{"attributes":{},"id":"15706","type":"BasicTickFormatter"},{"attributes":{},"id":"15686","type":"SaveTool"},{"attributes":{"ticker":{"id":"15674","type":"BasicTicker"}},"id":"15677","type":"Grid"},{"attributes":{},"id":"15707","type":"UnionRenderers"},{"attributes":{"below":[{"id":"15673","type":"LinearAxis"}],"center":[{"id":"15677","type":"Grid"},{"id":"15682","type":"Grid"}],"left":[{"id":"15678","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"15699","type":"GlyphRenderer"}],"title":{"id":"15702","type":"Title"},"toolbar":{"id":"15689","type":"Toolbar"},"x_range":{"id":"15665","type":"DataRange1d"},"x_scale":{"id":"15669","type":"LinearScale"},"y_range":{"id":"15667","type":"DataRange1d"},"y_scale":{"id":"15671","type":"LinearScale"}},"id":"15664","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15687","type":"ResetTool"},{"attributes":{},"id":"15708","type":"Selection"},{"attributes":{"callback":null,"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]},"selected":{"id":"15708","type":"Selection"},"selection_policy":{"id":"15707","type":"UnionRenderers"}},"id":"15696","type":"ColumnDataSource"}],"root_ids":["15664"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"d429847f-2dbb-403f-8cdb-cd53bc388fca","roots":{"15664":"e4cb83ba-ef77-4b7c-93d6-bc0abc121b08"}}];
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
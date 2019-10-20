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
      };var element = document.getElementById("3ce3c41f-f0cc-419c-96ba-83fa2568c5fa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3ce3c41f-f0cc-419c-96ba-83fa2568c5fa' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js"];
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
                    
                  var docs_json = '{"1d1d90dc-3b64-4288-a6fb-de0e2228f46c":{"roots":{"references":[{"attributes":{},"id":"16052","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"16058","type":"BoxAnnotation"}},"id":"16034","type":"BoxZoomTool"},{"attributes":{},"id":"16056","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16032","type":"PanTool"},{"id":"16033","type":"WheelZoomTool"},{"id":"16034","type":"BoxZoomTool"},{"id":"16035","type":"SaveTool"},{"id":"16036","type":"ResetTool"},{"id":"16037","type":"HelpTool"}]},"id":"16038","type":"Toolbar"},{"attributes":{"ticker":{"id":"16023","type":"BasicTicker"}},"id":"16026","type":"Grid"},{"attributes":{"text":""},"id":"16050","type":"Title"},{"attributes":{},"id":"16035","type":"SaveTool"},{"attributes":{},"id":"16057","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"16052","type":"BasicTickFormatter"},"ticker":{"id":"16028","type":"BasicTicker"}},"id":"16027","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16058","type":"BoxAnnotation"},{"attributes":{},"id":"16036","type":"ResetTool"},{"attributes":{"source":{"id":"16045","type":"ColumnDataSource"}},"id":"16049","type":"CDSView"},{"attributes":{},"id":"16028","type":"BasicTicker"},{"attributes":{"callback":null},"id":"16014","type":"DataRange1d"},{"attributes":{},"id":"16037","type":"HelpTool"},{"attributes":{"data_source":{"id":"16045","type":"ColumnDataSource"},"glyph":{"id":"16046","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16047","type":"MultiLine"},"selection_glyph":null,"view":{"id":"16049","type":"CDSView"}},"id":"16048","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"16028","type":"BasicTicker"}},"id":"16031","type":"Grid"},{"attributes":{"callback":null},"id":"16016","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16047","type":"MultiLine"},{"attributes":{"formatter":{"id":"16054","type":"BasicTickFormatter"},"ticker":{"id":"16023","type":"BasicTicker"}},"id":"16022","type":"LinearAxis"},{"attributes":{"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"16046","type":"MultiLine"},{"attributes":{},"id":"16018","type":"LinearScale"},{"attributes":{"callback":null,"data":{"line_color":["red","green"],"xs":[[1,2,3],[2,3,4]],"ys":[[6,7,2],[4,5,7]]},"selected":{"id":"16056","type":"Selection"},"selection_policy":{"id":"16057","type":"UnionRenderers"}},"id":"16045","type":"ColumnDataSource"},{"attributes":{},"id":"16020","type":"LinearScale"},{"attributes":{},"id":"16032","type":"PanTool"},{"attributes":{"below":[{"id":"16022","type":"LinearAxis"}],"center":[{"id":"16026","type":"Grid"},{"id":"16031","type":"Grid"}],"left":[{"id":"16027","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16048","type":"GlyphRenderer"}],"title":{"id":"16050","type":"Title"},"toolbar":{"id":"16038","type":"Toolbar"},"x_range":{"id":"16014","type":"DataRange1d"},"x_scale":{"id":"16018","type":"LinearScale"},"y_range":{"id":"16016","type":"DataRange1d"},"y_scale":{"id":"16020","type":"LinearScale"}},"id":"16013","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"16023","type":"BasicTicker"},{"attributes":{},"id":"16054","type":"BasicTickFormatter"},{"attributes":{},"id":"16033","type":"WheelZoomTool"}],"root_ids":["16013"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"1d1d90dc-3b64-4288-a6fb-de0e2228f46c","roots":{"16013":"3ce3c41f-f0cc-419c-96ba-83fa2568c5fa"}}];
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
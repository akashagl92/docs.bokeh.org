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
      };var element = document.getElementById("78152e8a-8c11-4097-9360-e7cfda9f998e");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '78152e8a-8c11-4097-9360-e7cfda9f998e' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e052f086-ce6b-4d2e-9d0b-5378547b0c86":{"roots":{"references":[{"attributes":{"formatter":{"id":"17829","type":"BasicTickFormatter"},"ticker":{"id":"17801","type":"BasicTicker"}},"id":"17800","type":"LinearAxis"},{"attributes":{"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"17819","type":"MultiLine"},{"attributes":{},"id":"17801","type":"BasicTicker"},{"attributes":{},"id":"17809","type":"ResetTool"},{"attributes":{},"id":"17806","type":"WheelZoomTool"},{"attributes":{},"id":"17833","type":"Selection"},{"attributes":{},"id":"17805","type":"PanTool"},{"attributes":{},"id":"17791","type":"LinearScale"},{"attributes":{},"id":"17810","type":"HelpTool"},{"attributes":{},"id":"17808","type":"SaveTool"},{"attributes":{"callback":null},"id":"17789","type":"DataRange1d"},{"attributes":{},"id":"17831","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"line_color":["orange","red"],"xs":[[1,2,3],[1,2,3]],"ys":[[1,3,2],[3,4,3]]},"selected":{"id":"17833","type":"Selection"},"selection_policy":{"id":"17832","type":"UnionRenderers"}},"id":"17818","type":"ColumnDataSource"},{"attributes":{},"id":"17829","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17787","type":"DataRange1d"},{"attributes":{"ticker":{"id":"17796","type":"BasicTicker"}},"id":"17799","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"17820","type":"MultiLine"},{"attributes":{},"id":"17796","type":"BasicTicker"},{"attributes":{"below":[{"id":"17795","type":"LinearAxis"}],"center":[{"id":"17799","type":"Grid"},{"id":"17804","type":"Grid"},{"id":"17825","type":"Legend"}],"left":[{"id":"17800","type":"LinearAxis"}],"renderers":[{"id":"17821","type":"GlyphRenderer"}],"title":{"id":"17827","type":"Title"},"toolbar":{"id":"17811","type":"Toolbar"},"x_range":{"id":"17787","type":"DataRange1d"},"x_scale":{"id":"17791","type":"LinearScale"},"y_range":{"id":"17789","type":"DataRange1d"},"y_scale":{"id":"17793","type":"LinearScale"}},"id":"17786","subtype":"Figure","type":"Plot"},{"attributes":{"index":0,"label":{"value":"orange"},"renderers":[{"id":"17821","type":"GlyphRenderer"}]},"id":"17823","type":"LegendItem"},{"attributes":{"formatter":{"id":"17831","type":"BasicTickFormatter"},"ticker":{"id":"17796","type":"BasicTicker"}},"id":"17795","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"17801","type":"BasicTicker"}},"id":"17804","type":"Grid"},{"attributes":{},"id":"17793","type":"LinearScale"},{"attributes":{"index":1,"label":{"value":"red"},"renderers":[{"id":"17821","type":"GlyphRenderer"}]},"id":"17824","type":"LegendItem"},{"attributes":{},"id":"17832","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17805","type":"PanTool"},{"id":"17806","type":"WheelZoomTool"},{"id":"17807","type":"BoxZoomTool"},{"id":"17808","type":"SaveTool"},{"id":"17809","type":"ResetTool"},{"id":"17810","type":"HelpTool"}]},"id":"17811","type":"Toolbar"},{"attributes":{"items":[{"id":"17823","type":"LegendItem"},{"id":"17824","type":"LegendItem"}]},"id":"17825","type":"Legend"},{"attributes":{"source":{"id":"17818","type":"ColumnDataSource"}},"id":"17822","type":"CDSView"},{"attributes":{"text":""},"id":"17827","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"17834","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"17834","type":"BoxAnnotation"}},"id":"17807","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"17818","type":"ColumnDataSource"},"glyph":{"id":"17819","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17820","type":"MultiLine"},"selection_glyph":null,"view":{"id":"17822","type":"CDSView"}},"id":"17821","type":"GlyphRenderer"}],"root_ids":["17786"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"e052f086-ce6b-4d2e-9d0b-5378547b0c86","roots":{"17786":"78152e8a-8c11-4097-9360-e7cfda9f998e"}}];
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
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
      };var element = document.getElementById("f06340d8-5d60-4c6c-a42b-63616d899da5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f06340d8-5d60-4c6c-a42b-63616d899da5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"df5c77f2-118f-49aa-a176-763bf99297fb":{"roots":{"references":[{"attributes":{"formatter":{"id":"18594","type":"BasicTickFormatter"},"ticker":{"id":"18560","type":"BasicTicker"}},"id":"18559","type":"LinearAxis"},{"attributes":{"text":""},"id":"18590","type":"Title"},{"attributes":{},"id":"18573","type":"ResetTool"},{"attributes":{"index":1,"label":{"value":"red"},"renderers":[{"id":"18585","type":"GlyphRenderer"}]},"id":"18588","type":"LegendItem"},{"attributes":{"source":{"id":"18582","type":"ColumnDataSource"}},"id":"18586","type":"CDSView"},{"attributes":{"ticker":{"id":"18560","type":"BasicTicker"}},"id":"18563","type":"Grid"},{"attributes":{},"id":"18560","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"18598","type":"BoxAnnotation"},{"attributes":{},"id":"18557","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"18569","type":"PanTool"},{"id":"18570","type":"WheelZoomTool"},{"id":"18571","type":"BoxZoomTool"},{"id":"18572","type":"SaveTool"},{"id":"18573","type":"ResetTool"},{"id":"18574","type":"HelpTool"}]},"id":"18575","type":"Toolbar"},{"attributes":{},"id":"18565","type":"BasicTicker"},{"attributes":{},"id":"18569","type":"PanTool"},{"attributes":{"items":[{"id":"18587","type":"LegendItem"},{"id":"18588","type":"LegendItem"}]},"id":"18589","type":"Legend"},{"attributes":{},"id":"18555","type":"LinearScale"},{"attributes":{},"id":"18574","type":"HelpTool"},{"attributes":{},"id":"18592","type":"BasicTickFormatter"},{"attributes":{"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18583","type":"MultiLine"},{"attributes":{"index":0,"label":{"value":"orange"},"renderers":[{"id":"18585","type":"GlyphRenderer"}]},"id":"18587","type":"LegendItem"},{"attributes":{},"id":"18594","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"18565","type":"BasicTicker"}},"id":"18568","type":"Grid"},{"attributes":{"below":[{"id":"18559","type":"LinearAxis"}],"center":[{"id":"18563","type":"Grid"},{"id":"18568","type":"Grid"},{"id":"18589","type":"Legend"}],"left":[{"id":"18564","type":"LinearAxis"}],"renderers":[{"id":"18585","type":"GlyphRenderer"}],"title":{"id":"18590","type":"Title"},"toolbar":{"id":"18575","type":"Toolbar"},"x_range":{"id":"18551","type":"DataRange1d"},"x_scale":{"id":"18555","type":"LinearScale"},"y_range":{"id":"18553","type":"DataRange1d"},"y_scale":{"id":"18557","type":"LinearScale"}},"id":"18550","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"18551","type":"DataRange1d"},{"attributes":{},"id":"18597","type":"UnionRenderers"},{"attributes":{},"id":"18596","type":"Selection"},{"attributes":{"callback":null,"data":{"line_color":["orange","red"],"xs":[[1,2,3],[1,2,3]],"ys":[[1,3,2],[3,4,3]]},"selected":{"id":"18596","type":"Selection"},"selection_policy":{"id":"18597","type":"UnionRenderers"}},"id":"18582","type":"ColumnDataSource"},{"attributes":{},"id":"18572","type":"SaveTool"},{"attributes":{"overlay":{"id":"18598","type":"BoxAnnotation"}},"id":"18571","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"18553","type":"DataRange1d"},{"attributes":{},"id":"18570","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"18592","type":"BasicTickFormatter"},"ticker":{"id":"18565","type":"BasicTicker"}},"id":"18564","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18584","type":"MultiLine"},{"attributes":{"data_source":{"id":"18582","type":"ColumnDataSource"},"glyph":{"id":"18583","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18584","type":"MultiLine"},"selection_glyph":null,"view":{"id":"18586","type":"CDSView"}},"id":"18585","type":"GlyphRenderer"}],"root_ids":["18550"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"df5c77f2-118f-49aa-a176-763bf99297fb","roots":{"18550":"f06340d8-5d60-4c6c-a42b-63616d899da5"}}];
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
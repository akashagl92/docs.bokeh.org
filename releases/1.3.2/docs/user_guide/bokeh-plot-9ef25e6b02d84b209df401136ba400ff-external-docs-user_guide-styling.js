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
      };var element = document.getElementById("e77152ca-c9af-4b3d-a06a-b5ac0a967b58");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e77152ca-c9af-4b3d-a06a-b5ac0a967b58' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.2.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.2.min.js"];
      var css_urls = [];
    
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
                    
                  var docs_json = '{"4986fa02-3f43-4040-a7c4-99b687e2de33":{"roots":{"references":[{"attributes":{},"id":"33738","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"33701","type":"DataRange1d"},{"attributes":{},"id":"33736","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"33739","type":"Selection"},"selection_policy":{"id":"33738","type":"UnionRenderers"}},"id":"33728","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"33703","type":"DataRange1d"},{"attributes":{},"id":"33734","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"33740","type":"BoxAnnotation"}},"id":"33719","type":"BoxSelectTool"},{"attributes":{"dimension":1,"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33718","type":"Grid"},{"attributes":{},"id":"33705","type":"LinearScale"},{"attributes":{"source":{"id":"33728","type":"ColumnDataSource"}},"id":"33732","type":"CDSView"},{"attributes":{"data_source":{"id":"33728","type":"ColumnDataSource"},"glyph":{"id":"33729","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33730","type":"Circle"},"selection_glyph":null,"view":{"id":"33732","type":"CDSView"}},"id":"33731","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"33741","type":"BoxAnnotation"}},"id":"33720","type":"BoxZoomTool"},{"attributes":{},"id":"33707","type":"LinearScale"},{"attributes":{"formatter":{"id":"33734","type":"BasicTickFormatter"},"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33709","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"33742","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33730","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"33742","type":"PolyAnnotation"}},"id":"33721","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33741","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33713","type":"Grid"},{"attributes":{},"id":"33722","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33740","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"33736","type":"BasicTickFormatter"},"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33714","type":"LinearAxis"},{"attributes":{"below":[{"id":"33709","type":"LinearAxis"}],"center":[{"id":"33713","type":"Grid"},{"id":"33718","type":"Grid"}],"left":[{"id":"33714","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33731","type":"GlyphRenderer"}],"title":{"id":"33699","type":"Title"},"toolbar":{"id":"33723","type":"Toolbar"},"x_range":{"id":"33701","type":"DataRange1d"},"x_scale":{"id":"33705","type":"LinearScale"},"y_range":{"id":"33703","type":"DataRange1d"},"y_scale":{"id":"33707","type":"LinearScale"}},"id":"33698","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33719","type":"BoxSelectTool"},{"id":"33720","type":"BoxZoomTool"},{"id":"33721","type":"LassoSelectTool"},{"id":"33722","type":"ResetTool"}]},"id":"33723","type":"Toolbar"},{"attributes":{},"id":"33710","type":"BasicTicker"},{"attributes":{},"id":"33739","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33729","type":"Circle"},{"attributes":{},"id":"33715","type":"BasicTicker"},{"attributes":{"text":"Select and Zoom"},"id":"33699","type":"Title"}],"root_ids":["33698"]},"title":"Bokeh Application","version":"1.3.2"}}';
                  var render_items = [{"docid":"4986fa02-3f43-4040-a7c4-99b687e2de33","roots":{"33698":"e77152ca-c9af-4b3d-a06a-b5ac0a967b58"}}];
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
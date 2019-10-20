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
      };var element = document.getElementById("6a179b57-cd44-4e14-ba38-de9f94ab7a42");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6a179b57-cd44-4e14-ba38-de9f94ab7a42' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.1.min.js"];
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
                    
                  var docs_json = '{"8d53f19d-a88b-435e-8c4f-b1fb180bd12b":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33729","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33730","type":"Circle"},{"attributes":{},"id":"33736","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"33728","type":"ColumnDataSource"},"glyph":{"id":"33729","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33730","type":"Circle"},"selection_glyph":null,"view":{"id":"33732","type":"CDSView"}},"id":"33731","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33738","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"33701","type":"DataRange1d"},{"attributes":{},"id":"33710","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33719","type":"BoxSelectTool"},{"id":"33720","type":"BoxZoomTool"},{"id":"33721","type":"LassoSelectTool"},{"id":"33722","type":"ResetTool"}]},"id":"33723","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"33740","type":"PolyAnnotation"}},"id":"33721","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33739","type":"BoxAnnotation"},{"attributes":{"text":"Select and Zoom"},"id":"33699","type":"Title"},{"attributes":{},"id":"33722","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"33740","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"33738","type":"BoxAnnotation"}},"id":"33719","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"33709","type":"LinearAxis"}],"center":[{"id":"33713","type":"Grid"},{"id":"33718","type":"Grid"}],"left":[{"id":"33714","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33731","type":"GlyphRenderer"}],"title":{"id":"33699","type":"Title"},"toolbar":{"id":"33723","type":"Toolbar"},"x_range":{"id":"33701","type":"DataRange1d"},"x_scale":{"id":"33705","type":"LinearScale"},"y_range":{"id":"33703","type":"DataRange1d"},"y_scale":{"id":"33707","type":"LinearScale"}},"id":"33698","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"33741","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33718","type":"Grid"},{"attributes":{},"id":"33742","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"33741","type":"Selection"},"selection_policy":{"id":"33742","type":"UnionRenderers"}},"id":"33728","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"33703","type":"DataRange1d"},{"attributes":{},"id":"33734","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"33739","type":"BoxAnnotation"}},"id":"33720","type":"BoxZoomTool"},{"attributes":{},"id":"33705","type":"LinearScale"},{"attributes":{},"id":"33707","type":"LinearScale"},{"attributes":{},"id":"33715","type":"BasicTicker"},{"attributes":{"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33713","type":"Grid"},{"attributes":{"formatter":{"id":"33736","type":"BasicTickFormatter"},"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33709","type":"LinearAxis"},{"attributes":{"source":{"id":"33728","type":"ColumnDataSource"}},"id":"33732","type":"CDSView"},{"attributes":{"formatter":{"id":"33734","type":"BasicTickFormatter"},"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33714","type":"LinearAxis"}],"root_ids":["33698"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"8d53f19d-a88b-435e-8c4f-b1fb180bd12b","roots":{"33698":"6a179b57-cd44-4e14-ba38-de9f94ab7a42"}}];
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
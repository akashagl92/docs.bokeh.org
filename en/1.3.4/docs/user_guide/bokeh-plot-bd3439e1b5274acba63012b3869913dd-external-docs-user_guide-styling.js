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
      };var element = document.getElementById("34aa900f-fd22-4a46-ab7f-d0da99088d8f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '34aa900f-fd22-4a46-ab7f-d0da99088d8f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.4.min.js"];
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
                    
                  var docs_json = '{"415fcca4-31f7-4bdd-97b9-aeb058613dc9":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"33719","type":"BoxSelectTool"},{"id":"33720","type":"BoxZoomTool"},{"id":"33721","type":"LassoSelectTool"},{"id":"33722","type":"ResetTool"}]},"id":"33723","type":"Toolbar"},{"attributes":{"formatter":{"id":"33737","type":"BasicTickFormatter"},"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33709","type":"LinearAxis"},{"attributes":{},"id":"33710","type":"BasicTicker"},{"attributes":{},"id":"33722","type":"ResetTool"},{"attributes":{},"id":"33735","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"33735","type":"BasicTickFormatter"},"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33714","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"33742","type":"PolyAnnotation"}},"id":"33721","type":"LassoSelectTool"},{"attributes":{},"id":"33738","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"33740","type":"BoxAnnotation"}},"id":"33719","type":"BoxSelectTool"},{"attributes":{"ticker":{"id":"33710","type":"BasicTicker"}},"id":"33713","type":"Grid"},{"attributes":{},"id":"33739","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33730","type":"Circle"},{"attributes":{"overlay":{"id":"33741","type":"BoxAnnotation"}},"id":"33720","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33741","type":"BoxAnnotation"},{"attributes":{"source":{"id":"33728","type":"ColumnDataSource"}},"id":"33732","type":"CDSView"},{"attributes":{},"id":"33705","type":"LinearScale"},{"attributes":{},"id":"33737","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"33701","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"33715","type":"BasicTicker"}},"id":"33718","type":"Grid"},{"attributes":{},"id":"33715","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"33738","type":"Selection"},"selection_policy":{"id":"33739","type":"UnionRenderers"}},"id":"33728","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33728","type":"ColumnDataSource"},"glyph":{"id":"33729","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"33730","type":"Circle"},"selection_glyph":null,"view":{"id":"33732","type":"CDSView"}},"id":"33731","type":"GlyphRenderer"},{"attributes":{},"id":"33707","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"33729","type":"Circle"},{"attributes":{"text":"Select and Zoom"},"id":"33699","type":"Title"},{"attributes":{"below":[{"id":"33709","type":"LinearAxis"}],"center":[{"id":"33713","type":"Grid"},{"id":"33718","type":"Grid"}],"left":[{"id":"33714","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"33731","type":"GlyphRenderer"}],"title":{"id":"33699","type":"Title"},"toolbar":{"id":"33723","type":"Toolbar"},"x_range":{"id":"33701","type":"DataRange1d"},"x_scale":{"id":"33705","type":"LinearScale"},"y_range":{"id":"33703","type":"DataRange1d"},"y_scale":{"id":"33707","type":"LinearScale"}},"id":"33698","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33740","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"33742","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"33703","type":"DataRange1d"}],"root_ids":["33698"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"415fcca4-31f7-4bdd-97b9-aeb058613dc9","roots":{"33698":"34aa900f-fd22-4a46-ab7f-d0da99088d8f"}}];
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
        
        
        }
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
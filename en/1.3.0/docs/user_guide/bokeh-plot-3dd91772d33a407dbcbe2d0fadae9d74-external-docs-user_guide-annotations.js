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
      };var element = document.getElementById("fde39d05-092a-4734-bd0a-bf8aec8970fc");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fde39d05-092a-4734-bd0a-bf8aec8970fc' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
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
                    
                  var docs_json = '{"a5f82bc6-1735-41fd-9ffa-1e2caea1984c":{"roots":{"references":[{"attributes":{},"id":"19182","type":"LinearScale"},{"attributes":{"overlay":{"id":"19219","type":"BoxAnnotation"}},"id":"19196","type":"BoxZoomTool"},{"attributes":{},"id":"19198","type":"ResetTool"},{"attributes":{},"id":"19220","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19207","type":"ColumnDataSource"},"glyph":{"id":"19208","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19209","type":"Circle"},"selection_glyph":null,"view":{"id":"19211","type":"CDSView"}},"id":"19210","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"19190","type":"BasicTicker"}},"id":"19193","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19194","type":"PanTool"},{"id":"19195","type":"WheelZoomTool"},{"id":"19196","type":"BoxZoomTool"},{"id":"19197","type":"SaveTool"},{"id":"19198","type":"ResetTool"},{"id":"19199","type":"HelpTool"}]},"id":"19200","type":"Toolbar"},{"attributes":{},"id":"19180","type":"LinearScale"},{"attributes":{},"id":"19197","type":"SaveTool"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"19208","type":"Circle"},{"attributes":{"axis_label":"y","formatter":{"id":"19218","type":"BasicTickFormatter"},"ticker":{"id":"19190","type":"BasicTicker"}},"id":"19189","type":"LinearAxis"},{"attributes":{},"id":"19185","type":"BasicTicker"},{"attributes":{},"id":"19218","type":"BasicTickFormatter"},{"attributes":{"ticker":{"id":"19185","type":"BasicTicker"}},"id":"19188","type":"Grid"},{"attributes":{},"id":"19199","type":"HelpTool"},{"attributes":{"callback":null},"id":"19176","type":"DataRange1d"},{"attributes":{},"id":"19190","type":"BasicTicker"},{"attributes":{"text":""},"id":"19214","type":"Title"},{"attributes":{},"id":"19194","type":"PanTool"},{"attributes":{},"id":"19216","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"19207","type":"ColumnDataSource"}},"id":"19211","type":"CDSView"},{"attributes":{"callback":null,"end":53.956801728792776},"id":"19178","type":"Range1d"},{"attributes":{"gradient":2,"line_color":{"value":"orange"},"line_dash":[6],"line_width":{"value":3.5},"y_intercept":10},"id":"19212","type":"Slope"},{"attributes":{},"id":"19221","type":"Selection"},{"attributes":{},"id":"19195","type":"WheelZoomTool"},{"attributes":{"axis_label":"x","formatter":{"id":"19216","type":"BasicTickFormatter"},"ticker":{"id":"19185","type":"BasicTicker"}},"id":"19184","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"19219","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"19184","type":"LinearAxis"}],"center":[{"id":"19188","type":"Grid"},{"id":"19193","type":"Grid"},{"id":"19212","type":"Slope"}],"left":[{"id":"19189","type":"LinearAxis"}],"plot_height":450,"plot_width":450,"renderers":[{"id":"19210","type":"GlyphRenderer"}],"title":{"id":"19214","type":"Title"},"toolbar":{"id":"19200","type":"Toolbar"},"x_range":{"id":"19176","type":"DataRange1d"},"x_scale":{"id":"19180","type":"LinearScale"},"y_range":{"id":"19178","type":"Range1d"},"y_scale":{"id":"19182","type":"LinearScale"}},"id":"19175","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"19209","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],"y":{"__ndarray__":"bwdCjSclIkATlIl5p44lQKu6/vzNtzBAlcM8QCe8LkB9lj0aeaE3QIkxzmbqcjlA82qYq+cdNkBfX3r+XYA6QPlCnp4KcDpAX0qGWA2HOkARahIy+i0/QO+/LLnuOT9Arkjvkl8LQUD2QAOSTv5EQO1AMqzkVEBA6CmYD+MmREB7QdcjcrZEQJcIrxGyqkZA/Or5rcGhR0C+mWUSnIZIQA==","dtype":"float64","shape":[20]}},"selected":{"id":"19221","type":"Selection"},"selection_policy":{"id":"19220","type":"UnionRenderers"}},"id":"19207","type":"ColumnDataSource"}],"root_ids":["19175"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"a5f82bc6-1735-41fd-9ffa-1e2caea1984c","roots":{"19175":"fde39d05-092a-4734-bd0a-bf8aec8970fc"}}];
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
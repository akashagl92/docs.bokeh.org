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
      };var element = document.getElementById("cd5f2cb7-d5b2-4c66-a056-3f7218ddae35");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cd5f2cb7-d5b2-4c66-a056-3f7218ddae35' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"634ba316-b530-4e01-88f2-ba336e25f507":{"roots":{"references":[{"attributes":{"callback":null},"id":"36754","type":"DataRange1d"},{"attributes":{},"id":"36766","type":"BasicTicker"},{"attributes":{},"id":"36791","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"36752","type":"DataRange1d"},{"attributes":{"ticker":{"id":"36761","type":"BasicTicker"}},"id":"36764","type":"Grid"},{"attributes":{"source":{"id":"36783","type":"ColumnDataSource"}},"id":"36787","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"36794","type":"Selection"},"selection_policy":{"id":"36795","type":"UnionRenderers"}},"id":"36783","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"36789","type":"BasicTickFormatter"},"ticker":{"id":"36766","type":"BasicTicker"}},"id":"36765","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"36770","type":"PanTool"},{"id":"36771","type":"WheelZoomTool"},{"id":"36772","type":"BoxZoomTool"},{"id":"36773","type":"SaveTool"},{"id":"36774","type":"ResetTool"},{"id":"36775","type":"HelpTool"}]},"id":"36776","type":"Toolbar"},{"attributes":{},"id":"36795","type":"UnionRenderers"},{"attributes":{},"id":"36761","type":"BasicTicker"},{"attributes":{"data_source":{"id":"36783","type":"ColumnDataSource"},"glyph":{"id":"36784","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36785","type":"Circle"},"selection_glyph":null,"view":{"id":"36787","type":"CDSView"}},"id":"36786","type":"GlyphRenderer"},{"attributes":{},"id":"36770","type":"PanTool"},{"attributes":{"formatter":{"id":"36791","type":"BasicTickFormatter"},"ticker":{"id":"36761","type":"BasicTicker"}},"id":"36760","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36785","type":"Circle"},{"attributes":{},"id":"36771","type":"WheelZoomTool"},{"attributes":{},"id":"36789","type":"BasicTickFormatter"},{"attributes":{},"id":"36794","type":"Selection"},{"attributes":{},"id":"36775","type":"HelpTool"},{"attributes":{},"id":"36773","type":"SaveTool"},{"attributes":{},"id":"36758","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"36784","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"36793","type":"BoxAnnotation"},{"attributes":{},"id":"36774","type":"ResetTool"},{"attributes":{"dimension":1,"ticker":{"id":"36766","type":"BasicTicker"}},"id":"36769","type":"Grid"},{"attributes":{"overlay":{"id":"36793","type":"BoxAnnotation"}},"id":"36772","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"36760","type":"LinearAxis"}],"center":[{"id":"36764","type":"Grid"},{"id":"36769","type":"Grid"}],"left":[{"id":"36765","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"36786","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"36776","type":"Toolbar"},"toolbar_location":"below","toolbar_sticky":false,"x_range":{"id":"36752","type":"DataRange1d"},"x_scale":{"id":"36756","type":"LinearScale"},"y_range":{"id":"36754","type":"DataRange1d"},"y_scale":{"id":"36758","type":"LinearScale"}},"id":"36750","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"36756","type":"LinearScale"}],"root_ids":["36750"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"634ba316-b530-4e01-88f2-ba336e25f507","roots":{"36750":"cd5f2cb7-d5b2-4c66-a056-3f7218ddae35"}}];
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
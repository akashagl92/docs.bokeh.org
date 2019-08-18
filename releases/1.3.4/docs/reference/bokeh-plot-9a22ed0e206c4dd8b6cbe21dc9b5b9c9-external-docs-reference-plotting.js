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
      };var element = document.getElementById("574270e8-ab62-4f67-87d1-b15370ca56c2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '574270e8-ab62-4f67-87d1-b15370ca56c2' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"7dc3f73e-802e-4b60-a974-9763c189306c":{"roots":{"references":[{"attributes":{},"id":"16796","type":"BasicTicker"},{"attributes":{},"id":"16801","type":"WheelZoomTool"},{"attributes":{},"id":"16821","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16815","type":"Square"},{"attributes":{},"id":"16805","type":"HelpTool"},{"attributes":{},"id":"16788","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"16800","type":"PanTool"},{"id":"16801","type":"WheelZoomTool"},{"id":"16802","type":"BoxZoomTool"},{"id":"16803","type":"SaveTool"},{"id":"16804","type":"ResetTool"},{"id":"16805","type":"HelpTool"}]},"id":"16806","type":"Toolbar"},{"attributes":{},"id":"16791","type":"BasicTicker"},{"attributes":{},"id":"16804","type":"ResetTool"},{"attributes":{"data_source":{"id":"16813","type":"ColumnDataSource"},"glyph":{"id":"16814","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"16815","type":"Square"},"selection_glyph":null,"view":{"id":"16817","type":"CDSView"}},"id":"16816","type":"GlyphRenderer"},{"attributes":{},"id":"16800","type":"PanTool"},{"attributes":{"text":""},"id":"16819","type":"Title"},{"attributes":{"formatter":{"id":"16821","type":"BasicTickFormatter"},"ticker":{"id":"16796","type":"BasicTicker"}},"id":"16795","type":"LinearAxis"},{"attributes":{"formatter":{"id":"16823","type":"BasicTickFormatter"},"ticker":{"id":"16791","type":"BasicTicker"}},"id":"16790","type":"LinearAxis"},{"attributes":{},"id":"16825","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"16826","type":"BoxAnnotation"}},"id":"16802","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"16784","type":"DataRange1d"},{"attributes":{"dimension":1,"ticker":{"id":"16796","type":"BasicTicker"}},"id":"16799","type":"Grid"},{"attributes":{},"id":"16803","type":"SaveTool"},{"attributes":{"callback":null,"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"16824","type":"Selection"},"selection_policy":{"id":"16825","type":"UnionRenderers"}},"id":"16813","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"16791","type":"BasicTicker"}},"id":"16794","type":"Grid"},{"attributes":{"source":{"id":"16813","type":"ColumnDataSource"}},"id":"16817","type":"CDSView"},{"attributes":{},"id":"16823","type":"BasicTickFormatter"},{"attributes":{},"id":"16786","type":"LinearScale"},{"attributes":{},"id":"16824","type":"Selection"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16814","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"16826","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"16782","type":"DataRange1d"},{"attributes":{"below":[{"id":"16790","type":"LinearAxis"}],"center":[{"id":"16794","type":"Grid"},{"id":"16799","type":"Grid"}],"left":[{"id":"16795","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"16816","type":"GlyphRenderer"}],"title":{"id":"16819","type":"Title"},"toolbar":{"id":"16806","type":"Toolbar"},"x_range":{"id":"16782","type":"DataRange1d"},"x_scale":{"id":"16786","type":"LinearScale"},"y_range":{"id":"16784","type":"DataRange1d"},"y_scale":{"id":"16788","type":"LinearScale"}},"id":"16781","subtype":"Figure","type":"Plot"}],"root_ids":["16781"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"7dc3f73e-802e-4b60-a974-9763c189306c","roots":{"16781":"574270e8-ab62-4f67-87d1-b15370ca56c2"}}];
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
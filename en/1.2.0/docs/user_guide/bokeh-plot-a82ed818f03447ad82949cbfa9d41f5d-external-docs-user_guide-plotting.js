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
      };var element = document.getElementById("0b84d002-d316-4cf8-b5d8-bda8d7336b66");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0b84d002-d316-4cf8-b5d8-bda8d7336b66' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.2.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.2.0.min.js"];
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
                    
                  var docs_json = '{"6d5cfda1-78df-42f6-b337-26dbc7d9d1d1":{"roots":{"references":[{"attributes":{},"id":"30185","type":"Selection"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30175","type":"AnnularWedge"},{"attributes":{},"id":"30147","type":"LinearScale"},{"attributes":{},"id":"30181","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"30187","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"30143","type":"DataRange1d"},{"attributes":{},"id":"30162","type":"WheelZoomTool"},{"attributes":{},"id":"30157","type":"BasicTicker"},{"attributes":{},"id":"30186","type":"UnionRenderers"},{"attributes":{"dimension":1,"ticker":{"id":"30157","type":"BasicTicker"}},"id":"30160","type":"Grid"},{"attributes":{},"id":"30165","type":"ResetTool"},{"attributes":{"ticker":{"id":"30152","type":"BasicTicker"}},"id":"30155","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"30185","type":"Selection"},"selection_policy":{"id":"30186","type":"UnionRenderers"}},"id":"30174","type":"ColumnDataSource"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"30176","type":"AnnularWedge"},{"attributes":{"text":""},"id":"30179","type":"Title"},{"attributes":{},"id":"30149","type":"LinearScale"},{"attributes":{"formatter":{"id":"30181","type":"BasicTickFormatter"},"ticker":{"id":"30157","type":"BasicTicker"}},"id":"30156","type":"LinearAxis"},{"attributes":{"source":{"id":"30174","type":"ColumnDataSource"}},"id":"30178","type":"CDSView"},{"attributes":{},"id":"30152","type":"BasicTicker"},{"attributes":{"formatter":{"id":"30183","type":"BasicTickFormatter"},"ticker":{"id":"30152","type":"BasicTicker"}},"id":"30151","type":"LinearAxis"},{"attributes":{"overlay":{"id":"30187","type":"BoxAnnotation"}},"id":"30163","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"30151","type":"LinearAxis"}],"center":[{"id":"30155","type":"Grid"},{"id":"30160","type":"Grid"}],"left":[{"id":"30156","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"30177","type":"GlyphRenderer"}],"title":{"id":"30179","type":"Title"},"toolbar":{"id":"30167","type":"Toolbar"},"x_range":{"id":"30143","type":"DataRange1d"},"x_scale":{"id":"30147","type":"LinearScale"},"y_range":{"id":"30145","type":"DataRange1d"},"y_scale":{"id":"30149","type":"LinearScale"}},"id":"30142","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"30161","type":"PanTool"},{"attributes":{},"id":"30166","type":"HelpTool"},{"attributes":{"callback":null},"id":"30145","type":"DataRange1d"},{"attributes":{"data_source":{"id":"30174","type":"ColumnDataSource"},"glyph":{"id":"30175","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30176","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"30178","type":"CDSView"}},"id":"30177","type":"GlyphRenderer"},{"attributes":{},"id":"30183","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"30161","type":"PanTool"},{"id":"30162","type":"WheelZoomTool"},{"id":"30163","type":"BoxZoomTool"},{"id":"30164","type":"SaveTool"},{"id":"30165","type":"ResetTool"},{"id":"30166","type":"HelpTool"}]},"id":"30167","type":"Toolbar"},{"attributes":{},"id":"30164","type":"SaveTool"}],"root_ids":["30142"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"6d5cfda1-78df-42f6-b337-26dbc7d9d1d1","roots":{"30142":"0b84d002-d316-4cf8-b5d8-bda8d7336b66"}}];
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
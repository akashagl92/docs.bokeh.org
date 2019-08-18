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
      };var element = document.getElementById("2a295e97-3f6e-4481-adcc-2ace53182fd7");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2a295e97-3f6e-4481-adcc-2ace53182fd7' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-api-1.3.0.min.js"];
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
                    
                  var docs_json = '{"a9963100-bab7-467b-8850-e04aa1a829a3":{"roots":{"references":[{"attributes":{},"id":"23345","type":"LinearScale"},{"attributes":{"dimension":"lat"},"id":"23361","type":"MercatorTickFormatter"},{"attributes":{},"id":"23368","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23388","type":"BoxAnnotation"},{"attributes":{"dimension":"lat"},"id":"23359","type":"MercatorTicker"},{"attributes":{},"id":"23370","type":"SaveTool"},{"attributes":{"overlay":{"id":"23388","type":"BoxAnnotation"}},"id":"23369","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"23361","type":"MercatorTickFormatter"},"ticker":{"id":"23359","type":"MercatorTicker"}},"id":"23358","type":"MercatorAxis"},{"attributes":{"ticker":{"id":"23350","type":"MercatorTicker"}},"id":"23357","type":"Grid"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"23339","type":"WMTSTileSource"},{"attributes":{"dimension":"lon"},"id":"23350","type":"MercatorTicker"},{"attributes":{},"id":"23371","type":"ResetTool"},{"attributes":{"formatter":{"id":"23352","type":"MercatorTickFormatter"},"ticker":{"id":"23350","type":"MercatorTicker"}},"id":"23349","type":"MercatorAxis"},{"attributes":{"text":""},"id":"23383","type":"Title"},{"attributes":{"below":[{"id":"23349","type":"MercatorAxis"}],"center":[{"id":"23357","type":"Grid"},{"id":"23366","type":"Grid"}],"left":[{"id":"23358","type":"MercatorAxis"}],"renderers":[{"id":"23380","type":"TileRenderer"}],"title":{"id":"23383","type":"Title"},"toolbar":{"id":"23373","type":"Toolbar"},"x_range":{"id":"23341","type":"Range1d"},"x_scale":{"id":"23345","type":"LinearScale"},"y_range":{"id":"23343","type":"Range1d"},"y_scale":{"id":"23347","type":"LinearScale"}},"id":"23340","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"23343","type":"Range1d"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"23341","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23367","type":"PanTool"},{"id":"23368","type":"WheelZoomTool"},{"id":"23369","type":"BoxZoomTool"},{"id":"23370","type":"SaveTool"},{"id":"23371","type":"ResetTool"},{"id":"23372","type":"HelpTool"}]},"id":"23373","type":"Toolbar"},{"attributes":{},"id":"23372","type":"HelpTool"},{"attributes":{},"id":"23347","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"23359","type":"MercatorTicker"}},"id":"23366","type":"Grid"},{"attributes":{},"id":"23367","type":"PanTool"},{"attributes":{"tile_source":{"id":"23339","type":"WMTSTileSource"}},"id":"23380","type":"TileRenderer"},{"attributes":{"dimension":"lon"},"id":"23352","type":"MercatorTickFormatter"}],"root_ids":["23340"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"a9963100-bab7-467b-8850-e04aa1a829a3","roots":{"23340":"2a295e97-3f6e-4481-adcc-2ace53182fd7"}}];
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
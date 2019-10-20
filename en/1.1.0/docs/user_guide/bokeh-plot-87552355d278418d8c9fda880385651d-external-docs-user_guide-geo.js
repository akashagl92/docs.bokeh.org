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
      };var element = document.getElementById("7c95503e-8e59-4a39-9f9e-84c0046296fe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7c95503e-8e59-4a39-9f9e-84c0046296fe' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-api-1.1.0.min.js"];
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
                    
                  var docs_json = '{"1cc919d7-310a-4c65-9da5-416e276ed360":{"roots":{"references":[{"attributes":{"overlay":{"id":"22604","type":"BoxAnnotation"}},"id":"22585","type":"BoxZoomTool"},{"attributes":{},"id":"22563","type":"LinearScale"},{"attributes":{"ticker":{"id":"22566","type":"MercatorTicker"}},"id":"22573","type":"Grid"},{"attributes":{},"id":"22587","type":"ResetTool"},{"attributes":{"dimension":"lat"},"id":"22577","type":"MercatorTickFormatter"},{"attributes":{"dimension":"lat"},"id":"22575","type":"MercatorTicker"},{"attributes":{},"id":"22586","type":"SaveTool"},{"attributes":{},"id":"22588","type":"HelpTool"},{"attributes":{},"id":"22561","type":"LinearScale"},{"attributes":{"formatter":{"id":"22577","type":"MercatorTickFormatter"},"ticker":{"id":"22575","type":"MercatorTicker"}},"id":"22574","type":"MercatorAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22604","type":"BoxAnnotation"},{"attributes":{},"id":"22584","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"22583","type":"PanTool"},{"id":"22584","type":"WheelZoomTool"},{"id":"22585","type":"BoxZoomTool"},{"id":"22586","type":"SaveTool"},{"id":"22587","type":"ResetTool"},{"id":"22588","type":"HelpTool"}]},"id":"22589","type":"Toolbar"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"22555","type":"WMTSTileSource"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"22559","type":"Range1d"},{"attributes":{"formatter":{"id":"22568","type":"MercatorTickFormatter"},"ticker":{"id":"22566","type":"MercatorTicker"}},"id":"22565","type":"MercatorAxis"},{"attributes":{"dimension":"lon"},"id":"22566","type":"MercatorTicker"},{"attributes":{},"id":"22583","type":"PanTool"},{"attributes":{"text":""},"id":"22599","type":"Title"},{"attributes":{"dimension":"lon"},"id":"22568","type":"MercatorTickFormatter"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"22557","type":"Range1d"},{"attributes":{"tile_source":{"id":"22555","type":"WMTSTileSource"}},"id":"22596","type":"TileRenderer"},{"attributes":{"below":[{"id":"22565","type":"MercatorAxis"}],"center":[{"id":"22573","type":"Grid"},{"id":"22582","type":"Grid"}],"left":[{"id":"22574","type":"MercatorAxis"}],"renderers":[{"id":"22596","type":"TileRenderer"}],"title":{"id":"22599","type":"Title"},"toolbar":{"id":"22589","type":"Toolbar"},"x_range":{"id":"22557","type":"Range1d"},"x_scale":{"id":"22561","type":"LinearScale"},"y_range":{"id":"22559","type":"Range1d"},"y_scale":{"id":"22563","type":"LinearScale"}},"id":"22556","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"22575","type":"MercatorTicker"}},"id":"22582","type":"Grid"}],"root_ids":["22556"]},"title":"Bokeh Application","version":"1.1.0"}}';
                  var render_items = [{"docid":"1cc919d7-310a-4c65-9da5-416e276ed360","roots":{"22556":"7c95503e-8e59-4a39-9f9e-84c0046296fe"}}];
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
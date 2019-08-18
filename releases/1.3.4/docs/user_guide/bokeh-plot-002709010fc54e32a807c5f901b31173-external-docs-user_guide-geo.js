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
      };var element = document.getElementById("27c12340-2479-4184-b4c0-9d5e16adaf74");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '27c12340-2479-4184-b4c0-9d5e16adaf74' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1d2428db-0698-463d-ad32-53ed23228406":{"roots":{"references":[{"attributes":{"formatter":{"id":"23353","type":"MercatorTickFormatter"},"ticker":{"id":"23351","type":"MercatorTicker"}},"id":"23350","type":"MercatorAxis"},{"attributes":{},"id":"23346","type":"LinearScale"},{"attributes":{},"id":"23372","type":"ResetTool"},{"attributes":{"tile_source":{"id":"23340","type":"WMTSTileSource"}},"id":"23381","type":"TileRenderer"},{"attributes":{"dimension":"lat"},"id":"23362","type":"MercatorTickFormatter"},{"attributes":{},"id":"23369","type":"WheelZoomTool"},{"attributes":{"dimension":"lon"},"id":"23351","type":"MercatorTicker"},{"attributes":{},"id":"23373","type":"HelpTool"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"23344","type":"Range1d"},{"attributes":{"ticker":{"id":"23351","type":"MercatorTicker"}},"id":"23358","type":"Grid"},{"attributes":{"dimension":"lon"},"id":"23353","type":"MercatorTickFormatter"},{"attributes":{},"id":"23368","type":"PanTool"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"23340","type":"WMTSTileSource"},{"attributes":{"formatter":{"id":"23362","type":"MercatorTickFormatter"},"ticker":{"id":"23360","type":"MercatorTicker"}},"id":"23359","type":"MercatorAxis"},{"attributes":{},"id":"23371","type":"SaveTool"},{"attributes":{"below":[{"id":"23350","type":"MercatorAxis"}],"center":[{"id":"23358","type":"Grid"},{"id":"23367","type":"Grid"}],"left":[{"id":"23359","type":"MercatorAxis"}],"renderers":[{"id":"23381","type":"TileRenderer"}],"title":{"id":"23384","type":"Title"},"toolbar":{"id":"23374","type":"Toolbar"},"x_range":{"id":"23342","type":"Range1d"},"x_scale":{"id":"23346","type":"LinearScale"},"y_range":{"id":"23344","type":"Range1d"},"y_scale":{"id":"23348","type":"LinearScale"}},"id":"23341","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"23348","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"23360","type":"MercatorTicker"}},"id":"23367","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23368","type":"PanTool"},{"id":"23369","type":"WheelZoomTool"},{"id":"23370","type":"BoxZoomTool"},{"id":"23371","type":"SaveTool"},{"id":"23372","type":"ResetTool"},{"id":"23373","type":"HelpTool"}]},"id":"23374","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23389","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"23389","type":"BoxAnnotation"}},"id":"23370","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"23384","type":"Title"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"23342","type":"Range1d"},{"attributes":{"dimension":"lat"},"id":"23360","type":"MercatorTicker"}],"root_ids":["23341"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"1d2428db-0698-463d-ad32-53ed23228406","roots":{"23341":"27c12340-2479-4184-b4c0-9d5e16adaf74"}}];
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
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
      };var element = document.getElementById("a7f14750-488d-4b8f-8d46-fb5645b49a89");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a7f14750-488d-4b8f-8d46-fb5645b49a89' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f61a900e-48dc-46c1-b95e-fb99ec0238a4":{"roots":{"references":[{"attributes":{"dimension":"lon"},"id":"23330","type":"MercatorTicker"},{"attributes":{"below":[{"id":"23329","type":"MercatorAxis"}],"center":[{"id":"23337","type":"Grid"},{"id":"23346","type":"Grid"}],"left":[{"id":"23338","type":"MercatorAxis"}],"renderers":[{"id":"23360","type":"TileRenderer"}],"title":{"id":"23362","type":"Title"},"toolbar":{"id":"23353","type":"Toolbar"},"x_range":{"id":"23321","type":"Range1d"},"x_scale":{"id":"23325","type":"LinearScale"},"y_range":{"id":"23323","type":"Range1d"},"y_scale":{"id":"23327","type":"LinearScale"}},"id":"23320","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"23347","type":"PanTool"},{"id":"23348","type":"WheelZoomTool"},{"id":"23349","type":"BoxZoomTool"},{"id":"23350","type":"SaveTool"},{"id":"23351","type":"ResetTool"},{"id":"23352","type":"HelpTool"}]},"id":"23353","type":"Toolbar"},{"attributes":{"formatter":{"id":"23341","type":"MercatorTickFormatter"},"ticker":{"id":"23339","type":"MercatorTicker"}},"id":"23338","type":"MercatorAxis"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"23319","type":"WMTSTileSource"},{"attributes":{},"id":"23350","type":"SaveTool"},{"attributes":{"text":""},"id":"23362","type":"Title"},{"attributes":{"overlay":{"id":"23368","type":"BoxAnnotation"}},"id":"23349","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"23332","type":"MercatorTickFormatter"},"ticker":{"id":"23330","type":"MercatorTicker"}},"id":"23329","type":"MercatorAxis"},{"attributes":{"dimension":1,"ticker":{"id":"23339","type":"MercatorTicker"}},"id":"23346","type":"Grid"},{"attributes":{},"id":"23348","type":"WheelZoomTool"},{"attributes":{"dimension":"lon"},"id":"23332","type":"MercatorTickFormatter"},{"attributes":{"tile_source":{"id":"23319","type":"WMTSTileSource"}},"id":"23360","type":"TileRenderer"},{"attributes":{"dimension":"lat"},"id":"23341","type":"MercatorTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23368","type":"BoxAnnotation"},{"attributes":{},"id":"23347","type":"PanTool"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"23323","type":"Range1d"},{"attributes":{},"id":"23352","type":"HelpTool"},{"attributes":{"ticker":{"id":"23330","type":"MercatorTicker"}},"id":"23337","type":"Grid"},{"attributes":{},"id":"23325","type":"LinearScale"},{"attributes":{},"id":"23327","type":"LinearScale"},{"attributes":{"dimension":"lat"},"id":"23339","type":"MercatorTicker"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"23321","type":"Range1d"},{"attributes":{},"id":"23351","type":"ResetTool"}],"root_ids":["23320"]},"title":"Bokeh Application","version":"1.2.0"}}';
                  var render_items = [{"docid":"f61a900e-48dc-46c1-b95e-fb99ec0238a4","roots":{"23320":"a7f14750-488d-4b8f-8d46-fb5645b49a89"}}];
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
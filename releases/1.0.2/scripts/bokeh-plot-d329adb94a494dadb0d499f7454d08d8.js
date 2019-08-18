(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("25ad71c1-409f-4b90-812b-b62656c6694b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '25ad71c1-409f-4b90-812b-b62656c6694b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"dd1267d0-68b6-47bb-aa14-a0bf402a7b87":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4569","type":"PanTool"},{"id":"4570","type":"WheelZoomTool"},{"id":"4571","type":"BoxZoomTool"},{"id":"4572","type":"SaveTool"},{"id":"4573","type":"ResetTool"},{"id":"4574","type":"HelpTool"}]},"id":"4575","type":"Toolbar"},{"attributes":{"dimension":"lon"},"id":"4552","type":"MercatorTicker"},{"attributes":{"dimension":"lat"},"id":"4563","type":"MercatorTickFormatter"},{"attributes":{"dimension":"lat"},"id":"4561","type":"MercatorTicker"},{"attributes":{},"id":"4570","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"4554","type":"MercatorTickFormatter"},"plot":{"id":"4542","subtype":"Figure","type":"Plot"},"ticker":{"id":"4552","type":"MercatorTicker"}},"id":"4551","type":"MercatorAxis"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"4545","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"4587","type":"Title"},{"attributes":{},"id":"4572","type":"SaveTool"},{"attributes":{"tile_source":{"id":"4541","type":"WMTSTileSource"}},"id":"4584","type":"TileRenderer"},{"attributes":{},"id":"4549","type":"LinearScale"},{"attributes":{},"id":"4547","type":"LinearScale"},{"attributes":{"below":[{"id":"4551","type":"MercatorAxis"}],"left":[{"id":"4560","type":"MercatorAxis"}],"renderers":[{"id":"4551","type":"MercatorAxis"},{"id":"4559","type":"Grid"},{"id":"4560","type":"MercatorAxis"},{"id":"4568","type":"Grid"},{"id":"4577","type":"BoxAnnotation"},{"id":"4584","type":"TileRenderer"}],"title":{"id":"4587","type":"Title"},"toolbar":{"id":"4575","type":"Toolbar"},"x_range":{"id":"4543","type":"Range1d"},"x_scale":{"id":"4547","type":"LinearScale"},"y_range":{"id":"4545","type":"Range1d"},"y_scale":{"id":"4549","type":"LinearScale"}},"id":"4542","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"4569","type":"PanTool"},{"attributes":{},"id":"4574","type":"HelpTool"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"4543","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4577","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"4542","subtype":"Figure","type":"Plot"},"ticker":{"id":"4561","type":"MercatorTicker"}},"id":"4568","type":"Grid"},{"attributes":{"overlay":{"id":"4577","type":"BoxAnnotation"}},"id":"4571","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"4563","type":"MercatorTickFormatter"},"plot":{"id":"4542","subtype":"Figure","type":"Plot"},"ticker":{"id":"4561","type":"MercatorTicker"}},"id":"4560","type":"MercatorAxis"},{"attributes":{"dimension":"lon"},"id":"4554","type":"MercatorTickFormatter"},{"attributes":{"plot":{"id":"4542","subtype":"Figure","type":"Plot"},"ticker":{"id":"4552","type":"MercatorTicker"}},"id":"4559","type":"Grid"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"4541","type":"WMTSTileSource"},{"attributes":{},"id":"4573","type":"ResetTool"}],"root_ids":["4542"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"dd1267d0-68b6-47bb-aa14-a0bf402a7b87","roots":{"4542":"25ad71c1-409f-4b90-812b-b62656c6694b"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
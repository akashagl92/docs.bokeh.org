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
      };var element = document.getElementById("1dc1d10d-9873-479b-8ebb-5de518b32e7b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1dc1d10d-9873-479b-8ebb-5de518b32e7b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"d85c9526-66b6-4518-b849-b50d3009437d":{"roots":{"references":[{"attributes":{"dimension":"lat"},"id":"0e109f8a-e57c-4915-9d6c-15391aebb21d","type":"MercatorTicker"},{"attributes":{"callback":null,"end":6000000,"start":-2000000},"id":"c63cb8f9-8725-434c-8021-41174938ae5b","type":"Range1d"},{"attributes":{},"id":"fd77870f-519f-4d25-b4d3-26d8c6894ba2","type":"ResetTool"},{"attributes":{"below":[{"id":"65bf9460-1d36-47a8-ae5c-39e0b44d923f","type":"MercatorAxis"}],"left":[{"id":"6e9d149f-9fac-44f1-bd6e-8d826b198af1","type":"MercatorAxis"}],"renderers":[{"id":"65bf9460-1d36-47a8-ae5c-39e0b44d923f","type":"MercatorAxis"},{"id":"b42153f3-db71-448b-9932-0f1338ab5793","type":"Grid"},{"id":"6e9d149f-9fac-44f1-bd6e-8d826b198af1","type":"MercatorAxis"},{"id":"535e1309-6c15-488e-b0e9-7b84683dcd84","type":"Grid"},{"id":"f7bf988c-bd8d-4cca-be0a-93b2a088f0da","type":"BoxAnnotation"},{"id":"5555776d-6f14-4595-9cd0-5de5ac2492d5","type":"TileRenderer"}],"title":{"id":"70c1b326-6d1e-4d32-bca1-ee99c92b50c5","type":"Title"},"toolbar":{"id":"c63a3f0e-4e45-44d9-a925-d2a34a97afc2","type":"Toolbar"},"x_range":{"id":"c63cb8f9-8725-434c-8021-41174938ae5b","type":"Range1d"},"x_scale":{"id":"adeb4e00-8eb8-4dc5-8dc6-3b7f3fce4a2a","type":"LinearScale"},"y_range":{"id":"96160ace-8556-428e-b5ac-d609c3dd43f2","type":"Range1d"},"y_scale":{"id":"425e4a87-3c0e-439e-8195-93734bcf5f42","type":"LinearScale"}},"id":"30878819-12fa-48a0-a6b6-df06cf160319","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3f127ecc-1735-47ba-a14d-68eb8af2dca4","type":"HelpTool"},{"attributes":{"formatter":{"id":"ff75db79-3236-4792-be23-2ebaaf643c34","type":"MercatorTickFormatter"},"plot":{"id":"30878819-12fa-48a0-a6b6-df06cf160319","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e109f8a-e57c-4915-9d6c-15391aebb21d","type":"MercatorTicker"}},"id":"6e9d149f-9fac-44f1-bd6e-8d826b198af1","type":"MercatorAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"822e3134-cf23-4fd6-82a6-3f9a17720f48","type":"PanTool"},{"id":"5f4a9244-d3e5-447b-a4af-c2fe88eb0087","type":"WheelZoomTool"},{"id":"9205a30f-0b43-45d1-bb5c-1e59f5301aa9","type":"BoxZoomTool"},{"id":"0eb302d1-0e43-4ca7-864e-8148d1a1b132","type":"SaveTool"},{"id":"fd77870f-519f-4d25-b4d3-26d8c6894ba2","type":"ResetTool"},{"id":"3f127ecc-1735-47ba-a14d-68eb8af2dca4","type":"HelpTool"}]},"id":"c63a3f0e-4e45-44d9-a925-d2a34a97afc2","type":"Toolbar"},{"attributes":{"attribution":"&amp;copy; &lt;a href=\\"https://www.openstreetmap.org/copyright\\"&gt;OpenStreetMap&lt;/a&gt; contributors,&amp;copy; &lt;a href=\\"https://cartodb.com/attributions\\"&gt;CartoDB&lt;/a&gt;","url":"https://tiles.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"},"id":"4f54a300-f7cc-44fc-9ce4-ef0c588048e2","type":"WMTSTileSource"},{"attributes":{},"id":"0eb302d1-0e43-4ca7-864e-8148d1a1b132","type":"SaveTool"},{"attributes":{"tile_source":{"id":"4f54a300-f7cc-44fc-9ce4-ef0c588048e2","type":"WMTSTileSource"}},"id":"5555776d-6f14-4595-9cd0-5de5ac2492d5","type":"TileRenderer"},{"attributes":{"dimension":"lon"},"id":"2d1cba0f-71e9-4e6d-9e91-70dd8db6f359","type":"MercatorTickFormatter"},{"attributes":{},"id":"822e3134-cf23-4fd6-82a6-3f9a17720f48","type":"PanTool"},{"attributes":{"formatter":{"id":"2d1cba0f-71e9-4e6d-9e91-70dd8db6f359","type":"MercatorTickFormatter"},"plot":{"id":"30878819-12fa-48a0-a6b6-df06cf160319","subtype":"Figure","type":"Plot"},"ticker":{"id":"436b437c-58f9-458e-8b07-d7f3a202cb32","type":"MercatorTicker"}},"id":"65bf9460-1d36-47a8-ae5c-39e0b44d923f","type":"MercatorAxis"},{"attributes":{"overlay":{"id":"f7bf988c-bd8d-4cca-be0a-93b2a088f0da","type":"BoxAnnotation"}},"id":"9205a30f-0b43-45d1-bb5c-1e59f5301aa9","type":"BoxZoomTool"},{"attributes":{},"id":"5f4a9244-d3e5-447b-a4af-c2fe88eb0087","type":"WheelZoomTool"},{"attributes":{"dimension":"lat"},"id":"ff75db79-3236-4792-be23-2ebaaf643c34","type":"MercatorTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7bf988c-bd8d-4cca-be0a-93b2a088f0da","type":"BoxAnnotation"},{"attributes":{},"id":"425e4a87-3c0e-439e-8195-93734bcf5f42","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"70c1b326-6d1e-4d32-bca1-ee99c92b50c5","type":"Title"},{"attributes":{"dimension":"lon"},"id":"436b437c-58f9-458e-8b07-d7f3a202cb32","type":"MercatorTicker"},{"attributes":{"callback":null,"end":7000000,"start":-1000000},"id":"96160ace-8556-428e-b5ac-d609c3dd43f2","type":"Range1d"},{"attributes":{"dimension":1,"plot":{"id":"30878819-12fa-48a0-a6b6-df06cf160319","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e109f8a-e57c-4915-9d6c-15391aebb21d","type":"MercatorTicker"}},"id":"535e1309-6c15-488e-b0e9-7b84683dcd84","type":"Grid"},{"attributes":{},"id":"adeb4e00-8eb8-4dc5-8dc6-3b7f3fce4a2a","type":"LinearScale"},{"attributes":{"plot":{"id":"30878819-12fa-48a0-a6b6-df06cf160319","subtype":"Figure","type":"Plot"},"ticker":{"id":"436b437c-58f9-458e-8b07-d7f3a202cb32","type":"MercatorTicker"}},"id":"b42153f3-db71-448b-9932-0f1338ab5793","type":"Grid"}],"root_ids":["30878819-12fa-48a0-a6b6-df06cf160319"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d85c9526-66b6-4518-b849-b50d3009437d","roots":{"30878819-12fa-48a0-a6b6-df06cf160319":"1dc1d10d-9873-479b-8ebb-5de518b32e7b"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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
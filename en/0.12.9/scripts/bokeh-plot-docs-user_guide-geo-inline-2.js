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
      };var element = document.getElementById("fbe3162b-d8c3-404c-9388-1f5dee85268d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fbe3162b-d8c3-404c-9388-1f5dee85268d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"0269ca50-1eb6-42fc-b40f-b509b22c1e9d":{"roots":{"references":[{"attributes":{},"id":"79ba90f4-d5c7-4f75-9404-29c819033514","type":"WheelZoomTool"},{"attributes":{},"id":"00ecb71b-45d8-471c-bd6c-727f84e8e4ef","type":"LinearScale"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"37a841b1-404d-47bb-93d1-9d713f758a62","type":"WMTSTileSource"},{"attributes":{},"id":"ad1c3445-77f1-4ec9-995b-34902e8b0af1","type":"PanTool"},{"attributes":{"formatter":{"id":"4e25b612-f26d-4fca-9239-591065ded617","type":"BasicTickFormatter"},"plot":{"id":"64d2a08e-229e-42ca-b96f-e465f5a48e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"46df88cb-3ab0-4ab0-9e25-a96924bc7749","type":"BasicTicker"},"visible":false},"id":"0f0d59c0-ee11-4aa0-98b9-a5485ede5919","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"64d2a08e-229e-42ca-b96f-e465f5a48e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"f47ad939-9aff-49b1-988b-1e30a7633cd2","type":"BasicTicker"}},"id":"40777b30-e308-4b74-9234-f6513b197078","type":"Grid"},{"attributes":{},"id":"46df88cb-3ab0-4ab0-9e25-a96924bc7749","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"03385c94-a62b-4334-966f-721128b38b20","type":"Title"},{"attributes":{},"id":"e69e7f49-2037-460c-aaa6-a77595058abc","type":"LinearScale"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"57cd87d9-e972-45a9-8aa3-0ee17dc9ace8","type":"Range1d"},{"attributes":{},"id":"f47ad939-9aff-49b1-988b-1e30a7633cd2","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad1c3445-77f1-4ec9-995b-34902e8b0af1","type":"PanTool"},{"id":"79ba90f4-d5c7-4f75-9404-29c819033514","type":"WheelZoomTool"}]},"id":"90b689ed-3618-4998-a850-b49f1988e7fb","type":"Toolbar"},{"attributes":{"plot":{"id":"64d2a08e-229e-42ca-b96f-e465f5a48e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"46df88cb-3ab0-4ab0-9e25-a96924bc7749","type":"BasicTicker"}},"id":"c2f61190-54c5-4214-830f-3e6b2afc04e5","type":"Grid"},{"attributes":{"below":[{"id":"0f0d59c0-ee11-4aa0-98b9-a5485ede5919","type":"LinearAxis"}],"left":[{"id":"31d79515-49b7-45a1-abb2-5e950730a295","type":"LinearAxis"}],"renderers":[{"id":"0f0d59c0-ee11-4aa0-98b9-a5485ede5919","type":"LinearAxis"},{"id":"c2f61190-54c5-4214-830f-3e6b2afc04e5","type":"Grid"},{"id":"31d79515-49b7-45a1-abb2-5e950730a295","type":"LinearAxis"},{"id":"40777b30-e308-4b74-9234-f6513b197078","type":"Grid"},{"id":"54d90512-9894-457f-a59d-b7fe242d83b1","type":"TileRenderer"}],"title":{"id":"03385c94-a62b-4334-966f-721128b38b20","type":"Title"},"toolbar":{"id":"90b689ed-3618-4998-a850-b49f1988e7fb","type":"Toolbar"},"x_range":{"id":"3bd90c9a-b71f-43d1-a17e-0d588ed043f4","type":"Range1d"},"x_scale":{"id":"00ecb71b-45d8-471c-bd6c-727f84e8e4ef","type":"LinearScale"},"y_range":{"id":"57cd87d9-e972-45a9-8aa3-0ee17dc9ace8","type":"Range1d"},"y_scale":{"id":"e69e7f49-2037-460c-aaa6-a77595058abc","type":"LinearScale"}},"id":"64d2a08e-229e-42ca-b96f-e465f5a48e87","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"a567cbdf-2052-4558-8966-dc01bb20aaff","type":"BasicTickFormatter"},"plot":{"id":"64d2a08e-229e-42ca-b96f-e465f5a48e87","subtype":"Figure","type":"Plot"},"ticker":{"id":"f47ad939-9aff-49b1-988b-1e30a7633cd2","type":"BasicTicker"},"visible":false},"id":"31d79515-49b7-45a1-abb2-5e950730a295","type":"LinearAxis"},{"attributes":{},"id":"4e25b612-f26d-4fca-9239-591065ded617","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"3bd90c9a-b71f-43d1-a17e-0d588ed043f4","type":"Range1d"},{"attributes":{},"id":"a567cbdf-2052-4558-8966-dc01bb20aaff","type":"BasicTickFormatter"},{"attributes":{"tile_source":{"id":"37a841b1-404d-47bb-93d1-9d713f758a62","type":"WMTSTileSource"}},"id":"54d90512-9894-457f-a59d-b7fe242d83b1","type":"TileRenderer"}],"root_ids":["64d2a08e-229e-42ca-b96f-e465f5a48e87"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"0269ca50-1eb6-42fc-b40f-b509b22c1e9d","elementid":"fbe3162b-d8c3-404c-9388-1f5dee85268d","modelid":"64d2a08e-229e-42ca-b96f-e465f5a48e87"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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

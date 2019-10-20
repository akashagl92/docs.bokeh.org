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
      };var element = document.getElementById("c83eea40-36ef-49b9-9460-1db042d0f032");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c83eea40-36ef-49b9-9460-1db042d0f032' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"dbe92741-2ca5-40ed-ab7b-6f700074168b":{"roots":{"references":[{"attributes":{"formatter":{"id":"4910d69d-0312-44ae-b21a-5bcb122f2937","type":"BasicTickFormatter"},"plot":{"id":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"35623188-c421-4872-9289-3eb8e76eee01","type":"BasicTicker"},"visible":false},"id":"d4796c32-4278-4792-b554-ab4f2de9664f","type":"LinearAxis"},{"attributes":{},"id":"1f319b61-987b-438d-8600-50f7fad5bf98","type":"BasicTicker"},{"attributes":{"plot":{"id":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f319b61-987b-438d-8600-50f7fad5bf98","type":"BasicTicker"}},"id":"2da30943-0b27-4363-95e2-21be6e78d225","type":"Grid"},{"attributes":{},"id":"4910d69d-0312-44ae-b21a-5bcb122f2937","type":"BasicTickFormatter"},{"attributes":{},"id":"dc77a7b0-dc3d-4579-8267-98a7d260ac4a","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"fcb1ebaf-3d34-4c7b-bab8-608dfa99ed5e","type":"BasicTickFormatter"},"plot":{"id":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f319b61-987b-438d-8600-50f7fad5bf98","type":"BasicTicker"},"visible":false},"id":"03c396bb-f879-45fe-ae35-fdd1308a4431","type":"LinearAxis"},{"attributes":{"below":[{"id":"03c396bb-f879-45fe-ae35-fdd1308a4431","type":"LinearAxis"}],"left":[{"id":"d4796c32-4278-4792-b554-ab4f2de9664f","type":"LinearAxis"}],"renderers":[{"id":"03c396bb-f879-45fe-ae35-fdd1308a4431","type":"LinearAxis"},{"id":"2da30943-0b27-4363-95e2-21be6e78d225","type":"Grid"},{"id":"d4796c32-4278-4792-b554-ab4f2de9664f","type":"LinearAxis"},{"id":"ee9059c1-24ae-43da-af41-606e37a029e2","type":"Grid"},{"id":"1a6311e6-6024-4628-b24e-3e41217ced36","type":"TileRenderer"}],"title":{"id":"1142ca26-dc54-41ff-b2b1-4539ac490680","type":"Title"},"toolbar":{"id":"6efb9f70-5b4f-4a28-adbb-e7f987c7f33c","type":"Toolbar"},"x_range":{"id":"f71cd54e-1e62-4154-9a97-1b3d389a6e13","type":"Range1d"},"x_scale":{"id":"1b1e4ad8-3921-4561-a757-8d7154de6f98","type":"LinearScale"},"y_range":{"id":"3c8f5d06-7ee9-401a-b884-520b941debbe","type":"Range1d"},"y_scale":{"id":"926c28fd-5054-40a9-9c84-1ef8dc62b75d","type":"LinearScale"}},"id":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35623188-c421-4872-9289-3eb8e76eee01","type":"BasicTicker"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"3c8f5d06-7ee9-401a-b884-520b941debbe","type":"Range1d"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"171b786f-e297-4417-9d7d-a1ead1f18e99","type":"WMTSTileSource"},{"attributes":{"tile_source":{"id":"171b786f-e297-4417-9d7d-a1ead1f18e99","type":"WMTSTileSource"}},"id":"1a6311e6-6024-4628-b24e-3e41217ced36","type":"TileRenderer"},{"attributes":{"plot":null,"text":""},"id":"1142ca26-dc54-41ff-b2b1-4539ac490680","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"35623188-c421-4872-9289-3eb8e76eee01","type":"BasicTicker"}},"id":"ee9059c1-24ae-43da-af41-606e37a029e2","type":"Grid"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"f71cd54e-1e62-4154-9a97-1b3d389a6e13","type":"Range1d"},{"attributes":{},"id":"21e92f02-5d8b-4972-ac50-5f5afa43d3d6","type":"PanTool"},{"attributes":{},"id":"926c28fd-5054-40a9-9c84-1ef8dc62b75d","type":"LinearScale"},{"attributes":{},"id":"1b1e4ad8-3921-4561-a757-8d7154de6f98","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21e92f02-5d8b-4972-ac50-5f5afa43d3d6","type":"PanTool"},{"id":"dc77a7b0-dc3d-4579-8267-98a7d260ac4a","type":"WheelZoomTool"}]},"id":"6efb9f70-5b4f-4a28-adbb-e7f987c7f33c","type":"Toolbar"},{"attributes":{},"id":"fcb1ebaf-3d34-4c7b-bab8-608dfa99ed5e","type":"BasicTickFormatter"}],"root_ids":["bfc80b59-0d29-4b30-bfbd-ce6cd33998c8"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"dbe92741-2ca5-40ed-ab7b-6f700074168b","elementid":"c83eea40-36ef-49b9-9460-1db042d0f032","modelid":"bfc80b59-0d29-4b30-bfbd-ce6cd33998c8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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

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
      };var element = document.getElementById("f8c8ca45-19e9-4f43-9192-a4ad6158d2e0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8c8ca45-19e9-4f43-9192-a4ad6158d2e0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"73896b5a-0af8-491a-a034-3ce66d4ec948":{"roots":{"references":[{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"c46ff4ea-c97e-4624-a456-8f73546b0cc8","type":"Arrow"},{"id":"dff7d487-7b00-4d61-8217-61d185f1d358","type":"Label"},{"id":"be427e05-a614-42d5-846d-3f9da6e31d2b","type":"Arrow"},{"id":"7bf04c17-1e69-44af-8cf3-520e0962e31f","type":"Label"},{"id":"1f25f1ad-b842-41d4-970b-966a021bd186","type":"Arrow"},{"id":"e58e6405-a6f9-47b6-83c8-5067644942bd","type":"Label"}],"title":{"id":"b9bd5207-aa93-43b7-818c-da55f808e53f","type":"Title"},"toolbar":{"id":"21402d4b-1946-4a1c-860b-059d40da0045","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"df811f96-4196-4dc4-876a-a83ca1b15e56","type":"Range1d"},"x_scale":{"id":"7a000d2f-fcda-4166-bc71-aa2fddb717ac","type":"LinearScale"},"y_range":{"id":"321260db-60ea-4022-a001-a04aa71960f5","type":"Range1d"},"y_scale":{"id":"a84ec300-f0c8-4ea5-87b3-dc6032cad05a","type":"LinearScale"}},"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"21402d4b-1946-4a1c-860b-059d40da0045","type":"Toolbar"},{"attributes":{"plot":null},"id":"8fa7631b-0c20-463c-937e-f6488a2ed566","type":"OpenHead"},{"attributes":{"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"e58e6405-a6f9-47b6-83c8-5067644942bd","type":"Label"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"321260db-60ea-4022-a001-a04aa71960f5","type":"Range1d"},{"attributes":{"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"7bf04c17-1e69-44af-8cf3-520e0962e31f","type":"Label"},{"attributes":{"callback":null},"id":"df811f96-4196-4dc4-876a-a83ca1b15e56","type":"Range1d"},{"attributes":{"end":{"id":"2bf3247f-72a1-40a0-986c-95335b27a9a2","type":"VeeHead"},"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"1f25f1ad-b842-41d4-970b-966a021bd186","type":"Arrow"},{"attributes":{"plot":null,"text":""},"id":"b9bd5207-aa93-43b7-818c-da55f808e53f","type":"Title"},{"attributes":{"plot":null},"id":"2bf3247f-72a1-40a0-986c-95335b27a9a2","type":"VeeHead"},{"attributes":{},"id":"7a000d2f-fcda-4166-bc71-aa2fddb717ac","type":"LinearScale"},{"attributes":{"end":{"id":"8fa7631b-0c20-463c-937e-f6488a2ed566","type":"OpenHead"},"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"c46ff4ea-c97e-4624-a456-8f73546b0cc8","type":"Arrow"},{"attributes":{"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"dff7d487-7b00-4d61-8217-61d185f1d358","type":"Label"},{"attributes":{"end":{"id":"f7288fef-ca20-4907-8367-78e4524935d9","type":"NormalHead"},"plot":{"id":"73422318-3649-454a-a7e7-4cf18b286e4a","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"be427e05-a614-42d5-846d-3f9da6e31d2b","type":"Arrow"},{"attributes":{"plot":null},"id":"f7288fef-ca20-4907-8367-78e4524935d9","type":"NormalHead"},{"attributes":{},"id":"a84ec300-f0c8-4ea5-87b3-dc6032cad05a","type":"LinearScale"}],"root_ids":["73422318-3649-454a-a7e7-4cf18b286e4a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"73896b5a-0af8-491a-a034-3ce66d4ec948","roots":{"73422318-3649-454a-a7e7-4cf18b286e4a":"f8c8ca45-19e9-4f43-9192-a4ad6158d2e0"}}];
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
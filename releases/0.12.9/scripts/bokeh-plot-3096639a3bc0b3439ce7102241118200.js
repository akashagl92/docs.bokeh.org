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
      };var element = document.getElementById("d0d9b00f-9720-498e-886a-f535d3c96ffb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd0d9b00f-9720-498e-886a-f535d3c96ffb' but no matching script tag was found. ")
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
                    var docs_json = {"8f64fa67-f7e2-492f-afc3-127ac3f2f029":{"roots":{"references":[{"attributes":{},"id":"137c750c-b765-49b0-8600-d7a113a50917","type":"LinearScale"},{"attributes":{"end":{"id":"20c6aef0-661e-4e0a-ab36-34830acaadb2","type":"NormalHead"},"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"992960ba-1f33-4dd3-bab7-20eb894f05c0","type":"Arrow"},{"attributes":{"plot":null},"id":"440a1a78-92b7-4b55-8642-daee94b95379","type":"OpenHead"},{"attributes":{},"id":"3a18c41a-5936-4f47-9491-c2f9e4d13b38","type":"LinearScale"},{"attributes":{"plot":null},"id":"33dce785-2950-42d9-8e17-2e5411998170","type":"VeeHead"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"eef9a59a-b82a-411e-8f40-42d8c6e261b2","type":"Toolbar"},{"attributes":{"callback":null},"id":"5e04ca1f-6d73-4def-9a11-8df5f85e56f6","type":"Range1d"},{"attributes":{"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"61bd531c-0d3a-400d-9c91-171d4ebd4b1c","type":"Label"},{"attributes":{"end":{"id":"33dce785-2950-42d9-8e17-2e5411998170","type":"VeeHead"},"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"05d7ea64-a3bc-4467-909b-a0e52a5a0aca","type":"Arrow"},{"attributes":{"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"f8fd6c2a-dd86-4cde-ada7-edf1ce6893a7","type":"Label"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"19b35022-4bd1-46f6-91b1-912cd0f1ba3e","type":"Arrow"},{"id":"cad43138-f368-41b3-839f-31c07d6f8c15","type":"Label"},{"id":"992960ba-1f33-4dd3-bab7-20eb894f05c0","type":"Arrow"},{"id":"61bd531c-0d3a-400d-9c91-171d4ebd4b1c","type":"Label"},{"id":"05d7ea64-a3bc-4467-909b-a0e52a5a0aca","type":"Arrow"},{"id":"f8fd6c2a-dd86-4cde-ada7-edf1ce6893a7","type":"Label"}],"title":{"id":"70c82074-6ea2-4915-af52-2b7dca8145fa","type":"Title"},"toolbar":{"id":"eef9a59a-b82a-411e-8f40-42d8c6e261b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5e04ca1f-6d73-4def-9a11-8df5f85e56f6","type":"Range1d"},"x_scale":{"id":"137c750c-b765-49b0-8600-d7a113a50917","type":"LinearScale"},"y_range":{"id":"b664c38f-c2ef-413f-9b05-5696c4caa28b","type":"Range1d"},"y_scale":{"id":"3a18c41a-5936-4f47-9491-c2f9e4d13b38","type":"LinearScale"}},"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"b664c38f-c2ef-413f-9b05-5696c4caa28b","type":"Range1d"},{"attributes":{"plot":null,"text":""},"id":"70c82074-6ea2-4915-af52-2b7dca8145fa","type":"Title"},{"attributes":{"plot":null},"id":"20c6aef0-661e-4e0a-ab36-34830acaadb2","type":"NormalHead"},{"attributes":{"end":{"id":"440a1a78-92b7-4b55-8642-daee94b95379","type":"OpenHead"},"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"19b35022-4bd1-46f6-91b1-912cd0f1ba3e","type":"Arrow"},{"attributes":{"plot":{"id":"8f7444bd-42dd-46b4-af17-eca23ae85cfd","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"cad43138-f368-41b3-839f-31c07d6f8c15","type":"Label"}],"root_ids":["8f7444bd-42dd-46b4-af17-eca23ae85cfd"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"8f64fa67-f7e2-492f-afc3-127ac3f2f029","elementid":"d0d9b00f-9720-498e-886a-f535d3c96ffb","modelid":"8f7444bd-42dd-46b4-af17-eca23ae85cfd"}];
                
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

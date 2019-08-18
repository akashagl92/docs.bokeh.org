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
      };var element = document.getElementById("66f47968-c0dc-43c8-8527-9d94d61963e6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '66f47968-c0dc-43c8-8527-9d94d61963e6' but no matching script tag was found. ")
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
                    var docs_json = {"0a90e521-8f0b-4767-ae07-c98d0e5aa30c":{"roots":{"references":[{"attributes":{"formatter":{"id":"ae393840-c974-42b6-ae23-05675a3665ca","type":"BasicTickFormatter"},"plot":{"id":"fba71e45-8782-45cc-82e6-9d625e88f434","type":"Plot"},"ticker":{"id":"e0fad013-ad39-4acd-9124-9d5d0eae2915","type":"BasicTicker"}},"id":"11996e22-2497-4d3a-a57f-f468ec9f52e9","type":"LinearAxis"},{"attributes":{},"id":"e0fad013-ad39-4acd-9124-9d5d0eae2915","type":"BasicTicker"},{"attributes":{"source":{"id":"da152f5d-7d9f-4876-b6f3-04feb815b307","type":"ColumnDataSource"}},"id":"50552d32-d175-4c11-b75d-8f2f961db0f2","type":"CDSView"},{"attributes":{},"id":"ae393840-c974-42b6-ae23-05675a3665ca","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b9e8594-4b25-4d30-ab39-ea361cbc3dbb","type":"Rect"},{"attributes":{"plot":{"id":"fba71e45-8782-45cc-82e6-9d625e88f434","type":"Plot"},"ticker":{"id":"e0fad013-ad39-4acd-9124-9d5d0eae2915","type":"BasicTicker"}},"id":"a469fe57-bfc9-40f4-aeea-ce463454c370","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"fba71e45-8782-45cc-82e6-9d625e88f434","type":"Plot"},"ticker":{"id":"88016645-9180-4458-9351-8c0d31f1250e","type":"BasicTicker"}},"id":"323e4e39-f371-41ee-aa8b-f008942dec4b","type":"Grid"},{"attributes":{},"id":"5b34a0a4-45dc-48f5-9385-2a8104dccff5","type":"LinearScale"},{"attributes":{"formatter":{"id":"7fb54e24-b78c-4533-bb32-05bd780ef3ba","type":"BasicTickFormatter"},"plot":{"id":"fba71e45-8782-45cc-82e6-9d625e88f434","type":"Plot"},"ticker":{"id":"88016645-9180-4458-9351-8c0d31f1250e","type":"BasicTicker"}},"id":"565e0e60-a1a6-4114-8cd1-e9d4d40368d1","type":"LinearAxis"},{"attributes":{"callback":null},"id":"021d422e-98fc-479b-89b0-f645eda01dc4","type":"DataRange1d"},{"attributes":{"below":[{"id":"11996e22-2497-4d3a-a57f-f468ec9f52e9","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"565e0e60-a1a6-4114-8cd1-e9d4d40368d1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"e881be03-172b-4713-8115-4ff4e327ca89","type":"GlyphRenderer"},{"id":"11996e22-2497-4d3a-a57f-f468ec9f52e9","type":"LinearAxis"},{"id":"565e0e60-a1a6-4114-8cd1-e9d4d40368d1","type":"LinearAxis"},{"id":"a469fe57-bfc9-40f4-aeea-ce463454c370","type":"Grid"},{"id":"323e4e39-f371-41ee-aa8b-f008942dec4b","type":"Grid"}],"title":null,"toolbar":{"id":"d77cb76f-fd55-4279-b140-1daedb0389d5","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"021d422e-98fc-479b-89b0-f645eda01dc4","type":"DataRange1d"},"x_scale":{"id":"ad65cc3d-4f30-41ae-ae02-b358b721fac6","type":"LinearScale"},"y_range":{"id":"0be7fbbd-2ee8-482e-b4b8-219704f2f404","type":"DataRange1d"},"y_scale":{"id":"5b34a0a4-45dc-48f5-9385-2a8104dccff5","type":"LinearScale"}},"id":"fba71e45-8782-45cc-82e6-9d625e88f434","type":"Plot"},{"attributes":{"callback":null},"id":"0be7fbbd-2ee8-482e-b4b8-219704f2f404","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d77cb76f-fd55-4279-b140-1daedb0389d5","type":"Toolbar"},{"attributes":{},"id":"88016645-9180-4458-9351-8c0d31f1250e","type":"BasicTicker"},{"attributes":{},"id":"7fb54e24-b78c-4533-bb32-05bd780ef3ba","type":"BasicTickFormatter"},{"attributes":{},"id":"ad65cc3d-4f30-41ae-ae02-b358b721fac6","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","w","h"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"da152f5d-7d9f-4876-b6f3-04feb815b307","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"da152f5d-7d9f-4876-b6f3-04feb815b307","type":"ColumnDataSource"},"glyph":{"id":"4b9e8594-4b25-4d30-ab39-ea361cbc3dbb","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"50552d32-d175-4c11-b75d-8f2f961db0f2","type":"CDSView"}},"id":"e881be03-172b-4713-8115-4ff4e327ca89","type":"GlyphRenderer"}],"root_ids":["fba71e45-8782-45cc-82e6-9d625e88f434"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"0a90e521-8f0b-4767-ae07-c98d0e5aa30c","elementid":"66f47968-c0dc-43c8-8527-9d94d61963e6","modelid":"fba71e45-8782-45cc-82e6-9d625e88f434"}];
                
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

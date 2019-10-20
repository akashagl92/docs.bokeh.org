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
      };var element = document.getElementById("7bbb070d-aa74-4ed5-acc9-d18bb4213b7c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7bbb070d-aa74-4ed5-acc9-d18bb4213b7c' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dd1eb8fa-53eb-4c61-839f-c44c1d28fe5c":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3d2b27e-acf4-4f93-9966-2cdf32ca65b0","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1b14666-4ff6-40db-87d9-797b793b9fc0","type":"BasicTicker"}},"id":"e9bdf180-e920-4f60-bb75-05353b405c47","type":"Grid"},{"attributes":{},"id":"f1a58a3d-1252-4d82-b6fe-c5de0d1e59f0","type":"UnionRenderers"},{"attributes":{},"id":"d53ae731-2d6a-416c-9330-0eaa7cce60b2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a","subtype":"Figure","type":"Plot"},"ticker":{"id":"604fc794-3bb4-4ff2-a02b-6f57fabac037","type":"BasicTicker"}},"id":"03051654-a565-4ee1-8d43-77aaf53bc0a5","type":"Grid"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"432f44d9-1708-468f-95be-7e2c74227bf1","type":"Selection"},"selection_policy":{"id":"f1a58a3d-1252-4d82-b6fe-c5de0d1e59f0","type":"UnionRenderers"}},"id":"35f7937f-2899-45d7-b697-2c461e7918b9","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"39e88ba0-056e-4e17-99a6-9dc7f17c33e0","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5a34f6cf-dd05-42c2-8952-75adb285c97d","type":"Circle"},{"attributes":{},"id":"506a1eee-461d-47f2-8006-2c42a030d4da","type":"SaveTool"},{"attributes":{"below":[{"id":"14b597a5-32af-4ea1-9629-a2345e92754c","type":"LinearAxis"}],"left":[{"id":"3dd88732-9be6-482e-acf6-a71dd87a8ded","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"14b597a5-32af-4ea1-9629-a2345e92754c","type":"LinearAxis"},{"id":"03051654-a565-4ee1-8d43-77aaf53bc0a5","type":"Grid"},{"id":"3dd88732-9be6-482e-acf6-a71dd87a8ded","type":"LinearAxis"},{"id":"e9bdf180-e920-4f60-bb75-05353b405c47","type":"Grid"},{"id":"39e88ba0-056e-4e17-99a6-9dc7f17c33e0","type":"BoxAnnotation"},{"id":"11bc8613-4466-4008-a090-ca4205fe0edf","type":"GlyphRenderer"}],"title":{"id":"32d4a22f-058d-45b1-93f9-bfc893b2b7c9","type":"Title"},"toolbar":{"id":"07e312af-c8be-4814-a095-1836e6ddd064","type":"Toolbar"},"x_range":{"id":"542a72aa-71fc-4d3e-9037-76b2673aceb5","type":"DataRange1d"},"x_scale":{"id":"35bf044b-96a3-40d6-9d81-b18b31af0b66","type":"LinearScale"},"y_range":{"id":"c45ee617-d137-42fa-99fe-94e0681aebc6","type":"DataRange1d"},"y_scale":{"id":"6a6f9cd4-462f-4acf-bc6e-a86e86364f85","type":"LinearScale"}},"id":"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f6be9064-6215-411a-ac45-a90a8bf10b2a","type":"ResetTool"},{"attributes":{"callback":null},"id":"c45ee617-d137-42fa-99fe-94e0681aebc6","type":"DataRange1d"},{"attributes":{"source":{"id":"35f7937f-2899-45d7-b697-2c461e7918b9","type":"ColumnDataSource"}},"id":"10f8a5d2-f73d-4572-8f75-d61dfd0a9df0","type":"CDSView"},{"attributes":{},"id":"3120ae81-4331-4878-9e55-5e1d732edaf4","type":"PanTool"},{"attributes":{"data_source":{"id":"35f7937f-2899-45d7-b697-2c461e7918b9","type":"ColumnDataSource"},"glyph":{"id":"d3d2b27e-acf4-4f93-9966-2cdf32ca65b0","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5a34f6cf-dd05-42c2-8952-75adb285c97d","type":"Circle"},"selection_glyph":null,"view":{"id":"10f8a5d2-f73d-4572-8f75-d61dfd0a9df0","type":"CDSView"}},"id":"11bc8613-4466-4008-a090-ca4205fe0edf","type":"GlyphRenderer"},{"attributes":{},"id":"4e34a24d-0107-4c9d-b1f7-f14963a2579d","type":"HelpTool"},{"attributes":{},"id":"432f44d9-1708-468f-95be-7e2c74227bf1","type":"Selection"},{"attributes":{},"id":"2053967e-6ae3-4458-acad-d94ddf83adff","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"542a72aa-71fc-4d3e-9037-76b2673aceb5","type":"DataRange1d"},{"attributes":{"overlay":{"id":"39e88ba0-056e-4e17-99a6-9dc7f17c33e0","type":"BoxAnnotation"}},"id":"124e702d-a913-4507-8aa9-649de3cfd07d","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3120ae81-4331-4878-9e55-5e1d732edaf4","type":"PanTool"},{"id":"2053967e-6ae3-4458-acad-d94ddf83adff","type":"WheelZoomTool"},{"id":"124e702d-a913-4507-8aa9-649de3cfd07d","type":"BoxZoomTool"},{"id":"506a1eee-461d-47f2-8006-2c42a030d4da","type":"SaveTool"},{"id":"f6be9064-6215-411a-ac45-a90a8bf10b2a","type":"ResetTool"},{"id":"4e34a24d-0107-4c9d-b1f7-f14963a2579d","type":"HelpTool"}]},"id":"07e312af-c8be-4814-a095-1836e6ddd064","type":"Toolbar"},{"attributes":{"bounds":[2,4],"formatter":{"id":"d53ae731-2d6a-416c-9330-0eaa7cce60b2","type":"BasicTickFormatter"},"plot":{"id":"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a","subtype":"Figure","type":"Plot"},"ticker":{"id":"604fc794-3bb4-4ff2-a02b-6f57fabac037","type":"BasicTicker"}},"id":"14b597a5-32af-4ea1-9629-a2345e92754c","type":"LinearAxis"},{"attributes":{},"id":"604fc794-3bb4-4ff2-a02b-6f57fabac037","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a11fbdb7-f10a-4e30-90bf-5cd28987a26d","type":"BasicTickFormatter"},"plot":{"id":"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1b14666-4ff6-40db-87d9-797b793b9fc0","type":"BasicTicker"}},"id":"3dd88732-9be6-482e-acf6-a71dd87a8ded","type":"LinearAxis"},{"attributes":{},"id":"b1b14666-4ff6-40db-87d9-797b793b9fc0","type":"BasicTicker"},{"attributes":{},"id":"35bf044b-96a3-40d6-9d81-b18b31af0b66","type":"LinearScale"},{"attributes":{},"id":"6a6f9cd4-462f-4acf-bc6e-a86e86364f85","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"32d4a22f-058d-45b1-93f9-bfc893b2b7c9","type":"Title"},{"attributes":{},"id":"a11fbdb7-f10a-4e30-90bf-5cd28987a26d","type":"BasicTickFormatter"}],"root_ids":["db6d4d51-0ba6-44a5-a7a1-f58a8692f75a"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"dd1eb8fa-53eb-4c61-839f-c44c1d28fe5c","roots":{"db6d4d51-0ba6-44a5-a7a1-f58a8692f75a":"7bbb070d-aa74-4ed5-acc9-d18bb4213b7c"}}];
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
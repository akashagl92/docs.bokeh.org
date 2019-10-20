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
      };var element = document.getElementById("3cbe6465-02b5-4349-ae35-250e9e510ff7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3cbe6465-02b5-4349-ae35-250e9e510ff7' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"db6a58f9-65d5-4a31-98b7-c9df12c35eff":{"roots":{"references":[{"attributes":{"formatter":{"id":"b64c3e93-12d3-46ba-be94-4381977da3e9","type":"BasicTickFormatter"},"plot":{"id":"01155bbe-9de0-4218-8c68-ea748bd19f02","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2d1111c-c727-4172-9905-86556787fbc8","type":"BasicTicker"}},"id":"757dcb27-22f7-4186-9c3c-137dd51d2eb9","type":"LinearAxis"},{"attributes":{},"id":"b16a6cc6-a883-4b06-bdd9-64cfcedc753e","type":"BasicTickFormatter"},{"attributes":{},"id":"62ce242c-ea00-4453-91eb-48ffe0a3285a","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"01155bbe-9de0-4218-8c68-ea748bd19f02","subtype":"Figure","type":"Plot"},"ticker":{"id":"62ce242c-ea00-4453-91eb-48ffe0a3285a","type":"BasicTicker"}},"id":"6e4e1a6f-5a2c-468a-81ef-8137361d5cca","type":"Grid"},{"attributes":{"data_source":{"id":"a0be1ff6-212f-4d9b-8f10-22ab40962ebf","type":"ColumnDataSource"},"glyph":{"id":"4c78a8c0-8b96-4beb-abbb-d372e81f54bd","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd7202c2-0652-41f9-b552-e03c5e32fbc2","type":"Wedge"},"selection_glyph":null,"view":{"id":"3e8c5c5c-4c1f-49b6-943b-48150c840700","type":"CDSView"}},"id":"04d5bb65-2a35-4316-84ab-a1904d3c61e6","type":"GlyphRenderer"},{"attributes":{},"id":"d1df38f0-2d8a-447d-b6f6-b8fb9527aa28","type":"UnionRenderers"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd7202c2-0652-41f9-b552-e03c5e32fbc2","type":"Wedge"},{"attributes":{"plot":null,"text":""},"id":"b35d6444-e3f6-4d8d-ac97-8ede144c9c81","type":"Title"},{"attributes":{"below":[{"id":"757dcb27-22f7-4186-9c3c-137dd51d2eb9","type":"LinearAxis"}],"left":[{"id":"7feee86e-65f3-4580-bb35-ba45114f9e98","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"757dcb27-22f7-4186-9c3c-137dd51d2eb9","type":"LinearAxis"},{"id":"476c05d8-5218-4dbd-8637-0dad446e0d5a","type":"Grid"},{"id":"7feee86e-65f3-4580-bb35-ba45114f9e98","type":"LinearAxis"},{"id":"6e4e1a6f-5a2c-468a-81ef-8137361d5cca","type":"Grid"},{"id":"02bbcb5e-5459-4ca8-86b8-6d300cdddeb0","type":"BoxAnnotation"},{"id":"04d5bb65-2a35-4316-84ab-a1904d3c61e6","type":"GlyphRenderer"}],"title":{"id":"b35d6444-e3f6-4d8d-ac97-8ede144c9c81","type":"Title"},"toolbar":{"id":"cecddd01-ffa5-40ca-ae1b-53bef5144b56","type":"Toolbar"},"x_range":{"id":"292f42db-2433-4af9-9f39-dafe6a383b96","type":"DataRange1d"},"x_scale":{"id":"787ef46e-1b40-425f-b359-d607c927b9db","type":"LinearScale"},"y_range":{"id":"2171eb14-2a84-48a3-9b53-5e92aa3e01e9","type":"DataRange1d"},"y_scale":{"id":"90ce093a-c3d7-41a4-b1f8-8d7bffc799b0","type":"LinearScale"}},"id":"01155bbe-9de0-4218-8c68-ea748bd19f02","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"a8103e24-40a7-4350-9c59-ed219e612dc9","type":"Selection"},"selection_policy":{"id":"d1df38f0-2d8a-447d-b6f6-b8fb9527aa28","type":"UnionRenderers"}},"id":"a0be1ff6-212f-4d9b-8f10-22ab40962ebf","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"02bbcb5e-5459-4ca8-86b8-6d300cdddeb0","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f827279a-55fd-4f57-aaf8-ee18b2eb4869","type":"PanTool"},{"id":"b5c80c19-a3a1-417f-939d-098074344607","type":"WheelZoomTool"},{"id":"6500ea55-576f-4d2c-bfed-360c53bb08dd","type":"BoxZoomTool"},{"id":"c5c1c71e-148d-4f42-b3fd-f53719cf9094","type":"SaveTool"},{"id":"2bd3eefb-0876-4bc3-b065-f309c5477739","type":"ResetTool"},{"id":"a5f1514a-b646-4b9a-b4ce-ecb17aebf36e","type":"HelpTool"}]},"id":"cecddd01-ffa5-40ca-ae1b-53bef5144b56","type":"Toolbar"},{"attributes":{},"id":"f827279a-55fd-4f57-aaf8-ee18b2eb4869","type":"PanTool"},{"attributes":{"callback":null},"id":"292f42db-2433-4af9-9f39-dafe6a383b96","type":"DataRange1d"},{"attributes":{"source":{"id":"a0be1ff6-212f-4d9b-8f10-22ab40962ebf","type":"ColumnDataSource"}},"id":"3e8c5c5c-4c1f-49b6-943b-48150c840700","type":"CDSView"},{"attributes":{},"id":"b5c80c19-a3a1-417f-939d-098074344607","type":"WheelZoomTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"4c78a8c0-8b96-4beb-abbb-d372e81f54bd","type":"Wedge"},{"attributes":{"overlay":{"id":"02bbcb5e-5459-4ca8-86b8-6d300cdddeb0","type":"BoxAnnotation"}},"id":"6500ea55-576f-4d2c-bfed-360c53bb08dd","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"b16a6cc6-a883-4b06-bdd9-64cfcedc753e","type":"BasicTickFormatter"},"plot":{"id":"01155bbe-9de0-4218-8c68-ea748bd19f02","subtype":"Figure","type":"Plot"},"ticker":{"id":"62ce242c-ea00-4453-91eb-48ffe0a3285a","type":"BasicTicker"}},"id":"7feee86e-65f3-4580-bb35-ba45114f9e98","type":"LinearAxis"},{"attributes":{},"id":"c5c1c71e-148d-4f42-b3fd-f53719cf9094","type":"SaveTool"},{"attributes":{"callback":null},"id":"2171eb14-2a84-48a3-9b53-5e92aa3e01e9","type":"DataRange1d"},{"attributes":{},"id":"2bd3eefb-0876-4bc3-b065-f309c5477739","type":"ResetTool"},{"attributes":{},"id":"e2d1111c-c727-4172-9905-86556787fbc8","type":"BasicTicker"},{"attributes":{},"id":"a5f1514a-b646-4b9a-b4ce-ecb17aebf36e","type":"HelpTool"},{"attributes":{},"id":"787ef46e-1b40-425f-b359-d607c927b9db","type":"LinearScale"},{"attributes":{},"id":"b64c3e93-12d3-46ba-be94-4381977da3e9","type":"BasicTickFormatter"},{"attributes":{},"id":"90ce093a-c3d7-41a4-b1f8-8d7bffc799b0","type":"LinearScale"},{"attributes":{"plot":{"id":"01155bbe-9de0-4218-8c68-ea748bd19f02","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2d1111c-c727-4172-9905-86556787fbc8","type":"BasicTicker"}},"id":"476c05d8-5218-4dbd-8637-0dad446e0d5a","type":"Grid"},{"attributes":{},"id":"a8103e24-40a7-4350-9c59-ed219e612dc9","type":"Selection"}],"root_ids":["01155bbe-9de0-4218-8c68-ea748bd19f02"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"db6a58f9-65d5-4a31-98b7-c9df12c35eff","roots":{"01155bbe-9de0-4218-8c68-ea748bd19f02":"3cbe6465-02b5-4349-ae35-250e9e510ff7"}}];
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
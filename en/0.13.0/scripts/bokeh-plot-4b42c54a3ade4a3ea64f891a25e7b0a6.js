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
      };var element = document.getElementById("9afda44d-af8a-44f9-82a7-be1cfb2a4a62");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9afda44d-af8a-44f9-82a7-be1cfb2a4a62' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1d545ee5-e83f-41ee-ba3d-d3efce1ca0a2":{"roots":{"references":[{"attributes":{},"id":"a2db2f2f-a02f-4485-bf49-b15cc056fbd0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"938f3068-fe81-43e3-a5ad-6c098a7f9e5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2db2f2f-a02f-4485-bf49-b15cc056fbd0","type":"BasicTicker"}},"id":"1ac83b12-6c29-4318-86e7-f13b782b73f5","type":"Grid"},{"attributes":{"format":"%5.3f mu"},"id":"2ed1f143-ac43-4648-9184-a2a67a24caa8","type":"PrintfTickFormatter"},{"attributes":{"formatter":{"id":"6dd2823b-5920-41a1-8d25-c858d041a848","type":"PrintfTickFormatter"},"plot":{"id":"938f3068-fe81-43e3-a5ad-6c098a7f9e5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73422c5-5b00-4570-8d7e-45ad214bdb22","type":"BasicTicker"}},"id":"259f1c81-def2-4d95-95f6-6052b3bdeca6","type":"LinearAxis"},{"attributes":{},"id":"77a9c4b0-22e6-4d65-b83d-470e5640793d","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"938f3068-fe81-43e3-a5ad-6c098a7f9e5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c73422c5-5b00-4570-8d7e-45ad214bdb22","type":"BasicTicker"}},"id":"ca71f46c-ddce-49ae-bf51-521b7f1da7bd","type":"Grid"},{"attributes":{},"id":"a6548db9-a1d4-4459-b93b-26f72c251e1b","type":"Selection"},{"attributes":{},"id":"f13fadf6-8e2c-441d-9169-69e9ac787358","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"a6548db9-a1d4-4459-b93b-26f72c251e1b","type":"Selection"},"selection_policy":{"id":"233f4c2b-682a-4139-985b-30e49b54c65a","type":"UnionRenderers"}},"id":"66ab5547-7ff8-45da-9288-ba1e2423b85b","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2ed1f143-ac43-4648-9184-a2a67a24caa8","type":"PrintfTickFormatter"},"plot":{"id":"938f3068-fe81-43e3-a5ad-6c098a7f9e5d","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2db2f2f-a02f-4485-bf49-b15cc056fbd0","type":"BasicTicker"}},"id":"a5f6d69a-d9d7-4667-862c-8834082ae0cd","type":"LinearAxis"},{"attributes":{"source":{"id":"66ab5547-7ff8-45da-9288-ba1e2423b85b","type":"ColumnDataSource"}},"id":"4c22fa6f-5f5a-42f3-b608-42ea9b24858b","type":"CDSView"},{"attributes":{},"id":"233f4c2b-682a-4139-985b-30e49b54c65a","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"fed8f54e-4574-4532-babf-7521ac2e6936","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"65087894-577a-4ce8-be25-3c6d7af52700","type":"Circle"},{"attributes":{"callback":null},"id":"546b21d0-dd69-45ae-9b23-104ceef295d7","type":"DataRange1d"},{"attributes":{"overlay":{"id":"bdf8af04-a897-42d3-8811-cc775835030a","type":"BoxAnnotation"}},"id":"b8d0d24c-741e-4b6f-af89-98e4d9b9c7a8","type":"BoxZoomTool"},{"attributes":{"format":"%4.1e"},"id":"6dd2823b-5920-41a1-8d25-c858d041a848","type":"PrintfTickFormatter"},{"attributes":{},"id":"40c608c8-4090-47c8-8baf-bb04a58b9d1b","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bdf8af04-a897-42d3-8811-cc775835030a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"1088b3ac-dabb-4c17-9dbd-f5c2f8635742","type":"DataRange1d"},{"attributes":{},"id":"09b23215-6835-4fa6-b0b0-127763b9095c","type":"PanTool"},{"attributes":{"below":[{"id":"259f1c81-def2-4d95-95f6-6052b3bdeca6","type":"LinearAxis"}],"left":[{"id":"a5f6d69a-d9d7-4667-862c-8834082ae0cd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"259f1c81-def2-4d95-95f6-6052b3bdeca6","type":"LinearAxis"},{"id":"ca71f46c-ddce-49ae-bf51-521b7f1da7bd","type":"Grid"},{"id":"a5f6d69a-d9d7-4667-862c-8834082ae0cd","type":"LinearAxis"},{"id":"1ac83b12-6c29-4318-86e7-f13b782b73f5","type":"Grid"},{"id":"bdf8af04-a897-42d3-8811-cc775835030a","type":"BoxAnnotation"},{"id":"fb3a69d0-e19f-451d-b13e-fa4847870e98","type":"GlyphRenderer"}],"title":{"id":"fed8f54e-4574-4532-babf-7521ac2e6936","type":"Title"},"toolbar":{"id":"677ba281-871c-41b9-9f88-80e9064e35a1","type":"Toolbar"},"x_range":{"id":"546b21d0-dd69-45ae-9b23-104ceef295d7","type":"DataRange1d"},"x_scale":{"id":"0f273307-4bc0-4f1b-9029-0f8031537b2a","type":"LinearScale"},"y_range":{"id":"1088b3ac-dabb-4c17-9dbd-f5c2f8635742","type":"DataRange1d"},"y_scale":{"id":"f13fadf6-8e2c-441d-9169-69e9ac787358","type":"LinearScale"}},"id":"938f3068-fe81-43e3-a5ad-6c098a7f9e5d","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"09b23215-6835-4fa6-b0b0-127763b9095c","type":"PanTool"},{"id":"77a9c4b0-22e6-4d65-b83d-470e5640793d","type":"WheelZoomTool"},{"id":"b8d0d24c-741e-4b6f-af89-98e4d9b9c7a8","type":"BoxZoomTool"},{"id":"40c608c8-4090-47c8-8baf-bb04a58b9d1b","type":"SaveTool"},{"id":"e6288b08-f43f-41b7-9ebd-8d38f05e5856","type":"ResetTool"},{"id":"2fa164f2-48dc-456b-93e2-044fc2de764c","type":"HelpTool"}]},"id":"677ba281-871c-41b9-9f88-80e9064e35a1","type":"Toolbar"},{"attributes":{},"id":"0f273307-4bc0-4f1b-9029-0f8031537b2a","type":"LinearScale"},{"attributes":{},"id":"c73422c5-5b00-4570-8d7e-45ad214bdb22","type":"BasicTicker"},{"attributes":{},"id":"2fa164f2-48dc-456b-93e2-044fc2de764c","type":"HelpTool"},{"attributes":{"data_source":{"id":"66ab5547-7ff8-45da-9288-ba1e2423b85b","type":"ColumnDataSource"},"glyph":{"id":"bec17ec7-b01e-4ed6-a3e3-a79d43805a65","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65087894-577a-4ce8-be25-3c6d7af52700","type":"Circle"},"selection_glyph":null,"view":{"id":"4c22fa6f-5f5a-42f3-b608-42ea9b24858b","type":"CDSView"}},"id":"fb3a69d0-e19f-451d-b13e-fa4847870e98","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bec17ec7-b01e-4ed6-a3e3-a79d43805a65","type":"Circle"},{"attributes":{},"id":"e6288b08-f43f-41b7-9ebd-8d38f05e5856","type":"ResetTool"}],"root_ids":["938f3068-fe81-43e3-a5ad-6c098a7f9e5d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1d545ee5-e83f-41ee-ba3d-d3efce1ca0a2","roots":{"938f3068-fe81-43e3-a5ad-6c098a7f9e5d":"9afda44d-af8a-44f9-82a7-be1cfb2a4a62"}}];
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
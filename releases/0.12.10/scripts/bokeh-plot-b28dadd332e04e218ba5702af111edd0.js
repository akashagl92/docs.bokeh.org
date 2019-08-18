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
      };var element = document.getElementById("0163a0c4-c82d-4b8c-af3b-b8a2fb784b31");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0163a0c4-c82d-4b8c-af3b-b8a2fb784b31' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"13bf5a83-85c8-4bc0-918a-f97a98b22749":{"roots":{"references":[{"attributes":{"callback":null},"id":"b9cec654-a65c-4cea-97d2-d936e491e249","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c2ffd39-6ef9-4dd4-b183-ed251621555c","type":"BoxAnnotation"},{"attributes":{},"id":"ae2ab82f-f2df-4302-aeac-44b3114e80de","type":"SaveTool"},{"attributes":{},"id":"dff45855-1919-4d17-a48a-1e92fa16517a","type":"ResetTool"},{"attributes":{"data_source":{"id":"c8a5c4c3-6ea9-4c22-af75-9d4b2be2aace","type":"ColumnDataSource"},"glyph":{"id":"4d854eaf-4110-4872-afdd-47bc987befe4","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f68ff926-9ea6-4ec8-bbed-6996020cb5d1","type":"Circle"},"selection_glyph":null,"view":{"id":"d76eeb9a-1bb4-4cc5-a78d-22be45b74269","type":"CDSView"}},"id":"1c981f8e-0020-4163-b197-2c4e5157c9c9","type":"GlyphRenderer"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"5618948c-37e1-4163-ad17-c808f9c8c74d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cda7817-aeeb-4f18-8e68-cfcf579643ed","type":"BasicTicker"}},"id":"ebc3cee3-b757-4ba5-a121-6bf8f6ab2ac9","type":"Grid"},{"attributes":{},"id":"f26f4900-f028-4318-9e52-dfff975dc331","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c8a5c4c3-6ea9-4c22-af75-9d4b2be2aace","type":"ColumnDataSource"},{"attributes":{},"id":"fbca39c9-1a69-40cb-8c84-53e772523fa6","type":"PanTool"},{"attributes":{"formatter":{"id":"48c7eca7-30b0-4d2b-9764-5d0bb5dc8821","type":"BasicTickFormatter"},"plot":{"id":"5618948c-37e1-4163-ad17-c808f9c8c74d","subtype":"Figure","type":"Plot"},"ticker":{"id":"08f2d0f5-81d3-409e-8b6e-0fbf7e247dc7","type":"BasicTicker"}},"id":"f7534361-fdaf-4b9e-a5a7-9a4bef098872","type":"LinearAxis"},{"attributes":{},"id":"0cda7817-aeeb-4f18-8e68-cfcf579643ed","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"9646c6ac-41ef-4387-9158-7107c2b4a398","type":"Title"},{"attributes":{"overlay":{"id":"0c2ffd39-6ef9-4dd4-b183-ed251621555c","type":"BoxAnnotation"}},"id":"9f57ca77-992f-4a87-8b2e-ced8a474462c","type":"BoxZoomTool"},{"attributes":{},"id":"734ae07d-50d4-40ad-a4ed-0eeb74b891fa","type":"LinearScale"},{"attributes":{},"id":"f14407b4-0834-4ba6-a0e5-817f293b4dca","type":"BasicTickFormatter"},{"attributes":{},"id":"48c7eca7-30b0-4d2b-9764-5d0bb5dc8821","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4d854eaf-4110-4872-afdd-47bc987befe4","type":"Circle"},{"attributes":{"source":{"id":"c8a5c4c3-6ea9-4c22-af75-9d4b2be2aace","type":"ColumnDataSource"}},"id":"d76eeb9a-1bb4-4cc5-a78d-22be45b74269","type":"CDSView"},{"attributes":{},"id":"08f2d0f5-81d3-409e-8b6e-0fbf7e247dc7","type":"BasicTicker"},{"attributes":{},"id":"daf41572-c446-447f-ad57-9f989ceb16d2","type":"HelpTool"},{"attributes":{"below":[{"id":"f7534361-fdaf-4b9e-a5a7-9a4bef098872","type":"LinearAxis"}],"left":[{"id":"5ade0c48-be22-49c4-85d9-13a3f2523ab8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f7534361-fdaf-4b9e-a5a7-9a4bef098872","type":"LinearAxis"},{"id":"68f09337-fea8-469f-aa38-1d98211f9169","type":"Grid"},{"id":"5ade0c48-be22-49c4-85d9-13a3f2523ab8","type":"LinearAxis"},{"id":"ebc3cee3-b757-4ba5-a121-6bf8f6ab2ac9","type":"Grid"},{"id":"0c2ffd39-6ef9-4dd4-b183-ed251621555c","type":"BoxAnnotation"},{"id":"1c981f8e-0020-4163-b197-2c4e5157c9c9","type":"GlyphRenderer"}],"title":{"id":"9646c6ac-41ef-4387-9158-7107c2b4a398","type":"Title"},"toolbar":{"id":"081db9f6-7bdb-4ab0-8728-f0f426527965","type":"Toolbar"},"x_range":{"id":"441f1dd1-2ca7-41f1-a464-56af1e94efde","type":"DataRange1d"},"x_scale":{"id":"b423fcf4-2625-4ede-ad32-892ba44700e9","type":"LinearScale"},"y_range":{"id":"b9cec654-a65c-4cea-97d2-d936e491e249","type":"DataRange1d"},"y_scale":{"id":"734ae07d-50d4-40ad-a4ed-0eeb74b891fa","type":"LinearScale"}},"id":"5618948c-37e1-4163-ad17-c808f9c8c74d","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fbca39c9-1a69-40cb-8c84-53e772523fa6","type":"PanTool"},{"id":"f26f4900-f028-4318-9e52-dfff975dc331","type":"WheelZoomTool"},{"id":"9f57ca77-992f-4a87-8b2e-ced8a474462c","type":"BoxZoomTool"},{"id":"ae2ab82f-f2df-4302-aeac-44b3114e80de","type":"SaveTool"},{"id":"dff45855-1919-4d17-a48a-1e92fa16517a","type":"ResetTool"},{"id":"daf41572-c446-447f-ad57-9f989ceb16d2","type":"HelpTool"}]},"id":"081db9f6-7bdb-4ab0-8728-f0f426527965","type":"Toolbar"},{"attributes":{"bounds":[2,4],"plot":{"id":"5618948c-37e1-4163-ad17-c808f9c8c74d","subtype":"Figure","type":"Plot"},"ticker":{"id":"08f2d0f5-81d3-409e-8b6e-0fbf7e247dc7","type":"BasicTicker"}},"id":"68f09337-fea8-469f-aa38-1d98211f9169","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f68ff926-9ea6-4ec8-bbed-6996020cb5d1","type":"Circle"},{"attributes":{"callback":null},"id":"441f1dd1-2ca7-41f1-a464-56af1e94efde","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f14407b4-0834-4ba6-a0e5-817f293b4dca","type":"BasicTickFormatter"},"plot":{"id":"5618948c-37e1-4163-ad17-c808f9c8c74d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0cda7817-aeeb-4f18-8e68-cfcf579643ed","type":"BasicTicker"}},"id":"5ade0c48-be22-49c4-85d9-13a3f2523ab8","type":"LinearAxis"},{"attributes":{},"id":"b423fcf4-2625-4ede-ad32-892ba44700e9","type":"LinearScale"}],"root_ids":["5618948c-37e1-4163-ad17-c808f9c8c74d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"13bf5a83-85c8-4bc0-918a-f97a98b22749","elementid":"0163a0c4-c82d-4b8c-af3b-b8a2fb784b31","modelid":"5618948c-37e1-4163-ad17-c808f9c8c74d"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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

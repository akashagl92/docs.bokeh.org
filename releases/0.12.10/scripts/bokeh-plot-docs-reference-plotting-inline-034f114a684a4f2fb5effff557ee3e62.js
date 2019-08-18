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
      };var element = document.getElementById("0a914eda-2d4b-4112-8d6d-3b0ec32a7d76");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a914eda-2d4b-4112-8d6d-3b0ec32a7d76' but no matching script tag was found. ")
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
                    var docs_json = {"7906af65-8b80-4608-b25d-109f75b8882f":{"roots":{"references":[{"attributes":{"source":{"id":"1e170906-b2ba-4d6a-a7bf-98783ffaee18","type":"ColumnDataSource"}},"id":"aa3cf6c3-cd3b-4f29-8056-a639882fa798","type":"CDSView"},{"attributes":{},"id":"a9192b7f-4472-48fe-80ee-f9ad3191c04d","type":"LinearScale"},{"attributes":{},"id":"5cf0b8ce-c3a7-4d9d-8f18-96c40bb05be8","type":"HelpTool"},{"attributes":{"formatter":{"id":"029dd8f3-378f-425a-97c3-a29faa82614a","type":"BasicTickFormatter"},"plot":{"id":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b8ebd01-ca39-4b19-a09a-e3ff07b38223","type":"BasicTicker"}},"id":"ed070d37-3155-4e38-a2e4-971450515401","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1e170906-b2ba-4d6a-a7bf-98783ffaee18","type":"ColumnDataSource"},"glyph":{"id":"aa8ba711-8c6c-4038-a647-807d6f076784","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7cf1898b-cf27-4364-a682-0d5b0ad2a791","type":"Triangle"},"selection_glyph":null,"view":{"id":"aa3cf6c3-cd3b-4f29-8056-a639882fa798","type":"CDSView"}},"id":"e9c844ab-d58d-4ea5-acb3-9c3ba9cbbc9a","type":"GlyphRenderer"},{"attributes":{},"id":"654c3623-83f6-4a13-b5e8-f961f1fe7543","type":"WheelZoomTool"},{"attributes":{},"id":"e3f10ebb-4fdb-4b8e-be7e-1dfb80da5e8d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b8ebd01-ca39-4b19-a09a-e3ff07b38223","type":"BasicTicker"}},"id":"5aca1783-e5b1-43b5-9508-83868d47460a","type":"Grid"},{"attributes":{"callback":null},"id":"19af7e3a-de8b-4330-8ed0-e387de73a542","type":"DataRange1d"},{"attributes":{},"id":"813ea01a-6613-45e1-9613-211c894bee56","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa8ba711-8c6c-4038-a647-807d6f076784","type":"Triangle"},{"attributes":{"below":[{"id":"291db21c-741d-49ca-904a-4bb4d4df0294","type":"LinearAxis"}],"left":[{"id":"ed070d37-3155-4e38-a2e4-971450515401","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"291db21c-741d-49ca-904a-4bb4d4df0294","type":"LinearAxis"},{"id":"1c6e4513-1761-402e-8957-3e00f68b5473","type":"Grid"},{"id":"ed070d37-3155-4e38-a2e4-971450515401","type":"LinearAxis"},{"id":"5aca1783-e5b1-43b5-9508-83868d47460a","type":"Grid"},{"id":"efcd1789-c2ee-4969-a747-6ba82b63fb96","type":"BoxAnnotation"},{"id":"e9c844ab-d58d-4ea5-acb3-9c3ba9cbbc9a","type":"GlyphRenderer"}],"title":{"id":"07fb2498-19c2-43c9-b020-62a8d678483d","type":"Title"},"toolbar":{"id":"43a24054-970a-453f-aa5e-17f70b1a5a92","type":"Toolbar"},"x_range":{"id":"080b35a5-4379-47d2-8cef-3eef7ce55b4f","type":"DataRange1d"},"x_scale":{"id":"8a1517ef-5c24-4f23-9438-c355105f3a1d","type":"LinearScale"},"y_range":{"id":"19af7e3a-de8b-4330-8ed0-e387de73a542","type":"DataRange1d"},"y_scale":{"id":"a9192b7f-4472-48fe-80ee-f9ad3191c04d","type":"LinearScale"}},"id":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"813ea01a-6613-45e1-9613-211c894bee56","type":"BasicTicker"}},"id":"1c6e4513-1761-402e-8957-3e00f68b5473","type":"Grid"},{"attributes":{},"id":"1414cddf-3fbd-4856-a111-4360efdc8bcd","type":"PanTool"},{"attributes":{},"id":"8a1517ef-5c24-4f23-9438-c355105f3a1d","type":"LinearScale"},{"attributes":{},"id":"9fd1d367-92a0-40e3-8e7f-f41844566368","type":"ResetTool"},{"attributes":{"callback":null},"id":"080b35a5-4379-47d2-8cef-3eef7ce55b4f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"e3f10ebb-4fdb-4b8e-be7e-1dfb80da5e8d","type":"BasicTickFormatter"},"plot":{"id":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"813ea01a-6613-45e1-9613-211c894bee56","type":"BasicTicker"}},"id":"291db21c-741d-49ca-904a-4bb4d4df0294","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7cf1898b-cf27-4364-a682-0d5b0ad2a791","type":"Triangle"},{"attributes":{"overlay":{"id":"efcd1789-c2ee-4969-a747-6ba82b63fb96","type":"BoxAnnotation"}},"id":"9753a6a1-f157-4ccf-b664-f5e51a024f9a","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"07fb2498-19c2-43c9-b020-62a8d678483d","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1414cddf-3fbd-4856-a111-4360efdc8bcd","type":"PanTool"},{"id":"654c3623-83f6-4a13-b5e8-f961f1fe7543","type":"WheelZoomTool"},{"id":"9753a6a1-f157-4ccf-b664-f5e51a024f9a","type":"BoxZoomTool"},{"id":"0d949873-b13e-416a-9ce8-0b2c9dcbf6a8","type":"SaveTool"},{"id":"9fd1d367-92a0-40e3-8e7f-f41844566368","type":"ResetTool"},{"id":"5cf0b8ce-c3a7-4d9d-8f18-96c40bb05be8","type":"HelpTool"}]},"id":"43a24054-970a-453f-aa5e-17f70b1a5a92","type":"Toolbar"},{"attributes":{},"id":"8b8ebd01-ca39-4b19-a09a-e3ff07b38223","type":"BasicTicker"},{"attributes":{},"id":"0d949873-b13e-416a-9ce8-0b2c9dcbf6a8","type":"SaveTool"},{"attributes":{},"id":"029dd8f3-378f-425a-97c3-a29faa82614a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"efcd1789-c2ee-4969-a747-6ba82b63fb96","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"1e170906-b2ba-4d6a-a7bf-98783ffaee18","type":"ColumnDataSource"}],"root_ids":["7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"7906af65-8b80-4608-b25d-109f75b8882f","elementid":"0a914eda-2d4b-4112-8d6d-3b0ec32a7d76","modelid":"7a3f6ca7-e3a5-45aa-b802-2ca2dc24c2ef"}];
                
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

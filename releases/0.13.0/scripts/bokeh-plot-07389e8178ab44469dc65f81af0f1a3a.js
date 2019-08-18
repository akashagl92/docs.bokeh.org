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
      };var element = document.getElementById("5a3835fa-d6db-4790-82e1-5a9d11979f55");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a3835fa-d6db-4790-82e1-5a9d11979f55' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1917ff21-de11-417b-a443-789d7d6cb591":{"roots":{"references":[{"attributes":{"callback":null},"id":"41a1094f-2860-4a60-a5d6-c21682c3d5f8","type":"DataRange1d"},{"attributes":{},"id":"64447a05-9449-4a96-b7f9-60b5a3028400","type":"LinearScale"},{"attributes":{},"id":"f66b0fd4-c1a2-4cf7-9b2e-223fa6a248b5","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"7e36d211-85fa-4987-a102-8fb0bc9e8a62","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17937903-f601-427f-ba1d-4d29963b33fc","type":"ColumnDataSource"},"glyph":{"id":"06a3ef1e-2b59-4253-941c-8906b58b07c4","type":"Step"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e680c8c0-d009-4032-b420-b7df8dc12e4b","type":"Step"},"selection_glyph":null,"view":{"id":"2fca8d9e-b8c8-4328-96ea-2e0f5cb1cf83","type":"CDSView"}},"id":"a9f0f636-c122-46d2-9a50-d3d598361855","type":"GlyphRenderer"},{"attributes":{},"id":"fb4b64fb-e063-41db-8ba0-b888b2ea8292","type":"LinearScale"},{"attributes":{},"id":"b5858de4-a368-487c-99f7-5e161b04459c","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7fd8a706-5447-4135-b3f0-16293534a22e","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"82204fea-9d8b-4f8b-bf78-b58296527058","subtype":"Figure","type":"Plot"},"ticker":{"id":"90970195-ff6c-48c6-b45d-be0c4fe281b4","type":"BasicTicker"}},"id":"0f820b7f-dd06-4b1d-8601-fe1fee58b2b5","type":"Grid"},{"attributes":{},"id":"35e4ee7d-cf23-4010-b667-a10ca28bc587","type":"PanTool"},{"attributes":{"overlay":{"id":"7fd8a706-5447-4135-b3f0-16293534a22e","type":"BoxAnnotation"}},"id":"af5bf9ee-9d74-4871-ab1e-2d564fe51611","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"06a3ef1e-2b59-4253-941c-8906b58b07c4","type":"Step"},{"attributes":{"formatter":{"id":"979cea4e-7038-405b-87d2-eec858e77e64","type":"BasicTickFormatter"},"plot":{"id":"82204fea-9d8b-4f8b-bf78-b58296527058","subtype":"Figure","type":"Plot"},"ticker":{"id":"90970195-ff6c-48c6-b45d-be0c4fe281b4","type":"BasicTicker"}},"id":"37fc8b60-6bbb-4902-bb66-46960de78571","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e919e9c5-543a-4222-a479-ada125c9a861","type":"BasicTickFormatter"},"plot":{"id":"82204fea-9d8b-4f8b-bf78-b58296527058","subtype":"Figure","type":"Plot"},"ticker":{"id":"279f319f-b576-40f6-83db-e28a9be7e302","type":"BasicTicker"}},"id":"776cfdef-1486-487c-9b3e-dd29207da065","type":"LinearAxis"},{"attributes":{},"id":"90970195-ff6c-48c6-b45d-be0c4fe281b4","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"dae32d09-3ebc-4c4b-a787-2a6780e8ea52","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"mode":"center","x":{"field":"x"},"y":{"field":"y"}},"id":"e680c8c0-d009-4032-b420-b7df8dc12e4b","type":"Step"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"35e4ee7d-cf23-4010-b667-a10ca28bc587","type":"PanTool"},{"id":"f66b0fd4-c1a2-4cf7-9b2e-223fa6a248b5","type":"WheelZoomTool"},{"id":"af5bf9ee-9d74-4871-ab1e-2d564fe51611","type":"BoxZoomTool"},{"id":"8e1821a6-8dba-4a65-a51e-5256d9044320","type":"SaveTool"},{"id":"36492c44-2ec5-44a6-9bcb-353982254d67","type":"ResetTool"},{"id":"242dc327-ea0b-42d0-b239-0e9f2ce1a755","type":"HelpTool"}]},"id":"57397ec2-bcd4-449a-b190-1b917d3c79b5","type":"Toolbar"},{"attributes":{},"id":"242dc327-ea0b-42d0-b239-0e9f2ce1a755","type":"HelpTool"},{"attributes":{"source":{"id":"17937903-f601-427f-ba1d-4d29963b33fc","type":"ColumnDataSource"}},"id":"2fca8d9e-b8c8-4328-96ea-2e0f5cb1cf83","type":"CDSView"},{"attributes":{},"id":"979cea4e-7038-405b-87d2-eec858e77e64","type":"BasicTickFormatter"},{"attributes":{},"id":"e919e9c5-543a-4222-a479-ada125c9a861","type":"BasicTickFormatter"},{"attributes":{},"id":"8e1821a6-8dba-4a65-a51e-5256d9044320","type":"SaveTool"},{"attributes":{},"id":"41002497-e0e4-4c46-b949-7aa42e520414","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"41002497-e0e4-4c46-b949-7aa42e520414","type":"Selection"},"selection_policy":{"id":"b5858de4-a368-487c-99f7-5e161b04459c","type":"UnionRenderers"}},"id":"17937903-f601-427f-ba1d-4d29963b33fc","type":"ColumnDataSource"},{"attributes":{},"id":"36492c44-2ec5-44a6-9bcb-353982254d67","type":"ResetTool"},{"attributes":{},"id":"279f319f-b576-40f6-83db-e28a9be7e302","type":"BasicTicker"},{"attributes":{"below":[{"id":"37fc8b60-6bbb-4902-bb66-46960de78571","type":"LinearAxis"}],"left":[{"id":"776cfdef-1486-487c-9b3e-dd29207da065","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"37fc8b60-6bbb-4902-bb66-46960de78571","type":"LinearAxis"},{"id":"0f820b7f-dd06-4b1d-8601-fe1fee58b2b5","type":"Grid"},{"id":"776cfdef-1486-487c-9b3e-dd29207da065","type":"LinearAxis"},{"id":"4a6b0dd8-8e6a-4edc-a04f-41d0818598ed","type":"Grid"},{"id":"7fd8a706-5447-4135-b3f0-16293534a22e","type":"BoxAnnotation"},{"id":"a9f0f636-c122-46d2-9a50-d3d598361855","type":"GlyphRenderer"}],"title":{"id":"dae32d09-3ebc-4c4b-a787-2a6780e8ea52","type":"Title"},"toolbar":{"id":"57397ec2-bcd4-449a-b190-1b917d3c79b5","type":"Toolbar"},"x_range":{"id":"41a1094f-2860-4a60-a5d6-c21682c3d5f8","type":"DataRange1d"},"x_scale":{"id":"64447a05-9449-4a96-b7f9-60b5a3028400","type":"LinearScale"},"y_range":{"id":"7e36d211-85fa-4987-a102-8fb0bc9e8a62","type":"DataRange1d"},"y_scale":{"id":"fb4b64fb-e063-41db-8ba0-b888b2ea8292","type":"LinearScale"}},"id":"82204fea-9d8b-4f8b-bf78-b58296527058","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"82204fea-9d8b-4f8b-bf78-b58296527058","subtype":"Figure","type":"Plot"},"ticker":{"id":"279f319f-b576-40f6-83db-e28a9be7e302","type":"BasicTicker"}},"id":"4a6b0dd8-8e6a-4edc-a04f-41d0818598ed","type":"Grid"}],"root_ids":["82204fea-9d8b-4f8b-bf78-b58296527058"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"1917ff21-de11-417b-a443-789d7d6cb591","roots":{"82204fea-9d8b-4f8b-bf78-b58296527058":"5a3835fa-d6db-4790-82e1-5a9d11979f55"}}];
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
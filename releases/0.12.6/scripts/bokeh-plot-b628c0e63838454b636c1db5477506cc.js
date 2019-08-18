(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("8c745931-9f6e-4ea4-a48c-bc0267d5b93b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8c745931-9f6e-4ea4-a48c-bc0267d5b93b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"1edc15a4-7ae2-48f9-af54-96458316005d":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"647f5447-6580-4db7-a39e-25b18a7aa812","type":"Circle"},{"attributes":{},"id":"11c27e7b-8107-44e7-b275-c5a63a6a87fd","type":"BasicTicker"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"b1e204fb-7c34-4aed-8c78-c7a853011e90","type":"SaveTool"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"11c27e7b-8107-44e7-b275-c5a63a6a87fd","type":"BasicTicker"}},"id":"34536501-6158-486a-b888-689724d450ed","type":"Grid"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea39dcbb-4c6e-4cb3-83ea-857d1389b628","type":"BasicTicker"}},"id":"edd380ef-57b4-436a-b85b-29b1f4412239","type":"Grid"},{"attributes":{"formatter":{"id":"942c7ceb-3014-486d-9808-d6cf010ea3aa","type":"BasicTickFormatter"},"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea39dcbb-4c6e-4cb3-83ea-857d1389b628","type":"BasicTicker"}},"id":"c26669ea-739d-4857-90d5-8dbc6050eefb","type":"LinearAxis"},{"attributes":{},"id":"d765b7fd-41b7-4139-b250-85adc2a8328f","type":"LinearScale"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"6381111b-7d5d-4001-a7d9-8b9a0059ebf6","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b7884f25-34e4-4122-b394-81cbb4b5284b","type":"PanTool"},{"id":"3e6951a9-c17e-4248-9694-a40f7fe0ebee","type":"WheelZoomTool"},{"id":"e623ec51-d534-46ab-b68e-37d25721dc2e","type":"BoxZoomTool"},{"id":"b1e204fb-7c34-4aed-8c78-c7a853011e90","type":"SaveTool"},{"id":"6381111b-7d5d-4001-a7d9-8b9a0059ebf6","type":"ResetTool"},{"id":"9dd9b0f4-4f2f-4e19-bd57-7c9b49840ccd","type":"HelpTool"}]},"id":"6c939430-d7a4-4384-9c83-c2bf003ee289","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"c5b01e57-2bee-40a6-8bd7-f609ccc8e333","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"b7884f25-34e4-4122-b394-81cbb4b5284b","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d5bb69d-a619-4c06-951b-da901f156d79","type":"Circle"},{"attributes":{"callback":null},"id":"a1e4b549-6038-4a6e-bed1-2107093169f9","type":"DataRange1d"},{"attributes":{},"id":"1072ec96-5f1b-448a-99e1-deaa4363fdeb","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1072ec96-5f1b-448a-99e1-deaa4363fdeb","type":"BasicTickFormatter"},"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"},"ticker":{"id":"11c27e7b-8107-44e7-b275-c5a63a6a87fd","type":"BasicTicker"}},"id":"d53a7b6e-2761-494f-9ce8-bffe53934452","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9bf9c18e-cdf7-4d6a-b769-2ad55294693e","type":"BoxAnnotation"},{"attributes":{},"id":"ea39dcbb-4c6e-4cb3-83ea-857d1389b628","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9bf9c18e-cdf7-4d6a-b769-2ad55294693e","type":"BoxAnnotation"},"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"e623ec51-d534-46ab-b68e-37d25721dc2e","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"5caf8d0a-03e5-4aa3-bb0e-347cb11c73e4","type":"Title"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"3e6951a9-c17e-4248-9694-a40f7fe0ebee","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"}},"id":"9dd9b0f4-4f2f-4e19-bd57-7c9b49840ccd","type":"HelpTool"},{"attributes":{},"id":"942c7ceb-3014-486d-9808-d6cf010ea3aa","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1e3d1983-6bdf-4e0c-8c4b-089a6de042be","type":"DataRange1d"},{"attributes":{"data_source":{"id":"c5b01e57-2bee-40a6-8bd7-f609ccc8e333","type":"ColumnDataSource"},"glyph":{"id":"647f5447-6580-4db7-a39e-25b18a7aa812","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2d5bb69d-a619-4c06-951b-da901f156d79","type":"Circle"},"selection_glyph":null},"id":"0b993080-39f3-4472-aaf2-66a4b5e96614","type":"GlyphRenderer"},{"attributes":{},"id":"01ce95c7-edff-4612-863a-3298e104f882","type":"ToolEvents"},{"attributes":{"below":[{"id":"d53a7b6e-2761-494f-9ce8-bffe53934452","type":"LinearAxis"}],"left":[{"id":"c26669ea-739d-4857-90d5-8dbc6050eefb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d53a7b6e-2761-494f-9ce8-bffe53934452","type":"LinearAxis"},{"id":"34536501-6158-486a-b888-689724d450ed","type":"Grid"},{"id":"c26669ea-739d-4857-90d5-8dbc6050eefb","type":"LinearAxis"},{"id":"edd380ef-57b4-436a-b85b-29b1f4412239","type":"Grid"},{"id":"9bf9c18e-cdf7-4d6a-b769-2ad55294693e","type":"BoxAnnotation"},{"id":"0b993080-39f3-4472-aaf2-66a4b5e96614","type":"GlyphRenderer"}],"title":{"id":"5caf8d0a-03e5-4aa3-bb0e-347cb11c73e4","type":"Title"},"tool_events":{"id":"01ce95c7-edff-4612-863a-3298e104f882","type":"ToolEvents"},"toolbar":{"id":"6c939430-d7a4-4384-9c83-c2bf003ee289","type":"Toolbar"},"x_range":{"id":"1e3d1983-6bdf-4e0c-8c4b-089a6de042be","type":"DataRange1d"},"x_scale":{"id":"8208bc55-b341-4409-928f-3e94e0509841","type":"LinearScale"},"y_range":{"id":"a1e4b549-6038-4a6e-bed1-2107093169f9","type":"DataRange1d"},"y_scale":{"id":"d765b7fd-41b7-4139-b250-85adc2a8328f","type":"LinearScale"}},"id":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8208bc55-b341-4409-928f-3e94e0509841","type":"LinearScale"}],"root_ids":["76324beb-e613-47a9-8f5b-5d3a3fe30b5a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1edc15a4-7ae2-48f9-af54-96458316005d","elementid":"8c745931-9f6e-4ea4-a48c-bc0267d5b93b","modelid":"76324beb-e613-47a9-8f5b-5d3a3fe30b5a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();

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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("579e4746-9483-4ef9-901c-c95e78cb5afb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '579e4746-9483-4ef9-901c-c95e78cb5afb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f316fb6c-7c40-46c5-88c2-e219de082c7f":{"roots":{"references":[{"attributes":{},"id":"26d9f59a-1902-472b-a7dd-71349d5fbea6","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d6a235c7-47de-4536-8a7f-6c16ff349bd5","type":"LinearAxis"}],"left":[{"id":"bb07fff0-380d-4cab-b696-6c804b562e6e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d6a235c7-47de-4536-8a7f-6c16ff349bd5","type":"LinearAxis"},{"id":"ea1739c6-88e2-498d-969b-422fce9a10ed","type":"Grid"},{"id":"bb07fff0-380d-4cab-b696-6c804b562e6e","type":"LinearAxis"},{"id":"932ac787-2123-4765-92af-62d7bddfd6d0","type":"Grid"},{"id":"77bfb0f2-a968-465d-be8a-6418b7caa4a8","type":"BoxAnnotation"},{"id":"2970b6b6-7cb2-4a15-bed9-5ad3f9763727","type":"BoxAnnotation"},{"id":"db8a8e8b-b981-4976-a4a6-b958417d704a","type":"PolyAnnotation"},{"id":"8ffe7c03-043f-4ff8-bd56-a55963e321b8","type":"GlyphRenderer"}],"title":{"id":"3c2b34d8-78ed-4584-b2aa-c63c6858b4f6","type":"Title"},"tool_events":{"id":"4233be38-4aa8-404c-83f4-503f71262c7e","type":"ToolEvents"},"toolbar":{"id":"812f9fe8-e56e-42f4-a345-a30be5cf40d8","type":"Toolbar"},"x_range":{"id":"6e599553-71b3-453a-903c-36ae435c604a","type":"DataRange1d"},"y_range":{"id":"81b4298f-e6eb-449f-a429-3be12ec4e66d","type":"DataRange1d"}},"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"21496e7b-edf9-4a45-b838-ca3d299a1433","type":"Circle"},{"attributes":{"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"}},"id":"73c1bd90-194f-47fb-a623-d043d8a78c3a","type":"ResetTool"},{"attributes":{},"id":"4233be38-4aa8-404c-83f4-503f71262c7e","type":"ToolEvents"},{"attributes":{},"id":"a55dfbf5-ec87-4f5e-bac5-81bb982c7d51","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"2970b6b6-7cb2-4a15-bed9-5ad3f9763727","type":"BoxAnnotation"},"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"}},"id":"56182fc0-53a8-4345-bbb3-7183d39f2d11","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"26d9f59a-1902-472b-a7dd-71349d5fbea6","type":"BasicTickFormatter"},"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},"ticker":{"id":"f35bc9cb-2a7e-4eb5-8c9d-6f4323ac68b5","type":"BasicTicker"}},"id":"d6a235c7-47de-4536-8a7f-6c16ff349bd5","type":"LinearAxis"},{"attributes":{"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},"ticker":{"id":"f35bc9cb-2a7e-4eb5-8c9d-6f4323ac68b5","type":"BasicTicker"}},"id":"ea1739c6-88e2-498d-969b-422fce9a10ed","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b28022fe-58d9-48c7-a638-9f9a513ad74e","type":"BoxSelectTool"},{"id":"56182fc0-53a8-4345-bbb3-7183d39f2d11","type":"BoxZoomTool"},{"id":"ac3bbfeb-251c-4019-b436-054c45435074","type":"LassoSelectTool"},{"id":"73c1bd90-194f-47fb-a623-d043d8a78c3a","type":"ResetTool"}]},"id":"812f9fe8-e56e-42f4-a345-a30be5cf40d8","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"db8a8e8b-b981-4976-a4a6-b958417d704a","type":"PolyAnnotation"},"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"}},"id":"ac3bbfeb-251c-4019-b436-054c45435074","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2970b6b6-7cb2-4a15-bed9-5ad3f9763727","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"6e599553-71b3-453a-903c-36ae435c604a","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"3fc79579-c02f-4b7d-9612-fd984095dac6","type":"Circle"},{"attributes":{},"id":"5991c715-d7f3-4636-aa7e-01ee900ec55d","type":"BasicTicker"},{"attributes":{},"id":"f35bc9cb-2a7e-4eb5-8c9d-6f4323ac68b5","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"3c2b34d8-78ed-4584-b2aa-c63c6858b4f6","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},"ticker":{"id":"5991c715-d7f3-4636-aa7e-01ee900ec55d","type":"BasicTicker"}},"id":"932ac787-2123-4765-92af-62d7bddfd6d0","type":"Grid"},{"attributes":{"data_source":{"id":"ac2400be-42bb-43f8-ba11-a94311795516","type":"ColumnDataSource"},"glyph":{"id":"3fc79579-c02f-4b7d-9612-fd984095dac6","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"21496e7b-edf9-4a45-b838-ca3d299a1433","type":"Circle"},"selection_glyph":null},"id":"8ffe7c03-043f-4ff8-bd56-a55963e321b8","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"db8a8e8b-b981-4976-a4a6-b958417d704a","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"77bfb0f2-a968-465d-be8a-6418b7caa4a8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"81b4298f-e6eb-449f-a429-3be12ec4e66d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"a55dfbf5-ec87-4f5e-bac5-81bb982c7d51","type":"BasicTickFormatter"},"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},"ticker":{"id":"5991c715-d7f3-4636-aa7e-01ee900ec55d","type":"BasicTicker"}},"id":"bb07fff0-380d-4cab-b696-6c804b562e6e","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"77bfb0f2-a968-465d-be8a-6418b7caa4a8","type":"BoxAnnotation"},"plot":{"id":"de6ae370-2645-4e3f-93db-9c2cfe6f2379","subtype":"Figure","type":"Plot"},"renderers":[{"id":"8ffe7c03-043f-4ff8-bd56-a55963e321b8","type":"GlyphRenderer"}]},"id":"b28022fe-58d9-48c7-a638-9f9a513ad74e","type":"BoxSelectTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}}},"id":"ac2400be-42bb-43f8-ba11-a94311795516","type":"ColumnDataSource"}],"root_ids":["de6ae370-2645-4e3f-93db-9c2cfe6f2379"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f316fb6c-7c40-46c5-88c2-e219de082c7f","elementid":"579e4746-9483-4ef9-901c-c95e78cb5afb","modelid":"de6ae370-2645-4e3f-93db-9c2cfe6f2379"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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

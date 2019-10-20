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
      };var element = document.getElementById("a438e8df-df0c-4efd-b1f1-200eb97b7b63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a438e8df-df0c-4efd-b1f1-200eb97b7b63' but no matching script tag was found. ")
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
                var docs_json = {"55467a4f-148e-4f5a-8c30-5aaee680d1d1":{"roots":{"references":[{"attributes":{},"id":"5c34e21b-62ef-4e1e-9622-bdfcdda17709","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"1884482a-8371-4284-9e70-55b88e4f9ab5","type":"Title"},{"attributes":{},"id":"64d18a6a-1411-4184-a1f8-9200a1e6bf31","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b75386e-51e4-4981-ba47-5a89c4dafaaf","type":"BasicTicker"}},"id":"0c1a4472-ea54-415e-b530-ea333fae8cb4","type":"Grid"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"178e488d-c6ab-4a99-b09c-6e50594226f6","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"d6f3ef4e-24f8-4d4e-8478-95eb504261a9","type":"BasicTickFormatter"},"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c34e21b-62ef-4e1e-9622-bdfcdda17709","type":"BasicTicker"}},"id":"361f80ee-866f-499c-b6bd-e7850fda48ee","type":"LinearAxis"},{"attributes":{},"id":"abe60475-ec83-4b7d-a31c-918b629b8048","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"43de9383-8084-4907-ba06-5ad3cdc17b92","type":"BoxAnnotation"},"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"4eaa0020-11f6-4d0a-802c-5ccb5802a2f1","type":"BoxZoomTool"},{"attributes":{},"id":"1b75386e-51e4-4981-ba47-5a89c4dafaaf","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cc4e3d25-b9d3-470f-9532-dc8c2b7feb13","type":"ColumnDataSource"},"glyph":{"id":"7f9911c7-287f-43e0-ac4d-65bb7f7371c9","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"30e5651a-bc0d-4cf5-b10e-318fcc741843","type":"Wedge"},"selection_glyph":null},"id":"67b68941-3c2f-4db2-8270-c83336a9ed99","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"b915719e-041f-4b8c-8ba4-ad3c66666adb","type":"DataRange1d"},{"attributes":{"below":[{"id":"361f80ee-866f-499c-b6bd-e7850fda48ee","type":"LinearAxis"}],"left":[{"id":"7848be08-8fbe-49c6-aaa7-65ca22461cb6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"361f80ee-866f-499c-b6bd-e7850fda48ee","type":"LinearAxis"},{"id":"c4d7eb1b-3771-4e48-83f8-4224a1711756","type":"Grid"},{"id":"7848be08-8fbe-49c6-aaa7-65ca22461cb6","type":"LinearAxis"},{"id":"0c1a4472-ea54-415e-b530-ea333fae8cb4","type":"Grid"},{"id":"43de9383-8084-4907-ba06-5ad3cdc17b92","type":"BoxAnnotation"},{"id":"67b68941-3c2f-4db2-8270-c83336a9ed99","type":"GlyphRenderer"}],"title":{"id":"1884482a-8371-4284-9e70-55b88e4f9ab5","type":"Title"},"tool_events":{"id":"64d18a6a-1411-4184-a1f8-9200a1e6bf31","type":"ToolEvents"},"toolbar":{"id":"4ff4a832-5699-4b76-b67f-04404c49eccc","type":"Toolbar"},"x_range":{"id":"b915719e-041f-4b8c-8ba4-ad3c66666adb","type":"DataRange1d"},"y_range":{"id":"45921238-cc0a-4bd8-80e3-8513e5c00fc4","type":"DataRange1d"}},"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"30e5651a-bc0d-4cf5-b10e-318fcc741843","type":"Wedge"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"43de9383-8084-4907-ba06-5ad3cdc17b92","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"45921238-cc0a-4bd8-80e3-8513e5c00fc4","type":"DataRange1d"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"05561df6-8695-4e02-ad5e-720feca02ee4","type":"HelpTool"},{"attributes":{},"id":"d6f3ef4e-24f8-4d4e-8478-95eb504261a9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"cfe66f88-3c87-45c0-b52d-65bd3967bc72","type":"SaveTool"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"d1be7bf2-12ce-451b-aa0a-8eae78266667","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d1be7bf2-12ce-451b-aa0a-8eae78266667","type":"PanTool"},{"id":"178e488d-c6ab-4a99-b09c-6e50594226f6","type":"WheelZoomTool"},{"id":"4eaa0020-11f6-4d0a-802c-5ccb5802a2f1","type":"BoxZoomTool"},{"id":"cfe66f88-3c87-45c0-b52d-65bd3967bc72","type":"SaveTool"},{"id":"8b82058a-7add-4473-a577-45f977fdb28d","type":"ResetTool"},{"id":"05561df6-8695-4e02-ad5e-720feca02ee4","type":"HelpTool"}]},"id":"4ff4a832-5699-4b76-b67f-04404c49eccc","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"cc4e3d25-b9d3-470f-9532-dc8c2b7feb13","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"abe60475-ec83-4b7d-a31c-918b629b8048","type":"BasicTickFormatter"},"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"},"ticker":{"id":"1b75386e-51e4-4981-ba47-5a89c4dafaaf","type":"BasicTicker"}},"id":"7848be08-8fbe-49c6-aaa7-65ca22461cb6","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f9911c7-287f-43e0-ac4d-65bb7f7371c9","type":"Wedge"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"}},"id":"8b82058a-7add-4473-a577-45f977fdb28d","type":"ResetTool"},{"attributes":{"plot":{"id":"ee8459f8-1f85-40a2-b021-a2975d7ef925","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c34e21b-62ef-4e1e-9622-bdfcdda17709","type":"BasicTicker"}},"id":"c4d7eb1b-3771-4e48-83f8-4224a1711756","type":"Grid"}],"root_ids":["ee8459f8-1f85-40a2-b021-a2975d7ef925"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"55467a4f-148e-4f5a-8c30-5aaee680d1d1","elementid":"a438e8df-df0c-4efd-b1f1-200eb97b7b63","modelid":"ee8459f8-1f85-40a2-b021-a2975d7ef925"}];
                
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

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
      };var element = document.getElementById("1efcdf58-567f-4a18-94a7-ae98c8fa9065");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1efcdf58-567f-4a18-94a7-ae98c8fa9065' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"276ede26-f014-4096-8c0c-726ca9679aab":{"roots":{"references":[{"attributes":{"below":[{"id":"2caf8ea6-a992-4504-bbc8-dfd2a96efccc","type":"LinearAxis"}],"left":[{"id":"110c2f09-dfa1-402f-9f51-16ddedc0c808","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2caf8ea6-a992-4504-bbc8-dfd2a96efccc","type":"LinearAxis"},{"id":"59b98f27-104e-4a33-a572-80c83dd775de","type":"Grid"},{"id":"110c2f09-dfa1-402f-9f51-16ddedc0c808","type":"LinearAxis"},{"id":"4d0228e0-2d33-44a6-b2b3-79b85a19b434","type":"Grid"},{"id":"7ca28ffc-0567-4929-ae06-b9510391f227","type":"BoxAnnotation"},{"id":"969e7a41-0646-4c6d-bfda-4a1f80c7c7f7","type":"GlyphRenderer"}],"title":{"id":"e7818dd5-f41f-4fde-a12f-c88d9b88da83","type":"Title"},"toolbar":{"id":"99b08715-76de-4172-9ab4-03de6f54ffbc","type":"Toolbar"},"x_range":{"id":"9dc80178-a14d-4dc6-840a-be9d503f5812","type":"DataRange1d"},"x_scale":{"id":"d5a4ee10-bccb-4345-b44c-3601e32e6de6","type":"LinearScale"},"y_range":{"id":"f0feb67f-feae-4444-8e60-409fcce9622f","type":"DataRange1d"},"y_scale":{"id":"76194a4d-fa1a-4f9c-b848-2ca4390ab2a9","type":"LinearScale"}},"id":"dc3ffc25-51f8-4669-a026-e62d65690686","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]}},"id":"d2df502c-d17a-47c6-a765-7fb9da9eaa21","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"baa235d1-406f-4e4f-ba8c-fa3b3d4ed761","type":"PanTool"},{"id":"d666fa1c-f434-49ad-85e3-b9f34d7db585","type":"WheelZoomTool"},{"id":"c028db7a-1dfe-49f5-a245-c2fc612bf743","type":"BoxZoomTool"},{"id":"9c4ada30-878b-4c6b-b8e7-b16c5e4d3dfc","type":"SaveTool"},{"id":"6316c02a-f7e8-4a7d-b7f7-dbd18c39d506","type":"ResetTool"},{"id":"f52b7d0e-01bb-447d-ac48-5611da66945b","type":"HelpTool"}]},"id":"99b08715-76de-4172-9ab4-03de6f54ffbc","type":"Toolbar"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"6bab86a4-71fd-4daf-b8f0-f059baf08d66","type":"HBar"},{"attributes":{"callback":null},"id":"9dc80178-a14d-4dc6-840a-be9d503f5812","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"e7818dd5-f41f-4fde-a12f-c88d9b88da83","type":"Title"},{"attributes":{},"id":"9fbd34a5-1535-48ab-930b-ae2a773ffbc3","type":"BasicTickFormatter"},{"attributes":{},"id":"baa235d1-406f-4e4f-ba8c-fa3b3d4ed761","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"3c5567ae-d982-4357-bbf5-084ba37cb624","type":"HBar"},{"attributes":{},"id":"d5a4ee10-bccb-4345-b44c-3601e32e6de6","type":"LinearScale"},{"attributes":{"data_source":{"id":"d2df502c-d17a-47c6-a765-7fb9da9eaa21","type":"ColumnDataSource"},"glyph":{"id":"6bab86a4-71fd-4daf-b8f0-f059baf08d66","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3c5567ae-d982-4357-bbf5-084ba37cb624","type":"HBar"},"selection_glyph":null,"view":{"id":"9c4861d4-5335-4856-97a9-f6b79593facb","type":"CDSView"}},"id":"969e7a41-0646-4c6d-bfda-4a1f80c7c7f7","type":"GlyphRenderer"},{"attributes":{},"id":"15d9d1aa-f6a1-4a5f-bdff-8d8c96eec278","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f0feb67f-feae-4444-8e60-409fcce9622f","type":"DataRange1d"},{"attributes":{"source":{"id":"d2df502c-d17a-47c6-a765-7fb9da9eaa21","type":"ColumnDataSource"}},"id":"9c4861d4-5335-4856-97a9-f6b79593facb","type":"CDSView"},{"attributes":{},"id":"d7aedb00-749c-4c91-b778-c7fbceabb9e2","type":"BasicTickFormatter"},{"attributes":{},"id":"76194a4d-fa1a-4f9c-b848-2ca4390ab2a9","type":"LinearScale"},{"attributes":{"plot":{"id":"dc3ffc25-51f8-4669-a026-e62d65690686","subtype":"Figure","type":"Plot"},"ticker":{"id":"15d9d1aa-f6a1-4a5f-bdff-8d8c96eec278","type":"BasicTicker"}},"id":"59b98f27-104e-4a33-a572-80c83dd775de","type":"Grid"},{"attributes":{},"id":"4634a142-5d12-4e98-984e-fb2936ddadd9","type":"BasicTicker"},{"attributes":{"overlay":{"id":"7ca28ffc-0567-4929-ae06-b9510391f227","type":"BoxAnnotation"}},"id":"c028db7a-1dfe-49f5-a245-c2fc612bf743","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"9fbd34a5-1535-48ab-930b-ae2a773ffbc3","type":"BasicTickFormatter"},"plot":{"id":"dc3ffc25-51f8-4669-a026-e62d65690686","subtype":"Figure","type":"Plot"},"ticker":{"id":"4634a142-5d12-4e98-984e-fb2936ddadd9","type":"BasicTicker"}},"id":"110c2f09-dfa1-402f-9f51-16ddedc0c808","type":"LinearAxis"},{"attributes":{},"id":"6316c02a-f7e8-4a7d-b7f7-dbd18c39d506","type":"ResetTool"},{"attributes":{},"id":"d666fa1c-f434-49ad-85e3-b9f34d7db585","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"d7aedb00-749c-4c91-b778-c7fbceabb9e2","type":"BasicTickFormatter"},"plot":{"id":"dc3ffc25-51f8-4669-a026-e62d65690686","subtype":"Figure","type":"Plot"},"ticker":{"id":"15d9d1aa-f6a1-4a5f-bdff-8d8c96eec278","type":"BasicTicker"}},"id":"2caf8ea6-a992-4504-bbc8-dfd2a96efccc","type":"LinearAxis"},{"attributes":{},"id":"f52b7d0e-01bb-447d-ac48-5611da66945b","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7ca28ffc-0567-4929-ae06-b9510391f227","type":"BoxAnnotation"},{"attributes":{},"id":"9c4ada30-878b-4c6b-b8e7-b16c5e4d3dfc","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"dc3ffc25-51f8-4669-a026-e62d65690686","subtype":"Figure","type":"Plot"},"ticker":{"id":"4634a142-5d12-4e98-984e-fb2936ddadd9","type":"BasicTicker"}},"id":"4d0228e0-2d33-44a6-b2b3-79b85a19b434","type":"Grid"}],"root_ids":["dc3ffc25-51f8-4669-a026-e62d65690686"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"276ede26-f014-4096-8c0c-726ca9679aab","elementid":"1efcdf58-567f-4a18-94a7-ae98c8fa9065","modelid":"dc3ffc25-51f8-4669-a026-e62d65690686"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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

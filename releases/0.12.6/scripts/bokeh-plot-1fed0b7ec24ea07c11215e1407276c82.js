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
      };var element = document.getElementById("d9e700f9-9464-4f8d-a5de-137d4c20a124");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd9e700f9-9464-4f8d-a5de-137d4c20a124' but no matching script tag was found. ")
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
                var docs_json = {"e05c708e-9858-4296-aab3-334c5f4f16be":{"roots":{"references":[{"attributes":{},"id":"6b8ba158-5693-4abd-b09a-956d54bc0d91","type":"LinearScale"},{"attributes":{},"id":"ed7cb095-31cf-4a23-b8ad-c93b9c63838b","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"cb5c57f9-169f-4653-ac2e-d4288859eb07","type":"Title"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"6616e0bf-3ccb-488e-a7f8-7f133ba1634d","type":"SaveTool"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"4690eeb5-89b3-44ac-841a-b04d795915f5","type":"ResetTool"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"d408d11a-a548-4baf-aa9b-114fe30b86d3","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed7cb095-31cf-4a23-b8ad-c93b9c63838b","type":"BasicTicker"}},"id":"8b009790-5f18-4b0a-8f06-4b65c3c7644e","type":"Grid"},{"attributes":{},"id":"d3adfcf6-2815-47ec-8493-11dd6975c63c","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9aa438d4-b2bf-4b6b-8df1-3cedf98587cb","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f31f3fb2-de8d-48ce-875f-50f522e0478f","type":"PanTool"},{"id":"d408d11a-a548-4baf-aa9b-114fe30b86d3","type":"WheelZoomTool"},{"id":"1e68226d-a48a-4354-94ed-5427d64d9c8b","type":"BoxZoomTool"},{"id":"6616e0bf-3ccb-488e-a7f8-7f133ba1634d","type":"SaveTool"},{"id":"4690eeb5-89b3-44ac-841a-b04d795915f5","type":"ResetTool"},{"id":"0555ccc3-bc95-434c-b271-b3c83cbdf578","type":"HelpTool"}]},"id":"3598af8d-6e91-4e83-b2f6-130a36da39d0","type":"Toolbar"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"0555ccc3-bc95-434c-b271-b3c83cbdf578","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"38b50ec9-f174-4a5f-b422-e786bc09b13c","type":"Circle"},{"attributes":{"below":[{"id":"2d9ca616-6e8e-422e-85f3-52ec9b545d17","type":"LinearAxis"}],"left":[{"id":"f4b7c111-9e60-476e-92a9-1b7cea1f4f7f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2d9ca616-6e8e-422e-85f3-52ec9b545d17","type":"LinearAxis"},{"id":"8b009790-5f18-4b0a-8f06-4b65c3c7644e","type":"Grid"},{"id":"f4b7c111-9e60-476e-92a9-1b7cea1f4f7f","type":"LinearAxis"},{"id":"ed58dbbf-d429-40fd-976a-60f612f27236","type":"Grid"},{"id":"9aa438d4-b2bf-4b6b-8df1-3cedf98587cb","type":"BoxAnnotation"},{"id":"5021a8fd-45ae-42b9-8bb6-bef67287b4e0","type":"GlyphRenderer"}],"title":{"id":"cb5c57f9-169f-4653-ac2e-d4288859eb07","type":"Title"},"tool_events":{"id":"ede3431f-3648-434a-a99a-0a407dad36b6","type":"ToolEvents"},"toolbar":{"id":"3598af8d-6e91-4e83-b2f6-130a36da39d0","type":"Toolbar"},"x_range":{"id":"df8fd8e8-4d51-493f-adb7-fea61129ca70","type":"DataRange1d"},"x_scale":{"id":"6b8ba158-5693-4abd-b09a-956d54bc0d91","type":"LinearScale"},"y_range":{"id":"b6795d77-9fb7-490f-b56d-935a694433a3","type":"DataRange1d"},"y_scale":{"id":"d3adfcf6-2815-47ec-8493-11dd6975c63c","type":"LinearScale"}},"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ede3431f-3648-434a-a99a-0a407dad36b6","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4bf1e6e6-9f60-46e7-a612-28dc606d4d0b","type":"Circle"},{"attributes":{"data_source":{"id":"be660838-5a90-49da-85aa-eaf0e137bb5a","type":"ColumnDataSource"},"glyph":{"id":"4bf1e6e6-9f60-46e7-a612-28dc606d4d0b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"38b50ec9-f174-4a5f-b422-e786bc09b13c","type":"Circle"},"selection_glyph":null},"id":"5021a8fd-45ae-42b9-8bb6-bef67287b4e0","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"f31f3fb2-de8d-48ce-875f-50f522e0478f","type":"PanTool"},{"attributes":{"format":"0.0%"},"id":"992ce997-7dc1-4ff4-8e6b-abd3bd5660c8","type":"NumeralTickFormatter"},{"attributes":{"formatter":{"id":"4a839806-f3ae-4344-84f1-97a7859c6834","type":"NumeralTickFormatter"},"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"eba5c451-2326-468b-b0c0-603136141e13","type":"BasicTicker"}},"id":"f4b7c111-9e60-476e-92a9-1b7cea1f4f7f","type":"LinearAxis"},{"attributes":{"overlay":{"id":"9aa438d4-b2bf-4b6b-8df1-3cedf98587cb","type":"BoxAnnotation"},"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"}},"id":"1e68226d-a48a-4354-94ed-5427d64d9c8b","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"df8fd8e8-4d51-493f-adb7-fea61129ca70","type":"DataRange1d"},{"attributes":{},"id":"eba5c451-2326-468b-b0c0-603136141e13","type":"BasicTicker"},{"attributes":{"callback":null},"id":"b6795d77-9fb7-490f-b56d-935a694433a3","type":"DataRange1d"},{"attributes":{"format":"$0.00"},"id":"4a839806-f3ae-4344-84f1-97a7859c6834","type":"NumeralTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"eba5c451-2326-468b-b0c0-603136141e13","type":"BasicTicker"}},"id":"ed58dbbf-d429-40fd-976a-60f612f27236","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"be660838-5a90-49da-85aa-eaf0e137bb5a","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"992ce997-7dc1-4ff4-8e6b-abd3bd5660c8","type":"NumeralTickFormatter"},"plot":{"id":"bf582074-bf7f-45be-815e-c750bfb371b8","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed7cb095-31cf-4a23-b8ad-c93b9c63838b","type":"BasicTicker"}},"id":"2d9ca616-6e8e-422e-85f3-52ec9b545d17","type":"LinearAxis"}],"root_ids":["bf582074-bf7f-45be-815e-c750bfb371b8"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"e05c708e-9858-4296-aab3-334c5f4f16be","elementid":"d9e700f9-9464-4f8d-a5de-137d4c20a124","modelid":"bf582074-bf7f-45be-815e-c750bfb371b8"}];
                
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

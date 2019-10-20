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
      };var element = document.getElementById("e23cedeb-09b9-4778-8ceb-483ae0f258c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e23cedeb-09b9-4778-8ceb-483ae0f258c0' but no matching script tag was found. ")
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
                var docs_json = {"20329e7a-22cd-497e-89a6-33de094c75d7":{"roots":{"references":[{"attributes":{},"id":"c3f7ed06-e908-4bbf-be6a-2af5884f9c40","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f72a0aa6-4710-4ddf-8a35-f3b70bed5b7b","type":"Toolbar"},{"attributes":{"callback":null},"id":"7e09c5e3-523e-4f8f-a335-c2d394ba155d","type":"DataRange1d"},{"attributes":{},"id":"913bcc6e-5888-4ca7-adb3-c07e30e82555","type":"BasicTicker"},{"attributes":{},"id":"cacb1689-549a-4165-8c13-f309336bb0da","type":"LinearScale"},{"attributes":{"formatter":{"id":"8ed94dcd-a024-44c9-83ae-2d2043559b75","type":"BasicTickFormatter"},"plot":{"id":"083cc507-7273-4a66-889a-fcca20f6950b","type":"Plot"},"ticker":{"id":"913bcc6e-5888-4ca7-adb3-c07e30e82555","type":"BasicTicker"}},"id":"d88cdd0a-f631-48da-884a-ccdd903759f6","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["top","x"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"c8bf5e87-e68c-42a8-8b67-4720f5d39db6","type":"ColumnDataSource"},{"attributes":{},"id":"3d408735-8149-4e5f-b31f-d1d846c31b7f","type":"ToolEvents"},{"attributes":{},"id":"8ed94dcd-a024-44c9-83ae-2d2043559b75","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"ef89d2dc-0823-403c-a1ad-4054e739f997","type":"VBar"},{"attributes":{},"id":"35c38d46-f884-48d4-bf0d-ed2d09482a86","type":"BasicTicker"},{"attributes":{"formatter":{"id":"11ad361c-7605-4b17-a92d-5893ca83b3a6","type":"BasicTickFormatter"},"plot":{"id":"083cc507-7273-4a66-889a-fcca20f6950b","type":"Plot"},"ticker":{"id":"35c38d46-f884-48d4-bf0d-ed2d09482a86","type":"BasicTicker"}},"id":"71e6afb0-225a-465d-bc69-c47576f8b6dd","type":"LinearAxis"},{"attributes":{"below":[{"id":"d88cdd0a-f631-48da-884a-ccdd903759f6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"71e6afb0-225a-465d-bc69-c47576f8b6dd","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a233d45a-1e48-4e97-b062-e3c2e7eb357e","type":"GlyphRenderer"},{"id":"d88cdd0a-f631-48da-884a-ccdd903759f6","type":"LinearAxis"},{"id":"71e6afb0-225a-465d-bc69-c47576f8b6dd","type":"LinearAxis"},{"id":"7c59cee2-6c90-4fbe-8a82-46c29a1c16fb","type":"Grid"},{"id":"ab7da250-d3a1-4be8-8d5c-e15f42d7ba05","type":"Grid"}],"title":null,"tool_events":{"id":"3d408735-8149-4e5f-b31f-d1d846c31b7f","type":"ToolEvents"},"toolbar":{"id":"f72a0aa6-4710-4ddf-8a35-f3b70bed5b7b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"91bde1f3-ab7f-435f-9d23-83e16dee1047","type":"DataRange1d"},"x_scale":{"id":"cacb1689-549a-4165-8c13-f309336bb0da","type":"LinearScale"},"y_range":{"id":"7e09c5e3-523e-4f8f-a335-c2d394ba155d","type":"DataRange1d"},"y_scale":{"id":"c3f7ed06-e908-4bbf-be6a-2af5884f9c40","type":"LinearScale"}},"id":"083cc507-7273-4a66-889a-fcca20f6950b","type":"Plot"},{"attributes":{"plot":{"id":"083cc507-7273-4a66-889a-fcca20f6950b","type":"Plot"},"ticker":{"id":"913bcc6e-5888-4ca7-adb3-c07e30e82555","type":"BasicTicker"}},"id":"7c59cee2-6c90-4fbe-8a82-46c29a1c16fb","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"083cc507-7273-4a66-889a-fcca20f6950b","type":"Plot"},"ticker":{"id":"35c38d46-f884-48d4-bf0d-ed2d09482a86","type":"BasicTicker"}},"id":"ab7da250-d3a1-4be8-8d5c-e15f42d7ba05","type":"Grid"},{"attributes":{},"id":"11ad361c-7605-4b17-a92d-5893ca83b3a6","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"91bde1f3-ab7f-435f-9d23-83e16dee1047","type":"DataRange1d"},{"attributes":{"data_source":{"id":"c8bf5e87-e68c-42a8-8b67-4720f5d39db6","type":"ColumnDataSource"},"glyph":{"id":"ef89d2dc-0823-403c-a1ad-4054e739f997","type":"VBar"},"hover_glyph":null,"muted_glyph":null},"id":"a233d45a-1e48-4e97-b062-e3c2e7eb357e","type":"GlyphRenderer"}],"root_ids":["083cc507-7273-4a66-889a-fcca20f6950b"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"20329e7a-22cd-497e-89a6-33de094c75d7","elementid":"e23cedeb-09b9-4778-8ceb-483ae0f258c0","modelid":"083cc507-7273-4a66-889a-fcca20f6950b"}];
                
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

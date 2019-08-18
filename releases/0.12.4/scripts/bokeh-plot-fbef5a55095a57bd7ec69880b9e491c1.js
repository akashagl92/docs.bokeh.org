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
      };var element = document.getElementById("a8829882-5278-4fb0-aa76-f9cd5ff78870");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a8829882-5278-4fb0-aa76-f9cd5ff78870' but no matching script tag was found. ")
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
                var docs_json = {"bb681395-dd96-4283-b096-53eb97f9082a":{"roots":{"references":[{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"e7174f47-a5ea-4c59-958e-bc1f1d901bb9","type":"ResetTool"},{"attributes":{"overlay":{"id":"33ff3b04-3238-457e-bdd4-7a825b5856a1","type":"BoxAnnotation"},"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"d3e7aab5-6d84-4d62-a290-ea264aec7170","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"af91c731-e2eb-4e60-9fa8-28a937416c46","type":"ColumnDataSource"},{"attributes":{},"id":"1c44aeac-ee43-4d44-bc6f-cf3a5d956d6b","type":"BasicTicker"},{"attributes":{},"id":"079f4360-3289-44b8-bedb-89543100409f","type":"ToolEvents"},{"attributes":{"callback":null},"id":"cba28a50-5720-4861-87f9-f83e3b1d4cb6","type":"DataRange1d"},{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c44aeac-ee43-4d44-bc6f-cf3a5d956d6b","type":"BasicTicker"}},"id":"2d12c802-c47c-4601-bc5c-17129ca12251","type":"Grid"},{"attributes":{},"id":"2efcc173-2acb-42a8-a965-773bd16cef3a","type":"BasicTicker"},{"attributes":{"callback":null},"id":"90bb5656-feb3-4d04-a5b1-182d2a6e5a16","type":"DataRange1d"},{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"57b0378c-d60c-4c4a-9e2a-d0adde192b91","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"555ca1bf-2613-40ee-b229-9311e7a74591","type":"Circle"},{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"920c7f2d-2ce6-45ea-adc4-5080c4c9338c","type":"SaveTool"},{"attributes":{"below":[{"id":"1b65e30d-aab3-44fb-b8ed-f6abf0ec900d","type":"LinearAxis"}],"left":[{"id":"b427e5b4-fdb4-47fc-8b6c-a139bf6feff1","type":"LinearAxis"}],"outline_line_alpha":{"value":0.3},"outline_line_color":{"value":"navy"},"outline_line_width":{"value":7},"plot_height":400,"plot_width":400,"renderers":[{"id":"1b65e30d-aab3-44fb-b8ed-f6abf0ec900d","type":"LinearAxis"},{"id":"2d12c802-c47c-4601-bc5c-17129ca12251","type":"Grid"},{"id":"b427e5b4-fdb4-47fc-8b6c-a139bf6feff1","type":"LinearAxis"},{"id":"3eb5d09c-0997-4c29-9ac7-eab30028c4f2","type":"Grid"},{"id":"33ff3b04-3238-457e-bdd4-7a825b5856a1","type":"BoxAnnotation"},{"id":"3eee2e67-7c57-4fc7-8333-3ad5cff8ac4f","type":"GlyphRenderer"}],"title":{"id":"646b7a22-d737-4e2d-87c3-5270433611a8","type":"Title"},"tool_events":{"id":"079f4360-3289-44b8-bedb-89543100409f","type":"ToolEvents"},"toolbar":{"id":"78bc23da-4a9a-4f60-8086-71a468954338","type":"Toolbar"},"x_range":{"id":"90bb5656-feb3-4d04-a5b1-182d2a6e5a16","type":"DataRange1d"},"y_range":{"id":"cba28a50-5720-4861-87f9-f83e3b1d4cb6","type":"DataRange1d"}},"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"38fad858-ead5-42d9-bd4e-286488969cf6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"}},"id":"8aec8f73-11d4-4749-8d7b-83ac9345530d","type":"PanTool"},{"attributes":{"formatter":{"id":"97daa0f2-a5cc-4192-adb9-9fe2bb099bc9","type":"BasicTickFormatter"},"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c44aeac-ee43-4d44-bc6f-cf3a5d956d6b","type":"BasicTicker"}},"id":"1b65e30d-aab3-44fb-b8ed-f6abf0ec900d","type":"LinearAxis"},{"attributes":{},"id":"40defb32-8f4a-40cb-8e47-6f1d38ad5b45","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"33ff3b04-3238-457e-bdd4-7a825b5856a1","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"646b7a22-d737-4e2d-87c3-5270433611a8","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2efcc173-2acb-42a8-a965-773bd16cef3a","type":"BasicTicker"}},"id":"3eb5d09c-0997-4c29-9ac7-eab30028c4f2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cebd5e6-a564-4bf2-b4ba-148c70a81524","type":"Circle"},{"attributes":{"formatter":{"id":"40defb32-8f4a-40cb-8e47-6f1d38ad5b45","type":"BasicTickFormatter"},"plot":{"id":"953ac830-d47e-49cf-87a3-805a85b81bbf","subtype":"Figure","type":"Plot"},"ticker":{"id":"2efcc173-2acb-42a8-a965-773bd16cef3a","type":"BasicTicker"}},"id":"b427e5b4-fdb4-47fc-8b6c-a139bf6feff1","type":"LinearAxis"},{"attributes":{"data_source":{"id":"af91c731-e2eb-4e60-9fa8-28a937416c46","type":"ColumnDataSource"},"glyph":{"id":"555ca1bf-2613-40ee-b229-9311e7a74591","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5cebd5e6-a564-4bf2-b4ba-148c70a81524","type":"Circle"},"selection_glyph":null},"id":"3eee2e67-7c57-4fc7-8333-3ad5cff8ac4f","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8aec8f73-11d4-4749-8d7b-83ac9345530d","type":"PanTool"},{"id":"38fad858-ead5-42d9-bd4e-286488969cf6","type":"WheelZoomTool"},{"id":"d3e7aab5-6d84-4d62-a290-ea264aec7170","type":"BoxZoomTool"},{"id":"920c7f2d-2ce6-45ea-adc4-5080c4c9338c","type":"SaveTool"},{"id":"e7174f47-a5ea-4c59-958e-bc1f1d901bb9","type":"ResetTool"},{"id":"57b0378c-d60c-4c4a-9e2a-d0adde192b91","type":"HelpTool"}]},"id":"78bc23da-4a9a-4f60-8086-71a468954338","type":"Toolbar"},{"attributes":{},"id":"97daa0f2-a5cc-4192-adb9-9fe2bb099bc9","type":"BasicTickFormatter"}],"root_ids":["953ac830-d47e-49cf-87a3-805a85b81bbf"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"bb681395-dd96-4283-b096-53eb97f9082a","elementid":"a8829882-5278-4fb0-aa76-f9cd5ff78870","modelid":"953ac830-d47e-49cf-87a3-805a85b81bbf"}];
                
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

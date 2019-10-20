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
      };var element = document.getElementById("5825b66f-264c-4cea-833b-9cc076c1503a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5825b66f-264c-4cea-833b-9cc076c1503a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"2a5824f5-c7a1-4630-ba86-199a5e250fe4":{"roots":{"references":[{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"3dd5351c-e41e-40f4-b6ec-be079f51f9bd","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"04300e2f-2b96-415f-8f2c-6330f87c9dea","type":"Circle"},{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"d273daaa-0968-4df4-b972-4b40a23f8f55","type":"PanTool"},{"attributes":{},"id":"0d80566a-ff3d-462c-8734-dff170c89dca","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"1cee8d81-e2b4-4d61-a68e-cfda9b4e23d5","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"c85f6a30-83b7-40d1-a138-f026bc8d8700","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d45f09e0-ca89-4a20-b279-1d0aa9b30451","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"74f8c9a5-1e73-4e23-9707-5763682a22af","type":"Title"},{"attributes":{},"id":"04af9cb7-200b-4e7e-8242-da18c4c735ca","type":"BasicTicker"},{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"e32b495f-a15c-4903-8758-fad24dc0712a","type":"ResetTool"},{"attributes":{},"id":"6c20d38c-4ff0-4adb-9de4-96b4b1838301","type":"ToolEvents"},{"attributes":{"below":[{"id":"8326d397-0fd0-40da-8c84-a857af3b7890","type":"LinearAxis"}],"left":[{"id":"67b51f41-7e94-45c9-9c18-6c96f309a0ab","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8326d397-0fd0-40da-8c84-a857af3b7890","type":"LinearAxis"},{"id":"a675401d-9ef6-488d-9281-2362c75eeb60","type":"Grid"},{"id":"67b51f41-7e94-45c9-9c18-6c96f309a0ab","type":"LinearAxis"},{"id":"20d801b4-a4bd-4bb1-bccd-5887333110a6","type":"Grid"},{"id":"f4487c20-5228-4686-a2d5-21e0f3b8747b","type":"BoxAnnotation"},{"id":"d9ce704a-eb2e-4c21-a1cc-fe21834b7302","type":"GlyphRenderer"}],"title":{"id":"74f8c9a5-1e73-4e23-9707-5763682a22af","type":"Title"},"tool_events":{"id":"6c20d38c-4ff0-4adb-9de4-96b4b1838301","type":"ToolEvents"},"toolbar":{"id":"bc877a5f-fd3b-4330-a222-00fb48caf392","type":"Toolbar"},"x_range":{"id":"393b0a86-a57f-4831-a2c3-b2200b325689","type":"DataRange1d"},"y_range":{"id":"f4b5e2c8-8292-4f9f-bb29-34eef91c1fae","type":"DataRange1d"}},"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"},"ticker":{"id":"04af9cb7-200b-4e7e-8242-da18c4c735ca","type":"BasicTicker"}},"id":"20d801b4-a4bd-4bb1-bccd-5887333110a6","type":"Grid"},{"attributes":{"data_source":{"id":"c85f6a30-83b7-40d1-a138-f026bc8d8700","type":"ColumnDataSource"},"glyph":{"id":"04300e2f-2b96-415f-8f2c-6330f87c9dea","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d45f09e0-ca89-4a20-b279-1d0aa9b30451","type":"Circle"},"selection_glyph":null},"id":"d9ce704a-eb2e-4c21-a1cc-fe21834b7302","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"2492cef7-01f0-417a-83c7-065dc8787b9e","type":"HelpTool"},{"attributes":{"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8e64634-ad20-4eef-9dab-1ebbd6ebc5d9","type":"BasicTicker"}},"id":"a675401d-9ef6-488d-9281-2362c75eeb60","type":"Grid"},{"attributes":{},"id":"7766c8e3-5980-4e56-b232-3681fc110615","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f4487c20-5228-4686-a2d5-21e0f3b8747b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7766c8e3-5980-4e56-b232-3681fc110615","type":"BasicTickFormatter"},"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"},"ticker":{"id":"04af9cb7-200b-4e7e-8242-da18c4c735ca","type":"BasicTicker"}},"id":"67b51f41-7e94-45c9-9c18-6c96f309a0ab","type":"LinearAxis"},{"attributes":{},"id":"d8e64634-ad20-4eef-9dab-1ebbd6ebc5d9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f4b5e2c8-8292-4f9f-bb29-34eef91c1fae","type":"DataRange1d"},{"attributes":{"callback":null},"id":"393b0a86-a57f-4831-a2c3-b2200b325689","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0d80566a-ff3d-462c-8734-dff170c89dca","type":"BasicTickFormatter"},"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8e64634-ad20-4eef-9dab-1ebbd6ebc5d9","type":"BasicTicker"}},"id":"8326d397-0fd0-40da-8c84-a857af3b7890","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d273daaa-0968-4df4-b972-4b40a23f8f55","type":"PanTool"},{"id":"3dd5351c-e41e-40f4-b6ec-be079f51f9bd","type":"WheelZoomTool"},{"id":"4046235f-7350-4a39-807e-d5812ad7e622","type":"BoxZoomTool"},{"id":"1cee8d81-e2b4-4d61-a68e-cfda9b4e23d5","type":"SaveTool"},{"id":"e32b495f-a15c-4903-8758-fad24dc0712a","type":"ResetTool"},{"id":"2492cef7-01f0-417a-83c7-065dc8787b9e","type":"HelpTool"}]},"id":"bc877a5f-fd3b-4330-a222-00fb48caf392","type":"Toolbar"},{"attributes":{"overlay":{"id":"f4487c20-5228-4686-a2d5-21e0f3b8747b","type":"BoxAnnotation"},"plot":{"id":"3a83bbb8-fe58-4365-a004-e8fed2b6b935","subtype":"Figure","type":"Plot"}},"id":"4046235f-7350-4a39-807e-d5812ad7e622","type":"BoxZoomTool"}],"root_ids":["3a83bbb8-fe58-4365-a004-e8fed2b6b935"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"2a5824f5-c7a1-4630-ba86-199a5e250fe4","elementid":"5825b66f-264c-4cea-833b-9cc076c1503a","modelid":"3a83bbb8-fe58-4365-a004-e8fed2b6b935"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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

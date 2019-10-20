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
      };var element = document.getElementById("e6ff68b8-6cef-4a1d-ae32-9e9b98fbbc26");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e6ff68b8-6cef-4a1d-ae32-9e9b98fbbc26' but no matching script tag was found. ")
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
                var docs_json = {"c947ec6c-98c2-4db8-9b73-4758cde53bcf":{"roots":{"references":[{"attributes":{},"id":"24baa5b8-a8d9-41d7-9b00-c416d0cb67eb","type":"BasicTicker"},{"attributes":{"overlay":{"id":"0d7decac-0d1c-4b30-9211-b40e452337b2","type":"BoxAnnotation"},"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"d6083f3b-88d6-40ec-9b74-91119443161e","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#99D594"},"line_color":{"value":"#99D594"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8c09b0b5-8a0d-4c94-95d3-dfc21a6fe751","type":"Triangle"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"d8151106-43e4-4c36-9391-3096fe32a49c","type":"PanTool"},{"attributes":{},"id":"cf1d3e39-67d3-4a80-ac35-afa049927085","type":"BasicTickFormatter"},{"attributes":{},"id":"e2edd624-d43a-4712-8d49-24b10279c366","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"},"ticker":{"id":"01120a4b-a437-4b2f-8696-ddfe779b4b6a","type":"BasicTicker"}},"id":"928aeb1c-fe5c-4f09-9111-5063fe367700","type":"Grid"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"c5054dc4-6bfb-41fd-bb8a-11b1c3df2671","type":"HelpTool"},{"attributes":{"callback":null},"id":"4b25530a-e613-4b6d-8cfa-afe7420da9ac","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0d7decac-0d1c-4b30-9211-b40e452337b2","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"},"ticker":{"id":"24baa5b8-a8d9-41d7-9b00-c416d0cb67eb","type":"BasicTicker"}},"id":"8875495f-7f45-4e1e-b725-b95ad99938b8","type":"Grid"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"c90dd1b8-85b1-42f4-9cd1-35df1b696b2a","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"e354a1f5-016b-4160-817d-0aa505879251","type":"Title"},{"attributes":{"callback":null,"column_names":["x","size","y"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"f33e8bd7-f37c-4aba-9de8-566ba03863bd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"ea2e4bf4-6af5-4afc-b4cf-592f27b15f6e","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d8151106-43e4-4c36-9391-3096fe32a49c","type":"PanTool"},{"id":"02cf116f-9763-4cc6-8247-68f6763a9eb2","type":"WheelZoomTool"},{"id":"d6083f3b-88d6-40ec-9b74-91119443161e","type":"BoxZoomTool"},{"id":"ea2e4bf4-6af5-4afc-b4cf-592f27b15f6e","type":"SaveTool"},{"id":"c90dd1b8-85b1-42f4-9cd1-35df1b696b2a","type":"ResetTool"},{"id":"c5054dc4-6bfb-41fd-bb8a-11b1c3df2671","type":"HelpTool"}]},"id":"94053024-7363-46ce-b7b5-b6d510d8b653","type":"Toolbar"},{"attributes":{},"id":"01120a4b-a437-4b2f-8696-ddfe779b4b6a","type":"BasicTicker"},{"attributes":{"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"}},"id":"02cf116f-9763-4cc6-8247-68f6763a9eb2","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"cf1d3e39-67d3-4a80-ac35-afa049927085","type":"BasicTickFormatter"},"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"},"ticker":{"id":"01120a4b-a437-4b2f-8696-ddfe779b4b6a","type":"BasicTicker"}},"id":"7fb4a28e-d635-4022-a18a-785baee48b43","type":"LinearAxis"},{"attributes":{"formatter":{"id":"ff4d6f90-477d-4f95-a521-e20a6d0f3a69","type":"BasicTickFormatter"},"plot":{"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"},"ticker":{"id":"24baa5b8-a8d9-41d7-9b00-c416d0cb67eb","type":"BasicTicker"}},"id":"ded3d107-5593-4334-b640-b4ae84ae94f3","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f33e8bd7-f37c-4aba-9de8-566ba03863bd","type":"ColumnDataSource"},"glyph":{"id":"8c09b0b5-8a0d-4c94-95d3-dfc21a6fe751","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"94466d86-16e9-4718-8edd-dd37cd08ffad","type":"Triangle"},"selection_glyph":null},"id":"4556caee-b6a2-4e0a-a575-e431df13f4aa","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"bc748625-49b6-4edb-84ee-6244fd74e3cb","type":"DataRange1d"},{"attributes":{},"id":"ff4d6f90-477d-4f95-a521-e20a6d0f3a69","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ded3d107-5593-4334-b640-b4ae84ae94f3","type":"LinearAxis"}],"left":[{"id":"7fb4a28e-d635-4022-a18a-785baee48b43","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ded3d107-5593-4334-b640-b4ae84ae94f3","type":"LinearAxis"},{"id":"8875495f-7f45-4e1e-b725-b95ad99938b8","type":"Grid"},{"id":"7fb4a28e-d635-4022-a18a-785baee48b43","type":"LinearAxis"},{"id":"928aeb1c-fe5c-4f09-9111-5063fe367700","type":"Grid"},{"id":"0d7decac-0d1c-4b30-9211-b40e452337b2","type":"BoxAnnotation"},{"id":"4556caee-b6a2-4e0a-a575-e431df13f4aa","type":"GlyphRenderer"}],"title":{"id":"e354a1f5-016b-4160-817d-0aa505879251","type":"Title"},"tool_events":{"id":"e2edd624-d43a-4712-8d49-24b10279c366","type":"ToolEvents"},"toolbar":{"id":"94053024-7363-46ce-b7b5-b6d510d8b653","type":"Toolbar"},"x_range":{"id":"bc748625-49b6-4edb-84ee-6244fd74e3cb","type":"DataRange1d"},"y_range":{"id":"4b25530a-e613-4b6d-8cfa-afe7420da9ac","type":"DataRange1d"}},"id":"3482df3d-b6e5-47be-a52e-e8dbe76ab083","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"94466d86-16e9-4718-8edd-dd37cd08ffad","type":"Triangle"}],"root_ids":["3482df3d-b6e5-47be-a52e-e8dbe76ab083"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"c947ec6c-98c2-4db8-9b73-4758cde53bcf","elementid":"e6ff68b8-6cef-4a1d-ae32-9e9b98fbbc26","modelid":"3482df3d-b6e5-47be-a52e-e8dbe76ab083"}];
                
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

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
      };var element = document.getElementById("054fa128-cab2-4b67-8547-1542244bad5a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '054fa128-cab2-4b67-8547-1542244bad5a' but no matching script tag was found. ")
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
                var docs_json = {"a7984d56-9091-404d-b19e-c81146c03fa1":{"roots":{"references":[{"attributes":{},"id":"1907e9a5-f43e-4df7-91c3-66360db78c3d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3c1870f9-9756-445d-9349-0ef5c6c6fcba","type":"PanTool"},{"id":"a3e979c6-bc94-45d8-92c0-a643876037d5","type":"WheelZoomTool"},{"id":"21a63b67-c147-49ab-ae06-bbe26a50d1a1","type":"BoxZoomTool"},{"id":"58613453-0732-43fc-96a7-330c1aa6ede1","type":"SaveTool"},{"id":"c978ef3c-6523-4a86-a64f-1ab954ab1a22","type":"ResetTool"},{"id":"f7ec42cd-de5a-4b83-8fb5-e101b5b5d522","type":"HelpTool"}]},"id":"1544ad4f-cdd1-4750-9503-96f9d69e3634","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"49f7d915-ccca-41bc-8178-b7cd1dbb5360","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"1d6d2ec5-777e-4715-99ae-d06293f73ec8","type":"BasicTickFormatter"},"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1907e9a5-f43e-4df7-91c3-66360db78c3d","type":"BasicTicker"}},"id":"0f0ee81b-bb78-4339-aee6-25aa33d3bcc5","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"476f9b2c-f618-4dd0-8603-25e7464d50cd","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"66f0c074-65c4-480c-97e6-ec4a382cc8fe","type":"BasicTickFormatter"},"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6091529-8655-4d9f-9e3a-28ec38da1a04","type":"BasicTicker"}},"id":"2cf80cd4-c56b-4bf3-bf80-3edc487b596d","type":"LinearAxis"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"3c1870f9-9756-445d-9349-0ef5c6c6fcba","type":"PanTool"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"a3e979c6-bc94-45d8-92c0-a643876037d5","type":"WheelZoomTool"},{"attributes":{},"id":"10832992-14e1-4f25-9557-e722db0f5071","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6091529-8655-4d9f-9e3a-28ec38da1a04","type":"BasicTicker"}},"id":"ba7af9d1-5248-42b6-b050-1a8b13c091ea","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7bf7e185-b0bc-41c6-bb04-531d0ed8e0e6","type":"SquareCross"},{"attributes":{"callback":null},"id":"5335e67a-e1f3-422f-8053-8a8d2a781619","type":"DataRange1d"},{"attributes":{"data_source":{"id":"476f9b2c-f618-4dd0-8603-25e7464d50cd","type":"ColumnDataSource"},"glyph":{"id":"7bf7e185-b0bc-41c6-bb04-531d0ed8e0e6","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":{"id":"b47d4821-a5b9-4ec7-a5b1-1d81c809e23e","type":"SquareCross"},"selection_glyph":null},"id":"b47ca7e2-0dae-4683-bc17-23fc436cf2c6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"c978ef3c-6523-4a86-a64f-1ab954ab1a22","type":"ResetTool"},{"attributes":{},"id":"c6091529-8655-4d9f-9e3a-28ec38da1a04","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"b03f3b17-85cb-4310-924c-a971949808ca","type":"Title"},{"attributes":{"overlay":{"id":"49f7d915-ccca-41bc-8178-b7cd1dbb5360","type":"BoxAnnotation"},"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"21a63b67-c147-49ab-ae06-bbe26a50d1a1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"f7ec42cd-de5a-4b83-8fb5-e101b5b5d522","type":"HelpTool"},{"attributes":{},"id":"1d6d2ec5-777e-4715-99ae-d06293f73ec8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b47d4821-a5b9-4ec7-a5b1-1d81c809e23e","type":"SquareCross"},{"attributes":{},"id":"66f0c074-65c4-480c-97e6-ec4a382cc8fe","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}},"id":"58613453-0732-43fc-96a7-330c1aa6ede1","type":"SaveTool"},{"attributes":{"callback":null},"id":"f8279e16-7ab4-4f03-8bdb-eab257a09671","type":"DataRange1d"},{"attributes":{"plot":{"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"1907e9a5-f43e-4df7-91c3-66360db78c3d","type":"BasicTicker"}},"id":"8f3b8b5f-ecf8-416f-aa76-c9e68d3fc37a","type":"Grid"},{"attributes":{"below":[{"id":"0f0ee81b-bb78-4339-aee6-25aa33d3bcc5","type":"LinearAxis"}],"left":[{"id":"2cf80cd4-c56b-4bf3-bf80-3edc487b596d","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0f0ee81b-bb78-4339-aee6-25aa33d3bcc5","type":"LinearAxis"},{"id":"8f3b8b5f-ecf8-416f-aa76-c9e68d3fc37a","type":"Grid"},{"id":"2cf80cd4-c56b-4bf3-bf80-3edc487b596d","type":"LinearAxis"},{"id":"ba7af9d1-5248-42b6-b050-1a8b13c091ea","type":"Grid"},{"id":"49f7d915-ccca-41bc-8178-b7cd1dbb5360","type":"BoxAnnotation"},{"id":"b47ca7e2-0dae-4683-bc17-23fc436cf2c6","type":"GlyphRenderer"}],"title":{"id":"b03f3b17-85cb-4310-924c-a971949808ca","type":"Title"},"tool_events":{"id":"10832992-14e1-4f25-9557-e722db0f5071","type":"ToolEvents"},"toolbar":{"id":"1544ad4f-cdd1-4750-9503-96f9d69e3634","type":"Toolbar"},"x_range":{"id":"5335e67a-e1f3-422f-8053-8a8d2a781619","type":"DataRange1d"},"y_range":{"id":"f8279e16-7ab4-4f03-8bdb-eab257a09671","type":"DataRange1d"}},"id":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7","subtype":"Figure","type":"Plot"}],"root_ids":["bdf853ff-50e9-4c80-9b43-e67f4f66d9b7"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a7984d56-9091-404d-b19e-c81146c03fa1","elementid":"054fa128-cab2-4b67-8547-1542244bad5a","modelid":"bdf853ff-50e9-4c80-9b43-e67f4f66d9b7"}];
                
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

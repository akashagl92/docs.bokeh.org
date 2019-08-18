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
      };var element = document.getElementById("8dd5bbdc-074d-4b1d-92b6-5bd2589f176b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8dd5bbdc-074d-4b1d-92b6-5bd2589f176b' but no matching script tag was found. ")
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
                var docs_json = {"14b92f35-6868-460e-83b5-8966ddbdffb0":{"roots":{"references":[{"attributes":{"formatter":{"id":"83f1a785-a18f-4587-a6ff-f4659eb6b831","type":"BasicTickFormatter"},"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"},"ticker":{"id":"f68ad2b5-7247-441a-b1fc-d3f9c6d28141","type":"BasicTicker"}},"id":"ee367f2d-b3f0-4b74-ac38-f4336a7bedf2","type":"LinearAxis"},{"attributes":{"overlay":{"id":"060c02ac-5242-4510-861d-fcc8965129d6","type":"BoxAnnotation"},"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"9dce041b-e892-4b6e-bbca-b95939f6403f","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"f0aef393-647e-4445-8ce5-7d31d1aade26","type":"ColumnDataSource"},"glyph":{"id":"41f0e9c3-2356-469f-b890-7a3025999827","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"6630390c-7ab8-4e01-b796-31edabe60df4","type":"Circle"},"selection_glyph":null},"id":"4d50e349-1dba-4719-8045-f6bf947d87f0","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"30fd138f-0655-4f12-aa6a-829a661c75d7","type":"PanTool"},{"id":"04a64515-ff61-483b-901e-fd57ed0dbb36","type":"WheelZoomTool"},{"id":"9dce041b-e892-4b6e-bbca-b95939f6403f","type":"BoxZoomTool"},{"id":"6cf0d6a3-85e4-400b-80d1-8761833f7a73","type":"SaveTool"},{"id":"be2e253d-f9bb-459c-bbdd-b7c4eb395fc0","type":"ResetTool"},{"id":"5cca8242-b58e-431b-b88e-886cfebefb99","type":"HelpTool"}]},"id":"5e57c300-b7fb-48b4-80de-494fb3beada0","type":"Toolbar"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"be2e253d-f9bb-459c-bbdd-b7c4eb395fc0","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"},"ticker":{"id":"f68ad2b5-7247-441a-b1fc-d3f9c6d28141","type":"BasicTicker"}},"id":"3e25a646-cff6-4c90-b617-56548522c67b","type":"Grid"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"6cf0d6a3-85e4-400b-80d1-8761833f7a73","type":"SaveTool"},{"attributes":{"below":[{"id":"62bb0453-b102-4c1e-94f0-72af9457f00f","type":"LinearAxis"}],"left":[{"id":"ee367f2d-b3f0-4b74-ac38-f4336a7bedf2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"62bb0453-b102-4c1e-94f0-72af9457f00f","type":"LinearAxis"},{"id":"c5924786-b756-4796-b3b2-a6e4d4a0d740","type":"Grid"},{"id":"ee367f2d-b3f0-4b74-ac38-f4336a7bedf2","type":"LinearAxis"},{"id":"3e25a646-cff6-4c90-b617-56548522c67b","type":"Grid"},{"id":"060c02ac-5242-4510-861d-fcc8965129d6","type":"BoxAnnotation"},{"id":"4d50e349-1dba-4719-8045-f6bf947d87f0","type":"GlyphRenderer"}],"title":{"id":"820db17f-250b-48e8-bab5-c996858b2b3d","type":"Title"},"tool_events":{"id":"2f8f3433-941e-4ae6-b577-a1a20e78a11f","type":"ToolEvents"},"toolbar":{"id":"5e57c300-b7fb-48b4-80de-494fb3beada0","type":"Toolbar"},"x_range":{"id":"bd696f50-6a0a-49ce-aef4-6cd62727dc11","type":"DataRange1d"},"y_range":{"id":"8a1404f4-8112-4b24-a6b4-20763b3ae0fe","type":"DataRange1d"}},"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"5cca8242-b58e-431b-b88e-886cfebefb99","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"060c02ac-5242-4510-861d-fcc8965129d6","type":"BoxAnnotation"},{"attributes":{},"id":"2f8f3433-941e-4ae6-b577-a1a20e78a11f","type":"ToolEvents"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"30fd138f-0655-4f12-aa6a-829a661c75d7","type":"PanTool"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"},"ticker":{"id":"c079fad1-1385-48b9-ba7f-2cc07b2b6865","type":"BasicTicker"}},"id":"c5924786-b756-4796-b3b2-a6e4d4a0d740","type":"Grid"},{"attributes":{"callback":null},"id":"8a1404f4-8112-4b24-a6b4-20763b3ae0fe","type":"DataRange1d"},{"attributes":{"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"}},"id":"04a64515-ff61-483b-901e-fd57ed0dbb36","type":"WheelZoomTool"},{"attributes":{},"id":"83f1a785-a18f-4587-a6ff-f4659eb6b831","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6630390c-7ab8-4e01-b796-31edabe60df4","type":"Circle"},{"attributes":{},"id":"c079fad1-1385-48b9-ba7f-2cc07b2b6865","type":"BasicTicker"},{"attributes":{},"id":"a0e8eb52-9b55-45ee-890d-7f904dcf390c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"41f0e9c3-2356-469f-b890-7a3025999827","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f0aef393-647e-4445-8ce5-7d31d1aade26","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"820db17f-250b-48e8-bab5-c996858b2b3d","type":"Title"},{"attributes":{"callback":null},"id":"bd696f50-6a0a-49ce-aef4-6cd62727dc11","type":"DataRange1d"},{"attributes":{},"id":"f68ad2b5-7247-441a-b1fc-d3f9c6d28141","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a0e8eb52-9b55-45ee-890d-7f904dcf390c","type":"BasicTickFormatter"},"plot":{"id":"95988721-d691-48e0-ac29-9dfc07674d81","subtype":"Figure","type":"Plot"},"ticker":{"id":"c079fad1-1385-48b9-ba7f-2cc07b2b6865","type":"BasicTicker"}},"id":"62bb0453-b102-4c1e-94f0-72af9457f00f","type":"LinearAxis"}],"root_ids":["95988721-d691-48e0-ac29-9dfc07674d81"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"14b92f35-6868-460e-83b5-8966ddbdffb0","elementid":"8dd5bbdc-074d-4b1d-92b6-5bd2589f176b","modelid":"95988721-d691-48e0-ac29-9dfc07674d81"}];
                
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

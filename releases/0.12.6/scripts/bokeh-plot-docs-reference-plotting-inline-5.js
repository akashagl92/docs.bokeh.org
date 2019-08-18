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
      };var element = document.getElementById("1c7a7fdf-8f2e-410d-9490-ffd5ddcb2c76");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1c7a7fdf-8f2e-410d-9490-ffd5ddcb2c76' but no matching script tag was found. ")
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
                var docs_json = {"f0905082-1b44-4762-8f80-539156f905f2":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"8737baf3-abd0-4722-a6fe-9ea55c807e06","type":"BasicTicker"}},"id":"0bdd56c9-8365-4c88-932f-4e8545af226e","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1e10e4fe-aabc-47dc-b99e-6e9bba7b481d","type":"PanTool"},{"id":"507dee50-3625-4010-864b-eb4d329c31e5","type":"WheelZoomTool"},{"id":"251616cb-078e-408b-913e-c084e312294b","type":"BoxZoomTool"},{"id":"aff1b00d-184c-4968-9c04-7c6e69d12ecf","type":"SaveTool"},{"id":"743977b4-4b67-45f2-86fb-c1c0cac84afb","type":"ResetTool"},{"id":"765e21fe-7052-4edd-a564-ed713b4f88af","type":"HelpTool"}]},"id":"8bfc89e3-1d06-49c1-b042-2acc642b9e39","type":"Toolbar"},{"attributes":{},"id":"7718967a-3e13-48f5-870e-a49209a905dc","type":"LinearScale"},{"attributes":{},"id":"8737baf3-abd0-4722-a6fe-9ea55c807e06","type":"BasicTicker"},{"attributes":{},"id":"d17ec795-c914-42cb-add7-8d012cbc1c69","type":"ToolEvents"},{"attributes":{},"id":"8464276c-396f-4493-b7ea-a8939b9eb520","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e994a88c-ae77-48da-ac08-891610a19bd8","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"f0e72115-c78f-47a4-97d5-aef680eef4a5","type":"DataRange1d"},{"attributes":{"data_source":{"id":"45c18e2a-e847-4143-a2c1-56d552d8a863","type":"ColumnDataSource"},"glyph":{"id":"287013c4-abad-495f-9c41-02dd8bca2189","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"084f11bd-c286-46e5-9247-ff5af673100c","type":"Cross"},"selection_glyph":null},"id":"5a86e1ee-14da-4c4a-b00d-53940a4d1e24","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"084f11bd-c286-46e5-9247-ff5af673100c","type":"Cross"},{"attributes":{"callback":null},"id":"c31c1443-dcb9-4a8d-87e7-0ba20e7c01a2","type":"DataRange1d"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"1e10e4fe-aabc-47dc-b99e-6e9bba7b481d","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"45c18e2a-e847-4143-a2c1-56d552d8a863","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"a402aae8-cb3e-474a-86b5-5e528a001a2f","type":"Title"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"765e21fe-7052-4edd-a564-ed713b4f88af","type":"HelpTool"},{"attributes":{"below":[{"id":"e9743c27-3031-4f08-ab54-1156e92183b0","type":"LinearAxis"}],"left":[{"id":"ec764ccb-979e-4538-be19-7a860744f4e1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e9743c27-3031-4f08-ab54-1156e92183b0","type":"LinearAxis"},{"id":"d03d9bbb-eed4-4f53-9544-166f098353ca","type":"Grid"},{"id":"ec764ccb-979e-4538-be19-7a860744f4e1","type":"LinearAxis"},{"id":"0bdd56c9-8365-4c88-932f-4e8545af226e","type":"Grid"},{"id":"e994a88c-ae77-48da-ac08-891610a19bd8","type":"BoxAnnotation"},{"id":"5a86e1ee-14da-4c4a-b00d-53940a4d1e24","type":"GlyphRenderer"}],"title":{"id":"a402aae8-cb3e-474a-86b5-5e528a001a2f","type":"Title"},"tool_events":{"id":"d17ec795-c914-42cb-add7-8d012cbc1c69","type":"ToolEvents"},"toolbar":{"id":"8bfc89e3-1d06-49c1-b042-2acc642b9e39","type":"Toolbar"},"x_range":{"id":"f0e72115-c78f-47a4-97d5-aef680eef4a5","type":"DataRange1d"},"x_scale":{"id":"7718967a-3e13-48f5-870e-a49209a905dc","type":"LinearScale"},"y_range":{"id":"c31c1443-dcb9-4a8d-87e7-0ba20e7c01a2","type":"DataRange1d"},"y_scale":{"id":"4c151339-2c1e-4821-8280-f5f18249a71a","type":"LinearScale"}},"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"54912ffd-b99a-409d-81d6-a972b0c0694f","type":"BasicTickFormatter"},"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"8737baf3-abd0-4722-a6fe-9ea55c807e06","type":"BasicTicker"}},"id":"ec764ccb-979e-4538-be19-7a860744f4e1","type":"LinearAxis"},{"attributes":{},"id":"54912ffd-b99a-409d-81d6-a972b0c0694f","type":"BasicTickFormatter"},{"attributes":{},"id":"4c151339-2c1e-4821-8280-f5f18249a71a","type":"LinearScale"},{"attributes":{},"id":"21155f6c-0936-4cbd-a7c4-994a94416955","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"287013c4-abad-495f-9c41-02dd8bca2189","type":"Cross"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"21155f6c-0936-4cbd-a7c4-994a94416955","type":"BasicTicker"}},"id":"d03d9bbb-eed4-4f53-9544-166f098353ca","type":"Grid"},{"attributes":{"overlay":{"id":"e994a88c-ae77-48da-ac08-891610a19bd8","type":"BoxAnnotation"},"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"251616cb-078e-408b-913e-c084e312294b","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"507dee50-3625-4010-864b-eb4d329c31e5","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"8464276c-396f-4493-b7ea-a8939b9eb520","type":"BasicTickFormatter"},"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"21155f6c-0936-4cbd-a7c4-994a94416955","type":"BasicTicker"}},"id":"e9743c27-3031-4f08-ab54-1156e92183b0","type":"LinearAxis"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"743977b4-4b67-45f2-86fb-c1c0cac84afb","type":"ResetTool"},{"attributes":{"plot":{"id":"8843baba-3313-45b2-9902-a6a49ac107fe","subtype":"Figure","type":"Plot"}},"id":"aff1b00d-184c-4968-9c04-7c6e69d12ecf","type":"SaveTool"}],"root_ids":["8843baba-3313-45b2-9902-a6a49ac107fe"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f0905082-1b44-4762-8f80-539156f905f2","elementid":"1c7a7fdf-8f2e-410d-9490-ffd5ddcb2c76","modelid":"8843baba-3313-45b2-9902-a6a49ac107fe"}];
                
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

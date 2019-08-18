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
      };var element = document.getElementById("8adabc13-78f0-4fb8-900a-cc0c308656ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8adabc13-78f0-4fb8-900a-cc0c308656ab' but no matching script tag was found. ")
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
                var docs_json = {"636edb4e-d783-49c0-a6b4-54f7b5d0956b":{"roots":{"references":[{"attributes":{},"id":"868f8c92-2c61-4948-aefa-27dd307c01a9","type":"LinearScale"},{"attributes":{"callback":null},"id":"1e2ffe4c-1067-478d-a63d-d7d738e8d209","type":"DataRange1d"},{"attributes":{"below":[{"id":"cdaa7200-95e5-4f3a-968a-deda6c9a18c1","type":"LinearAxis"}],"left":[{"id":"c6208ea7-d996-478d-acca-7553604ddc64","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cdaa7200-95e5-4f3a-968a-deda6c9a18c1","type":"LinearAxis"},{"id":"5fde8d16-c4db-4947-b13a-2873f7b0acc8","type":"Grid"},{"id":"c6208ea7-d996-478d-acca-7553604ddc64","type":"LinearAxis"},{"id":"26ccdaaf-14c9-4c33-9e7c-a5d4fa55b54a","type":"Grid"},{"id":"5833c62d-e971-4b53-9c7e-1fed6a2fca36","type":"BoxAnnotation"},{"id":"df29cfd8-9468-4807-a047-7e8ebe5edd97","type":"GlyphRenderer"}],"title":{"id":"07c73e6e-9d5c-40bc-a9ea-131c49286bfd","type":"Title"},"tool_events":{"id":"d226d180-fbfa-4598-a0e4-a8b2f62cbd88","type":"ToolEvents"},"toolbar":{"id":"581551ce-2a0b-4336-8db4-c0e5499ec836","type":"Toolbar"},"x_range":{"id":"d2ddc9e7-aea3-4637-812b-3676358a43bc","type":"DataRange1d"},"x_scale":{"id":"bd6a2072-150e-4510-9179-8e5ca6b8d450","type":"LinearScale"},"y_range":{"id":"1e2ffe4c-1067-478d-a63d-d7d738e8d209","type":"DataRange1d"},"y_scale":{"id":"868f8c92-2c61-4948-aefa-27dd307c01a9","type":"LinearScale"}},"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5833c62d-e971-4b53-9c7e-1fed6a2fca36","type":"BoxAnnotation"},{"attributes":{},"id":"d226d180-fbfa-4598-a0e4-a8b2f62cbd88","type":"ToolEvents"},{"attributes":{},"id":"468123d6-2131-4cac-8982-5d35d3017394","type":"BasicTickFormatter"},{"attributes":{},"id":"4d634ce7-894a-46f6-9f15-98930cd0d5bb","type":"BasicTickFormatter"},{"attributes":{},"id":"1f630213-821a-42a2-92cc-bd6881e50413","type":"BasicTicker"},{"attributes":{},"id":"bd6a2072-150e-4510-9179-8e5ca6b8d450","type":"LinearScale"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"402f5150-ca16-444b-89c9-a663afbce75c","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"48f2da2e-b060-45a5-ae73-9182cf8a0ddf","type":"SaveTool"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"27d7bf64-77e1-4b87-a4d8-5aea1bdb2469","type":"HelpTool"},{"attributes":{"formatter":{"id":"468123d6-2131-4cac-8982-5d35d3017394","type":"BasicTickFormatter"},"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"c78536f5-7c5e-4d62-abfd-43b84af01932","type":"BasicTicker"}},"id":"cdaa7200-95e5-4f3a-968a-deda6c9a18c1","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"b5c6ff83-46e6-4180-ba25-7675523ef831","type":"Quad"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"26fd631e-17cc-4ba8-9a47-82f818bb7fc9","type":"PanTool"},{"attributes":{"callback":null,"column_names":["left","right","top","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"2f8d36d1-bf34-4a16-acab-60155867a3c1","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f630213-821a-42a2-92cc-bd6881e50413","type":"BasicTicker"}},"id":"26ccdaaf-14c9-4c33-9e7c-a5d4fa55b54a","type":"Grid"},{"attributes":{"formatter":{"id":"4d634ce7-894a-46f6-9f15-98930cd0d5bb","type":"BasicTickFormatter"},"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f630213-821a-42a2-92cc-bd6881e50413","type":"BasicTicker"}},"id":"c6208ea7-d996-478d-acca-7553604ddc64","type":"LinearAxis"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"7fd9086c-76d6-4131-a78e-c57de20d46fc","type":"Quad"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"b0726295-269f-49f4-b020-33872e358c70","type":"ResetTool"},{"attributes":{"data_source":{"id":"2f8d36d1-bf34-4a16-acab-60155867a3c1","type":"ColumnDataSource"},"glyph":{"id":"b5c6ff83-46e6-4180-ba25-7675523ef831","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7fd9086c-76d6-4131-a78e-c57de20d46fc","type":"Quad"},"selection_glyph":null},"id":"df29cfd8-9468-4807-a047-7e8ebe5edd97","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"26fd631e-17cc-4ba8-9a47-82f818bb7fc9","type":"PanTool"},{"id":"402f5150-ca16-444b-89c9-a663afbce75c","type":"WheelZoomTool"},{"id":"9925bf0b-6d42-420c-8cbb-fe694bff3305","type":"BoxZoomTool"},{"id":"48f2da2e-b060-45a5-ae73-9182cf8a0ddf","type":"SaveTool"},{"id":"b0726295-269f-49f4-b020-33872e358c70","type":"ResetTool"},{"id":"27d7bf64-77e1-4b87-a4d8-5aea1bdb2469","type":"HelpTool"}]},"id":"581551ce-2a0b-4336-8db4-c0e5499ec836","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"07c73e6e-9d5c-40bc-a9ea-131c49286bfd","type":"Title"},{"attributes":{"overlay":{"id":"5833c62d-e971-4b53-9c7e-1fed6a2fca36","type":"BoxAnnotation"},"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"}},"id":"9925bf0b-6d42-420c-8cbb-fe694bff3305","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d50b8edb-17c9-49e8-8a89-2849b73108f6","subtype":"Figure","type":"Plot"},"ticker":{"id":"c78536f5-7c5e-4d62-abfd-43b84af01932","type":"BasicTicker"}},"id":"5fde8d16-c4db-4947-b13a-2873f7b0acc8","type":"Grid"},{"attributes":{},"id":"c78536f5-7c5e-4d62-abfd-43b84af01932","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d2ddc9e7-aea3-4637-812b-3676358a43bc","type":"DataRange1d"}],"root_ids":["d50b8edb-17c9-49e8-8a89-2849b73108f6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"636edb4e-d783-49c0-a6b4-54f7b5d0956b","elementid":"8adabc13-78f0-4fb8-900a-cc0c308656ab","modelid":"d50b8edb-17c9-49e8-8a89-2849b73108f6"}];
                
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

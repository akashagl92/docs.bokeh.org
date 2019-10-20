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
      };var element = document.getElementById("e5c222c7-665e-4cec-8e36-153cd9a805fa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5c222c7-665e-4cec-8e36-153cd9a805fa' but no matching script tag was found. ")
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
                var docs_json = {"34824a9a-5789-4043-93c2-e6561a3f6fb5":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"05e1cad7-5cfb-49e6-96a1-61967b1c64a6","type":"Title"},{"attributes":{"formatter":{"id":"5aecc24c-9049-4579-8247-d209ff6fa552","type":"BasicTickFormatter"},"plot":{"id":"6baec64b-f004-4660-9eb8-15588795f9bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c269a8-a19d-470a-bf0f-7d8cc4835cc9","type":"BasicTicker"}},"id":"d3ffc6e5-0ddf-4e25-8451-81711bb5bc0e","type":"LinearAxis"},{"attributes":{},"id":"e84283c4-76b4-4621-86f9-ef9fa35892fd","type":"LinearScale"},{"attributes":{},"id":"8b771b1f-3ac1-4e1e-89de-5e92d80b7e91","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6baec64b-f004-4660-9eb8-15588795f9bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"82770fe5-0408-4f0a-b685-667baa56e833","type":"BasicTicker"}},"id":"59c502e3-1e2a-422a-9f09-87e6bf9a81f2","type":"Grid"},{"attributes":{},"id":"bb7b73fe-83fb-4eea-bd0d-be9a740bf0d8","type":"HelpTool"},{"attributes":{"overlay":{"id":"2c8c3603-a3a4-4ab6-8960-fae7db5bb275","type":"BoxAnnotation"}},"id":"31cfb1b1-d306-419c-9387-27bf2787eb30","type":"BoxZoomTool"},{"attributes":{},"id":"a8c269a8-a19d-470a-bf0f-7d8cc4835cc9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6baec64b-f004-4660-9eb8-15588795f9bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c269a8-a19d-470a-bf0f-7d8cc4835cc9","type":"BasicTicker"}},"id":"48c614c3-0c6d-4111-bcea-74957304ea97","type":"Grid"},{"attributes":{"callback":null},"id":"62d5a932-e5fc-48f0-819b-dea02c8142c2","type":"DataRange1d"},{"attributes":{},"id":"2cbd1f2c-985a-4998-9303-334aa4ddd772","type":"LinearScale"},{"attributes":{"formatter":{"id":"360e688d-5f91-4ced-ae37-23b6ce8e7637","type":"BasicTickFormatter"},"plot":{"id":"6baec64b-f004-4660-9eb8-15588795f9bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"82770fe5-0408-4f0a-b685-667baa56e833","type":"BasicTicker"}},"id":"6ccb2550-5a3c-4631-8441-3f483d39fafc","type":"LinearAxis"},{"attributes":{"below":[{"id":"6ccb2550-5a3c-4631-8441-3f483d39fafc","type":"LinearAxis"}],"left":[{"id":"d3ffc6e5-0ddf-4e25-8451-81711bb5bc0e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"6ccb2550-5a3c-4631-8441-3f483d39fafc","type":"LinearAxis"},{"id":"59c502e3-1e2a-422a-9f09-87e6bf9a81f2","type":"Grid"},{"id":"d3ffc6e5-0ddf-4e25-8451-81711bb5bc0e","type":"LinearAxis"},{"id":"48c614c3-0c6d-4111-bcea-74957304ea97","type":"Grid"},{"id":"2c8c3603-a3a4-4ab6-8960-fae7db5bb275","type":"BoxAnnotation"},{"id":"cd1ab5bd-6b33-451f-a28a-18f9451398b6","type":"GlyphRenderer"}],"title":{"id":"05e1cad7-5cfb-49e6-96a1-61967b1c64a6","type":"Title"},"toolbar":{"id":"af6e88e1-f5a6-4da0-81c5-48f9e86421b2","type":"Toolbar"},"x_range":{"id":"62d5a932-e5fc-48f0-819b-dea02c8142c2","type":"DataRange1d"},"x_scale":{"id":"e84283c4-76b4-4621-86f9-ef9fa35892fd","type":"LinearScale"},"y_range":{"id":"35dc3edd-2fd6-43cd-a19a-fc8da1000121","type":"DataRange1d"},"y_scale":{"id":"2cbd1f2c-985a-4998-9303-334aa4ddd772","type":"LinearScale"}},"id":"6baec64b-f004-4660-9eb8-15588795f9bb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"5aecc24c-9049-4579-8247-d209ff6fa552","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e17c00fd-eb17-45b9-8381-2e8dc88dd9f3","type":"PanTool"},{"id":"8b771b1f-3ac1-4e1e-89de-5e92d80b7e91","type":"WheelZoomTool"},{"id":"31cfb1b1-d306-419c-9387-27bf2787eb30","type":"BoxZoomTool"},{"id":"fb9edc32-3abb-434a-969a-c68899a28f2d","type":"SaveTool"},{"id":"02b54c56-521b-426d-b4bd-0453ec22bb47","type":"ResetTool"},{"id":"bb7b73fe-83fb-4eea-bd0d-be9a740bf0d8","type":"HelpTool"}]},"id":"af6e88e1-f5a6-4da0-81c5-48f9e86421b2","type":"Toolbar"},{"attributes":{"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c615a2ad-6228-4257-9eab-786a81338a99","type":"MultiLine"},{"attributes":{"callback":null},"id":"35dc3edd-2fd6-43cd-a19a-fc8da1000121","type":"DataRange1d"},{"attributes":{},"id":"82770fe5-0408-4f0a-b685-667baa56e833","type":"BasicTicker"},{"attributes":{},"id":"e17c00fd-eb17-45b9-8381-2e8dc88dd9f3","type":"PanTool"},{"attributes":{"source":{"id":"7ebb6f1a-4277-4b81-9183-fef94d2f1bf2","type":"ColumnDataSource"}},"id":"2e59d4dc-99f7-4719-ac32-4b545edfb5ef","type":"CDSView"},{"attributes":{},"id":"360e688d-5f91-4ced-ae37-23b6ce8e7637","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2c8c3603-a3a4-4ab6-8960-fae7db5bb275","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6790f64d-8fff-4ee3-9e4e-304365a039aa","type":"MultiLine"},{"attributes":{},"id":"fb9edc32-3abb-434a-969a-c68899a28f2d","type":"SaveTool"},{"attributes":{},"id":"02b54c56-521b-426d-b4bd-0453ec22bb47","type":"ResetTool"},{"attributes":{"data_source":{"id":"7ebb6f1a-4277-4b81-9183-fef94d2f1bf2","type":"ColumnDataSource"},"glyph":{"id":"c615a2ad-6228-4257-9eab-786a81338a99","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6790f64d-8fff-4ee3-9e4e-304365a039aa","type":"MultiLine"},"selection_glyph":null,"view":{"id":"2e59d4dc-99f7-4719-ac32-4b545edfb5ef","type":"CDSView"}},"id":"cd1ab5bd-6b33-451f-a28a-18f9451398b6","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","line_alpha"],"data":{"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"7ebb6f1a-4277-4b81-9183-fef94d2f1bf2","type":"ColumnDataSource"}],"root_ids":["6baec64b-f004-4660-9eb8-15588795f9bb"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"34824a9a-5789-4043-93c2-e6561a3f6fb5","elementid":"e5c222c7-665e-4cec-8e36-153cd9a805fa","modelid":"6baec64b-f004-4660-9eb8-15588795f9bb"}];
                
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

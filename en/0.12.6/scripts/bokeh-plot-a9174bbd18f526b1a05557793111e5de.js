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
      };var element = document.getElementById("726df935-278f-43c6-88f1-c4be2a574f83");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '726df935-278f-43c6-88f1-c4be2a574f83' but no matching script tag was found. ")
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
                var docs_json = {"96cbf05b-6761-417c-a73d-1190c88cef8e":{"roots":{"references":[{"attributes":{"callback":null},"id":"81cb9328-6e57-42a8-9b0b-17f510fd16ba","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f7cd3d8-4a84-4155-a134-7a7994239f5e","type":"BasicTicker"}},"id":"c94cde67-477d-4043-b42c-0225c3d8d5d3","type":"Grid"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0f49868-0e59-4493-b2c6-6a58a9e8f1ef","type":"BasicTicker"}},"id":"ba966b93-69fa-4321-918e-202e9274c101","type":"Grid"},{"attributes":{},"id":"f0f49868-0e59-4493-b2c6-6a58a9e8f1ef","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"49a0eb88-b902-4341-a27c-8c81556973ac","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d50312d3-03fa-4dbc-b985-fc15d5cb93c1","type":"LinearAxis"}],"left":[{"id":"83a353c2-dae1-4cef-a3cf-7c60320e87d5","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d50312d3-03fa-4dbc-b985-fc15d5cb93c1","type":"LinearAxis"},{"id":"ba966b93-69fa-4321-918e-202e9274c101","type":"Grid"},{"id":"83a353c2-dae1-4cef-a3cf-7c60320e87d5","type":"LinearAxis"},{"id":"c94cde67-477d-4043-b42c-0225c3d8d5d3","type":"Grid"},{"id":"5508f62a-3e8e-4c7b-af24-85239bd9a8b9","type":"BoxAnnotation"},{"id":"09ed71dd-3b0a-4ffe-8d09-68d0423c6564","type":"GlyphRenderer"}],"title":{"id":"8b538c48-e6f5-4ae6-ba14-0bff271b2ae1","type":"Title"},"tool_events":{"id":"57b199de-1d3f-4dbc-a0b8-dbe61559ee79","type":"ToolEvents"},"toolbar":{"id":"7db72ae0-dbb2-4aba-97c4-ad4657128649","type":"Toolbar"},"x_range":{"id":"5405bb2b-f853-47e6-817a-5889edf6ef81","type":"DataRange1d"},"x_scale":{"id":"8b5a3dfb-c751-4e11-a3ed-09762fddf8b1","type":"LinearScale"},"y_range":{"id":"81cb9328-6e57-42a8-9b0b-17f510fd16ba","type":"DataRange1d"},"y_scale":{"id":"0005ba85-43e9-4990-bab5-ed0ba9fbae68","type":"LinearScale"}},"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"5508f62a-3e8e-4c7b-af24-85239bd9a8b9","type":"BoxAnnotation"},"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"aeeecc5e-c6e5-46f5-a535-eae8fa8b609c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5508f62a-3e8e-4c7b-af24-85239bd9a8b9","type":"BoxAnnotation"},{"attributes":{},"id":"9f7cd3d8-4a84-4155-a134-7a7994239f5e","type":"BasicTicker"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.6},"fill_color":{"value":"green"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"green"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"6153b88f-d83d-4471-baa1-4546809a0a2e","type":"AnnularWedge"},{"attributes":{},"id":"03b01a1b-450b-447c-84aa-ab3a6f5fe765","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"88f659e7-4f91-4370-94ba-4da0abfe6662","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a627127e-34f4-49f0-a7cc-e7a0b15a3bae","type":"PanTool"},{"id":"88f659e7-4f91-4370-94ba-4da0abfe6662","type":"WheelZoomTool"},{"id":"aeeecc5e-c6e5-46f5-a535-eae8fa8b609c","type":"BoxZoomTool"},{"id":"112e2959-7839-4865-b2d0-d3f980c38df0","type":"SaveTool"},{"id":"4ac4dd39-12a8-4de5-8fb3-8683ab0c9410","type":"ResetTool"},{"id":"53f316ec-2deb-460b-86c0-b28c1bcc39f2","type":"HelpTool"}]},"id":"7db72ae0-dbb2-4aba-97c4-ad4657128649","type":"Toolbar"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"112e2959-7839-4865-b2d0-d3f980c38df0","type":"SaveTool"},{"attributes":{},"id":"76c21078-4c94-4d60-a226-68c877a351fa","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"03b01a1b-450b-447c-84aa-ab3a6f5fe765","type":"BasicTickFormatter"},"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0f49868-0e59-4493-b2c6-6a58a9e8f1ef","type":"BasicTicker"}},"id":"d50312d3-03fa-4dbc-b985-fc15d5cb93c1","type":"LinearAxis"},{"attributes":{},"id":"8b5a3dfb-c751-4e11-a3ed-09762fddf8b1","type":"LinearScale"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"4ac4dd39-12a8-4de5-8fb3-8683ab0c9410","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"8b538c48-e6f5-4ae6-ba14-0bff271b2ae1","type":"Title"},{"attributes":{},"id":"57b199de-1d3f-4dbc-a0b8-dbe61559ee79","type":"ToolEvents"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"53f316ec-2deb-460b-86c0-b28c1bcc39f2","type":"HelpTool"},{"attributes":{"callback":null},"id":"5405bb2b-f853-47e6-817a-5889edf6ef81","type":"DataRange1d"},{"attributes":{"formatter":{"id":"76c21078-4c94-4d60-a226-68c877a351fa","type":"BasicTickFormatter"},"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f7cd3d8-4a84-4155-a134-7a7994239f5e","type":"BasicTicker"}},"id":"83a353c2-dae1-4cef-a3cf-7c60320e87d5","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.8},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"start_angle":{"units":"rad","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"34bd0340-191f-4326-bd1f-affc722d6e78","type":"AnnularWedge"},{"attributes":{},"id":"0005ba85-43e9-4990-bab5-ed0ba9fbae68","type":"LinearScale"},{"attributes":{"data_source":{"id":"49a0eb88-b902-4341-a27c-8c81556973ac","type":"ColumnDataSource"},"glyph":{"id":"6153b88f-d83d-4471-baa1-4546809a0a2e","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34bd0340-191f-4326-bd1f-affc722d6e78","type":"AnnularWedge"},"selection_glyph":null},"id":"09ed71dd-3b0a-4ffe-8d09-68d0423c6564","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5","subtype":"Figure","type":"Plot"}},"id":"a627127e-34f4-49f0-a7cc-e7a0b15a3bae","type":"PanTool"}],"root_ids":["12ada0f5-7ffa-4b0d-8997-8de9fe8330b5"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"96cbf05b-6761-417c-a73d-1190c88cef8e","elementid":"726df935-278f-43c6-88f1-c4be2a574f83","modelid":"12ada0f5-7ffa-4b0d-8997-8de9fe8330b5"}];
                
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

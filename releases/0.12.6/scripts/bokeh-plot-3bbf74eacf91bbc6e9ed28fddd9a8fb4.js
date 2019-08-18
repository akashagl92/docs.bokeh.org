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
      };var element = document.getElementById("871a3f99-efe3-4a6c-bad4-330c5d99e118");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '871a3f99-efe3-4a6c-bad4-330c5d99e118' but no matching script tag was found. ")
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
                var docs_json = {"a7c9a892-b986-4894-8591-d54e6c0201ce":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c3c27b4-0094-437b-b535-6052b6213094","type":"BasicTicker"}},"id":"6491d1ab-ec0a-4e02-911a-db83f76fb15b","type":"Grid"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"0f3d9dcd-3b05-4d51-8eb8-943f97f411b7","type":"HelpTool"},{"attributes":{},"id":"dad19151-9a5d-46b7-8f10-cd5d3de7a027","type":"ToolEvents"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"1dec8150-f81c-4e1e-8388-bcfa158b15e1","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"11544760-fb04-419a-8fdc-ae4f84afd481","type":"Circle"},{"attributes":{"formatter":{"id":"3bbd3ee3-a7ab-49f1-b7d3-9a0eac2978d2","type":"BasicTickFormatter"},"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"},"ticker":{"id":"8c3c27b4-0094-437b-b535-6052b6213094","type":"BasicTicker"}},"id":"5bc01322-9f6d-45a7-84bb-65c3da42cb1a","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3923f60e-0d8d-4af4-a2c8-06c5b30b7f62","type":"PanTool"},{"id":"1dec8150-f81c-4e1e-8388-bcfa158b15e1","type":"WheelZoomTool"},{"id":"94666f0c-d513-467a-af63-bacc5a5e1eef","type":"BoxZoomTool"},{"id":"328428f0-1956-4367-82e1-a6c0ba0074d2","type":"SaveTool"},{"id":"7fbca493-e565-4562-a782-701b7c9b0864","type":"ResetTool"},{"id":"0f3d9dcd-3b05-4d51-8eb8-943f97f411b7","type":"HelpTool"}]},"id":"642e8e55-cec2-42fc-a6fa-1a95b3585765","type":"Toolbar"},{"attributes":{"overlay":{"id":"169c8515-3d6d-4f28-abb2-52d2c4d0bfd8","type":"BoxAnnotation"},"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"94666f0c-d513-467a-af63-bacc5a5e1eef","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"95fff2a9-41e9-423d-a459-83b879c5e1e6","type":"DataRange1d"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe331ca1-1bfe-4fc7-9a22-19a48ddce650","type":"BasicTicker"}},"id":"e60b29bb-c374-4ff0-94d4-df5edb6a75f0","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"169c8515-3d6d-4f28-abb2-52d2c4d0bfd8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"328428f0-1956-4367-82e1-a6c0ba0074d2","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"12fd2921-f6c8-4a71-8eec-5d9b27f6ae42","type":"Circle"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"7fbca493-e565-4562-a782-701b7c9b0864","type":"ResetTool"},{"attributes":{"callback":null},"id":"1563aefe-08b4-4495-bf27-e9c6c073a28b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6500e6a5-e98b-4a5f-845a-9ea8f86a0c7c","type":"BasicTickFormatter"},"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"},"ticker":{"id":"24b36b73-eb7d-40ea-98f2-2075f4527b63","type":"FixedTicker"}},"id":"8e419597-4ed5-4d62-8683-356bdba65322","type":"LinearAxis"},{"attributes":{},"id":"8c3c27b4-0094-437b-b535-6052b6213094","type":"BasicTicker"},{"attributes":{},"id":"fe331ca1-1bfe-4fc7-9a22-19a48ddce650","type":"BasicTicker"},{"attributes":{"data_source":{"id":"07aa5c46-e718-4215-bd86-7951e967ac12","type":"ColumnDataSource"},"glyph":{"id":"12fd2921-f6c8-4a71-8eec-5d9b27f6ae42","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11544760-fb04-419a-8fdc-ae4f84afd481","type":"Circle"},"selection_glyph":null},"id":"96e9901d-1529-44af-87b2-816c75e056f0","type":"GlyphRenderer"},{"attributes":{},"id":"f41cc7b7-acd6-49f7-8f23-1a9d9b4286ea","type":"LinearScale"},{"attributes":{},"id":"3bbd3ee3-a7ab-49f1-b7d3-9a0eac2978d2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"07aa5c46-e718-4215-bd86-7951e967ac12","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"}},"id":"3923f60e-0d8d-4af4-a2c8-06c5b30b7f62","type":"PanTool"},{"attributes":{},"id":"f19cde78-9070-4b18-957f-46d9ed8f40d9","type":"LinearScale"},{"attributes":{"ticks":[2,3.5,4]},"id":"24b36b73-eb7d-40ea-98f2-2075f4527b63","type":"FixedTicker"},{"attributes":{"below":[{"id":"8e419597-4ed5-4d62-8683-356bdba65322","type":"LinearAxis"}],"left":[{"id":"5bc01322-9f6d-45a7-84bb-65c3da42cb1a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8e419597-4ed5-4d62-8683-356bdba65322","type":"LinearAxis"},{"id":"e60b29bb-c374-4ff0-94d4-df5edb6a75f0","type":"Grid"},{"id":"5bc01322-9f6d-45a7-84bb-65c3da42cb1a","type":"LinearAxis"},{"id":"6491d1ab-ec0a-4e02-911a-db83f76fb15b","type":"Grid"},{"id":"169c8515-3d6d-4f28-abb2-52d2c4d0bfd8","type":"BoxAnnotation"},{"id":"96e9901d-1529-44af-87b2-816c75e056f0","type":"GlyphRenderer"}],"title":{"id":"36074858-aced-4c09-ab02-9ead3903d928","type":"Title"},"tool_events":{"id":"dad19151-9a5d-46b7-8f10-cd5d3de7a027","type":"ToolEvents"},"toolbar":{"id":"642e8e55-cec2-42fc-a6fa-1a95b3585765","type":"Toolbar"},"x_range":{"id":"95fff2a9-41e9-423d-a459-83b879c5e1e6","type":"DataRange1d"},"x_scale":{"id":"f19cde78-9070-4b18-957f-46d9ed8f40d9","type":"LinearScale"},"y_range":{"id":"1563aefe-08b4-4495-bf27-e9c6c073a28b","type":"DataRange1d"},"y_scale":{"id":"f41cc7b7-acd6-49f7-8f23-1a9d9b4286ea","type":"LinearScale"}},"id":"808434aa-7b77-4222-af03-56d4381c64da","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"36074858-aced-4c09-ab02-9ead3903d928","type":"Title"},{"attributes":{},"id":"6500e6a5-e98b-4a5f-845a-9ea8f86a0c7c","type":"BasicTickFormatter"}],"root_ids":["808434aa-7b77-4222-af03-56d4381c64da"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a7c9a892-b986-4894-8591-d54e6c0201ce","elementid":"871a3f99-efe3-4a6c-bad4-330c5d99e118","modelid":"808434aa-7b77-4222-af03-56d4381c64da"}];
                
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

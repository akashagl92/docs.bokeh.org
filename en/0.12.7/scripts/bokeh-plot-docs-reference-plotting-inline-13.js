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
      };var element = document.getElementById("cfbddf11-56fd-400e-ab03-fd0f1f3b0772");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cfbddf11-56fd-400e-ab03-fd0f1f3b0772' but no matching script tag was found. ")
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
                var docs_json = {"34be20df-9cc9-4570-8aae-4942684beb16":{"roots":{"references":[{"attributes":{},"id":"cf4aff76-adf5-42fd-b8ef-35761a2a0c7e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf4aff76-adf5-42fd-b8ef-35761a2a0c7e","type":"BasicTicker"}},"id":"e1f26ada-9ac5-45ed-a3ed-746e0c6e2422","type":"Grid"},{"attributes":{"source":{"id":"e4fc220c-c80a-43ae-9afe-e65c0e1661da","type":"ColumnDataSource"}},"id":"7f01c991-da03-4736-8915-47af8708836a","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"92534b57-47bd-45d2-892f-4b322e64cc2c","type":"Oval"},{"attributes":{"data_source":{"id":"e4fc220c-c80a-43ae-9afe-e65c0e1661da","type":"ColumnDataSource"},"glyph":{"id":"92534b57-47bd-45d2-892f-4b322e64cc2c","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ff65202f-630c-4774-9407-f494555d47f2","type":"Oval"},"selection_glyph":null,"view":{"id":"7f01c991-da03-4736-8915-47af8708836a","type":"CDSView"}},"id":"122b0c3c-7724-4965-9c93-7c66cf9942b8","type":"GlyphRenderer"},{"attributes":{},"id":"51286b3b-9a1b-421f-a6ea-3bc1458e75a6","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb2b2115-7501-4062-9a65-2c84cbdec5ba","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"b3827b13-7f95-4d76-932d-7ddd43de0e0e","type":"LinearAxis"}],"left":[{"id":"5b7fd5fa-e3f4-4c3c-bbd2-353b691d109a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b3827b13-7f95-4d76-932d-7ddd43de0e0e","type":"LinearAxis"},{"id":"3f869830-0af7-40af-ba6b-f79f364c9f00","type":"Grid"},{"id":"5b7fd5fa-e3f4-4c3c-bbd2-353b691d109a","type":"LinearAxis"},{"id":"e1f26ada-9ac5-45ed-a3ed-746e0c6e2422","type":"Grid"},{"id":"cb2b2115-7501-4062-9a65-2c84cbdec5ba","type":"BoxAnnotation"},{"id":"122b0c3c-7724-4965-9c93-7c66cf9942b8","type":"GlyphRenderer"}],"title":{"id":"7180ab44-4fc5-41da-be6b-2dccd6842ed1","type":"Title"},"toolbar":{"id":"566dfd41-b363-470a-bbe6-28a53666a40a","type":"Toolbar"},"x_range":{"id":"e3e77b21-9fd7-43da-a7c0-230ce9ee1350","type":"DataRange1d"},"x_scale":{"id":"b20f3fc5-6188-44ba-b9dc-a888b77d4d2a","type":"LinearScale"},"y_range":{"id":"93c52787-ca19-4c67-9ca2-4aa05dc4c2bd","type":"DataRange1d"},"y_scale":{"id":"6a38f34e-2f4b-4bb3-82e3-c790d9524d1b","type":"LinearScale"}},"id":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61570644-76fb-407f-a136-8834ced8162a","type":"PanTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"e4fc220c-c80a-43ae-9afe-e65c0e1661da","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"61570644-76fb-407f-a136-8834ced8162a","type":"PanTool"},{"id":"b4689037-ee0b-4903-8467-ee0593be2e8c","type":"WheelZoomTool"},{"id":"52f92e3d-e372-4928-b121-9857c634a205","type":"BoxZoomTool"},{"id":"4bfad66e-1db6-4bde-a729-0c3a121d5bfd","type":"SaveTool"},{"id":"0c115959-40b1-458a-96b1-594c294ce7c9","type":"ResetTool"},{"id":"54e43bb3-7755-4479-9795-e3d4d57bf9e5","type":"HelpTool"}]},"id":"566dfd41-b363-470a-bbe6-28a53666a40a","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"7180ab44-4fc5-41da-be6b-2dccd6842ed1","type":"Title"},{"attributes":{"formatter":{"id":"e47219c3-171e-418b-b054-f08784ad53ba","type":"BasicTickFormatter"},"plot":{"id":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a3d7e97-61c6-4268-a50f-f5a587a46024","type":"BasicTicker"}},"id":"b3827b13-7f95-4d76-932d-7ddd43de0e0e","type":"LinearAxis"},{"attributes":{},"id":"b4689037-ee0b-4903-8467-ee0593be2e8c","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"e3e77b21-9fd7-43da-a7c0-230ce9ee1350","type":"DataRange1d"},{"attributes":{"overlay":{"id":"cb2b2115-7501-4062-9a65-2c84cbdec5ba","type":"BoxAnnotation"}},"id":"52f92e3d-e372-4928-b121-9857c634a205","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011","subtype":"Figure","type":"Plot"},"ticker":{"id":"0a3d7e97-61c6-4268-a50f-f5a587a46024","type":"BasicTicker"}},"id":"3f869830-0af7-40af-ba6b-f79f364c9f00","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff65202f-630c-4774-9407-f494555d47f2","type":"Oval"},{"attributes":{},"id":"4bfad66e-1db6-4bde-a729-0c3a121d5bfd","type":"SaveTool"},{"attributes":{},"id":"e47219c3-171e-418b-b054-f08784ad53ba","type":"BasicTickFormatter"},{"attributes":{},"id":"0c115959-40b1-458a-96b1-594c294ce7c9","type":"ResetTool"},{"attributes":{"callback":null},"id":"93c52787-ca19-4c67-9ca2-4aa05dc4c2bd","type":"DataRange1d"},{"attributes":{},"id":"54e43bb3-7755-4479-9795-e3d4d57bf9e5","type":"HelpTool"},{"attributes":{},"id":"b20f3fc5-6188-44ba-b9dc-a888b77d4d2a","type":"LinearScale"},{"attributes":{},"id":"6a38f34e-2f4b-4bb3-82e3-c790d9524d1b","type":"LinearScale"},{"attributes":{},"id":"0a3d7e97-61c6-4268-a50f-f5a587a46024","type":"BasicTicker"},{"attributes":{"formatter":{"id":"51286b3b-9a1b-421f-a6ea-3bc1458e75a6","type":"BasicTickFormatter"},"plot":{"id":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011","subtype":"Figure","type":"Plot"},"ticker":{"id":"cf4aff76-adf5-42fd-b8ef-35761a2a0c7e","type":"BasicTicker"}},"id":"5b7fd5fa-e3f4-4c3c-bbd2-353b691d109a","type":"LinearAxis"}],"root_ids":["15356ddf-bfbe-4fe5-b1c1-6f9a64291011"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"34be20df-9cc9-4570-8aae-4942684beb16","elementid":"cfbddf11-56fd-400e-ab03-fd0f1f3b0772","modelid":"15356ddf-bfbe-4fe5-b1c1-6f9a64291011"}];
                
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

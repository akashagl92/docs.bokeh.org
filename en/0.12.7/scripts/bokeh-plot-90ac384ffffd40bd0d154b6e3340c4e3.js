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
      };var element = document.getElementById("5a178808-a92d-477d-8fbe-2cc4fc0d0053");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a178808-a92d-477d-8fbe-2cc4fc0d0053' but no matching script tag was found. ")
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
                var docs_json = {"4526f95f-b84d-48fe-babb-6f7d1e000eb7":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y","angle"],"data":{"angle":[30,45,60],"x":[1,2,3],"y":[1,2,3]}},"id":"fdd9f99f-63d0-4183-99a6-1d5f7fcd44d5","type":"ColumnDataSource"},{"attributes":{},"id":"6ae6755a-b5fb-44af-9634-abb9ee8887df","type":"SaveTool"},{"attributes":{"source":{"id":"fdd9f99f-63d0-4183-99a6-1d5f7fcd44d5","type":"ColumnDataSource"}},"id":"4051a7f0-709a-458f-b969-01fe883fbec0","type":"CDSView"},{"attributes":{},"id":"2460e8d3-be0d-4aad-b354-2b26b900b29d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"98593334-91a2-4fbd-9684-51fce30a2b99","subtype":"Figure","type":"Plot"},"ticker":{"id":"2460e8d3-be0d-4aad-b354-2b26b900b29d","type":"BasicTicker"}},"id":"d34c61a7-94a6-41bf-9f47-16035b35139a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"c9fc4f0b-3b74-493d-8975-a9696a0c8fef","type":"Title"},{"attributes":{},"id":"8e89cd87-b9ae-4179-a316-129306fc289b","type":"BasicTicker"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0aa5286f-5ac5-4363-b039-ffc0d910dcd8","type":"Ray"},{"attributes":{"below":[{"id":"4a2733d5-e778-45b7-af48-dd96619f854a","type":"LinearAxis"}],"left":[{"id":"15a6f155-f915-4e6f-bbcb-df8f6481dfd8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4a2733d5-e778-45b7-af48-dd96619f854a","type":"LinearAxis"},{"id":"6639d167-2b74-4542-aee4-13cb97fbc7f8","type":"Grid"},{"id":"15a6f155-f915-4e6f-bbcb-df8f6481dfd8","type":"LinearAxis"},{"id":"d34c61a7-94a6-41bf-9f47-16035b35139a","type":"Grid"},{"id":"b6b21d58-bd0e-406b-8c7e-045e591efde1","type":"BoxAnnotation"},{"id":"e9f9cc1a-6e67-47c7-a1ad-24fd6ea9958f","type":"GlyphRenderer"}],"title":{"id":"c9fc4f0b-3b74-493d-8975-a9696a0c8fef","type":"Title"},"toolbar":{"id":"1d73f61f-ceb9-429c-8c74-b0ff7332ae5b","type":"Toolbar"},"x_range":{"id":"e79c23d6-7c68-4a67-a314-2c8e070f917b","type":"DataRange1d"},"x_scale":{"id":"175b7c84-182b-4635-aad1-418c10d7bb77","type":"LinearScale"},"y_range":{"id":"4b789574-ee2a-485d-9b10-8b8eceb04d77","type":"DataRange1d"},"y_scale":{"id":"ddc808ed-6c7f-4dc6-8804-188259ae4178","type":"LinearScale"}},"id":"98593334-91a2-4fbd-9684-51fce30a2b99","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d48f4521-a559-4e52-a175-d1a854b7847d","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d48f4521-a559-4e52-a175-d1a854b7847d","type":"PanTool"},{"id":"77fb13b6-c1c5-4a22-b749-6a3938704463","type":"WheelZoomTool"},{"id":"fd39fe17-267e-422b-a738-749f666bd5a9","type":"BoxZoomTool"},{"id":"6ae6755a-b5fb-44af-9634-abb9ee8887df","type":"SaveTool"},{"id":"cde1a296-195e-4d5f-a49b-92562a1854be","type":"ResetTool"},{"id":"1200de35-9e28-486d-ab66-da49fc3148a3","type":"HelpTool"}]},"id":"1d73f61f-ceb9-429c-8c74-b0ff7332ae5b","type":"Toolbar"},{"attributes":{"formatter":{"id":"895d02b2-2347-4560-b2b6-2496e2a7f34e","type":"BasicTickFormatter"},"plot":{"id":"98593334-91a2-4fbd-9684-51fce30a2b99","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e89cd87-b9ae-4179-a316-129306fc289b","type":"BasicTicker"}},"id":"4a2733d5-e778-45b7-af48-dd96619f854a","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b6b21d58-bd0e-406b-8c7e-045e591efde1","type":"BoxAnnotation"},{"attributes":{},"id":"77fb13b6-c1c5-4a22-b749-6a3938704463","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"fdd9f99f-63d0-4183-99a6-1d5f7fcd44d5","type":"ColumnDataSource"},"glyph":{"id":"f259f0ea-2194-4a5c-86ac-183bef5450ab","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0aa5286f-5ac5-4363-b039-ffc0d910dcd8","type":"Ray"},"selection_glyph":null,"view":{"id":"4051a7f0-709a-458f-b969-01fe883fbec0","type":"CDSView"}},"id":"e9f9cc1a-6e67-47c7-a1ad-24fd6ea9958f","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"e79c23d6-7c68-4a67-a314-2c8e070f917b","type":"DataRange1d"},{"attributes":{},"id":"895d02b2-2347-4560-b2b6-2496e2a7f34e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"aca515ee-df7d-4595-9fb8-00dc3b80760e","type":"BasicTickFormatter"},"plot":{"id":"98593334-91a2-4fbd-9684-51fce30a2b99","subtype":"Figure","type":"Plot"},"ticker":{"id":"2460e8d3-be0d-4aad-b354-2b26b900b29d","type":"BasicTicker"}},"id":"15a6f155-f915-4e6f-bbcb-df8f6481dfd8","type":"LinearAxis"},{"attributes":{"plot":{"id":"98593334-91a2-4fbd-9684-51fce30a2b99","subtype":"Figure","type":"Plot"},"ticker":{"id":"8e89cd87-b9ae-4179-a316-129306fc289b","type":"BasicTicker"}},"id":"6639d167-2b74-4542-aee4-13cb97fbc7f8","type":"Grid"},{"attributes":{"angle":{"field":"angle","units":"deg"},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f259f0ea-2194-4a5c-86ac-183bef5450ab","type":"Ray"},{"attributes":{},"id":"aca515ee-df7d-4595-9fb8-00dc3b80760e","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4b789574-ee2a-485d-9b10-8b8eceb04d77","type":"DataRange1d"},{"attributes":{},"id":"175b7c84-182b-4635-aad1-418c10d7bb77","type":"LinearScale"},{"attributes":{},"id":"1200de35-9e28-486d-ab66-da49fc3148a3","type":"HelpTool"},{"attributes":{},"id":"ddc808ed-6c7f-4dc6-8804-188259ae4178","type":"LinearScale"},{"attributes":{"overlay":{"id":"b6b21d58-bd0e-406b-8c7e-045e591efde1","type":"BoxAnnotation"}},"id":"fd39fe17-267e-422b-a738-749f666bd5a9","type":"BoxZoomTool"},{"attributes":{},"id":"cde1a296-195e-4d5f-a49b-92562a1854be","type":"ResetTool"}],"root_ids":["98593334-91a2-4fbd-9684-51fce30a2b99"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4526f95f-b84d-48fe-babb-6f7d1e000eb7","elementid":"5a178808-a92d-477d-8fbe-2cc4fc0d0053","modelid":"98593334-91a2-4fbd-9684-51fce30a2b99"}];
                
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

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
      };var element = document.getElementById("a2eecde7-f1fc-43b6-b0ba-8ffaddc165c2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2eecde7-f1fc-43b6-b0ba-8ffaddc165c2' but no matching script tag was found. ")
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
                var docs_json = {"eb530794-65e2-4afc-89a1-9558a853243d":{"roots":{"references":[{"attributes":{"callback":null},"id":"27bc53fe-db95-4393-b171-635d3054c70f","type":"DataRange1d"},{"attributes":{"callback":null},"id":"75f06857-160f-4e23-9e55-ca6e3fe215d6","type":"DataRange1d"},{"attributes":{},"id":"f148a9e3-ace2-4a9c-8649-e34b06248b70","type":"LinearScale"},{"attributes":{},"id":"5c9886ed-a8eb-4385-b7e6-554bde61eb27","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d82048f-e0af-4842-92c1-22e071af1330","type":"Circle"},{"attributes":{},"id":"838659d8-6802-4b04-b23b-b6bb99b8fda7","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c7ac123-1d55-4ed4-a691-42c56212f239","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb22745a-2f46-4d19-86ae-a8edd605b98a","type":"PanTool"},{"id":"838659d8-6802-4b04-b23b-b6bb99b8fda7","type":"WheelZoomTool"},{"id":"b4d5d858-84d6-4868-b6d2-7469b4535183","type":"BoxZoomTool"},{"id":"6182d853-ef85-4516-8911-7e24b0f57a0c","type":"SaveTool"},{"id":"bff4ad34-1469-46e3-b159-6344afe966e2","type":"ResetTool"},{"id":"bb193ef1-fe12-4c8a-bbd5-0658ba3bb7ed","type":"HelpTool"}]},"id":"12f51626-525a-4517-8c5d-2991c2a0d0b4","type":"Toolbar"},{"attributes":{"overlay":{"id":"fd793f9e-8695-410c-9dc7-49f343e9b5c2","type":"BoxAnnotation"}},"id":"b4d5d858-84d6-4868-b6d2-7469b4535183","type":"BoxZoomTool"},{"attributes":{},"id":"fb22745a-2f46-4d19-86ae-a8edd605b98a","type":"PanTool"},{"attributes":{"formatter":{"id":"5c9886ed-a8eb-4385-b7e6-554bde61eb27","type":"BasicTickFormatter"},"plot":{"id":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"45081958-e2e2-4ae5-b5eb-0a77c3a58cbb","type":"BasicTicker"}},"id":"d18319fa-cc92-4176-b36b-69c2e6a3a3f6","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fd793f9e-8695-410c-9dc7-49f343e9b5c2","type":"BoxAnnotation"},{"attributes":{},"id":"24d785e6-a091-497a-b1c4-2b56a6763766","type":"BasicTicker"},{"attributes":{},"id":"f5bc7d8e-43e5-43d9-9435-aa1a2f62c93d","type":"LinearScale"},{"attributes":{},"id":"45081958-e2e2-4ae5-b5eb-0a77c3a58cbb","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"eeaf8055-c8a2-42f0-b589-061fc8578f06","type":"ColumnDataSource"},{"attributes":{"source":{"id":"eeaf8055-c8a2-42f0-b589-061fc8578f06","type":"ColumnDataSource"}},"id":"d73ba44a-e142-44d8-872b-e91bdca6a084","type":"CDSView"},{"attributes":{},"id":"6182d853-ef85-4516-8911-7e24b0f57a0c","type":"SaveTool"},{"attributes":{"formatter":{"id":"1f47c24d-85f5-482a-8f1e-d20a80e50d3a","type":"BasicTickFormatter"},"plot":{"id":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"24d785e6-a091-497a-b1c4-2b56a6763766","type":"BasicTicker"}},"id":"be6f8458-7c73-4d17-ba86-100546aba1c6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"eeaf8055-c8a2-42f0-b589-061fc8578f06","type":"ColumnDataSource"},"glyph":{"id":"1d82048f-e0af-4842-92c1-22e071af1330","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2c7ac123-1d55-4ed4-a691-42c56212f239","type":"Circle"},"selection_glyph":null,"view":{"id":"d73ba44a-e142-44d8-872b-e91bdca6a084","type":"CDSView"}},"id":"ad7fa852-e177-4f9a-9fe2-a8bb9f24cfbc","type":"GlyphRenderer"},{"attributes":{},"id":"1f47c24d-85f5-482a-8f1e-d20a80e50d3a","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d18319fa-cc92-4176-b36b-69c2e6a3a3f6","type":"LinearAxis"}],"left":[{"id":"be6f8458-7c73-4d17-ba86-100546aba1c6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d18319fa-cc92-4176-b36b-69c2e6a3a3f6","type":"LinearAxis"},{"id":"5e3aca54-a99c-4189-8fac-53eb875d7b02","type":"Grid"},{"id":"be6f8458-7c73-4d17-ba86-100546aba1c6","type":"LinearAxis"},{"id":"2a235fe2-ae2a-49b5-98cf-b4e2d3bbce34","type":"Grid"},{"id":"fd793f9e-8695-410c-9dc7-49f343e9b5c2","type":"BoxAnnotation"},{"id":"ad7fa852-e177-4f9a-9fe2-a8bb9f24cfbc","type":"GlyphRenderer"}],"title":{"id":"ac4ad7bd-48a3-4472-b551-32346cb35337","type":"Title"},"toolbar":{"id":"12f51626-525a-4517-8c5d-2991c2a0d0b4","type":"Toolbar"},"x_range":{"id":"75f06857-160f-4e23-9e55-ca6e3fe215d6","type":"DataRange1d"},"x_scale":{"id":"f5bc7d8e-43e5-43d9-9435-aa1a2f62c93d","type":"LinearScale"},"y_range":{"id":"27bc53fe-db95-4393-b171-635d3054c70f","type":"DataRange1d"},"y_scale":{"id":"f148a9e3-ace2-4a9c-8649-e34b06248b70","type":"LinearScale"}},"id":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"bb193ef1-fe12-4c8a-bbd5-0658ba3bb7ed","type":"HelpTool"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"ac4ad7bd-48a3-4472-b551-32346cb35337","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"24d785e6-a091-497a-b1c4-2b56a6763766","type":"BasicTicker"}},"id":"2a235fe2-ae2a-49b5-98cf-b4e2d3bbce34","type":"Grid"},{"attributes":{},"id":"bff4ad34-1469-46e3-b159-6344afe966e2","type":"ResetTool"},{"attributes":{"plot":{"id":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b","subtype":"Figure","type":"Plot"},"ticker":{"id":"45081958-e2e2-4ae5-b5eb-0a77c3a58cbb","type":"BasicTicker"}},"id":"5e3aca54-a99c-4189-8fac-53eb875d7b02","type":"Grid"}],"root_ids":["539a3fb3-4054-4351-ac96-7cc6f7d8eb4b"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"eb530794-65e2-4afc-89a1-9558a853243d","elementid":"a2eecde7-f1fc-43b6-b0ba-8ffaddc165c2","modelid":"539a3fb3-4054-4351-ac96-7cc6f7d8eb4b"}];
                
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

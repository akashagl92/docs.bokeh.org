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
      };var element = document.getElementById("ea3417d0-c8c6-488e-a5b5-c9ed647ac877");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea3417d0-c8c6-488e-a5b5-c9ed647ac877' but no matching script tag was found. ")
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
                var docs_json = {"17a3eb26-a008-4e4c-bb39-d9d478110e63":{"roots":{"references":[{"attributes":{"formatter":{"id":"7fe7d134-7909-47fa-a060-773531cd933f","type":"BasicTickFormatter"},"plot":{"id":"acaf46b7-7024-4eb7-9b3a-e95d28a303de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a9efd1-c09f-4338-8d92-dd5616ad8248","type":"BasicTicker"}},"id":"3216d863-12d3-4234-9ff6-96e07523d4ba","type":"LinearAxis"},{"attributes":{"below":[{"id":"3987f1b9-55af-459e-b704-8fb16a87a652","type":"LinearAxis"}],"left":[{"id":"3216d863-12d3-4234-9ff6-96e07523d4ba","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3987f1b9-55af-459e-b704-8fb16a87a652","type":"LinearAxis"},{"id":"8e495804-9111-47b3-99ec-91b001ab6b39","type":"Grid"},{"id":"3216d863-12d3-4234-9ff6-96e07523d4ba","type":"LinearAxis"},{"id":"da187185-7f49-484a-aeab-e4eec17b45c4","type":"Grid"},{"id":"caff4ac3-d83b-4027-b2a5-8561d965021d","type":"GlyphRenderer"}],"title":{"id":"1b8f5558-1391-4899-bbe4-3c28410270da","type":"Title"},"toolbar":{"id":"0f7e7172-1614-4602-b9ea-fbb61a40226f","type":"Toolbar"},"x_range":{"id":"946c1227-daa2-41f5-b74d-8680b438f4cf","type":"DataRange1d"},"x_scale":{"id":"ea274ab5-e72e-4986-880d-8bc417c5cad1","type":"LinearScale"},"y_range":{"id":"1ecf0091-bd26-4afb-8cef-9adbbfd33e28","type":"DataRange1d"},"y_scale":{"id":"63346ed6-4ce6-48cf-af98-ab8c690c5879","type":"LinearScale"}},"id":"acaf46b7-7024-4eb7-9b3a-e95d28a303de","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"1b8f5558-1391-4899-bbe4-3c28410270da","type":"Title"},{"attributes":{},"id":"0d452387-9060-4f5b-9837-48973ce3af36","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"8435f898-5094-4bd6-bd4b-906409c5275e","type":"Circle"},{"attributes":{"callback":null},"id":"946c1227-daa2-41f5-b74d-8680b438f4cf","type":"DataRange1d"},{"attributes":{"callback":null},"id":"15cba10e-db91-4220-a7a8-29d2e91fc32b","type":"TapTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"15cba10e-db91-4220-a7a8-29d2e91fc32b","type":"TapTool"}]},"id":"0f7e7172-1614-4602-b9ea-fbb61a40226f","type":"Toolbar"},{"attributes":{"formatter":{"id":"0d452387-9060-4f5b-9837-48973ce3af36","type":"BasicTickFormatter"},"plot":{"id":"acaf46b7-7024-4eb7-9b3a-e95d28a303de","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7780f41-e088-4c8b-b8b4-f2d78b69081f","type":"BasicTicker"}},"id":"3987f1b9-55af-459e-b704-8fb16a87a652","type":"LinearAxis"},{"attributes":{},"id":"e7780f41-e088-4c8b-b8b4-f2d78b69081f","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e9ffbf54-ffc6-406e-80f1-47b796507d6c","type":"Circle"},{"attributes":{"callback":null},"id":"1ecf0091-bd26-4afb-8cef-9adbbfd33e28","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"ce368234-38f4-446d-aeb2-216532dc0118","type":"ColumnDataSource"},{"attributes":{},"id":"ea274ab5-e72e-4986-880d-8bc417c5cad1","type":"LinearScale"},{"attributes":{},"id":"63346ed6-4ce6-48cf-af98-ab8c690c5879","type":"LinearScale"},{"attributes":{"plot":{"id":"acaf46b7-7024-4eb7-9b3a-e95d28a303de","subtype":"Figure","type":"Plot"},"ticker":{"id":"e7780f41-e088-4c8b-b8b4-f2d78b69081f","type":"BasicTicker"}},"id":"8e495804-9111-47b3-99ec-91b001ab6b39","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"acaf46b7-7024-4eb7-9b3a-e95d28a303de","subtype":"Figure","type":"Plot"},"ticker":{"id":"f1a9efd1-c09f-4338-8d92-dd5616ad8248","type":"BasicTicker"}},"id":"da187185-7f49-484a-aeab-e4eec17b45c4","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"536f14cb-1a25-4054-a709-e7a674720d8f","type":"Circle"},{"attributes":{"data_source":{"id":"ce368234-38f4-446d-aeb2-216532dc0118","type":"ColumnDataSource"},"glyph":{"id":"536f14cb-1a25-4054-a709-e7a674720d8f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8435f898-5094-4bd6-bd4b-906409c5275e","type":"Circle"},"selection_glyph":{"id":"e9ffbf54-ffc6-406e-80f1-47b796507d6c","type":"Circle"},"view":{"id":"b613b3cd-584f-48df-98e7-af9649988cc3","type":"CDSView"}},"id":"caff4ac3-d83b-4027-b2a5-8561d965021d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"ce368234-38f4-446d-aeb2-216532dc0118","type":"ColumnDataSource"}},"id":"b613b3cd-584f-48df-98e7-af9649988cc3","type":"CDSView"},{"attributes":{},"id":"f1a9efd1-c09f-4338-8d92-dd5616ad8248","type":"BasicTicker"},{"attributes":{},"id":"7fe7d134-7909-47fa-a060-773531cd933f","type":"BasicTickFormatter"}],"root_ids":["acaf46b7-7024-4eb7-9b3a-e95d28a303de"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"17a3eb26-a008-4e4c-bb39-d9d478110e63","elementid":"ea3417d0-c8c6-488e-a5b5-c9ed647ac877","modelid":"acaf46b7-7024-4eb7-9b3a-e95d28a303de"}];
                
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

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
      };var element = document.getElementById("5fddb595-b57c-4a51-a1ef-876612ba9023");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5fddb595-b57c-4a51-a1ef-876612ba9023' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"658da0cc-dd4c-4976-9ed7-5d043ccfe88f":{"roots":{"references":[{"attributes":{},"id":"4b5ad422-004e-4080-803e-a8a8434d8514","type":"ResetTool"},{"attributes":{},"id":"736b6abf-ba7f-47f6-9660-946192755688","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"8dd536b1-18d2-415d-8347-6b467feab42d","type":"LinearAxis"}],"left":[{"id":"de397445-3a0c-4969-9b65-3f86e194e30c","type":"LinearAxis"}],"renderers":[{"id":"8dd536b1-18d2-415d-8347-6b467feab42d","type":"LinearAxis"},{"id":"c8812893-5484-404a-a2fd-2cb8fba6bef5","type":"Grid"},{"id":"de397445-3a0c-4969-9b65-3f86e194e30c","type":"LinearAxis"},{"id":"8f4d3361-c640-4a8e-b92b-3aed601af459","type":"Grid"},{"id":"74f1ee9a-60b0-4a5e-a52d-49fe44a6e969","type":"BoxAnnotation"},{"id":"4d729666-48de-4be0-9a8b-ec1a1f8abd7d","type":"Legend"},{"id":"8839a4b9-976e-403a-9bfd-ebf99d758ce0","type":"GlyphRenderer"}],"title":{"id":"8f1ad831-4337-4224-a242-aa2f7b84a76c","type":"Title"},"toolbar":{"id":"d481c6db-3c37-4a40-97d5-0ad72a2e3d2b","type":"Toolbar"},"x_range":{"id":"32336e11-bfde-47e5-ad8c-a53e179097a7","type":"DataRange1d"},"x_scale":{"id":"58487017-6bb8-4ad8-bb00-718a2abed8c8","type":"LinearScale"},"y_range":{"id":"a4ac39b2-8c3e-437a-88df-fb22fb4c29ad","type":"DataRange1d"},"y_scale":{"id":"e8af8667-a629-475e-8456-923f4615a3b0","type":"LinearScale"}},"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d82be03f-0bc0-4c88-9672-8faa9cb0866a","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e357f69-ad30-4a01-912b-7b0301283065","type":"Line"},{"attributes":{},"id":"6bf282cf-a1e4-4a85-a2c1-d87ff8f8ab03","type":"PanTool"},{"attributes":{},"id":"58487017-6bb8-4ad8-bb00-718a2abed8c8","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"},"ticker":{"id":"d82be03f-0bc0-4c88-9672-8faa9cb0866a","type":"BasicTicker"}},"id":"8f4d3361-c640-4a8e-b92b-3aed601af459","type":"Grid"},{"attributes":{"axis_label":"x","formatter":{"id":"736b6abf-ba7f-47f6-9660-946192755688","type":"BasicTickFormatter"},"plot":{"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"},"ticker":{"id":"6681d021-3062-4d1b-ac13-1d8301ff3864","type":"BasicTicker"}},"id":"8dd536b1-18d2-415d-8347-6b467feab42d","type":"LinearAxis"},{"attributes":{"plot":{"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"},"ticker":{"id":"6681d021-3062-4d1b-ac13-1d8301ff3864","type":"BasicTicker"}},"id":"c8812893-5484-404a-a2fd-2cb8fba6bef5","type":"Grid"},{"attributes":{},"id":"e8af8667-a629-475e-8456-923f4615a3b0","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a26d358-c0b0-472e-add5-bc61d22c5894","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"d9b58f81-ed78-48ce-bf8a-2b5ebcec0da1","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6bf282cf-a1e4-4a85-a2c1-d87ff8f8ab03","type":"PanTool"},{"id":"1efaf7ce-0876-441a-b892-dee21f919d13","type":"WheelZoomTool"},{"id":"f731a1ce-47f0-4f98-ba28-d7d3d4a96ea4","type":"BoxZoomTool"},{"id":"10e5c328-7e14-44c5-b647-c4aba17dd573","type":"SaveTool"},{"id":"4b5ad422-004e-4080-803e-a8a8434d8514","type":"ResetTool"},{"id":"34ade8d7-4ccc-455f-bb0c-2c42ebd5deea","type":"HelpTool"}]},"id":"d481c6db-3c37-4a40-97d5-0ad72a2e3d2b","type":"Toolbar"},{"attributes":{"source":{"id":"d9b58f81-ed78-48ce-bf8a-2b5ebcec0da1","type":"ColumnDataSource"}},"id":"0c2585bc-d9aa-4ff3-aae2-12bcbdb1a830","type":"CDSView"},{"attributes":{"callback":null},"id":"a4ac39b2-8c3e-437a-88df-fb22fb4c29ad","type":"DataRange1d"},{"attributes":{},"id":"6681d021-3062-4d1b-ac13-1d8301ff3864","type":"BasicTicker"},{"attributes":{"callback":null},"id":"32336e11-bfde-47e5-ad8c-a53e179097a7","type":"DataRange1d"},{"attributes":{},"id":"34ade8d7-4ccc-455f-bb0c-2c42ebd5deea","type":"HelpTool"},{"attributes":{"data_source":{"id":"d9b58f81-ed78-48ce-bf8a-2b5ebcec0da1","type":"ColumnDataSource"},"glyph":{"id":"8e357f69-ad30-4a01-912b-7b0301283065","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9a26d358-c0b0-472e-add5-bc61d22c5894","type":"Line"},"selection_glyph":null,"view":{"id":"0c2585bc-d9aa-4ff3-aae2-12bcbdb1a830","type":"CDSView"}},"id":"8839a4b9-976e-403a-9bfd-ebf99d758ce0","type":"GlyphRenderer"},{"attributes":{"axis_label":"y","formatter":{"id":"7f54bed0-cd24-48c6-9724-62f7ed649a83","type":"BasicTickFormatter"},"plot":{"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"},"ticker":{"id":"d82be03f-0bc0-4c88-9672-8faa9cb0866a","type":"BasicTicker"}},"id":"de397445-3a0c-4969-9b65-3f86e194e30c","type":"LinearAxis"},{"attributes":{"label":{"value":"Temp."},"renderers":[{"id":"8839a4b9-976e-403a-9bfd-ebf99d758ce0","type":"GlyphRenderer"}]},"id":"7eb7aa47-5c60-4581-9d89-61daf14c8b64","type":"LegendItem"},{"attributes":{"overlay":{"id":"74f1ee9a-60b0-4a5e-a52d-49fe44a6e969","type":"BoxAnnotation"}},"id":"f731a1ce-47f0-4f98-ba28-d7d3d4a96ea4","type":"BoxZoomTool"},{"attributes":{},"id":"1efaf7ce-0876-441a-b892-dee21f919d13","type":"WheelZoomTool"},{"attributes":{"items":[{"id":"7eb7aa47-5c60-4581-9d89-61daf14c8b64","type":"LegendItem"}],"plot":{"id":"7d224a45-7e63-4cf6-8c7f-8c928510a655","subtype":"Figure","type":"Plot"}},"id":"4d729666-48de-4be0-9a8b-ec1a1f8abd7d","type":"Legend"},{"attributes":{},"id":"10e5c328-7e14-44c5-b647-c4aba17dd573","type":"SaveTool"},{"attributes":{},"id":"7f54bed0-cd24-48c6-9724-62f7ed649a83","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74f1ee9a-60b0-4a5e-a52d-49fe44a6e969","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"simple line example"},"id":"8f1ad831-4337-4224-a242-aa2f7b84a76c","type":"Title"}],"root_ids":["7d224a45-7e63-4cf6-8c7f-8c928510a655"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"658da0cc-dd4c-4976-9ed7-5d043ccfe88f","elementid":"5fddb595-b57c-4a51-a1ef-876612ba9023","modelid":"7d224a45-7e63-4cf6-8c7f-8c928510a655"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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

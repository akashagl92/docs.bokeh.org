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
      };var element = document.getElementById("6590e60a-b765-4cbb-9b70-035a78a5de35");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6590e60a-b765-4cbb-9b70-035a78a5de35' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"022ea2ba-9458-4af2-a9f2-57886867f54b":{"roots":{"references":[{"attributes":{},"id":"b0782297-d2a8-4e7e-bd66-151adf7262dd","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b0782297-d2a8-4e7e-bd66-151adf7262dd","type":"BasicTickFormatter"},"plot":{"id":"4faae9bf-75c4-4394-8da5-4292f5783e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd29dd62-ee8a-47a2-9641-27d3d4e5c0cb","type":"BasicTicker"}},"id":"cb76eaea-3ccc-40d9-a2e1-896710e3e80e","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72a024c7-b28c-4748-9056-6b3bb2bdb3ac","type":"PanTool"},{"id":"b0b6afc4-9b53-4bb8-a5db-e02f734bcf5e","type":"ResetTool"},{"id":"84ae21c1-6e58-42f4-9180-8acffbd4a354","type":"SaveTool"}]},"id":"6d8cc743-41a9-4639-b78e-f1eb304f787e","type":"Toolbar"},{"attributes":{},"id":"4e9af02f-a2eb-4522-8860-53d28e7f5c6f","type":"BasicTickFormatter"},{"attributes":{},"id":"fd29dd62-ee8a-47a2-9641-27d3d4e5c0cb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f937e58f-8bb5-4139-89e8-52231f1f4098","type":"DataRange1d"},{"attributes":{"formatter":{"id":"4e9af02f-a2eb-4522-8860-53d28e7f5c6f","type":"BasicTickFormatter"},"plot":{"id":"4faae9bf-75c4-4394-8da5-4292f5783e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a1dc2cc-aa84-42fe-b445-371b5c559f01","type":"BasicTicker"}},"id":"9105b8ba-a5cb-4815-a82d-d004cf4a328d","type":"LinearAxis"},{"attributes":{},"id":"03df4725-55bd-4735-a057-bee742b2f707","type":"LinearScale"},{"attributes":{},"id":"b12de742-94b4-48a3-8902-63067d4d30be","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"4faae9bf-75c4-4394-8da5-4292f5783e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"fd29dd62-ee8a-47a2-9641-27d3d4e5c0cb","type":"BasicTicker"}},"id":"5a582c80-c2cd-40c8-b778-8e4de28da3d8","type":"Grid"},{"attributes":{"below":[{"id":"9105b8ba-a5cb-4815-a82d-d004cf4a328d","type":"LinearAxis"}],"left":[{"id":"cb76eaea-3ccc-40d9-a2e1-896710e3e80e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9105b8ba-a5cb-4815-a82d-d004cf4a328d","type":"LinearAxis"},{"id":"f95edc23-9a8d-4431-aa80-34def8e0802b","type":"Grid"},{"id":"cb76eaea-3ccc-40d9-a2e1-896710e3e80e","type":"LinearAxis"},{"id":"5a582c80-c2cd-40c8-b778-8e4de28da3d8","type":"Grid"},{"id":"b4f5bb41-610b-4d98-bc40-6bbafb355344","type":"GlyphRenderer"}],"title":{"id":"371e3654-771f-48e5-b8c2-3808885e80c9","type":"Title"},"toolbar":{"id":"6d8cc743-41a9-4639-b78e-f1eb304f787e","type":"Toolbar"},"x_range":{"id":"edc6d51e-8207-414f-9024-bf408f84ae76","type":"DataRange1d"},"x_scale":{"id":"03df4725-55bd-4735-a057-bee742b2f707","type":"LinearScale"},"y_range":{"id":"f937e58f-8bb5-4139-89e8-52231f1f4098","type":"DataRange1d"},"y_scale":{"id":"b12de742-94b4-48a3-8902-63067d4d30be","type":"LinearScale"}},"id":"4faae9bf-75c4-4394-8da5-4292f5783e63","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"84ae21c1-6e58-42f4-9180-8acffbd4a354","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ea77631-3afe-48bb-9ab0-64fb8d36aec5","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]},"selected":null,"selection_policy":null},"id":"7b117daf-617f-45a0-99c2-757be399e8d6","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"edc6d51e-8207-414f-9024-bf408f84ae76","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7b117daf-617f-45a0-99c2-757be399e8d6","type":"ColumnDataSource"},"glyph":{"id":"cd9cedd3-ea8b-424a-91b3-08dc5e9cf81f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8ea77631-3afe-48bb-9ab0-64fb8d36aec5","type":"Circle"},"selection_glyph":null,"view":{"id":"43f40567-01d0-44ea-b112-e49d2b381d00","type":"CDSView"}},"id":"b4f5bb41-610b-4d98-bc40-6bbafb355344","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7b117daf-617f-45a0-99c2-757be399e8d6","type":"ColumnDataSource"}},"id":"43f40567-01d0-44ea-b112-e49d2b381d00","type":"CDSView"},{"attributes":{},"id":"b0b6afc4-9b53-4bb8-a5db-e02f734bcf5e","type":"ResetTool"},{"attributes":{},"id":"72a024c7-b28c-4748-9056-6b3bb2bdb3ac","type":"PanTool"},{"attributes":{"plot":{"id":"4faae9bf-75c4-4394-8da5-4292f5783e63","subtype":"Figure","type":"Plot"},"ticker":{"id":"6a1dc2cc-aa84-42fe-b445-371b5c559f01","type":"BasicTicker"}},"id":"f95edc23-9a8d-4431-aa80-34def8e0802b","type":"Grid"},{"attributes":{},"id":"6a1dc2cc-aa84-42fe-b445-371b5c559f01","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"371e3654-771f-48e5-b8c2-3808885e80c9","type":"Title"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"cd9cedd3-ea8b-424a-91b3-08dc5e9cf81f","type":"Circle"}],"root_ids":["4faae9bf-75c4-4394-8da5-4292f5783e63"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"022ea2ba-9458-4af2-a9f2-57886867f54b","elementid":"6590e60a-b765-4cbb-9b70-035a78a5de35","modelid":"4faae9bf-75c4-4394-8da5-4292f5783e63"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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
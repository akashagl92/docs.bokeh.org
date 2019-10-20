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
      };var element = document.getElementById("4d71bd5c-d5b5-4d40-8389-39fb8ef07b04");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4d71bd5c-d5b5-4d40-8389-39fb8ef07b04' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"7ac7dfe7-990b-474e-9f60-b6850dd75038":{"roots":{"references":[{"attributes":{},"id":"29e25e74-2e0f-46ab-af4f-d36472881d12","type":"LinearScale"},{"attributes":{"overlay":{"id":"3d9e2ae6-c981-4317-ac1c-dbf6721e2a8f","type":"BoxAnnotation"}},"id":"775be9ab-c7cb-4b39-a1f0-12ca6afc9112","type":"BoxZoomTool"},{"attributes":{},"id":"fdaaab4a-a84e-4fd8-9268-3f541b9309cb","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5f13cb4-389d-4b0b-ac4d-69c0a1195b9b","type":"Cross"},{"attributes":{},"id":"f7cbbb03-dcc0-44aa-b3bc-73373a21b9e9","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"46c85594-c743-49f1-b3b6-706bdf96ec9a","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3d9e2ae6-c981-4317-ac1c-dbf6721e2a8f","type":"BoxAnnotation"},{"attributes":{},"id":"af61b0dc-6c9e-467f-a1d5-b1fa9d24b27d","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6c9a0e0-a555-4832-9a7c-35f25956e970","type":"Cross"},{"attributes":{"source":{"id":"4d9367fa-4a00-40fd-a9f0-f43bc9bbf100","type":"ColumnDataSource"}},"id":"0e36e945-f257-4b99-966b-3742c93003b3","type":"CDSView"},{"attributes":{},"id":"002c8d2a-0aa1-4bc3-9be3-8c0209d46bba","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"002c8d2a-0aa1-4bc3-9be3-8c0209d46bba","type":"BasicTickFormatter"},"plot":{"id":"281a9015-91aa-48ab-af41-0e6e50034370","subtype":"Figure","type":"Plot"},"ticker":{"id":"af61b0dc-6c9e-467f-a1d5-b1fa9d24b27d","type":"BasicTicker"}},"id":"1e5f1a4d-bbb9-4d93-8619-ef2433a53e23","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4d9367fa-4a00-40fd-a9f0-f43bc9bbf100","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"281a9015-91aa-48ab-af41-0e6e50034370","subtype":"Figure","type":"Plot"},"ticker":{"id":"0db6dadd-eb98-4105-9e63-8393a4b4606c","type":"BasicTicker"}},"id":"04d0257c-295f-4a43-8a53-0141c2954556","type":"Grid"},{"attributes":{"callback":null},"id":"0ff51d13-95d3-47a9-95ee-0ae1cc70c362","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4d9367fa-4a00-40fd-a9f0-f43bc9bbf100","type":"ColumnDataSource"},"glyph":{"id":"b6c9a0e0-a555-4832-9a7c-35f25956e970","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f5f13cb4-389d-4b0b-ac4d-69c0a1195b9b","type":"Cross"},"selection_glyph":null,"view":{"id":"0e36e945-f257-4b99-966b-3742c93003b3","type":"CDSView"}},"id":"6a15081a-1d91-433a-87a0-ed33ba6fb536","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"1e5f1a4d-bbb9-4d93-8619-ef2433a53e23","type":"LinearAxis"}],"left":[{"id":"c97f6a65-75a6-4c3c-bc12-25b2914e4200","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"1e5f1a4d-bbb9-4d93-8619-ef2433a53e23","type":"LinearAxis"},{"id":"ec7eef1c-be6c-45c8-889c-67e60eb79dde","type":"Grid"},{"id":"c97f6a65-75a6-4c3c-bc12-25b2914e4200","type":"LinearAxis"},{"id":"04d0257c-295f-4a43-8a53-0141c2954556","type":"Grid"},{"id":"3d9e2ae6-c981-4317-ac1c-dbf6721e2a8f","type":"BoxAnnotation"},{"id":"6a15081a-1d91-433a-87a0-ed33ba6fb536","type":"GlyphRenderer"}],"title":{"id":"46c85594-c743-49f1-b3b6-706bdf96ec9a","type":"Title"},"toolbar":{"id":"2dc71517-1078-4c63-9ba4-d227a72baf79","type":"Toolbar"},"x_range":{"id":"0ff51d13-95d3-47a9-95ee-0ae1cc70c362","type":"DataRange1d"},"x_scale":{"id":"c0b7254a-1842-4667-a331-1a299733bb92","type":"LinearScale"},"y_range":{"id":"934f3376-abfb-4832-b2d9-f0cbc0c4eb4e","type":"DataRange1d"},"y_scale":{"id":"29e25e74-2e0f-46ab-af4f-d36472881d12","type":"LinearScale"}},"id":"281a9015-91aa-48ab-af41-0e6e50034370","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"281a9015-91aa-48ab-af41-0e6e50034370","subtype":"Figure","type":"Plot"},"ticker":{"id":"af61b0dc-6c9e-467f-a1d5-b1fa9d24b27d","type":"BasicTicker"}},"id":"ec7eef1c-be6c-45c8-889c-67e60eb79dde","type":"Grid"},{"attributes":{},"id":"885c0778-8893-4ee3-b408-7bef32cf7d78","type":"ResetTool"},{"attributes":{"callback":null},"id":"934f3376-abfb-4832-b2d9-f0cbc0c4eb4e","type":"DataRange1d"},{"attributes":{},"id":"c0b7254a-1842-4667-a331-1a299733bb92","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"70493618-8331-4658-8daa-96a75c7e303f","type":"PanTool"},{"id":"f7cbbb03-dcc0-44aa-b3bc-73373a21b9e9","type":"WheelZoomTool"},{"id":"775be9ab-c7cb-4b39-a1f0-12ca6afc9112","type":"BoxZoomTool"},{"id":"0117c2a0-b529-4fcc-90c4-36e2666fc177","type":"SaveTool"},{"id":"885c0778-8893-4ee3-b408-7bef32cf7d78","type":"ResetTool"},{"id":"fdaaab4a-a84e-4fd8-9268-3f541b9309cb","type":"HelpTool"}]},"id":"2dc71517-1078-4c63-9ba4-d227a72baf79","type":"Toolbar"},{"attributes":{"formatter":{"id":"26dc410c-eda6-4a60-bc46-a092189923bf","type":"BasicTickFormatter"},"plot":{"id":"281a9015-91aa-48ab-af41-0e6e50034370","subtype":"Figure","type":"Plot"},"ticker":{"id":"0db6dadd-eb98-4105-9e63-8393a4b4606c","type":"BasicTicker"}},"id":"c97f6a65-75a6-4c3c-bc12-25b2914e4200","type":"LinearAxis"},{"attributes":{},"id":"70493618-8331-4658-8daa-96a75c7e303f","type":"PanTool"},{"attributes":{},"id":"0117c2a0-b529-4fcc-90c4-36e2666fc177","type":"SaveTool"},{"attributes":{},"id":"26dc410c-eda6-4a60-bc46-a092189923bf","type":"BasicTickFormatter"},{"attributes":{},"id":"0db6dadd-eb98-4105-9e63-8393a4b4606c","type":"BasicTicker"}],"root_ids":["281a9015-91aa-48ab-af41-0e6e50034370"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"7ac7dfe7-990b-474e-9f60-b6850dd75038","elementid":"4d71bd5c-d5b5-4d40-8389-39fb8ef07b04","modelid":"281a9015-91aa-48ab-af41-0e6e50034370"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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

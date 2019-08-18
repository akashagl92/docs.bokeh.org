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
      };var element = document.getElementById("a0c2abb1-fee8-487a-a759-fd8595e2523d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a0c2abb1-fee8-487a-a759-fd8595e2523d' but no matching script tag was found. ")
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
                    var docs_json = {"8563d8b8-1459-4dc3-a1ca-db8039c900b6":{"roots":{"references":[{"attributes":{},"id":"c2304bce-9fcf-4e7e-bfd0-bad03c920e38","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5a2e1671-97ee-4031-a99c-557315402e68","subtype":"Figure","type":"Plot"},"ticker":{"id":"90f9da06-8344-4091-8239-8f9ee696b6dd","type":"BasicTicker"}},"id":"cb851bf0-c3d8-4ef1-9c30-d37a9df5bc4f","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"47003cbe-fba0-4f1c-b7df-cb93655a2426","type":"Circle"},{"attributes":{},"id":"9a7a114c-a302-49fc-8161-762f2ab2b0c3","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9ce93182-8a6a-47fa-b484-e46e0c6a9ddb","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"3525c79c-eac2-49b4-8abf-774701dedcf7","type":"DataRange1d"},{"attributes":{},"id":"90f9da06-8344-4091-8239-8f9ee696b6dd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e9d7bb3f-6516-4ec2-b10f-8243797d7e69","type":"BasicTickFormatter"},"plot":{"id":"5a2e1671-97ee-4031-a99c-557315402e68","subtype":"Figure","type":"Plot"},"ticker":{"id":"90f9da06-8344-4091-8239-8f9ee696b6dd","type":"BasicTicker"}},"id":"39da6d3d-1452-4555-abdc-ce14540cedb8","type":"LinearAxis"},{"attributes":{"band_fill_alpha":{"value":0.1},"band_fill_color":{"value":"navy"},"dimension":1,"plot":{"id":"5a2e1671-97ee-4031-a99c-557315402e68","subtype":"Figure","type":"Plot"},"ticker":{"id":"034a3c58-0e23-4e14-9980-44a94790f76d","type":"BasicTicker"}},"id":"8c332cf8-df34-40b2-a9fc-24717a517ca1","type":"Grid"},{"attributes":{"below":[{"id":"39da6d3d-1452-4555-abdc-ce14540cedb8","type":"LinearAxis"}],"left":[{"id":"3ab13a17-7e7b-4883-9f73-23b9137aeb58","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"39da6d3d-1452-4555-abdc-ce14540cedb8","type":"LinearAxis"},{"id":"cb851bf0-c3d8-4ef1-9c30-d37a9df5bc4f","type":"Grid"},{"id":"3ab13a17-7e7b-4883-9f73-23b9137aeb58","type":"LinearAxis"},{"id":"8c332cf8-df34-40b2-a9fc-24717a517ca1","type":"Grid"},{"id":"9ce93182-8a6a-47fa-b484-e46e0c6a9ddb","type":"BoxAnnotation"},{"id":"bed7211d-113e-4436-93f7-5c47deb8e7be","type":"GlyphRenderer"}],"title":{"id":"26e86061-aba8-4054-8eb6-518d9aa63ca5","type":"Title"},"toolbar":{"id":"671827f3-b529-4e75-8a82-faccf23dc057","type":"Toolbar"},"x_range":{"id":"3525c79c-eac2-49b4-8abf-774701dedcf7","type":"DataRange1d"},"x_scale":{"id":"c2304bce-9fcf-4e7e-bfd0-bad03c920e38","type":"LinearScale"},"y_range":{"id":"d8e1c5a5-6715-41a8-b586-debb62cbaeb3","type":"DataRange1d"},"y_scale":{"id":"9a7a114c-a302-49fc-8161-762f2ab2b0c3","type":"LinearScale"}},"id":"5a2e1671-97ee-4031-a99c-557315402e68","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"6af28a72-9588-49fd-a070-abd69fbb8c4d","type":"ColumnDataSource"}},"id":"7d93b7a9-a39f-4263-b69a-3a45aac7f7be","type":"CDSView"},{"attributes":{"data_source":{"id":"6af28a72-9588-49fd-a070-abd69fbb8c4d","type":"ColumnDataSource"},"glyph":{"id":"47003cbe-fba0-4f1c-b7df-cb93655a2426","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d00e29dc-25c4-4a9b-a265-9b1eeb890296","type":"Circle"},"selection_glyph":null,"view":{"id":"7d93b7a9-a39f-4263-b69a-3a45aac7f7be","type":"CDSView"}},"id":"bed7211d-113e-4436-93f7-5c47deb8e7be","type":"GlyphRenderer"},{"attributes":{},"id":"c9850a8e-c963-4275-afa1-0db2d2c44b5c","type":"PanTool"},{"attributes":{},"id":"3c848dcd-c64a-4070-a464-7b5acba1a49f","type":"WheelZoomTool"},{"attributes":{},"id":"efa4c391-d1a7-489a-9c1a-d4da1121ae84","type":"HelpTool"},{"attributes":{},"id":"034a3c58-0e23-4e14-9980-44a94790f76d","type":"BasicTicker"},{"attributes":{},"id":"f2d1d505-921c-4522-8b9e-9083d0d00758","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"d8e1c5a5-6715-41a8-b586-debb62cbaeb3","type":"DataRange1d"},{"attributes":{},"id":"84499dfa-d5c7-4f85-84c3-24d2439cac98","type":"ResetTool"},{"attributes":{},"id":"e9d7bb3f-6516-4ec2-b10f-8243797d7e69","type":"BasicTickFormatter"},{"attributes":{},"id":"1ae60eaa-0134-40bd-b1ea-2ffb70d65b49","type":"SaveTool"},{"attributes":{"formatter":{"id":"f2d1d505-921c-4522-8b9e-9083d0d00758","type":"BasicTickFormatter"},"plot":{"id":"5a2e1671-97ee-4031-a99c-557315402e68","subtype":"Figure","type":"Plot"},"ticker":{"id":"034a3c58-0e23-4e14-9980-44a94790f76d","type":"BasicTicker"}},"id":"3ab13a17-7e7b-4883-9f73-23b9137aeb58","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6af28a72-9588-49fd-a070-abd69fbb8c4d","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"26e86061-aba8-4054-8eb6-518d9aa63ca5","type":"Title"},{"attributes":{"overlay":{"id":"9ce93182-8a6a-47fa-b484-e46e0c6a9ddb","type":"BoxAnnotation"}},"id":"193d27d6-f51f-43cc-9f7e-0187f8ec95dc","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d00e29dc-25c4-4a9b-a265-9b1eeb890296","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c9850a8e-c963-4275-afa1-0db2d2c44b5c","type":"PanTool"},{"id":"3c848dcd-c64a-4070-a464-7b5acba1a49f","type":"WheelZoomTool"},{"id":"193d27d6-f51f-43cc-9f7e-0187f8ec95dc","type":"BoxZoomTool"},{"id":"1ae60eaa-0134-40bd-b1ea-2ffb70d65b49","type":"SaveTool"},{"id":"84499dfa-d5c7-4f85-84c3-24d2439cac98","type":"ResetTool"},{"id":"efa4c391-d1a7-489a-9c1a-d4da1121ae84","type":"HelpTool"}]},"id":"671827f3-b529-4e75-8a82-faccf23dc057","type":"Toolbar"}],"root_ids":["5a2e1671-97ee-4031-a99c-557315402e68"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8563d8b8-1459-4dc3-a1ca-db8039c900b6","elementid":"a0c2abb1-fee8-487a-a759-fd8595e2523d","modelid":"5a2e1671-97ee-4031-a99c-557315402e68"}];
                
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
